---
date: 2025-09-12
category:
  - LLM
tag:
  - 大模型
  - RAG
  - 检索增强生成

---

# RAG方法与思路总结（2025.9）

# 0 基本流程回顾

知识库-向量化（文本切块）

查询-向量化-召回（查询重写，关键词和语义的混合检索，结构化知识表示与召回，召回结果的重排序）

上下文学习-生成（预设提示词，temperature）

# 1 关键点记录

## 1.1 代码code的RAG

常见的切分方法：按照函数块切分，按照内部的逻辑块例如循环切分，混合切分并使用部分重叠。

以上的切分方法会导致无关内容的合并，以及现有语义的断裂。

改进的方法：借助抽象语法树AST，对代码分块，保留语法结构，递归分块，并在大小限制下合并兄弟节点

https://github.com/yilinjz/astchunk

另一个项目：基于图的代码RAG https://github.com/vitali87/code-graph-rag

能解决的问题：检索代码中符合要求的片段，可能用于帮助理解一个项目。

**对比：cursor对于项目代码的理解**

结构化代码解析（AST、符号表、依赖包关系分析）+文档切分策略优化+向量化与数据库存储+混合检索重排序与生成。本质上是对代码分块，根据问题召回代码块辅助生成。

cursor如何回答关于项目结构的问题？结构化表示项目目录，搜索可能存在的readme文档

### Cursor的代码库索引

https://mp.weixin.qq.com/s/QAV5dTNBbBqeUfMP6qAN5A

https://read.engineerscodex.com/p/how-cursor-indexes-codebases-fast，主要思想还是利用Merkle树快速索引代码库。Merkle树是一种树形结构，其中每个“叶”节点都标记有数据块的加密哈希值，每个非叶节点都标记有其子节点标签的加密哈希值，这种结构创建了一个分层结构。

Cursor首先在本地将代码库文件分割成语义上有意义的块，启用代码库索引时，Cursor会扫描编辑器中打开的文件夹，并计算所有有效文件的哈希值的Merkle树。代码块被发送到Cursor的服务器后，会使用OpenAI的嵌入API或自定义嵌入模型生成嵌入。但是，还是老问题，代码库索引的有效性在很大程度上取决于代码是如何被分割的。

在工具上，可以使用像tree-sitter这样的工具来进行AST解析，它支持多种编程语言。

《**[代码RAG第二弹：代码类的GraphRAG怎么做？一个示例项目](https://mp.weixin.qq.com/s?__biz=MzAxMjc3MjkyMg==&mid=2648421306&idx=1&sn=ac93f33cc8e1aa6a9b1722c2534b2554&scene=21#wechat_redirect)**》

## 1.2 多模态GraphRAG

https://mp.weixin.qq.com/s/UtSjX_D2k-Cp7iJT-CNqtQ

创新点：多模态大模型用于数据合成和数据增强（对现有数据集的裁剪、旋转等）

以文档为中心的多模态GraphRAG，依赖于底层知识库MultimodalDocGraph。文档场景下的问题：引用“见表1”需要链接当前文本块和图表，可以采用知识图谱的实体链接。因此，需要将知识图谱拓展到多模态元素。实现过程中，图片，表格，公式都可以被进一步文本化。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/fUBU1yiaEmJj1lNlicSZMWmdunBBGyCt7ayTf8HIFFFbMLjSISibGxY9daGpdWKg95libNI5adnrMCCVibmkc2gBbPQ/640?wx_fmt=png&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

开源项目实现 https://github.com/HKUDS/RAG-Anything

代码实现效果：

- 文档处理方式不合理，速度慢：所有的类型的文档都可以接受，统一转成IMG和PDF（即使是纯文本），并借助MinerU进行处理。图像、表格、方程分别用不同的方法解析，图像统一base64编码。
- 实体与图像实体存在一对多关系，容易造成较大的噪声；
- 框架较大，难评用处大小

图谱构建过程：

1. chunk切分
2. 文本chunk使用命名实体识别、关系抽取等提取关键信息，构造**<entity, rel, entity>**
3. 图像等作为模态实体（modal_entity），借助视觉模型分析文本与图像的关系，建立连接
   1. **`<entity, belongs_to, modal_entity>`** 文本与模态实体的关联
   2. **`<chunk, related_to, modal_entity>`** chunk与模态实体
   3. **`<entity, locate_in, chunk>`** 实体与chunk
4. 最终图谱包括三类节点，以及以上四个主要关系边

**文档为中心的多模态GraphRAG及MultimodalDocGraph是个很好的故事，这个可以讲一个比较好的故事，多模态、kg、文档解析、rag都通了。😊**

## 1.3 Deep Research进展

商业与非商业的实现的总结 https://arxiv.org/pdf/2506.12594

现有的开源agent框架 https://github.com/scienceaix/deepresearch

涉及到的组成部分：

- 基座与推理模型（上下文管理，记忆，CoT，ToT）
- 任务规划与执行（任务分解，层级规划，自动执行与监控，多agent协同）
- 工具使用与环境交互（网页导航与交互，内容处理，API调用，领域特定tool使用）
- 知识生成（结果评估，来源认证，生成结构化报告，交互）

实现架构：

1. 单体式，以核心推理引擎集中控制
2. 流水线式，定义严格的工作流和各阶段之间的接口与数据格式
3. 多智能体式，设计明确的通信协议，进行不同角色和责任的多智能体协作
4. 混合模式

评估要点：基础模型，推理效率，上下文长度，工具集成与环境适应性，任务规划与执行稳定性，知识聚合与输出质量，不同场景的适应性（学术研究，企业决策，个人知识管理）

待解决的问题：隐私，知识产权，可访问性

未来研究方向：高级推理架构，多模态集成，领域特化，基于人机协作的标准化

## 1.4 Embedding模型进展

https://mp.weixin.qq.com/s/HYd2EkU01O3IgQn2ENaEkw

传统embedding模型固定向量维度输出，参数量小。

从Nvidia的NV-Embed到jina-v4，embedding模型主逐渐转向：

- 单模态-多模态
- 单一向量-多向量
- 固定维度-自定义维度
- 小模型-大模型

并且，开始使用合成数据等方式挖掘难样本，并针对特定任务补充能力项。

**对比Qwen3系列embedding模型和reranker模型：**

|              | Embedding              | Reranker                                  |
| ------------ | ---------------------- | ----------------------------------------- |
| 处理数据类型 | 单个文本转化为语义向量 | 文本对（查询和文档），输出相关性分数      |
| 模型架构     | 双编码器架构           | 交叉编码器，对query和文档联合编码（极慢） |
| 技术基础     | 基于大语言模型         | 基于大语言模型                            |

训练过程：构造数据-lora微调-模型合并

RAG流程：

- 预处理：知识库切块，利用embedding模型向量化
- RAG：问题向量化，余弦相似度匹配初步召回，重排序top-n，合并查询上下文构造prompt，生成

## 1.5 文档智能专题

https://mp.weixin.qq.com/s/QAV5dTNBbBqeUfMP6qAN5A

文档解析可以使用单独的多模态大模型进行解析，也可以构建工作流，进行布局分析，文本提取。继续做差异性可以在于：跨页图表/段落的合并。跨页文档，甚至有专门的数据集由于评测。需要判断以下问题：

- 文档问题回答失败的核心，是否是跨页导致的
- 为了解决跨页问题导致的时间开销是否有必要

过去的典型项目：https://mp.weixin.qq.com/s/5852Kn8wVlsSGpclrjkBNA，涉及RAGflow，MinerU等， 提供了很多细节的文档解析功能。


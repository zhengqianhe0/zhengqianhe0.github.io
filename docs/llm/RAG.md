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


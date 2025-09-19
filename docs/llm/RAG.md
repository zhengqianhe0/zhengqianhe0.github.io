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

### 一个趋势：小参数的embedding模型

Google的Embedding Gemma-308M模型，支持100+语言，输出嵌入维度大小可选。

3.08亿个参数，1亿模型参数，2亿嵌入参数。

- 嵌入参数指的是“词表大小V×嵌入维度D”
  - 嵌入维度指的是输入嵌入的维度，即初始文本的每个token初步处理成高维向量时的维度

⚠**目前尺寸更长、维度可定义、模型更小、数据更多样化、特定任务特定instruction的趋势逐步成为标配**。

**使用案例**：

1. 文本
2. 分词token
3. 初始嵌入
4. transformer捕捉上下文关系生成深层表示
5. 对token级向量均值池化（特征压缩），聚合成单一的上下文向量。原始每个token都有一个1×768维的向量表示，通过按句子压缩，每一个token的同一维度被聚合，得到对于句子的1×768维向量。好处：高校、防止过拟合，无论句子有多少token向量表示维度都一致。
6. 通过全连接层生成指定的输出维度

小模型应用场景：高响应速度需求、端侧部署

## 1.5 文档智能专题

https://mp.weixin.qq.com/s/QAV5dTNBbBqeUfMP6qAN5A

文档解析可以使用单独的多模态大模型进行解析，也可以构建工作流，进行布局分析，文本提取。继续做差异性可以在于：跨页图表/段落的合并。跨页文档，甚至有专门的数据集由于评测。需要判断以下问题：

- 文档问题回答失败的核心，是否是跨页导致的
- 为了解决跨页问题导致的时间开销是否有必要

过去的典型项目：https://mp.weixin.qq.com/s/5852Kn8wVlsSGpclrjkBNA，涉及RAGflow（企业级领域知识库RAG问答工作流搭建解决方案），MinerU（专长于PDF分析）等， 提供了很多细节的文档解析功能。

### 数据构建

文档解析模型，布局检测、多模态解析模型，都可以用到大模型训练语料的处理当中。

https://mp.weixin.qq.com/s/idPm-boNEsZtMaNOXJJe9A

https://huggingface.co/datasets/HuggingFaceFW/finepdfs

构造过程中集成了OCR，布局检测，语言识别，hash去重，姓名隐私化处理等，还训练了单独的xgboost模型用于需求检测与分类。

## 1.6 多模态RAG

https://mp.weixin.qq.com/s/BbT0XCGbjwJ6mXb2EuVyGg

做多模态RAG需要有多模态Embedding模型，例如ColBERT（本身是文本embed），ColPali。

以上的传统解决方案存在局限性：

- 检索结果是页面级的，没法分析页面的具体内容
- ColBERT依赖于文本信息，对文本中的数值信息解析能力差
- 框架M3DocRAG，能够结合文本和图像信息，但缺乏信息的细致提取，和跨模态整合能力

因此，尝试使用agent解决，https://arxiv.org/pdf/2503.13964，https://github.com/aiming-lab/MDocAgent，多模态多智能体框架，利用文本和图像信息来提高文档问答的准确性。

**MDocAgent**：

- 设计五个由prompt驱动的agent（初步生成，提取关键信息，文本处理，图像处理，综合智能体整合），**ColBERTv2和ColPali**分别作为文本和图像检索器
- 文档智能方面，还是使用OCR+PDF解析提取文本，按页保存为图像，生成文本和视觉表示
- 实现过程中，分别用两个检索器进行检索，agent各自分工处理文本和多模态，最终整合

### 评估数据集

#### Double-Bench

https://arxiv.org/pdf/2508.03644

多模态文档检索数据集，单跳/多跳，多语言，多类文档

数据构建过程是亮点：：原始文档经过粗粒过滤（10-50页，使用GPT-4o进行语言验证），然后使用Docling和MinerU等工具进行模态分解，将每页拆分为构成文本、表格和图形组件，然后生成单跳查询，同时额外构建知识图谱，以辅助多跳查询的生成。这个点值得借鉴，**做多跳数据生成，还是使用知识图谱来做中间辅助。**

很棒的一篇多模态数据集工作：

- embedding模型选型（文本+多模态）
- MLLM选型
- 评测了文档多模态RAG框架（**MDocAgent**、**ViDoRAG**、**M3DOCRAG**、**Colqwen-gen**）

⚠**框架的回答准确性与检索准确性高度相关**，Colqwen-gen（强检索+简单生成）的多跳回答正确率接近复杂框架MDocAgent，证明“优化检索阶段”比“设计复杂生成流程”更关键；

**主流框架（如MDocAgent、ViDoRAG）倾向“有问必答”**，即便未检索到证据，仍生成推测性内容，过度自信。复杂框架（MDocAgent、ViDoRAG）因多智能体串行协调，推理时间是Colqwen-gen的4倍左右。

### 一个小专题：非标准印刷体/问题图像的文档解析

几何弯曲、阴影、污渍等变化直接影响layout与ocr的效果

前沿的方案可以看《**DocRes: A Generalist Model Toward Unifying Document Image Restoration Task**s》，代码在：https://github.com/ZZZHANG-jx/DocRes/tree/master，https://arxiv.org/pdf/2405.04408

其意义在于提出一个统一了**五种文档图像还原任务的通用模型，包括去扭曲、去阴影、外观增强、去模糊和二值化**。<u>方法上，采用自行构建的一个模型。</u>

其他图像增强的文档处理整合

https://github.com/ZZZHANG-jx/Recommendations-Document-Image-Processing

## 1.7 prompt工程

RAG落地过程中prompt也是很重要的一环。

https://github.com/asgeirtj/system_prompts_leaks/  各大主流大模型的系统提示词

提示词的历史发展：

- zero-shot-CoT： Let's think step by step
- optimizers： Take a deep breath and work on this problem step-by-step
- emotion prompt： Are you sure？ This is very important to me.
  - PUA类：你确定？相信你的能力。你要将这个困难挑战视为成长机会

### 腾讯混元 PromptEnhancer

https://www.arxiv.org/pdf/2509.04545

针对性的训练一个文生图prompt改写的模型

1. 模型蒸馏：构造高质量训练集图片，先生成简短caption，再借助Gemini生成CoT和多个候选prompt结果
2. 训练解读那，先做SFT，再做GRPO强化

评估不好做，拉维度来凑，所以设计了一个**包含24个细粒度关键点的分类体系，关键点被组织成六个主要类别**，涵盖包括：**语言和语法理解**，评估对否定等核心语言结构的解释；**视觉属性**，关注对象数量等渲染属性；**动作和互动**，衡量动态状态的表现；关系和组合结构，评估复杂场景的处理；以及由**知识和想象力以及图像内文本和布局所涵盖的更高层次能力**。

总结：**无论是做改写，还是做生成，都是需要有反馈，有reward，先sft，后grpo做强化，是目前常用策略**。

## 1.8 Memory上下文管理

对于agent，常见的上下文管理包括：

- 短期记忆：系统提示词+顺序存储完整上下文+用户问题
- 长期记忆：控制聊天记录长度做为短期内存，单独存储长期内存进行管理并检索相关记忆（效率会变低，但可以进行用户定制，跨越多个对话和历史对话）

- update类：针对memory管理使用curd操作。没出现过的加入，出现过有矛盾的要删除旧的，同一方向有补充的要更新，本质上是基于语义做RAG。如果还不够，在做知识图谱的实体与关系抽取。例子参考mem0：http://arxiv.org/pdf/2504.19413

记忆管理的榜单：https://github.com/NevaMind-AI/memU memu方法准确度最高，但单词检索需要1s，更不用说需要把检索结果用于大模型再生成内容。

## 1.9 RAG+科研：UltraRAG

https://mp.weixin.qq.com/s/LEtuEKtZyiUqd1pdHW1XBA

https://github.com/OpenBMB/UltraRAG

定位：基于MCP架构设计的 “面向科研的RAG实验加速器”

使用方法：利用现有的组件，编写yaml配置文件，实现串行并行，分支循环，内置常用数据集

## 1.10 GraphRAG的应用与落地

集成式RAG框架，https://github.com/apecloud/ApeRAG/ 在lightRAG（实体抽取、关系抽取、实体合并）基础上，使用了向量搜索和全文关键词搜索，并且以MinerU辅助进行文档解析。整体上是工程的优化，例如实现了知识图谱的隔离，可以做多租户。

GraphRAG落地的工程难题：

- 实体关系抽取时需要用LLM对文本块逐个调用大模型，而且初步抽取后可能还需要动态判断是否需要补充
- 知识图谱的隔离管理
- 实体合并与去重的准确性挑战，需要强大的上下文理解能力，尤其在专业领域内不能出错
- 依赖项较多：MinerU，LLM，图数据库，向量数据库，全文搜索引擎

### 专题：知识抽取时的schema

Schema 指的是对图中实体（Entity）、关系（Relation）和属性（Attribute）的预先定义的结构化模式或本体（Ontology）。抽取前，事先明确定义好允许的实体类别（如 Person, Organization, Product）和关系类型（如 works_for, located_in, develops），抽取过程必须遵循这个预设框架。

因此，schema是一个工程化的解决方案。如果由专家预设的schema，覆盖足够全，则效果很好。但需要专家人工检查的成本，如果漏掉关键信息无法补充。

为什么主流GraphRAG（如LightRAG）选择“无Schema”？因为graphrag中的kg，其实作用做bridge的作用，也就是做锚点用，所以要尽可能的多，也无需要太多限制。GraphRAG并不追求构建一个完美的、可用于独立问答的知识库，而是服务于**下游检索任务**。只要这些节点能帮助用户从A跳到C（即使B有点噪声），它的目的就达到了。

### 召回时的动态top-k

https://mp.weixin.qq.com/s/ahK2XkDp9WsmocuBA6OnDg 或许是可落地的

https://arxiv.org/pdf/2509.04820 传统top-k策略容易遗漏关键片段

两个策略：

1. 在token预算内尽可能多选择相关片段，然后再基于片段元信息（关键词、时间等）过滤，再补充实体相关片段，再利用LLM对现有片段的冗余进行裁剪和压缩，保留关键信息。核心策略是权衡，相关性的chunk占token过多，也不能贪多选很多低相关片段。
2. 使用agentic RAG多轮动态检索。

成本可控，简单补丁，贴近落地。

## 1.11 RAG加速

Meta的工作，REFRAG（REpresentation For RAG）RAG解码框架，用了一个“压缩-感知-扩展”策略减少冗余计算，为工程策略。

## 1.12 Chunk切分策略

Is Semantic Chunking Worth the Computational Cost?  https://arxiv.org/pdf/2410.13070

论文通过实验证明了语义分块并不一定比固定分块效果好。

技术总结：https://weaviate.io/blog/chunking-strategies-for-rag

主要分为两大类：

- 预分块：向量化之前，对原始文档分块，提前决定块的大小和边界。优点在于提前建立好了索引，检索时效率高。
- 后分块：对于整个文档进行嵌入，在接收到查询时再对文档分块。通过缓存机制，存储分块结果，因此查询可以有动态性，分块策略具有上下文感知能力，但是效率相对低。

通用分块策略：

1. 固定大小：基于token分块，设置max-token，通过重叠overlap缓解完整性
2. 递归分块：基于现有的自然分隔符分块，如果有的块过长则递归分成更小的
3. 基于文档结构：按照标题、章节、段落、代码块等
4. 语义分块：先分句，然后按照嵌入向量的余弦相似度，相邻的句子如果高于相似度阈值则分为一块。
5. 大模型分块：直接让大模型把文本编程list。需要较长的上下文窗口
6. agentic分块：动态路由，根据文章特点选择不同的分块策略
7. 后分块：先嵌入文档，块的嵌入表示=块内的token的平均值。理想状况下，每个块的表示都代表了整个文档的上下文。
8. 层次分块：和文档结构很像，但更需要层次的依赖关系，不只依赖文件格式（第一段，第二段），还依赖章节结构（摘要，引言，方法）
9. adaptive：根据文档的内容动态调整参数（如chunk大小，overlap大小）。需要专门的模型判断，较少用

## 1.13 RAG+信息论

结合信息论计算RAG召回过程中的理论上界（数学基础）。目标：召回的top-k，定这个k，使得总信息量最大

**Chunk相关性最大化的动态TOP-K策略** https://arxiv.org/pdf/2509.04820

### **信息增益** 

https://arxiv.org/pdf/2509.12765

核心思想：相似度高的不一定对于生成结果有用，以信息量训练一个重排序模型

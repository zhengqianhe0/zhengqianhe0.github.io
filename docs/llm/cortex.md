---
date: 2025-09-02
category:
  - LLM
tag:
  - 大模型
  - MoE
  - 强化学习

---

# Cortex项目学习

## 1 配置与启动

从modelscope下载训练好的模型。

Model: Cotex-0.6B-A0.2B

后端技术点：Bottle服务，模型加载

大模型技术点：微调



## 附录

### A 前端技术点

- 样式

  - tailwind css 用于快速构建响应式布局
  - 其他通过cdn引入的前端辅助库：google font，KaTeX，marked.js，highlight.js

  - style段（css）既有自定义的样式类，也有对其他js库的覆盖样式

- 前后端交互
  - fetch api发送post请求到后端
    - 框架下使用axios封装成api对象，进行响应与请求的拦截
  - 使用SSE处理流式响应

- 页面交互
  - 表单交互（<form id="chat-form">）和输入控件（<textarea>、<input type="range">）。
  - 自定义样式，如滚动条，动画，过渡
- JavaScript ES6
  - DOM操作（document.addEventListener, getElementById）
  - 异步编程 async await
  - html模板字符串 insertAdjacentHTML与innerHTML

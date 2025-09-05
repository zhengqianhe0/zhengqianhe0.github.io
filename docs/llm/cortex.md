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
  - 表单交互`<form id="chat-form">`和输入控件`<textarea>、<input type="range">`。
  - 自定义样式，如滚动条，动画，过渡
- JavaScript ES6
  - DOM操作（document.addEventListener, getElementById）
  - 异步编程 async await
  - html模板字符串 insertAdjacentHTML与innerHTML

### B 网络相关的现象

服务运行在linux服务器上。启动时需注意：

```
# 0.0.0.0表示允许外部任何ip访问，127.0.0.1表示只允许本机ip访问，但不限制ssh转发
$ netstat -tuln | grep 8081
tcp        0      0 0.0.0.0:8081            0.0.0.0:*               LISTEN  

# 判断防火墙是否启动，未启动则不会对外部ip进行限制
$ sudo ufw status
Status: inactive
```

在windows主机运行如下命令，判断8080端口是否被占用。当启动后，该端口默认开始转发。

```
netstat -an | findstr 127.0.0.1:8080
```

浏览器无法直接访问，因为没有像ssh一样强制配置流量走代理。

打开TUN模式后即可直接通过ip+端口访问服务器上的内容。

- **TUN模式**：通过虚拟网卡接管系统级接管所有流量（包括浏览器、系统进程等），无需手动给应用配代理。
- **规则模式**：按预设规则（IP / 域名等）分流，匹配规则的走代理，否则直连。
- **全局模式**：所有流量强制走代理。
- **直连模式**：所有流量不经过代理，直接连接目标。

为什么clash+脚本能够访问内网服务器？

- 脚本的配置
  - **第一步：定义内网专用代理节点（prependProxyies）**
    脚本添加了 `BISTU-CETC` 这个 SS 代理节点，其服务器地址 `alzjk.jp.bistucetc.com` 和端口、密码等信息。
  - **第二步：创建代理分组（prependProxyGroups）**
    脚本创建 `BISTU` 分组，类型为 “select”，仅包含 `BISTU-CETC` 和 `REJECT`（拒绝）两个选项。所有匹配该分组的流量，只会走 `BISTU-CETC` 代理（或被拒绝），确保内网流量 “专用专走”。
  - **第三步：绑定 IP 与代理分组（prependRules）**
    脚本添加规则 `IP-CIDR,10.146.58.232/32,BISTU`，核心作用是：
    **“所有访问 10.146.58.232（你的内网服务器 IP）的流量，强制路由到 BISTU 分组，即通过 BISTU-CETC 代理节点转发”**。

- 具体访问时的流程
  - **流量触发规则匹配**
    无论你是通过浏览器直接访问，还是通过 SSH 隧道转发（VSCode 的端口转发），只要流量目标是 `10.146.58.232`，就会被 Clash 捕获（若开 TUN 模式则自动捕获所有流量，非 TUN 模式需应用手动配代理）。
  - **Clash 执行脚本定义的规则**
    Clash 检测到目标 IP 匹配 `IP-CIDR,10.146.58.232/32` 规则，按脚本配置将流量导向 `BISTU` 分组。
  - **通过专用代理打通内网**
    `BISTU` 分组选择 `BISTU-CETC` 代理节点，将你的访问流量通过该节点转发到内网。

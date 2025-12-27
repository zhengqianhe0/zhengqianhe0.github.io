import{_ as n,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_679-24-点游戏" tabindex="-1"><a class="header-anchor" href="#_679-24-点游戏"><span><a href="https://leetcode.cn/problems/24-game/" target="_blank" rel="noopener noreferrer">679. 24 点游戏</a></span></a></h1><p>给定一个长度为4的整数数组 <code>cards</code> 。你有 <code>4</code> 张卡片，每张卡片上都包含一个范围在 <code>[1,9]</code> 的数字。您应该使用运算符 <code>[&#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;]</code> 和括号 <code>&#39;(&#39;</code> 和 <code>&#39;)&#39;</code> 将这些卡片上的数字排列成数学表达式，以获得值24。</p><p>你须遵守以下规则:</p><ul><li><p>除法运算符</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&#39;/&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>表示实数除法，而不是整数除法。</p><ul><li>例如， <code>4 /(1 - 2 / 3)= 4 /(1 / 3)= 12</code> 。</li></ul></li><li><p>每个运算都在两个数字之间。特别是，不能使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">“-”</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>作为一元运算符。</p><ul><li>例如，如果 <code>cards =[1,1,1,1]</code> ，则表达式 <code>“-1 -1 -1 -1”</code> 是 <strong>不允许</strong> 的。</li></ul></li><li><p>你不能把数字串在一起</p><ul><li>例如，如果 <code>cards =[1,2,1,2]</code> ，则表达式 <code>“12 + 12”</code> 无效。</li></ul></li></ul><p>如果可以得到这样的表达式，其计算结果为 <code>24</code> ，则返回 <code>true </code>，否则返回 <code>false</code> 。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: cards = [4, 1, 8, 7]</span>
<span class="line">输出: true</span>
<span class="line">解释: (8-4) * (7-1) = 24</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: cards = [1, 2, 1, 2]</span>
<span class="line">输出: false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>cards.length == 4</code></li><li><code>1 &lt;= cards[i] &lt;= 9</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>核心思路 每次从剩余牌中取两张牌，执行计算，合并成一张新牌。所以每次计算后会减少一张牌，得到一个新的数组 newCards。用 newCards 递归调用 judgePoint24，直到只剩一张牌。判断这张牌的数字是否等于 24。 细节 一共有六种运算方式：加减乘除，其中减和除有两种不同的顺序。</p><p>设参与运算的两个数为 x 和 y，那么有 6 种运算方式：</p><p>注意除法需要保证分母不为 0。</p><p>有两种方法实现除法：浮点数、分数类。用浮点数，会有舍入误差。但本题只有 4 张牌，舍入误差不大，取 ϵ=10−9足矣。如果两数绝对差小于 ϵ，则认为两数相等。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    const double EPS=1e-9;</span>
<span class="line">    bool dfs(vector&lt;double&gt;&amp; cards){</span>
<span class="line">        int n=cards.size();</span>
<span class="line">        if(n==1){</span>
<span class="line">            return abs(cards[0]-24)&lt;EPS;</span>
<span class="line">        }</span>
<span class="line">        // 选两张牌执行合并</span>
<span class="line">        for(int i=0;i&lt;n;i++){</span>
<span class="line">            double x=cards[i];</span>
<span class="line">            for(int j=i+1;j&lt;n;j++){</span>
<span class="line">                double y=cards[j];</span>
<span class="line">                // 有序的六种合并方式</span>
<span class="line">                vector&lt;double&gt; candidates={x+y,x-y,y-x,x*y};</span>
<span class="line">                if(abs(y)&gt;EPS){</span>
<span class="line">                    candidates.push_back(x/y);</span>
<span class="line">                }</span>
<span class="line">                if(abs(x)&gt;EPS){</span>
<span class="line">                    candidates.push_back(y/x);</span>
<span class="line">                }</span>
<span class="line">                // 删除操作后的j，替换i</span>
<span class="line">                auto new_cards=cards;</span>
<span class="line">                new_cards.erase(new_cards.begin()+j);</span>
<span class="line">                for(double res:candidates){</span>
<span class="line">                    new_cards[i]=res;</span>
<span class="line">                    if(dfs(new_cards)){</span>
<span class="line">                        return true;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line"></span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return false;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    bool judgePoint24(vector&lt;int&gt;&amp; cards) {</span>
<span class="line">        vector&lt;double&gt; a(cards.begin(),cards.end());</span>
<span class="line">        return dfs(a);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(1)，总数为24点所有的可能情况，是常数</li><li>空间复杂度：O(1)</li></ul>`,19)]))}const p=n(l,[["render",d]]),t=JSON.parse(`{"path":"/leetcode/20250818.html","title":"679. 24 点游戏","lang":"zh-CN","frontmatter":{"date":"2025-08-18T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","回溯"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"fe2a10a5f6b6491fd766725e58f848fa2a6b36e4","time":1755485952000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250818.md","excerpt":"\\n<p>给定一个长度为4的整数数组 <code>cards</code> 。你有 <code>4</code> 张卡片，每张卡片上都包含一个范围在 <code>[1,9]</code> 的数字。您应该使用运算符 <code>['+', '-', '*', '/']</code> 和括号 <code>'('</code> 和 <code>')'</code> 将这些卡片上的数字排列成数学表达式，以获得值24。</p>\\n<p>你须遵守以下规则:</p>\\n<ul>\\n<li>\\n<p>除法运算符</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">'/'</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><p>表示实数除法，而不是整数除法。</p>\\n<ul>\\n<li>例如， <code>4 /(1 - 2 / 3)= 4 /(1 / 3)= 12</code> 。</li>\\n</ul>\\n</li>\\n<li>\\n<p>每个运算都在两个数字之间。特别是，不能使用</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">“-”</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><p>作为一元运算符。</p>\\n<ul>\\n<li>例如，如果 <code>cards =[1,1,1,1]</code> ，则表达式 <code>“-1 -1 -1 -1”</code> 是 <strong>不允许</strong> 的。</li>\\n</ul>\\n</li>\\n<li>\\n<p>你不能把数字串在一起</p>\\n<ul>\\n<li>例如，如果 <code>cards =[1,2,1,2]</code> ，则表达式 <code>“12 + 12”</code> 无效。</li>\\n</ul>\\n</li>\\n</ul>"}`);export{p as comp,t as data};

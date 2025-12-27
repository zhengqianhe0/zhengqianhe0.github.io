import{_ as e,c as s,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function c(d,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_3100-换水问题-ii" tabindex="-1"><a class="header-anchor" href="#_3100-换水问题-ii"><span><a href="https://leetcode.cn/problems/water-bottles-ii/" target="_blank" rel="noopener noreferrer">3100. 换水问题 II</a></span></a></h1><p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> 。</p><p><code>numBottles</code> 代表你最初拥有的满水瓶数量。在一次操作中，你可以执行以下操作之一：</p><ul><li>喝掉任意数量的满水瓶，使它们变成空水瓶。</li><li>用 <code>numExchange</code> 个空水瓶交换一个满水瓶。然后，将 <code>numExchange</code> 的值增加 1 。</li></ul><p>注意，你不能使用相同的 <code>numExchange</code> 值交换多批空水瓶。例如，如果 <code>numBottles == 3</code> 并且 <code>numExchange == 1</code> ，则不能用 <code>3</code> 个空水瓶交换成 <code>3</code> 个满水瓶。</p><p>返回你 <strong>最多</strong> 可以喝到多少瓶水。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2024/01/28/exampleone1.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numBottles = 13, numExchange = 6</span>
<span class="line">输出：15</span>
<span class="line">解释：上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2024/01/28/example231.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numBottles = 10, numExchange = 3</span>
<span class="line">输出：13</span>
<span class="line">解释：上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= numBottles &lt;= 100 </code></li><li><code>1 &lt;= numExchange &lt;= 100</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxBottlesDrunk(int numBottles, int numExchange) {</span>
<span class="line">        int ans=numBottles,empty=numBottles;</span>
<span class="line">        while(empty&gt;=numExchange){</span>
<span class="line">            empty-=numExchange; </span>
<span class="line">            numExchange++;  // 模拟法，在昨天的基础上加一个交换数会增加</span>
<span class="line">            ans++;</span>
<span class="line">            empty++;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 附：公式法 O(1)</span>
<span class="line">n−((e−1)+e+(e+1)+⋯+(e+k−2))&lt;e+k</span>
<span class="line">k²+(2e−1)k−2(n−e)&gt;0</span>
<span class="line">求根公式求k&gt;x1，根据二次函数特点，要大于x1再加1后取整</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numWaterBottles(int numBottles, int numExchange) {</span>
<span class="line">        return numBottles + (numBottles - 1) / (numExchange - 1);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxBottlesDrunk(int n, int e) {</span>
<span class="line">        int b = e * 2 - 1;</span>
<span class="line">        int k = ((int) sqrt(b * b + (n - e) * 8) - b + 2) / 2;</span>
<span class="line">        return n + k;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(√b)， b会线性增多，求和是n²级，作为循环判断条件对应复杂度为平方根级</li><li>空间复杂度：O(1)</li></ul>`,18)]))}const p=e(i,[["render",c]]),r=JSON.parse('{"path":"/leetcode/20251002.html","title":"3100. 换水问题 II","lang":"zh-CN","frontmatter":{"date":"2025-10-02T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","模拟"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251002.md","excerpt":"\\n<p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> 。</p>\\n<p><code>numBottles</code> 代表你最初拥有的满水瓶数量。在一次操作中，你可以执行以下操作之一：</p>\\n<ul>\\n<li>喝掉任意数量的满水瓶，使它们变成空水瓶。</li>\\n<li>用 <code>numExchange</code> 个空水瓶交换一个满水瓶。然后，将 <code>numExchange</code> 的值增加 1 。</li>\\n</ul>\\n<p>注意，你不能使用相同的 <code>numExchange</code> 值交换多批空水瓶。例如，如果 <code>numBottles == 3</code> 并且 <code>numExchange == 1</code> ，则不能用 <code>3</code> 个空水瓶交换成 <code>3</code> 个满水瓶。</p>"}');export{p as comp,r as data};

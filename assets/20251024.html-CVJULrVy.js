import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2048-下一个更大的数值平衡数" tabindex="-1"><a class="header-anchor" href="#_2048-下一个更大的数值平衡数"><span><a href="https://leetcode.cn/problems/next-greater-numerically-balanced-number/" target="_blank" rel="noopener noreferrer">2048. 下一个更大的数值平衡数</a></span></a></h1><p>如果整数 <code>x</code> 满足：对于每个数位 <code>d</code> ，这个数位 <strong>恰好</strong> 在 <code>x</code> 中出现 <code>d</code> 次。那么整数 <code>x</code> 就是一个 <strong>数值平衡数</strong> 。</p><p>给你一个整数 <code>n</code> ，请你返回 <strong>严格大于</strong> <code>n</code> 的 <strong>最小数值平衡数</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 1</span>
<span class="line">输出：22</span>
<span class="line">解释：</span>
<span class="line">22 是一个数值平衡数，因为：</span>
<span class="line">- 数字 2 出现 2 次 </span>
<span class="line">这也是严格大于 1 的最小数值平衡数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 1000</span>
<span class="line">输出：1333</span>
<span class="line">解释：</span>
<span class="line">1333 是一个数值平衡数，因为：</span>
<span class="line">- 数字 1 出现 1 次。</span>
<span class="line">- 数字 3 出现 3 次。 </span>
<span class="line">这也是严格大于 1000 的最小数值平衡数。</span>
<span class="line">注意，1022 不能作为本输入的答案，因为数字 0 的出现次数超过了 0 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 3000</span>
<span class="line">输出：3133</span>
<span class="line">解释：</span>
<span class="line">3133 是一个数值平衡数，因为：</span>
<span class="line">- 数字 1 出现 1 次。</span>
<span class="line">- 数字 3 出现 3 次。 </span>
<span class="line">这也是严格大于 3000 的最小数值平衡数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 106</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>枚举</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    bool isBalance(int x) {</span>
<span class="line">        vector&lt;int&gt; count(10);</span>
<span class="line">        while (x &gt; 0) {</span>
<span class="line">            count[x % 10]++;</span>
<span class="line">            x /= 10;</span>
<span class="line">        }</span>
<span class="line">        for (int d = 0; d &lt; 10; ++d) {</span>
<span class="line">            if (count[d] &gt; 0 &amp;&amp; count[d] != d) {</span>
<span class="line">                return false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    int nextBeautifulNumber(int n) {</span>
<span class="line">        for (int i = n + 1; i &lt;= 1224444; ++i) {</span>
<span class="line">            if (isBalance(i)) {</span>
<span class="line">                return i;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(c-n)</li><li>空间复杂度：O(1)</li></ul>`,16)]))}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251024.html","title":"2048. 下一个更大的数值平衡数","lang":"zh-CN","frontmatter":{"date":"2025-10-24T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["哈希表","枚举","数学"]},"headers":[],"git":{"updatedTime":1761704241000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"81919479e8539e8d2389317ae4c774b0a7212f3e","time":1761704241000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251024.md","excerpt":"\\n<p>如果整数 <code>x</code> 满足：对于每个数位 <code>d</code> ，这个数位 <strong>恰好</strong> 在 <code>x</code> 中出现 <code>d</code> 次。那么整数 <code>x</code> 就是一个 <strong>数值平衡数</strong> 。</p>\\n<p>给你一个整数 <code>n</code> ，请你返回 <strong>严格大于</strong> <code>n</code> 的 <strong>最小数值平衡数</strong> 。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：n = 1</span>\\n<span class=\\"line\\">输出：22</span>\\n<span class=\\"line\\">解释：</span>\\n<span class=\\"line\\">22 是一个数值平衡数，因为：</span>\\n<span class=\\"line\\">- 数字 2 出现 2 次 </span>\\n<span class=\\"line\\">这也是严格大于 1 的最小数值平衡数。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,t as data};

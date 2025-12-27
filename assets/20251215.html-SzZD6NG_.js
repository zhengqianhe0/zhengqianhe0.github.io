import{_ as e,c as n,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function r(c,s){return a(),n("div",null,s[0]||(s[0]=[i(`<h1 id="_2110-股票平滑下跌阶段的数目" tabindex="-1"><a class="header-anchor" href="#_2110-股票平滑下跌阶段的数目"><span><a href="https://leetcode.cn/problems/number-of-smooth-descent-periods-of-a-stock/" target="_blank" rel="noopener noreferrer">2110. 股票平滑下跌阶段的数目</a></span></a></h1><p>给你一个整数数组 <code>prices</code> ，表示一支股票的历史每日股价，其中 <code>prices[i]</code> 是这支股票第 <code>i</code> 天的价格。</p><p>一个 <strong>平滑下降的阶段</strong> 定义为：对于 <strong>连续一天或者多天</strong> ，每日股价都比 <strong>前一日股价恰好少</strong> <code>1</code> ，这个阶段第一天的股价没有限制。</p><p>请你返回 <strong>平滑下降阶段</strong> 的数目。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：prices = [3,2,1,4]</span>
<span class="line">输出：7</span>
<span class="line">解释：总共有 7 个平滑下降阶段：</span>
<span class="line">[3], [2], [1], [4], [3,2], [2,1] 和 [3,2,1]</span>
<span class="line">注意，仅一天按照定义也是平滑下降阶段。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：prices = [8,6,7,7]</span>
<span class="line">输出：4</span>
<span class="line">解释：总共有 4 个连续平滑下降阶段：[8], [6], [7] 和 [7]</span>
<span class="line">由于 8 - 6 ≠ 1 ，所以 [8,6] 不是平滑下降阶段。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：prices = [1]</span>
<span class="line">输出：1</span>
<span class="line">解释：总共有 1 个平滑下降阶段：[1]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 105</code></li><li><code>1 &lt;= prices[i] &lt;= 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>直接遍历统计，每多一个就加一个</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long getDescentPeriods(vector&lt;int&gt;&amp; prices) {</span>
<span class="line">        long long ans = 0;</span>
<span class="line">        int dec = 0;</span>
<span class="line">        for (int i = 0; i &lt; prices.size(); i++) {</span>
<span class="line">            if (i &gt; 0 &amp;&amp; prices[i] == prices[i - 1] - 1) {</span>
<span class="line">                dec++; // 连续递减</span>
<span class="line">            } else {</span>
<span class="line">                dec = 1; // 连续递减中断，重新统计</span>
<span class="line">            }</span>
<span class="line">            ans += dec; // dec 是右端点为 i 的连续递减子数组个数</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,17)]))}const t=e(l,[["render",r]]),p=JSON.parse('{"path":"/leetcode/20251215.html","title":"2110. 股票平滑下跌阶段的数目","lang":"zh-CN","frontmatter":{"date":"2025-12-15T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","数组","动态规划"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251215.md","excerpt":"\\n<p>给你一个整数数组 <code>prices</code> ，表示一支股票的历史每日股价，其中 <code>prices[i]</code> 是这支股票第 <code>i</code> 天的价格。</p>\\n<p>一个 <strong>平滑下降的阶段</strong> 定义为：对于 <strong>连续一天或者多天</strong> ，每日股价都比 <strong>前一日股价恰好少</strong> <code>1</code> ，这个阶段第一天的股价没有限制。</p>\\n<p>请你返回 <strong>平滑下降阶段</strong> 的数目。</p>\\n<p><strong>示例 1：</strong></p>"}');export{t as comp,p as data};

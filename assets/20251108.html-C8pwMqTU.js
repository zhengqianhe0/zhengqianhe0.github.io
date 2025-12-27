import{_ as n,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_1611-使整数变为-0-的最少操作次数" tabindex="-1"><a class="header-anchor" href="#_1611-使整数变为-0-的最少操作次数"><span><a href="https://leetcode.cn/problems/minimum-one-bit-operations-to-make-integers-zero/" target="_blank" rel="noopener noreferrer">1611. 使整数变为 0 的最少操作次数</a></span></a></h1><p>给你一个整数 <code>n</code>，你需要重复执行多次下述操作将其转换为 <code>0</code> ：</p><ul><li>翻转 <code>n</code> 的二进制表示中最右侧位（第 <code>0</code> 位）。</li><li>如果第 <code>(i-1)</code> 位为 <code>1</code> 且从第 <code>(i-2)</code> 位到第 <code>0</code> 位都为 <code>0</code>，则翻转 <code>n</code> 的二进制表示中的第 <code>i</code> 位。</li></ul><p>返回将 <code>n</code> 转换为 <code>0</code> 的最小操作次数。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 3</span>
<span class="line">输出：2</span>
<span class="line">解释：3 的二进制表示为 &quot;11&quot;</span>
<span class="line">&quot;11&quot; -&gt; &quot;01&quot; ，执行的是第 2 种操作，因为第 0 位为 1 。</span>
<span class="line">&quot;01&quot; -&gt; &quot;00&quot; ，执行的是第 1 种操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 6</span>
<span class="line">输出：4</span>
<span class="line">解释：6 的二进制表示为 &quot;110&quot;.</span>
<span class="line">&quot;110&quot; -&gt; &quot;010&quot; ，执行的是第 2 种操作，因为第 1 位为 1 ，第 0 到 0 位为 0 。</span>
<span class="line">&quot;010&quot; -&gt; &quot;011&quot; ，执行的是第 1 种操作。</span>
<span class="line">&quot;011&quot; -&gt; &quot;001&quot; ，执行的是第 2 种操作，因为第 0 位为 1 。</span>
<span class="line">&quot;001&quot; -&gt; &quot;000&quot; ，执行的是第 1 种操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>九连环</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minimumOneBitOperations(int n) {</span>
<span class="line">        int ans = 0;</span>
<span class="line">        while (n &gt; 0) {</span>
<span class="line">            int lb = n &amp; -n; // n 的最低 1</span>
<span class="line">            ans = (lb &lt;&lt; 1) - 1 - ans;</span>
<span class="line">            n ^= lb; // 去掉 n 的最低 1</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(logn)</li><li>空间复杂度：O(n)</li></ul>`,15)]))}const t=n(l,[["render",c]]),r=JSON.parse('{"path":"/leetcode/20251108.html","title":"1611. 使整数变为 0 的最少操作次数","lang":"zh-CN","frontmatter":{"date":"2025-11-08T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["记忆化搜索","位运算","动态规划"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251108.md","excerpt":"\\n<p>给你一个整数 <code>n</code>，你需要重复执行多次下述操作将其转换为 <code>0</code> ：</p>\\n<ul>\\n<li>翻转 <code>n</code> 的二进制表示中最右侧位（第 <code>0</code> 位）。</li>\\n<li>如果第 <code>(i-1)</code> 位为 <code>1</code> 且从第 <code>(i-2)</code> 位到第 <code>0</code> 位都为 <code>0</code>，则翻转 <code>n</code> 的二进制表示中的第 <code>i</code> 位。</li>\\n</ul>\\n<p>返回将 <code>n</code> 转换为 <code>0</code> 的最小操作次数。</p>"}');export{t as comp,r as data};

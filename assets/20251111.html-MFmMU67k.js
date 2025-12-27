import{_ as n,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="_474-一和零" tabindex="-1"><a class="header-anchor" href="#_474-一和零"><span><a href="https://leetcode.cn/problems/ones-and-zeroes/" target="_blank" rel="noopener noreferrer">474. 一和零</a></span></a></h1><p>给你一个二进制字符串数组 <code>strs</code> 和两个整数 <code>m</code> 和 <code>n</code> 。</p><p>请你找出并返回 <code>strs</code> 的最大子集的长度，该子集中 <strong>最多</strong> 有 <code>m</code> 个 <code>0</code> 和 <code>n</code> 个 <code>1</code> 。</p><p>如果 <code>x</code> 的所有元素也是 <code>y</code> 的元素，集合 <code>x</code> 是集合 <code>y</code> 的 <strong>子集</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;10&quot;, &quot;0001&quot;, &quot;111001&quot;, &quot;1&quot;, &quot;0&quot;], m = 5, n = 3</span>
<span class="line">输出：4</span>
<span class="line">解释：最多有 5 个 0 和 3 个 1 的最大子集是 {&quot;10&quot;,&quot;0001&quot;,&quot;1&quot;,&quot;0&quot;} ，因此答案是 4 。</span>
<span class="line">其他满足题意但较小的子集包括 {&quot;0001&quot;,&quot;1&quot;} 和 {&quot;10&quot;,&quot;1&quot;,&quot;0&quot;} 。{&quot;111001&quot;} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;10&quot;, &quot;0&quot;, &quot;1&quot;], m = 1, n = 1</span>
<span class="line">输出：2</span>
<span class="line">解释：最大的子集是 {&quot;0&quot;, &quot;1&quot;} ，所以答案是 2 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 600</code></li><li><code>1 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> 仅由 <code>&#39;0&#39;</code> 和 <code>&#39;1&#39;</code> 组成</li><li><code>1 &lt;= m, n &lt;= 100</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>0-1背包，但是容量有两个维度</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int findMaxForm(vector&lt;string&gt;&amp; strs, int m, int n) {</span>
<span class="line">        vector&lt;int&gt; cnt0(strs.size());</span>
<span class="line">        for (int i = 0; i &lt; strs.size(); i++) {</span>
<span class="line">            cnt0[i] = ranges::count(strs[i], &#39;0&#39;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector memo(strs.size(), vector(m + 1, vector&lt;int&gt;(n + 1, -1))); // -1 表示没有计算过</span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int i, int j, int k) -&gt; int {</span>
<span class="line">            if (i &lt; 0) {</span>
<span class="line">                return 0;</span>
<span class="line">            }</span>
<span class="line">            int&amp; res = memo[i][j][k]; // 注意这里是引用</span>
<span class="line">            if (res != -1) { // 之前计算过</span>
<span class="line">                return res;</span>
<span class="line">            }</span>
<span class="line">            res = dfs(i - 1, j, k); // 不选 strs[i]</span>
<span class="line">            int cnt1 = strs[i].size() - cnt0[i];</span>
<span class="line">            if (j &gt;= cnt0[i] &amp;&amp; k &gt;= cnt1) {</span>
<span class="line">                res = max(res, dfs(i - 1, j - cnt0[i], k - cnt1) + 1); // 选 strs[i]</span>
<span class="line">            }</span>
<span class="line">            return res;</span>
<span class="line">        };</span>
<span class="line">        return dfs(strs.size() - 1, m, n);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(kmn+L)</li><li>空间复杂度：O(kmn)</li></ul>`,15)]))}const o=n(l,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20251111.html","title":"474. 一和零","lang":"zh-CN","frontmatter":{"date":"2025-11-11T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["动态规划","数组","字符串"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251111.md","excerpt":"\\n<p>给你一个二进制字符串数组 <code>strs</code> 和两个整数 <code>m</code> 和 <code>n</code> 。</p>\\n<p>请你找出并返回 <code>strs</code> 的最大子集的长度，该子集中 <strong>最多</strong> 有 <code>m</code> 个 <code>0</code> 和 <code>n</code> 个 <code>1</code> 。</p>\\n<p>如果 <code>x</code> 的所有元素也是 <code>y</code> 的元素，集合 <code>x</code> 是集合 <code>y</code> 的 <strong>子集</strong> 。</p>"}');export{o as comp,r as data};

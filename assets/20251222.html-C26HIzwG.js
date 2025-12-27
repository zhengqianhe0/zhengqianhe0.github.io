import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_960-删列造序-iii" tabindex="-1"><a class="header-anchor" href="#_960-删列造序-iii"><span><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted-iii/" target="_blank" rel="noopener noreferrer">960. 删列造序 III</a></span></a></h1><p>给定由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code> ，其中每个字符串长度相等。</p><p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p><p>比如，有 <code>strs = [&quot;abcdef&quot;,&quot;uvwxyz&quot;]</code> ，删除索引序列 <code>{0, 2, 3}</code> ，删除后为 <code>[&quot;bef&quot;, &quot;vyz&quot;]</code> 。</p><p>假设，我们选择了一组删除索引 <code>answer</code> ，那么在执行删除操作之后，最终得到的数组的行中的 <strong>每个元素</strong> 都是按<strong>字典序</strong>排列的（即 <code>(strs[0][0] &lt;= strs[0][1] &lt;= ... &lt;= strs[0][strs[0].length - 1])</code> 和 <code>(strs[1][0] &lt;= strs[1][1] &lt;= ... &lt;= strs[1][strs[1].length - 1])</code> ，依此类推）。</p><p>请返回 <em><code>answer.length</code> 的最小可能值</em> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;babca&quot;,&quot;bbazb&quot;]</span>
<span class="line">输出：3</span>
<span class="line">解释：</span>
<span class="line">删除 0、1 和 4 这三列后，最终得到的数组是 strs = [&quot;bc&quot;, &quot;az&quot;]。</span>
<span class="line">这两行是分别按字典序排列的（即，strs[0][0] &lt;= strs[0][1] 且 strs[1][0] &lt;= strs[1][1]）。</span>
<span class="line">注意，strs[0] &gt; strs[1] —— 数组 strs 不一定是按字典序排列的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;edcba&quot;]</span>
<span class="line">输出：4</span>
<span class="line">解释：如果删除的列少于 4 列，则剩下的行都不会按字典序排列。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;ghi&quot;,&quot;def&quot;,&quot;abc&quot;]</span>
<span class="line">输出：0</span>
<span class="line">解释：所有行都已按字典序排列。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == strs.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> 由小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>昨天的题目仅要求单列的字母是非降的字典序。</p><p>今天要求整个数组是满足字典序的，即前面的字符一样，还要比较后面的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minDeletionSize(vector&lt;string&gt;&amp; strs) { </span>
<span class="line">        // 对于每一行，j 列的字母都 &lt;= i 列的字母？</span>
<span class="line">        auto less_eq = [&amp;](int j, int i) -&gt; bool {</span>
<span class="line">            for (auto&amp; s : strs) {</span>
<span class="line">                if (s[j] &gt; s[i]) {</span>
<span class="line">                    return false;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            return true;</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        int m = strs[0].size();</span>
<span class="line">        vector&lt;int&gt; f(m);</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            for (int j = 0; j &lt; i; j++) {</span>
<span class="line">                // 如果 f[j] &lt;= f[i]，就不用跑 O(n) 的 less_eq 了</span>
<span class="line">                if (f[j] &gt; f[i] &amp;&amp; less_eq(j, i)) {</span>
<span class="line">                    f[i] = f[j];</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            f[i]++;</span>
<span class="line">        }</span>
<span class="line">        return m - ranges::max(f);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nm²) m列次循环，nm次比较</li><li>空间复杂度：O(nm)</li></ul>`,20)]))}const c=n(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20251222.html","title":"960. 删列造序 III","lang":"zh-CN","frontmatter":{"date":"2025-12-22T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","字符串","贪心"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251222.md","excerpt":"\\n<p>给定由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code> ，其中每个字符串长度相等。</p>\\n<p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p>\\n<p>比如，有 <code>strs = [\\"abcdef\\",\\"uvwxyz\\"]</code> ，删除索引序列 <code>{0, 2, 3}</code> ，删除后为 <code>[\\"bef\\", \\"vyz\\"]</code> 。</p>\\n<p>假设，我们选择了一组删除索引 <code>answer</code> ，那么在执行删除操作之后，最终得到的数组的行中的 <strong>每个元素</strong> 都是按<strong>字典序</strong>排列的（即 <code>(strs[0][0] &lt;= strs[0][1] &lt;= ... &lt;= strs[0][strs[0].length - 1])</code> 和 <code>(strs[1][0] &lt;= strs[1][1] &lt;= ... &lt;= strs[1][strs[1].length - 1])</code> ，依此类推）。</p>"}');export{c as comp,p as data};

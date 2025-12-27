import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_955-删列造序-ii" tabindex="-1"><a class="header-anchor" href="#_955-删列造序-ii"><span><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted-ii/" target="_blank" rel="noopener noreferrer">955. 删列造序 II</a></span></a></h1><p>给定由 <code>n</code> 个字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p><p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p><p>比如，有 <code>strs = [&quot;abcdef&quot;, &quot;uvwxyz&quot;]</code>，删除索引序列 <code>{0, 2, 3}</code>，删除后 <code>strs</code> 为<code>[&quot;bef&quot;, &quot;vyz&quot;]</code>。</p><p>假设，我们选择了一组删除索引 <code>answer</code>，那么在执行删除操作之后，最终得到的数组的元素是按 <strong>字典序</strong>（<code>strs[0] &lt;= strs[1] &lt;= strs[2] ... &lt;= strs[n - 1]</code>）排列的，然后请你返回 <code>answer.length</code> 的最小可能值。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;ca&quot;,&quot;bb&quot;,&quot;ac&quot;]</span>
<span class="line">输出：1</span>
<span class="line">解释： </span>
<span class="line">删除第一列后，strs = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]。</span>
<span class="line">现在 strs 中元素是按字典排列的 (即，strs[0] &lt;= strs[1] &lt;= strs[2])。</span>
<span class="line">我们至少需要进行 1 次删除，因为最初 strs 不是按字典序排列的，所以答案是 1。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;xc&quot;,&quot;yb&quot;,&quot;za&quot;]</span>
<span class="line">输出：0</span>
<span class="line">解释：</span>
<span class="line">strs 的列已经是按字典序排列了，所以我们不需要删除任何东西。</span>
<span class="line">注意 strs 的行不需要按字典序排列。</span>
<span class="line">也就是说，strs[0][0] &lt;= strs[0][1] &lt;= ... 不一定成立。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]</span>
<span class="line">输出：3</span>
<span class="line">解释：</span>
<span class="line">我们必须删掉每一列。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == strs.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= strs[i].length &lt;= 100</code></li><li><code>strs[i]</code> 由小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>昨天要求整个数组是满足字典序的，即前面的字符一样，还要比较后面的。</p><p>今天要求每一位都满足字典序，第一位小的第二位也要小</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nm²) m列次循环，nm次比较</li><li>空间复杂度：O(m)</li></ul>`,19)]))}const r=n(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20251221.html","title":"955. 删列造序 II","lang":"zh-CN","frontmatter":{"date":"2025-12-21T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","字符串","动态规划"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251221.md","excerpt":"\\n<p>给定由 <code>n</code> 个字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p>\\n<p>选取一个删除索引序列，对于 <code>strs</code> 中的每个字符串，删除对应每个索引处的字符。</p>\\n<p>比如，有 <code>strs = [\\"abcdef\\", \\"uvwxyz\\"]</code>，删除索引序列 <code>{0, 2, 3}</code>，删除后 <code>strs</code> 为<code>[\\"bef\\", \\"vyz\\"]</code>。</p>\\n<p>假设，我们选择了一组删除索引 <code>answer</code>，那么在执行删除操作之后，最终得到的数组的元素是按 <strong>字典序</strong>（<code>strs[0] &lt;= strs[1] &lt;= strs[2] ... &lt;= strs[n - 1]</code>）排列的，然后请你返回 <code>answer.length</code> 的最小可能值。</p>"}');export{r as comp,p as data};

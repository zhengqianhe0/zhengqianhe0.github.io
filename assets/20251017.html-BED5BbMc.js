import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_3003-执行操作后的最大分割数量" tabindex="-1"><a class="header-anchor" href="#_3003-执行操作后的最大分割数量"><span><a href="https://leetcode.cn/problems/maximize-the-number-of-partitions-after-operations/" target="_blank" rel="noopener noreferrer">3003. 执行操作后的最大分割数量</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> 和一个整数 <code>k</code>。</p><p>你需要执行以下分割操作，直到字符串 <code>s </code>变为 <strong>空</strong>：</p><ul><li>选择 <code>s</code> 的最长 <strong>前缀</strong>，该前缀最多包含 <code>k </code>个 <strong>不同</strong> 字符。</li><li><strong>删除</strong> 这个前缀，并将分割数量加一。如果有剩余字符，它们在 <code>s</code> 中保持原来的顺序。</li></ul><p>执行操作之 <strong>前</strong> ，你可以将 <code>s</code> 中 <strong>至多一处</strong> 下标的对应字符更改为另一个小写英文字母。</p><p>在最优选择情形下改变至多一处下标对应字符后，用整数表示并返回操作结束时得到的 <strong>最大</strong> 分割数量。</p><p><strong>示例 1：</strong></p><p>**输入：**s = &quot;accca&quot;, k = 2</p><p>**输出：**3</p><p><strong>解释：</strong></p><p>最好的方式是把 <code>s[2]</code> 变为除了 a 和 c 之外的东西，比如 b。然后它变成了 <code>&quot;acbca&quot;</code>。</p><p>然后我们执行以下操作：</p><ol><li>最多包含 2 个不同字符的最长前缀是 <code>&quot;ac&quot;</code>，我们删除它然后 <code>s</code> 变为 <code>&quot;bca&quot;</code>。</li><li>现在最多包含 2 个不同字符的最长前缀是 <code>&quot;bc&quot;</code>，所以我们删除它然后 <code>s</code> 变为 <code>&quot;a&quot;</code>。</li><li>最后，我们删除 <code>&quot;a&quot;</code> 并且 <code>s</code> 变成空串，所以该过程结束。</li></ol><p>进行操作时，字符串被分成 3 个部分，所以答案是 3。</p><p><strong>示例 2：</strong></p><p>**输入：**s = &quot;aabaab&quot;, k = 3</p><p>**输出：**1</p><p><strong>解释：</strong></p><p>一开始 <code>s</code> 包含 2 个不同的字符，所以无论我们改变哪个， 它最多包含 3 个不同字符，因此最多包含 3 个不同字符的最长前缀始终是所有字符，因此答案是 1。</p><p><strong>示例 3：</strong></p><p>**输入：**s = &quot;xxyz&quot;, k = 1</p><p>**输出：**4</p><p><strong>解释：</strong></p><p>最好的方式是将 <code>s[0]</code> 或 <code>s[1]</code> 变为 <code>s</code> 中字符以外的东西，例如将 <code>s[0]</code> 变为 <code>w</code>。</p><p>然后 <code>s</code> 变为 <code>&quot;wxyz&quot;</code>，包含 4 个不同的字符，所以当 <code>k</code> 为 1，它将分为 4 个部分。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 104</code></li><li><code>s</code> 只包含小写英文字母。</li><li><code>1 &lt;= k &lt;= 26</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>记忆化搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxPartitionsAfterOperations(string s, int k) {</span>
<span class="line">        unordered_map&lt;long long, int&gt; memo;</span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int i, int mask, bool changed) -&gt; int {</span>
<span class="line">            if (i == s.length()) {</span>
<span class="line">                return 1;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 把参数压缩到一个 long long 中，方便作为哈希表的 key</span>
<span class="line">            long long args = (long long) i &lt;&lt; 32 | mask &lt;&lt; 1 | changed;</span>
<span class="line">            auto it = memo.find(args);</span>
<span class="line">            if (it != memo.end()) { // 之前计算过</span>
<span class="line">                return it-&gt;second;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            int res;</span>
<span class="line">            // 不改 s[i]</span>
<span class="line">            int bit = 1 &lt;&lt; (s[i] - &#39;a&#39;);</span>
<span class="line">            int new_mask = mask | bit;</span>
<span class="line">            if (popcount((uint32_t) new_mask) &gt; k) {</span>
<span class="line">                // 分割出一个子串，这个子串的最后一个字母在 i-1</span>
<span class="line">                // s[i] 作为下一段的第一个字母，也就是 bit 作为下一段的 mask 的初始值</span>
<span class="line">                res = dfs(i + 1, bit, changed) + 1;</span>
<span class="line">            } else { // 不分割</span>
<span class="line">                res = dfs(i + 1, new_mask, changed);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            if (!changed) {</span>
<span class="line">                // 枚举把 s[i] 改成 a,b,c,...,z</span>
<span class="line">                for (int j = 0; j &lt; 26; j++) {</span>
<span class="line">                    new_mask = mask | (1 &lt;&lt; j);</span>
<span class="line">                    if (popcount((uint32_t) new_mask) &gt; k) {</span>
<span class="line">                        // 分割出一个子串，这个子串的最后一个字母在 i-1</span>
<span class="line">                        // j 作为下一段的第一个字母，也就是 1&lt;&lt;j 作为下一段的 mask 的初始值</span>
<span class="line">                        res = max(res, dfs(i + 1, 1 &lt;&lt; j, true) + 1);</span>
<span class="line">                    } else { // 不分割</span>
<span class="line">                        res = max(res, dfs(i + 1, new_mask, true));</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            return memo[args] = res; // 记忆化</span>
<span class="line">        };</span>
<span class="line">        return dfs(0, 0, false);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(Mn) 复杂度取决于用到的字母数M，最多为26</li><li>空间复杂度：O(n)</li></ul>`,32)]))}const t=n(l,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251017.html","title":"3003. 执行操作后的最大分割数量","lang":"zh-CN","frontmatter":{"date":"2025-10-17T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","DFS","动态规划"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251017.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> 和一个整数 <code>k</code>。</p>\\n<p>你需要执行以下分割操作，直到字符串 <code>s </code>变为 <strong>空</strong>：</p>\\n<ul>\\n<li>选择 <code>s</code> 的最长 <strong>前缀</strong>，该前缀最多包含 <code>k </code>个 <strong>不同</strong> 字符。</li>\\n<li><strong>删除</strong> 这个前缀，并将分割数量加一。如果有剩余字符，它们在 <code>s</code> 中保持原来的顺序。</li>\\n</ul>"}');export{t as comp,p as data};

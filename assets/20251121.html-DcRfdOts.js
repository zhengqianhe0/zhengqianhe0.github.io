import{_ as s,c as a,a as e,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="_1930-长度为-3-的不同回文子序列" tabindex="-1"><a class="header-anchor" href="#_1930-长度为-3-的不同回文子序列"><span><a href="https://leetcode.cn/problems/unique-length-3-palindromic-subsequences/" target="_blank" rel="noopener noreferrer">1930. 长度为 3 的不同回文子序列</a></span></a></h1><p>给你一个字符串 <code>s</code> ，返回 <code>s</code> 中 <strong>长度为 3</strong> 的<strong>不同回文子序列</strong> 的个数。</p><p>即便存在多种方法来构建相同的子序列，但相同的子序列只计数一次。</p><p><strong>回文</strong> 是正着读和反着读一样的字符串。</p><p><strong>子序列</strong> 是由原字符串删除其中部分字符（也可以不删除）且不改变剩余字符之间相对顺序形成的一个新字符串。</p><ul><li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;***a\\***b***c\\***d***e\\***&quot;</code> 的一个子序列。</li></ul><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;aabca&quot;</span>
<span class="line">输出：3</span>
<span class="line">解释：长度为 3 的 3 个回文子序列分别是：</span>
<span class="line">- &quot;aba&quot; (&quot;aabca&quot; 的子序列)</span>
<span class="line">- &quot;aaa&quot; (&quot;aabca&quot; 的子序列)</span>
<span class="line">- &quot;aca&quot; (&quot;aabca&quot; 的子序列)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;adc&quot;</span>
<span class="line">输出：0</span>
<span class="line">解释：&quot;adc&quot; 不存在长度为 3 的回文子序列。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;bbcbaba&quot;</span>
<span class="line">输出：4</span>
<span class="line">解释：长度为 3 的 4 个回文子序列分别是：</span>
<span class="line">- &quot;bbb&quot; (&quot;bbcbaba&quot; 的子序列)</span>
<span class="line">- &quot;bcb&quot; (&quot;bbcbaba&quot; 的子序列)</span>
<span class="line">- &quot;bab&quot; (&quot;bbcbaba&quot; 的子序列)</span>
<span class="line">- &quot;aba&quot; (&quot;bbcbaba&quot; 的子序列)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>3 &lt;= s.length &lt;= 105</code></li><li><code>s</code> 仅由小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>注意数组遍历函数的写法，注意bool数组的初始化，避免内存原有数据影响</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countPalindromicSubsequence(string s) {</span>
<span class="line">        int ans = 0;</span>
<span class="line">        for (char alpha = &#39;a&#39;; alpha &lt;= &#39;z&#39;; alpha++) { // 枚举两侧字母 alpha</span>
<span class="line">            int i = s.find(alpha); // 最左边的 alpha 的下标</span>
<span class="line">            if (i == string::npos) { // s 中没有 alpha</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line">            int j = s.rfind(alpha); // 最右边的 alpha 的下标</span>
<span class="line"></span>
<span class="line">            bool has[26]={0};</span>
<span class="line">            for (int k = i + 1; k &lt; j; k++) { // 枚举中间字母 s[k]</span>
<span class="line">                if (!has[s[k] - &#39;a&#39;]) {</span>
<span class="line">                    has[s[k] - &#39;a&#39;] = true; // 避免重复统计</span>
<span class="line">                    ans++;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nΣ) Σ表示字母个数26</li><li>空间复杂度：O(Σ)</li></ul>`,19)]))}const r=s(l,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251121.html","title":"1930. 长度为 3 的不同回文子序列","lang":"zh-CN","frontmatter":{"date":"2025-11-21T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","哈希表","前缀和"]},"headers":[],"git":{"updatedTime":1764379051000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f1efcaa796af7064e3cee738675cd19d4efba611","time":1764379051000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251121.md","excerpt":"\\n<p>给你一个字符串 <code>s</code> ，返回 <code>s</code> 中 <strong>长度为 3</strong> 的<strong>不同回文子序列</strong> 的个数。</p>\\n<p>即便存在多种方法来构建相同的子序列，但相同的子序列只计数一次。</p>\\n<p><strong>回文</strong> 是正着读和反着读一样的字符串。</p>\\n<p><strong>子序列</strong> 是由原字符串删除其中部分字符（也可以不删除）且不改变剩余字符之间相对顺序形成的一个新字符串。</p>\\n<ul>\\n<li>例如，<code>\\"ace\\"</code> 是 <code>\\"***a\\\\***b***c\\\\***d***e\\\\***\\"</code> 的一个子序列。</li>\\n</ul>"}');export{r as comp,p as data};

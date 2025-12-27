import{_ as e,c as n,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="_1625-执行操作后字典序最小的字符串" tabindex="-1"><a class="header-anchor" href="#_1625-执行操作后字典序最小的字符串"><span><a href="https://leetcode.cn/problems/lexicographically-smallest-string-after-applying-operations/" target="_blank" rel="noopener noreferrer">1625. 执行操作后字典序最小的字符串</a></span></a></h1><p>给你一个字符串 <code>s</code> 以及两个整数 <code>a</code> 和 <code>b</code> 。其中，字符串 <code>s</code> 的长度为偶数，且仅由数字 <code>0</code> 到 <code>9</code> 组成。</p><p>你可以在 <code>s</code> 上按任意顺序多次执行下面两个操作之一：</p><ul><li>累加：将 <code>a</code> 加到 <code>s</code> 中所有下标为奇数的元素上（<strong>下标从 0 开始</strong>）。数字一旦超过 <code>9</code> 就会变成 <code>0</code>，如此循环往复。例如，<code>s = &quot;3456&quot;</code> 且 <code>a = 5</code>，则执行此操作后 <code>s</code> 变成 <code>&quot;3951&quot;</code>。</li><li>轮转：将 <code>s</code> 向右轮转 <code>b</code> 位。例如，<code>s = &quot;3456&quot;</code> 且 <code>b = 1</code>，则执行此操作后 <code>s</code> 变成 <code>&quot;6345&quot;</code>。</li></ul><p>请你返回在 <code>s</code> 上执行上述操作任意次后可以得到的 <strong>字典序最小</strong> 的字符串。</p><p>如果两个字符串长度相同，那么字符串 <code>a</code> 字典序比字符串 <code>b</code> 小可以这样定义：在 <code>a</code> 和 <code>b</code> 出现不同的第一个位置上，字符串 <code>a</code> 中的字符出现在字母表中的时间早于 <code>b</code> 中的对应字符。例如，<code>&quot;0158”</code> 字典序比 <code>&quot;0190&quot;</code> 小，因为不同的第一个位置是在第三个字符，显然 <code>&#39;5&#39;</code> 出现在 <code>&#39;9&#39;</code> 之前。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;5525&quot;, a = 9, b = 2</span>
<span class="line">输出：&quot;2050&quot;</span>
<span class="line">解释：执行操作如下：</span>
<span class="line">初态：&quot;5525&quot;</span>
<span class="line">轮转：&quot;2555&quot;</span>
<span class="line">累加：&quot;2454&quot;</span>
<span class="line">累加：&quot;2353&quot;</span>
<span class="line">轮转：&quot;5323&quot;</span>
<span class="line">累加：&quot;5222&quot;</span>
<span class="line">累加：&quot;5121&quot;</span>
<span class="line">轮转：&quot;2151&quot;</span>
<span class="line">累加：&quot;2050&quot;</span>
<span class="line">无法获得字典序小于 &quot;2050&quot; 的字符串。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;74&quot;, a = 5, b = 1</span>
<span class="line">输出：&quot;24&quot;</span>
<span class="line">解释：执行操作如下：</span>
<span class="line">初态：&quot;74&quot;</span>
<span class="line">轮转：&quot;47&quot;</span>
<span class="line">累加：&quot;42&quot;</span>
<span class="line">轮转：&quot;24&quot;</span>
<span class="line">无法获得字典序小于 &quot;24&quot; 的字符串。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;0011&quot;, a = 4, b = 2</span>
<span class="line">输出：&quot;0011&quot;</span>
<span class="line">解释：无法获得字典序小于 &quot;0011&quot; 的字符串。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 100</code></li><li><code>s.length</code> 是偶数</li><li><code>s</code> 仅由数字 <code>0</code> 到 <code>9</code> 组成</li><li><code>1 &lt;= a &lt;= 9</code></li><li><code>1 &lt;= b &lt;= s.length - 1</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>裴属定理：</p><p>设 𝑎,𝑏<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="a,b"> 是不全为零的整数。那么，对于任意整数 𝑥,𝑦<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="x,y">，都有 gcd(𝑎,𝑏) ∣𝑎𝑥 +𝑏𝑦<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="cd(a,b)id ax+by"> 成立；而且，存在整数 𝑥,𝑦<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="x,y">，使得 𝑎𝑥 +𝑏𝑦 =gcd(𝑎,𝑏)<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="ax+by=cd(a,b)"> 成立。</p><p>利用这一定理，当多次添加时</p><p><em>r</em>=(<em>s</em>1+<em>ak</em>)mod10</p><p><em>s</em>1+<em>ak</em>−10<em>q</em>=<em>r</em></p><p><em>ak</em>−10<em>q</em>=<em>r</em>−<em>s</em>1</p><p>当以上等式有解时，<em>r</em>−<em>s</em>1 是 <em>g</em>=gcd(<em>a</em>,10)的倍数，所以r与s1 mod g同余。</p><p>总结：穷举所有<strong>可能的基础结构</strong>（轮转），然后对每一个结构，用贪心法将其<strong>最前面的可变位</strong>优化到极致（最小 $t[\\text{start}] \\pmod g$），由此锁定了整个字符串。最后在所有这些最优化的结果中找到字典序最小的那一个。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    string findLexSmallestString(string s, int a, int b) {</span>
<span class="line">        int n = s.size();</span>
<span class="line">        int step = gcd(b, n);</span>
<span class="line">        int g = gcd(a, 10);</span>
<span class="line">        string ans;</span>
<span class="line"></span>
<span class="line">        for (int i = 0; i &lt; n; i += step) {</span>
<span class="line">            string t = s.substr(i) + s.substr(0, i); // 轮转</span>
<span class="line"></span>
<span class="line">            auto modify = [&amp;](int start) -&gt; void {</span>
<span class="line">                int ch = t[start] - &#39;0&#39;; // 最靠前的数字，越小越好</span>
<span class="line">                // ch 可以变成的最小值为 ch%g</span>
<span class="line">                // 例如 ch=5，g=2，那么 ch+2+2+2（模 10）后变成 1，不可能变得更小</span>
<span class="line">                // 从 ch 到 ch%g，需要增加 inc，其中 +10 保证 inc 非负（循环中会 %10 保证结果在 [0,9] 中）</span>
<span class="line">                int inc = ch % g - ch + 10;</span>
<span class="line">                for (int j = start; j &lt; n; j += 2) {</span>
<span class="line">                    t[j] = &#39;0&#39; + (t[j] - &#39;0&#39; + inc) % 10;</span>
<span class="line">                }</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">            modify(1); // 累加操作（所有奇数下标）</span>
<span class="line">            if (step % 2) { // 能对偶数下标执行累加操作</span>
<span class="line">                modify(0); // 累加操作（所有偶数下标）</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            if (ans.empty() || t &lt; ans) {</span>
<span class="line">                ans = move(t); // 每次循环赋值比较</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n^2/gcd(b,n))</li><li>空间复杂度：O(n)</li></ul>`,26)]))}const t=e(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20251019.html","title":"1625. 执行操作后字典序最小的字符串","lang":"zh-CN","frontmatter":{"date":"2025-10-19T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","字符串","DFS"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251019.md","excerpt":"\\n<p>给你一个字符串 <code>s</code> 以及两个整数 <code>a</code> 和 <code>b</code> 。其中，字符串 <code>s</code> 的长度为偶数，且仅由数字 <code>0</code> 到 <code>9</code> 组成。</p>\\n<p>你可以在 <code>s</code> 上按任意顺序多次执行下面两个操作之一：</p>\\n<ul>\\n<li>累加：将 <code>a</code> 加到 <code>s</code> 中所有下标为奇数的元素上（<strong>下标从 0 开始</strong>）。数字一旦超过 <code>9</code> 就会变成 <code>0</code>，如此循环往复。例如，<code>s = \\"3456\\"</code> 且 <code>a = 5</code>，则执行此操作后 <code>s</code> 变成 <code>\\"3951\\"</code>。</li>\\n<li>轮转：将 <code>s</code> 向右轮转 <code>b</code> 位。例如，<code>s = \\"3456\\"</code> 且 <code>b = 1</code>，则执行此操作后 <code>s</code> 变成 <code>\\"6345\\"</code>。</li>\\n</ul>"}');export{t as comp,p as data};

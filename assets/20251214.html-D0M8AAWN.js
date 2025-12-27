import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_2147-分隔长廊的方案数" tabindex="-1"><a class="header-anchor" href="#_2147-分隔长廊的方案数"><span><a href="https://leetcode.cn/problems/number-of-ways-to-divide-a-long-corridor/" target="_blank" rel="noopener noreferrer">2147. 分隔长廊的方案数</a></span></a></h1><p>在一个图书馆的长廊里，有一些座位和装饰植物排成一列。给你一个下标从 <strong>0</strong> 开始，长度为 <code>n</code> 的字符串 <code>corridor</code> ，它包含字母 <code>&#39;S&#39;</code> 和 <code>&#39;P&#39;</code> ，其中每个 <code>&#39;S&#39;</code> 表示一个座位，每个 <code>&#39;P&#39;</code> 表示一株植物。</p><p>在下标 <code>0</code> 的左边和下标 <code>n - 1</code> 的右边 <strong>已经</strong> 分别各放了一个屏风。你还需要额外放置一些屏风。每一个位置 <code>i - 1</code> 和 <code>i</code> 之间（<code>1 &lt;= i &lt;= n - 1</code>），至多能放一个屏风。</p><p>请你将走廊用屏风划分为若干段，且每一段内都 <strong>恰好有两个座位</strong> ，而每一段内植物的数目没有要求。可能有多种划分方案，如果两个方案中有任何一个屏风的位置不同，那么它们被视为 <strong>不同</strong> 方案。</p><p>请你返回划分走廊的方案数。由于答案可能很大，请你返回它对 <code>109 + 7</code> <strong>取余</strong> 的结果。如果没有任何方案，请返回 <code>0</code> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/12/04/1.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：corridor = &quot;SSPPSPS&quot;</span>
<span class="line">输出：3</span>
<span class="line">解释：总共有 3 种不同分隔走廊的方案。</span>
<span class="line">上图中黑色的竖线表示已经放置好的屏风。</span>
<span class="line">上图每种方案中，每一段都恰好有 两个 座位。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/12/04/2.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：corridor = &quot;PPSPSP&quot;</span>
<span class="line">输出：1</span>
<span class="line">解释：只有 1 种分隔走廊的方案，就是不放置任何屏风。</span>
<span class="line">放置任何的屏风都会导致有一段无法恰好有 2 个座位。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/12/12/3.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：corridor = &quot;S&quot;</span>
<span class="line">输出：0</span>
<span class="line">解释：没有任何方案，因为总是有一段无法恰好有 2 个座位。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == corridor.length</code></li><li><code>1 &lt;= n &lt;= 105</code></li><li><code>corridor[i]</code> 要么是 <code>&#39;S&#39;</code> ，要么是 <code>&#39;P&#39;</code> 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>乘法原理</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numberOfWays(string corridor) {</span>
<span class="line">        constexpr int MOD = 1&#39;000&#39;000&#39;007;</span>
<span class="line">        long long ans = 1;</span>
<span class="line">        int cnt_s = 0, last_s = 0;</span>
<span class="line"></span>
<span class="line">        for (int i = 0; i &lt; corridor.size(); i++) {</span>
<span class="line">            if (corridor[i] == &#39;S&#39;) {</span>
<span class="line">                cnt_s++;</span>
<span class="line">                // 对于第 3,5,7,... 个座位，可以在其到其左侧最近座位之间的任意空隙放置屏风</span>
<span class="line">                if (cnt_s &gt;= 3 &amp;&amp; cnt_s % 2) {</span>
<span class="line">                    ans = ans * (i - last_s) % MOD;</span>
<span class="line">                }</span>
<span class="line">                last_s = i; // 记录上一个座位的位置</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (cnt_s == 0 || cnt_s % 2) { // 座位个数不能为 0 或奇数</span>
<span class="line">            return 0;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,21)]))}const o=n(l,[["render",d]]),t=JSON.parse(`{"path":"/leetcode/20251214.html","title":"2147. 分隔长廊的方案数","lang":"zh-CN","frontmatter":{"date":"2025-12-14T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","字符串","动态规划"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251214.md","excerpt":"\\n<p>在一个图书馆的长廊里，有一些座位和装饰植物排成一列。给你一个下标从 <strong>0</strong> 开始，长度为 <code>n</code> 的字符串 <code>corridor</code> ，它包含字母 <code>'S'</code> 和 <code>'P'</code> ，其中每个 <code>'S'</code> 表示一个座位，每个 <code>'P'</code> 表示一株植物。</p>\\n<p>在下标 <code>0</code> 的左边和下标 <code>n - 1</code> 的右边 <strong>已经</strong> 分别各放了一个屏风。你还需要额外放置一些屏风。每一个位置 <code>i - 1</code> 和 <code>i</code> 之间（<code>1 &lt;= i &lt;= n - 1</code>），至多能放一个屏风。</p>"}`);export{o as comp,t as data};

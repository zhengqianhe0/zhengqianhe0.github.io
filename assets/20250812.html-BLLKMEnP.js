import{_ as e,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_2787-将一个数字表示成幂的和的方案数" tabindex="-1"><a class="header-anchor" href="#_2787-将一个数字表示成幂的和的方案数"><span><a href="https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/" target="_blank" rel="noopener noreferrer">2787. 将一个数字表示成幂的和的方案数</a></span></a></h1><p>给你两个 <strong>正</strong> 整数 <code>n</code> 和 <code>x</code> 。</p><p>请你返回将 <code>n</code> 表示成一些 <strong>互不相同</strong> 正整数的 <code>x</code> 次幂之和的方案数。换句话说，你需要返回互不相同整数 <code>[n1, n2, ..., nk]</code> 的集合数目，满足 <code>n = n1x + n2x + ... + nkx</code> 。</p><p>由于答案可能非常大，请你将它对 <code>109 + 7</code> 取余后返回。</p><p>比方说，<code>n = 160</code> 且 <code>x = 3</code> ，一个表示 <code>n</code> 的方法是 <code>n = 23 + 33 + 53</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 10, x = 2</span>
<span class="line">输出：1</span>
<span class="line">解释：我们可以将 n 表示为：n = 32 + 12 = 10 。</span>
<span class="line">这是唯一将 10 表达成不同整数 2 次方之和的方案。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 4, x = 1</span>
<span class="line">输出：2</span>
<span class="line">解释：我们可以将 n 按以下方案表示：</span>
<span class="line">- n = 41 = 4 。</span>
<span class="line">- n = 31 + 11 = 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 300</code></li><li><code>1 &lt;= x &lt;= 5</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>将目标整数n看成背包容量，x次幂看成能否放到背包中的只能放一次的物品。</p><p>01背包模板题。</p><p>常规二维DP的状态转移方程，只涉及到i-1的结果，可以省略：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dp[i][j] = dp[i-1][j] + dp[i-1][j - val]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>减少到一维使用滚动数组：</p><p>模拟第i次循环只使用第i-1次的结果，且反着计算，每一个值只会被更新一次，只有更新时会考虑当前物品，对应01背包</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">for(int i=1;i&lt;=n;++i){</span>
<span class="line">	int val=pow(i,x);</span>
<span class="line">	for(int j=n;j&gt;=val;j--){</span>
<span class="line">    	dp[j]=(dp[j]+dp[j-val])%mod;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的完整代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numberOfWays(int n, int x) {</span>
<span class="line">        static const long long mod=1000000007;</span>
<span class="line">        vector&lt;long long&gt;dp(n+1);</span>
<span class="line">        dp[0]=1; //表示和为0只有一种方法即什么都不选</span>
<span class="line">        for(int i=1;i&lt;=n;++i){</span>
<span class="line">            int val=pow(i,x);</span>
<span class="line">            if(val&gt;n){</span>
<span class="line">                break;</span>
<span class="line">            }</span>
<span class="line">            for(int j=n;j&gt;=val;j--){</span>
<span class="line">                dp[j]=(dp[j]+dp[j-val])%mod;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dp[n];</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n<em>n^(1/x) )，其中 n,x 表示给定的数字。从小到大遍历 i，由于幂次和不超过 n，因此 i 的最大值不超过n^(1/x) ，动态规划最多需要计算n</em>n^(1/x) 个子状态，每个子状态的计算时间为 O(1)，因此时间复杂度为 O(n*n^(1/x) )</li><li>空间复杂度：O(n)，其中 n 表示给定的数字。经过空间优化后，仅需要存储 n 个状态即可，需要的空间为 O(n)。</li></ul>`,23)]))}const t=e(l,[["render",d]]),r=JSON.parse('{"path":"/leetcode/20250812.html","title":"2787. 将一个数字表示成幂的和的方案数","lang":"zh-CN","frontmatter":{"date":"2025-08-12T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["动态规划","01背包"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"5185775b96da1c213f4efae6d82c6544b9ef518b","time":1754966047000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250812.md","excerpt":"\\n<p>给你两个 <strong>正</strong> 整数 <code>n</code> 和 <code>x</code> 。</p>\\n<p>请你返回将 <code>n</code> 表示成一些 <strong>互不相同</strong> 正整数的 <code>x</code> 次幂之和的方案数。换句话说，你需要返回互不相同整数 <code>[n1, n2, ..., nk]</code> 的集合数目，满足 <code>n = n1x + n2x + ... + nkx</code> 。</p>\\n<p>由于答案可能非常大，请你将它对 <code>109 + 7</code> 取余后返回。</p>"}');export{t as comp,r as data};

import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2327-知道秘密的人数" tabindex="-1"><a class="header-anchor" href="#_2327-知道秘密的人数"><span><a href="https://leetcode.cn/problems/number-of-people-aware-of-a-secret/" target="_blank" rel="noopener noreferrer">2327. 知道秘密的人数</a></span></a></h1><p>在第 <code>1</code> 天，有一个人发现了一个秘密。</p><p>给你一个整数 <code>delay</code> ，表示每个人会在发现秘密后的 <code>delay</code> 天之后，<strong>每天</strong> 给一个新的人 <strong>分享</strong> 秘密。同时给你一个整数 <code>forget</code> ，表示每个人在发现秘密 <code>forget</code> 天之后会 <strong>忘记</strong> 这个秘密。一个人 <strong>不能</strong> 在忘记秘密那一天及之后的日子里分享秘密。</p><p>给你一个整数 <code>n</code> ，请你返回在第 <code>n</code> 天结束时，知道秘密的人数。由于答案可能会很大，请你将结果对 <code>109 + 7</code> <strong>取余</strong> 后返回。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 6, delay = 2, forget = 4</span>
<span class="line">输出：5</span>
<span class="line">解释：</span>
<span class="line">第 1 天：假设第一个人叫 A 。（一个人知道秘密）</span>
<span class="line">第 2 天：A 是唯一一个知道秘密的人。（一个人知道秘密）</span>
<span class="line">第 3 天：A 把秘密分享给 B 。（两个人知道秘密）</span>
<span class="line">第 4 天：A 把秘密分享给一个新的人 C 。（三个人知道秘密）</span>
<span class="line">第 5 天：A 忘记了秘密，B 把秘密分享给一个新的人 D 。（三个人知道秘密）</span>
<span class="line">第 6 天：B 把秘密分享给 E，C 把秘密分享给 F 。（五个人知道秘密）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 4, delay = 1, forget = 3</span>
<span class="line">输出：6</span>
<span class="line">解释：</span>
<span class="line">第 1 天：第一个知道秘密的人为 A 。（一个人知道秘密）</span>
<span class="line">第 2 天：A 把秘密分享给 B 。（两个人知道秘密）</span>
<span class="line">第 3 天：A 和 B 把秘密分享给 2 个新的人 C 和 D 。（四个人知道秘密）</span>
<span class="line">第 4 天：A 忘记了秘密，B、C、D 分别分享给 3 个新的人。（六个人知道秘密）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= delay &lt; forget &lt;= n</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>直接解法：</p><p>由于每个人在第n天得知的情况（已得知x天）并不相同，但可以确认的是，每个人在1-n范围内，只会在某一天刚得知。</p><p>因此设计数组known，known[i]表示恰好在第i天得知消息的人数。</p><p>循环可以设计为，先判断某一天恰好有多少人得知，判断他们是否满足在第i天还记得。</p><p>然后，根据forget和delay，循环更新后续的known恰好得知的数组。</p><p>该过程模拟消息传播，不会出现重复计算。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int peopleAwareOfSecret(int n, int delay, int forget) {</span>
<span class="line">        const int MOD = 1&#39;000&#39;000&#39;007;</span>
<span class="line">        // known[i] 表示恰好在第 i 天得知秘密的人数</span>
<span class="line">        vector&lt;int&gt; known(n + 1);</span>
<span class="line">        known[1] = 1;</span>
<span class="line">        long long ans = 0;</span>
<span class="line"></span>
<span class="line">        for (int i = 1; i &lt;= n; i++) {</span>
<span class="line">            // 统计在第 n 天没有忘记秘密的人数</span>
<span class="line">            // 这要求 i+forget-1 &gt;= n，解得 i &gt;= n-forget+1</span>
<span class="line">            if (i &gt;= n - forget + 1) {</span>
<span class="line">                ans += known[i];</span>
<span class="line">            }</span>
<span class="line">            // 恰好在第 i 天得知秘密的人，会在第 [i+delay, i+forget-1] 天分享秘密</span>
<span class="line">            for (int j = i + delay; j &lt;= min(i + forget - 1, n); j++) {</span>
<span class="line">                known[j] = (known[j] + known[i]) % MOD; // known[j] += known[i]</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return ans % MOD;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>法1：差分数组优化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int peopleAwareOfSecret(int n, int delay, int forget) {</span>
<span class="line">        const int MOD = 1&#39;000&#39;000&#39;007;</span>
<span class="line">        vector&lt;int&gt; diff(n + 1);</span>
<span class="line">        diff[1] = 1;</span>
<span class="line">        diff[2] = -1;</span>
<span class="line">        int known = 0;</span>
<span class="line">        long long ans = 0;</span>
<span class="line"></span>
<span class="line">        for (int i = 1; i &lt;= n; i++) {</span>
<span class="line">            // 加上 diff[i] 后，known 表示恰好在第 i 天得知秘密的人数</span>
<span class="line">            known = (known + diff[i]) % MOD;</span>
<span class="line">            // 统计在第 n 天没有忘记秘密的人数</span>
<span class="line">            if (i &gt;= n - forget + 1) {</span>
<span class="line">                ans += known;</span>
<span class="line">            }</span>
<span class="line">            // 恰好在第 i 天得知秘密的人，会在第 [i+delay, i+forget-1] 天分享秘密</span>
<span class="line">            if (i + delay &lt;= n) {</span>
<span class="line">                diff[i + delay] = (diff[i + delay] + known) % MOD;</span>
<span class="line">            }</span>
<span class="line">            if (i + forget &lt;= n) {</span>
<span class="line">                diff[i + forget] = (diff[i + forget] - known + MOD) % MOD; // +MOD 保证结果非负</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return ans % MOD;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>法2：前缀和</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int peopleAwareOfSecret(int n, int delay, int forget) {</span>
<span class="line">        const int MOD = 1&#39;000&#39;000&#39;007;</span>
<span class="line">        vector&lt;int&gt; sum(n + 1); // known 数组的前缀和</span>
<span class="line">        sum[1] = 1;</span>
<span class="line"></span>
<span class="line">        for (int j = 2; j &lt;= n; j++) {</span>
<span class="line">            int known = (sum[max(j - delay, 0)] - sum[max(j - forget, 0)]) % MOD;</span>
<span class="line">            sum[j] = (sum[j - 1] + known) % MOD;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        int ans = sum[n] - sum[max(n - forget, 0)];</span>
<span class="line">        return (ans % MOD + MOD) % MOD; // 保证答案非负</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul>`,24)]))}const r=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20250909.html","title":"2327. 知道秘密的人数","lang":"zh-CN","frontmatter":{"date":"2025-09-09T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["队列","前缀和","差分数组"]},"headers":[],"git":{"updatedTime":1757400580000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"0461347f84b04dad6aad9a3773b7c9cf2e8cab8b","time":1757400580000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250909.md","excerpt":"\\n<p>在第 <code>1</code> 天，有一个人发现了一个秘密。</p>\\n<p>给你一个整数 <code>delay</code> ，表示每个人会在发现秘密后的 <code>delay</code> 天之后，<strong>每天</strong> 给一个新的人 <strong>分享</strong> 秘密。同时给你一个整数 <code>forget</code> ，表示每个人在发现秘密 <code>forget</code> 天之后会 <strong>忘记</strong> 这个秘密。一个人 <strong>不能</strong> 在忘记秘密那一天及之后的日子里分享秘密。</p>\\n<p>给你一个整数 <code>n</code> ，请你返回在第 <code>n</code> 天结束时，知道秘密的人数。由于答案可能会很大，请你将结果对 <code>109 + 7</code> <strong>取余</strong> 后返回。</p>"}');export{r as comp,t as data};

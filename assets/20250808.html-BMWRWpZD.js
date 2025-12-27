import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_808-分汤" tabindex="-1"><a class="header-anchor" href="#_808-分汤"><span><a href="https://leetcode.cn/problems/soup-servings/" target="_blank" rel="noopener noreferrer">808. 分汤</a></span></a></h1><p>你有两种汤，<strong>A</strong> 和 <strong>B</strong>，每种初始为 <code>n</code> 毫升。在每一轮中，会随机选择以下四种服务操作中的一种，每种操作的概率为 <code>0.25</code>，且与之前的所有轮次 <strong>无关</strong>：</p><ol><li>从汤 A 取 100 毫升，从汤 B 取 0 毫升</li><li>从汤 A 取 75 毫升，从汤 B 取 25 毫升</li><li>从汤 A 取 50 毫升，从汤 B 取 50 毫升</li><li>从汤 A 取 25 毫升，从汤 B 取 75 毫升</li></ol><p><strong>注意：</strong></p><ul><li>不存在先分配 <code>100</code> ml <strong>汤B</strong> 的操作。</li><li>汤 A 和 B 在每次操作中同时被倒入。</li><li>如果一次操作要求你倒出比剩余的汤更多的量，请倒出该汤剩余的所有部分。</li></ul><p>操作过程在任何回合中任一汤被用完后立即停止。</p><p>返回汤 A 在 B 前耗尽的概率，加上两种汤在 <strong>同一回合</strong> 耗尽概率的一半。返回值在正确答案 <code>10-5</code> 的范围内将被认为是正确的。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 50</span>
<span class="line">输出：0.62500</span>
<span class="line">解释：</span>
<span class="line">如果我们选择前两个操作，A 首先将变为空。</span>
<span class="line">对于第三个操作，A 和 B 会同时变为空。</span>
<span class="line">对于第四个操作，B 首先将变为空。</span>
<span class="line">所以 A 变为空的总概率加上 A 和 B 同时变为空的概率的一半是 0.25 *(1 + 1 + 0.5 + 0)= 0.625。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 100</span>
<span class="line">输出：0.71875</span>
<span class="line">解释：</span>
<span class="line">如果我们选择第一个操作，A 首先将变为空。</span>
<span class="line">如果我们选择第二个操作，A 将在执行操作 [1, 2, 3] 时变为空，然后 A 和 B 在执行操作 4 时同时变空。</span>
<span class="line">如果我们选择第三个操作，A 将在执行操作 [1, 2] 时变为空，然后 A 和 B 在执行操作 3 时同时变空。</span>
<span class="line">如果我们选择第四个操作，A 将在执行操作 1 时变为空，然后 A 和 B 在执行操作 2 时同时变空。</span>
<span class="line">所以 A 变为空的总概率加上 A 和 B 同时变为空的概率的一半是 0.71875。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>0 &lt;= n &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>非常明确的状态转移方程以及边界条件。</p><p>离谱的上界条件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    double soupServings(int n) {</span>
<span class="line">        n = ceil((double) n / 25);</span>
<span class="line">        if (n &gt;= 179) {</span>
<span class="line">            return 1.0;</span>
<span class="line">        }</span>
<span class="line">        vector&lt;vector&lt;double&gt;&gt; dp(n + 1, vector&lt;double&gt;(n + 1));</span>
<span class="line">        dp[0][0] = 0.5;</span>
<span class="line">        for (int i = 1; i &lt;= n; i++) {</span>
<span class="line">            dp[0][i] = 1.0;</span>
<span class="line">        }</span>
<span class="line">        for (int i = 1; i &lt;= n; i++) {</span>
<span class="line">            for (int j = 1; j &lt;= n; j++) {</span>
<span class="line">                dp[i][j] = (dp[max(0, i - 4)][j] + dp[max(0, i - 3)][max(0, j - 1)] +</span>
<span class="line">                           dp[max(0, i - 2)][max(0, j - 2)] + dp[max(0, i - 1)][max(0, j - 3)]) / 4.0;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dp[n][n];</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(<em>n</em>2)。</li><li>空间复杂度：O(<em>n</em>2)。</li></ul>`,19)]))}const t=s(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20250808.html","title":"808. 分汤","lang":"zh-CN","frontmatter":{"date":"2025-08-08T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","动态规划","概率"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":4,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"7ddbd5ab67b38f04da46300ef38738a69ee74160","time":1754704461000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"移除错误图片引用"},{"hash":"f7ce60e3074ae020640d35b363eda52bcfe38838","time":1754704202000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"},{"hash":"eba1e930857d5d5bb84d24c9743d267b4933f5e4","time":1754621783000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250808.md","excerpt":"\\n<p>你有两种汤，<strong>A</strong> 和 <strong>B</strong>，每种初始为 <code>n</code> 毫升。在每一轮中，会随机选择以下四种服务操作中的一种，每种操作的概率为 <code>0.25</code>，且与之前的所有轮次 <strong>无关</strong>：</p>\\n<ol>\\n<li>从汤 A 取 100 毫升，从汤 B 取 0 毫升</li>\\n<li>从汤 A 取 75 毫升，从汤 B 取 25 毫升</li>\\n<li>从汤 A 取 50 毫升，从汤 B 取 50 毫升</li>\\n<li>从汤 A 取 25 毫升，从汤 B 取 75 毫升</li>\\n</ol>"}');export{t as comp,p as data};

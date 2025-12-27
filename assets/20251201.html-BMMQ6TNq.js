import{_ as e,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(r,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_2141-同时运行-n-台电脑的最长时间" tabindex="-1"><a class="header-anchor" href="#_2141-同时运行-n-台电脑的最长时间"><span><a href="https://leetcode.cn/problems/maximum-running-time-of-n-computers/" target="_blank" rel="noopener noreferrer">2141. 同时运行 N 台电脑的最长时间</a></span></a></h1><p>你有 <code>n</code> 台电脑。给你整数 <code>n</code> 和一个下标从 <strong>0</strong> 开始的整数数组 <code>batteries</code> ，其中第 <code>i</code> 个电池可以让一台电脑 <strong>运行</strong> <code>batteries[i]</code> 分钟。你想使用这些电池让 <strong>全部</strong> <code>n</code> 台电脑 <strong>同时</strong> 运行。</p><p>一开始，你可以给每台电脑连接 <strong>至多一个电池</strong> 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 <strong>任意次</strong> 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。</p><p>注意，你不能给电池充电。</p><p>请你返回你可以让 <code>n</code> 台电脑同时运行的 <strong>最长</strong> 分钟数。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/01/06/example1-fit.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, batteries = [3,3,3]</span>
<span class="line">输出：4</span>
<span class="line">解释：</span>
<span class="line">一开始，将第一台电脑与电池 0 连接，第二台电脑与电池 1 连接。</span>
<span class="line">2 分钟后，将第二台电脑与电池 1 断开连接，并连接电池 2 。注意，电池 0 还可以供电 1 分钟。</span>
<span class="line">在第 3 分钟结尾，你需要将第一台电脑与电池 0 断开连接，然后连接电池 1 。</span>
<span class="line">在第 4 分钟结尾，电池 1 也被耗尽，第一台电脑无法继续运行。</span>
<span class="line">我们最多能同时让两台电脑同时运行 4 分钟，所以我们返回 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/01/06/example2.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, batteries = [1,1,1,1]</span>
<span class="line">输出：2</span>
<span class="line">解释：</span>
<span class="line">一开始，将第一台电脑与电池 0 连接，第二台电脑与电池 2 连接。</span>
<span class="line">一分钟后，电池 0 和电池 2 同时耗尽，所以你需要将它们断开连接，并将电池 1 和第一台电脑连接，电池 3 和第二台电脑连接。</span>
<span class="line">1 分钟后，电池 1 和电池 3 也耗尽了，所以两台电脑都无法继续运行。</span>
<span class="line">我们最多能让两台电脑同时运行 2 分钟，所以我们返回 2 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><ul><li>如果当前最大电池的电量 <strong>不超过</strong> 当前平均值 <code>sum / n</code>，说明所有剩下的电池都可以“灵活分配”，不会浪费，答案就是 <code>sum / n</code>。</li><li>如果它超过平均值，那就让它单独负责一台电脑，然后我们： <ul><li>从总电量 <code>sum</code> 中减去这块电池的电量，</li><li>电脑数量 <code>n</code> 减 1，</li><li>继续看下一个最大电池。</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long maxRunTime(int n, vector&lt;int&gt;&amp; batteries) {</span>
<span class="line">        ranges::sort(batteries, greater());</span>
<span class="line">        long long sum = reduce(batteries.begin(), batteries.end(), 0LL);</span>
<span class="line">        for (int i = 0; ; i++) {</span>
<span class="line">            if (batteries[i] &lt;= sum / n) {</span>
<span class="line">                return sum / n;</span>
<span class="line">            }</span>
<span class="line">            sum -= batteries[i];</span>
<span class="line">            n--;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mlogm)</li><li>空间复杂度：O(1)</li></ul>`,16)]))}const c=e(l,[["render",t]]),o=JSON.parse('{"path":"/leetcode/20251201.html","title":"2141. 同时运行 N 台电脑的最长时间","lang":"zh-CN","frontmatter":{"date":"2025-12-01T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["贪心","数组","二分查找","前缀和"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251201.md","excerpt":"\\n<p>你有 <code>n</code> 台电脑。给你整数 <code>n</code> 和一个下标从 <strong>0</strong> 开始的整数数组 <code>batteries</code> ，其中第 <code>i</code> 个电池可以让一台电脑 <strong>运行</strong> <code>batteries[i]</code> 分钟。你想使用这些电池让 <strong>全部</strong> <code>n</code> 台电脑 <strong>同时</strong> 运行。</p>\\n<p>一开始，你可以给每台电脑连接 <strong>至多一个电池</strong> 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 <strong>任意次</strong> 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。</p>"}');export{c as comp,o as data};

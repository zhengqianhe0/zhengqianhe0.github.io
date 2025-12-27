import{_ as n,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="_2106-摘水果" tabindex="-1"><a class="header-anchor" href="#_2106-摘水果"><span><a href="https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/" target="_blank" rel="noopener noreferrer">2106. 摘水果</a></span></a></h1><p>在一个无限的 x 坐标轴上，有许多水果分布在其中某些位置。给你一个二维整数数组 <code>fruits</code> ，其中 <code>fruits[i] = [positioni, amounti]</code> 表示共有 <code>amounti</code> 个水果放置在 <code>positioni</code> 上。<code>fruits</code> 已经按 <code>positioni</code> <strong>升序排列</strong> ，每个 <code>positioni</code> <strong>互不相同</strong> 。</p><p>另给你两个整数 <code>startPos</code> 和 <code>k</code> 。最初，你位于 <code>startPos</code> 。从任何位置，你可以选择 <strong>向左或者向右</strong> 走。在 x 轴上每移动 <strong>一个单位</strong> ，就记作 <strong>一步</strong> 。你总共可以走 <strong>最多</strong> <code>k</code> 步。你每达到一个位置，都会摘掉全部的水果，水果也将从该位置消失（不会再生）。</p><p>返回你可以摘到水果的 <strong>最大总数</strong> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/11/21/1.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4</span>
<span class="line">输出：9</span>
<span class="line">解释：</span>
<span class="line">最佳路线为：</span>
<span class="line">- 向右移动到位置 6 ，摘到 3 个水果</span>
<span class="line">- 向右移动到位置 8 ，摘到 6 个水果</span>
<span class="line">移动 3 步，共摘到 3 + 6 = 9 个水果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/11/21/2.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4</span>
<span class="line">输出：14</span>
<span class="line">解释：</span>
<span class="line">可以移动最多 k = 4 步，所以无法到达位置 0 和位置 10 。</span>
<span class="line">最佳路线为：</span>
<span class="line">- 在初始位置 5 ，摘到 7 个水果</span>
<span class="line">- 向左移动到位置 4 ，摘到 1 个水果</span>
<span class="line">- 向右移动到位置 6 ，摘到 2 个水果</span>
<span class="line">- 向右移动到位置 7 ，摘到 4 个水果</span>
<span class="line">移动 1 + 3 = 4 步，共摘到 7 + 1 + 2 + 4 = 14 个水果</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/11/21/3.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [[0,3],[6,4],[8,5]], startPos = 3, k = 2</span>
<span class="line">输出：0</span>
<span class="line">解释：</span>
<span class="line">最多可以移动 k = 2 步，无法到达任一有水果的地方</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= fruits.length &lt;= 105</code></li><li><code>fruits[i].length == 2</code></li><li><code>0 &lt;= startPos, positioni &lt;= 2 * 105</code></li><li>对于任意 <code>i &gt; 0</code> ，<code>positioni-1 &lt; positioni</code> 均成立（下标从 <strong>0</strong> 开始计数）</li><li><code>1 &lt;= amounti &lt;= 104</code></li><li><code>0 &lt;= k &lt;= 2 * 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/2254268/zhai-shui-guo-by-leetcode-solution-4j9v/?envType=daily-question&amp;envId=2025-08-03</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    int calculate_steps(int left_pos, int right_pos, int startPos) {</span>
<span class="line">        if (right_pos &lt;= startPos) {</span>
<span class="line">            return startPos - left_pos;</span>
<span class="line">        } else if (left_pos &gt;= startPos) {</span>
<span class="line">            return right_pos - startPos;</span>
<span class="line">        } else {</span>
<span class="line">            // 走法有两种:</span>
<span class="line">            // 1. 先去左边再折返去右边: (startPos - left_pos) * 2 + (right_pos - startPos)</span>
<span class="line">            // 2. 先去右边再折返去左边: (right_pos - startPos) * 2 + (startPos - left_pos)</span>
<span class="line">            // 这两种走法的距离可以简化为：</span>
<span class="line">            // (从起点到较近一端的距离) + (整个区间的长度)</span>
<span class="line">            return min(startPos - left_pos, right_pos - startPos) + (right_pos - left_pos);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    int maxTotalFruits(vector&lt;vector&lt;int&gt;&gt;&amp; fruits, int startPos, int k) {</span>
<span class="line">        int left = 0;</span>
<span class="line">        int right = 0;</span>
<span class="line">        int n = fruits.size();</span>
<span class="line">        int sum = 0;</span>
<span class="line">        int ans = 0;</span>
<span class="line">        // 每次固定住窗口右边界</span>
<span class="line">        while (right &lt; n) {</span>
<span class="line">            sum += fruits[right][1];</span>
<span class="line">            // 移动左边界</span>
<span class="line">            while (left &lt;= right &amp;&amp; calculate_steps(fruits[left][0], fruits[right][0],startPos) &gt; k) {</span>
<span class="line">                sum -= fruits[left][1];</span>
<span class="line">                left++;</span>
<span class="line">            }</span>
<span class="line">            ans = max(ans, sum);</span>
<span class="line">            right++;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><p>时间复杂度：O(n)，其中 n 表示数组的长度。每次固定窗口的右侧，然后尝试移动左侧窗口，右侧端点最多移动 n 次，左侧端点最多移动 n 次，因此时间复杂度为 O(2n)=O(n)。</p><p>空间复杂度：O(1)。</p>`,21)]))}const r=n(l,[["render",t]]),o=JSON.parse('{"path":"/leetcode/20250803.html","title":"2106. 摘水果","lang":"zh-CN","frontmatter":{"date":"2025-08-03T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["二分查找","数组","前缀和","滑动窗口"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"fe0e3caa767126240897b6aae25bcdfbb072cc45","time":1754355094000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"},{"hash":"8605f53764991bf6fbc6dc4761ac58134ea9ea74","time":1754232987000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250803.md","excerpt":"\\n<p>在一个无限的 x 坐标轴上，有许多水果分布在其中某些位置。给你一个二维整数数组 <code>fruits</code> ，其中 <code>fruits[i] = [positioni, amounti]</code> 表示共有 <code>amounti</code> 个水果放置在 <code>positioni</code> 上。<code>fruits</code> 已经按 <code>positioni</code> <strong>升序排列</strong> ，每个 <code>positioni</code> <strong>互不相同</strong> 。</p>\\n<p>另给你两个整数 <code>startPos</code> 和 <code>k</code> 。最初，你位于 <code>startPos</code> 。从任何位置，你可以选择 <strong>向左或者向右</strong> 走。在 x 轴上每移动 <strong>一个单位</strong> ，就记作 <strong>一步</strong> 。你总共可以走 <strong>最多</strong> <code>k</code> 步。你每达到一个位置，都会摘掉全部的水果，水果也将从该位置消失（不会再生）。</p>"}');export{r as comp,o as data};

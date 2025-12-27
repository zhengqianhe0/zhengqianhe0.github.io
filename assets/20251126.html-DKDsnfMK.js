import{_ as n,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(t,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="_2435-矩阵中和能被-k-整除的路径" tabindex="-1"><a class="header-anchor" href="#_2435-矩阵中和能被-k-整除的路径"><span><a href="https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/" target="_blank" rel="noopener noreferrer">2435. 矩阵中和能被 K 整除的路径</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的 <code>m x n</code> 整数矩阵 <code>grid</code> 和一个整数 <code>k</code> 。你从起点 <code>(0, 0)</code> 出发，每一步只能往 <strong>下</strong> 或者往 <strong>右</strong> ，你想要到达终点 <code>(m - 1, n - 1)</code> 。</p><p>请你返回路径和能被 <code>k</code> 整除的路径数目，由于答案可能很大，返回答案对 <code>109 + 7</code> <strong>取余</strong> 的结果。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/08/13/image-20220813183124-1.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3</span>
<span class="line">输出：2</span>
<span class="line">解释：有两条路径满足路径上元素的和能被 k 整除。</span>
<span class="line">第一条路径为上图中用红色标注的路径，和为 5 + 2 + 4 + 5 + 2 = 18 ，能被 3 整除。</span>
<span class="line">第二条路径为上图中用蓝色标注的路径，和为 5 + 3 + 0 + 5 + 2 = 15 ，能被 3 整除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/08/17/image-20220817112930-3.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：grid = [[0,0]], k = 5</span>
<span class="line">输出：1</span>
<span class="line">解释：红色标注的路径和为 0 + 0 = 0 ，能被 5 整除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/08/12/image-20220812224605-3.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1</span>
<span class="line">输出：10</span>
<span class="line">解释：每个数字都能被 1 整除，所以每一条路径的和都能被 k 整除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 5 * 104</code></li><li><code>1 &lt;= m * n &lt;= 5 * 104</code></li><li><code>0 &lt;= grid[i][j] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 50</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numberOfPaths(vector&lt;vector&lt;int&gt;&gt;&amp; grid, int k) {</span>
<span class="line">        constexpr static int MOD = 1&#39;000&#39;000&#39;007;</span>
<span class="line">        int m = grid.size(), n = grid[0].size();</span>
<span class="line">        vector memo(m, vector(n, vector&lt;int&gt;(k, -1))); // -1 表示没有计算过</span>
<span class="line"></span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int i, int j, int s) -&gt; int {</span>
<span class="line">            if (i &lt; 0 || j &lt; 0) { // 出界</span>
<span class="line">                return 0;</span>
<span class="line">            }</span>
<span class="line">            int pre_s = ((s - grid[i][j]) % k + k) % k; // 保证模 k 结果非负</span>
<span class="line">            if (i == 0 &amp;&amp; j == 0) { // 起点</span>
<span class="line">                return pre_s == 0; // pre_s == 0 说明 s == grid[i][j] % k</span>
<span class="line">            }</span>
<span class="line">            int&amp; res = memo[i][j][s]; // 注意这里是引用</span>
<span class="line">            if (res != -1) { // 之前计算过</span>
<span class="line">                return res;</span>
<span class="line">            }</span>
<span class="line">            return res = (dfs(i - 1, j, pre_s) + dfs(i, j - 1, pre_s)) % MOD;</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        return dfs(m - 1, n - 1, 0);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mnk)</li><li>空间复杂度：O(mnk)</li></ul>`,18)]))}const r=n(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20251126.html","title":"2435. 矩阵中和能被 K 整除的路径","lang":"zh-CN","frontmatter":{"date":"2025-11-26T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["矩阵","数学","动态规划"]},"headers":[],"git":{"updatedTime":1764379051000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f1efcaa796af7064e3cee738675cd19d4efba611","time":1764379051000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251126.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的 <code>m x n</code> 整数矩阵 <code>grid</code> 和一个整数 <code>k</code> 。你从起点 <code>(0, 0)</code> 出发，每一步只能往 <strong>下</strong> 或者往 <strong>右</strong> ，你想要到达终点 <code>(m - 1, n - 1)</code> 。</p>\\n<p>请你返回路径和能被 <code>k</code> 整除的路径数目，由于答案可能很大，返回答案对 <code>109 + 7</code> <strong>取余</strong> 的结果。</p>"}');export{r as comp,p as data};

import{_ as s,c as i,a as e,o as a}from"./app-Bpj5Mkzv.js";const l={};function r(d,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="_3197-包含所有-1-的最小矩形面积-ii" tabindex="-1"><a class="header-anchor" href="#_3197-包含所有-1-的最小矩形面积-ii"><span><a href="https://leetcode.cn/problems/find-the-minimum-area-to-cover-all-ones-ii/" target="_blank" rel="noopener noreferrer">3197. 包含所有 1 的最小矩形面积 II</a></span></a></h1><p>给你一个二维 <strong>二进制</strong> 数组 <code>grid</code>。你需要找到 3 个 <strong>不重叠</strong>、面积 <strong>非零</strong> 、边在水平方向和竖直方向上的矩形，并且满足 <code>grid</code> 中所有的 1 都在这些矩形的内部。</p><p>返回这些矩形面积之和的 <strong>最小</strong> 可能值。</p><p><strong>注意</strong>，这些矩形可以相接。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> grid = [[1,0,1],[1,1,1]]</p><p><strong>输出：</strong> 5</p><ul><li>位于 <code>(0, 0)</code> 和 <code>(1, 0)</code> 的 1 被一个面积为 2 的矩形覆盖。</li><li>位于 <code>(0, 2)</code> 和 <code>(1, 2)</code> 的 1 被一个面积为 2 的矩形覆盖。</li><li>位于 <code>(1, 1)</code> 的 1 被一个面积为 1 的矩形覆盖。</li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> grid = [[1,0,1,0],[0,1,0,1]]</p><p><strong>输出：</strong> 5</p><ul><li>位于 <code>(0, 0)</code> 和 <code>(0, 2)</code> 的 1 被一个面积为 3 的矩形覆盖。</li><li>位于 <code>(1, 1)</code> 的 1 被一个面积为 1 的矩形覆盖。</li><li>位于 <code>(1, 3)</code> 的 1 被一个面积为 1 的矩形覆盖。</li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= grid.length, grid[i].length &lt;= 30</code></li><li><code>grid[i][j]</code> 是 0 或 1。</li><li>输入保证 <code>grid</code> 中至少有三个 1 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先切分，在逐个处理，最后求和取最小值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    // 切分成块后执行每个区域下的最小矩形</span>
<span class="line">    int minimumSum(vector&lt;vector&lt;int&gt;&gt; &amp;grid, int u, int d, int l, int r) {</span>
<span class="line">        int min_i = grid.size(), max_i = 0;</span>
<span class="line">        int min_j = grid[0].size(), max_j = 0;</span>
<span class="line">        for (int i = u; i &lt;= d; i++) {</span>
<span class="line">            for (int j = l; j &lt;= r; j++) {</span>
<span class="line">                if (grid[i][j] == 1) {</span>
<span class="line">                    min_i = min(min_i, i);</span>
<span class="line">                    min_j = min(min_j, j);</span>
<span class="line">                    max_i = max(max_i, i);</span>
<span class="line">                    max_j = max(max_j, j);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return min_i &lt;= max_i ? (max_i - min_i + 1) * (max_j - min_j + 1) : INT_MAX / 3;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 六种切分方法，可以看作三种方法，逆时针旋转90度</span>
<span class="line">    vector&lt;vector&lt;int&gt;&gt; rotate(vector&lt;vector&lt;int&gt;&gt; &amp;vec) {</span>
<span class="line">        int n = vec.size(), m = vec[0].size();</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; ret(m, vector&lt;int&gt;(n));</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            for (int j = 0; j &lt; m; j++) {</span>
<span class="line">                ret[m - j - 1][i] = vec[i][j];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    int solve(vector&lt;vector&lt;int&gt;&gt; &amp;grid) {</span>
<span class="line">        int n = grid.size(), m = grid[0].size();</span>
<span class="line">        int res = n * m;</span>
<span class="line">        for (int i = 0; i + 1 &lt; n; i++) {</span>
<span class="line">            for (int j = 0; j + 1 &lt; m; j++) {</span>
<span class="line">                res = min(res, minimumSum(grid, 0, i, 0, m - 1)</span>
<span class="line">                             + minimumSum(grid, i + 1, n - 1, 0, j)</span>
<span class="line">                             + minimumSum(grid, i + 1, n - 1, j + 1, m - 1));</span>
<span class="line">                res = min(res, minimumSum(grid, 0, i, 0, j)</span>
<span class="line">                             + minimumSum(grid, 0, i, j + 1, m - 1)</span>
<span class="line">                             + minimumSum(grid, i + 1, n - 1, 0, m - 1));</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        for (int i = 0; i + 2 &lt; n; i++) {</span>
<span class="line">            for (int j = i + 1; j + 1 &lt; n; j++) {</span>
<span class="line">                res = min(res, minimumSum(grid, 0, i, 0, m - 1)</span>
<span class="line">                             + minimumSum(grid, i + 1, j, 0, m - 1)</span>
<span class="line">                             + minimumSum(grid, j + 1, n - 1, 0, m - 1));</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">public:</span>
<span class="line">    int minimumSum(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {</span>
<span class="line">        auto rgrid = rotate(grid);</span>
<span class="line">        return min(solve(grid), solve(rgrid));</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)^2</li><li>空间复杂度：O(mn)</li></ul>`,19)]))}const t=s(l,[["render",r]]),m=JSON.parse('{"path":"/leetcode/20250823.html","title":"3197. 包含所有 1 的最小矩形面积 II","lang":"zh-CN","frontmatter":{"date":"2025-08-23T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","枚举","矩阵"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"6f6777a3c57973a00f54666525105e6f64a3ba53","time":1755927301000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250823.md","excerpt":"\\n<p>给你一个二维 <strong>二进制</strong> 数组 <code>grid</code>。你需要找到 3 个 <strong>不重叠</strong>、面积 <strong>非零</strong> 、边在水平方向和竖直方向上的矩形，并且满足 <code>grid</code> 中所有的 1 都在这些矩形的内部。</p>\\n<p>返回这些矩形面积之和的 <strong>最小</strong> 可能值。</p>\\n<p><strong>注意</strong>，这些矩形可以相接。</p>\\n<p><strong>示例 1：</strong></p>\\n<p><strong>输入：</strong> grid = [[1,0,1],[1,1,1]]</p>"}');export{t as comp,m as data};

import{_ as s,c as i,a as e,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(t,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="_417-太平洋大西洋水流问题" tabindex="-1"><a class="header-anchor" href="#_417-太平洋大西洋水流问题"><span><a href="https://leetcode.cn/problems/pacific-atlantic-water-flow/" target="_blank" rel="noopener noreferrer">417. 太平洋大西洋水流问题</a></span></a></h1><p>有一个 <code>m × n</code> 的矩形岛屿，与 <strong>太平洋</strong> 和 <strong>大西洋</strong> 相邻。 <strong>“太平洋”</strong> 处于大陆的左边界和上边界，而 <strong>“大西洋”</strong> 处于大陆的右边界和下边界。</p><p>这个岛被分割成一个由若干方形单元格组成的网格。给定一个 <code>m x n</code> 的整数矩阵 <code>heights</code> ， <code>heights[r][c]</code> 表示坐标 <code>(r, c)</code> 上单元格 <strong>高于海平面的高度</strong> 。</p><p>岛上雨水较多，如果相邻单元格的高度 <strong>小于或等于</strong> 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。</p><p>返回网格坐标 <code>result</code> 的 <strong>2D 列表</strong> ，其中 <code>result[i] = [ri, ci]</code> 表示雨水从单元格 <code>(ri, ci)</code> 流动 <strong>既可流向太平洋也可流向大西洋</strong> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]</span>
<span class="line">输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: heights = [[2,1],[1,2]]</span>
<span class="line">输出: [[0,0],[0,1],[1,0],[1,1]]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>m == heights.length</code></li><li><code>n == heights[r].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>0 &lt;= heights[r][c] &lt;= 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>学习lambda递归的写法</p><p>vis数组用int8_t类型的意义：</p><p>仅占一字节，bool不能取地址，比bool计算快，比int节省空间</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    // 左右上下</span>
<span class="line">    static constexpr int DIRS[4][2] = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}};</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    vector&lt;vector&lt;int&gt;&gt; pacificAtlantic(vector&lt;vector&lt;int&gt;&gt;&amp; heights) {</span>
<span class="line">        int m = heights.size(), n = heights[0].size();</span>
<span class="line"></span>
<span class="line">        // lambda 递归</span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int i, int j, vector&lt;vector&lt;int8_t&gt;&gt;&amp; vis) -&gt; void {</span>
<span class="line">            if (vis[i][j]) { // 避免重复访问，避免反复横跳无限递归</span>
<span class="line">                return;</span>
<span class="line">            }</span>
<span class="line">            vis[i][j] = true; // 标记 (i,j) 已访问</span>
<span class="line">            for (auto&amp; [dx, dy] : DIRS) { // 枚举相邻格子</span>
<span class="line">                int x = i + dx, y = j + dy;</span>
<span class="line">                if (0 &lt;= x &amp;&amp; x &lt; m &amp;&amp; 0 &lt;= y &amp;&amp; y &lt; n &amp;&amp; heights[x][y] &gt;= heights[i][j]) { // 往高处走</span>
<span class="line">                    dfs(x, y, vis);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        // 从太平洋边界出发</span>
<span class="line">        vector pacific_vis(m, vector&lt;int8_t&gt;(n));</span>
<span class="line">        for (int j = 0; j &lt; n; j++) {</span>
<span class="line">            dfs(0, j, pacific_vis); // 上边界</span>
<span class="line">        }</span>
<span class="line">        for (int i = 1; i &lt; m; i++) {</span>
<span class="line">            dfs(i, 0, pacific_vis); // 左边界</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 从大西洋边界出发</span>
<span class="line">        vector atlantic_vis(m, vector&lt;int8_t&gt;(n));</span>
<span class="line">        for (int j = 0; j &lt; n; j++) {</span>
<span class="line">            dfs(m - 1, j, atlantic_vis); // 下边界</span>
<span class="line">        }</span>
<span class="line">        for (int i = 0; i &lt; m - 1; i++) {</span>
<span class="line">            dfs(i, n - 1, atlantic_vis); // 右边界</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 交集即为答案</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; ans;</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            for (int j = 0; j &lt; n; j++) {</span>
<span class="line">                if (pacific_vis[i][j] &amp;&amp; atlantic_vis[i][j]) {</span>
<span class="line">                    ans.push_back({i, j});</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(mn)</li></ul>`,19)]))}const p=s(l,[["render",c]]),r=JSON.parse('{"path":"/leetcode/20251005.html","title":"417. 太平洋大西洋水流问题","lang":"zh-CN","frontmatter":{"date":"2025-10-05T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["矩阵","数组","DFS","BFS"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251005.md","excerpt":"\\n<p>有一个 <code>m × n</code> 的矩形岛屿，与 <strong>太平洋</strong> 和 <strong>大西洋</strong> 相邻。 <strong>“太平洋”</strong> 处于大陆的左边界和上边界，而 <strong>“大西洋”</strong> 处于大陆的右边界和下边界。</p>\\n<p>这个岛被分割成一个由若干方形单元格组成的网格。给定一个 <code>m x n</code> 的整数矩阵 <code>heights</code> ， <code>heights[r][c]</code> 表示坐标 <code>(r, c)</code> 上单元格 <strong>高于海平面的高度</strong> 。</p>"}');export{p as comp,r as data};

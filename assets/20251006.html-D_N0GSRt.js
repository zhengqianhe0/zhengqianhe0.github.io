import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_778-水位上升的泳池中游泳" tabindex="-1"><a class="header-anchor" href="#_778-水位上升的泳池中游泳"><span><a href="https://leetcode.cn/problems/swim-in-rising-water/" target="_blank" rel="noopener noreferrer">778. 水位上升的泳池中游泳</a></span></a></h1><p>在一个 <code>n x n</code> 的整数矩阵 <code>grid</code> 中，每一个方格的值 <code>grid[i][j]</code> 表示位置 <code>(i, j)</code> 的平台高度。</p><p>当开始下雨时，在时间为 <code>t</code> 时，水池中的水位为 <code>t</code> 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。</p><p>你从坐标方格的左上平台 <code>(0，0)</code> 出发。返回 <em>你到达坐标方格的右下平台 <code>(n-1, n-1)</code> 所需的最少时间 。</em></p><p><strong>示例 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: grid = [[0,2],[1,3]]</span>
<span class="line">输出: 3</span>
<span class="line">解释:</span>
<span class="line">时间为0时，你位于坐标方格的位置为 (0, 0)。</span>
<span class="line">此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。</span>
<span class="line">等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]</span>
<span class="line">输出: 16</span>
<span class="line">解释: 最终的路线用加粗进行了标记。</span>
<span class="line">我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>n == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>0 &lt;= grid[i][j] &lt; n2</code></li><li><code>grid[i][j]</code> 中每个值 <strong>均无重复</strong></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>找到一条从起点 (0,0) 到终点 (<em>n</em>−1,<em>n</em>−1) 的路径，且路径上的 <em>grid</em>[<em>i</em>][<em>j</em>] 的最大值尽量小。返回这个最大值。</p><p>因此，用logn级别的二分查找+n²级别的DFS。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    static constexpr int DIRS[4][2] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};</span>
<span class="line">public:</span>
<span class="line">    int swimInWater(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {</span>
<span class="line">        int n = grid.size();</span>
<span class="line">        vector vis(n, vector&lt;int&gt;(n, -1));</span>
<span class="line"></span>
<span class="line">        auto check = [&amp;](int mx) -&gt; bool {</span>
<span class="line">            auto dfs = [&amp;](this auto&amp;&amp; dfs, int i, int j) -&gt; bool {</span>
<span class="line">                if (i == n - 1 &amp;&amp; j == n - 1) { // 到达终点</span>
<span class="line">                    return true;</span>
<span class="line">                }</span>
<span class="line">                // 标记访问过，避免重复访问</span>
<span class="line">                // 用 mx 区分不同的 check，如果 vis[x][y] != mx，说明不是本次 check 访问过的格子</span>
<span class="line">                vis[i][j] = mx; </span>
<span class="line">                for (auto&amp; [dx, dy] : DIRS) { // 访问相邻的格子</span>
<span class="line">                    int x = i + dx, y = j + dy;</span>
<span class="line">                    // 递归要求，在边界范围内，每次找的方向都满足对应格子小于mx，没到过，且最终能到终点</span>
<span class="line">                    if (0 &lt;= x &amp;&amp; x &lt; n &amp;&amp; 0 &lt;= y &amp;&amp; y &lt; n &amp;&amp; grid[x][y] &lt;= mx &amp;&amp; vis[x][y] != mx &amp;&amp; dfs(x, y)) {</span>
<span class="line">                        return true;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">                return false;</span>
<span class="line">            };</span>
<span class="line">            return dfs(0, 0);</span>
<span class="line">        };</span>
<span class="line">        </span>
<span class="line">        // 注意二分的边界情况，当找到一个成功的情况，mid应该被留在边界内；如果不成功，left不应该被留在边界内</span>
<span class="line">        int left = max(grid[0][0], grid[n - 1][n - 1]);</span>
<span class="line">        int right = n * n - 1;</span>
<span class="line">        while (left &lt; right) { </span>
<span class="line">            int mid = left + (right - left) / 2;</span>
<span class="line">            if(check(mid)){</span>
<span class="line">                right=mid;</span>
<span class="line">            }else{</span>
<span class="line">                left=mid+1;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return right;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n²logn)</li><li>空间复杂度：O(n²)</li></ul>`,18)]))}const r=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251006.html","title":"778. 水位上升的泳池中游泳","lang":"zh-CN","frontmatter":{"date":"2025-10-06T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["矩阵","数组","DFS","BFS"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251006.md","excerpt":"\\n<p>在一个 <code>n x n</code> 的整数矩阵 <code>grid</code> 中，每一个方格的值 <code>grid[i][j]</code> 表示位置 <code>(i, j)</code> 的平台高度。</p>\\n<p>当开始下雨时，在时间为 <code>t</code> 时，水池中的水位为 <code>t</code> 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。</p>\\n<p>你从坐标方格的左上平台 <code>(0，0)</code> 出发。返回 <em>你到达坐标方格的右下平台 <code>(n-1, n-1)</code> 所需的最少时间 。</em></p>"}');export{r as comp,t as data};

import{_ as s,c as e,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2257-统计网格图中没有被保卫的格子数" tabindex="-1"><a class="header-anchor" href="#_2257-统计网格图中没有被保卫的格子数"><span><a href="https://leetcode.cn/problems/count-unguarded-cells-in-the-grid/" target="_blank" rel="noopener noreferrer">2257. 统计网格图中没有被保卫的格子数</a></span></a></h1><p>给你两个整数 <code>m</code> 和 <code>n</code> 表示一个下标从 <strong>0</strong> 开始的 <code>m x n</code> 网格图。同时给你两个二维整数数组 <code>guards</code> 和 <code>walls</code> ，其中 <code>guards[i] = [rowi, coli]</code> 且 <code>walls[j] = [rowj, colj]</code> ，分别表示第 <code>i</code> 个警卫和第 <code>j</code> 座墙所在的位置。</p><p>一个警卫能看到 4 个坐标轴方向（即东、南、西、北）的 <strong>所有</strong> 格子，除非他们被一座墙或者另外一个警卫 <strong>挡住</strong> 了视线。如果一个格子能被 <strong>至少</strong> 一个警卫看到，那么我们说这个格子被 <strong>保卫</strong> 了。</p><p>请你返回空格子中，有多少个格子是 <strong>没被保卫</strong> 的。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/03/10/example1drawio2.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]</span>
<span class="line">输出：7</span>
<span class="line">解释：上图中，被保卫和没有被保卫的格子分别用红色和绿色表示。</span>
<span class="line">总共有 7 个没有被保卫的格子，所以我们返回 7 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/03/10/example2drawio.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]</span>
<span class="line">输出：4</span>
<span class="line">解释：上图中，没有被保卫的格子用绿色表示。</span>
<span class="line">总共有 4 个没有被保卫的格子，所以我们返回 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= m, n &lt;= 105</code></li><li><code>2 &lt;= m * n &lt;= 105</code></li><li><code>1 &lt;= guards.length, walls.length &lt;= 5 * 104</code></li><li><code>2 &lt;= guards.length + walls.length &lt;= m * n</code></li><li><code>guards[i].length == walls[j].length == 2</code></li><li><code>0 &lt;= rowi, rowj &lt; m</code></li><li><code>0 &lt;= coli, colj &lt; n</code></li><li><code>guards</code> 和 <code>walls</code> 中所有位置 <strong>互不相同</strong> 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先设置墙和警卫</p><p>然后遍历警卫，向四个方向分别一探到底</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    static constexpr int DIRS[4][2]={{0,-1},{0,1},{-1,0},{1,0}};</span>
<span class="line">public:</span>
<span class="line">    int countUnguarded(int m, int n, vector&lt;vector&lt;int&gt;&gt;&amp; guards, vector&lt;vector&lt;int&gt;&gt;&amp; walls) {</span>
<span class="line">        vector guarded(m,vector&lt;int&gt;(n));</span>
<span class="line">        for(auto&amp; g:guards){</span>
<span class="line">            guarded[g[0]][g[1]]=-1;</span>
<span class="line">        }</span>
<span class="line">        for(auto&amp; w:walls){</span>
<span class="line">            guarded[w[0]][w[1]] = -1;</span>
<span class="line">        }</span>
<span class="line">        for(auto&amp; g:guards){</span>
<span class="line">            for(auto&amp; [dx,dy]:DIRS){</span>
<span class="line">                int x=g[0]+dx,y=g[1]+dy;</span>
<span class="line">                while(x&gt;=0&amp;&amp;x&lt;m&amp;&amp;y&gt;=0&amp;&amp;y&lt;n&amp;&amp;guarded[x][y]!=-1){</span>
<span class="line">                    guarded[x][y]=1;</span>
<span class="line">                    x+=dx;</span>
<span class="line">                    y+=dy;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        int ans=0;</span>
<span class="line">        for(auto&amp; row:guarded){</span>
<span class="line">            ans+=ranges::count(row,0);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(mn)</li></ul>`,18)]))}const t=s(i,[["render",d]]),o=JSON.parse('{"path":"/leetcode/20251102.html","title":"2257. 统计网格图中没有被保卫的格子数","lang":"zh-CN","frontmatter":{"date":"2025-11-02T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","矩阵","模拟"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251102.md","excerpt":"\\n<p>给你两个整数 <code>m</code> 和 <code>n</code> 表示一个下标从 <strong>0</strong> 开始的 <code>m x n</code> 网格图。同时给你两个二维整数数组 <code>guards</code> 和 <code>walls</code> ，其中 <code>guards[i] = [rowi, coli]</code> 且 <code>walls[j] = [rowj, colj]</code> ，分别表示第 <code>i</code> 个警卫和第 <code>j</code> 座墙所在的位置。</p>\\n<p>一个警卫能看到 4 个坐标轴方向（即东、南、西、北）的 <strong>所有</strong> 格子，除非他们被一座墙或者另外一个警卫 <strong>挡住</strong> 了视线。如果一个格子能被 <strong>至少</strong> 一个警卫看到，那么我们说这个格子被 <strong>保卫</strong> 了。</p>"}');export{t as comp,o as data};

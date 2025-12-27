import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(p,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_407-接雨水-ii" tabindex="-1"><a class="header-anchor" href="#_407-接雨水-ii"><span><a href="https://leetcode.cn/problems/trapping-rain-water-ii/" target="_blank" rel="noopener noreferrer">407. 接雨水 II</a></span></a></h1><p>给你一个 <code>m x n</code> 的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。</p><p><strong>示例 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]</span>
<span class="line">输出: 4</span>
<span class="line">解释: 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]</span>
<span class="line">输出: 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示:</strong></p><ul><li><code>m == heightMap.length</code></li><li><code>n == heightMap[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 104</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    static constexpr int DIRS[4][2] = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}};</span>
<span class="line">public:</span>
<span class="line">    int trapRainWater(vector&lt;vector&lt;int&gt;&gt;&amp; heightMap) {</span>
<span class="line">        int m = heightMap.size(), n = heightMap[0].size();</span>
<span class="line">        // 建立堆，三个数值代表高度，x，y，greater&lt;&gt;表示最小堆</span>
<span class="line">        priority_queue&lt;tuple&lt;int, int, int&gt;, vector&lt;tuple&lt;int, int, int&gt;&gt;, greater&lt;&gt;&gt; pq;</span>
<span class="line">        // 初始化：把所有边界点加入堆，并标记为已访问（设为 -1）</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            for (int j = 0; j &lt; n; j++) {</span>
<span class="line">                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {</span>
<span class="line">                    pq.emplace(heightMap[i][j], i, j);</span>
<span class="line">                    heightMap[i][j] = -1; // 标记 (i,j) 访问过</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        int ans = 0;</span>
<span class="line">        while (!pq.empty()) {</span>
<span class="line">            auto [min_height, i, j] = pq.top(); // min_height 是木桶的短板</span>
<span class="line">            pq.pop(); // 去掉短板</span>
<span class="line">            for (auto&amp; [dx, dy] : DIRS) {</span>
<span class="line">                int x = i + dx, y = j + dy; // (i,j) 的邻居</span>
<span class="line">                if (0 &lt;= x &amp;&amp; x &lt; m &amp;&amp; 0 &lt;= y &amp;&amp; y &lt; n &amp;&amp; heightMap[x][y] &gt;= 0) { // (x,y) 没有访问过</span>
<span class="line">                    // 访问到一个位置，它要么被水填平（变成 min_height 高），要么自己更高（保持原高）；</span>
<span class="line">                    // 如果 (x,y) 的高度小于 min_height，那么接水量为 min_height - heightMap[x][y]</span>
<span class="line">                    ans += max(min_height - heightMap[x][y], 0);</span>
<span class="line">                    // 给木桶新增一块高为 max(min_height, heightMap[x][y]) 的木板</span>
<span class="line">                    pq.emplace(max(min_height, heightMap[x][y]), x, y);</span>
<span class="line">                    heightMap[x][y] = -1; // 标记 (x,y) 访问过</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mnlogmn)，mn遍历数组，logmn从堆顶获取值</li><li>空间复杂度：O(mn)</li></ul>`,14)]))}const c=s(l,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20251003.html","title":"407. 接雨水 II","lang":"zh-CN","frontmatter":{"date":"2025-10-03T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["BFS","数组","矩阵","优先队列"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251003.md","excerpt":"\\n<p>给你一个 <code>m x n</code> 的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。</p>\\n<p><strong>示例 1:</strong></p>\\n<p><img src=\\"https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg\\" alt=\\"img\\"></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]</span>\\n<span class=\\"line\\">输出: 4</span>\\n<span class=\\"line\\">解释: 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,r as data};

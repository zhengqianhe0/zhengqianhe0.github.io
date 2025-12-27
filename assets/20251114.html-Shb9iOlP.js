import{_ as n,c as s,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function c(d,e){return l(),s("div",null,e[0]||(e[0]=[i(`<h1 id="_2536-子矩阵元素加-1" tabindex="-1"><a class="header-anchor" href="#_2536-子矩阵元素加-1"><span><a href="https://leetcode.cn/problems/increment-submatrices-by-one/" target="_blank" rel="noopener noreferrer">2536. 子矩阵元素加 1</a></span></a></h1><p>给你一个正整数 <code>n</code> ，表示最初有一个 <code>n x n</code> 、下标从 <strong>0</strong> 开始的整数矩阵 <code>mat</code> ，矩阵中填满了 0 。</p><p>另给你一个二维整数数组 <code>query</code> 。针对每个查询 <code>query[i] = [row1i, col1i, row2i, col2i]</code> ，请你执行下述操作：</p><ul><li>找出 <strong>左上角</strong> 为 <code>(row1i, col1i)</code> 且 <strong>右下角</strong> 为 <code>(row2i, col2i)</code> 的子矩阵，将子矩阵中的 <strong>每个元素</strong> 加 <code>1</code> 。也就是给所有满足 <code>row1i &lt;= x &lt;= row2i</code> 和 <code>col1i &lt;= y &lt;= col2i</code> 的 <code>mat[x][y]</code> 加 <code>1</code> 。</li></ul><p>返回执行完所有操作后得到的矩阵 <code>mat</code> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/11/24/p2example11.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 3, queries = [[1,1,2,2],[0,0,1,1]]</span>
<span class="line">输出：[[1,1,0],[1,2,1],[0,1,1]]</span>
<span class="line">解释：上图所展示的分别是：初始矩阵、执行完第一个操作后的矩阵、执行完第二个操作后的矩阵。</span>
<span class="line">- 第一个操作：将左上角为 (1, 1) 且右下角为 (2, 2) 的子矩阵中的每个元素加 1 。 </span>
<span class="line">- 第二个操作：将左上角为 (0, 0) 且右下角为 (1, 1) 的子矩阵中的每个元素加 1 。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/11/24/p2example22.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, queries = [[0,0,1,1]]</span>
<span class="line">输出：[[1,1],[1,1]]</span>
<span class="line">解释：上图所展示的分别是：初始矩阵、执行完第一个操作后的矩阵。 </span>
<span class="line">- 第一个操作：将矩阵中的每个元素加 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li><li><code>1 &lt;= queries.length &lt;= 104</code></li><li><code>0 &lt;= row1i &lt;= row2i &lt; n</code></li><li><code>0 &lt;= col1i &lt;= col2i &lt; n</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>二维前缀和，注意右侧和下侧被排除后，右下被减掉两次，需要补充回来</p><p>同时注意差分数组和答案数组有偏移</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;vector&lt;int&gt;&gt; rangeAddQueries(int n, vector&lt;vector&lt;int&gt;&gt;&amp; queries) {</span>
<span class="line">        // 二维差分</span>
<span class="line">        vector diff(n + 2, vector&lt;int&gt;(n + 2));</span>
<span class="line">        for (auto&amp; q : queries) {</span>
<span class="line">            int r1 = q[0], c1 = q[1], r2 = q[2], c2 = q[3];</span>
<span class="line">            diff[r1 + 1][c1 + 1]++;</span>
<span class="line">            diff[r1 + 1][c2 + 2]--;</span>
<span class="line">            diff[r2 + 2][c1 + 1]--;</span>
<span class="line">            diff[r2 + 2][c2 + 2]++;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 原地计算 diff 的二维前缀和，然后填入答案</span>
<span class="line">        vector ans(n, vector&lt;int&gt;(n));</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            for (int j = 0; j &lt; n; j++) {</span>
<span class="line">                diff[i + 1][j + 1] += diff[i + 1][j] + diff[i][j + 1] - diff[i][j];</span>
<span class="line">                ans[i][j] = diff[i + 1][j + 1];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n²+q)</li><li>空间复杂度：O(n²)</li></ul>`,19)]))}const o=n(a,[["render",c]]),r=JSON.parse('{"path":"/leetcode/20251114.html","title":"2536. 子矩阵元素加 1","lang":"zh-CN","frontmatter":{"date":"2025-11-14T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","矩阵","前缀和"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251114.md","excerpt":"\\n<p>给你一个正整数 <code>n</code> ，表示最初有一个 <code>n x n</code> 、下标从 <strong>0</strong> 开始的整数矩阵 <code>mat</code> ，矩阵中填满了 0 。</p>\\n<p>另给你一个二维整数数组 <code>query</code> 。针对每个查询 <code>query[i] = [row1i, col1i, row2i, col2i]</code> ，请你执行下述操作：</p>\\n<ul>\\n<li>找出 <strong>左上角</strong> 为 <code>(row1i, col1i)</code> 且 <strong>右下角</strong> 为 <code>(row2i, col2i)</code> 的子矩阵，将子矩阵中的 <strong>每个元素</strong> 加 <code>1</code> 。也就是给所有满足 <code>row1i &lt;= x &lt;= row2i</code> 和 <code>col1i &lt;= y &lt;= col2i</code> 的 <code>mat[x][y]</code> 加 <code>1</code> 。</li>\\n</ul>"}');export{o as comp,r as data};

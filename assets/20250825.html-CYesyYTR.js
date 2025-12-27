import{_ as e,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_498-对角线遍历" tabindex="-1"><a class="header-anchor" href="#_498-对角线遍历"><span><a href="https://leetcode.cn/problems/diagonal-traverse/" target="_blank" rel="noopener noreferrer">498. 对角线遍历</a></span></a></h1><p>给你一个大小为 <code>m x n</code> 的矩阵 <code>mat</code> ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：mat = [[1,2,3],[4,5,6],[7,8,9]]</span>
<span class="line">输出：[1,2,4,7,5,3,6,8,9]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：mat = [[1,2],[3,4]]</span>
<span class="line">输出：[1,2,3,4]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= m, n &lt;= 104</code></li><li><code>1 &lt;= m * n &lt;= 104</code></li><li><code>-105 &lt;= mat[i][j] &lt;= 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>m行n列的矩阵，共有m+n-1条对角线。遍历的顺序为，偶数的对角线从下到上，奇数的从上到下。</p><p>然后确定对角线遍历的时候的起点。</p><p>遍历循环时的条件注意x和y都要保持边界。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; findDiagonalOrder(vector&lt;vector&lt;int&gt;&gt;&amp; mat) {</span>
<span class="line">        vector&lt;int&gt; res;</span>
<span class="line">        int m=mat.size(),n=mat[0].size();</span>
<span class="line">        for(int i=0;i&lt;m+n-1;i++){</span>
<span class="line">            if(i%2){</span>
<span class="line">                int x=i&lt;n?0:i-n+1;</span>
<span class="line">                int y=i&lt;n?i:n-1;</span>
<span class="line">                while(x&lt;m&amp;&amp;y&gt;=0){</span>
<span class="line">                    res.emplace_back(mat[x][y]);</span>
<span class="line">                    x++;</span>
<span class="line">                    y--;</span>
<span class="line">                }</span>
<span class="line">            }else{</span>
<span class="line">                int x=i&lt;m?i:m-1;</span>
<span class="line">                int y=i&lt;m?0:i-m+1;</span>
<span class="line">                while(x&gt;=0&amp;&amp;y&lt;n){</span>
<span class="line">                    res.emplace_back(mat[x][y]);</span>
<span class="line">                    x--;</span>
<span class="line">                    y++;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(1)</li></ul>`,15)]))}const r=e(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250825.html","title":"498. 对角线遍历","lang":"zh-CN","frontmatter":{"date":"2025-08-25T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","矩阵","模拟"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"7040600982095e57a93a4424211a32394c455a0e","time":1756083331000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250825.md","excerpt":"\\n<p>给你一个大小为 <code>m x n</code> 的矩阵 <code>mat</code> ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：mat = [[1,2,3],[4,5,6],[7,8,9]]</span>\\n<span class=\\"line\\">输出：[1,2,4,7,5,3,6,8,9]</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,p as data};

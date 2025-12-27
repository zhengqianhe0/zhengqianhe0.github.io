import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_1277-统计全为-1-的正方形子矩阵" tabindex="-1"><a class="header-anchor" href="#_1277-统计全为-1-的正方形子矩阵"><span><a href="https://leetcode.cn/problems/count-square-submatrices-with-all-ones/" target="_blank" rel="noopener noreferrer">1277. 统计全为 1 的正方形子矩阵</a></span></a></h1><p>给你一个 <code>m * n</code> 的矩阵，矩阵中的元素不是 <code>0</code> 就是 <code>1</code>，请你统计并返回其中完全由 <code>1</code> 组成的 <strong>正方形</strong> 子矩阵的个数。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：matrix =</span>
<span class="line">[</span>
<span class="line">  [0,1,1,1],</span>
<span class="line">  [1,1,1,1],</span>
<span class="line">  [0,1,1,1]</span>
<span class="line">]</span>
<span class="line">输出：15</span>
<span class="line">解释： </span>
<span class="line">边长为 1 的正方形有 10 个。</span>
<span class="line">边长为 2 的正方形有 4 个。</span>
<span class="line">边长为 3 的正方形有 1 个。</span>
<span class="line">正方形的总数 = 10 + 4 + 1 = 15.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：matrix = </span>
<span class="line">[</span>
<span class="line">  [1,0,1],</span>
<span class="line">  [1,1,0],</span>
<span class="line">  [1,1,0]</span>
<span class="line">]</span>
<span class="line">输出：7</span>
<span class="line">解释：</span>
<span class="line">边长为 1 的正方形有 6 个。 </span>
<span class="line">边长为 2 的正方形有 1 个。</span>
<span class="line">正方形的总数 = 6 + 1 = 7.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 300</code></li><li><code>1 &lt;= arr[0].length &lt;= 300</code></li><li><code>0 &lt;= arr[i][j] &lt;= 1</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>思路可以仿照昨天的一维的0数组的判断方法，即判断遇到1后遍历右下角是否能够成正方形子矩阵。但是时间复杂度上需要m*n遍历整个矩形并内部二维循环。</p><p>因此采用动态规划，时间空间复杂度都是矩形大小mn。</p><p>转移方程：设f(i,j)代表以(i,j)为右下角的矩形的最大边长，如果它自己的值是0那就是0。如果它自己的值是1，那么它一定等于（左，上，左上）三个小一个宽度的矩形中的最小的+1。</p><p>f(i,j)同时还可以代表以这个坐标为右下角的所有矩形数。因此ans为所有f的和。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countSquares(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) {</span>
<span class="line">        int m=matrix.size(), n=matrix[0].size();</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; f(m,vector&lt;int&gt;(n,0));</span>
<span class="line">        int ans=0;</span>
<span class="line">        for(int i=0;i&lt;m;++i){</span>
<span class="line">            for(int j=0;j&lt;n;++j){</span>
<span class="line">                if(i==0||j==0){</span>
<span class="line">                    f[i][j]=matrix[i][j];</span>
<span class="line">                }else if(matrix[i][j]==0){</span>
<span class="line">                    f[i][j]=0;</span>
<span class="line">                }else{</span>
<span class="line">                    f[i][j]=min({f[i][j-1],f[i-1][j],f[i-1][j-1]})+1;</span>
<span class="line">                }</span>
<span class="line">                ans+=f[i][j];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(mn)</li></ul>`,16)]))}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20250820.html","title":"1277. 统计全为 1 的正方形子矩阵","lang":"zh-CN","frontmatter":{"date":"2025-08-20T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","动态规划","矩阵"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"4ed152ed5a4e88f6dfdae7b5cbb5ec05c99a0072","time":1755658625000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250820.md","excerpt":"\\n<p>给你一个 <code>m * n</code> 的矩阵，矩阵中的元素不是 <code>0</code> 就是 <code>1</code>，请你统计并返回其中完全由 <code>1</code> 组成的 <strong>正方形</strong> 子矩阵的个数。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：matrix =</span>\\n<span class=\\"line\\">[</span>\\n<span class=\\"line\\">  [0,1,1,1],</span>\\n<span class=\\"line\\">  [1,1,1,1],</span>\\n<span class=\\"line\\">  [0,1,1,1]</span>\\n<span class=\\"line\\">]</span>\\n<span class=\\"line\\">输出：15</span>\\n<span class=\\"line\\">解释： </span>\\n<span class=\\"line\\">边长为 1 的正方形有 10 个。</span>\\n<span class=\\"line\\">边长为 2 的正方形有 4 个。</span>\\n<span class=\\"line\\">边长为 3 的正方形有 1 个。</span>\\n<span class=\\"line\\">正方形的总数 = 10 + 4 + 1 = 15.</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,t as data};

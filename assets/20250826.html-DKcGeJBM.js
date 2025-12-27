import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_3000-对角线最长的矩形的面积" tabindex="-1"><a class="header-anchor" href="#_3000-对角线最长的矩形的面积"><span><a href="https://leetcode.cn/problems/maximum-area-of-longest-diagonal-rectangle/" target="_blank" rel="noopener noreferrer">3000. 对角线最长的矩形的面积</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>dimensions</code>。</p><p>对于所有下标 <code>i</code>（<code>0 &lt;= i &lt; dimensions.length</code>），<code>dimensions[i][0]</code> 表示矩形 <code>i</code> 的长度，而 <code>dimensions[i][1]</code> 表示矩形 <code>i</code> 的宽度。</p><p>返回对角线最 <strong>长</strong> 的矩形的 <strong>面积</strong> 。如果存在多个对角线长度相同的矩形，返回面积最 <strong>大</strong> 的矩形的面积。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：dimensions = [[9,3],[8,6]]</span>
<span class="line">输出：48</span>
<span class="line">解释：</span>
<span class="line">下标 = 0，长度 = 9，宽度 = 3。对角线长度 = sqrt(9 * 9 + 3 * 3) = sqrt(90) ≈ 9.487。</span>
<span class="line">下标 = 1，长度 = 8，宽度 = 6。对角线长度 = sqrt(8 * 8 + 6 * 6) = sqrt(100) = 10。</span>
<span class="line">因此，下标为 1 的矩形对角线更长，所以返回面积 = 8 * 6 = 48。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：dimensions = [[3,4],[4,3]]</span>
<span class="line">输出：12</span>
<span class="line">解释：两个矩形的对角线长度相同，为 5，所以最大面积 = 12。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= dimensions.length &lt;= 100</code></li><li><code>dimensions[i].length == 2</code></li><li><code>1 &lt;= dimensions[i][0], dimensions[i][1] &lt;= 100</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>按题意直接遍历，维护对角线和面积两个变量。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int areaOfMaxDiagonal(vector&lt;vector&lt;int&gt;&gt;&amp; dimensions) {</span>
<span class="line">        int max_diag = 0, max_area = 0;</span>
<span class="line">        for(auto&amp; d : dimensions) {</span>
<span class="line">            int diag = d[0] * d[0] + d[1] * d[1];</span>
<span class="line">            int area = d[0] * d[1];               </span>
<span class="line">            if (diag &gt; max_diag || (diag == max_diag &amp;&amp; area &gt; max_area)) {</span>
<span class="line">                max_diag = diag;</span>
<span class="line">                max_area = area;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return max_area;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，可以使用stl中pair与max简化写法，但需要有额外的创建对象的开销。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int areaOfMaxDiagonal(vector&lt;vector&lt;int&gt;&gt;&amp; dimensions) {</span>
<span class="line">        pair&lt;int, int&gt; mx{};</span>
<span class="line">        for (auto&amp; d : dimensions) {</span>
<span class="line">            int x = d[0], y = d[1];</span>
<span class="line">            mx = max(mx, pair(x * x + y * y, x * y));</span>
<span class="line">        }</span>
<span class="line">        return mx.second;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,17)]))}const r=s(l,[["render",d]]),o=JSON.parse('{"path":"/leetcode/20250826.html","title":"3000. 对角线最长的矩形的面积","lang":"zh-CN","frontmatter":{"date":"2025-08-26T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"3c6d91831308057dcb10aa5fe2e7c993499bd580","time":1756169500000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":",ryt"}]},"filePathRelative":"leetcode/20250826.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>dimensions</code>。</p>\\n<p>对于所有下标 <code>i</code>（<code>0 &lt;= i &lt; dimensions.length</code>），<code>dimensions[i][0]</code> 表示矩形 <code>i</code> 的长度，而 <code>dimensions[i][1]</code> 表示矩形 <code>i</code> 的宽度。</p>\\n<p>返回对角线最 <strong>长</strong> 的矩形的 <strong>面积</strong> 。如果存在多个对角线长度相同的矩形，返回面积最 <strong>大</strong> 的矩形的面积。</p>"}');export{r as comp,o as data};

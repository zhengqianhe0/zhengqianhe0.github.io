import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_812-最大三角形面积" tabindex="-1"><a class="header-anchor" href="#_812-最大三角形面积"><span><a href="https://leetcode.cn/problems/largest-triangle-area/" target="_blank" rel="noopener noreferrer">812. 最大三角形面积</a></span></a></h1><p>给你一个由 <strong>X-Y</strong> 平面上的点组成的数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 。从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。与真实值误差在 <code>10-5</code> 内的答案将会视为正确答案**。**</p><p><strong>示例 1：</strong></p><p><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：points = [[0,0],[0,1],[1,0],[0,2],[2,0]]</span>
<span class="line">输出：2.00000</span>
<span class="line">解释：输入中的 5 个点如上图所示，红色的三角形面积最大。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：points = [[1,0],[0,0],[0,1]]</span>
<span class="line">输出：0.50000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>3 &lt;= points.length &lt;= 50</code></li><li><code>-50 &lt;= xi, yi &lt;= 50</code></li><li>给出的所有点 <strong>互不相同</strong></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>三重循环，借助三角形已知三个顶点坐标的面积公式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    double triangleArea(int x1, int y1, int x2, int y2, int x3, int y3) {</span>
<span class="line">        return 0.5 * abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    double largestTriangleArea(vector&lt;vector&lt;int&gt;&gt; &amp; points) {</span>
<span class="line">        int n = points.size();</span>
<span class="line">        double ret = 0.0;</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            for (int j = i + 1; j &lt; n; j++) {</span>
<span class="line">                for (int k = j + 1; k &lt; n; k++) {</span>
<span class="line">                    ret = max(ret, triangleArea(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1]));</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n^3)</li><li>空间复杂度：O(1)</li></ul>`,14)]))}const p=s(l,[["render",t]]),c=JSON.parse('{"path":"/leetcode/20250927.html","title":"812. 最大三角形面积","lang":"zh-CN","frontmatter":{"date":"2025-09-27T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","几何","数学"]},"headers":[],"git":{"updatedTime":1759284793000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c7d539c51ed88f06847331960352ae3f3b9df072","time":1759284793000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250927.md","excerpt":"\\n<p>给你一个由 <strong>X-Y</strong> 平面上的点组成的数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 。从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。与真实值误差在 <code>10-5</code> 内的答案将会视为正确答案**。**</p>\\n<p><strong>示例 1：</strong></p>\\n<p><img src=\\"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png\\" alt=\\"img\\"></p>"}');export{p as comp,c as data};

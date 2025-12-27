import{_ as e,c as s,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function t(r,n){return l(),s("div",null,n[0]||(n[0]=[i(`<h1 id="_120-三角形最小路径和" tabindex="-1"><a class="header-anchor" href="#_120-三角形最小路径和"><span><a href="https://leetcode.cn/problems/triangle/" target="_blank" rel="noopener noreferrer">120. 三角形最小路径和</a></span></a></h1><p>给定一个三角形 <code>triangle</code> ，找出自顶向下的最小路径和。</p><p>每一步只能移动到下一行中相邻的结点上。<strong>相邻的结点</strong> 在这里指的是 <strong>下标</strong> 与 <strong>上一层结点下标</strong> 相同或者等于 <strong>上一层结点下标 + 1</strong> 的两个结点。也就是说，如果正位于当前行的下标 <code>i</code> ，那么下一步可以移动到下一行的下标 <code>i</code> 或 <code>i + 1</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]</span>
<span class="line">输出：11</span>
<span class="line">解释：如下面简图所示：</span>
<span class="line">   2</span>
<span class="line">  3 4</span>
<span class="line"> 6 5 7</span>
<span class="line">4 1 8 3</span>
<span class="line">自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：triangle = [[-10]]</span>
<span class="line">输出：-10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= triangle.length &lt;= 200</code></li><li><code>triangle[0].length == 1</code></li><li><code>triangle[i].length == triangle[i - 1].length + 1</code></li><li><code>-104 &lt;= triangle[i][j] &lt;= 104</code></li></ul><p><strong>进阶：</strong></p><ul><li>你可以只使用 <code>O(n)</code> 的额外空间（<code>n</code> 为三角形的总行数）来解决这个问题吗？</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>经典dp题目</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minimumTotal(vector&lt;vector&lt;int&gt;&gt;&amp; triangle) {</span>
<span class="line">        int n=triangle.size();</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt;f (n,vector&lt;int&gt;(n));</span>
<span class="line">        f[0][0]=triangle[0][0];</span>
<span class="line">        for(int i=1;i&lt;n;i++){</span>
<span class="line">            f[i][0]=f[i-1][0]+triangle[i][0];</span>
<span class="line">            for(int j=1;j&lt;i;++j){</span>
<span class="line">                f[i][j]=min(f[i-1][j-1],f[i-1][j])+triangle[i][j];</span>
<span class="line">            }</span>
<span class="line">            f[i][i]=f[i-1][i-1]+triangle[i][i];</span>
<span class="line">        }</span>
<span class="line">        return *min_element(f[n-1].begin(),f[n-1].end());</span>
<span class="line">    }</span>
<span class="line">}; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n²)</li><li>空间复杂度：O(n²)</li></ul><p>为什么可以从下到上计算以节省空间？因为计算上一行需要先完成对下一行的最小值的计算。</p><p>相当于每次将最后一行合并到上一行，总长度减一</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minimumTotal(vector&lt;vector&lt;int&gt;&gt;&amp; triangle) {</span>
<span class="line">        int n = triangle.size();</span>
<span class="line">        vector&lt;int&gt; dp(triangle.back());</span>
<span class="line">        for (int i = n - 2; i &gt;= 0; i--) {</span>
<span class="line">            for (int j = 0; j &lt;= i; j++) {</span>
<span class="line">                dp[j] = triangle[i][j] + min(dp[j], dp[j + 1]);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dp[0];</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li><p>时间复杂度：O(n²)</p></li><li><p>空间复杂度：O(n)</p></li></ul>`,21)]))}const c=e(a,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250925.html","title":"120. 三角形最小路径和","lang":"zh-CN","frontmatter":{"date":"2025-09-25T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","动态规划"]},"headers":[],"git":{"updatedTime":1758867108000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"90ec2b63d55c4f5efc060efdc1440497f6b4b19b","time":1758867108000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250925.md","excerpt":"\\n<p>给定一个三角形 <code>triangle</code> ，找出自顶向下的最小路径和。</p>\\n<p>每一步只能移动到下一行中相邻的结点上。<strong>相邻的结点</strong> 在这里指的是 <strong>下标</strong> 与 <strong>上一层结点下标</strong> 相同或者等于 <strong>上一层结点下标 + 1</strong> 的两个结点。也就是说，如果正位于当前行的下标 <code>i</code> ，那么下一步可以移动到下一行的下标 <code>i</code> 或 <code>i + 1</code> 。</p>\\n<p><strong>示例 1：</strong></p>"}');export{c as comp,p as data};

import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_1039-多边形三角剖分的最低得分" tabindex="-1"><a class="header-anchor" href="#_1039-多边形三角剖分的最低得分"><span><a href="https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/" target="_blank" rel="noopener noreferrer">1039. 多边形三角剖分的最低得分</a></span></a></h1><p>你有一个凸的 <code>n</code> 边形，其每个顶点都有一个整数值。给定一个整数数组 <code>values</code> ，其中 <code>values[i]</code> 是第 <code>i</code> 个顶点的值（即 <strong>顺时针顺序</strong> ）。</p><p>假设将多边形 <strong>剖分</strong> 为 <code>n - 2</code> 个三角形。对于每个三角形，该三角形的值是顶点标记的<strong>乘积</strong>，三角剖分的分数是进行三角剖分后所有 <code>n - 2</code> 个三角形的值之和。</p><p>返回 <em>多边形进行三角剖分后可以得到的最低分</em> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/02/25/shape1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：values = [1,2,3]</span>
<span class="line">输出：6</span>
<span class="line">解释：多边形已经三角化，唯一三角形的分数为 6。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/02/25/shape2.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：values = [3,7,4,5]</span>
<span class="line">输出：144</span>
<span class="line">解释：有两种三角剖分，可能得分分别为：3*7*5 + 4*5*7 = 245，或 3*4*5 + 3*4*7 = 144。最低分数为 144。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/02/25/shape3.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：values = [1,3,1,4,1,5]</span>
<span class="line">输出：13</span>
<span class="line">解释：最低分数三角剖分的得分情况为 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == values.length</code></li><li><code>3 &lt;= n &lt;= 50</code></li><li><code>1 &lt;= values[i] &lt;= 100</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>记忆化dfs</p><p>先以数组头尾确定一条边，遍历其他所有的顶点，分割成子问题继续处理。</p><p>同时，处理过的数据记录在memo数组中。dfs(i,j)表示从i到j这个多边形最小的划分数值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minScoreTriangulation(vector&lt;int&gt;&amp; values) {</span>
<span class="line">        int n=values.size();</span>
<span class="line">        // C++17语法可以写成vector memo(n,vector&lt;int&gt;(n,-1)); 使用构造函数默认推断memo的数据类型</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; memo(n,vector&lt;int&gt;(n,-1));</span>
<span class="line">		</span>
<span class="line">		// lambda表达式</span>
<span class="line">		// auto自动接收dfs的类型，即lambda函数。这里并不代表返回值的类型</span>
<span class="line">		// [&amp;]表示任何被使用到的外部变量都隐式地以引用方式加以引用，这里完成了对参数values和定义的变量n，memo的捕获</span>
<span class="line">		// this auto&amp;&amp; 使得该dfs函数可以被自身递归调用</span>
<span class="line">		// -&gt;int表示返回值类型是int</span>
<span class="line">        auto dfs=[&amp;](this auto&amp;&amp; dfs,int i,int j)-&gt;int{</span>
<span class="line">            if(i+1==j){</span>
<span class="line">                return 0;</span>
<span class="line">            }</span>
<span class="line">            // 直接引用memo数组，在后面循环取最小值时计算res直接就能更新memo</span>
<span class="line">            int&amp; res=memo[i][j];</span>
<span class="line">            if(res!=-1){</span>
<span class="line">                return res;</span>
<span class="line">            }</span>
<span class="line">            res=INT_MAX;</span>
<span class="line">            for(int k=i+1;k&lt;j;k++){</span>
<span class="line">                 res=min(res,dfs(i,k)+dfs(k,j)+values[i]*values[j]*values[k]);</span>
<span class="line">            }</span>
<span class="line">            return res;</span>
<span class="line">        };</span>
<span class="line">        return dfs(0,n-1);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n^3) memo存储n^2个状态，每个状态遍历需要n</li><li>空间复杂度：O(n^2)</li></ul>`,22)]))}const r=n(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250929.html","title":"1039. 多边形三角剖分的最低得分","lang":"zh-CN","frontmatter":{"date":"2025-09-29T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["动态规划","数组"]},"headers":[],"git":{"updatedTime":1759284793000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c7d539c51ed88f06847331960352ae3f3b9df072","time":1759284793000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250929.md","excerpt":"\\n<p>你有一个凸的 <code>n</code> 边形，其每个顶点都有一个整数值。给定一个整数数组 <code>values</code> ，其中 <code>values[i]</code> 是第 <code>i</code> 个顶点的值（即 <strong>顺时针顺序</strong> ）。</p>\\n<p>假设将多边形 <strong>剖分</strong> 为 <code>n - 2</code> 个三角形。对于每个三角形，该三角形的值是顶点标记的<strong>乘积</strong>，三角剖分的分数是进行三角剖分后所有 <code>n - 2</code> 个三角形的值之和。</p>"}');export{r as comp,p as data};

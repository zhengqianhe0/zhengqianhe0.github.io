import{_ as s,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2221-数组的三角和" tabindex="-1"><a class="header-anchor" href="#_2221-数组的三角和"><span><a href="https://leetcode.cn/problems/find-triangular-sum-of-an-array/" target="_blank" rel="noopener noreferrer">2221. 数组的三角和</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，其中 <code>nums[i]</code> 是 <code>0</code> 到 <code>9</code> 之间（两者都包含）的一个数字。</p><p><code>nums</code> 的 <strong>三角和</strong> 是执行以下操作以后最后剩下元素的值：</p><ol><li><code>nums</code> 初始包含 <code>n</code> 个元素。如果 <code>n == 1</code> ，<strong>终止</strong> 操作。否则，<strong>创建</strong> 一个新的下标从 <strong>0</strong> 开始的长度为 <code>n - 1</code> 的整数数组 <code>newNums</code> 。</li><li>对于满足 <code>0 &lt;= i &lt; n - 1</code> 的下标 <code>i</code> ，<code>newNums[i]</code> <strong>赋值</strong> 为 <code>(nums[i] + nums[i+1]) % 10</code> ，<code>%</code> 表示取余运算。</li><li>将 <code>newNums</code> <strong>替换</strong> 数组 <code>nums</code> 。</li><li>从步骤 1 开始 <strong>重复</strong> 整个过程。</li></ol><p>请你返回 <code>nums</code> 的三角和。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2022/02/22/ex1drawio.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3,4,5]</span>
<span class="line">输出：8</span>
<span class="line">解释：</span>
<span class="line">上图展示了得到数组三角和的过程。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [5]</span>
<span class="line">输出：5</span>
<span class="line">解释：</span>
<span class="line">由于 nums 中只有一个元素，数组的三角和为这个元素自己。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 9</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>很明显的组合数，但是计算乘法时会越界过大，即使是long long。可以使用动态规划拆解乘法过程只求余数/lucas定理和中国剩余定理</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long combinations(int n, int k) {</span>
<span class="line">        if (k &gt; n / 2) {</span>
<span class="line">            k = n - k;</span>
<span class="line">        }</span>
<span class="line">        long long res = 1;</span>
<span class="line">        for (int i = 1; i &lt;= k; ++i) {</span>
<span class="line">            res = res * (n - i + 1) / i;</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">    int triangularSum(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int sum=0;</span>
<span class="line">        int n=nums.size();</span>
<span class="line">        for(int i=0;i&lt;n;i++){</span>
<span class="line">            sum+=nums[i]*combinations(n-1,i)%10;</span>
<span class="line">        }</span>
<span class="line">        return sum%10;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该题限制并不大， 可以直接模拟</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int triangularSum(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        // 每循环一轮，数组长度就减一</span>
<span class="line">        for (int n = nums.size() - 1; n &gt; 0; n--) {</span>
<span class="line">            for (int i = 0; i &lt; n; i++) {</span>
<span class="line">                nums[i] = (nums[i] + nums[i + 1]) % 10;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return nums[0];</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n^2)</li><li>空间复杂度：O(1)</li></ul>`,19)]))}const r=s(a,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20250930.html","title":"2221. 数组的三角和","lang":"zh-CN","frontmatter":{"date":"2025-09-30T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","数组"]},"headers":[],"git":{"updatedTime":1759284793000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c7d539c51ed88f06847331960352ae3f3b9df072","time":1759284793000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250930.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，其中 <code>nums[i]</code> 是 <code>0</code> 到 <code>9</code> 之间（两者都包含）的一个数字。</p>\\n<p><code>nums</code> 的 <strong>三角和</strong> 是执行以下操作以后最后剩下元素的值：</p>\\n<ol>\\n<li><code>nums</code> 初始包含 <code>n</code> 个元素。如果 <code>n == 1</code> ，<strong>终止</strong> 操作。否则，<strong>创建</strong> 一个新的下标从 <strong>0</strong> 开始的长度为 <code>n - 1</code> 的整数数组 <code>newNums</code> 。</li>\\n<li>对于满足 <code>0 &lt;= i &lt; n - 1</code> 的下标 <code>i</code> ，<code>newNums[i]</code> <strong>赋值</strong> 为 <code>(nums[i] + nums[i+1]) % 10</code> ，<code>%</code> 表示取余运算。</li>\\n<li>将 <code>newNums</code> <strong>替换</strong> 数组 <code>nums</code> 。</li>\\n<li>从步骤 1 开始 <strong>重复</strong> 整个过程。</li>\\n</ol>"}');export{r as comp,t as data};

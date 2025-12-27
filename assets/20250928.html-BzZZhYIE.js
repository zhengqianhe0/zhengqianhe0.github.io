import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function r(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_976-三角形的最大周长" tabindex="-1"><a class="header-anchor" href="#_976-三角形的最大周长"><span><a href="https://leetcode.cn/problems/largest-perimeter-triangle/" target="_blank" rel="noopener noreferrer">976. 三角形的最大周长</a></span></a></h1><p>给定由一些正数（代表长度）组成的数组 <code>nums</code> ，返回 <em>由其中三个长度组成的、<strong>面积不为零</strong>的三角形的最大周长</em> 。如果不能形成任何面积不为零的三角形，返回 <code>0</code>。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,1,2]</span>
<span class="line">输出：5</span>
<span class="line">解释：你可以用三个边长组成一个三角形:1 2 2。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,1,10]</span>
<span class="line">输出：0</span>
<span class="line">解释：</span>
<span class="line">你不能用边长 1,1,2 来组成三角形。</span>
<span class="line">不能用边长 1,1,10 来构成三角形。</span>
<span class="line">不能用边长 1、2 和 10 来构成三角形。</span>
<span class="line">因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 104</code></li><li><code>1 &lt;= nums[i] &lt;= 106</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先排序。</p><p>循环确定最长的边。如果最长的边和第二、第三长的边不能构成三角形，则和更短的边一样不能构成三角形。因此只需要一次遍历</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int largestPerimeter(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        sort(nums.begin(),nums.end(),greater&lt;int&gt;());</span>
<span class="line">        int n=nums.size();</span>
<span class="line">        int ans=0;</span>
<span class="line">        for(int i=0;i&lt;n-2;i++){</span>
<span class="line">            if(nums[i]&lt;nums[i+1]+nums[i+2]){</span>
<span class="line">                return nums[i]+nums[i+1]+nums[i+2];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return 0;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn) 排序+遍历</li><li>空间复杂度：O(1)</li></ul>`,14)]))}const c=s(l,[["render",r]]),p=JSON.parse('{"path":"/leetcode/20250928.html","title":"976. 三角形的最大周长","lang":"zh-CN","frontmatter":{"date":"2025-09-28T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["贪心","数组","排序"]},"headers":[],"git":{"updatedTime":1759284793000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c7d539c51ed88f06847331960352ae3f3b9df072","time":1759284793000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250928.md","excerpt":"\\n<p>给定由一些正数（代表长度）组成的数组 <code>nums</code> ，返回 <em>由其中三个长度组成的、<strong>面积不为零</strong>的三角形的最大周长</em> 。如果不能形成任何面积不为零的三角形，返回 <code>0</code>。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：nums = [2,1,2]</span>\\n<span class=\\"line\\">输出：5</span>\\n<span class=\\"line\\">解释：你可以用三个边长组成一个三角形:1 2 2。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,p as data};

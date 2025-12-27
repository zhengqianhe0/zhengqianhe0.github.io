import{_ as e,c as s,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function c(d,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_2598-执行操作后的最大-mex" tabindex="-1"><a class="header-anchor" href="#_2598-执行操作后的最大-mex"><span><a href="https://leetcode.cn/problems/smallest-missing-non-negative-integer-after-operations/" target="_blank" rel="noopener noreferrer">2598. 执行操作后的最大 MEX</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>value</code> 。</p><p>在一步操作中，你可以对 <code>nums</code> 中的任一元素加上或减去 <code>value</code> 。</p><ul><li>例如，如果 <code>nums = [1,2,3]</code> 且 <code>value = 2</code> ，你可以选择 <code>nums[0]</code> 减去 <code>value</code> ，得到 <code>nums = [-1,2,3]</code> 。</li></ul><p>数组的 MEX (minimum excluded) 是指其中数组中缺失的最小非负整数。</p><ul><li>例如，<code>[-1,2,3]</code> 的 MEX 是 <code>0</code> ，而 <code>[1,0,3]</code> 的 MEX 是 <code>2</code> 。</li></ul><p>返回在执行上述操作 <strong>任意次</strong> 后，<code>nums</code> 的最大 MEX <em>。</em></p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,-10,7,13,6,8], value = 5</span>
<span class="line">输出：4</span>
<span class="line">解释：执行下述操作可以得到这一结果：</span>
<span class="line">- nums[1] 加上 value 两次，nums = [1,0,7,13,6,8]</span>
<span class="line">- nums[2] 减去 value 一次，nums = [1,0,2,13,6,8]</span>
<span class="line">- nums[3] 减去 value 两次，nums = [1,0,2,3,6,8]</span>
<span class="line">nums 的 MEX 是 4 。可以证明 4 是可以取到的最大 MEX 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,-10,7,13,6,8], value = 7</span>
<span class="line">输出：2</span>
<span class="line">解释：执行下述操作可以得到这一结果：</span>
<span class="line">- nums[2] 减去 value 一次，nums = [1,-10,0,13,6,8]</span>
<span class="line">nums 的 MEX 是 2 。可以证明 2 是可以取到的最大 MEX 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length, value &lt;= 105</code></li><li><code>-109 &lt;= nums[i] &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>将正数和负数都规范化到 [0,m) ：(x%m+m)%m</p><p>使用哈希表计数后，按顺序循环累计mex（对mex取余可以恰好匹配哈希表）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int findSmallestInteger(vector&lt;int&gt;&amp; nums, int value) {</span>
<span class="line">        int m=value;</span>
<span class="line">        unordered_map&lt;int,int&gt;cnt;</span>
<span class="line">        for(int x:nums){</span>
<span class="line">            cnt[(x%m+m)%m]++;</span>
<span class="line">        }</span>
<span class="line">        int mex=0;</span>
<span class="line">        while(cnt[mex%m]&gt;0){</span>
<span class="line">            cnt[mex%m]--;</span>
<span class="line">            mex++;</span>
<span class="line">        }</span>
<span class="line">        return mex;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 把哈希表换成数组更高效</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int findSmallestInteger(vector&lt;int&gt;&amp; nums, int m) {</span>
<span class="line">        vector&lt;int&gt; cnt(m);</span>
<span class="line">        for (int x : nums) {</span>
<span class="line">            cnt[(x % m + m) % m]++;</span>
<span class="line">        }</span>
<span class="line">		// 找到最小元素的索引</span>
<span class="line">        int i = ranges::min_element(cnt) - cnt.begin();</span>
<span class="line">        // 对应的，该余数最早被消耗完，用cnt[i]表示轮数，每轮有m个数，再加上i，表示下一次新遇到i会求得mex</span>
<span class="line">        return m * cnt[i] + i;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(min(m,n)) 最少保存的哈希表元素个数</li></ul>`,19)]))}const m=e(i,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251016.html","title":"2598. 执行操作后的最大 MEX","lang":"zh-CN","frontmatter":{"date":"2025-10-16T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["哈希表","贪心","数组","数学"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251016.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>value</code> 。</p>\\n<p>在一步操作中，你可以对 <code>nums</code> 中的任一元素加上或减去 <code>value</code> 。</p>\\n<ul>\\n<li>例如，如果 <code>nums = [1,2,3]</code> 且 <code>value = 2</code> ，你可以选择 <code>nums[0]</code> 减去 <code>value</code> ，得到 <code>nums = [-1,2,3]</code> 。</li>\\n</ul>"}');export{m as comp,p as data};

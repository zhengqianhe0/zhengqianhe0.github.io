import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2411-按位或最大的最小子数组长度" tabindex="-1"><a class="header-anchor" href="#_2411-按位或最大的最小子数组长度"><span><a href="https://leetcode.cn/problems/smallest-subarrays-with-maximum-bitwise-or/" target="_blank" rel="noopener noreferrer">2411. 按位或最大的最小子数组长度</a></span></a></h1><p>中等</p><p>题目描述</p><p>给你一个长度为 <code>n</code> 下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，数组中所有数字均为非负整数。对于 <code>0</code> 到 <code>n - 1</code> 之间的每一个下标 <code>i</code> ，你需要找出 <code>nums</code> 中一个 <strong>最小</strong> 非空子数组，它的起始位置为 <code>i</code> （包含这个位置），同时有 <strong>最大</strong> 的 <strong>按位或运算值</strong> 。</p><ul><li>换言之，令 <code>Bij</code> 表示子数组 <code>nums[i...j]</code> 的按位或运算的结果，你需要找到一个起始位置为 <code>i</code> 的最小子数组，这个子数组的按位或运算的结果等于 <code>max(Bik)</code> ，其中 <code>i &lt;= k &lt;= n - 1</code> 。</li></ul><p><em>解释：只要求计算从i开始的所有子数组，所以answer[n-1]必定为1.</em></p><p>一个数组的按位或运算值是这个数组里所有数字按位或运算的结果。</p><p>请你返回一个大小为 <code>n</code> 的整数数组 <code>answer</code>，其中 <code>answer[i]</code>是开始位置为 <code>i</code> ，按位或运算结果最大，且 <strong>最短</strong> 子数组的长度。</p><p><strong>子数组</strong> 是数组里一段连续非空元素组成的序列。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,0,2,1,3]</span>
<span class="line">输出：[3,3,2,2,1]</span>
<span class="line">解释：</span>
<span class="line">任何位置开始，最大按位或运算的结果都是 3 。</span>
<span class="line">- 下标 0 处，能得到结果 3 的最短子数组是 [1,0,2] 。</span>
<span class="line">- 下标 1 处，能得到结果 3 的最短子数组是 [0,2,1] 。</span>
<span class="line">- 下标 2 处，能得到结果 3 的最短子数组是 [2,1] 。</span>
<span class="line">- 下标 3 处，能得到结果 3 的最短子数组是 [1,3] 。</span>
<span class="line">- 下标 4 处，能得到结果 3 的最短子数组是 [3] 。</span>
<span class="line">所以我们返回 [3,3,2,2,1] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2]</span>
<span class="line">输出：[2,1]</span>
<span class="line">解释：</span>
<span class="line">下标 0 处，能得到最大按位或运算值的最短子数组长度为 2 。</span>
<span class="line">下标 1 处，能得到最大按位或运算值的最短子数组长度为 1 。</span>
<span class="line">所以我们返回 [2,1] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 105</code></li><li><code>0 &lt;= nums[i] &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>从右向左遍历</p><p>直接为每个 i 计算最大值和最短长度会导致 O(n^2) 的时间复杂度，这对于 n 达到 10^5 来说太慢了。</p><p>我们可以通过从右向左遍历（从 i = n-1到 0）来优化。在遍历过程中，我们维护一个辅助数据结构，记录对于每个二进制位（0 到 30），最右边（即下标最大）出现该位的元素的下标。</p><ol><li>初始化一个大小为 31 的数组 last，所有元素为 0。</li><li>从 i = n-1 循环到 0： a. <strong>更新 last 数组</strong>：对于当前数字 nums[i]，检查它的每一个二进制位。如果 nums[i] 的第 b 位是 1，就更新 last[b] = i，因为 i 是我们目前遇到的最靠左的包含该位的下标。 b. <strong>确定子数组的终点 j</strong>：为了让子数组 nums[i...j] 的按位或值最大化（即包含从 i 到末尾所有可能出现的位），这个子数组必须延伸到足够远，以包含所有这些位。终点 j 必须是所有 last[b] 中的最大值。也就是说，j = max(last[0], last[1], ..., last[30])。 c. <strong>计算长度</strong>：最短的满足条件的子数组长度就是 j - i + 1。我们将这个长度存入 answer[i]。</li><li>循环结束后，返回 answer 数组。</li></ol><p>复杂度分析：</p><ul><li><strong>时间复杂度</strong>: O(n * k)，其中 n 是数组的长度，k 是整数的位数（在这里是 31=logC，参考数据范围int）。可以看作是 O(n)。</li><li><strong>空间复杂度</strong>: O(k)，我们使用了一个大小为 k 的 last 数组来存储位的最后出现位置。因为 k 是常数，</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; smallestSubarrays(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">    	int n=nums.size();</span>
<span class="line">        vector&lt;int&gt; answer(n);</span>
<span class="line">        vector&lt;int&gt; last(31,0);</span>
<span class="line">        for(int i=n-1;i&gt;=0;i--){</span>
<span class="line">        	int j=i;</span>
<span class="line">            for(int bit=0;bit&lt;31;bit++){</span>
<span class="line">                if(nums[i]&gt;&gt;bit&amp;1){</span>
<span class="line">                    last[bit]=i;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            for(int bit=0;bit&lt;31;bit++){</span>
<span class="line">                j=max(j,last[bit]);</span>
<span class="line">            }</span>
<span class="line">            answer[i]=j-i+1;</span>
<span class="line">        }</span>
<span class="line">        return answer;</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const r=s(l,[["render",d]]),o=JSON.parse('{"path":"/leetcode/20250729.html","title":"2411. 按位或最大的最小子数组长度","lang":"zh-CN","frontmatter":{"date":"2025-07-29T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["位运算","数组","反向遍历"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"8d93e6af4f3471bd5aeea8b6f70f18329ab38856","time":1753781156000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"每日一题"},{"hash":"cf54adca54f0b2e84abffdde625d573d729db5af","time":1753710540000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"每日一题文件"}]},"filePathRelative":"leetcode/20250729.md","excerpt":"\\n<p>中等</p>\\n<p>题目描述</p>\\n<p>给你一个长度为 <code>n</code> 下标从 <strong>0</strong> 开始的数组 <code>nums</code> ，数组中所有数字均为非负整数。对于 <code>0</code> 到 <code>n - 1</code> 之间的每一个下标 <code>i</code> ，你需要找出 <code>nums</code> 中一个 <strong>最小</strong> 非空子数组，它的起始位置为 <code>i</code> （包含这个位置），同时有 <strong>最大</strong> 的 <strong>按位或运算值</strong> 。</p>"}');export{r as comp,o as data};

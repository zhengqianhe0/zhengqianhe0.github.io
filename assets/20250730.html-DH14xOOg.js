import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2419-按位与最大的最长子数组" tabindex="-1"><a class="header-anchor" href="#_2419-按位与最大的最长子数组"><span><a href="https://leetcode.cn/problems/longest-subarray-with-maximum-bitwise-and/" target="_blank" rel="noopener noreferrer">2419. 按位与最大的最长子数组</a></span></a></h1><p>中等</p><p>提示</p><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> 。</p><p>考虑 <code>nums</code> 中进行 **按位与（bitwise AND）**运算得到的值 <strong>最大</strong> 的 <strong>非空</strong> 子数组。</p><ul><li>换句话说，令 <code>k</code> 是 <code>nums</code> <strong>任意</strong> 子数组执行按位与运算所能得到的最大值。那么，只需要考虑那些执行一次按位与运算后等于 <code>k</code> 的子数组。</li></ul><p>返回满足要求的 <strong>最长</strong> 子数组的长度。</p><p>数组的按位与就是对数组中的所有数字进行按位与运算。</p><p><strong>子数组</strong> 是数组中的一个连续元素序列。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3,3,2,2]</span>
<span class="line">输出：2</span>
<span class="line">解释：</span>
<span class="line">子数组按位与运算的最大值是 3 。</span>
<span class="line">能得到此结果的最长子数组是 [3,3]，所以返回 2 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3,4]</span>
<span class="line">输出：1</span>
<span class="line">解释：</span>
<span class="line">子数组按位与运算的最大值是 4 。 </span>
<span class="line">能得到此结果的最长子数组是 [4]，所以返回 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>1 &lt;= nums[i] &lt;= 106</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>核心：理解按位与的特点。与运算只有1和1与得到的是1。</p><p>两个不同的正整数按位与，结果一定比两个数中更大的那个小。</p><p>证明：从高位开始比较，如果两个数高位都是1，则继续；当遇到第一个不同时，按位与得到0；无论后面如何，结果一定比大数小，因为结果这一位是0而大数这一位是1。</p><p>另外，本题要求的是子数组，因此，答案就是数组中最大值连续子数组的长度。</p><p>代码实现：按顺序遍历，记录最大值子数组长度。遇到更大值，设置新的最大值重新计；遇到更小值计数器归零。</p><p><strong>复杂度分析：</strong></p><ul><li>时间复杂度：<em>O</em>(<em>n</em>)，遍历数组一遍。</li><li>空间复杂度：<em>O</em>(1)。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int longestSubarray(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int maxvalue=nums[0];</span>
<span class="line">        int ans=1,cnt=1;</span>
<span class="line">        for(int i=1;i&lt;nums.size();++i){</span>
<span class="line">            if(nums[i]&gt;maxvalue){</span>
<span class="line">                ans=cnt=1;</span>
<span class="line">                maxvalue=nums[i];</span>
<span class="line">            }else if(nums[i]&lt;maxvalue){</span>
<span class="line">                cnt=0;</span>
<span class="line">            }else if(nums[i]==maxvalue){</span>
<span class="line">                cnt++;</span>
<span class="line">            }</span>
<span class="line">            ans=max(cnt,ans);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const r=s(l,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20250730.html","title":"2419. 按位与最大的最长子数组","lang":"zh-CN","frontmatter":{"date":"2025-07-30T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["位运算","数组","脑筋急转弯"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"40bb75f65c993fa967dcf211ffad7981eebab0c1","time":1753853140000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"每日一题"}]},"filePathRelative":"leetcode/20250730.md","excerpt":"\\n<p>中等</p>\\n<p>提示</p>\\n<p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> 。</p>\\n<p>考虑 <code>nums</code> 中进行 **按位与（bitwise AND）**运算得到的值 <strong>最大</strong> 的 <strong>非空</strong> 子数组。</p>\\n<ul>\\n<li>换句话说，令 <code>k</code> 是 <code>nums</code> <strong>任意</strong> 子数组执行按位与运算所能得到的最大值。那么，只需要考虑那些执行一次按位与运算后等于 <code>k</code> 的子数组。</li>\\n</ul>"}');export{r as comp,p as data};

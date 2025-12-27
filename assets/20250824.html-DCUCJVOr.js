import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_1493-删掉一个元素以后全为-1-的最长子数组" tabindex="-1"><a class="header-anchor" href="#_1493-删掉一个元素以后全为-1-的最长子数组"><span><a href="https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/" target="_blank" rel="noopener noreferrer">1493. 删掉一个元素以后全为 1 的最长子数组</a></span></a></h1><p>给你一个二进制数组 <code>nums</code> ，你需要从中删掉一个元素。</p><p>请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。</p><p>如果不存在这样的子数组，请返回 0 。</p><p><strong>提示 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,1,0,1]</span>
<span class="line">输出：3</span>
<span class="line">解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [0,1,1,1,0,1,1,0,1]</span>
<span class="line">输出：5</span>
<span class="line">解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,1,1]</span>
<span class="line">输出：2</span>
<span class="line">解释：你必须要删除一个元素。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>nums[i]</code> 要么是 <code>0</code> 要么是 <code>1</code> 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><ul><li><code>p0</code>: 以当前位置结尾的连续1的长度（不删除任何元素）</li><li><code>p1</code>: 以当前位置结尾的连续1的长度（已经删除了一个0元素）</li></ul><p>遇到0后，p0立刻置0，p1变成上一位的p0，相当于删除了当前0后之前的元素连续1的长度</p><p>随着遍历的过程更新最大值。</p><p>特殊情况：整个数组全部为1，则必须删除一个1，总长度-1.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int longestSubarray(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int ans=0;</span>
<span class="line">        int p0=0,p1=0;</span>
<span class="line">        for(int num:nums){</span>
<span class="line">            if(num==0){</span>
<span class="line">                p1=p0;</span>
<span class="line">                p0=0;</span>
<span class="line">            }else{</span>
<span class="line">                ++p0;</span>
<span class="line">                ++p1;</span>
<span class="line">            }</span>
<span class="line">            ans=max(ans,p1);</span>
<span class="line">        }</span>
<span class="line">        if(ans==nums.size()){</span>
<span class="line">            --ans;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,20)]))}const r=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20250824.html","title":"1493. 删掉一个元素以后全为 1 的最长子数组","lang":"zh-CN","frontmatter":{"date":"2025-08-24T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","递推","动态规划"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"51d10c59049e3edf5310a66be52b812399c9b384","time":1756005735000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250824.md","excerpt":"\\n<p>给你一个二进制数组 <code>nums</code> ，你需要从中删掉一个元素。</p>\\n<p>请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。</p>\\n<p>如果不存在这样的子数组，请返回 0 。</p>\\n<p><strong>提示 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：nums = [1,1,0,1]</span>\\n<span class=\\"line\\">输出：3</span>\\n<span class=\\"line\\">解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,t as data};

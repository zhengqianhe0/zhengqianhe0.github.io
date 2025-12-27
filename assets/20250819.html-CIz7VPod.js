import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2348-全-0-子数组的数目" tabindex="-1"><a class="header-anchor" href="#_2348-全-0-子数组的数目"><span><a href="https://leetcode.cn/problems/number-of-zero-filled-subarrays/" target="_blank" rel="noopener noreferrer">2348. 全 0 子数组的数目</a></span></a></h1><p>给你一个整数数组 <code>nums</code> ，返回全部为 <code>0</code> 的 <strong>子数组</strong> 数目。</p><p><strong>子数组</strong> 是一个数组中一段连续非空元素组成的序列。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,3,0,0,2,0,0,4]</span>
<span class="line">输出：6</span>
<span class="line">解释：</span>
<span class="line">子数组 [0] 出现了 4 次。</span>
<span class="line">子数组 [0,0] 出现了 2 次。</span>
<span class="line">不存在长度大于 2 的全 0 子数组，所以我们返回 6 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [0,0,0,2,0,0]</span>
<span class="line">输出：9</span>
<span class="line">解释：</span>
<span class="line">子数组 [0] 出现了 5 次。</span>
<span class="line">子数组 [0,0] 出现了 3 次。</span>
<span class="line">子数组 [0,0,0] 出现了 1 次。</span>
<span class="line">不存在长度大于 3 的全 0 子数组，所以我们返回 9 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,10,2019]</span>
<span class="line">输出：0</span>
<span class="line">解释：没有全 0 子数组，所以我们返回 0 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>-109 &lt;= nums[i] &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>遍历到 nums[i]=0，现在来计算右端点为 i 的全 0 子数组的个数。</p><p>我们可以在右端点为 i−1 的全 0 子数组的末尾添加一个 0。比如右端点为 i−1 的全 0 子数组有 5 个，那么在这 5 个子数组的末尾添加 nums[i]=0，再算上 nums[i] 单独组成一个长为 1 的子数组，我们得到了 5+1=6 个右端点为 i 的全 0 子数组，加入答案。</p><p>具体来说：</p><p>用一个计数器 cnt0统计遍历到的连续 0 的个数。 如果 nums[i]=0，把计数器重置为 0。否则，把 cnt0加一，表示右端点为 i 的全 0 子数组比右端点为 i−1 的全 0 子数组多一个。然后把 cnt0加到答案中。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long zeroFilledSubarray(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        long long ans=0;</span>
<span class="line">        int cnt0=0;</span>
<span class="line">        for(int x:nums){</span>
<span class="line">            if(x){</span>
<span class="line">                cnt0=0;</span>
<span class="line">            }else{</span>
<span class="line">                cnt0++;</span>
<span class="line">                ans+=cnt0;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,19)]))}const t=s(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20250819.html","title":"2348. 全 0 子数组的数目","lang":"zh-CN","frontmatter":{"date":"2025-08-19T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","数学"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"4aabf4b2a34a2af55fd55492995ffbcfce0dcdbb","time":1755570154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250819.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code> ，返回全部为 <code>0</code> 的 <strong>子数组</strong> 数目。</p>\\n<p><strong>子数组</strong> 是一个数组中一段连续非空元素组成的序列。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：nums = [1,3,0,0,2,0,0,4]</span>\\n<span class=\\"line\\">输出：6</span>\\n<span class=\\"line\\">解释：</span>\\n<span class=\\"line\\">子数组 [0] 出现了 4 次。</span>\\n<span class=\\"line\\">子数组 [0,0] 出现了 2 次。</span>\\n<span class=\\"line\\">不存在长度大于 2 的全 0 子数组，所以我们返回 6 。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{t as comp,p as data};

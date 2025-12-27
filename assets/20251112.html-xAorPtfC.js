import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2654-使数组所有元素变成-1-的最少操作次数" tabindex="-1"><a class="header-anchor" href="#_2654-使数组所有元素变成-1-的最少操作次数"><span><a href="https://leetcode.cn/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/" target="_blank" rel="noopener noreferrer">2654. 使数组所有元素变成 1 的最少操作次数</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的 <strong>正</strong> 整数数组 <code>nums</code> 。你可以对数组执行以下操作 <strong>任意</strong> 次：</p><ul><li>选择一个满足 <code>0 &lt;= i &lt; n - 1</code> 的下标 <code>i</code> ，将 <code>nums[i]</code> 或者 <code>nums[i+1]</code> 两者之一替换成它们的最大公约数。</li></ul><p>请你返回使数组 <code>nums</code> 中所有元素都等于 <code>1</code> 的 <strong>最少</strong> 操作次数。如果无法让数组全部变成 <code>1</code> ，请你返回 <code>-1</code> 。</p><p>两个正整数的最大公约数指的是能整除这两个数的最大正整数。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,6,3,4]</span>
<span class="line">输出：4</span>
<span class="line">解释：我们可以执行以下操作：</span>
<span class="line">- 选择下标 i = 2 ，将 nums[2] 替换为 gcd(3,4) = 1 ，得到 nums = [2,6,1,4] 。</span>
<span class="line">- 选择下标 i = 1 ，将 nums[1] 替换为 gcd(6,1) = 1 ，得到 nums = [2,1,1,4] 。</span>
<span class="line">- 选择下标 i = 0 ，将 nums[0] 替换为 gcd(2,1) = 1 ，得到 nums = [1,1,1,4] 。</span>
<span class="line">- 选择下标 i = 2 ，将 nums[3] 替换为 gcd(1,4) = 1 ，得到 nums = [1,1,1,1] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,10,6,14]</span>
<span class="line">输出：-1</span>
<span class="line">解释：无法将所有元素都变成 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 106</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先判断能否得到答案，另外如果有1，直接求即可。</p><p>如果没有1，判断最小的能得到1的区间的长度，然后用这个1将其他的数组元素全部设为1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minOperations(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int n=nums.size(),gcd_all=0,cnt1=0;</span>
<span class="line">        for(int x:nums){</span>
<span class="line">            gcd_all=gcd(gcd_all,x);</span>
<span class="line">            if(x==1){</span>
<span class="line">                cnt1+=1;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if(gcd_all&gt;1) return -1;</span>
<span class="line">        if(cnt1) return n-cnt1;</span>
<span class="line"></span>
<span class="line">        int min_size=n;</span>
<span class="line">        for(int i=0;i&lt;n;i++){</span>
<span class="line">            int g=0;</span>
<span class="line">            for(int j=i;j&lt;n;j++){</span>
<span class="line">                g=gcd(g,nums[j]);</span>
<span class="line">                if(g==1){</span>
<span class="line">                    min_size=min(min_size,j-i);</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return min_size+n-1;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n*n+logU)，U为求gcd的最大数值（gcd内部算法复杂度为log级）</li><li>空间复杂度：O(1)</li></ul>`,17)]))}const t=s(l,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251112.html","title":"2654. 使数组所有元素变成 1 的最少操作次数","lang":"zh-CN","frontmatter":{"date":"2025-11-12T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","数组","数论"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251112.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的 <strong>正</strong> 整数数组 <code>nums</code> 。你可以对数组执行以下操作 <strong>任意</strong> 次：</p>\\n<ul>\\n<li>选择一个满足 <code>0 &lt;= i &lt; n - 1</code> 的下标 <code>i</code> ，将 <code>nums[i]</code> 或者 <code>nums[i+1]</code> 两者之一替换成它们的最大公约数。</li>\\n</ul>\\n<p>请你返回使数组 <code>nums</code> 中所有元素都等于 <code>1</code> 的 <strong>最少</strong> 操作次数。如果无法让数组全部变成 <code>1</code> ，请你返回 <code>-1</code> 。</p>"}');export{t as comp,p as data};

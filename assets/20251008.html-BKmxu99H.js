import{_ as n,c as e,a as l,o as i}from"./app-Bpj5Mkzv.js";const a={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[l(`<h1 id="_2300-咒语和药水的成功对数" tabindex="-1"><a class="header-anchor" href="#_2300-咒语和药水的成功对数"><span><a href="https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/" target="_blank" rel="noopener noreferrer">2300. 咒语和药水的成功对数</a></span></a></h1><p>给你两个正整数数组 <code>spells</code> 和 <code>potions</code> ，长度分别为 <code>n</code> 和 <code>m</code> ，其中 <code>spells[i]</code> 表示第 <code>i</code> 个咒语的能量强度，<code>potions[j]</code> 表示第 <code>j</code> 瓶药水的能量强度。</p><p>同时给你一个整数 <code>success</code> 。一个咒语和药水的能量强度 <strong>相乘</strong> 如果 <strong>大于等于</strong> <code>success</code> ，那么它们视为一对 <strong>成功</strong> 的组合。</p><p>请你返回一个长度为 <code>n</code> 的整数数组 <code>pairs</code>，其中 <code>pairs[i]</code> 是能跟第 <code>i</code> 个咒语成功组合的 <strong>药水</strong> 数目。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：spells = [5,1,3], potions = [1,2,3,4,5], success = 7</span>
<span class="line">输出：[4,0,3]</span>
<span class="line">解释：</span>
<span class="line">- 第 0 个咒语：5 * [1,2,3,4,5] = [5,10,15,20,25] 。总共 4 个成功组合。</span>
<span class="line">- 第 1 个咒语：1 * [1,2,3,4,5] = [1,2,3,4,5] 。总共 0 个成功组合。</span>
<span class="line">- 第 2 个咒语：3 * [1,2,3,4,5] = [3,6,9,12,15] 。总共 3 个成功组合。</span>
<span class="line">所以返回 [4,0,3] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：spells = [3,1,2], potions = [8,5,8], success = 16</span>
<span class="line">输出：[2,0,2]</span>
<span class="line">解释：</span>
<span class="line">- 第 0 个咒语：3 * [8,5,8] = [24,15,24] 。总共 2 个成功组合。</span>
<span class="line">- 第 1 个咒语：1 * [8,5,8] = [8,5,8] 。总共 0 个成功组合。</span>
<span class="line">- 第 2 个咒语：2 * [8,5,8] = [16,10,16] 。总共 2 个成功组合。</span>
<span class="line">所以返回 [2,0,2] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == spells.length</code></li><li><code>m == potions.length</code></li><li><code>1 &lt;= n, m &lt;= 105</code></li><li><code>1 &lt;= spells[i], potions[i] &lt;= 105</code></li><li><code>1 &lt;= success &lt;= 1010</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先排序。找到满足当前遍历到的spell的最小的元素，和尾迭代器相比计算出满足的个数。</p><p>注意：upper_bound是严格大于，lower_bound是大于等于，方法背后是二分查找</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; successfulPairs(vector&lt;int&gt;&amp; spells, vector&lt;int&gt;&amp; potions, long long success) {</span>
<span class="line">        sort(potions.begin(),potions.end());</span>
<span class="line">        for(int &amp;x:spells){</span>
<span class="line">            x=potions.end()-ranges::lower_bound(potions,1.0*success/x);</span>
<span class="line">        }</span>
<span class="line">        return spells;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">不用浮点数的写法：</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; successfulPairs(vector&lt;int&gt;&amp; spells, vector&lt;int&gt;&amp; potions, long long success) {</span>
<span class="line">        ranges::sort(potions);</span>
<span class="line">        for (int&amp; x : spells) { // 原地修改</span>
<span class="line">            long long target = (success - 1) / x;</span>
<span class="line">            if (target &lt; potions.back()) {</span>
<span class="line">                // 这样写每次二分就只用比两个 int 的大小，避免把 potions 中的元素转成 long long 比较</span>
<span class="line">                x = potions.end() - ranges::upper_bound(potions, (int) target);</span>
<span class="line">            } else {</span>
<span class="line">                x = 0;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return spells;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">法二：计数+前缀和</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; successfulPairs(vector&lt;int&gt;&amp; spells, vector&lt;int&gt;&amp; potions, long long success) {</span>
<span class="line">        int mx = ranges::max(potions);</span>
<span class="line">        vector&lt;int&gt; cnt(mx + 1);</span>
<span class="line">        for (int y : potions) {</span>
<span class="line">            cnt[y]++; // 统计每种药水的出现次数</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 计算 cnt 的后缀和</span>
<span class="line">        for (int i = mx - 1; i &gt;= 0; i--) {</span>
<span class="line">            cnt[i] += cnt[i + 1];</span>
<span class="line">        }</span>
<span class="line">        // 计算完毕后，cnt[i] 就是 potions 值 &gt;= i 的药水个数</span>
<span class="line"></span>
<span class="line">        for (int&amp; x : spells) {</span>
<span class="line">            long long low = (success - 1) / x + 1;</span>
<span class="line">            x = low &lt;= mx ? cnt[low] : 0;</span>
<span class="line">        }</span>
<span class="line">        return spells;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O((m+n)logm) 排序mlogm，遍历同时二分查找nlogm</li><li>空间复杂度：O(n)</li></ul>`,16)]))}const o=n(a,[["render",c]]),t=JSON.parse('{"path":"/leetcode/20251008.html","title":"2300. 咒语和药水的成功对数","lang":"zh-CN","frontmatter":{"date":"2025-10-08T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["排序","二分查找","数组"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251008.md","excerpt":"\\n<p>给你两个正整数数组 <code>spells</code> 和 <code>potions</code> ，长度分别为 <code>n</code> 和 <code>m</code> ，其中 <code>spells[i]</code> 表示第 <code>i</code> 个咒语的能量强度，<code>potions[j]</code> 表示第 <code>j</code> 瓶药水的能量强度。</p>\\n<p>同时给你一个整数 <code>success</code> 。一个咒语和药水的能量强度 <strong>相乘</strong> 如果 <strong>大于等于</strong> <code>success</code> ，那么它们视为一对 <strong>成功</strong> 的组合。</p>"}');export{o as comp,t as data};

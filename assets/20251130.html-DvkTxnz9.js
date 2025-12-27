import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_1590-使数组和能被-p-整除" tabindex="-1"><a class="header-anchor" href="#_1590-使数组和能被-p-整除"><span><a href="https://leetcode.cn/problems/make-sum-divisible-by-p/" target="_blank" rel="noopener noreferrer">1590. 使数组和能被 P 整除</a></span></a></h1><p>给你一个正整数数组 <code>nums</code>，请你移除 <strong>最短</strong> 子数组（可以为 <strong>空</strong>），使得剩余元素的 <strong>和</strong> 能被 <code>p</code> 整除。 <strong>不允许</strong> 将整个数组都移除。</p><p>请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 <code>-1</code> 。</p><p><strong>子数组</strong> 定义为原数组中连续的一组元素。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [3,1,4,2], p = 6</span>
<span class="line">输出：1</span>
<span class="line">解释：nums 中元素和为 10，不能被 p 整除。我们可以移除子数组 [4] ，剩余元素的和为 6 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [6,3,5,2], p = 9</span>
<span class="line">输出：2</span>
<span class="line">解释：我们无法移除任何一个元素使得和被 9 整除，最优方案是移除子数组 [5,2] ，剩余元素为 [6,3]，和为 9 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3], p = 3</span>
<span class="line">输出：0</span>
<span class="line">解释：和恰好为 6 ，已经能被 3 整除了。所以我们不需要移除任何元素。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3], p = 7</span>
<span class="line">输出：-1</span>
<span class="line">解释：没有任何方案使得移除子数组后剩余元素的和被 7 整除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1000000000,1000000000,1000000000], p = 3</span>
<span class="line">输出：0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>1 &lt;= nums[i] &lt;= 109</code></li><li><code>1 &lt;= p &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>建立前缀和数组，记录余数。先判断综合是否能整除。</p><p>用哈希表记录相同余数出现的上一次位置（两个余数相同的相减表示子数组和能被整除）</p><p>我们不是要找余数差为 0 的子数组，而是要找余数差等于总余数 <code>x</code> 的子数组。所以，当我们走到当前位置时，就去哈希表里查：“有没有哪个之前的余数，加上 <code>x</code> 之后刚好等于我现在的余数？”——换句话说，就是找那个能让中间这段子数组“补上”总余数的起点。</p><p>一旦找到了，就用当前位置减去那个起点位置，得到子数组长度，并不断更新最短长度。</p><p>最后，如果最短长度等于整个数组的长度，说明只有把全部元素都删掉才行，但题目不允许这样（因为删光了就没有“剩余元素”了），所以返回 -1；否则就返回找到的最短长度。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minSubarray(vector&lt;int&gt; &amp;nums, int p) {</span>
<span class="line">        int n = nums.size(), s[n + 1];</span>
<span class="line">        s[0] = 0;</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            s[i + 1] = (s[i] + nums[i]) % p;</span>
<span class="line">        }</span>
<span class="line">        int x = s[n];</span>
<span class="line">        if (x == 0) {</span>
<span class="line">            return 0; // 移除空子数组（这行可以不要）</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        int ans = n;</span>
<span class="line">        unordered_map&lt;int, int&gt; last;</span>
<span class="line">        for (int i = 0; i &lt;= n; ++i) {</span>
<span class="line">            last[s[i]] = i;</span>
<span class="line">            auto it = last.find((s[i] - x + p) % p);</span>
<span class="line">            if (it != last.end()) {</span>
<span class="line">                ans = min(ans, i - it-&gt;second);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans &lt; n ? ans : -1;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul>`,25)]))}const p=s(l,[["render",d]]),c=JSON.parse('{"path":"/leetcode/20251130.html","title":"1590. 使数组和能被 P 整除","lang":"zh-CN","frontmatter":{"date":"2025-11-30T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","数组","哈希表","前缀和"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251130.md","excerpt":"\\n<p>给你一个正整数数组 <code>nums</code>，请你移除 <strong>最短</strong> 子数组（可以为 <strong>空</strong>），使得剩余元素的 <strong>和</strong> 能被 <code>p</code> 整除。 <strong>不允许</strong> 将整个数组都移除。</p>\\n<p>请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 <code>-1</code> 。</p>\\n<p><strong>子数组</strong> 定义为原数组中连续的一组元素。</p>\\n<p><strong>示例 1：</strong></p>"}');export{p as comp,c as data};

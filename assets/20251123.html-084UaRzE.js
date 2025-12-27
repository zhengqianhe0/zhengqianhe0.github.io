import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_1262-可被三整除的最大和" tabindex="-1"><a class="header-anchor" href="#_1262-可被三整除的最大和"><span><a href="https://leetcode.cn/problems/greatest-sum-divisible-by-three/" target="_blank" rel="noopener noreferrer">1262. 可被三整除的最大和</a></span></a></h1><p>给你一个整数数组 <code>nums</code>，请你找出并返回能被三整除的元素 <strong>最大和</strong>。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [3,6,5,1,8]</span>
<span class="line">输出：18</span>
<span class="line">解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [4]</span>
<span class="line">输出：0</span>
<span class="line">解释：4 不能被 3 整除，所以无法选出数字，返回 0。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [1,2,3,4,4]</span>
<span class="line">输出：12</span>
<span class="line">解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 4 * 104</code></li><li><code>1 &lt;= nums[i] &lt;= 104</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>贪心，从整体的和中减去若干个元素。</p><p>把余1和余2的所有元素提取出来排序。</p><p>如果整体的和余1，则再删掉最小的1个余1的和删掉最小的2个余2的进行比较，选择和最大的那一个。</p><p>如果整体的和余2，与余1的情况对称，借助swap即可。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxSumDivThree(vector&lt;int&gt; &amp;nums) {</span>
<span class="line">        int s = accumulate(nums.begin(), nums.end(), 0);</span>
<span class="line">        if (s % 3 == 0)</span>
<span class="line">            return s;</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; a[3];</span>
<span class="line">        for (int x: nums)</span>
<span class="line">            a[x % 3].push_back(x);</span>
<span class="line">        sort(a[1].begin(), a[1].end());</span>
<span class="line">        sort(a[2].begin(), a[2].end());</span>
<span class="line"></span>
<span class="line">        if (s % 3 == 2)</span>
<span class="line">            swap(a[1], a[2]);</span>
<span class="line">        int ans = a[1].size() ? s - a[1][0] : 0;</span>
<span class="line">        if (a[2].size() &gt; 1)</span>
<span class="line">            ans = max(ans, s - a[2][0] - a[2][1]);</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)</li><li>空间复杂度：O(n)</li></ul>`,18)]))}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20251123.html","title":"1262. 可被三整除的最大和","lang":"zh-CN","frontmatter":{"date":"2025-11-23T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","数学","动态规划"]},"headers":[],"git":{"updatedTime":1764379051000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f1efcaa796af7064e3cee738675cd19d4efba611","time":1764379051000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251123.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code>，请你找出并返回能被三整除的元素 <strong>最大和</strong>。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：nums = [3,6,5,1,8]</span>\\n<span class=\\"line\\">输出：18</span>\\n<span class=\\"line\\">解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,p as data};

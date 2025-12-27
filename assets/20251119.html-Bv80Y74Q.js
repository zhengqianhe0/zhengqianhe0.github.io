import{_ as s,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2154-将找到的值乘以-2" tabindex="-1"><a class="header-anchor" href="#_2154-将找到的值乘以-2"><span><a href="https://leetcode.cn/problems/keep-multiplying-found-values-by-two/" target="_blank" rel="noopener noreferrer">2154. 将找到的值乘以 2</a></span></a></h1><p>给你一个整数数组 <code>nums</code> ，另给你一个整数 <code>original</code> ，这是需要在 <code>nums</code> 中搜索的第一个数字。</p><p>接下来，你需要按下述步骤操作：</p><ol><li>如果在 <code>nums</code> 中找到 <code>original</code> ，将 <code>original</code> <strong>乘以</strong> 2 ，得到新 <code>original</code>（即，令 <code>original = 2 * original</code>）。</li><li>否则，停止这一过程。</li><li>只要能在数组中找到新 <code>original</code> ，就对新 <code>original</code> 继续 <strong>重复</strong> 这一过程**。**</li></ol><p>返回 <code>original</code> 的 <strong>最终</strong> 值。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [5,3,6,1,12], original = 3</span>
<span class="line">输出：24</span>
<span class="line">解释： </span>
<span class="line">- 3 能在 nums 中找到。3 * 2 = 6 。</span>
<span class="line">- 6 能在 nums 中找到。6 * 2 = 12 。</span>
<span class="line">- 12 能在 nums 中找到。12 * 2 = 24 。</span>
<span class="line">- 24 不能在 nums 中找到。因此，返回 24 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,7,9], original = 4</span>
<span class="line">输出：4</span>
<span class="line">解释：</span>
<span class="line">- 4 不能在 nums 中找到。因此，返回 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i], original &lt;= 1000</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>只要存在就*2，不要被示例误导，大的数字出现在前面也要乘2。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">最直接的办法：先排序再遍历</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int findFinalValue(vector&lt;int&gt;&amp; nums, int original) {</span>
<span class="line">        sort(nums.begin(),nums.end());</span>
<span class="line">        for(int i=0;i&lt;nums.size();i++){</span>
<span class="line">            if(nums[i]==original){</span>
<span class="line">                original*=2;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return original;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">利用集合：</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int findFinalValue(vector&lt;int&gt;&amp; nums, int original) {</span>
<span class="line">        unordered_set&lt;int&gt; st(nums.begin(), nums.end());</span>
<span class="line">        while (st.contains(original)) {</span>
<span class="line">            original *= 2;</span>
<span class="line">        }</span>
<span class="line">        return original;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)-&gt;O(n+log(U/original))</li><li>空间复杂度：O(1)</li></ul>`,16)]))}const o=s(a,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251119.html","title":"2154. 将找到的值乘以 2","lang":"zh-CN","frontmatter":{"date":"2025-11-19T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","数学","哈希表"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251119.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code> ，另给你一个整数 <code>original</code> ，这是需要在 <code>nums</code> 中搜索的第一个数字。</p>\\n<p>接下来，你需要按下述步骤操作：</p>\\n<ol>\\n<li>如果在 <code>nums</code> 中找到 <code>original</code> ，将 <code>original</code> <strong>乘以</strong> 2 ，得到新 <code>original</code>（即，令 <code>original = 2 * original</code>）。</li>\\n<li>否则，停止这一过程。</li>\\n<li>只要能在数组中找到新 <code>original</code> ，就对新 <code>original</code> 继续 <strong>重复</strong> 这一过程**。**</li>\\n</ol>"}');export{o as comp,t as data};

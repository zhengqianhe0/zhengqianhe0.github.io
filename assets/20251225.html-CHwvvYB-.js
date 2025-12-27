import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_3075-幸福值最大化的选择方案" tabindex="-1"><a class="header-anchor" href="#_3075-幸福值最大化的选择方案"><span><a href="https://leetcode.cn/problems/maximize-happiness-of-selected-children/" target="_blank" rel="noopener noreferrer">3075. 幸福值最大化的选择方案</a></span></a></h1><p>给你一个长度为 <code>n</code> 的数组 <code>happiness</code> ，以及一个 <strong>正整数</strong> <code>k</code> 。</p><p><code>n</code> 个孩子站成一队，其中第 <code>i</code> 个孩子的 <strong>幸福值</strong> 是 <code>happiness[i]</code> 。你计划组织 <code>k</code> 轮筛选从这 <code>n</code> 个孩子中选出 <code>k</code> 个孩子。</p><p>在每一轮选择一个孩子时，所有 <strong>尚未</strong> 被选中的孩子的 <strong>幸福值</strong> 将减少 <code>1</code> 。注意，幸福值 <strong>不能</strong> 变成负数，且只有在它是正数的情况下才会减少。</p><p>选择 <code>k</code> 个孩子，并使你选中的孩子幸福值之和最大，返回你能够得到的 <strong>最大值</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：happiness = [1,2,3], k = 2</span>
<span class="line">输出：4</span>
<span class="line">解释：按以下方式选择 2 个孩子：</span>
<span class="line">- 选择幸福值为 3 的孩子。剩余孩子的幸福值变为 [0,1] 。</span>
<span class="line">- 选择幸福值为 1 的孩子。剩余孩子的幸福值变为 [0] 。注意幸福值不能小于 0 。</span>
<span class="line">所选孩子的幸福值之和为 3 + 1 = 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：happiness = [1,1,1,1], k = 2</span>
<span class="line">输出：1</span>
<span class="line">解释：按以下方式选择 2 个孩子：</span>
<span class="line">- 选择幸福值为 1 的任意一个孩子。剩余孩子的幸福值变为 [0,0,0] 。</span>
<span class="line">- 选择幸福值为 0 的孩子。剩余孩子的幸福值变为 [0,0] 。</span>
<span class="line">所选孩子的幸福值之和为 1 + 0 = 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：happiness = [2,3,4,5], k = 1</span>
<span class="line">输出：5</span>
<span class="line">解释：按以下方式选择 1 个孩子：</span>
<span class="line">- 选择幸福值为 5 的孩子。剩余孩子的幸福值变为 [1,2,3] 。</span>
<span class="line">所选孩子的幸福值之和为 5 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n == happiness.length &lt;= 2 * 105</code></li><li><code>1 &lt;= happiness[i] &lt;= 108</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>排序+贪心</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long maximumHappinessSum(vector&lt;int&gt;&amp; happiness, int k) {</span>
<span class="line">        sort(happiness.begin(),happiness.end(),greater&lt;int&gt;());</span>
<span class="line">        long long ans=0;</span>
<span class="line">        for(int i=0;i&lt;k;i++){</span>
<span class="line">            if((happiness[i]-i)&gt;0){</span>
<span class="line">                ans+=happiness[i]-i;</span>
<span class="line">            }else{</span>
<span class="line">                return ans;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long maximumHappinessSum(vector&lt;int&gt;&amp; happiness, int k) {</span>
<span class="line">        ranges::sort(happiness, greater());</span>
<span class="line">        long long ans = 0;</span>
<span class="line">        for (int i = 0; i &lt; k &amp;&amp; happiness[i] &gt; i; i++) {</span>
<span class="line">            ans += happiness[i] - i;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)</li><li>空间复杂度：O(1)</li></ul>`,18)]))}const r=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251225.html","title":"3075. 幸福值最大化的选择方案","lang":"zh-CN","frontmatter":{"date":"2025-12-25T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","排序","贪心"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251225.md","excerpt":"\\n<p>给你一个长度为 <code>n</code> 的数组 <code>happiness</code> ，以及一个 <strong>正整数</strong> <code>k</code> 。</p>\\n<p><code>n</code> 个孩子站成一队，其中第 <code>i</code> 个孩子的 <strong>幸福值</strong> 是 <code>happiness[i]</code> 。你计划组织 <code>k</code> 轮筛选从这 <code>n</code> 个孩子中选出 <code>k</code> 个孩子。</p>\\n<p>在每一轮选择一个孩子时，所有 <strong>尚未</strong> 被选中的孩子的 <strong>幸福值</strong> 将减少 <code>1</code> 。注意，幸福值 <strong>不能</strong> 变成负数，且只有在它是正数的情况下才会减少。</p>"}');export{r as comp,t as data};

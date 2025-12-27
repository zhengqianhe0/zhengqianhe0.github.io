import{_ as s,c as n,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="_2054-两个最好的不重叠活动" tabindex="-1"><a class="header-anchor" href="#_2054-两个最好的不重叠活动"><span><a href="https://leetcode.cn/problems/two-best-non-overlapping-events/" target="_blank" rel="noopener noreferrer">2054. 两个最好的不重叠活动</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>events</code> ，其中 <code>events[i] = [startTimei, endTimei, valuei]</code> 。第 <code>i</code> 个活动开始于 <code>startTimei</code> ，结束于 <code>endTimei</code> ，如果你参加这个活动，那么你可以得到价值 <code>valuei</code> 。你 <strong>最多</strong> 可以参加 <strong>两个时间不重叠</strong> 活动，使得它们的价值之和 <strong>最大</strong> 。</p><p>请你返回价值之和的 <strong>最大值</strong> 。</p><p>注意，活动的开始时间和结束时间是 <strong>包括</strong> 在活动时间内的，也就是说，你不能参加两个活动且它们之一的开始时间等于另一个活动的结束时间。更具体的，如果你参加一个活动，且结束时间为 <code>t</code> ，那么下一个活动必须在 <code>t + 1</code> 或之后的时间开始。</p><p><strong>示例 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/09/21/picture5.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：events = [[1,3,2],[4,5,2],[2,4,3]]</span>
<span class="line">输出：4</span>
<span class="line">解释：选择绿色的活动 0 和 1 ，价值之和为 2 + 2 = 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/09/21/picture1.png" alt="Example 1 Diagram"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：events = [[1,3,2],[4,5,2],[1,5,5]]</span>
<span class="line">输出：5</span>
<span class="line">解释：选择活动 2 ，价值和为 5 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/09/21/picture3.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：events = [[1,5,3],[1,5,1],[6,6,5]]</span>
<span class="line">输出：8</span>
<span class="line">解释：选择活动 0 和 2 ，价值之和为 3 + 5 = 8 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= events.length &lt;= 105</code></li><li><code>events[i].length == 3</code></li><li><code>1 &lt;= startTimei &lt;= endTimei &lt;= 109</code></li><li><code>1 &lt;= valuei &lt;= 106</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>排序+单调栈二分</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxTwoEvents(vector&lt;vector&lt;int&gt;&gt;&amp; events) {</span>
<span class="line">        // 按照结束时间排序</span>
<span class="line">        ranges::sort(events, {}, [](auto&amp; e) { return e[1]; });</span>
<span class="line"></span>
<span class="line">        // 从栈底到栈顶，结束时间递增，价值递增</span>
<span class="line">        vector&lt;pair&lt;int, int&gt;&gt; st = {{0, 0}}; // 栈底哨兵</span>
<span class="line">        int ans = 0;</span>
<span class="line">        for (auto&amp; e : events) {</span>
<span class="line">            int start_time = e[0], value = e[2];</span>
<span class="line">            // 二分查找最后一个结束时间 &lt; start_time 的活动</span>
<span class="line">            auto it = --ranges::lower_bound(st, start_time, {}, &amp;pair&lt;int, int&gt;::first);</span>
<span class="line">            ans = max(ans, it-&gt;second + value);</span>
<span class="line">            // 遇到比栈顶更大的价值，入栈</span>
<span class="line">            if (value &gt; st.back().second) {</span>
<span class="line">                st.emplace_back(e[1], value);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)</li><li>空间复杂度：O(n)</li></ul>`,20)]))}const r=s(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20251223.html","title":"2054. 两个最好的不重叠活动","lang":"zh-CN","frontmatter":{"date":"2025-12-23T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","排序","动态规划","二分查找"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251223.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>events</code> ，其中 <code>events[i] = [startTimei, endTimei, valuei]</code> 。第 <code>i</code> 个活动开始于 <code>startTimei</code> ，结束于 <code>endTimei</code> ，如果你参加这个活动，那么你可以得到价值 <code>valuei</code> 。你 <strong>最多</strong> 可以参加 <strong>两个时间不重叠</strong> 活动，使得它们的价值之和 <strong>最大</strong> 。</p>"}');export{r as comp,p as data};

import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_757-设置交集大小至少为2" tabindex="-1"><a class="header-anchor" href="#_757-设置交集大小至少为2"><span><a href="https://leetcode.cn/problems/set-intersection-size-at-least-two/" target="_blank" rel="noopener noreferrer">757. 设置交集大小至少为2</a></span></a></h1><p>给你一个二维整数数组 <code>intervals</code> ，其中 <code>intervals[i] = [starti, endi]</code> 表示从 <code>starti</code> 到 <code>endi</code> 的所有整数，包括 <code>starti</code> 和 <code>endi</code> 。</p><p><strong>包含集合</strong> 是一个名为 <code>nums</code> 的数组，并满足 <code>intervals</code> 中的每个区间都 <strong>至少</strong> 有 <strong>两个</strong> 整数在 <code>nums</code> 中。</p><ul><li>例如，如果 <code>intervals = [[1,3], [3,7], [8,9]]</code> ，那么 <code>[1,2,4,7,8,9]</code> 和 <code>[2,3,4,8,9]</code> 都符合 <strong>包含集合</strong> 的定义。</li></ul><p>返回包含集合可能的最小大小。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：intervals = [[1,3],[3,7],[8,9]]</span>
<span class="line">输出：5</span>
<span class="line">解释：nums = [2, 3, 4, 8, 9].</span>
<span class="line">可以证明不存在元素数量为 4 的包含集合。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：intervals = [[1,3],[1,4],[2,5],[3,5]]</span>
<span class="line">输出：3</span>
<span class="line">解释：nums = [2, 3, 4].</span>
<span class="line">可以证明不存在元素数量为 2 的包含集合。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：intervals = [[1,2],[2,3],[2,4],[4,5]]</span>
<span class="line">输出：5</span>
<span class="line">解释：nums = [1, 2, 3, 4, 5].</span>
<span class="line">可以证明不存在元素数量为 4 的包含集合。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 3000</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= starti &lt; endi &lt;= 108</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int intersectionSizeTwo(vector&lt;vector&lt;int&gt;&gt;&amp; intervals) {</span>
<span class="line">        ranges::sort(intervals, {}, [](auto&amp; a) { return a[1]; });</span>
<span class="line">        // 栈中保存闭区间左右端点，栈底到栈顶的区间长度的和</span>
<span class="line">        vector&lt;array&lt;int, 3&gt;&gt; st = {{-2, -2, 0}}; // 哨兵，保证不和任何区间相交</span>
<span class="line">        for (auto&amp; t : intervals) {</span>
<span class="line">            int start = t[0], end = t[1];</span>
<span class="line">            auto [_, r, s] = *--ranges::lower_bound(st, start, {}, [](auto&amp; x) { return x[0]; });</span>
<span class="line">            int d = 2 - (st.back()[2] - s); // 去掉运行中的时间点</span>
<span class="line">            if (start &lt;= r) { // start 在区间 st[i] 内</span>
<span class="line">                d -= r - start + 1; // 去掉运行中的时间点</span>
<span class="line">            }</span>
<span class="line">            if (d &lt;= 0) {</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line">            while (end - st.back()[1] &lt;= d) { // 剩余的 d 填充区间后缀</span>
<span class="line">                auto [l, r, _] = st.back();</span>
<span class="line">                st.pop_back();</span>
<span class="line">                d += r - l + 1; // 合并区间</span>
<span class="line">            }</span>
<span class="line">            st.push_back({end - d + 1, end, st.back()[2] + d});</span>
<span class="line">        }</span>
<span class="line">        return st.back()[2];</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn) 排序nlogn</li><li>空间复杂度：O(1)</li></ul>`,17)]))}const r=s(l,[["render",t]]),o=JSON.parse('{"path":"/leetcode/20251120.html","title":"757. 设置交集大小至少为2","lang":"zh-CN","frontmatter":{"date":"2025-11-20T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","贪心","排序"]},"headers":[],"git":{"updatedTime":1764379051000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f1efcaa796af7064e3cee738675cd19d4efba611","time":1764379051000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251120.md","excerpt":"\\n<p>给你一个二维整数数组 <code>intervals</code> ，其中 <code>intervals[i] = [starti, endi]</code> 表示从 <code>starti</code> 到 <code>endi</code> 的所有整数，包括 <code>starti</code> 和 <code>endi</code> 。</p>\\n<p><strong>包含集合</strong> 是一个名为 <code>nums</code> 的数组，并满足 <code>intervals</code> 中的每个区间都 <strong>至少</strong> 有 <strong>两个</strong> 整数在 <code>nums</code> 中。</p>"}');export{r as comp,o as data};

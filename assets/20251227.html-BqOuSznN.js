import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2402-会议室-iii" tabindex="-1"><a class="header-anchor" href="#_2402-会议室-iii"><span><a href="https://leetcode.cn/problems/meeting-rooms-iii/" target="_blank" rel="noopener noreferrer">2402. 会议室 III</a></span></a></h1><p>给你一个整数 <code>n</code> ，共有编号从 <code>0</code> 到 <code>n - 1</code> 的 <code>n</code> 个会议室。</p><p>给你一个二维整数数组 <code>meetings</code> ，其中 <code>meetings[i] = [starti, endi]</code> 表示一场会议将会在 <strong>半闭</strong> 时间区间 <code>[starti, endi)</code> 举办。所有 <code>starti</code> 的值 <strong>互不相同</strong> 。</p><p>会议将会按以下方式分配给会议室：</p><ol><li>每场会议都会在未占用且编号 <strong>最小</strong> 的会议室举办。</li><li>如果没有可用的会议室，会议将会延期，直到存在空闲的会议室。延期会议的持续时间和原会议持续时间 <strong>相同</strong> 。</li><li>当会议室处于未占用状态时，将会优先提供给原 <strong>开始</strong> 时间更早的会议。</li></ol><p>返回举办最多次会议的房间 <strong>编号</strong> 。如果存在多个房间满足此条件，则返回编号 <strong>最小</strong> 的房间。</p><p><strong>半闭区间</strong> <code>[a, b)</code> 是 <code>a</code> 和 <code>b</code> 之间的区间，<strong>包括</strong> <code>a</code> 但 <strong>不包括</strong> <code>b</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]</span>
<span class="line">输出：0</span>
<span class="line">解释：</span>
<span class="line">- 在时间 0 ，两个会议室都未占用，第一场会议在会议室 0 举办。</span>
<span class="line">- 在时间 1 ，只有会议室 1 未占用，第二场会议在会议室 1 举办。</span>
<span class="line">- 在时间 2 ，两个会议室都被占用，第三场会议延期举办。</span>
<span class="line">- 在时间 3 ，两个会议室都被占用，第四场会议延期举办。</span>
<span class="line">- 在时间 5 ，会议室 1 的会议结束。第三场会议在会议室 1 举办，时间周期为 [5,10) 。</span>
<span class="line">- 在时间 10 ，两个会议室的会议都结束。第四场会议在会议室 0 举办，时间周期为 [10,11) 。</span>
<span class="line">会议室 0 和会议室 1 都举办了 2 场会议，所以返回 0 。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]</span>
<span class="line">输出：1</span>
<span class="line">解释：</span>
<span class="line">- 在时间 1 ，所有三个会议室都未占用，第一场会议在会议室 0 举办。</span>
<span class="line">- 在时间 2 ，会议室 1 和 2 未占用，第二场会议在会议室 1 举办。</span>
<span class="line">- 在时间 3 ，只有会议室 2 未占用，第三场会议在会议室 2 举办。</span>
<span class="line">- 在时间 4 ，所有三个会议室都被占用，第四场会议延期举办。 </span>
<span class="line">- 在时间 5 ，会议室 2 的会议结束。第四场会议在会议室 2 举办，时间周期为 [5,10) 。</span>
<span class="line">- 在时间 6 ，所有三个会议室都被占用，第五场会议延期举办。 </span>
<span class="line">- 在时间 10 ，会议室 1 和 2 的会议结束。第五场会议在会议室 1 举办，时间周期为 [10,12) 。 </span>
<span class="line">会议室 1 和会议室 2 都举办了 2 场会议，所以返回 1 。 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= meetings.length &lt;= 105</code></li><li><code>meetings[i].length == 2</code></li><li><code>0 &lt;= starti &lt; endi &lt;= 5 * 105</code></li><li><code>starti</code> 的所有值 <strong>互不相同</strong></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>用两个堆直接模拟</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int mostBooked(int n, vector&lt;vector&lt;int&gt;&gt;&amp; meetings) {</span>
<span class="line">        ranges::sort(meetings, {}, [](auto&amp; m) { return m[0]; });</span>
<span class="line"></span>
<span class="line">        priority_queue&lt;int, vector&lt;int&gt;, greater&lt;&gt;&gt; idle; // 会议室编号</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            idle.push(i);</span>
<span class="line">        }</span>
<span class="line">        priority_queue&lt;pair&lt;long long, int&gt;, vector&lt;pair&lt;long long, int&gt;&gt;, greater&lt;&gt;&gt; using_; // (结束时间，会议室编号)</span>
<span class="line">        vector&lt;int&gt; cnt(n); // 会议室的开会次数</span>
<span class="line"></span>
<span class="line">        for (auto&amp; m : meetings) {</span>
<span class="line">            long long start = m[0], end = m[1];</span>
<span class="line"></span>
<span class="line">            // 在 start 时刻空出来的会议室</span>
<span class="line">            while (!using_.empty() &amp;&amp; using_.top().first &lt;= start) {</span>
<span class="line">                idle.push(using_.top().second);</span>
<span class="line">                using_.pop();</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            int i;</span>
<span class="line">            if (!idle.empty()) { // 有空闲的会议室</span>
<span class="line">                i = idle.top();</span>
<span class="line">                idle.pop();</span>
<span class="line">            } else { // 没有空闲的会议室</span>
<span class="line">                // 弹出一个最早结束的会议室（若有多个同时结束，弹出编号最小的会议室）</span>
<span class="line">                auto [e, room] = using_.top();</span>
<span class="line">                i = room;</span>
<span class="line">                using_.pop(); </span>
<span class="line">                end += e - start; // 更新当前会议的结束时间</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            using_.emplace(end, i); // 使用一个会议室</span>
<span class="line">            cnt[i]++;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return ranges::max_element(cnt) - cnt.begin();</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(<em>m</em>log<em>m</em>+<em>n</em>+<em>m</em>log<em>n</em>)</li><li>空间复杂度：O(n)</li></ul>`,18)]))}const p=s(l,[["render",d]]),r=JSON.parse('{"path":"/leetcode/20251227.html","title":"2402. 会议室 III","lang":"zh-CN","frontmatter":{"date":"2025-12-27T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","哈希表","堆","排序"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251227.md","excerpt":"\\n<p>给你一个整数 <code>n</code> ，共有编号从 <code>0</code> 到 <code>n - 1</code> 的 <code>n</code> 个会议室。</p>\\n<p>给你一个二维整数数组 <code>meetings</code> ，其中 <code>meetings[i] = [starti, endi]</code> 表示一场会议将会在 <strong>半闭</strong> 时间区间 <code>[starti, endi)</code> 举办。所有 <code>starti</code> 的值 <strong>互不相同</strong> 。</p>\\n<p>会议将会按以下方式分配给会议室：</p>"}');export{p as comp,r as data};

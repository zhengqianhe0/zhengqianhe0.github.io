import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_1488-避免洪水泛滥" tabindex="-1"><a class="header-anchor" href="#_1488-避免洪水泛滥"><span><a href="https://leetcode.cn/problems/avoid-flood-in-the-city/" target="_blank" rel="noopener noreferrer">1488. 避免洪水泛滥</a></span></a></h1><p>你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 <code>n</code> 个湖泊下雨前是空的，那么它就会装满水。如果第 <code>n</code> 个湖泊下雨前是 <strong>满的</strong> ，这个湖泊会发生 <strong>洪水</strong> 。你的目标是避免任意一个湖泊发生洪水。</p><p>给你一个整数数组 <code>rains</code> ，其中：</p><ul><li><code>rains[i] &gt; 0</code> 表示第 <code>i</code> 天时，第 <code>rains[i]</code> 个湖泊会下雨。</li><li><code>rains[i] == 0</code> 表示第 <code>i</code> 天没有湖泊会下雨，你可以选择 <strong>一个</strong> 湖泊并 <strong>抽干</strong> 这个湖泊的水。</li></ul><p>请返回一个数组 <code>ans</code> ，满足：</p><ul><li><code>ans.length == rains.length</code></li><li>如果 <code>rains[i] &gt; 0</code> ，那么<code>ans[i] == -1</code> 。</li><li>如果 <code>rains[i] == 0</code> ，<code>ans[i]</code> 是你第 <code>i</code> 天选择抽干的湖泊。</li></ul><p>如果有多种可行解，请返回它们中的 <strong>任意一个</strong> 。如果没办法阻止洪水，请返回一个 <strong>空的数组</strong> 。</p><p>请注意，如果你选择抽干一个装满水的湖泊，它会变成一个空的湖泊。但如果你选择抽干一个空的湖泊，那么将无事发生。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：rains = [1,2,3,4]</span>
<span class="line">输出：[-1,-1,-1,-1]</span>
<span class="line">解释：第一天后，装满水的湖泊包括 [1]</span>
<span class="line">第二天后，装满水的湖泊包括 [1,2]</span>
<span class="line">第三天后，装满水的湖泊包括 [1,2,3]</span>
<span class="line">第四天后，装满水的湖泊包括 [1,2,3,4]</span>
<span class="line">没有哪一天你可以抽干任何湖泊的水，也没有湖泊会发生洪水。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：rains = [1,2,0,0,2,1]</span>
<span class="line">输出：[-1,-1,2,1,-1,-1]</span>
<span class="line">解释：第一天后，装满水的湖泊包括 [1]</span>
<span class="line">第二天后，装满水的湖泊包括 [1,2]</span>
<span class="line">第三天后，我们抽干湖泊 2 。所以剩下装满水的湖泊包括 [1]</span>
<span class="line">第四天后，我们抽干湖泊 1 。所以暂时没有装满水的湖泊了。</span>
<span class="line">第五天后，装满水的湖泊包括 [2]。</span>
<span class="line">第六天后，装满水的湖泊包括 [1,2]。</span>
<span class="line">可以看出，这个方案下不会有洪水发生。同时， [-1,-1,1,2,-1,-1] 也是另一个可行的没有洪水的方案。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：rains = [1,2,0,1,2]</span>
<span class="line">输出：[]</span>
<span class="line">解释：第二天后，装满水的湖泊包括 [1,2]。我们可以在第三天抽干一个湖泊的水。</span>
<span class="line">但第三天后，湖泊 1 和 2 都会再次下雨，所以不管我们第三天抽干哪个湖泊的水，另一个湖泊都会发生洪水。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= rains.length &lt;= 105</code></li><li><code>0 &lt;= rains[i] &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>找到一条从起点 (0,0) 到终点 (<em>n</em>−1,<em>n</em>−1) 的路径，且路径上的 <em>grid</em>[<em>i</em>][<em>j</em>] 的最大值尽量小。返回这个最大值。</p><p>因此，用logn级别的二分查找+n²级别的DFS。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; avoidFlood(vector&lt;int&gt;&amp; rains) {</span>
<span class="line">        int n = rains.size();</span>
<span class="line">        // 初始化答案数组：默认下雨天填 -1，晴天先填 1（后面可能被覆盖）</span>
<span class="line">        vector&lt;int&gt; ans(n, -1);</span>
<span class="line">        // 记录每个湖泊最近一次被雨水灌满的日期（即下雨的索引）</span>
<span class="line">        unordered_map&lt;int, int&gt; full_day;</span>
<span class="line">        // 用有序集合（set）维护所有可用的晴天（索引），方便快速查找最早可用的晴天</span>
<span class="line">        set&lt;int&gt; dry_day;</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            int lake = rains[i];  // 当前处理的湖泊编号（0 表示晴天）</span>
<span class="line"></span>
<span class="line">            if (lake == 0) {</span>
<span class="line">                // 当前是晴天：暂时标记为 1。注意必须修改，如果不修改保持-1，会认为是没有正确处理晴天</span>
<span class="line">                ans[i] = 1;</span>
<span class="line">                // 将这个晴天的索引加入可用晴天集合</span>
<span class="line">                dry_day.insert(i);</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 当前是下雨天，对 lake 下雨</span>
<span class="line">            // 检查该湖泊是否已经被灌满（即之前下过雨且未被抽干）</span>
<span class="line">            if (full_day.contains(lake)) {</span>
<span class="line">                // 如果该湖已经满了，必须在上次灌满之后、今天之前找一个晴天来抽干它</span>
<span class="line">                int last_rain_day = full_day[lake];  // 上次 lake 下雨的日期</span>
<span class="line"></span>
<span class="line">                // 在 dry_day 中查找第一个大于 last_rain_day 的晴天（即在上次下雨之后的最早晴天）</span>
<span class="line">                auto it = dry_day.upper_bound(last_rain_day);</span>
<span class="line"></span>
<span class="line">                // 如果找不到这样的晴天，说明无法避免洪水，返回空数组</span>
<span class="line">                if (it == dry_day.end()) {</span>
<span class="line">                    return {};</span>
<span class="line">                }</span>
<span class="line"></span>
<span class="line">                // 找到了合适的晴天 it，用这一天来抽干 lake</span>
<span class="line">                ans[*it] = lake;   // 在那天抽干 lake</span>
<span class="line">                dry_day.erase(it); // 该晴天已被使用，从可用集合中移除</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 更新 lake 最近一次被灌满的日期为今天</span>
<span class="line">            full_day[lake] = i;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)，set的插入和查找复杂度为logn</li><li>空间复杂度：O(n)</li></ul>`,22)]))}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251007.html","title":"1488. 避免洪水泛滥","lang":"zh-CN","frontmatter":{"date":"2025-10-07T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["贪心","数组","哈希表","优先队列"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251007.md","excerpt":"\\n<p>你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 <code>n</code> 个湖泊下雨前是空的，那么它就会装满水。如果第 <code>n</code> 个湖泊下雨前是 <strong>满的</strong> ，这个湖泊会发生 <strong>洪水</strong> 。你的目标是避免任意一个湖泊发生洪水。</p>\\n<p>给你一个整数数组 <code>rains</code> ，其中：</p>\\n<ul>\\n<li><code>rains[i] &gt; 0</code> 表示第 <code>i</code> 天时，第 <code>rains[i]</code> 个湖泊会下雨。</li>\\n<li><code>rains[i] == 0</code> 表示第 <code>i</code> 天没有湖泊会下雨，你可以选择 <strong>一个</strong> 湖泊并 <strong>抽干</strong> 这个湖泊的水。</li>\\n</ul>"}');export{p as comp,t as data};

import{_ as s,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function c(d,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_3607-电网维护" tabindex="-1"><a class="header-anchor" href="#_3607-电网维护"><span><a href="https://leetcode.cn/problems/power-grid-maintenance/" target="_blank" rel="noopener noreferrer">3607. 电网维护</a></span></a></h1><p>给你一个整数 <code>c</code>，表示 <code>c</code> 个电站，每个电站有一个唯一标识符 <code>id</code>，从 1 到 <code>c</code> 编号。</p><p>这些电站通过 <code>n</code> 条 <strong>双向</strong> 电缆互相连接，表示为一个二维数组 <code>connections</code>，其中每个元素 <code>connections[i] = [ui, vi]</code> 表示电站 <code>ui</code> 和电站 <code>vi</code> 之间的连接。直接或间接连接的电站组成了一个 <strong>电网</strong> 。</p><p>最初，<strong>所有</strong> 电站均处于在线（正常运行）状态。</p><p>另给你一个二维数组 <code>queries</code>，其中每个查询属于以下 <strong>两种类型之一</strong> ：</p><ul><li><code>[1, x]</code>：请求对电站 <code>x</code> 进行维护检查。如果电站 <code>x</code> 在线，则它自行解决检查。如果电站 <code>x</code> 已离线，则检查由与 <code>x</code> 同一 <strong>电网</strong> 中 <strong>编号最小</strong> 的在线电站解决。如果该电网中 <strong>不存在</strong> 任何 <strong>在线</strong> 电站，则返回 -1。</li><li><code>[2, x]</code>：电站 <code>x</code> 离线（即变为非运行状态）。</li></ul><p>返回一个整数数组，表示按照查询中出现的顺序，所有类型为 <code>[1, x]</code> 的查询结果。</p><p>**注意：**电网的结构是固定的；离线（非运行）的节点仍然属于其所在的电网，且离线操作不会改变电网的连接性。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]</p><p><strong>输出：</strong> [3,2,3]</p><p><strong>解释：</strong></p><p><img src="https://assets.leetcode.com/uploads/2025/04/15/powergrid.jpg" alt="img"></p><ul><li>最初，所有电站 <code>{1, 2, 3, 4, 5}</code> 都在线，并组成一个电网。</li><li>查询 <code>[1,3]</code>：电站 3 在线，因此维护检查由电站 3 自行解决。</li><li>查询 <code>[2,1]</code>：电站 1 离线。剩余在线电站为 <code>{2, 3, 4, 5}</code>。</li><li>查询 <code>[1,1]</code>：电站 1 离线，因此检查由电网中编号最小的在线电站解决，即电站 2。</li><li>查询 <code>[2,2]</code>：电站 2 离线。剩余在线电站为 <code>{3, 4, 5}</code>。</li><li>查询 <code>[1,2]</code>：电站 2 离线，因此检查由电网中编号最小的在线电站解决，即电站 3。</li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> c = 3, connections = [], queries = [[1,1],[2,1],[1,1]]</p><p><strong>输出：</strong> [1,-1]</p><p><strong>解释：</strong></p><ul><li>没有连接，因此每个电站是一个独立的电网。</li><li>查询 <code>[1,1]</code>：电站 1 在线，且属于其独立电网，因此维护检查由电站 1 自行解决。</li><li>查询 <code>[2,1]</code>：电站 1 离线。</li><li>查询 <code>[1,1]</code>：电站 1 离线，且其电网中没有其他电站，因此结果为 -1。</li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= c &lt;= 105</code></li><li><code>0 &lt;= n == connections.length &lt;= min(105, c * (c - 1) / 2)</code></li><li><code>connections[i].length == 2</code></li><li><code>1 &lt;= ui, vi &lt;= c</code></li><li><code>ui != vi</code></li><li><code>1 &lt;= queries.length &lt;= 2 * 105</code></li><li><code>queries[i].length == 2</code></li><li><code>queries[i][0]</code> 为 1 或 2。</li><li><code>1 &lt;= queries[i][1] &lt;= c</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>DFS</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; processQueries(int c, vector&lt;vector&lt;int&gt;&gt;&amp; connections, vector&lt;vector&lt;int&gt;&gt;&amp; queries) {</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; g(c + 1);</span>
<span class="line">        for (auto&amp; e : connections) {</span>
<span class="line">            int x = e[0], y = e[1];</span>
<span class="line">            g[x].push_back(y);</span>
<span class="line">            g[y].push_back(x);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; belong(c + 1, -1);</span>
<span class="line">        int cc = 0; // 连通块编号</span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int x) -&gt; void {</span>
<span class="line">            belong[x] = cc; // 记录节点 x 在哪个连通块</span>
<span class="line">            for (int y : g[x]) {</span>
<span class="line">                if (belong[y] &lt; 0) {</span>
<span class="line">                    dfs(y);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        for (int i = 1; i &lt;= c; i++) {</span>
<span class="line">            if (belong[i] &lt; 0) {</span>
<span class="line">                dfs(i);</span>
<span class="line">                cc++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; offline_time(c + 1, INT_MAX);</span>
<span class="line">        for (int i = queries.size() - 1; i &gt;= 0; i--) {</span>
<span class="line">            auto&amp; q = queries[i];</span>
<span class="line">            if (q[0] == 2) {</span>
<span class="line">                offline_time[q[1]] = i; // 记录最早离线时间</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 维护每个连通块的在线电站的最小编号</span>
<span class="line">        vector&lt;int&gt; mn(cc, INT_MAX);</span>
<span class="line">        for (int i = 1; i &lt;= c; i++) {</span>
<span class="line">            if (offline_time[i] == INT_MAX) { // 最终仍然在线</span>
<span class="line">                int j = belong[i];</span>
<span class="line">                mn[j] = min(mn[j], i);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; ans;</span>
<span class="line">        for (int i = queries.size() - 1; i &gt;= 0; i--) {</span>
<span class="line">            auto&amp; q = queries[i];</span>
<span class="line">            int x = q[1];</span>
<span class="line">            int j = belong[x];</span>
<span class="line">            if (q[0] == 2) {</span>
<span class="line">                if (offline_time[x] == i) { // 变回在线</span>
<span class="line">                    mn[j] = min(mn[j], x);</span>
<span class="line">                }</span>
<span class="line">            } else if (i &lt; offline_time[x]) { // 已经在线（写 &lt; 或者 &lt;= 都可以）</span>
<span class="line">                ans.push_back(x);</span>
<span class="line">            } else if (mn[j] != INT_MAX) {</span>
<span class="line">                ans.push_back(mn[j]);</span>
<span class="line">            } else {</span>
<span class="line">                ans.push_back(-1);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        ranges::reverse(ans);</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n+c+q)</li><li>空间复杂度：O(n)</li></ul>`,26)]))}const p=s(a,[["render",c]]),t=JSON.parse('{"path":"/leetcode/20251106.html","title":"3607. 电网维护","lang":"zh-CN","frontmatter":{"date":"2025-11-06T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["DFS","哈希表","数组"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251106.md","excerpt":"\\n<p>给你一个整数 <code>c</code>，表示 <code>c</code> 个电站，每个电站有一个唯一标识符 <code>id</code>，从 1 到 <code>c</code> 编号。</p>\\n<p>这些电站通过 <code>n</code> 条 <strong>双向</strong> 电缆互相连接，表示为一个二维数组 <code>connections</code>，其中每个元素 <code>connections[i] = [ui, vi]</code> 表示电站 <code>ui</code> 和电站 <code>vi</code> 之间的连接。直接或间接连接的电站组成了一个 <strong>电网</strong> 。</p>"}');export{p as comp,t as data};

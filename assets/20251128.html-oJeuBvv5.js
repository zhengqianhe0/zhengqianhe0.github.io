import{_ as s,c as n,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function d(c,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="_2872-可以被-k-整除连通块的最大数目" tabindex="-1"><a class="header-anchor" href="#_2872-可以被-k-整除连通块的最大数目"><span><a href="https://leetcode.cn/problems/maximum-number-of-k-divisible-components/" target="_blank" rel="noopener noreferrer">2872. 可以被 K 整除连通块的最大数目</a></span></a></h1><p>给你一棵 <code>n</code> 个节点的无向树，节点编号为 <code>0</code> 到 <code>n - 1</code> 。给你整数 <code>n</code> 和一个长度为 <code>n - 1</code> 的二维整数数组 <code>edges</code> ，其中 <code>edges[i] = [ai, bi]</code> 表示树中节点 <code>ai</code> 和 <code>bi</code> 有一条边。</p><p>同时给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>values</code> ，其中 <code>values[i]</code> 是第 <code>i</code> 个节点的 <strong>值</strong> 。再给你一个整数 <code>k</code> 。</p><p>你可以从树中删除一些边，也可以一条边也不删，得到若干连通块。一个 <strong>连通块的值</strong> 定义为连通块中所有节点值之和。如果所有连通块的值都可以被 <code>k</code> 整除，那么我们说这是一个 <strong>合法分割</strong> 。</p><p>请你返回所有合法分割中，<strong>连通块数目的最大值</strong> 。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2023/08/07/example12-cropped2svg.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6</span>
<span class="line">输出：2</span>
<span class="line">解释：我们删除节点 1 和 2 之间的边。这是一个合法分割，因为：</span>
<span class="line">- 节点 1 和 3 所在连通块的值为 values[1] + values[3] = 12 。</span>
<span class="line">- 节点 0 ，2 和 4 所在连通块的值为 values[0] + values[2] + values[4] = 6 。</span>
<span class="line">最多可以得到 2 个连通块的合法分割。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2023/08/07/example21svg-1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3</span>
<span class="line">输出：3</span>
<span class="line">解释：我们删除节点 0 和 2 ，以及节点 0 和 1 之间的边。这是一个合法分割，因为：</span>
<span class="line">- 节点 0 的连通块的值为 values[0] = 3 。</span>
<span class="line">- 节点 2 ，5 和 6 所在连通块的值为 values[2] + values[5] + values[6] = 9 。</span>
<span class="line">- 节点 1 ，3 和 4 的连通块的值为 values[1] + values[3] + values[4] = 6 。</span>
<span class="line">最多可以得到 3 个连通块的合法分割。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 3 * 104</code></li><li><code>edges.length == n - 1</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; n</code></li><li><code>values.length == n</code></li><li><code>0 &lt;= values[i] &lt;= 109</code></li><li><code>1 &lt;= k &lt;= 109</code></li><li><code>values</code> 之和可以被 <code>k</code> 整除。</li><li>输入保证 <code>edges</code> 是一棵无向树。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>删除若干个边，使得图的每个连通分支节点值的和可以被目标值k整除。</p><p>从任意点出发 DFS 这棵树。计算子树 x 的点权和 s，如果 s 是 k 的倍数，那么可以删除 x 到其父节点这条边。注意根节点没有父节点。</p><p>连通块的数目等于删除的边数加一。可以把根节点到其父节点这条边（虽然不存在）也算上，这样答案就是删除的边数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxKDivisibleComponents(int n, vector&lt;vector&lt;int&gt;&gt;&amp; edges, vector&lt;int&gt;&amp; values, int k) {</span>
<span class="line">    	// 定义邻接表表示无向图</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; g(n);</span>
<span class="line">        for (auto&amp; e : edges) {</span>
<span class="line">            int x = e[0], y = e[1];</span>
<span class="line">            g[x].push_back(y);</span>
<span class="line">            g[y].push_back(x);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        int ans = 0;</span>
<span class="line"></span>
<span class="line">        // 返回子树 x 的点权和</span>
<span class="line">        auto dfs = [&amp;](this auto&amp;&amp; dfs, int x, int fa) -&gt; long long {</span>
<span class="line">            long long sum = values[x];</span>
<span class="line">            for (int y : g[x]) {</span>
<span class="line">                if (y != fa) { // 避免访问父节点</span>
<span class="line">                    // 加上子树 y 的点权和，得到子树 x 的点权和</span>
<span class="line">                    sum += dfs(y, x);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            ans += sum % k == 0;</span>
<span class="line">            return sum;</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        dfs(0, -1);</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul>`,20)]))}const p=s(i,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251128.html","title":"2872. 可以被 K 整除连通块的最大数目","lang":"zh-CN","frontmatter":{"date":"2025-11-28T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["树","DFS"]},"headers":[],"git":{"updatedTime":1764379051000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f1efcaa796af7064e3cee738675cd19d4efba611","time":1764379051000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251128.md","excerpt":"\\n<p>给你一棵 <code>n</code> 个节点的无向树，节点编号为 <code>0</code> 到 <code>n - 1</code> 。给你整数 <code>n</code> 和一个长度为 <code>n - 1</code> 的二维整数数组 <code>edges</code> ，其中 <code>edges[i] = [ai, bi]</code> 表示树中节点 <code>ai</code> 和 <code>bi</code> 有一条边。</p>\\n<p>同时给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>values</code> ，其中 <code>values[i]</code> 是第 <code>i</code> 个节点的 <strong>值</strong> 。再给你一个整数 <code>k</code> 。</p>"}');export{p as comp,t as data};

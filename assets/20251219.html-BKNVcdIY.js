import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2092-找出知晓秘密的所有专家" tabindex="-1"><a class="header-anchor" href="#_2092-找出知晓秘密的所有专家"><span><a href="https://leetcode.cn/problems/find-all-people-with-secret/" target="_blank" rel="noopener noreferrer">2092. 找出知晓秘密的所有专家</a></span></a></h1><p>给你一个整数 <code>n</code> ，表示有 <code>n</code> 个专家从 <code>0</code> 到 <code>n - 1</code> 编号。另外给你一个下标从 0 开始的二维整数数组 <code>meetings</code> ，其中 <code>meetings[i] = [xi, yi, timei]</code> 表示专家 <code>xi</code> 和专家 <code>yi</code> 在时间 <code>timei</code> 要开一场会。一个专家可以同时参加 <strong>多场会议</strong> 。最后，给你一个整数 <code>firstPerson</code> 。</p><p>专家 <code>0</code> 有一个 <strong>秘密</strong> ，最初，他在时间 <code>0</code> 将这个秘密分享给了专家 <code>firstPerson</code> 。接着，这个秘密会在每次有知晓这个秘密的专家参加会议时进行传播。更正式的表达是，每次会议，如果专家 <code>xi</code> 在时间 <code>timei</code> 时知晓这个秘密，那么他将会与专家 <code>yi</code> 分享这个秘密，反之亦然。</p><p>秘密共享是 <strong>瞬时发生</strong> 的。也就是说，在同一时间，一个专家不光可以接收到秘密，还能在其他会议上与其他专家分享。</p><p>在所有会议都结束之后，返回所有知晓这个秘密的专家列表。你可以按 <strong>任何顺序</strong> 返回答案。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1</span>
<span class="line">输出：[0,1,2,3,5]</span>
<span class="line">解释：</span>
<span class="line">时间 0 ，专家 0 将秘密与专家 1 共享。</span>
<span class="line">时间 5 ，专家 1 将秘密与专家 2 共享。</span>
<span class="line">时间 8 ，专家 2 将秘密与专家 3 共享。</span>
<span class="line">时间 10 ，专家 1 将秘密与专家 5 共享。</span>
<span class="line">因此，在所有会议结束后，专家 0、1、2、3 和 5 都将知晓这个秘密。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3</span>
<span class="line">输出：[0,1,3]</span>
<span class="line">解释：</span>
<span class="line">时间 0 ，专家 0 将秘密与专家 3 共享。</span>
<span class="line">时间 2 ，专家 1 与专家 2 都不知晓这个秘密。</span>
<span class="line">时间 3 ，专家 3 将秘密与专家 0 和专家 1 共享。</span>
<span class="line">因此，在所有会议结束后，专家 0、1 和 3 都将知晓这个秘密。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1</span>
<span class="line">输出：[0,1,2,3,4]</span>
<span class="line">解释：</span>
<span class="line">时间 0 ，专家 0 将秘密与专家 1 共享。</span>
<span class="line">时间 1 ，专家 1 将秘密与专家 2 共享，专家 2 将秘密与专家 3 共享。</span>
<span class="line">注意，专家 2 可以在收到秘密的同一时间分享此秘密。</span>
<span class="line">时间 2 ，专家 3 将秘密与专家 4 共享。</span>
<span class="line">因此，在所有会议结束后，专家 0、1、2、3 和 4 都将知晓这个秘密。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 105</code></li><li><code>1 &lt;= meetings.length &lt;= 105</code></li><li><code>meetings[i].length == 3</code></li><li><code>0 &lt;= xi, yi &lt;= n - 1</code></li><li><code>xi != yi</code></li><li><code>1 &lt;= timei &lt;= 105</code></li><li><code>1 &lt;= firstPerson &lt;= n - 1</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; findAllPeople(int, vector&lt;vector&lt;int&gt;&gt;&amp; meetings, int firstPerson) {</span>
<span class="line">        // 按照 time 从小到大排序</span>
<span class="line">        ranges::sort(meetings, {}, [](auto&amp; a) { return a[2]; });</span>
<span class="line"></span>
<span class="line">        // 一开始 0 和 firstPerson 都知道秘密</span>
<span class="line">        unordered_set&lt;int&gt; have_secret = {0, firstPerson};</span>
<span class="line"></span>
<span class="line">        // 分组循环</span>
<span class="line">        int m = meetings.size();</span>
<span class="line">        for (int i = 0; i &lt; m;) {</span>
<span class="line">            // 在同一时间发生的会议，建图</span>
<span class="line">            unordered_map&lt;int, vector&lt;int&gt;&gt; g;</span>
<span class="line">            int time = meetings[i][2];</span>
<span class="line">            for (; i &lt; m &amp;&amp; meetings[i][2] == time; i++) {</span>
<span class="line">                int x = meetings[i][0], y = meetings[i][1];</span>
<span class="line">                g[x].push_back(y);</span>
<span class="line">                g[y].push_back(x);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 每个连通块只要有一个人知道秘密，那么整个连通块的人都知道秘密</span>
<span class="line">            unordered_set&lt;int&gt; vis; // 避免重复访问节点</span>
<span class="line">            auto dfs = [&amp;](this auto&amp;&amp; dfs, int x) -&gt; void {</span>
<span class="line">                vis.insert(x);</span>
<span class="line">                have_secret.insert(x);</span>
<span class="line">                for (int y : g[x]) {</span>
<span class="line">                    if (!vis.contains(y)) {</span>
<span class="line">                        dfs(y);</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            };</span>
<span class="line">            for (auto&amp; [x, _] : g) { // 遍历在 time 时间点参加会议的专家</span>
<span class="line">                // 从知道秘密的专家出发，DFS 标记其余专家</span>
<span class="line">                if (have_secret.contains(x) &amp;&amp; !vis.contains(x)) {</span>
<span class="line">                    dfs(x);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 可以按任何顺序返回答案</span>
<span class="line">        return vector(have_secret.begin(), have_secret.end());</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mlogm)</li><li>空间复杂度：O(m)</li></ul>`,17)]))}const r=s(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20251219.html","title":"2092. 找出知晓秘密的所有专家","lang":"zh-CN","frontmatter":{"date":"2025-12-19T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["DFS","BFS","并查集"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251219.md","excerpt":"\\n<p>给你一个整数 <code>n</code> ，表示有 <code>n</code> 个专家从 <code>0</code> 到 <code>n - 1</code> 编号。另外给你一个下标从 0 开始的二维整数数组 <code>meetings</code> ，其中 <code>meetings[i] = [xi, yi, timei]</code> 表示专家 <code>xi</code> 和专家 <code>yi</code> 在时间 <code>timei</code> 要开一场会。一个专家可以同时参加 <strong>多场会议</strong> 。最后，给你一个整数 <code>firstPerson</code> 。</p>"}');export{r as comp,p as data};

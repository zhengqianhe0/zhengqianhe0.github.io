import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_1733-需要教语言的最少人数" tabindex="-1"><a class="header-anchor" href="#_1733-需要教语言的最少人数"><span><a href="https://leetcode.cn/problems/minimum-number-of-people-to-teach/" target="_blank" rel="noopener noreferrer">1733. 需要教语言的最少人数</a></span></a></h1><p>在一个由 <code>m</code> 个用户组成的社交网络里，我们获取到一些用户之间的好友关系。两个用户之间可以相互沟通的条件是他们都掌握同一门语言。</p><p>给你一个整数 <code>n</code> ，数组 <code>languages</code> 和数组 <code>friendships</code> ，它们的含义如下：</p><ul><li>总共有 <code>n</code> 种语言，编号从 <code>1</code> 到 <code>n</code> 。</li><li><code>languages[i]</code> 是第 <code>i</code> 位用户掌握的语言集合。</li><li><code>friendships[i] = [ui, vi]</code> 表示 <code>ui</code> 和 <code>vi</code> 为好友关系。</li></ul><p>你可以选择 <strong>一门</strong> 语言并教会一些用户，使得所有好友之间都可以相互沟通。请返回你 <strong>最少</strong> 需要教会多少名用户。</p><p>请注意，好友关系没有传递性，也就是说如果 <code>x</code> 和 <code>y</code> 是好友，且 <code>y</code> 和 <code>z</code> 是好友， <code>x</code> 和 <code>z</code> 不一定是好友。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]</span>
<span class="line">输出：1</span>
<span class="line">解释：你可以选择教用户 1 第二门语言，也可以选择教用户 2 第一门语言。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]</span>
<span class="line">输出：2</span>
<span class="line">解释：教用户 1 和用户 3 第三门语言，需要教 2 名用户。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 500</code></li><li><code>languages.length == m</code></li><li><code>1 &lt;= m &lt;= 500</code></li><li><code>1 &lt;= languages[i].length &lt;= n</code></li><li><code>1 &lt;= languages[i][j] &lt;= n</code></li><li><code>1 &lt;= ui &lt; vi &lt;= languages.length</code></li><li><code>1 &lt;= friendships.length &lt;= 500</code></li><li>所有的好友关系 <code>(ui, vi)</code> 都是唯一的。</li><li><code>languages[i]</code> 中包含的值互不相同。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>我们的目的是找出需要教语言的最少人数，那么我们首先要找出所有不能相互沟通的好友。</p><p>其次，我们只需要找到一种语言，使不能相互沟通的好友都掌握这个语言，就能够保证这些好友之间能够相互沟通。</p><p>那么如何找到这种语言呢？我们只需要统计每一种语言被多少人掌握了，然后贪心地选择被最多人掌握的语言当作目标语言即可，这是因为没有掌握该种语言的人数最少。可以证明：选择其他语言，我们需要教的人数一定不会比选择该种语言需要教的人数更少，因此这种贪心策略是正确的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minimumTeachings(int n, vector&lt;vector&lt;int&gt;&gt;&amp; languages, vector&lt;vector&lt;int&gt;&gt;&amp; friendships) {</span>
<span class="line">        // 存储无法沟通的朋友（索引）</span>
<span class="line">        unordered_set&lt;int&gt; cncon;</span>
<span class="line">        </span>
<span class="line">        // 遍历所有朋友对，找出无法沟通的朋友</span>
<span class="line">        for(auto friendship : friendships) {</span>
<span class="line">            // 记录第一个朋友会的语言</span>
<span class="line">            unordered_map&lt;int, int&gt; mp;</span>
<span class="line">            // 标记这对朋友是否能沟通</span>
<span class="line">            bool conm = false;</span>
<span class="line">            </span>
<span class="line">            // 将第一个朋友会的所有语言存入哈希表</span>
<span class="line">            for(int lan : languages[friendship[0]-1]) {</span>
<span class="line">                mp[lan] = 1;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 检查第二个朋友是否会第一个朋友会的任何语言</span>
<span class="line">            for(int lan : languages[friendship[1]-1]) {</span>
<span class="line">                if(mp[lan]) {</span>
<span class="line">                    // 找到共同语言，标记为可以沟通</span>
<span class="line">                    conm = true;</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 如果没有共同语言，将这两个朋友加入无法沟通集合</span>
<span class="line">            if(!conm) {</span>
<span class="line">                // 注意：原代码这里有拼写错误，应该是!conm而不是!comn</span>
<span class="line">                cncon.insert(friendship[0]-1);</span>
<span class="line">                cncon.insert(friendship[1]-1);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        // 如果所有朋友都能沟通，不需要教任何人</span>
<span class="line">        if(cncon.empty()) return 0;</span>
<span class="line">        </span>
<span class="line">        // 统计每种语言在无法沟通的人中的使用次数</span>
<span class="line">        int max_cnt = 0;</span>
<span class="line">        vector&lt;int&gt; cnt(n+1, 0);</span>
<span class="line">        </span>
<span class="line">        for(auto person : cncon) {</span>
<span class="line">            for(int lan : languages[person]) {</span>
<span class="line">                cnt[lan]++;</span>
<span class="line">                // 更新最多人会的语言的计数</span>
<span class="line">                max_cnt = max(max_cnt, cnt[lan]);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        // 最少需要教的人数 = 无法沟通的总人数 - 最多人会的那种语言的人数</span>
<span class="line">        // 因为选择最多人已经会的语言来教，可以最小化需要教学的人数</span>
<span class="line">        return cncon.size() - max_cnt;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)，遍历好友对和语言数</li><li>空间复杂度：O(m+n)，需要额外的空间存储不能沟通的人，以及语言数存储cnt数组</li></ul>`,19)]))}const r=s(l,[["render",c]]),o=JSON.parse('{"path":"/leetcode/20250910.html","title":"1733. 需要教语言的最少人数","lang":"zh-CN","frontmatter":{"date":"2025-09-10T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["贪心","数组","差哈希表"]},"headers":[],"git":{"updatedTime":1757493997000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"07b490f474933dad9f146cac5c88c683b60b4388","time":1757493997000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250910.md","excerpt":"\\n<p>在一个由 <code>m</code> 个用户组成的社交网络里，我们获取到一些用户之间的好友关系。两个用户之间可以相互沟通的条件是他们都掌握同一门语言。</p>\\n<p>给你一个整数 <code>n</code> ，数组 <code>languages</code> 和数组 <code>friendships</code> ，它们的含义如下：</p>\\n<ul>\\n<li>总共有 <code>n</code> 种语言，编号从 <code>1</code> 到 <code>n</code> 。</li>\\n<li><code>languages[i]</code> 是第 <code>i</code> 位用户掌握的语言集合。</li>\\n<li><code>friendships[i] = [ui, vi]</code> 表示 <code>ui</code> 和 <code>vi</code> 为好友关系。</li>\\n</ul>"}');export{r as comp,o as data};

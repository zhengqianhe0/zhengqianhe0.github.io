import{_ as e,c as s,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function t(c,n){return l(),s("div",null,n[0]||(n[0]=[i(`<h1 id="_1912-设计电影租借系统" tabindex="-1"><a class="header-anchor" href="#_1912-设计电影租借系统"><span><a href="https://leetcode.cn/problems/design-movie-rental-system/" target="_blank" rel="noopener noreferrer">1912. 设计电影租借系统</a></span></a></h1><p>你有一个电影租借公司和 <code>n</code> 个电影商店。你想要实现一个电影租借系统，它支持查询、预订和返还电影的操作。同时系统还能生成一份当前被借出电影的报告。</p><p>所有电影用二维整数数组 <code>entries</code> 表示，其中 <code>entries[i] = [shopi, moviei, pricei]</code> 表示商店 <code>shopi</code> 有一份电影 <code>moviei</code> 的拷贝，租借价格为 <code>pricei</code> 。每个商店有 <strong>至多一份</strong> 编号为 <code>moviei</code> 的电影拷贝。</p><p>系统需要支持以下操作：</p><ul><li>**Search：**找到拥有指定电影且 <strong>未借出</strong> 的商店中 <strong>最便宜的 5 个</strong> 。商店需要按照 <strong>价格</strong> 升序排序，如果价格相同，则 <code>shopi</code> <strong>较小</strong> 的商店排在前面。如果查询结果少于 5 个商店，则将它们全部返回。如果查询结果没有任何商店，则返回空列表。</li><li>**Rent：**从指定商店借出指定电影，题目保证指定电影在指定商店 <strong>未借出</strong> 。</li><li>**Drop：**在指定商店返还 <strong>之前已借出</strong> 的指定电影。</li><li>**Report：**返回 <strong>最便宜的 5 部已借出电影</strong> （可能有重复的电影 ID），将结果用二维列表 <code>res</code> 返回，其中 <code>res[j] = [shopj, moviej]</code> 表示第 <code>j</code> 便宜的已借出电影是从商店 <code>shopj</code> 借出的电影 <code>moviej</code> 。<code>res</code> 中的电影需要按 <strong>价格</strong> 升序排序；如果价格相同，则 <code>shopj</code> <strong>较小</strong> 的排在前面；如果仍然相同，则 <code>moviej</code> <strong>较小</strong> 的排在前面。如果当前借出的电影小于 5 部，则将它们全部返回。如果当前没有借出电影，则返回一个空的列表。</li></ul><p>请你实现 <code>MovieRentingSystem</code> 类：</p><ul><li><code>MovieRentingSystem(int n, int[][] entries)</code> 将 <code>MovieRentingSystem</code> 对象用 <code>n</code> 个商店和 <code>entries</code> 表示的电影列表初始化。</li><li><code>List&lt;Integer&gt; search(int movie)</code> 如上所述，返回 <strong>未借出</strong> 指定 <code>movie</code> 的商店列表。</li><li><code>void rent(int shop, int movie)</code> 从指定商店 <code>shop</code> 借出指定电影 <code>movie</code> 。</li><li><code>void drop(int shop, int movie)</code> 在指定商店 <code>shop</code> 返还之前借出的电影 <code>movie</code> 。</li><li><code>List&lt;List&lt;Integer&gt;&gt; report()</code> 如上所述，返回最便宜的 <strong>已借出</strong> 电影列表。</li></ul><p>**注意：**测试数据保证 <code>rent</code> 操作中指定商店拥有 <strong>未借出</strong> 的指定电影，且 <code>drop</code> 操作指定的商店 <strong>之前已借出</strong> 指定电影。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：</span>
<span class="line">[&quot;MovieRentingSystem&quot;, &quot;search&quot;, &quot;rent&quot;, &quot;rent&quot;, &quot;report&quot;, &quot;drop&quot;, &quot;search&quot;]</span>
<span class="line">[[3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]], [1], [0, 1], [1, 2], [], [1, 2], [2]]</span>
<span class="line">输出：</span>
<span class="line">[null, [1, 0, 2], null, null, [[0, 1], [1, 2]], null, [0, 1]]</span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">MovieRentingSystem movieRentingSystem = new MovieRentingSystem(3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]);</span>
<span class="line">movieRentingSystem.search(1);  // 返回 [1, 0, 2] ，商店 1，0 和 2 有未借出的 ID 为 1 的电影。商店 1 最便宜，商店 0 和 2 价格相同，所以按商店编号排序。</span>
<span class="line">movieRentingSystem.rent(0, 1); // 从商店 0 借出电影 1 。现在商店 0 未借出电影编号为 [2,3] 。</span>
<span class="line">movieRentingSystem.rent(1, 2); // 从商店 1 借出电影 2 。现在商店 1 未借出的电影编号为 [1] 。</span>
<span class="line">movieRentingSystem.report();   // 返回 [[0, 1], [1, 2]] 。商店 0 借出的电影 1 最便宜，然后是商店 1 借出的电影 2 。</span>
<span class="line">movieRentingSystem.drop(1, 2); // 在商店 1 返还电影 2 。现在商店 1 未借出的电影编号为 [1,2] 。</span>
<span class="line">movieRentingSystem.search(2);  // 返回 [0, 1] 。商店 0 和 1 有未借出的 ID 为 2 的电影。商店 0 最便宜，然后是商店 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 3 * 105</code></li><li><code>1 &lt;= entries.length &lt;= 105</code></li><li><code>0 &lt;= shopi &lt; n</code></li><li><code>1 &lt;= moviei, pricei &lt;= 104</code></li><li>每个商店 <strong>至多</strong> 有一份电影 <code>moviei</code> 的拷贝。</li><li><code>search</code>，<code>rent</code>，<code>drop</code> 和 <code>report</code> 的调用 <strong>总共</strong> 不超过 <code>105</code> 次。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class MovieRentingSystem {</span>
<span class="line">private:</span>
<span class="line">    // 需要自行实现 pair&lt;int, int&gt; 的哈希函数</span>
<span class="line">    static constexpr auto pairHash = [fn = hash&lt;int&gt;()](const pair&lt;int, int&gt;&amp; o) {return (fn(o.first) &lt;&lt; 16) ^ fn(o.second);};</span>
<span class="line">    unordered_map&lt;pair&lt;int, int&gt;, int, decltype(pairHash)&gt; t_price{0, pairHash};</span>
<span class="line"></span>
<span class="line">    unordered_map&lt;int, set&lt;pair&lt;int, int&gt;&gt;&gt; t_valid;</span>
<span class="line"></span>
<span class="line">    set&lt;tuple&lt;int, int, int&gt;&gt; t_rent;</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    MovieRentingSystem(int n, vector&lt;vector&lt;int&gt;&gt;&amp; entries) {</span>
<span class="line">        for (const auto&amp; entry: entries) {</span>
<span class="line">            t_price[{entry[0], entry[1]}] = entry[2];</span>
<span class="line">            t_valid[entry[1]].emplace(entry[2], entry[0]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    vector&lt;int&gt; search(int movie) {</span>
<span class="line">        if (!t_valid.count(movie)) {</span>
<span class="line">            return {};</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        vector&lt;int&gt; ret;</span>
<span class="line">        auto it = t_valid[movie].begin();</span>
<span class="line">        for (int i = 0; i &lt; 5 &amp;&amp; it != t_valid[movie].end(); ++i, ++it) {</span>
<span class="line">            ret.push_back(it-&gt;second);</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    void rent(int shop, int movie) {</span>
<span class="line">        int price = t_price[{shop, movie}];</span>
<span class="line">        t_valid[movie].erase({price, shop});</span>
<span class="line">        t_rent.emplace(price, shop, movie);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    void drop(int shop, int movie) {</span>
<span class="line">        int price = t_price[{shop, movie}];</span>
<span class="line">        t_valid[movie].emplace(price, shop);</span>
<span class="line">        t_rent.erase({price, shop, movie});</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    vector&lt;vector&lt;int&gt;&gt; report() {</span>
<span class="line">        vector&lt;vector&lt;int&gt;&gt; ret;</span>
<span class="line">        auto it = t_rent.begin();</span>
<span class="line">        for (int i = 0; i &lt; 5 &amp;&amp; it != t_rent.end(); ++i, ++it) {</span>
<span class="line">            ret.emplace_back(initializer_list&lt;int&gt;{get&lt;1&gt;(*it), get&lt;2&gt;(*it)});</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li><p>时间复杂度：</p><ul><li><p>MovieRentingSystem(n, entries) 操作：O(nlogn)。</p></li><li><p>search(movie) 操作：O(logn)。</p></li><li><p>rent(shop, movie) 操作：O(logn)。</p></li><li><p>drop(shop, movie) 操作：O(logn)。</p></li><li><p>report() 操作：O(logn)。</p></li></ul></li><li><p>空间复杂度：O(n)。</p></li></ul>`,16)]))}const d=e(a,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20250921.html","title":"1912. 设计电影租借系统","lang":"zh-CN","frontmatter":{"date":"2025-09-21T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["设计","哈希表","数组","优先队列"]},"headers":[],"git":{"updatedTime":1758526550000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"b35902d32557271dc568f75344f60260ac141399","time":1758526550000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250921.md","excerpt":"\\n<p>你有一个电影租借公司和 <code>n</code> 个电影商店。你想要实现一个电影租借系统，它支持查询、预订和返还电影的操作。同时系统还能生成一份当前被借出电影的报告。</p>\\n<p>所有电影用二维整数数组 <code>entries</code> 表示，其中 <code>entries[i] = [shopi, moviei, pricei]</code> 表示商店 <code>shopi</code> 有一份电影 <code>moviei</code> 的拷贝，租借价格为 <code>pricei</code> 。每个商店有 <strong>至多一份</strong> 编号为 <code>moviei</code> 的电影拷贝。</p>"}');export{d as comp,r as data};

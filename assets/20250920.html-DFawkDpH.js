import{_ as n,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const t={};function l(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_3508-设计路由器" tabindex="-1"><a class="header-anchor" href="#_3508-设计路由器"><span><a href="https://leetcode.cn/problems/implement-router/" target="_blank" rel="noopener noreferrer">3508. 设计路由器</a></span></a></h1><p>请你设计一个数据结构来高效管理网络路由器中的数据包。每个数据包包含以下属性：</p><ul><li><code>source</code>：生成该数据包的机器的唯一标识符。</li><li><code>destination</code>：目标机器的唯一标识符。</li><li><code>timestamp</code>：该数据包到达路由器的时间戳。</li></ul><p>实现 <code>Router</code> 类：</p><p><code>Router(int memoryLimit)</code>：初始化路由器对象，并设置固定的内存限制。</p><ul><li><code>memoryLimit</code> 是路由器在任意时间点可以存储的 <strong>最大</strong> 数据包数量。</li><li>如果添加一个新数据包会超过这个限制，则必须移除 <strong>最旧的</strong> 数据包以腾出空间。</li></ul><p><code>bool addPacket(int source, int destination, int timestamp)</code>：将具有给定属性的数据包添加到路由器。</p><ul><li>如果路由器中已经存在一个具有相同 <code>source</code>、<code>destination</code> 和 <code>timestamp</code> 的数据包，则视为重复数据包。</li><li>如果数据包成功添加（即不是重复数据包），返回 <code>true</code>；否则返回 <code>false</code>。</li></ul><p><code>int[] forwardPacket()</code>：以 FIFO（先进先出）顺序转发下一个数据包。</p><ul><li>从存储中移除该数据包。</li><li>以数组 <code>[source, destination, timestamp]</code> 的形式返回该数据包。</li><li>如果没有数据包可以转发，则返回空数组。</li></ul><p><code>int getCount(int destination, int startTime, int endTime)</code>：</p><ul><li>返回当前存储在路由器中（即尚未转发）的，且目标地址为指定 <code>destination</code> 且时间戳在范围 <code>[startTime, endTime]</code>（包括两端）内的数据包数量。</li></ul><p><strong>注意</strong>：对于 <code>addPacket</code> 的查询会按照 <code>timestamp</code> 的递增顺序进行。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> [&quot;Router&quot;, &quot;addPacket&quot;, &quot;addPacket&quot;, &quot;addPacket&quot;, &quot;addPacket&quot;, &quot;addPacket&quot;, &quot;forwardPacket&quot;, &quot;addPacket&quot;, &quot;getCount&quot;] [[3], [1, 4, 90], [2, 5, 90], [1, 4, 90], [3, 5, 95], [4, 5, 105], [], [5, 2, 110], [5, 100, 110]]</p><p><strong>输出：</strong> [null, true, true, false, true, true, [2, 5, 90], true, 1]</p><p><strong>解释：</strong></p><p><code>Router router = new Router(3);</code> // 初始化路由器，内存限制为 3。 <code>router.addPacket(1, 4, 90);</code> // 数据包被添加，返回 True。 <code>router.addPacket(2, 5, 90);</code> // 数据包被添加，返回 True。 <code>router.addPacket(1, 4, 90);</code> // 这是一个重复数据包，返回 False。 <code>router.addPacket(3, 5, 95);</code> // 数据包被添加，返回 True。 <code>router.addPacket(4, 5, 105);</code> // 数据包被添加，<code>[1, 4, 90]</code> 被移除，因为数据包数量超过限制，返回 True。 <code>router.forwardPacket();</code> // 转发数据包 <code>[2, 5, 90]</code> 并将其从路由器中移除。 <code>router.addPacket(5, 2, 110);</code> // 数据包被添加，返回 True。 <code>router.getCount(5, 100, 110);</code> // 唯一目标地址为 5 且时间在 <code>[100, 110]</code> 范围内的数据包是 <code>[4, 5, 105]</code>，返回 1。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> [&quot;Router&quot;, &quot;addPacket&quot;, &quot;forwardPacket&quot;, &quot;forwardPacket&quot;] [[2], [7, 4, 90], [], []]</p><p><strong>输出：</strong> [null, true, [7, 4, 90], []]</p><p><strong>解释：</strong></p><p><code>Router router = new Router(2);</code> // 初始化路由器，内存限制为 2。 <code>router.addPacket(7, 4, 90);</code> // 返回 True。 <code>router.forwardPacket();</code> // 返回 <code>[7, 4, 90]</code>。 <code>router.forwardPacket();</code> // 没有数据包可以转发，返回 <code>[]</code>。</p><p><strong>提示：</strong></p><ul><li><code>2 &lt;= memoryLimit &lt;= 105</code></li><li><code>1 &lt;= source, destination &lt;= 2 * 105</code></li><li><code>1 &lt;= timestamp &lt;= 109</code></li><li><code>1 &lt;= startTime &lt;= endTime &lt;= 109</code></li><li><code>addPacket</code>、<code>forwardPacket</code> 和 <code>getCount</code> 方法的总调用次数最多为 <code>105</code>。</li><li>对于 <code>addPacket</code> 的查询，<code>timestamp</code> 按递增顺序给出。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>题目要求 FIFO（先进先出），这可以用队列实现。</p><p>为了判重，可以用哈希表记录数据包。</p><p>对于 getCount，需要按照 destination 分组，所以要用哈希表套队列。</p><p>具体来说，创建三个数据结构：</p><p>packetQ：存储数据包的队列。 packetSet：存储所有未转发的数据包，方便判重。 destToTimestamps：哈希表套队列，哈希表的 key 是 destination，value 是对应的由 timestamp 组成的队列。 addPacket 和 forwardPacket 按题目要求实现，具体见代码。</p><p>getCount 可以用二分查找，见 34. 在排序数组中查找元素的第一个和最后一个位置。</p><p>为了方便二分，可以用列表（数组）模拟队列，额外用一个变量 head 表示队首的下标。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">struct TupleHash {</span>
<span class="line">    template&lt;typename T&gt;</span>
<span class="line">    static void hash_combine(size_t&amp; seed, const T&amp; v) {</span>
<span class="line">        // 参考 boost::hash_combine</span>
<span class="line">        seed ^= hash&lt;T&gt;{}(v) + 0x9e3779b9 + (seed &lt;&lt; 6) + (seed &gt;&gt; 2);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    template&lt;typename Tuple, size_t Index = 0&gt;</span>
<span class="line">    static void hash_tuple(size_t&amp; seed, const Tuple&amp; t) {</span>
<span class="line">        if constexpr (Index &lt; tuple_size_v&lt;Tuple&gt;) {</span>
<span class="line">            hash_combine(seed, get&lt;Index&gt;(t));</span>
<span class="line">            hash_tuple&lt;Tuple, Index + 1&gt;(seed, t);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    template&lt;typename... Ts&gt;</span>
<span class="line">    size_t operator()(const tuple&lt;Ts...&gt;&amp; t) const {</span>
<span class="line">        size_t seed = 0;</span>
<span class="line">        hash_tuple(seed, t);</span>
<span class="line">        return seed;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class Router {</span>
<span class="line">    int memory_limit;</span>
<span class="line">    queue&lt;tuple&lt;int, int, int&gt;&gt; packet_q; // packet 队列</span>
<span class="line">    // 注：如果不想手写 TupleHash，可以用 set</span>
<span class="line">    unordered_set&lt;tuple&lt;int, int, int&gt;, TupleHash&gt; packet_set; // packet 集合</span>
<span class="line">    unordered_map&lt;int, pair&lt;vector&lt;int&gt;, int&gt;&gt; dest_to_timestamps; // destination -&gt; ([timestamp], head)</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    Router(int memoryLimit) {</span>
<span class="line">        memory_limit = memoryLimit;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    bool addPacket(int source, int destination, int timestamp) {</span>
<span class="line">        auto packet = tuple(source, destination, timestamp);</span>
<span class="line">        if (!packet_set.insert(packet).second) { // packet 在 packet_set 中</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        if (packet_q.size() == memory_limit) { // 太多了</span>
<span class="line">            forwardPacket();</span>
<span class="line">        }</span>
<span class="line">        packet_q.push(packet); // 入队</span>
<span class="line">        dest_to_timestamps[destination].first.push_back(timestamp);</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    vector&lt;int&gt; forwardPacket() {</span>
<span class="line">        if (packet_q.empty()) {</span>
<span class="line">            return {};</span>
<span class="line">        }</span>
<span class="line">        auto packet = packet_q.front(); // 出队</span>
<span class="line">        packet_q.pop();</span>
<span class="line">        packet_set.erase(packet);</span>
<span class="line">        auto [source, destination, timestamp] = packet;</span>
<span class="line">        dest_to_timestamps[destination].second++; // 队首下标加一，模拟出队</span>
<span class="line">        return {source, destination, timestamp};</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    int getCount(int destination, int startTime, int endTime) {</span>
<span class="line">        auto&amp; [timestamps, head] = dest_to_timestamps[destination];</span>
<span class="line">        auto left = ranges::lower_bound(timestamps.begin() + head, timestamps.end(), startTime);</span>
<span class="line">        auto right = ranges::upper_bound(timestamps.begin() + head, timestamps.end(), endTime);</span>
<span class="line">        return right - left;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li><p>时间复杂度：getCount 是 O(logmin(q,memoryLimit))，其中 q 是 addPacket 的调用次数。其余操作为 O(1)。</p></li><li><p>空间复杂度：O(min(q,memoryLimit))。</p></li></ul>`,36)]))}const o=n(t,[["render",l]]),p=JSON.parse('{"path":"/leetcode/20250920.html","title":"3508. 设计路由器","lang":"zh-CN","frontmatter":{"date":"2025-09-20T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["设计","哈希表","数组","优先队列"]},"headers":[],"git":{"updatedTime":1758526550000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"b35902d32557271dc568f75344f60260ac141399","time":1758526550000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250920.md","excerpt":"\\n<p>请你设计一个数据结构来高效管理网络路由器中的数据包。每个数据包包含以下属性：</p>\\n<ul>\\n<li><code>source</code>：生成该数据包的机器的唯一标识符。</li>\\n<li><code>destination</code>：目标机器的唯一标识符。</li>\\n<li><code>timestamp</code>：该数据包到达路由器的时间戳。</li>\\n</ul>\\n<p>实现 <code>Router</code> 类：</p>\\n<p><code>Router(int memoryLimit)</code>：初始化路由器对象，并设置固定的内存限制。</p>\\n<ul>\\n<li><code>memoryLimit</code> 是路由器在任意时间点可以存储的 <strong>最大</strong> 数据包数量。</li>\\n<li>如果添加一个新数据包会超过这个限制，则必须移除 <strong>最旧的</strong> 数据包以腾出空间。</li>\\n</ul>"}');export{o as comp,p as data};

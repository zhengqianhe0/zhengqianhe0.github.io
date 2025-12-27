import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_3408-设计任务管理器" tabindex="-1"><a class="header-anchor" href="#_3408-设计任务管理器"><span><a href="https://leetcode.cn/problems/design-task-manager/" target="_blank" rel="noopener noreferrer">3408. 设计任务管理器</a></span></a></h1><p>一个任务管理器系统可以让用户管理他们的任务，每个任务有一个优先级。这个系统需要高效地处理添加、修改、执行和删除任务的操作。</p><p>请你设计一个 <code>TaskManager</code> 类：</p><ul><li><code>TaskManager(vector&lt;vector&lt;int&gt;&gt;&amp; tasks)</code> 初始化任务管理器，初始化的数组格式为 <code>[userId, taskId, priority]</code> ，表示给 <code>userId</code> 添加一个优先级为 <code>priority</code> 的任务 <code>taskId</code> 。</li><li><code>void add(int userId, int taskId, int priority)</code> 表示给用户 <code>userId</code> 添加一个优先级为 <code>priority</code> 的任务 <code>taskId</code> ，输入 <strong>保证</strong> <code>taskId</code> 不在系统中。</li><li><code>void edit(int taskId, int newPriority)</code> 更新已经存在的任务 <code>taskId</code> 的优先级为 <code>newPriority</code> 。输入 <strong>保证</strong> <code>taskId</code> 存在于系统中。</li><li><code>void rmv(int taskId)</code> 从系统中删除任务 <code>taskId</code> 。输入 <strong>保证</strong> <code>taskId</code> 存在于系统中。</li><li><code>int execTop()</code> 执行所有用户的任务中优先级 <strong>最高</strong> 的任务，如果有多个任务优先级相同且都为 <strong>最高</strong> ，执行 <code>taskId</code> 最大的一个任务。执行完任务后，<code>taskId</code> 从系统中 <strong>删除</strong> 。同时请你返回这个任务所属的用户 <code>userId</code> 。如果不存在任何任务，返回 -1 。</li></ul><p><strong>注意</strong> ，一个用户可能被安排多个任务。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> [&quot;TaskManager&quot;, &quot;add&quot;, &quot;edit&quot;, &quot;execTop&quot;, &quot;rmv&quot;, &quot;add&quot;, &quot;execTop&quot;] [[[[1, 101, 10], [2, 102, 20], [3, 103, 15]]], [4, 104, 5], [102, 8], [], [101], [5, 105, 15], []]</p><p><strong>输出：</strong> [null, null, null, 3, null, null, 5]</p><p><strong>解释：</strong></p><p>TaskManager taskManager = new TaskManager([[1, 101, 10], [2, 102, 20], [3, 103, 15]]); // 分别给用户 1 ，2 和 3 初始化一个任务。 taskManager.add(4, 104, 5); // 给用户 4 添加优先级为 5 的任务 104 。 taskManager.edit(102, 8); // 更新任务 102 的优先级为 8 。 taskManager.execTop(); // 返回 3 。执行用户 3 的任务 103 。 taskManager.rmv(101); // 将系统中的任务 101 删除。 taskManager.add(5, 105, 15); // 给用户 5 添加优先级为 15 的任务 105 。 taskManager.execTop(); // 返回 5 。执行用户 5 的任务 105 。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= tasks.length &lt;= 105</code></li><li><code>0 &lt;= userId &lt;= 105</code></li><li><code>0 &lt;= taskId &lt;= 105</code></li><li><code>0 &lt;= priority &lt;= 109</code></li><li><code>0 &lt;= newPriority &lt;= 109</code></li><li><code>add</code> ，<code>edit</code> ，<code>rmv</code> 和 <code>execTop</code> 的总操作次数 <strong>加起来</strong> 不超过 <code>2 * 105</code> 次。</li><li>输入保证 <code>taskId</code> 是合法的。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>当任务被修改或删除时，不会直接操作堆（因为堆不支持高效的中间元素修改或删除）。修改时元素重新入堆实现了这一点。 而是通过哈希表记录任务的最新状态，堆中可能存在过时的任务信息。 在执行任务时（execTop方法），通过哈希表验证任务的有效性，过滤掉过时的任务。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class TaskManager {</span>
<span class="line">private:</span>
<span class="line">    // 存储任务的详细信息：key为taskId，value为{priority(优先级), userId(用户ID)}</span>
<span class="line">    // 用于快速查找、更新和删除任务信息</span>
<span class="line">    unordered_map&lt;int, pair&lt;int, int&gt;&gt; taskInfo;</span>
<span class="line">    </span>
<span class="line">    // 最大优先级队列：存储{priority, taskId}，用于获取当前优先级最高的任务</span>
<span class="line">    // 优先级高的任务会被优先执行（数值越大优先级越高）</span>
<span class="line">    priority_queue&lt;pair&lt;int, int&gt;&gt; heap;</span>
<span class="line">    </span>
<span class="line">public:</span>
<span class="line">    // 构造函数：初始化任务管理器</span>
<span class="line">    // 参数tasks是一个二维向量，每个元素格式为[userId, taskId, priority]</span>
<span class="line">    TaskManager(vector&lt;vector&lt;int&gt;&gt; tasks) {</span>
<span class="line">        // 遍历所有初始任务，将其添加到数据结构中</span>
<span class="line">        for (auto&amp; task : tasks) {</span>
<span class="line">            int userId = task[0], taskId = task[1], priority = task[2];</span>
<span class="line">            // 存储任务信息到哈希表</span>
<span class="line">            taskInfo[taskId] = {priority, userId};</span>
<span class="line">            // 将任务添加到优先级队列</span>
<span class="line">            heap.emplace(priority, taskId);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 添加新任务</span>
<span class="line">    // 参数：userId(用户ID), taskId(任务ID), priority(优先级)</span>
<span class="line">    void add(int userId, int taskId, int priority) {</span>
<span class="line">        // 存储任务信息到哈希表</span>
<span class="line">        taskInfo[taskId] = {priority, userId};</span>
<span class="line">        // 将任务添加到优先级队列</span>
<span class="line">        heap.emplace(priority, taskId);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 修改任务的优先级</span>
<span class="line">    // 参数：taskId(任务ID), newPriority(新的优先级)</span>
<span class="line">    void edit(int taskId, int newPriority) {</span>
<span class="line">        // 检查任务是否存在</span>
<span class="line">        if (taskInfo.find(taskId) != taskInfo.end()) {</span>
<span class="line">            // 更新哈希表中任务的优先级</span>
<span class="line">            taskInfo[taskId].first = newPriority;</span>
<span class="line">            // 将新的优先级信息加入队列（旧的记录会在执行时被过滤）</span>
<span class="line">            heap.emplace(newPriority, taskId);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 删除指定任务</span>
<span class="line">    // 参数：taskId(任务ID)</span>
<span class="line">    void rmv(int taskId) {</span>
<span class="line">        // 从哈希表中删除任务信息</span>
<span class="line">        taskInfo.erase(taskId);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 执行当前优先级最高的任务，并返回该任务所属的用户ID</span>
<span class="line">    // 返回值：任务所属的userId，若没有可执行任务则返回-1</span>
<span class="line">    int execTop() {</span>
<span class="line">        // 循环直到找到有效的任务或队列为空</span>
<span class="line">        while (!heap.empty()) {</span>
<span class="line">            // 获取队列顶部的任务（当前优先级最高）</span>
<span class="line">            auto [priority, taskId] = heap.top();</span>
<span class="line">            heap.pop();</span>
<span class="line">            </span>
<span class="line">            // 检查任务是否有效：</span>
<span class="line">            // 1. 任务存在于哈希表中（未被删除）</span>
<span class="line">            // 2. 队列中的优先级与哈希表中的最新优先级一致（未被修改过）</span>
<span class="line">            if (taskInfo.find(taskId) != taskInfo.end() &amp;&amp; </span>
<span class="line">                taskInfo[taskId].first == priority) {</span>
<span class="line">                // 获取任务所属用户ID</span>
<span class="line">                int userId = taskInfo[taskId].second;</span>
<span class="line">                // 从哈希表中删除已执行的任务</span>
<span class="line">                taskInfo.erase(taskId);</span>
<span class="line">                // 返回用户ID</span>
<span class="line">                return userId;</span>
<span class="line">            }</span>
<span class="line">            // 如果任务无效（已删除或优先级已修改），则继续检查下一个任务</span>
<span class="line">        }</span>
<span class="line">        // 没有可执行的任务，返回-1</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li><p>时间复杂度：O()</p></li><li><p>令 n 为初始化时 tasks 的长度，m 为后续操作的次数。初始化消耗 O(n×logn)，add 消耗 O(log(n+m))，edit 消耗 O(log(n+m))，rmv 消耗 O(1))，execTop 均摊消耗 O(log(n+m))。</p></li><li><p>空间复杂度：O(m+n)</p></li></ul>`,17)]))}const r=n(l,[["render",d]]),o=JSON.parse('{"path":"/leetcode/20250918.html","title":"3408. 设计任务管理器","lang":"zh-CN","frontmatter":{"date":"2025-09-18T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["设计","哈希表"]},"headers":[],"git":{"updatedTime":1758160678000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"085fd5845c8f59930de2c30b46c9753c5f753270","time":1758160678000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250918.md","excerpt":"\\n<p>一个任务管理器系统可以让用户管理他们的任务，每个任务有一个优先级。这个系统需要高效地处理添加、修改、执行和删除任务的操作。</p>\\n<p>请你设计一个 <code>TaskManager</code> 类：</p>\\n<ul>\\n<li><code>TaskManager(vector&lt;vector&lt;int&gt;&gt;&amp; tasks)</code> 初始化任务管理器，初始化的数组格式为 <code>[userId, taskId, priority]</code> ，表示给 <code>userId</code> 添加一个优先级为 <code>priority</code> 的任务 <code>taskId</code> 。</li>\\n<li><code>void add(int userId, int taskId, int priority)</code> 表示给用户 <code>userId</code> 添加一个优先级为 <code>priority</code> 的任务 <code>taskId</code> ，输入 <strong>保证</strong> <code>taskId</code> 不在系统中。</li>\\n<li><code>void edit(int taskId, int newPriority)</code> 更新已经存在的任务 <code>taskId</code> 的优先级为 <code>newPriority</code> 。输入 <strong>保证</strong> <code>taskId</code> 存在于系统中。</li>\\n<li><code>void rmv(int taskId)</code> 从系统中删除任务 <code>taskId</code> 。输入 <strong>保证</strong> <code>taskId</code> 存在于系统中。</li>\\n<li><code>int execTop()</code> 执行所有用户的任务中优先级 <strong>最高</strong> 的任务，如果有多个任务优先级相同且都为 <strong>最高</strong> ，执行 <code>taskId</code> 最大的一个任务。执行完任务后，<code>taskId</code> 从系统中 <strong>删除</strong> 。同时请你返回这个任务所属的用户 <code>userId</code> 。如果不存在任何任务，返回 -1 。</li>\\n</ul>"}');export{r as comp,o as data};

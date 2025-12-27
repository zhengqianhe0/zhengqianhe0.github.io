import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2349-设计数字容器系统" tabindex="-1"><a class="header-anchor" href="#_2349-设计数字容器系统"><span><a href="https://leetcode.cn/problems/design-a-number-container-system/" target="_blank" rel="noopener noreferrer">2349. 设计数字容器系统</a></span></a></h1><p>设计一个数字容器系统，可以实现以下功能：</p><ul><li>在系统中给定下标处 <strong>插入</strong> 或者 <strong>替换</strong> 一个数字。</li><li><strong>返回</strong> 系统中给定数字的最小下标。</li></ul><p>请你实现一个 <code>NumberContainers</code> 类：</p><ul><li><code>NumberContainers()</code> 初始化数字容器系统。</li><li><code>void change(int index, int number)</code> 在下标 <code>index</code> 处填入 <code>number</code> 。如果该下标 <code>index</code> 处已经有数字了，那么用 <code>number</code> 替换该数字。</li><li><code>int find(int number)</code> 返回给定数字 <code>number</code> 在系统中的最小下标。如果系统中没有 <code>number</code> ，那么返回 <code>-1</code> 。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：</span>
<span class="line">[&quot;NumberContainers&quot;, &quot;find&quot;, &quot;change&quot;, &quot;change&quot;, &quot;change&quot;, &quot;change&quot;, &quot;find&quot;, &quot;change&quot;, &quot;find&quot;]</span>
<span class="line">[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]</span>
<span class="line">输出：</span>
<span class="line">[null, -1, null, null, null, null, 1, null, 2]</span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">NumberContainers nc = new NumberContainers();</span>
<span class="line">nc.find(10); // 没有数字 10 ，所以返回 -1 。</span>
<span class="line">nc.change(2, 10); // 容器中下标为 2 处填入数字 10 。</span>
<span class="line">nc.change(1, 10); // 容器中下标为 1 处填入数字 10 。</span>
<span class="line">nc.change(3, 10); // 容器中下标为 3 处填入数字 10 。</span>
<span class="line">nc.change(5, 10); // 容器中下标为 5 处填入数字 10 。</span>
<span class="line">nc.find(10); // 数字 10 所在的下标为 1 ，2 ，3 和 5 。因为最小下标为 1 ，所以返回 1 。</span>
<span class="line">nc.change(1, 20); // 容器中下标为 1 处填入数字 20 。注意，下标 1 处之前为 10 ，现在被替换为 20 。</span>
<span class="line">nc.find(10); // 数字 10 所在下标为 2 ，3 和 5 。最小下标为 2 ，所以返回 2 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= index, number &lt;= 109</code></li><li>调用 <code>change</code> 和 <code>find</code> 的 <strong>总次数</strong> 不超过 <code>105</code> 次。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>用两个哈希，分别存储下标到数字的映射，和数字到下标结合的映射。</p><p>C++语法：map的find；set的erase，insert，empty；迭代器是对于stl容器内数据的引用，可用*解引用来取值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class NumberContainers {</span>
<span class="line">    // 从索引映射到当前存储的数字</span>
<span class="line">    unordered_map&lt;int,int&gt; index_to_number;</span>
<span class="line"></span>
<span class="line">    // 从数字映射到所有存储该数字的索引集合（有序，用set保证最小索引在前）</span>
<span class="line">    unordered_map&lt;int,set&lt;int&gt;&gt; number_to_indices;</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    // 构造函数，无需初始化，因为map和set默认为空</span>
<span class="line">    NumberContainers() {</span>
<span class="line">        // 什么也不做，成员变量会自动初始化为空</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 将索引 index 处的数字改为 number</span>
<span class="line">    void change(int index, int number) {</span>
<span class="line">        // 查找 index 是否已有旧数字</span>
<span class="line">        auto it = index_to_number.find(index);</span>
<span class="line"></span>
<span class="line">        // 如果 index 之前有绑定数字（即存在）</span>
<span class="line">        if (it != index_to_number.end()) {</span>
<span class="line">            int old_number = it-&gt;second;  // 取出旧数字</span>
<span class="line"></span>
<span class="line">            // 从旧数字对应的索引集合中删除这个 index</span>
<span class="line">            number_to_indices[old_number].erase(index);</span>
<span class="line"></span>
<span class="line">            // 注意：即使集合变空，我们也不删除 map 中的键，因为后续可能再插入</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 更新 index -&gt; number 的映射</span>
<span class="line">        index_to_number[index] = number;</span>
<span class="line"></span>
<span class="line">        // 将 index 插入到新数字对应的索引集合中</span>
<span class="line">        number_to_indices[number].insert(index);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 查找数字 number 对应的最小索引，若不存在则返回 -1</span>
<span class="line">    int find(int number) {</span>
<span class="line">        // 在 number_to_indices 中查找 number 对应的索引集合</span>
<span class="line">        auto it = number_to_indices.find(number);</span>
<span class="line"></span>
<span class="line">        // 如果没找到这个数字，或者该数字对应的索引集合为空</span>
<span class="line">        if (it == number_to_indices.end() || it-&gt;second.empty()) {</span>
<span class="line">            return -1;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 返回集合中最小的索引（set 是有序的，begin() 是最小值）</span>
<span class="line">        return *(it-&gt;second.begin());</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(logq) ，q为change调用的次数</li><li>空间复杂度：O(q)</li></ul>`,15)]))}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20250917.html","title":"2349. 设计数字容器系统","lang":"zh-CN","frontmatter":{"date":"2025-09-17T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["设计","哈希表"]},"headers":[],"git":{"updatedTime":1758083519000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"2e31e1b019d4c77e274ab6f47e190a6b93bdc53f","time":1758083519000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250917.md","excerpt":"\\n<p>设计一个数字容器系统，可以实现以下功能：</p>\\n<ul>\\n<li>在系统中给定下标处 <strong>插入</strong> 或者 <strong>替换</strong> 一个数字。</li>\\n<li><strong>返回</strong> 系统中给定数字的最小下标。</li>\\n</ul>\\n<p>请你实现一个 <code>NumberContainers</code> 类：</p>\\n<ul>\\n<li><code>NumberContainers()</code> 初始化数字容器系统。</li>\\n<li><code>void change(int index, int number)</code> 在下标 <code>index</code> 处填入 <code>number</code> 。如果该下标 <code>index</code> 处已经有数字了，那么用 <code>number</code> 替换该数字。</li>\\n<li><code>int find(int number)</code> 返回给定数字 <code>number</code> 在系统中的最小下标。如果系统中没有 <code>number</code> ，那么返回 <code>-1</code> 。</li>\\n</ul>"}');export{p as comp,t as data};

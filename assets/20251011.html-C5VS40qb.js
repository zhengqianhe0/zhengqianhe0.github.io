import{_ as s,c as a,a as e,o as i}from"./app-Bpj5Mkzv.js";const l={};function p(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="_3186-施咒的最大总伤害" tabindex="-1"><a class="header-anchor" href="#_3186-施咒的最大总伤害"><span><a href="https://leetcode.cn/problems/maximum-total-damage-with-spell-casting/" target="_blank" rel="noopener noreferrer">3186. 施咒的最大总伤害</a></span></a></h1><p>一个魔法师有许多不同的咒语。</p><p>给你一个数组 <code>power</code> ，其中每个元素表示一个咒语的伤害值，可能会有多个咒语有相同的伤害值。</p><p>已知魔法师使用伤害值为 <code>power[i]</code> 的咒语时，他们就 <strong>不能</strong> 使用伤害为 <code>power[i] - 2</code> ，<code>power[i] - 1</code> ，<code>power[i] + 1</code> 或者 <code>power[i] + 2</code> 的咒语。</p><p>每个咒语最多只能被使用 <strong>一次</strong> 。</p><p>请你返回这个魔法师可以达到的伤害值之和的 <strong>最大值</strong> 。</p><p><strong>示例 1：</strong></p><p>**输入：**power = [1,1,3,4]</p><p>**输出：**6</p><p><strong>解释：</strong></p><p>可以使用咒语 0，1，3，伤害值分别为 1，1，4，总伤害值为 6 。</p><p><strong>示例 2：</strong></p><p>**输入：**power = [7,1,6,6]</p><p>**输出：**13</p><p><strong>解释：</strong></p><p>可以使用咒语 1，2，3，伤害值分别为 1，6，6，总伤害值为 13 。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= power.length &lt;= 105</code></li><li><code>1 &lt;= power[i] &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long maximumTotalDamage(vector&lt;int&gt;&amp; power) {</span>
<span class="line">        // 统计每个伤害值出现的次数</span>
<span class="line">        unordered_map&lt;int, int&gt; cnt;</span>
<span class="line">        for (int x : power) {</span>
<span class="line">            cnt[x]++;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 将 map 转换为 vector&lt;pair&lt;int, int&gt;&gt;，便于排序和索引访问</span>
<span class="line">        // pair.first 是伤害值，pair.second 是出现次数</span>
<span class="line">        vector&lt;pair&lt;int, int&gt;&gt; a(cnt.begin(), cnt.end());</span>
<span class="line"></span>
<span class="line">        // 按伤害值（即 pair 的 first）升序排序</span>
<span class="line">        ranges::sort(a);</span>
<span class="line"></span>
<span class="line">        int n = a.size();  // 去重后的不同伤害值个数</span>
<span class="line"></span>
<span class="line">        // 记忆化数组：memo[i] 表示考虑前 i+1 个伤害值（即 a[0] 到 a[i]）时能获得的最大总伤害</span>
<span class="line">        vector&lt;long long&gt; memo(n, -1);</span>
<span class="line"></span>
<span class="line">        // 定义递归 lambda 函数，使用 Y-combinator 风格实现递归</span>
<span class="line">        // [&amp;] 捕获外部变量（如 a, memo） by reference</span>
<span class="line">        // auto&amp;&amp; dfs：通用引用，允许传入自身（实现递归）</span>
<span class="line">        auto dfs = [&amp;](auto&amp;&amp; dfs, int i) -&gt; long long {</span>
<span class="line">            // 边界条件：如果 i &lt; 0，说明没有可选的伤害值，返回 0</span>
<span class="line">            if (i &lt; 0) {</span>
<span class="line">                return 0;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 引用 memo[i]，避免重复计算</span>
<span class="line">            long long&amp; res = memo[i];</span>
<span class="line">            if (res != -1) {</span>
<span class="line">                return res;  // 已计算过，直接返回</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 解构当前伤害值 x 和其出现次数 c</span>
<span class="line">            auto&amp; [x, c] = a[i];</span>
<span class="line"></span>
<span class="line">            // 找到第一个不能与当前伤害值 x 同时选择的位置 j</span>
<span class="line">            // 规则是：不能选择 [x-2, x-1, x+1, x+2] 范围内的其他伤害值？</span>
<span class="line">            // 实际上题目隐含规则是：如果选择了伤害值 x，</span>
<span class="line">            // 就不能选择 x-1 和 x-2（因为它们与 x 相邻或次相邻，会互相干扰）</span>
<span class="line">            // 所以我们要跳过所有 &gt;= x-2 的值，找到第一个 &lt; x-2 的位置</span>
<span class="line">            int j = i;</span>
<span class="line">            while (j &amp;&amp; a[j - 1].first &gt;= x - 2) {</span>
<span class="line">                j--;</span>
<span class="line">            }</span>
<span class="line">            // 此时 a[j] 是第一个满足 a[j].first &lt; x - 2 的元素（或 j == 0）</span>
<span class="line"></span>
<span class="line">            // 两种选择：</span>
<span class="line">            // 1. 不选当前伤害值 x：dfs(dfs, i - 1)</span>
<span class="line">            // 2. 选当前伤害值 x：总伤害 = x * c + dfs(dfs, j - 1)</span>
<span class="line">            // 取两者最大值</span>
<span class="line">            return res = max(dfs(dfs, i - 1), dfs(dfs, j - 1) + (long long)x * c);</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        // 从最后一个元素开始递归</span>
<span class="line">        return dfs(dfs, n - 1);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn) 记忆化搜索，时间空间都是n，其中排序为nlogn</li><li>空间复杂度：O(n)</li></ul>`,22)]))}const r=s(l,[["render",p]]),t=JSON.parse('{"path":"/leetcode/20251011.html","title":"3186. 施咒的最大总伤害","lang":"zh-CN","frontmatter":{"date":"2025-10-11T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["二分查找","哈希表","数组","双指针"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251011.md","excerpt":"\\n<p>一个魔法师有许多不同的咒语。</p>\\n<p>给你一个数组 <code>power</code> ，其中每个元素表示一个咒语的伤害值，可能会有多个咒语有相同的伤害值。</p>\\n<p>已知魔法师使用伤害值为 <code>power[i]</code> 的咒语时，他们就 <strong>不能</strong> 使用伤害为 <code>power[i] - 2</code> ，<code>power[i] - 1</code> ，<code>power[i] + 1</code> 或者 <code>power[i] + 2</code> 的咒语。</p>\\n<p>每个咒语最多只能被使用 <strong>一次</strong> 。</p>"}');export{r as comp,t as data};

import{_ as s,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2528-最大化城市的最小电量" tabindex="-1"><a class="header-anchor" href="#_2528-最大化城市的最小电量"><span><a href="https://leetcode.cn/problems/maximize-the-minimum-powered-city/" target="_blank" rel="noopener noreferrer">2528. 最大化城市的最小电量</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>stations</code> ，其中 <code>stations[i]</code> 表示第 <code>i</code> 座城市的供电站数目。</p><p>每个供电站可以在一定 <strong>范围</strong> 内给所有城市提供电力。换句话说，如果给定的范围是 <code>r</code> ，在城市 <code>i</code> 处的供电站可以给所有满足 <code>|i - j| &lt;= r</code> 且 <code>0 &lt;= i, j &lt;= n - 1</code> 的城市 <code>j</code> 供电。</p><ul><li><code>|x|</code> 表示 <code>x</code> 的 <strong>绝对值</strong> 。比方说，<code>|7 - 5| = 2</code> ，<code>|3 - 10| = 7</code> 。</li></ul><p>一座城市的 <strong>电量</strong> 是所有能给它供电的供电站数目。</p><p>政府批准了可以额外建造 <code>k</code> 座供电站，你需要决定这些供电站分别应该建在哪里，这些供电站与已经存在的供电站有相同的供电范围。</p><p>给你两个整数 <code>r</code> 和 <code>k</code> ，如果以最优策略建造额外的发电站，返回所有城市中，最小电量的最大值是多少。</p><p>这 <code>k</code> 座供电站可以建在多个城市。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：stations = [1,2,4,5,0], r = 1, k = 2</span>
<span class="line">输出：5</span>
<span class="line">解释：</span>
<span class="line">最优方案之一是把 2 座供电站都建在城市 1 。</span>
<span class="line">每座城市的供电站数目分别为 [1,4,4,5,0] 。</span>
<span class="line">- 城市 0 的供电站数目为 1 + 4 = 5 。</span>
<span class="line">- 城市 1 的供电站数目为 1 + 4 + 4 = 9 。</span>
<span class="line">- 城市 2 的供电站数目为 4 + 4 + 5 = 13 。</span>
<span class="line">- 城市 3 的供电站数目为 5 + 4 = 9 。</span>
<span class="line">- 城市 4 的供电站数目为 5 + 0 = 5 。</span>
<span class="line">供电站数目最少是 5 。</span>
<span class="line">无法得到更优解，所以我们返回 5 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：stations = [4,4,4,4], r = 0, k = 3</span>
<span class="line">输出：4</span>
<span class="line">解释：</span>
<span class="line">无论如何安排，总有一座城市的供电站数目是 4 ，所以最优解是 4 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == stations.length</code></li><li><code>1 &lt;= n &lt;= 105</code></li><li><code>0 &lt;= stations[i] &lt;= 105</code></li><li><code>0 &lt;= r &lt;= n - 1</code></li><li><code>0 &lt;= k &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long maxPower(vector&lt;int&gt;&amp; stations, int r, int k) {</span>
<span class="line">        int n = stations.size();</span>
<span class="line">        // 前缀和</span>
<span class="line">        vector&lt;long long&gt; sum(n + 1);</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            sum[i + 1] = sum[i] + stations[i];</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 初始电量</span>
<span class="line">        vector&lt;long long&gt; power(n);</span>
<span class="line">        long long mn = LLONG_MAX;</span>
<span class="line">        for (int i = 0; i &lt; n; i++) {</span>
<span class="line">            power[i] = sum[min(i + r + 1, n)] - sum[max(i - r, 0)];</span>
<span class="line">            mn = min(mn, power[i]);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        auto check = [&amp;](long long low) -&gt; bool {</span>
<span class="line">            vector&lt;long long&gt; diff(n + 1);</span>
<span class="line">            long long sum_d = 0, built = 0;</span>
<span class="line">            for (int i = 0; i &lt; n; i++) {</span>
<span class="line">                sum_d += diff[i]; // 累加差分值</span>
<span class="line">                long long m = low - (power[i] + sum_d);</span>
<span class="line">                if (m &lt;= 0) {</span>
<span class="line">                    continue;</span>
<span class="line">                }</span>
<span class="line">                // 需要在 i+r 额外建造 m 个供电站</span>
<span class="line">                built += m;</span>
<span class="line">                if (built &gt; k) { // 不满足要求</span>
<span class="line">                    return false;</span>
<span class="line">                }</span>
<span class="line">                // 把区间 [i, i+2r] 加一</span>
<span class="line">                sum_d += m; // 由于 diff[i] 后面不会再访问，我们直接加到 sum_d 中</span>
<span class="line">                diff[min(i + r * 2 + 1, n)] -= m;</span>
<span class="line">            }</span>
<span class="line">            return true;</span>
<span class="line">        };</span>
<span class="line"></span>
<span class="line">        // 开区间二分</span>
<span class="line">        long long left = mn + k / n, right = mn + k + 1;</span>
<span class="line">        while (left + 1 &lt; right) {</span>
<span class="line">            long long mid = left + (right - left) / 2;</span>
<span class="line">            (check(mid) ? left : right) = mid;</span>
<span class="line">        }</span>
<span class="line">        return left;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogk)</li><li>空间复杂度：O(n)</li></ul>`,18)]))}const r=s(a,[["render",d]]),t=JSON.parse('{"path":"/leetcode/20251107.html","title":"2528. 最大化城市的最小电量","lang":"zh-CN","frontmatter":{"date":"2025-11-07T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["差分数组","前缀和","数组","二分查找"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251107.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>stations</code> ，其中 <code>stations[i]</code> 表示第 <code>i</code> 座城市的供电站数目。</p>\\n<p>每个供电站可以在一定 <strong>范围</strong> 内给所有城市提供电力。换句话说，如果给定的范围是 <code>r</code> ，在城市 <code>i</code> 处的供电站可以给所有满足 <code>|i - j| &lt;= r</code> 且 <code>0 &lt;= i, j &lt;= n - 1</code> 的城市 <code>j</code> 供电。</p>"}');export{r as comp,t as data};

import{_ as n,c as s,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(d,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h1 id="_2483-商店的最少代价" tabindex="-1"><a class="header-anchor" href="#_2483-商店的最少代价"><span><a href="https://leetcode.cn/problems/minimum-penalty-for-a-shop/" target="_blank" rel="noopener noreferrer">2483. 商店的最少代价</a></span></a></h1><p>给你一个顾客访问商店的日志，用一个下标从 <strong>0</strong> 开始且只包含字符 <code>&#39;N&#39;</code> 和 <code>&#39;Y&#39;</code> 的字符串 <code>customers</code> 表示：</p><ul><li>如果第 <code>i</code> 个字符是 <code>&#39;Y&#39;</code> ，它表示第 <code>i</code> 小时有顾客到达。</li><li>如果第 <code>i</code> 个字符是 <code>&#39;N&#39;</code> ，它表示第 <code>i</code> 小时没有顾客到达。</li></ul><p>如果商店在第 <code>j</code> 小时关门（<code>0 &lt;= j &lt;= n</code>），代价按如下方式计算：</p><ul><li>在开门期间，如果某一个小时没有顾客到达，代价增加 <code>1</code> 。</li><li>在关门期间，如果某一个小时有顾客到达，代价增加 <code>1</code> 。</li></ul><p>请你返回在确保代价 <strong>最小</strong> 的前提下，商店的 <strong>最早</strong> 关门时间。</p><p>注意，商店在第 <code>j</code> 小时关门表示在第 <code>j</code> 小时以及之后商店处于关门状态。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：customers = &quot;YYNY&quot;</span>
<span class="line">输出：2</span>
<span class="line">解释：</span>
<span class="line">- 第 0 小时关门，总共 1+1+0+1 = 3 代价。</span>
<span class="line">- 第 1 小时关门，总共 0+1+0+1 = 2 代价。</span>
<span class="line">- 第 2 小时关门，总共 0+0+0+1 = 1 代价。</span>
<span class="line">- 第 3 小时关门，总共 0+0+1+1 = 2 代价。</span>
<span class="line">- 第 4 小时关门，总共 0+0+1+0 = 1 代价。</span>
<span class="line">在第 2 或第 4 小时关门代价都最小。由于第 2 小时更早，所以最优关门时间是 2 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：customers = &quot;NNNNN&quot;</span>
<span class="line">输出：0</span>
<span class="line">解释：最优关门时间是 0 ，因为自始至终没有顾客到达。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：customers = &quot;YYYY&quot;</span>
<span class="line">输出：4</span>
<span class="line">解释：最优关门时间是 4 ，因为每一小时均有顾客到达。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= customers.length &lt;= 105</code></li><li><code>customers</code> 只包含字符 <code>&#39;Y&#39;</code> 和 <code>&#39;N&#39;</code> 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>并非计算绝对值，而是比较关门与否的差值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int bestClosingTime(string customers) {</span>
<span class="line">        // 初始化三个关键变量</span>
<span class="line">        int penalty = 0, min_penalty = 0, ans = 0;</span>
<span class="line">        </span>
<span class="line">        // 遍历每个小时的顾客情况</span>
<span class="line">        for (int i = 0; i &lt; customers.size(); i++) {</span>
<span class="line">            // 核心：动态计算惩罚的变化量</span>
<span class="line">            penalty += customers[i] == &#39;N&#39; ? 1 : -1;</span>
<span class="line">            </span>
<span class="line">            // 发现更小的惩罚时，更新最小惩罚和最优关门时间</span>
<span class="line">            if (penalty &lt; min_penalty) {</span>
<span class="line">                min_penalty = penalty;</span>
<span class="line">                ans = i + 1; // 关门时间是第i+1小时（i从0开始）</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,20)]))}const r=n(l,[["render",c]]),o=JSON.parse(`{"path":"/leetcode/20251226.html","title":"2483. 商店的最少代价","lang":"zh-CN","frontmatter":{"date":"2025-12-26T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","前缀和"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251226.md","excerpt":"\\n<p>给你一个顾客访问商店的日志，用一个下标从 <strong>0</strong> 开始且只包含字符 <code>'N'</code> 和 <code>'Y'</code> 的字符串 <code>customers</code> 表示：</p>\\n<ul>\\n<li>如果第 <code>i</code> 个字符是 <code>'Y'</code> ，它表示第 <code>i</code> 小时有顾客到达。</li>\\n<li>如果第 <code>i</code> 个字符是 <code>'N'</code> ，它表示第 <code>i</code> 小时没有顾客到达。</li>\\n</ul>\\n<p>如果商店在第 <code>j</code> 小时关门（<code>0 &lt;= j &lt;= n</code>），代价按如下方式计算：</p>"}`);export{r as comp,o as data};

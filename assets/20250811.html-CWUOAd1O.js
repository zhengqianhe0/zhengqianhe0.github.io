import{_ as s,c as n,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(r,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h1 id="_2438-二的幂数组中查询范围内的乘积" tabindex="-1"><a class="header-anchor" href="#_2438-二的幂数组中查询范围内的乘积"><span><a href="https://leetcode.cn/problems/range-product-queries-of-powers/" target="_blank" rel="noopener noreferrer">2438. 二的幂数组中查询范围内的乘积</a></span></a></h1><p>给你一个正整数 <code>n</code> ，你需要找到一个下标从 <strong>0</strong> 开始的数组 <code>powers</code> ，它包含 <strong>最少</strong> 数目的 <code>2</code> 的幂，且它们的和为 <code>n</code> 。<code>powers</code> 数组是 <strong>非递减</strong> 顺序的。根据前面描述，构造 <code>powers</code> 数组的方法是唯一的。</p><p>同时给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>queries</code> ，其中 <code>queries[i] = [lefti, righti]</code> ，其中 <code>queries[i]</code> 表示请你求出满足 <code>lefti &lt;= j &lt;= righti</code> 的所有 <code>powers[j]</code> 的乘积。</p><p>请你返回一个数组 <code>answers</code> ，长度与 <code>queries</code> 的长度相同，其中 <code>answers[i]</code>是第 <code>i</code> 个查询的答案。由于查询的结果可能非常大，请你将每个 <code>answers[i]</code> 都对 <code>109 + 7</code> <strong>取余</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 15, queries = [[0,1],[2,2],[0,3]]</span>
<span class="line">输出：[2,4,64]</span>
<span class="line">解释：</span>
<span class="line">对于 n = 15 ，得到 powers = [1,2,4,8] 。没法得到元素数目更少的数组。</span>
<span class="line">第 1 个查询的答案：powers[0] * powers[1] = 1 * 2 = 2 。</span>
<span class="line">第 2 个查询的答案：powers[2] = 4 。</span>
<span class="line">第 3 个查询的答案：powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64 。</span>
<span class="line">每个答案对 109 + 7 得到的结果都相同，所以返回 [2,4,64] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2, queries = [[0,0]]</span>
<span class="line">输出：[2]</span>
<span class="line">解释：</span>
<span class="line">对于 n = 2, powers = [2] 。</span>
<span class="line">唯一一个查询的答案是 powers[0] = 2 。答案对 109 + 7 取余后结果相同，所以返回 [2] 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 109</code></li><li><code>1 &lt;= queries.length &lt;= 105</code></li><li><code>0 &lt;= starti &lt;= endi &lt; powers.length</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>方法一：二进制分解 + 直接计算 思路与算法</p><p>根据题目描述，我们需要将 n 分解成最少数目的 2 的幂，这就提示我们将 n 写成二进制表示，</p><p>在得到 n 的分解后，由于题目中保证，因此分解的数组中不会超过 29 个元素。对于每一个询问 [left,right]，可以直接遍历分解数组中对应的所有元素，并计算答案，单次询问的时间复杂度为 O(logn)。</p><p>同样地，不同的询问总数不会超过<br> 2 29×28</p><p>+29=435 个，因此也可以使用预处理的方式，提前计算出每一种询问的答案，时间复杂度为 O(log 2 n)，之后单次询问的时间复杂度减少至 O(1)。</p><p>方法一给出的是使用遍历直接计算的方法。</p><p><strong>学习mod写法，二进制取数写法，强制类型转换</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    static constexpr int mod =1000000007;</span>
<span class="line">    vector&lt;int&gt; productQueries(int n, vector&lt;vector&lt;int&gt;&gt;&amp; queries) {</span>
<span class="line">        vector&lt;int&gt; bins;</span>
<span class="line">        int rep=1;</span>
<span class="line">        while(n){</span>
<span class="line">            if(n%2==1){</span>
<span class="line">                bins.push_back(rep);</span>
<span class="line">            }</span>
<span class="line">            n/=2;</span>
<span class="line">            rep*=2;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; ans;</span>
<span class="line">        for(const auto&amp; query:queries){</span>
<span class="line">            int cur=1;</span>
<span class="line">            for(int i=query[0];i&lt;=query[1];++i){</span>
<span class="line">                cur=static_cast&lt;long long&gt;(cur)*bins[i]%mod;</span>
<span class="line">            }</span>
<span class="line">            ans.push_back(cur);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">        </span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：<em>O</em>(<em>q</em>×log<em>n</em>)，其中 <em>q</em> 是数组 <em>queries</em> 的长度。</li><li>空间复杂度：<em>O</em>(log<em>n</em>)，即为存储 <em>n</em> 的二进制分解需要使用的空间。</li></ul>`,21)]))}const o=s(l,[["render",c]]),t=JSON.parse('{"path":"/leetcode/20250811.html","title":"2438. 二的幂数组中查询范围内的乘积","lang":"zh-CN","frontmatter":{"date":"2025-08-11T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["位运算","数组"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"af97fc88a7a0a4064128ff050a85469cb2ecc9a3","time":1754875145000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mry"}]},"filePathRelative":"leetcode/20250811.md","excerpt":"\\n<p>给你一个正整数 <code>n</code> ，你需要找到一个下标从 <strong>0</strong> 开始的数组 <code>powers</code> ，它包含 <strong>最少</strong> 数目的 <code>2</code> 的幂，且它们的和为 <code>n</code> 。<code>powers</code> 数组是 <strong>非递减</strong> 顺序的。根据前面描述，构造 <code>powers</code> 数组的方法是唯一的。</p>\\n<p>同时给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>queries</code> ，其中 <code>queries[i] = [lefti, righti]</code> ，其中 <code>queries[i]</code> 表示请你求出满足 <code>lefti &lt;= j &lt;= righti</code> 的所有 <code>powers[j]</code> 的乘积。</p>"}');export{o as comp,t as data};

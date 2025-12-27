import{_ as e,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_2125-银行中的激光束数量" tabindex="-1"><a class="header-anchor" href="#_2125-银行中的激光束数量"><span><a href="https://leetcode.cn/problems/number-of-laser-beams-in-a-bank/" target="_blank" rel="noopener noreferrer">2125. 银行中的激光束数量</a></span></a></h1><p>银行内部的防盗安全装置已经激活。给你一个下标从 <strong>0</strong> 开始的二进制字符串数组 <code>bank</code> ，表示银行的平面图，这是一个大小为 <code>m x n</code> 的二维矩阵。 <code>bank[i]</code> 表示第 <code>i</code> 行的设备分布，由若干 <code>&#39;0&#39;</code> 和若干 <code>&#39;1&#39;</code> 组成。<code>&#39;0&#39;</code> 表示单元格是空的，而 <code>&#39;1&#39;</code> 表示单元格有一个安全设备。</p><p>对任意两个安全设备而言，<strong>如果****同时</strong> 满足下面两个条件，则二者之间存在 <strong>一个</strong> 激光束：</p><ul><li>两个设备位于两个 <strong>不同行</strong> ：<code>r1</code> 和 <code>r2</code> ，其中 <code>r1 &lt; r2</code> 。</li><li>满足 <code>r1 &lt; i &lt; r2</code> 的 <strong>所有</strong> 行 <code>i</code> ，都 <strong>没有安全设备</strong> 。</li></ul><p>激光束是独立的，也就是说，一个激光束既不会干扰另一个激光束，也不会与另一个激光束合并成一束。</p><p>返回银行中激光束的总数量。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/12/24/laser1.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：bank = [&quot;011001&quot;,&quot;000000&quot;,&quot;010100&quot;,&quot;001000&quot;]</span>
<span class="line">输出：8</span>
<span class="line">解释：在下面每组设备对之间，存在一条激光束。总共是 8 条激光束：</span>
<span class="line"> * bank[0][1] -- bank[2][1]</span>
<span class="line"> * bank[0][1] -- bank[2][3]</span>
<span class="line"> * bank[0][2] -- bank[2][1]</span>
<span class="line"> * bank[0][2] -- bank[2][3]</span>
<span class="line"> * bank[0][5] -- bank[2][1]</span>
<span class="line"> * bank[0][5] -- bank[2][3]</span>
<span class="line"> * bank[2][1] -- bank[3][2]</span>
<span class="line"> * bank[2][3] -- bank[3][2]</span>
<span class="line">注意，第 0 行和第 3 行上的设备之间不存在激光束。</span>
<span class="line">这是因为第 2 行存在安全设备，这不满足第 2 个条件。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/12/24/laser2.jpg" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：bank = [&quot;000&quot;,&quot;111&quot;,&quot;000&quot;]</span>
<span class="line">输出：0</span>
<span class="line">解释：不存在两个位于不同行的设备</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>m == bank.length</code></li><li><code>n == bank[i].length</code></li><li><code>1 &lt;= m, n &lt;= 500</code></li><li><code>bank[i][j]</code> 为 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>根据题意，相邻行设备数均不为0，相乘得到结果并加到结果中。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numberOfBeams(vector&lt;string&gt;&amp; bank) {</span>
<span class="line">        int ans=0,pre_cnt=0;</span>
<span class="line">        for(auto&amp; row:bank){</span>
<span class="line">            int cnt=ranges::count(row,&#39;1&#39;);</span>
<span class="line">            if(cnt&gt;0){</span>
<span class="line">                ans+=pre_cnt*cnt;</span>
<span class="line">                pre_cnt=cnt;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(1)</li></ul>`,19)]))}const o=e(l,[["render",c]]),r=JSON.parse(`{"path":"/leetcode/20251027.html","title":"2125. 银行中的激光束数量","lang":"zh-CN","frontmatter":{"date":"2025-10-27T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","数组","数学"]},"headers":[],"git":{"updatedTime":1761704241000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"81919479e8539e8d2389317ae4c774b0a7212f3e","time":1761704241000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251027.md","excerpt":"\\n<p>银行内部的防盗安全装置已经激活。给你一个下标从 <strong>0</strong> 开始的二进制字符串数组 <code>bank</code> ，表示银行的平面图，这是一个大小为 <code>m x n</code> 的二维矩阵。 <code>bank[i]</code> 表示第 <code>i</code> 行的设备分布，由若干 <code>'0'</code> 和若干 <code>'1'</code> 组成。<code>'0'</code> 表示单元格是空的，而 <code>'1'</code> 表示单元格有一个安全设备。</p>\\n<p>对任意两个安全设备而言，<strong>如果****同时</strong> 满足下面两个条件，则二者之间存在 <strong>一个</strong> 激光束：</p>"}`);export{o as comp,r as data};

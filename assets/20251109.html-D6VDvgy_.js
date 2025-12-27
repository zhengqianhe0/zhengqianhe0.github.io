import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2169-得到-0-的操作数" tabindex="-1"><a class="header-anchor" href="#_2169-得到-0-的操作数"><span><a href="https://leetcode.cn/problems/count-operations-to-obtain-zero/" target="_blank" rel="noopener noreferrer">2169. 得到 0 的操作数</a></span></a></h1><p>给你两个 <strong>非负</strong> 整数 <code>num1</code> 和 <code>num2</code> 。</p><p>每一步 <strong>操作</strong> 中，如果 <code>num1 &gt;= num2</code> ，你必须用 <code>num1</code> 减 <code>num2</code> ；否则，你必须用 <code>num2</code> 减 <code>num1</code> 。</p><ul><li>例如，<code>num1 = 5</code> 且 <code>num2 = 4</code> ，应该用 <code>num1</code> 减 <code>num2</code> ，因此，得到 <code>num1 = 1</code> 和 <code>num2 = 4</code> 。然而，如果 <code>num1 = 4</code>且 <code>num2 = 5</code> ，一步操作后，得到 <code>num1 = 4</code> 和 <code>num2 = 1</code> 。</li></ul><p>返回使 <code>num1 = 0</code> 或 <code>num2 = 0</code> 的 <strong>操作数</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：num1 = 2, num2 = 3</span>
<span class="line">输出：3</span>
<span class="line">解释：</span>
<span class="line">- 操作 1 ：num1 = 2 ，num2 = 3 。由于 num1 &lt; num2 ，num2 减 num1 得到 num1 = 2 ，num2 = 3 - 2 = 1 。</span>
<span class="line">- 操作 2 ：num1 = 2 ，num2 = 1 。由于 num1 &gt; num2 ，num1 减 num2 。</span>
<span class="line">- 操作 3 ：num1 = 1 ，num2 = 1 。由于 num1 == num2 ，num1 减 num2 。</span>
<span class="line">此时 num1 = 0 ，num2 = 1 。由于 num1 == 0 ，不需要再执行任何操作。</span>
<span class="line">所以总操作数是 3 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：num1 = 10, num2 = 10</span>
<span class="line">输出：1</span>
<span class="line">解释：</span>
<span class="line">- 操作 1 ：num1 = 10 ，num2 = 10 。由于 num1 == num2 ，num1 减 num2 得到 num1 = 10 - 10 = 0 。</span>
<span class="line">此时 num1 = 0 ，num2 = 10 。由于 num1 == 0 ，不需要再执行任何操作。</span>
<span class="line">所以总操作数是 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= num1, num2 &lt;= 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>重复减，辗转相除</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">少量数据时的模拟做法：</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countOperations(int num1, int num2) {</span>
<span class="line">        int ans=0;</span>
<span class="line">        while(num1&amp;&amp;num2){</span>
<span class="line">            if(num1&gt;=num2){</span>
<span class="line">                num1-=num2;</span>
<span class="line">            }else{</span>
<span class="line">                num2-=num1;</span>
<span class="line">            }</span>
<span class="line">            ans++;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">辗转相除：</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countOperations(int x, int y) {</span>
<span class="line">        int ans = 0;</span>
<span class="line">        while (y &gt; 0) {</span>
<span class="line">            ans += x / y;</span>
<span class="line">            x %= y;</span>
<span class="line">            swap(x, y);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(log max(x,y))</li><li>空间复杂度：O(1)</li></ul>`,16)]))}const m=s(l,[["render",c]]),o=JSON.parse('{"path":"/leetcode/20251109.html","title":"2169. 得到 0 的操作数","lang":"zh-CN","frontmatter":{"date":"2025-11-09T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["模拟","数学"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251109.md","excerpt":"\\n<p>给你两个 <strong>非负</strong> 整数 <code>num1</code> 和 <code>num2</code> 。</p>\\n<p>每一步 <strong>操作</strong> 中，如果 <code>num1 &gt;= num2</code> ，你必须用 <code>num1</code> 减 <code>num2</code> ；否则，你必须用 <code>num2</code> 减 <code>num1</code> 。</p>\\n<ul>\\n<li>例如，<code>num1 = 5</code> 且 <code>num2 = 4</code> ，应该用 <code>num1</code> 减 <code>num2</code> ，因此，得到 <code>num1 = 1</code> 和 <code>num2 = 4</code> 。然而，如果 <code>num1 = 4</code>且 <code>num2 = 5</code> ，一步操作后，得到 <code>num1 = 4</code> 和 <code>num2 = 1</code> 。</li>\\n</ul>"}');export{m as comp,o as data};

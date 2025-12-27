import{_ as n,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_2011-执行操作后的变量值" tabindex="-1"><a class="header-anchor" href="#_2011-执行操作后的变量值"><span><a href="https://leetcode.cn/problems/final-value-of-variable-after-performing-operations/" target="_blank" rel="noopener noreferrer">2011. 执行操作后的变量值</a></span></a></h1><p>存在一种仅支持 4 种操作和 1 个变量 <code>X</code> 的编程语言：</p><ul><li><code>++X</code> 和 <code>X++</code> 使变量 <code>X</code> 的值 <strong>加</strong> <code>1</code></li><li><code>--X</code> 和 <code>X--</code> 使变量 <code>X</code> 的值 <strong>减</strong> <code>1</code></li></ul><p>最初，<code>X</code> 的值是 <code>0</code></p><p>给你一个字符串数组 <code>operations</code> ，这是由操作组成的一个列表，返回执行所有操作后， <code>X</code> 的 <strong>最终值</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]</span>
<span class="line">输出：1</span>
<span class="line">解释：操作按下述步骤执行：</span>
<span class="line">最初，X = 0</span>
<span class="line">--X：X 减 1 ，X =  0 - 1 = -1</span>
<span class="line">X++：X 加 1 ，X = -1 + 1 =  0</span>
<span class="line">X++：X 加 1 ，X =  0 + 1 =  1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]</span>
<span class="line">输出：3</span>
<span class="line">解释：操作按下述步骤执行： </span>
<span class="line">最初，X = 0</span>
<span class="line">++X：X 加 1 ，X = 0 + 1 = 1</span>
<span class="line">++X：X 加 1 ，X = 1 + 1 = 2</span>
<span class="line">X++：X 加 1 ，X = 2 + 1 = 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]</span>
<span class="line">输出：0</span>
<span class="line">解释：操作按下述步骤执行：</span>
<span class="line">最初，X = 0</span>
<span class="line">X++：X 加 1 ，X = 0 + 1 = 1</span>
<span class="line">++X：X 加 1 ，X = 1 + 1 = 2</span>
<span class="line">--X：X 减 1 ，X = 2 - 1 = 1</span>
<span class="line">X--：X 减 1 ，X = 1 - 1 = 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= operations.length &lt;= 100</code></li><li><code>operations[i]</code> 将会是 <code>&quot;++X&quot;</code>、<code>&quot;X++&quot;</code>、<code>&quot;--X&quot;</code> 或 <code>&quot;X--&quot;</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>简单题简单做，注意到字符串中间位置的字符即决定了是加还是减</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int finalValueAfterOperations(vector&lt;string&gt;&amp; operations) {</span>
<span class="line">        int ans=0;</span>
<span class="line">        for(auto&amp; s:operations){</span>
<span class="line">            ans+=s[1]==&#39;+&#39;?1:-1;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,18)]))}const t=n(l,[["render",d]]),r=JSON.parse('{"path":"/leetcode/20251020.html","title":"2011. 执行操作后的变量值","lang":"zh-CN","frontmatter":{"date":"2025-10-20T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","字符串"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251020.md","excerpt":"\\n<p>存在一种仅支持 4 种操作和 1 个变量 <code>X</code> 的编程语言：</p>\\n<ul>\\n<li><code>++X</code> 和 <code>X++</code> 使变量 <code>X</code> 的值 <strong>加</strong> <code>1</code></li>\\n<li><code>--X</code> 和 <code>X--</code> 使变量 <code>X</code> 的值 <strong>减</strong> <code>1</code></li>\\n</ul>\\n<p>最初，<code>X</code> 的值是 <code>0</code></p>"}');export{t as comp,r as data};

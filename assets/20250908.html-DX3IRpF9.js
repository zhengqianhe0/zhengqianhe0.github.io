import{_ as e,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(t,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_1317-将整数转换为两个无零整数的和" tabindex="-1"><a class="header-anchor" href="#_1317-将整数转换为两个无零整数的和"><span><a href="https://leetcode.cn/problems/convert-integer-to-the-sum-of-two-no-zero-integers/" target="_blank" rel="noopener noreferrer">1317. 将整数转换为两个无零整数的和</a></span></a></h1><p>「无零整数」是十进制表示中 <strong>不含任何 0</strong> 的正整数。</p><p>给你一个整数 <code>n</code>，请你返回一个 <strong>由两个整数组成的列表</strong> <code>[a, b]</code>，满足：</p><ul><li><code>a</code> 和 <code>b</code> 都是无零整数</li><li><code>a + b = n</code></li></ul><p>题目数据保证至少有一个有效的解决方案。</p><p>如果存在多个有效解决方案，你可以返回其中任意一个。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 2</span>
<span class="line">输出：[1,1]</span>
<span class="line">解释：a = 1, b = 1。a + b = n 并且 a 和 b 的十进制表示形式都不包含任何 0。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 11</span>
<span class="line">输出：[2,9]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 10000</span>
<span class="line">输出：[1,9999]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 69</span>
<span class="line">输出：[1,68]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：n = 1010</span>
<span class="line">输出：[11,999]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 104</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>构造法，由于要求不能含0。</p><ul><li>从低到高遍历所有位 <ul><li>如果大于2，则除以二</li><li>如果小于等于1，则借一位用于除法。（当前x-=10表示向上一位借1）</li></ul></li><li>循环条件x&gt;1表示当最高位大于1时才需要处理这一位，小于等于1则默认分给n-a</li><li>由此构造出来的a不含0，n-a同样不含0</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; getNoZeroIntegers(int n) {</span>
<span class="line">        int a=0;</span>
<span class="line">        int base=1;</span>
<span class="line">        for(int x=n;x&gt;1;x/=10){</span>
<span class="line">            int d=x%10;</span>
<span class="line">            if(d&lt;=1){</span>
<span class="line">                d+=10;</span>
<span class="line">                x-=10;</span>
<span class="line">            }</span>
<span class="line">            a+=d/2*base;</span>
<span class="line">            base*=10;</span>
<span class="line">        }</span>
<span class="line">        return {a,n-a};</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(logn)，这里log10n，即十进制的位数</li><li>空间复杂度：O(1)</li></ul>`,24)]))}const c=e(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20250908.html","title":"1317. 将整数转换为两个无零整数的和","lang":"zh-CN","frontmatter":{"date":"2025-09-08T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学"]},"headers":[],"git":{"updatedTime":1757295998000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"cf42f34c79c94c0f93a542f4c150ce029a990db9","time":1757295998000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250908.md","excerpt":"\\n<p>「无零整数」是十进制表示中 <strong>不含任何 0</strong> 的正整数。</p>\\n<p>给你一个整数 <code>n</code>，请你返回一个 <strong>由两个整数组成的列表</strong> <code>[a, b]</code>，满足：</p>\\n<ul>\\n<li><code>a</code> 和 <code>b</code> 都是无零整数</li>\\n<li><code>a + b = n</code></li>\\n</ul>\\n<p>题目数据保证至少有一个有效的解决方案。</p>\\n<p>如果存在多个有效解决方案，你可以返回其中任意一个。</p>\\n<p><strong>示例 1：</strong></p>"}');export{c as comp,p as data};

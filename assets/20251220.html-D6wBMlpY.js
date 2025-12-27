import{_ as n,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_944-删列造序" tabindex="-1"><a class="header-anchor" href="#_944-删列造序"><span><a href="https://leetcode.cn/problems/delete-columns-to-make-sorted/" target="_blank" rel="noopener noreferrer">944. 删列造序</a></span></a></h1><p>给你由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p><p>这些字符串可以每个一行，排成一个网格。例如，<code>strs = [&quot;abc&quot;, &quot;bce&quot;, &quot;cae&quot;]</code> 可以排列为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">abc</span>
<span class="line">bce</span>
<span class="line">cae</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要找出并删除 <strong>不是按字典序非严格递增排列的</strong> 列。在上面的例子（下标从 0 开始）中，列 0（<code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>）和列 2（<code>&#39;c&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;e&#39;</code>）都是按字典序非严格递增排列的，而列 1（<code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>, <code>&#39;a&#39;</code>）不是，所以要删除列 1 。</p><p>返回你需要删除的列数。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;cba&quot;,&quot;daf&quot;,&quot;ghi&quot;]</span>
<span class="line">输出：1</span>
<span class="line">解释：网格示意如下：</span>
<span class="line">  cba</span>
<span class="line">  daf</span>
<span class="line">  ghi</span>
<span class="line">列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;a&quot;,&quot;b&quot;]</span>
<span class="line">输出：0</span>
<span class="line">解释：网格示意如下：</span>
<span class="line">  a</span>
<span class="line">  b</span>
<span class="line">只有列 0 这一列，且已经按升序排列，所以不用删除任何列。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]</span>
<span class="line">输出：3</span>
<span class="line">解释：网格示意如下：</span>
<span class="line">  zyx</span>
<span class="line">  wvu</span>
<span class="line">  tsr</span>
<span class="line">所有 3 列都是非升序排列的，所以都要删除。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == strs.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= strs[i].length &lt;= 1000</code></li><li><code>strs[i]</code> 由小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>简单题简单做</p><p>外层循环列，内层循环每一行的字母</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int minDeletionSize(vector&lt;string&gt;&amp; strs) {</span>
<span class="line">        int n=strs.size();</span>
<span class="line">        int m=strs[0].size();</span>
<span class="line">        int ans=0;</span>
<span class="line">        for(int j=0;j&lt;m;j++){</span>
<span class="line">            for(int i=1;i&lt;n;i++){</span>
<span class="line">                if(strs[i-1][j]&gt;strs[i][j]){</span>
<span class="line">                    ans++;</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(1)</li></ul>`,20)]))}const r=n(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20251220.html","title":"944. 删列造序","lang":"zh-CN","frontmatter":{"date":"2025-12-20T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","字符串"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251220.md","excerpt":"\\n<p>给你由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p>\\n<p>这些字符串可以每个一行，排成一个网格。例如，<code>strs = [\\"abc\\", \\"bce\\", \\"cae\\"]</code> 可以排列为：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">abc</span>\\n<span class=\\"line\\">bce</span>\\n<span class=\\"line\\">cae</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,p as data};

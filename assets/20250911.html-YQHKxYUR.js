import{_ as n,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[i(`<h1 id="_2785-将字符串中的元音字母排序" tabindex="-1"><a class="header-anchor" href="#_2785-将字符串中的元音字母排序"><span><a href="https://leetcode.cn/problems/sort-vowels-in-a-string/" target="_blank" rel="noopener noreferrer">2785. 将字符串中的元音字母排序</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，将 <code>s</code> 中的元素重新 <strong>排列</strong> 得到新的字符串 <code>t</code> ，它满足：</p><ul><li>所有辅音字母都在原来的位置上。更正式的，如果满足 <code>0 &lt;= i &lt; s.length</code> 的下标 <code>i</code> 处的 <code>s[i]</code> 是个辅音字母，那么 <code>t[i] = s[i]</code> 。</li><li>元音字母都必须以他们的 <strong>ASCII</strong> 值按 <strong>非递减</strong> 顺序排列。更正式的，对于满足 <code>0 &lt;= i &lt; j &lt; s.length</code> 的下标 <code>i</code> 和 <code>j</code> ，如果 <code>s[i]</code> 和 <code>s[j]</code> 都是元音字母，那么 <code>t[i]</code> 的 ASCII 值不能大于 <code>t[j]</code> 的 ASCII 值。</li></ul><p>请你返回结果字母串。</p><p>元音字母为 <code>&#39;a&#39;</code> ，<code>&#39;e&#39;</code> ，<code>&#39;i&#39;</code> ，<code>&#39;o&#39;</code> 和 <code>&#39;u&#39;</code> ，它们可能是小写字母也可能是大写字母，辅音字母是除了这 5 个字母以外的所有字母。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;lEetcOde&quot;</span>
<span class="line">输出：&quot;lEOtcede&quot;</span>
<span class="line">解释：&#39;E&#39; ，&#39;O&#39; 和 &#39;e&#39; 是 s 中的元音字母，&#39;l&#39; ，&#39;t&#39; ，&#39;c&#39; 和 &#39;d&#39; 是所有的辅音。将元音字母按照 ASCII 值排序，辅音字母留在原地。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：s = &quot;lYmpH&quot;</span>
<span class="line">输出：&quot;lYmpH&quot;</span>
<span class="line">解释：s 中没有元音字母（s 中都为辅音字母），所以我们返回 &quot;lYmpH&quot; 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 105</code></li><li><code>s</code> 只包含英语字母表中的 <strong>大写</strong> 和 <strong>小写</strong> 字母。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>法1：模拟和排序</p><p>注意：set使用contains方法查找是否存在，针对string 的sort方法默认就是ascii码从小到大（非递减）排序</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    string sortVowels(string s) {</span>
<span class="line">        unordered_set&lt;char&gt; vowels={&#39;a&#39;,&#39;e&#39;,&#39;i&#39;,&#39;o&#39;,&#39;u&#39;,&#39;A&#39;,&#39;E&#39;,&#39;I&#39;,&#39;O&#39;,&#39;U&#39;};</span>
<span class="line">        string tmp;</span>
<span class="line">        for(char ch:s){</span>
<span class="line">            if(vowels.contains(ch)){</span>
<span class="line">                tmp.push_back(ch);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        sort(tmp.begin(),tmp.end());</span>
<span class="line">        int idx=0;</span>
<span class="line">        for(char &amp; ch:s){</span>
<span class="line">            if(vowels.contains(ch)){</span>
<span class="line">                ch=tmp[idx++];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return s;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn)</li><li>空间复杂度：O(n)</li></ul><p>法2：计数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    unordered_set&lt;char&gt; vowels = {&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;,</span>
<span class="line">                                  &#39;A&#39;, &#39;E&#39;, &#39;I&#39;, &#39;O&#39;, &#39;U&#39;};</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    string sortVowels(string s) {</span>
<span class="line">        vector&lt;int&gt; cnt(58, -1);</span>
<span class="line">        for (char ch : vowels) {</span>
<span class="line">            cnt[ch - &#39;A&#39;] = 0;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        for (char ch : s) {</span>
<span class="line">            int i = ch - &#39;A&#39;;</span>
<span class="line">            if (cnt[i] != -1) {</span>
<span class="line">                cnt[i]++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        int idx = 0;</span>
<span class="line">        for (char &amp;ch : s) {</span>
<span class="line">            int i = ch - &#39;A&#39;;</span>
<span class="line">            if (cnt[i] != -1) {</span>
<span class="line">                while (cnt[idx] &lt;= 0) {</span>
<span class="line">                    idx++;</span>
<span class="line">                }</span>
<span class="line">                ch = (char)(idx + &#39;A&#39;);</span>
<span class="line">                cnt[idx]--;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return s;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(n)</li></ul></li></ul>`,20)]))}const r=n(a,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20250911.html","title":"2785. 将字符串中的元音字母排序","lang":"zh-CN","frontmatter":{"date":"2025-09-11T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","排序"]},"headers":[],"git":{"updatedTime":1757585260000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4235d6a0c41346af806751ee9e505ed3d8985756","time":1757585260000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250911.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，将 <code>s</code> 中的元素重新 <strong>排列</strong> 得到新的字符串 <code>t</code> ，它满足：</p>\\n<ul>\\n<li>所有辅音字母都在原来的位置上。更正式的，如果满足 <code>0 &lt;= i &lt; s.length</code> 的下标 <code>i</code> 处的 <code>s[i]</code> 是个辅音字母，那么 <code>t[i] = s[i]</code> 。</li>\\n<li>元音字母都必须以他们的 <strong>ASCII</strong> 值按 <strong>非递减</strong> 顺序排列。更正式的，对于满足 <code>0 &lt;= i &lt; j &lt; s.length</code> 的下标 <code>i</code> 和 <code>j</code> ，如果 <code>s[i]</code> 和 <code>s[j]</code> 都是元音字母，那么 <code>t[i]</code> 的 ASCII 值不能大于 <code>t[j]</code> 的 ASCII 值。</li>\\n</ul>"}');export{r as comp,p as data};

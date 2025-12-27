import{_ as n,c as s,a as l,o as i}from"./app-Bpj5Mkzv.js";const a={};function o(d,e){return i(),s("div",null,e[0]||(e[0]=[l(`<h1 id="_966-元音拼写检查器" tabindex="-1"><a class="header-anchor" href="#_966-元音拼写检查器"><span><a href="https://leetcode.cn/problems/vowel-spellchecker/" target="_blank" rel="noopener noreferrer">966. 元音拼写检查器</a></span></a></h1><p>在给定单词列表 <code>wordlist</code> 的情况下，我们希望实现一个拼写检查器，将查询单词转换为正确的单词。</p><p>对于给定的查询单词 <code>query</code>，拼写检查器将会处理两类拼写错误：</p><ul><li><p>大小写：如果查询匹配单词列表中的某个单词（</p><p>不区分大小写</p><p>），则返回的正确单词与单词列表中的大小写相同。</p><ul><li>例如：<code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;YellOw&quot;</code>: <code>correct = &quot;yellow&quot;</code></li><li>例如：<code>wordlist = [&quot;Yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;Yellow&quot;</code></li><li>例如：<code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;yellow&quot;</code></li></ul></li><li><p>元音错误：如果在将查询单词中的元音</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>分别替换为任何元音后，能与单词列表中的单词匹配（</p><p>不区分大小写</p><p>），则返回的正确单词与单词列表中的匹配项大小写相同。</p><ul><li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yollow&quot;</code>: <code>correct = &quot;YellOw&quot;</code></li><li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yeellow&quot;</code>: <code>correct = &quot;&quot;</code> （无匹配项）</li><li>例如：<code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yllw&quot;</code>: <code>correct = &quot;&quot;</code> （无匹配项）</li></ul></li></ul><p>此外，拼写检查器还按照以下优先级规则操作：</p><ul><li>当查询完全匹配单词列表中的某个单词（<strong>区分大小写</strong>）时，应返回相同的单词。</li><li>当查询匹配到大小写问题的单词时，您应该返回单词列表中的第一个这样的匹配项。</li><li>当查询匹配到元音错误的单词时，您应该返回单词列表中的第一个这样的匹配项。</li><li>如果该查询在单词列表中没有匹配项，则应返回空字符串。</li></ul><p>给出一些查询 <code>queries</code>，返回一个单词列表 <code>answer</code>，其中 <code>answer[i]</code> 是由查询 <code>query = queries[i]</code> 得到的正确单词。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：wordlist = [&quot;KiTe&quot;,&quot;kite&quot;,&quot;hare&quot;,&quot;Hare&quot;], queries = [&quot;kite&quot;,&quot;Kite&quot;,&quot;KiTe&quot;,&quot;Hare&quot;,&quot;HARE&quot;,&quot;Hear&quot;,&quot;hear&quot;,&quot;keti&quot;,&quot;keet&quot;,&quot;keto&quot;]</span>
<span class="line">输出：[&quot;kite&quot;,&quot;KiTe&quot;,&quot;KiTe&quot;,&quot;Hare&quot;,&quot;hare&quot;,&quot;&quot;,&quot;&quot;,&quot;KiTe&quot;,&quot;&quot;,&quot;KiTe&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：wordlist = [&quot;yellow&quot;], queries = [&quot;YellOw&quot;]</span>
<span class="line">输出：[&quot;yellow&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= wordlist.length, queries.length &lt;= 5000</code></li><li><code>1 &lt;= wordlist[i].length, queries[i].length &lt;= 7</code></li><li><code>wordlist[i]</code> 和 <code>queries[i]</code> 只包含英文字母</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>该题解用于解决拼写检查问题，核心思路是通过三级匹配机制处理查询：首先检查精确匹配（完全相同的单词），若不匹配则检查大小写不敏感匹配（忽略大小写差异），若仍不匹配则检查元音不敏感匹配（忽略元音字母的差异）。为实现高效匹配，使用了三个数据结构：集合存储原始单词用于精确匹配，两个哈希表分别存储小写形式和元音替换形式到原始单词的映射，通过预处理单词列表构建这些映射关系，再依次对每个查询应用三级匹配规则，最终返回匹配结果。这种设计确保了查询处理的高效性和匹配规则的优先级顺序。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">    // 将字符串转换为全小写</span>
<span class="line">    string tolower_string(string s){</span>
<span class="line">        for(char&amp; c:s){</span>
<span class="line">            c=tolower(c); // 逐个字符转为小写</span>
<span class="line">        }</span>
<span class="line">        return s;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    // 将字符串中的元音字母(a,e,i,o,u)替换为&#39;?&#39;</span>
<span class="line">    string replace_vowels(string s){</span>
<span class="line">        for(char&amp;c :s){</span>
<span class="line">            // 检查是否为元音字母</span>
<span class="line">            if(c==&#39;a&#39;||c==&#39;e&#39;||c==&#39;i&#39;||c==&#39;o&#39;||c==&#39;u&#39;){</span>
<span class="line">                c=&#39;?&#39;; // 元音字母替换为&#39;?&#39;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return s;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">public:</span>
<span class="line">    vector&lt;string&gt; spellchecker(vector&lt;string&gt;&amp; wordlist, vector&lt;string&gt;&amp; queries) {</span>
<span class="line">        int n=wordlist.size();</span>
<span class="line">        </span>
<span class="line">        // 存储原始单词，用于精确匹配检查</span>
<span class="line">        unordered_set&lt;string&gt; origin(wordlist.begin(),wordlist.end());</span>
<span class="line">        </span>
<span class="line">        // 存储小写形式到原始单词的映射（用于大小写不敏感匹配）</span>
<span class="line">        unordered_map&lt;string,string&gt; lower_to_origin;</span>
<span class="line">        </span>
<span class="line">        // 存储替换元音后的小写形式到原始单词的映射（用于元音不敏感匹配）</span>
<span class="line">        unordered_map&lt;string,string&gt; vowel_to_origin;</span>
<span class="line"></span>
<span class="line">        // 从后往前遍历，确保前面的单词覆盖后面的（保留第一个出现的单词）</span>
<span class="line">        for(int i=n-1;i&gt;=0;i--){</span>
<span class="line">            string&amp; s=wordlist[i];</span>
<span class="line">            string lower=tolower_string(s);</span>
<span class="line">            lower_to_origin[lower]=s;  // 存储小写映射</span>
<span class="line">            // 先转小写再替换元音，存储元音替换后的映射</span>
<span class="line">            vowel_to_origin[replace_vowels(lower)]=s;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 处理每个查询</span>
<span class="line">        for(string&amp; q:queries){</span>
<span class="line">            // 1. 精确匹配：如果查询词在原始集合中，不做修改</span>
<span class="line">            if(origin.contains(q)){</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 2. 大小写不敏感匹配：转换为小写后查找</span>
<span class="line">            string lower=tolower_string(q);</span>
<span class="line">            auto it=lower_to_origin.find(lower);</span>
<span class="line">            if(it!=lower_to_origin.end()){</span>
<span class="line">                q=it-&gt;second; // 找到则替换为原始单词</span>
<span class="line">            }else{</span>
<span class="line">                // 3. 元音不敏感匹配：替换元音后查找</span>
<span class="line">                auto it=vowel_to_origin.find(replace_vowels(lower));</span>
<span class="line">                q=it!=vowel_to_origin.end()?it-&gt;second:&quot;&quot;; // 找到则替换，否则为空</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return queries;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(m+n) 字符串的总数</li><li>空间复杂度：O(n)</li></ul>`,18)]))}const t=n(a,[["render",o]]),r=JSON.parse(`{"path":"/leetcode/20250914.html","title":"966. 元音拼写检查器","lang":"zh-CN","frontmatter":{"date":"2025-09-14T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","哈希表","数组"]},"headers":[],"git":{"updatedTime":1757818141000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"76013c7d9d7450d00d90ae1fdc3177df58423740","time":1757818141000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250914.md","excerpt":"\\n<p>在给定单词列表 <code>wordlist</code> 的情况下，我们希望实现一个拼写检查器，将查询单词转换为正确的单词。</p>\\n<p>对于给定的查询单词 <code>query</code>，拼写检查器将会处理两类拼写错误：</p>\\n<ul>\\n<li>\\n<p>大小写：如果查询匹配单词列表中的某个单词（</p>\\n<p>不区分大小写</p>\\n<p>），则返回的正确单词与单词列表中的大小写相同。</p>\\n<ul>\\n<li>例如：<code>wordlist = [\\"yellow\\"]</code>, <code>query = \\"YellOw\\"</code>: <code>correct = \\"yellow\\"</code></li>\\n<li>例如：<code>wordlist = [\\"Yellow\\"]</code>, <code>query = \\"yellow\\"</code>: <code>correct = \\"Yellow\\"</code></li>\\n<li>例如：<code>wordlist = [\\"yellow\\"]</code>, <code>query = \\"yellow\\"</code>: <code>correct = \\"yellow\\"</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>元音错误：如果在将查询单词中的元音</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">('a', 'e', 'i', 'o', 'u')</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><p>分别替换为任何元音后，能与单词列表中的单词匹配（</p>\\n<p>不区分大小写</p>\\n<p>），则返回的正确单词与单词列表中的匹配项大小写相同。</p>\\n<ul>\\n<li>例如：<code>wordlist = [\\"YellOw\\"]</code>, <code>query = \\"yollow\\"</code>: <code>correct = \\"YellOw\\"</code></li>\\n<li>例如：<code>wordlist = [\\"YellOw\\"]</code>, <code>query = \\"yeellow\\"</code>: <code>correct = \\"\\"</code> （无匹配项）</li>\\n<li>例如：<code>wordlist = [\\"YellOw\\"]</code>, <code>query = \\"yllw\\"</code>: <code>correct = \\"\\"</code> （无匹配项）</li>\\n</ul>\\n</li>\\n</ul>"}`);export{t as comp,r as data};

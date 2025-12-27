import{_ as n,c as s,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(c,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_1935-可以输入的最大单词数" tabindex="-1"><a class="header-anchor" href="#_1935-可以输入的最大单词数"><span><a href="https://leetcode.cn/problems/maximum-number-of-words-you-can-type/" target="_blank" rel="noopener noreferrer">1935. 可以输入的最大单词数</a></span></a></h1><p>已解答</p><p>简单</p><p>相关标签</p><p><img src="https://static.leetcode.cn/cn-frontendx-assets/production/_next/static/images/lock-a6627e2c7fa0ce8bc117c109fb4e567d.svg" alt="premium lock icon">相关企业</p><p>提示</p><p>键盘出现了一些故障，有些字母键无法正常工作。而键盘上所有其他键都能够正常工作。</p><p>给你一个由若干单词组成的字符串 <code>text</code> ，单词间由单个空格组成（不含前导和尾随空格）；另有一个字符串 <code>brokenLetters</code> ，由所有已损坏的不同字母键组成，返回你可以使用此键盘完全输入的 <code>text</code> 中单词的数目。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：text = &quot;hello world&quot;, brokenLetters = &quot;ad&quot;</span>
<span class="line">输出：1</span>
<span class="line">解释：无法输入 &quot;world&quot; ，因为字母键 &#39;d&#39; 已损坏。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：text = &quot;leet code&quot;, brokenLetters = &quot;lt&quot;</span>
<span class="line">输出：1</span>
<span class="line">解释：无法输入 &quot;leet&quot; ，因为字母键 &#39;l&#39; 和 &#39;t&#39; 已损坏。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：text = &quot;leet code&quot;, brokenLetters = &quot;e&quot;</span>
<span class="line">输出：0</span>
<span class="line">解释：无法输入任何单词，因为字母键 &#39;e&#39; 已损坏。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text.length &lt;= 104</code></li><li><code>0 &lt;= brokenLetters.length &lt;= 26</code></li><li><code>text</code> 由若干用单个空格分隔的单词组成，且不含任何前导和尾随空格</li><li>每个单词仅由小写英文字母组成</li><li><code>brokenLetters</code> 由 <strong>互不相同</strong> 的小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>先构造unordered_set，可以用string的迭代器实现循环insert的效果。</p><p>判断时，使用count（返回是否存在，集合会去重）而不是find（返回的是迭代器）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int canBeTypedWords(string text, string brokenLetters) {</span>
<span class="line">        unordered_set&lt;char&gt; broken(brokenLetters.begin(),brokenLetters.end());</span>
<span class="line">        int ans=0;</span>
<span class="line">        bool check=true;</span>
<span class="line">        for(char ch:text){</span>
<span class="line">            if(ch==&#39; &#39;){ // 完成一个单词的检查，判断是否能拼出，check置为true处理下一个的单词</span>
<span class="line">                if(check){</span>
<span class="line">                    ans++;</span>
<span class="line">                }</span>
<span class="line">                check=true;</span>
<span class="line">            }else if(broken.count(ch)){</span>
<span class="line">                check=false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if(check){  // 最后一个单词后面没有空格，单独判断</span>
<span class="line">            ans++;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(m+n) 先遍历加到set，再遍历判断</li><li>空间复杂度：O(n)</li></ul>`,22)]))}const d=n(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250915.html","title":"1935. 可以输入的最大单词数","lang":"zh-CN","frontmatter":{"date":"2025-09-15T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","哈希表","数组"]},"headers":[],"git":{"updatedTime":1757899278000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"dd44ec3c59b777d4e324b910d16d5657ca499fc2","time":1757899278000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250915.md","excerpt":"\\n<p>已解答</p>\\n<p>简单</p>\\n<p>相关标签</p>\\n<p><img src=\\"https://static.leetcode.cn/cn-frontendx-assets/production/_next/static/images/lock-a6627e2c7fa0ce8bc117c109fb4e567d.svg\\" alt=\\"premium lock icon\\">相关企业</p>\\n<p>提示</p>\\n<p>键盘出现了一些故障，有些字母键无法正常工作。而键盘上所有其他键都能够正常工作。</p>\\n<p>给你一个由若干单词组成的字符串 <code>text</code> ，单词间由单个空格组成（不含前导和尾随空格）；另有一个字符串 <code>brokenLetters</code> ，由所有已损坏的不同字母键组成，返回你可以使用此键盘完全输入的 <code>text</code> 中单词的数目。</p>"}');export{d as comp,p as data};

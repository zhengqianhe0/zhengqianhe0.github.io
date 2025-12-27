import{_ as e,c as n,a,o}from"./app-Bpj5Mkzv.js";const i={};function l(d,s){return o(),n("div",null,s[0]||(s[0]=[a(`<h1 id="_2273-移除字母异位词后的结果数组" tabindex="-1"><a class="header-anchor" href="#_2273-移除字母异位词后的结果数组"><span><a href="https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams/" target="_blank" rel="noopener noreferrer">2273. 移除字母异位词后的结果数组</a></span></a></h1><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>words</code> ，其中 <code>words[i]</code> 由小写英文字符组成。</p><p>在一步操作中，需要选出任一下标 <code>i</code> ，从 <code>words</code> 中 <strong>删除</strong> <code>words[i]</code> 。其中下标 <code>i</code> 需要同时满足下述两个条件：</p><ol><li><code>0 &lt; i &lt; words.length</code></li><li><code>words[i - 1]</code> 和 <code>words[i]</code> 是 <strong>字母异位词</strong> 。</li></ol><p>只要可以选出满足条件的下标，就一直执行这个操作。</p><p>在执行所有操作后，返回 <code>words</code> 。可以证明，按任意顺序为每步操作选择下标都会得到相同的结果。</p><p><strong>字母异位词</strong> 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。例如，<code>&quot;dacb&quot;</code> 是 <code>&quot;abdc&quot;</code> 的一个字母异位词。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]</span>
<span class="line">输出：[&quot;abba&quot;,&quot;cd&quot;]</span>
<span class="line">解释：</span>
<span class="line">获取结果数组的方法之一是执行下述步骤：</span>
<span class="line">- 由于 words[2] = &quot;bbaa&quot; 和 words[1] = &quot;baba&quot; 是字母异位词，选择下标 2 并删除 words[2] 。</span>
<span class="line">  现在 words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。</span>
<span class="line">- 由于 words[1] = &quot;baba&quot; 和 words[0] = &quot;abba&quot; 是字母异位词，选择下标 1 并删除 words[1] 。</span>
<span class="line">  现在 words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;] 。</span>
<span class="line">- 由于 words[2] = &quot;cd&quot; 和 words[1] = &quot;cd&quot; 是字母异位词，选择下标 2 并删除 words[2] 。</span>
<span class="line">  现在 words = [&quot;abba&quot;,&quot;cd&quot;] 。</span>
<span class="line">无法再执行任何操作，所以 [&quot;abba&quot;,&quot;cd&quot;] 是最终答案。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</span>
<span class="line">输出：[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]</span>
<span class="line">解释：</span>
<span class="line">words 中不存在互为字母异位词的两个相邻字符串，所以无需执行任何操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>用一个临时变量保存当前排序后的字符串。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;string&gt; removeAnagrams(vector&lt;string&gt;&amp; words) {</span>
<span class="line">        string base=&quot;&quot;;</span>
<span class="line">        int k=0;</span>
<span class="line">        for(auto&amp; word:words){</span>
<span class="line">            string s=word;</span>
<span class="line">            sort(s.begin(),s.end());</span>
<span class="line">            if(s!=base){</span>
<span class="line">                base=s;</span>
<span class="line">                words[k]=word;</span>
<span class="line">                k++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        words.resize(k); // resize方法直接截取前k个元素，用长度而非下标指定</span>
<span class="line">        return words;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nmlogm) ，m为字符串数组中最长字符串的长度</li><li>空间复杂度：O(m)</li></ul>`,18)]))}const r=e(i,[["render",l]]),c=JSON.parse('{"path":"/leetcode/20251013.html","title":"2273. 移除字母异位词后的结果数组","lang":"zh-CN","frontmatter":{"date":"2025-10-13T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["哈希表","字符串","数组","排序"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251013.md","excerpt":"\\n<p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>words</code> ，其中 <code>words[i]</code> 由小写英文字符组成。</p>\\n<p>在一步操作中，需要选出任一下标 <code>i</code> ，从 <code>words</code> 中 <strong>删除</strong> <code>words[i]</code> 。其中下标 <code>i</code> 需要同时满足下述两个条件：</p>\\n<ol>\\n<li><code>0 &lt; i &lt; words.length</code></li>\\n<li><code>words[i - 1]</code> 和 <code>words[i]</code> 是 <strong>字母异位词</strong> 。</li>\\n</ol>"}');export{r as comp,c as data};

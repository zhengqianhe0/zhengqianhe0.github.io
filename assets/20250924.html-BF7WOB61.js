import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function r(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_166-分数到小数" tabindex="-1"><a class="header-anchor" href="#_166-分数到小数"><span><a href="https://leetcode.cn/problems/fraction-to-recurring-decimal/" target="_blank" rel="noopener noreferrer">166. 分数到小数</a></span></a></h1><p>给定两个整数，分别表示分数的分子 <code>numerator</code> 和分母 <code>denominator</code>，以 <strong>字符串形式返回小数</strong> 。</p><p>如果小数部分为循环小数，则将循环的部分括在括号内。</p><p>如果存在多个答案，只需返回 <strong>任意一个</strong> 。</p><p>对于所有给定的输入，<strong>保证</strong> 答案字符串的长度小于 <code>104</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numerator = 1, denominator = 2</span>
<span class="line">输出：&quot;0.5&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numerator = 2, denominator = 1</span>
<span class="line">输出：&quot;2&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numerator = 4, denominator = 333</span>
<span class="line">输出：&quot;0.(012)&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>-231 &lt;= numerator, denominator &lt;= 231 - 1</code></li><li><code>denominator != 0</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>怎么知道进入循环了？ 用一个哈希表记录，哈希表的 key 是余数 r，value 是这个余数对应着第几位小数。</p><p>计算商（添加到答案），更新 r 后：</p><p>如果 r 在哈希表中，说明有循环节，根据哈希表中记录的小数位置，可以得到循环节之前的小数，以及循环节的内容。 如果 r 不在哈希表中，往哈希表中插入 r 以及此时我们在算第几位小数。 特别地，如果 r=0，说明没有循环节，退出循环。</p><p>如果我们只看小数位数字，一个数字第二次出现时，我们不知道这是循环的开始还是巧合。但<strong>余数第二次出现时，我们确定后续会完全重复</strong>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    string fractionToDecimal(int numerator, int denominator) {</span>
<span class="line">        long long a = numerator, b = denominator;</span>
<span class="line">        string sign = a * b &lt; 0 ? &quot;-&quot; : &quot;&quot;;</span>
<span class="line">        a = abs(a); // 保证下面的计算过程不产生负数</span>
<span class="line">        b = abs(b);</span>
<span class="line"></span>
<span class="line">        // 计算整数部分 q 和初始余数 r</span>
<span class="line">        long long q = a / b, r = a % b;</span>
<span class="line">        if (r == 0) { // 没有小数部分</span>
<span class="line">            return sign + to_string(q);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        string ans = sign + to_string(q) + &quot;.&quot;;</span>
<span class="line">        unordered_map&lt;long long, int&gt; r_to_pos = {{r, ans.size()}}; // 记录初始余数对应位置</span>
<span class="line">        while (r) {</span>
<span class="line">            // 计算小数点后的数字 q，更新 r</span>
<span class="line">            r *= 10;</span>
<span class="line">            q = r / b;</span>
<span class="line">            r %= b;</span>
<span class="line">            ans += &#39;0&#39; + q;</span>
<span class="line">            if (r_to_pos.contains(r)) { // 有循环节</span>
<span class="line">                int pos = r_to_pos[r]; // 循环节的开始位置</span>
<span class="line">                return ans.substr(0, pos) + &quot;(&quot; + ans.substr(pos) + &quot;)&quot;;</span>
<span class="line">            }</span>
<span class="line">            r_to_pos[r] = ans.size(); // 记录余数对应位置</span>
<span class="line">        }</span>
<span class="line">        return ans; // 有限小数</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li><p>时间复杂度：O(n)，n为答案字符串的长度</p></li><li><p>空间复杂度：O(n)</p></li></ul>`,21)]))}const p=s(l,[["render",r]]),o=JSON.parse('{"path":"/leetcode/20250924.html","title":"166. 分数到小数","lang":"zh-CN","frontmatter":{"date":"2025-09-24T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","哈希表","数学"]},"headers":[],"git":{"updatedTime":1758867108000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"90ec2b63d55c4f5efc060efdc1440497f6b4b19b","time":1758867108000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250924.md","excerpt":"\\n<p>给定两个整数，分别表示分数的分子 <code>numerator</code> 和分母 <code>denominator</code>，以 <strong>字符串形式返回小数</strong> 。</p>\\n<p>如果小数部分为循环小数，则将循环的部分括在括号内。</p>\\n<p>如果存在多个答案，只需返回 <strong>任意一个</strong> 。</p>\\n<p>对于所有给定的输入，<strong>保证</strong> 答案字符串的长度小于 <code>104</code> 。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：numerator = 1, denominator = 2</span>\\n<span class=\\"line\\">输出：\\"0.5\\"</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,o as data};

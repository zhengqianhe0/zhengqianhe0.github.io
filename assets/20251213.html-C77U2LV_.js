import{_ as n,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function o(c,s){return l(),e("div",null,s[0]||(s[0]=[i(`<h1 id="_3606-优惠券校验器" tabindex="-1"><a class="header-anchor" href="#_3606-优惠券校验器"><span><a href="https://leetcode.cn/problems/coupon-code-validator/" target="_blank" rel="noopener noreferrer">3606. 优惠券校验器</a></span></a></h1><p>给你三个长度为 <code>n</code> 的数组，分别描述 <code>n</code> 个优惠券的属性：<code>code</code>、<code>businessLine</code> 和 <code>isActive</code>。其中，第 <code>i</code> 个优惠券具有以下属性：</p><ul><li><code>code[i]</code>：一个 <strong>字符串</strong>，表示优惠券的标识符。</li><li><code>businessLine[i]</code>：一个 <strong>字符串</strong>，表示优惠券所属的业务类别。</li><li><code>isActive[i]</code>：一个 <strong>布尔值</strong>，表示优惠券是否当前有效。</li></ul><p>当以下所有条件都满足时，优惠券被认为是 <strong>有效的</strong> ：</p><ol><li><code>code[i]</code> 不能为空，并且仅由字母数字字符（a-z、A-Z、0-9）和下划线（<code>_</code>）组成。</li><li><code>businessLine[i]</code> 必须是以下四个类别之一：<code>&quot;electronics&quot;</code>、<code>&quot;grocery&quot;</code>、<code>&quot;pharmacy&quot;</code>、<code>&quot;restaurant&quot;</code>。</li><li><code>isActive[i]</code> 为 <strong>true</strong> 。</li></ol><p>返回所有 <strong>有效优惠券的标识符</strong> 组成的数组，按照以下规则排序：</p><ul><li>先按照其 <strong>businessLine</strong> 的顺序排序：<code>&quot;electronics&quot;</code>、<code>&quot;grocery&quot;</code>、<code>&quot;pharmacy&quot;</code>、<code>&quot;restaurant&quot;</code>。</li><li>在每个类别内，再按照 **标识符的字典序（升序）**排序。</li></ul><p><strong>示例 1：</strong></p><p><strong>输入：</strong> code = [&quot;SAVE20&quot;,&quot;&quot;,&quot;PHARMA5&quot;,&quot;SAVE@20&quot;], businessLine = [&quot;restaurant&quot;,&quot;grocery&quot;,&quot;pharmacy&quot;,&quot;restaurant&quot;], isActive = [true,true,true,true]</p><p><strong>输出：</strong> [&quot;PHARMA5&quot;,&quot;SAVE20&quot;]</p><p><strong>解释：</strong></p><ul><li>第一个优惠券有效。</li><li>第二个优惠券的标识符为空（无效）。</li><li>第三个优惠券有效。</li><li>第四个优惠券的标识符包含特殊字符 <code>@</code>（无效）。</li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> code = [&quot;GROCERY15&quot;,&quot;ELECTRONICS_50&quot;,&quot;DISCOUNT10&quot;], businessLine = [&quot;grocery&quot;,&quot;electronics&quot;,&quot;invalid&quot;], isActive = [false,true,true]</p><p><strong>输出：</strong> [&quot;ELECTRONICS_50&quot;]</p><p><strong>解释：</strong></p><ul><li>第一个优惠券无效，因为它未激活。</li><li>第二个优惠券有效。</li><li>第三个优惠券无效，因为其业务类别无效。</li></ul><p><strong>提示：</strong></p><ul><li><code>n == code.length == businessLine.length == isActive.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>0 &lt;= code[i].length, businessLine[i].length &lt;= 100</code></li><li><code>code[i]</code> 和 <code>businessLine[i]</code> 由可打印的 ASCII 字符组成。</li><li><code>isActive[i]</code> 的值为 <code>true</code> 或 <code>false</code>。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>哈希表辅助映射，排序</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">unordered_map&lt;string, int&gt; BUSINESS_LINE_TO_CATEGORY = {</span>
<span class="line">    {&quot;electronics&quot;, 0},</span>
<span class="line">    {&quot;grocery&quot;, 1},</span>
<span class="line">    {&quot;pharmacy&quot;, 2},</span>
<span class="line">    {&quot;restaurant&quot;, 3},</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">    // 检查字符串是否非空，只包含字母、数字和下划线</span>
<span class="line">    bool is_valid(const string&amp; s) {</span>
<span class="line">        for (char c : s) {</span>
<span class="line">            if (c != &#39;_&#39; &amp;&amp; !isalnum(c)) {</span>
<span class="line">                return false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return !s.empty();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    vector&lt;string&gt; validateCoupons(vector&lt;string&gt;&amp; code, vector&lt;string&gt;&amp; businessLine, vector&lt;bool&gt;&amp; isActive) {</span>
<span class="line">        vector&lt;string&gt; groups[4];</span>
<span class="line">        for (int i = 0; i &lt; code.size(); i++) {</span>
<span class="line">            string&amp; s = code[i];</span>
<span class="line">            auto it = BUSINESS_LINE_TO_CATEGORY.find(businessLine[i]);</span>
<span class="line">            if (it != BUSINESS_LINE_TO_CATEGORY.end() &amp;&amp; isActive[i] &amp;&amp; is_valid(s)) {</span>
<span class="line">                groups[it-&gt;second].push_back(s); // 相同类别的优惠码分到同一组</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;string&gt; ans;</span>
<span class="line">        for (auto&amp; g : groups) {</span>
<span class="line">            ranges::sort(g); // 每一组内部排序</span>
<span class="line">            ans.insert(ans.end(), g.begin(), g.end());</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(Llogn)</li><li>空间复杂度：O(n)</li></ul>`,24)]))}const d=n(a,[["render",o]]),r=JSON.parse('{"path":"/leetcode/20251213.html","title":"3606. 优惠券校验器","lang":"zh-CN","frontmatter":{"date":"2025-12-13T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","哈希表","排序"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251213.md","excerpt":"\\n<p>给你三个长度为 <code>n</code> 的数组，分别描述 <code>n</code> 个优惠券的属性：<code>code</code>、<code>businessLine</code> 和 <code>isActive</code>。其中，第 <code>i</code> 个优惠券具有以下属性：</p>\\n<ul>\\n<li><code>code[i]</code>：一个 <strong>字符串</strong>，表示优惠券的标识符。</li>\\n<li><code>businessLine[i]</code>：一个 <strong>字符串</strong>，表示优惠券所属的业务类别。</li>\\n<li><code>isActive[i]</code>：一个 <strong>布尔值</strong>，表示优惠券是否当前有效。</li>\\n</ul>"}');export{d as comp,r as data};

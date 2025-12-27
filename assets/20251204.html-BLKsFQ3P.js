import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_2211-统计道路上的碰撞次数" tabindex="-1"><a class="header-anchor" href="#_2211-统计道路上的碰撞次数"><span><a href="https://leetcode.cn/problems/count-collisions-on-a-road/" target="_blank" rel="noopener noreferrer">2211. 统计道路上的碰撞次数</a></span></a></h1><p>在一条无限长的公路上有 <code>n</code> 辆汽车正在行驶。汽车按从左到右的顺序按从 <code>0</code> 到 <code>n - 1</code> 编号，每辆车都在一个 <strong>独特的</strong> 位置。</p><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>directions</code> ，长度为 <code>n</code> 。<code>directions[i]</code> 可以是 <code>&#39;L&#39;</code>、<code>&#39;R&#39;</code> 或 <code>&#39;S&#39;</code> 分别表示第 <code>i</code> 辆车是向 <strong>左</strong> 、向 <strong>右</strong> 或者 <strong>停留</strong> 在当前位置。每辆车移动时 <strong>速度相同</strong> 。</p><p>碰撞次数可以按下述方式计算：</p><ul><li>当两辆移动方向 <strong>相反</strong> 的车相撞时，碰撞次数加 <code>2</code> 。</li><li>当一辆移动的车和一辆静止的车相撞时，碰撞次数加 <code>1</code> 。</li></ul><p>碰撞发生后，涉及的车辆将无法继续移动并停留在碰撞位置。除此之外，汽车不能改变它们的状态或移动方向。</p><p>返回在这条道路上发生的 <strong>碰撞总次数</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：directions = &quot;RLRSLL&quot;</span>
<span class="line">输出：5</span>
<span class="line">解释：</span>
<span class="line">将会在道路上发生的碰撞列出如下：</span>
<span class="line">- 车 0 和车 1 会互相碰撞。由于它们按相反方向移动，碰撞数量变为 0 + 2 = 2 。</span>
<span class="line">- 车 2 和车 3 会互相碰撞。由于 3 是静止的，碰撞数量变为 2 + 1 = 3 。</span>
<span class="line">- 车 3 和车 4 会互相碰撞。由于 3 是静止的，碰撞数量变为 3 + 1 = 4 。</span>
<span class="line">- 车 4 和车 5 会互相碰撞。在车 4 和车 3 碰撞之后，车 4 会待在碰撞位置，接着和车 5 碰撞。碰撞数量变为 4 + 1 = 5 。</span>
<span class="line">因此，将会在道路上发生的碰撞总次数是 5 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：directions = &quot;LLRR&quot;</span>
<span class="line">输出：0</span>
<span class="line">解释：</span>
<span class="line">不存在会发生碰撞的车辆。因此，将会在道路上发生的碰撞总次数是 0 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= directions.length &lt;= 105</code></li><li><code>directions[i]</code> 的值为 <code>&#39;L&#39;</code>、<code>&#39;R&#39;</code> 或 <code>&#39;S&#39;</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>脑筋急转弯</p><p>理解题意</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countCollisions(string s) { </span>
<span class="line">        int n = s.size();</span>
<span class="line"></span>
<span class="line">        // 前缀向左的车不会发生碰撞</span>
<span class="line">        int l = 0;</span>
<span class="line">        while (l &lt; n &amp;&amp; s[l] == &#39;L&#39;) {</span>
<span class="line">            l++;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 后缀向右的车不会发生碰撞</span>
<span class="line">        int r = n; </span>
<span class="line">        while (r &gt; l &amp;&amp; s[r - 1] == &#39;R&#39;) {</span>
<span class="line">            r--;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 剩下非静止的车必然会碰撞</span>
<span class="line">        int cnt = 0; </span>
<span class="line">        for (int i = l; i &lt; r; i++) {</span>
<span class="line">            cnt += s[i] != &#39;S&#39;;</span>
<span class="line">        }</span>
<span class="line">        return cnt;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,19)]))}const o=s(l,[["render",c]]),t=JSON.parse(`{"path":"/leetcode/20251204.html","title":"2211. 统计道路上的碰撞次数","lang":"zh-CN","frontmatter":{"date":"2025-12-04T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["栈","字符串","模拟"]},"headers":[],"git":{"updatedTime":1766800992000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"f7994bdc2b7d79487139c25b9441948e02916a3e","time":1766800992000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251204.md","excerpt":"\\n<p>在一条无限长的公路上有 <code>n</code> 辆汽车正在行驶。汽车按从左到右的顺序按从 <code>0</code> 到 <code>n - 1</code> 编号，每辆车都在一个 <strong>独特的</strong> 位置。</p>\\n<p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>directions</code> ，长度为 <code>n</code> 。<code>directions[i]</code> 可以是 <code>'L'</code>、<code>'R'</code> 或 <code>'S'</code> 分别表示第 <code>i</code> 辆车是向 <strong>左</strong> 、向 <strong>右</strong> 或者 <strong>停留</strong> 在当前位置。每辆车移动时 <strong>速度相同</strong> 。</p>"}`);export{o as comp,t as data};

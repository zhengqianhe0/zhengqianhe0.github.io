import{_ as e,c as s,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function c(r,n){return a(),s("div",null,n[0]||(n[0]=[i(`<h1 id="_3147-从魔法师身上吸取的最大能量" tabindex="-1"><a class="header-anchor" href="#_3147-从魔法师身上吸取的最大能量"><span><a href="https://leetcode.cn/problems/taking-maximum-energy-from-the-mystic-dungeon/" target="_blank" rel="noopener noreferrer">3147. 从魔法师身上吸取的最大能量</a></span></a></h1><p>在神秘的地牢中，<code>n</code> 个魔法师站成一排。每个魔法师都拥有一个属性，这个属性可以给你提供能量。有些魔法师可能会给你负能量，即从你身上吸取能量。</p><p>你被施加了一种诅咒，当你从魔法师 <code>i</code> 处吸收能量后，你将被立即传送到魔法师 <code>(i + k)</code> 处。这一过程将重复进行，直到你到达一个不存在 <code>(i + k)</code> 的魔法师为止。</p><p>换句话说，你将选择一个起点，然后以 <code>k</code> 为间隔跳跃，直到到达魔法师序列的末端，<strong>在过程中吸收所有的能量</strong>。</p><p>给定一个数组 <code>energy</code> 和一个整数<code>k</code>，返回你能获得的 <strong>最大</strong> 能量。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> energy = [5,2,-10,-5,1], k = 3</p><p><strong>输出：</strong> 3</p><p>**解释：**可以从魔法师 1 开始，吸收能量 2 + 1 = 3。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> energy = [-2,-3,-1], k = 2</p><p><strong>输出：</strong> -1</p><p>**解释：**可以从魔法师 2 开始，吸收能量 -1。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= energy.length &lt;= 105</code></li><li><code>-1000 &lt;= energy[i] &lt;= 1000</code></li><li><code>1 &lt;= k &lt;= energy.length - 1</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>根据题意，所有的出口都在末尾k个。</p><p>因此，计算所有出口的后缀和，找到最大的那个。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maximumEnergy(vector&lt;int&gt;&amp; energy, int k) {</span>
<span class="line">        int n=energy.size();</span>
<span class="line">        int ans=INT_MIN;</span>
<span class="line">        for(int i=n-k;i&lt;n;i++){</span>
<span class="line">            int suf_sum=0;</span>
<span class="line">            for(int j=i;j&gt;=0;j-=k){</span>
<span class="line">                suf_sum+=energy[j];</span>
<span class="line">                ans=max(ans,suf_sum);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 另一种写法：直接原地计算所有元素的后缀和，找到最大的一个。先计算后面的可以实现覆盖。</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maximumEnergy(vector&lt;int&gt;&amp; energy, int k) {</span>
<span class="line">        int n = energy.size();</span>
<span class="line">        for (int i = n - k - 1; i &gt;= 0; i--) {</span>
<span class="line">            energy[i] += energy[i + k];</span>
<span class="line">        }</span>
<span class="line">        return ranges::max(energy);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,21)]))}const d=e(l,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251010.html","title":"3147. 从魔法师身上吸取的最大能量","lang":"zh-CN","frontmatter":{"date":"2025-10-10T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["前缀和","模拟","数组"]},"headers":[],"git":{"updatedTime":1760063627000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"ab2305f756bd327dc62655e986f32036964e1996","time":1760063627000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251010.md","excerpt":"\\n<p>在神秘的地牢中，<code>n</code> 个魔法师站成一排。每个魔法师都拥有一个属性，这个属性可以给你提供能量。有些魔法师可能会给你负能量，即从你身上吸取能量。</p>\\n<p>你被施加了一种诅咒，当你从魔法师 <code>i</code> 处吸收能量后，你将被立即传送到魔法师 <code>(i + k)</code> 处。这一过程将重复进行，直到你到达一个不存在 <code>(i + k)</code> 的魔法师为止。</p>\\n<p>换句话说，你将选择一个起点，然后以 <code>k</code> 为间隔跳跃，直到到达魔法师序列的末端，<strong>在过程中吸收所有的能量</strong>。</p>"}');export{d as comp,p as data};

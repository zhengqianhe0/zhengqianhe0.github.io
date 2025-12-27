import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2561-重排水果" tabindex="-1"><a class="header-anchor" href="#_2561-重排水果"><span><a href="https://leetcode.cn/problems/rearranging-fruits/" target="_blank" rel="noopener noreferrer">2561. 重排水果</a></span></a></h1><p>你有两个果篮，每个果篮中有 <code>n</code> 个水果。给你两个下标从 <strong>0</strong> 开始的整数数组 <code>basket1</code> 和 <code>basket2</code> ，用以表示两个果篮中每个水果的交换成本。你想要让两个果篮相等。为此，可以根据需要多次执行下述操作：</p><ul><li>选中两个下标 <code>i</code> 和 <code>j</code> ，并交换 <code>basket1</code> 中的第 <code>i</code> 个水果和 <code>basket2</code> 中的第 <code>j</code> 个水果。</li><li>交换的成本是 <code>min(basket1i,basket2j)</code> 。</li></ul><p>根据果篮中水果的成本进行排序，如果排序后结果完全相同，则认为两个果篮相等。</p><p>返回使两个果篮相等的最小交换成本，如果无法使两个果篮相等，则返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：basket1 = [4,2,2,2], basket2 = [1,4,1,2]</span>
<span class="line">输出：1</span>
<span class="line">解释：交换 basket1 中下标为 1 的水果和 basket2 中下标为 0 的水果，交换的成本为 1 。此时，basket1 = [4,1,2,2] 且 basket2 = [2,4,1,2] 。重排两个数组，发现二者相等。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：basket1 = [2,3,4,1], basket2 = [3,2,5,1]</span>
<span class="line">输出：-1</span>
<span class="line">解释：可以证明无法使两个果篮相等。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>basket1.length == bakste2.length</code></li><li><code>1 &lt;= basket1.length &lt;= 105</code></li><li><code>1 &lt;= basket1i,basket2i &lt;= 109</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>首先用哈希表遍历两个数组，数组1增加，数组2减少。最后数组里count的绝对值是相差的水果数。</p><p>然后建立一个需要交换的水果的数组。每一类水果把一半换到另一个数组即可。</p><p>根据贪心思想，只需要对交换数组中较小的一半进行操作（该操作限定了总交换次数，即操作了较小的一半一定完成了整体的交换任务。这也表示出了并不需要关注每次交换中较大的一方是多少，因为并不参与计算）。</p><p>交换的成本：当前用最小值的水果去换最大值的/借助全局最小值进行两次交换。取更小的一个加到统计结果。</p><p><strong>复杂度分析：</strong></p><ul><li>时间复杂度：<em>O</em>(<em>n²</em>)，二位数组遍历。</li><li>空间复杂度：<em>O</em>(1)。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    long long minCost(vector&lt;int&gt;&amp; basket1, vector&lt;int&gt;&amp; basket2) {</span>
<span class="line">        unordered_map&lt;int,int&gt;counts;</span>
<span class="line">        long long min_val=2e9+7;</span>
<span class="line">        for(int fruit:basket1){</span>
<span class="line">            counts[fruit]++;</span>
<span class="line">            min_val=min(min_val,(long long)fruit);</span>
<span class="line">        }</span>
<span class="line">        for(int fruit:basket2){</span>
<span class="line">            counts[fruit]--;</span>
<span class="line">            min_val=min(min_val,(long long)fruit);</span>
<span class="line">        }</span>
<span class="line">        vector&lt;int&gt; to_swap;</span>
<span class="line"></span>
<span class="line">        for(auto const&amp; [fruit,count]:counts){</span>
<span class="line">            if(count%2!=0){</span>
<span class="line">                return -1;</span>
<span class="line">            }</span>
<span class="line">            int num_to_move=abs(count)/2;</span>
<span class="line">            for(int i=0;i&lt;num_to_move;i++){</span>
<span class="line">                to_swap.push_back(fruit);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        sort(to_swap.begin(),to_swap.end());</span>
<span class="line">        long long total_cost=0;</span>
<span class="line">        int k=to_swap.size()/2;</span>
<span class="line">        for(int i=0;i&lt;k;i++){</span>
<span class="line">            total_cost+=min((long long)to_swap[i],2LL*min_val);</span>
<span class="line">        }</span>
<span class="line">        return total_cost;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const o=s(l,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20250802.html","title":"2561. 重排水果","lang":"zh-CN","frontmatter":{"date":"2025-08-02T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["贪心","数组","哈希表","排序"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"d36f539733d55457ab31e46e03e735503dfa5353","time":1754108614000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250802.md","excerpt":"\\n<p>你有两个果篮，每个果篮中有 <code>n</code> 个水果。给你两个下标从 <strong>0</strong> 开始的整数数组 <code>basket1</code> 和 <code>basket2</code> ，用以表示两个果篮中每个水果的交换成本。你想要让两个果篮相等。为此，可以根据需要多次执行下述操作：</p>\\n<ul>\\n<li>选中两个下标 <code>i</code> 和 <code>j</code> ，并交换 <code>basket1</code> 中的第 <code>i</code> 个水果和 <code>basket2</code> 中的第 <code>j</code> 个水果。</li>\\n<li>交换的成本是 <code>min(basket1i,basket2j)</code> 。</li>\\n</ul>"}');export{o as comp,r as data};

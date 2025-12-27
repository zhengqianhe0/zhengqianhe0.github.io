import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_904-水果成篮" tabindex="-1"><a class="header-anchor" href="#_904-水果成篮"><span><a href="https://leetcode.cn/problems/fruit-into-baskets/" target="_blank" rel="noopener noreferrer">904. 水果成篮</a></span></a></h1><p>你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 <code>fruits</code> 表示，其中 <code>fruits[i]</code> 是第 <code>i</code> 棵树上的水果 <strong>种类</strong> 。</p><p>你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：</p><ul><li>你只有 <strong>两个</strong> 篮子，并且每个篮子只能装 <strong>单一类型</strong> 的水果。每个篮子能够装的水果总量没有限制。</li><li>你可以选择任意一棵树开始采摘，你必须从 <strong>每棵</strong> 树（包括开始采摘的树）上 <strong>恰好摘一个水果</strong> 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。</li><li>一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。</li></ul><p>给你一个整数数组 <code>fruits</code> ，返回你可以收集的水果的 <strong>最大</strong> 数目。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [1,2,1]</span>
<span class="line">输出：3</span>
<span class="line">解释：可以采摘全部 3 棵树。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [0,1,2,2]</span>
<span class="line">输出：3</span>
<span class="line">解释：可以采摘 [1,2,2] 这三棵树。</span>
<span class="line">如果从第一棵树开始采摘，则只能采摘 [0,1] 这两棵树。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [1,2,3,2,2]</span>
<span class="line">输出：4</span>
<span class="line">解释：可以采摘 [2,3,2,2] 这四棵树。</span>
<span class="line">如果从第一棵树开始采摘，则只能采摘 [1,2] 这两棵树。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：fruits = [3,3,3,1,2,1,1,2,3,3,4]</span>
<span class="line">输出：5</span>
<span class="line">解释：可以采摘 [1,2,1,1,2] 这五棵树。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= fruits.length &lt;= 105</code></li><li><code>0 &lt;= fruits[i] &lt; fruits.length</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>滑动窗口。用哈希表统计当前窗口内的水果种类和个数。</p><p>滑动时，先滑动右指针，当超过2个种类时，再移动左指针找到合法的位置。</p><p>窗口滑动一次，需要更新左右的水果数目。特别的，当左窗口减到0时，删去当前的果篮占用。</p><p>每次计算max。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int totalFruit(vector&lt;int&gt;&amp; fruits) {</span>
<span class="line">        int n=fruits.size();</span>
<span class="line">        unordered_map&lt;int,int&gt; cnt;</span>
<span class="line"></span>
<span class="line">        int left=0,ans=0;</span>
<span class="line">        for(int right=0;right&lt;n;++right){</span>
<span class="line">            ++cnt[fruits[right]];</span>
<span class="line">            while(cnt.size()&gt;2){</span>
<span class="line">                auto it=cnt.find(fruits[left]);</span>
<span class="line">                --it-&gt;second;</span>
<span class="line">                if(it-&gt;second==0){</span>
<span class="line">                    cnt.erase(it);</span>
<span class="line">                }</span>
<span class="line">                ++left;</span>
<span class="line">            }</span>
<span class="line">            ans=max(ans,right-left+1);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><p>时间复杂度：O(n).</p><p>空间复杂度：O(1)。</p>`,24)]))}const c=s(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250804.html","title":"904. 水果成篮","lang":"zh-CN","frontmatter":{"date":"2025-08-04T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["哈希表","数组","滑动窗口"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"fe0e3caa767126240897b6aae25bcdfbb072cc45","time":1754355094000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"},{"hash":"766f321c73203843283d4cff9e6578b4a1778fd2","time":1754266708000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250804.md","excerpt":"\\n<p>你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 <code>fruits</code> 表示，其中 <code>fruits[i]</code> 是第 <code>i</code> 棵树上的水果 <strong>种类</strong> 。</p>\\n<p>你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：</p>\\n<ul>\\n<li>你只有 <strong>两个</strong> 篮子，并且每个篮子只能装 <strong>单一类型</strong> 的水果。每个篮子能够装的水果总量没有限制。</li>\\n<li>你可以选择任意一棵树开始采摘，你必须从 <strong>每棵</strong> 树（包括开始采摘的树）上 <strong>恰好摘一个水果</strong> 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。</li>\\n<li>一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。</li>\\n</ul>"}');export{c as comp,p as data};

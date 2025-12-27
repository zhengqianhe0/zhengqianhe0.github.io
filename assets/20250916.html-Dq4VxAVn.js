import{_ as s,c as e,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function t(r,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2197-替换数组中的非互质数" tabindex="-1"><a class="header-anchor" href="#_2197-替换数组中的非互质数"><span><a href="https://leetcode.cn/problems/replace-non-coprime-numbers-in-array/" target="_blank" rel="noopener noreferrer">2197. 替换数组中的非互质数</a></span></a></h1><p>给你一个整数数组 <code>nums</code> 。请你对数组执行下述操作：</p><ol><li>从 <code>nums</code> 中找出 <strong>任意</strong> 两个 <strong>相邻</strong> 的 <strong>非互质</strong> 数。</li><li>如果不存在这样的数，<strong>终止</strong> 这一过程。</li><li>否则，删除这两个数，并 <strong>替换</strong> 为它们的 <strong>最小公倍数</strong>（Least Common Multiple，LCM）。</li><li>只要还能找出两个相邻的非互质数就继续 <strong>重复</strong> 这一过程。</li></ol><p>返回修改后得到的 <strong>最终</strong> 数组。可以证明的是，以 <strong>任意</strong> 顺序替换相邻的非互质数都可以得到相同的结果。</p><p>生成的测试用例可以保证最终数组中的值 <strong>小于或者等于</strong> <code>108</code> 。</p><p>两个数字 <code>x</code> 和 <code>y</code> 满足 <strong>非互质数</strong> 的条件是：<code>GCD(x, y) &gt; 1</code> ，其中 <code>GCD(x, y)</code> 是 <code>x</code> 和 <code>y</code> 的 <strong>最大公约数</strong> 。</p><p><strong>示例 1 ：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [6,4,3,2,7,6,2]</span>
<span class="line">输出：[12,7,6]</span>
<span class="line">解释：</span>
<span class="line">- (6, 4) 是一组非互质数，且 LCM(6, 4) = 12 。得到 nums = [12,3,2,7,6,2] 。</span>
<span class="line">- (12, 3) 是一组非互质数，且 LCM(12, 3) = 12 。得到 nums = [12,2,7,6,2] 。</span>
<span class="line">- (12, 2) 是一组非互质数，且 LCM(12, 2) = 12 。得到 nums = [12,7,6,2] 。</span>
<span class="line">- (6, 2) 是一组非互质数，且 LCM(6, 2) = 6 。得到 nums = [12,7,6] 。</span>
<span class="line">现在，nums 中不存在相邻的非互质数。</span>
<span class="line">因此，修改后得到的最终数组是 [12,7,6] 。</span>
<span class="line">注意，存在其他方法可以获得相同的最终数组。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2 ：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,2,1,1,3,3,3]</span>
<span class="line">输出：[2,1,1,3]</span>
<span class="line">解释：</span>
<span class="line">- (3, 3) 是一组非互质数，且 LCM(3, 3) = 3 。得到 nums = [2,2,1,1,3,3] 。</span>
<span class="line">- (3, 3) 是一组非互质数，且 LCM(3, 3) = 3 。得到 nums = [2,2,1,1,3] 。</span>
<span class="line">- (2, 2) 是一组非互质数，且 LCM(2, 2) = 2 。得到 nums = [2,1,1,3] 。</span>
<span class="line">现在，nums 中不存在相邻的非互质数。 </span>
<span class="line">因此，修改后得到的最终数组是 [2,1,1,3] 。 </span>
<span class="line">注意，存在其他方法可以获得相同的最终数组。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>1 &lt;= nums[i] &lt;= 105</code></li><li>生成的测试用例可以保证最终数组中的值 <strong>小于或者等于</strong> <code>108</code> 。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>数学结论已在题目中给出，任意顺序合并都可以得到一样的结果。</p><p>模拟操作，用一个栈模拟从左到右检查。</p><p>用到vector模拟栈，以尾部作为栈顶，用push back和pop back操作，back访问栈顶，empty判空。</p><p>while循环保证了每次新加入元素后完整的向左传播，让栈内两两相邻的元素互质。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; replaceNonCoprimes(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        vector&lt;int&gt; st;</span>
<span class="line">        for(int x:nums){</span>
<span class="line">            while(!st.empty()&amp;&amp;gcd(x,st.back())&gt;1){</span>
<span class="line">                x=lcm(x,st.back());</span>
<span class="line">                st.pop_back();</span>
<span class="line">            }</span>
<span class="line">            st.push_back(x);</span>
<span class="line">        }</span>
<span class="line">        return st;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogC) 遍历数组，lcm的最坏情况是logC，C为最大的常数</li><li>空间复杂度：O(n)</li></ul>`,20)]))}const d=s(i,[["render",t]]),o=JSON.parse('{"path":"/leetcode/20250916.html","title":"2197. 替换数组中的非互质数","lang":"zh-CN","frontmatter":{"date":"2025-09-16T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["字符串","哈希表","数组"]},"headers":[],"git":{"updatedTime":1757989748000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"5b6bec5fa3c3bb00b602d6310f99245c1460651a","time":1757989748000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250916.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code> 。请你对数组执行下述操作：</p>\\n<ol>\\n<li>从 <code>nums</code> 中找出 <strong>任意</strong> 两个 <strong>相邻</strong> 的 <strong>非互质</strong> 数。</li>\\n<li>如果不存在这样的数，<strong>终止</strong> 这一过程。</li>\\n<li>否则，删除这两个数，并 <strong>替换</strong> 为它们的 <strong>最小公倍数</strong>（Least Common Multiple，LCM）。</li>\\n<li>只要还能找出两个相邻的非互质数就继续 <strong>重复</strong> 这一过程。</li>\\n</ol>"}');export{d as comp,o as data};

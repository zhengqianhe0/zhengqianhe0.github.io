import{_ as e,c as s,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function t(c,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_1518-换水问题" tabindex="-1"><a class="header-anchor" href="#_1518-换水问题"><span><a href="https://leetcode.cn/problems/water-bottles/" target="_blank" rel="noopener noreferrer">1518. 换水问题</a></span></a></h1><p>超市正在促销，你可以用 <code>numExchange</code> 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 <code>numBottles</code> 瓶水。</p><p>如果喝掉了水瓶中的水，那么水瓶就会变成空的。</p><p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> ，返回你 <strong>最多</strong> 可以喝到多少瓶水。</p><p><strong>示例 1：</strong></p><p><strong><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_1_1875.png" alt="img"></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numBottles = 9, numExchange = 3</span>
<span class="line">输出：13</span>
<span class="line">解释：你可以用 3 个空瓶兑换 1 瓶水。</span>
<span class="line">所以最多能喝到 9 + 3 + 1 = 13 瓶水。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_2_1875.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：numBottles = 15, numExchange = 4</span>
<span class="line">输出：19</span>
<span class="line">解释：你可以用 4 个空瓶兑换 1 瓶水。</span>
<span class="line">所以最多能喝到 15 + 3 + 1 = 19 瓶水。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= numBottles &lt;= 100</code></li><li><code>2 &lt;= numExchange &lt;= 100</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>直接模拟，用while循环检查第一次空瓶子不够交换的状态</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numWaterBottles(int numBottles, int numExchange) {</span>
<span class="line">        int ans=numBottles,empty=numBottles;</span>
<span class="line">        while(empty&gt;=numExchange){</span>
<span class="line">            empty-=numExchange;</span>
<span class="line">            ans++;</span>
<span class="line">            empty++;</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 附：公式法</span>
<span class="line">// 要求 找到最小的k，使得b-k(e-1)&lt;e</span>
<span class="line">// k&gt;(b-e)/(e-1)</span>
<span class="line">// kmin=(b-e)/(e-1)+1=(b-1)/(e-1)</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numWaterBottles(int numBottles, int numExchange) {</span>
<span class="line">        return numBottles + (numBottles - 1) / (numExchange - 1);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(b/e)，公式法直接计算b/e的值，O(1)</li><li>空间复杂度：O(1)</li></ul>`,17)]))}const p=e(i,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20251001.html","title":"1518. 换水问题","lang":"zh-CN","frontmatter":{"date":"2025-10-01T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数学","模拟"]},"headers":[],"git":{"updatedTime":1759284793000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c7d539c51ed88f06847331960352ae3f3b9df072","time":1759284793000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251001.md","excerpt":"\\n<p>超市正在促销，你可以用 <code>numExchange</code> 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 <code>numBottles</code> 瓶水。</p>\\n<p>如果喝掉了水瓶中的水，那么水瓶就会变成空的。</p>\\n<p>给你两个整数 <code>numBottles</code> 和 <code>numExchange</code> ，返回你 <strong>最多</strong> 可以喝到多少瓶水。</p>\\n<p><strong>示例 1：</strong></p>\\n<p><strong><img src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_1_1875.png\\" alt=\\"img\\"></strong></p>"}');export{p as comp,r as data};

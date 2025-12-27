import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_3347-执行操作后元素的最高频率-ii" tabindex="-1"><a class="header-anchor" href="#_3347-执行操作后元素的最高频率-ii"><span><a href="https://leetcode.cn/problems/maximum-frequency-of-an-element-after-performing-operations-ii/" target="_blank" rel="noopener noreferrer">3347. 执行操作后元素的最高频率 II</a></span></a></h1><p>给你一个整数数组 <code>nums</code> 和两个整数 <code>k</code> 和 <code>numOperations</code> 。</p><p>你必须对 <code>nums</code> 执行 <strong>操作</strong> <code>numOperations</code> 次。每次操作中，你可以：</p><ul><li>选择一个下标 <code>i</code> ，它在之前的操作中 <strong>没有</strong> 被选择过。</li><li>将 <code>nums[i]</code> 增加范围 <code>[-k, k]</code> 中的一个整数。</li></ul><p>在执行完所有操作以后，请你返回 <code>nums</code> 中出现 <strong>频率最高</strong> 元素的出现次数。</p><p>一个元素 <code>x</code> 的 <strong>频率</strong> 指的是它在数组中出现的次数。</p><p><strong>示例 1：</strong></p><p>**输入：**nums = [1,4,5], k = 1, numOperations = 2</p><p>**输出：**2</p><p><strong>解释：</strong></p><p>通过以下操作得到最高频率 2 ：</p><ul><li>将 <code>nums[1]</code> 增加 0 ，<code>nums</code> 变为 <code>[1, 4, 5]</code> 。</li><li>将 <code>nums[2]</code> 增加 -1 ，<code>nums</code> 变为 <code>[1, 4, 4]</code> 。</li></ul><p><strong>示例 2：</strong></p><p>**输入：**nums = [5,11,20,20], k = 5, numOperations = 1</p><p>**输出：**2</p><p><strong>解释：</strong></p><p>通过以下操作得到最高频率 2 ：</p><ul><li>将 <code>nums[1]</code> 增加 0 。</li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li>\`1 &lt;= nums[i] &lt;= 1059</li><li><code>0 &lt;= k &lt;= 109</code></li><li><code>0 &lt;= numOperations &lt;= nums.length</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>和昨天一样，只是数据范围变大，所以必须使用前缀和优化，使用map数据结构优化到log级别的插入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int maxFrequency(vector&lt;int&gt;&amp; nums, int k, int numOperations) {</span>
<span class="line">        // 问题背景：每个元素可修改为[x-k, x+k]范围内的任意整数（最多修改numOperations次）</span>
<span class="line">        // 目标：找到修改后数组中出现次数最多的元素的频率</span>
<span class="line">        </span>
<span class="line">        // cnt用于统计原始数组中每个元素的出现次数（初始频率）</span>
<span class="line">        unordered_map&lt;int, int&gt; cnt;</span>
<span class="line">        // diff是有序差分数组，用于高效计算&quot;每个可能的目标值x被多少个原始元素的修改范围覆盖&quot;</span>
<span class="line">        map&lt;int, int&gt; diff; </span>
<span class="line">        </span>
<span class="line">        for (int x : nums) {</span>
<span class="line">            cnt[x]++;  // 统计原始元素x的出现次数</span>
<span class="line">            </span>
<span class="line">            // 确保x被包含在diff的键中（后续遍历会用到该位置的原始频率）</span>
<span class="line">            diff[x];</span>
<span class="line">            </span>
<span class="line">            // 核心：标记原始元素x的修改范围[x-k, x+k]对差分数组的影响</span>
<span class="line">            // 对区间起点x-k做+1操作，表示从这里开始的范围都能被x修改覆盖</span>
<span class="line">            diff[x - k]++;</span>
<span class="line">            // 对区间终点x+k的下一个位置做-1操作，表示从这里开始退出x的覆盖范围</span>
<span class="line">            // （利用差分数组特性，后续求前缀和即可得到每个位置被覆盖的次数）</span>
<span class="line">            diff[x + k + 1]--;</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        int ans = 0;          // 存储最大频率结果</span>
<span class="line">        int sum_d = 0;        // 差分数组的前缀和，代表当前x被多少个原始元素的范围覆盖</span>
<span class="line">        </span>
<span class="line">        // 遍历所有可能的目标值x（diff的键包含了所有关键位置：原始元素和区间边界）</span>
<span class="line">        for (auto&amp; [x, d] : diff) {</span>
<span class="line">            sum_d += d;  // 累加差分值，得到x被覆盖的总次数（即最多有多少元素能修改为x）</span>
<span class="line">            </span>
<span class="line">            // 计算x的最大可能频率：</span>
<span class="line">            // 1. 不能超过sum_d（最多只有这么多元素能改成x）</span>
<span class="line">            // 2. 不能超过原始x的频率 + 最大操作次数（操作次数有限制）</span>
<span class="line">            // 取两者最小值作为x的最大可能频率，更新全局最大值</span>
<span class="line">            ans = max(ans, min(sum_d, cnt[x] + numOperations));</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nlogn) map的插入删除是logn</li><li>空间复杂度：O(n)</li></ul>`,25)]))}const o=s(l,[["render",d]]),r=JSON.parse('{"path":"/leetcode/20251022.html","title":"3347. 执行操作后元素的最高频率 II","lang":"zh-CN","frontmatter":{"date":"2025-10-22T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","排序","差分数组","前缀和"]},"headers":[],"git":{"updatedTime":1761139006000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"c119e9efed4ae6b489aae2aab4afa529062ca62c","time":1761139006000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251022.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code> 和两个整数 <code>k</code> 和 <code>numOperations</code> 。</p>\\n<p>你必须对 <code>nums</code> 执行 <strong>操作</strong> <code>numOperations</code> 次。每次操作中，你可以：</p>\\n<ul>\\n<li>选择一个下标 <code>i</code> ，它在之前的操作中 <strong>没有</strong> 被选择过。</li>\\n<li>将 <code>nums[i]</code> 增加范围 <code>[-k, k]</code> 中的一个整数。</li>\\n</ul>"}');export{o as comp,r as data};

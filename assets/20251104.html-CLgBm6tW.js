import{_ as s,c as e,a as i,o as l}from"./app-Bpj5Mkzv.js";const a={};function c(d,n){return l(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_3318-计算子数组的-x-sum-i" tabindex="-1"><a class="header-anchor" href="#_3318-计算子数组的-x-sum-i"><span><a href="https://leetcode.cn/problems/find-x-sum-of-all-k-long-subarrays-i/" target="_blank" rel="noopener noreferrer">3318. 计算子数组的 x-sum I</a></span></a></h1><p>给你一个由 <code>n</code> 个整数组成的数组 <code>nums</code>，以及两个整数 <code>k</code> 和 <code>x</code>。</p><p>数组的 <strong>x-sum</strong> 计算按照以下步骤进行：</p><ul><li>统计数组中所有元素的出现次数。</li><li>仅保留出现次数最多的前 <code>x</code> 个元素的每次出现。如果两个元素的出现次数相同，则数值 <strong>较大</strong> 的元素被认为出现次数更多。</li><li>计算结果数组的和。</li></ul><p><strong>注意</strong>，如果数组中的不同元素少于 <code>x</code> 个，则其 <strong>x-sum</strong> 是数组的元素总和。</p><p>返回一个长度为 <code>n - k + 1</code> 的整数数组 <code>answer</code>，其中 <code>answer[i]</code> 是 子数组 <code>nums[i..i + k - 1]</code> 的 <strong>x-sum</strong>。</p><p><strong>子数组</strong> 是数组内的一个连续 <strong>非空</strong> 的元素序列。</p><p><strong>示例 1：</strong></p><p>**输入：**nums = [1,1,2,2,3,4,2,3], k = 6, x = 2</p><p><strong>输出：</strong>[6,10,12]</p><p><strong>解释：</strong></p><ul><li>对于子数组 <code>[1, 1, 2, 2, 3, 4]</code>，只保留元素 1 和 2。因此，<code>answer[0] = 1 + 1 + 2 + 2</code>。</li><li>对于子数组 <code>[1, 2, 2, 3, 4, 2]</code>，只保留元素 2 和 4。因此，<code>answer[1] = 2 + 2 + 2 + 4</code>。注意 4 被保留是因为其数值大于出现其他出现次数相同的元素（3 和 1）。</li><li>对于子数组 <code>[2, 2, 3, 4, 2, 3]</code>，只保留元素 2 和 3。因此，<code>answer[2] = 2 + 2 + 2 + 3 + 3</code>。</li></ul><p><strong>示例 2：</strong></p><p>**输入：**nums = [3,8,7,8,7,5], k = 2, x = 2</p><p><strong>输出：</strong>[11,15,15,15,12]</p><p><strong>解释：</strong></p><p>由于 <code>k == x</code>，<code>answer[i]</code> 等于子数组 <code>nums[i..i + k - 1]</code> 的总和。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n == nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 50</code></li><li><code>1 &lt;= x &lt;= k &lt;= nums.length</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>确定所有的k个情况，遍历每个情况统计个数。</p><p>借助pair进行排序，注意sort函数自定义比较器的写法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    vector&lt;int&gt; findXSum(vector&lt;int&gt;&amp; nums, int k, int x) {</span>
<span class="line">        int n = nums.size();</span>
<span class="line">        vector&lt;int&gt; answer(n - k + 1);</span>
<span class="line">        </span>
<span class="line">        for (int i = 0; i &lt;= n - k; i++) {</span>
<span class="line">            // 统计当前窗口内元素的频率</span>
<span class="line">            unordered_map&lt;int, int&gt; freq;</span>
<span class="line">            for (int j = i; j &lt; i + k; j++) {</span>
<span class="line">                freq[nums[j]]++;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 如果不同元素数量少于x，直接计算总和</span>
<span class="line">            if (freq.size() &lt;= x) {</span>
<span class="line">                int sum = 0;</span>
<span class="line">                for (int j = i; j &lt; i + k; j++) {</span>
<span class="line">                    sum += nums[j];</span>
<span class="line">                }</span>
<span class="line">                answer[i] = sum;</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 将频率信息转换为vector进行排序</span>
<span class="line">            vector&lt;pair&lt;int, int&gt;&gt; elements; // (频率, 数值)</span>
<span class="line">            for (auto&amp; [num, count] : freq) {</span>
<span class="line">                elements.push_back({count, num});</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            // 排序：先按频率降序，频率相同按数值降序</span>
<span class="line">            sort(elements.begin(), elements.end(), [](const pair&lt;int, int&gt;&amp; a, const pair&lt;int, int&gt;&amp; b) {</span>
<span class="line">                if (a.first != b.first) {</span>
<span class="line">                    return a.first &gt; b.first;</span>
<span class="line">                }</span>
<span class="line">                return a.second &gt; b.second;</span>
<span class="line">            });</span>
<span class="line">            </span>
<span class="line">            // 计算前x个元素的总和</span>
<span class="line">            int sum = 0;</span>
<span class="line">            for (int j = 0; j &lt; x; j++) {</span>
<span class="line">                sum += elements[j].first * elements[j].second;</span>
<span class="line">            }</span>
<span class="line">            answer[i] = sum;</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        return answer;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(nklogk) n遍历，k排序</li><li>空间复杂度：O(k)</li></ul>`,25)]))}const t=s(a,[["render",c]]),p=JSON.parse('{"path":"/leetcode/20251104.html","title":"3318. 计算子数组的 x-sum I","lang":"zh-CN","frontmatter":{"date":"2025-11-04T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["滑动窗口","哈希表","数组"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251104.md","excerpt":"\\n<p>给你一个由 <code>n</code> 个整数组成的数组 <code>nums</code>，以及两个整数 <code>k</code> 和 <code>x</code>。</p>\\n<p>数组的 <strong>x-sum</strong> 计算按照以下步骤进行：</p>\\n<ul>\\n<li>统计数组中所有元素的出现次数。</li>\\n<li>仅保留出现次数最多的前 <code>x</code> 个元素的每次出现。如果两个元素的出现次数相同，则数值 <strong>较大</strong> 的元素被认为出现次数更多。</li>\\n<li>计算结果数组的和。</li>\\n</ul>\\n<p><strong>注意</strong>，如果数组中的不同元素少于 <code>x</code> 个，则其 <strong>x-sum</strong> 是数组的元素总和。</p>"}');export{t as comp,p as data};

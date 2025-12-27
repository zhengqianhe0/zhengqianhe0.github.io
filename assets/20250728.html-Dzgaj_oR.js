import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_2044-统计按位或能得到最大值的子集数目" tabindex="-1"><a class="header-anchor" href="#_2044-统计按位或能得到最大值的子集数目"><span><a href="https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets/" target="_blank" rel="noopener noreferrer">2044. 统计按位或能得到最大值的子集数目</a></span></a></h1><p>#题目描述</p><p>给你一个整数数组 <code>nums</code> ，请你找出 <code>nums</code> 子集 <strong>按位或</strong> 可能得到的 <strong>最大值</strong> ，并返回按位或能得到最大值的 <strong>不同非空子集的数目</strong> 。</p><p>如果数组 <code>a</code> 可以由数组 <code>b</code> 删除一些元素（或不删除）得到，则认为数组 <code>a</code> 是数组 <code>b</code> 的一个 <strong>子集</strong> 。如果选中的元素下标位置不一样，则认为两个子集 <strong>不同</strong> 。</p><p>对数组 <code>a</code> 执行 <strong>按位或</strong> ，结果等于 <code>a[0] **OR** a[1] **OR** ... **OR** a[a.length - 1]</code>（下标从 <strong>0</strong> 开始）。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [3,1]</span>
<span class="line">输出：2</span>
<span class="line">解释：子集按位或能得到的最大值是 3 。有 2 个子集按位或可以得到 3 ：</span>
<span class="line">- [3]</span>
<span class="line">- [3,1]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [2,2,2]</span>
<span class="line">输出：7</span>
<span class="line">解释：[2,2,2] 的所有非空子集的按位或都可以得到 2 。总共有 23 - 1 = 7 个子集。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：nums = [3,2,1,5]</span>
<span class="line">输出：6</span>
<span class="line">解释：子集按位或可能的最大值是 7 。有 6 个子集按位或可以得到 7 ：</span>
<span class="line">- [3,5]</span>
<span class="line">- [3,1,5]</span>
<span class="line">- [3,2,5]</span>
<span class="line">- [3,2,1,5]</span>
<span class="line">- [2,5]</span>
<span class="line">- [2,1,5]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 16</code></li><li><code>1 &lt;= nums[i] &lt;= 105</code></li></ul><p>#解题思路</p><p>按位或的特点：某一位被一次置为1，再与0，1进行或运算都是1。因此数组里所有数按位或的结果一定最大。</p><p>解法：使用DFS遍历所有可能的子数组情况，如果和最大结果一致，则计数</p><p>复杂度分析</p><p>时间复杂度：O(2^n)，其中 n 是数组 nums 的长度。每个元素都可选可不选。</p><p>空间复杂度：O(n)，其中 n 是数组 nums 的长度。搜索深度最多为 n。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int countMaxOrSubsets(vector&lt;int&gt;&amp; nums) {</span>
<span class="line">        int max=0;</span>
<span class="line">        for(int i=0;i&lt;nums.size();i++){</span>
<span class="line">            max|=nums[i];</span>
<span class="line">        }</span>
<span class="line">        int count=0;</span>
<span class="line">        dfs(nums,0,0,max,count);</span>
<span class="line">        return count;</span>
<span class="line">    }</span>
<span class="line">    void dfs(vector&lt;int&gt;&amp; nums,int index,int current,int max,int&amp; count){</span>
<span class="line">        if(index==nums.size()){</span>
<span class="line">            if(current==max){</span>
<span class="line">                count++;</span>
<span class="line">            }</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line">        dfs(nums, index + 1, current, max, count);</span>
<span class="line">        dfs(nums, index + 1, current | nums[index], max, count);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const r=s(l,[["render",d]]),p=JSON.parse('{"path":"/leetcode/20250728.html","title":"2044. 统计按位或能得到最大值的子集数目","lang":"zh-CN","frontmatter":{"date":"2025-07-28T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["回溯","DFS"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"8d93e6af4f3471bd5aeea8b6f70f18329ab38856","time":1753781156000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"每日一题"},{"hash":"cf54adca54f0b2e84abffdde625d573d729db5af","time":1753710540000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"每日一题文件"}]},"filePathRelative":"leetcode/20250728.md","excerpt":"\\n<p>#题目描述</p>\\n<p>给你一个整数数组 <code>nums</code> ，请你找出 <code>nums</code> 子集 <strong>按位或</strong> 可能得到的 <strong>最大值</strong> ，并返回按位或能得到最大值的 <strong>不同非空子集的数目</strong> 。</p>\\n<p>如果数组 <code>a</code> 可以由数组 <code>b</code> 删除一些元素（或不删除）得到，则认为数组 <code>a</code> 是数组 <code>b</code> 的一个 <strong>子集</strong> 。如果选中的元素下标位置不一样，则认为两个子集 <strong>不同</strong> 。</p>"}');export{r as comp,p as data};

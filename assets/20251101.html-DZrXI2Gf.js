import{_ as s,c as e,a as l,o as a}from"./app-Bpj5Mkzv.js";const i={};function t(p,n){return a(),e("div",null,n[0]||(n[0]=[l(`<h1 id="_3217-从链表中移除在数组中存在的节点" tabindex="-1"><a class="header-anchor" href="#_3217-从链表中移除在数组中存在的节点"><span><a href="https://leetcode.cn/problems/delete-nodes-from-linked-list-present-in-array/" target="_blank" rel="noopener noreferrer">3217. 从链表中移除在数组中存在的节点</a></span></a></h1><p>给你一个整数数组 <code>nums</code> 和一个链表的头节点 <code>head</code>。从链表中<strong>移除</strong>所有存在于 <code>nums</code> 中的节点后，返回修改后的链表的头节点。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [1,2,3], head = [1,2,3,4,5]</p><p><strong>输出：</strong> [4,5]</p><p><strong>解释：</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample0.png" alt="img"></strong></p><p>移除数值为 1, 2 和 3 的节点。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [1], head = [1,2,1,2,1,2]</p><p><strong>输出：</strong> [2,2,2]</p><p><strong>解释：</strong></p><p><img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample1.png" alt="img"></p><p>移除数值为 1 的节点。</p><p><strong>示例 3：</strong></p><p><strong>输入：</strong> nums = [5], head = [1,2,3,4]</p><p><strong>输出：</strong> [1,2,3,4]</p><p><strong>解释：</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample2.png" alt="img"></strong></p><p>链表中不存在值为 5 的节点。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 105</code></li><li><code>1 &lt;= nums[i] &lt;= 105</code></li><li><code>nums</code> 中的所有元素都是唯一的。</li><li>链表中的节点数在 <code>[1, 105]</code> 的范围内。</li><li><code>1 &lt;= Node.val &lt;= 105</code></li><li>输入保证链表中至少有一个值没有在 <code>nums</code> 中出现过。</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>利用集合记录出现的nums，避免每次都遍历搜索。</p><p>使用虚拟头节点，简化需要删除头节点时的操作</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * struct ListNode {</span>
<span class="line"> *     int val;</span>
<span class="line"> *     ListNode *next;</span>
<span class="line"> *     ListNode() : val(0), next(nullptr) {}</span>
<span class="line"> *     ListNode(int x) : val(x), next(nullptr) {}</span>
<span class="line"> *     ListNode(int x, ListNode *next) : val(x), next(next) {}</span>
<span class="line"> * };</span>
<span class="line"> */</span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    ListNode* modifiedList(vector&lt;int&gt;&amp; nums, ListNode* head) {</span>
<span class="line">        unordered_set&lt;int&gt; st(nums.begin(),nums.end());</span>
<span class="line">        ListNode dummy(0,head);</span>
<span class="line">        ListNode* cur=&amp;dummy;</span>
<span class="line">        while(cur-&gt;next){</span>
<span class="line">            ListNode* nxt=cur-&gt;next;</span>
<span class="line">            if(st.contains(nxt-&gt;val)){</span>
<span class="line">                cur-&gt;next=nxt-&gt;next;</span>
<span class="line">            }else{</span>
<span class="line">                cur=nxt;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dummy.next;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(n+m)</li><li>空间复杂度：O(n)</li></ul>`,28)]))}const r=s(i,[["render",t]]),o=JSON.parse('{"path":"/leetcode/20251101.html","title":"3217. 从链表中移除在数组中存在的节点","lang":"zh-CN","frontmatter":{"date":"2025-11-01T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","链表"]},"headers":[],"git":{"updatedTime":1763518154000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"4b5123a2226ab3055587cb87c78becf08ce40201","time":1763518154000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251101.md","excerpt":"\\n<p>给你一个整数数组 <code>nums</code> 和一个链表的头节点 <code>head</code>。从链表中<strong>移除</strong>所有存在于 <code>nums</code> 中的节点后，返回修改后的链表的头节点。</p>\\n<p><strong>示例 1：</strong></p>\\n<p><strong>输入：</strong> nums = [1,2,3], head = [1,2,3,4,5]</p>\\n<p><strong>输出：</strong> [4,5]</p>\\n<p><strong>解释：</strong></p>\\n<p><strong><img src=\\"https://assets.leetcode.com/uploads/2024/06/11/linkedlistexample0.png\\" alt=\\"img\\"></strong></p>"}');export{r as comp,o as data};

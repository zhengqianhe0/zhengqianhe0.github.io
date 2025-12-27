import{_ as e,c as n,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function t(d,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="_1792-最大平均通过率" tabindex="-1"><a class="header-anchor" href="#_1792-最大平均通过率"><span><a href="https://leetcode.cn/problems/maximum-average-pass-ratio/" target="_blank" rel="noopener noreferrer">1792. 最大平均通过率</a></span></a></h1><p>一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 <code>classes</code> ，其中 <code>classes[i] = [passi, totali]</code> ，表示你提前知道了第 <code>i</code> 个班级总共有 <code>totali</code> 个学生，其中只有 <code>passi</code> 个学生可以通过考试。</p><p>给你一个整数 <code>extraStudents</code> ，表示额外有 <code>extraStudents</code> 个聪明的学生，他们 <strong>一定</strong> 能通过任何班级的期末考。你需要给这 <code>extraStudents</code> 个学生每人都安排一个班级，使得 <strong>所有</strong> 班级的 <strong>平均</strong> 通过率 <strong>最大</strong> 。</p><p>一个班级的 <strong>通过率</strong> 等于这个班级通过考试的学生人数除以这个班级的总人数。<strong>平均通过率</strong> 是所有班级的通过率之和除以班级数目。</p><p>请你返回在安排这 <code>extraStudents</code> 个学生去对应班级后的 <strong>最大</strong> 平均通过率。与标准答案误差范围在 <code>10-5</code> 以内的结果都会视为正确结果。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：classes = [[1,2],[3,5],[2,2]], extraStudents = 2</span>
<span class="line">输出：0.78333</span>
<span class="line">解释：你可以将额外的两个学生都安排到第一个班级，平均通过率为 (3/4 + 3/5 + 2/2) / 3 = 0.78333 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4</span>
<span class="line">输出：0.53485</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= classes.length &lt;= 105</code></li><li><code>classes[i].length == 2</code></li><li><code>1 &lt;= passi &lt;= totali &lt;= 105</code></li><li><code>1 &lt;= extraStudents &lt;= 105</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>定义接受的结构体，重载优先队列的比较运算符。</p><p>默认使用比较函数less，即a&lt;b，并且将结果为true时的a认为是优先级更低的。</p><p>当重载时，实际相当于调用“a.operator&lt;(b)”，所以当前结构体的值为a，oth的值为b。</p><p>这里以贪心的思路，需要加入人后提升更大作为堆顶。</p><p>因此，重载方法为，列出计算式Δa&lt;Δb，当式子为true时，左侧的a的优先级更低，保证堆顶是差更大的对象。</p><p>实现过程中，先将全部元素入堆，然后取出m个学生补充到班级。最后，统计平均通过率。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    struct Ratio {</span>
<span class="line">        int pass, total;</span>
<span class="line">        bool operator &lt; (const Ratio&amp; oth) const {</span>
<span class="line">            return (long long) (oth.total + 1) * oth.total * (total - pass) &lt; (long long) (total + 1) * total * (oth.total - oth.pass);</span>
<span class="line">        }</span>
<span class="line">    };</span>
<span class="line"></span>
<span class="line">    double maxAverageRatio(vector&lt;vector&lt;int&gt;&gt;&amp; classes, int extraStudents) {</span>
<span class="line">        priority_queue&lt;Ratio&gt; q;</span>
<span class="line">        for (auto &amp;c : classes) {</span>
<span class="line">            q.push({c[0], c[1]});</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        for (int i = 0; i &lt; extraStudents; i++) {</span>
<span class="line">            auto [pass, total] = q.top();</span>
<span class="line">            q.pop();</span>
<span class="line">            q.push({pass + 1, total + 1});</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        double res = 0;</span>
<span class="line">        for (int i = 0; i &lt; classes.size(); i++) {</span>
<span class="line">            auto [pass, total] = q.top();</span>
<span class="line">            q.pop();</span>
<span class="line">            res += 1.0 * pass / total;</span>
<span class="line">        }</span>
<span class="line">        return res / classes.size();</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(m+n) logn，优先队列中的操作复杂度为logn</li><li>空间复杂度：O(n)</li></ul>`,21)]))}const o=e(i,[["render",t]]),r=JSON.parse('{"path":"/leetcode/20250901.html","title":"1792. 最大平均通过率","lang":"zh-CN","frontmatter":{"date":"2025-09-01T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","贪心","优先队列"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"40991bc2ba03d7e38aad0ae1b84400046bba740d","time":1756691314000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250901.md","excerpt":"\\n<p>一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 <code>classes</code> ，其中 <code>classes[i] = [passi, totali]</code> ，表示你提前知道了第 <code>i</code> 个班级总共有 <code>totali</code> 个学生，其中只有 <code>passi</code> 个学生可以通过考试。</p>\\n<p>给你一个整数 <code>extraStudents</code> ，表示额外有 <code>extraStudents</code> 个聪明的学生，他们 <strong>一定</strong> 能通过任何班级的期末考。你需要给这 <code>extraStudents</code> 个学生每人都安排一个班级，使得 <strong>所有</strong> 班级的 <strong>平均</strong> 通过率 <strong>最大</strong> 。</p>"}');export{o as comp,r as data};

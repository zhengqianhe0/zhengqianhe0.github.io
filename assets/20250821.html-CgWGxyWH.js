import{_ as s,c as e,a,o as i}from"./app-Bpj5Mkzv.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_1504-统计全-1-子矩形" tabindex="-1"><a class="header-anchor" href="#_1504-统计全-1-子矩形"><span><a href="https://leetcode.cn/problems/count-submatrices-with-all-ones/" target="_blank" rel="noopener noreferrer">1504. 统计全 1 子矩形</a></span></a></h1><p>给你一个 <code>m x n</code> 的二进制矩阵 <code>mat</code> ，请你返回有多少个 <strong>子矩形</strong> 的元素全部都是 1 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：mat = [[1,0,1],[1,1,0],[1,1,0]]</span>
<span class="line">输出：13</span>
<span class="line">解释：</span>
<span class="line">有 6 个 1x1 的矩形。</span>
<span class="line">有 2 个 1x2 的矩形。</span>
<span class="line">有 3 个 2x1 的矩形。</span>
<span class="line">有 1 个 2x2 的矩形。</span>
<span class="line">有 1 个 3x1 的矩形。</span>
<span class="line">矩形数目总共 = 6 + 2 + 3 + 1 + 1 = 13 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]</span>
<span class="line">输出：24</span>
<span class="line">解释：</span>
<span class="line">有 8 个 1x1 的子矩形。</span>
<span class="line">有 5 个 1x2 的子矩形。</span>
<span class="line">有 2 个 1x3 的子矩形。</span>
<span class="line">有 4 个 2x1 的子矩形。</span>
<span class="line">有 2 个 2x2 的子矩形。</span>
<span class="line">有 2 个 3x1 的子矩形。</span>
<span class="line">有 1 个 3x2 的子矩形。</span>
<span class="line">矩形数目总共 = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= m, n &lt;= 150</code></li><li><code>mat[i][j]</code> 仅包含 <code>0</code> 或 <code>1</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>单调栈设计相对复杂。基本dp方法是，将二维映射到一维，遍历到第j行时统计当前行及以上每一列的1的个数，按右下角进行遍历。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numSubmat(vector&lt;vector&lt;int&gt;&gt;&amp; mat) {</span>
<span class="line">        int m=mat.size(),n=mat[0].size();</span>
<span class="line">        int ans=0;</span>
<span class="line">        // 枚举上边界</span>
<span class="line">        for(int top=0;top&lt;m;++top){</span>
<span class="line">            vector&lt;int&gt; a(n);	// 创建计数数组</span>
<span class="line">            // 枚举下边界</span>
<span class="line">            for(int bottom=top;bottom&lt;m;++bottom){</span>
<span class="line">                int h=bottom-top+1;</span>
<span class="line">                int last=-1;</span>
<span class="line">                // 枚举这一行，先计数，只有高度满足h的才计数，相当于在当前数组里找全h的子数组</span>
<span class="line">                for(int j=0;j&lt;n;++j){</span>
<span class="line">                    a[j]+=mat[bottom][j];</span>
<span class="line">                    if(a[j]!=h){</span>
<span class="line">                        last=j;</span>
<span class="line">                    }else{</span>
<span class="line">                        ans+=j-last;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(m2n)</li><li>空间复杂度：O(n)</li></ul>`,13)]))}const t=s(l,[["render",d]]),r=JSON.parse('{"path":"/leetcode/20250821.html","title":"1504. 统计全 1 子矩形","lang":"zh-CN","frontmatter":{"date":"2025-08-21T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","动态规划","矩阵"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"6f41cf656e4a3c0c4633d050a02a314a132aa115","time":1755738939000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mriyt"}]},"filePathRelative":"leetcode/20250821.md","excerpt":"\\n<p>给你一个 <code>m x n</code> 的二进制矩阵 <code>mat</code> ，请你返回有多少个 <strong>子矩形</strong> 的元素全部都是 1 。</p>\\n<p><strong>示例 1：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">输入：mat = [[1,0,1],[1,1,0],[1,1,0]]</span>\\n<span class=\\"line\\">输出：13</span>\\n<span class=\\"line\\">解释：</span>\\n<span class=\\"line\\">有 6 个 1x1 的矩形。</span>\\n<span class=\\"line\\">有 2 个 1x2 的矩形。</span>\\n<span class=\\"line\\">有 3 个 2x1 的矩形。</span>\\n<span class=\\"line\\">有 1 个 2x2 的矩形。</span>\\n<span class=\\"line\\">有 1 个 3x1 的矩形。</span>\\n<span class=\\"line\\">矩形数目总共 = 6 + 2 + 3 + 1 + 1 = 13 。</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{t as comp,r as data};

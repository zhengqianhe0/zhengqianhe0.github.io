import{_ as n,c as i,a as t,o}from"./app-Bpj5Mkzv.js";const a={};function u(e,s){return o(),i("div",null,s[0]||(s[0]=[t(`<h1 id="_37-解数独" tabindex="-1"><a class="header-anchor" href="#_37-解数独"><span><a href="https://leetcode.cn/problems/sudoku-solver/" target="_blank" rel="noopener noreferrer">37. 解数独</a></span></a></h1><p>编写一个程序，通过填充空格来解决数独问题。</p><p>数独的解法需 <strong>遵循如下规则</strong>：</p><ol><li>数字 <code>1-9</code> 在每一行只能出现一次。</li><li>数字 <code>1-9</code> 在每一列只能出现一次。</li><li>数字 <code>1-9</code> 在每一个以粗实线分隔的 <code>3x3</code> 宫内只能出现一次。（请参考示例图）</li></ol><p>数独部分空格内已填入了数字，空白格用 <code>&#39;.&#39;</code> 表示。</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：board = [[&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;],[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;],[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;],[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;],[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]</span>
<span class="line">输出：[[&quot;5&quot;,&quot;3&quot;,&quot;4&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;,&quot;9&quot;,&quot;1&quot;,&quot;2&quot;],[&quot;6&quot;,&quot;7&quot;,&quot;2&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;3&quot;,&quot;4&quot;,&quot;8&quot;],[&quot;1&quot;,&quot;9&quot;,&quot;8&quot;,&quot;3&quot;,&quot;4&quot;,&quot;2&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;],[&quot;8&quot;,&quot;5&quot;,&quot;9&quot;,&quot;7&quot;,&quot;6&quot;,&quot;1&quot;,&quot;4&quot;,&quot;2&quot;,&quot;3&quot;],[&quot;4&quot;,&quot;2&quot;,&quot;6&quot;,&quot;8&quot;,&quot;5&quot;,&quot;3&quot;,&quot;7&quot;,&quot;9&quot;,&quot;1&quot;],[&quot;7&quot;,&quot;1&quot;,&quot;3&quot;,&quot;9&quot;,&quot;2&quot;,&quot;4&quot;,&quot;8&quot;,&quot;5&quot;,&quot;6&quot;],[&quot;9&quot;,&quot;6&quot;,&quot;1&quot;,&quot;5&quot;,&quot;3&quot;,&quot;7&quot;,&quot;2&quot;,&quot;8&quot;,&quot;4&quot;],[&quot;2&quot;,&quot;8&quot;,&quot;7&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;6&quot;,&quot;3&quot;,&quot;5&quot;],[&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;2&quot;,&quot;8&quot;,&quot;6&quot;,&quot;1&quot;,&quot;7&quot;,&quot;9&quot;]]</span>
<span class="line">解释：输入的数独如上图所示，唯一有效的解决方案如下所示：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>board.length == 9</code></li><li><code>board[i].length == 9</code></li><li><code>board[i][j]</code> 是一位数字或者 <code>&#39;.&#39;</code></li><li>题目数据 <strong>保证</strong> 输入数独仅有一个解</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>回溯法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">private:</span>
<span class="line">    // line[i][digit]: 记录第i行是否已经填入数字digit+1</span>
<span class="line">    bool line[9][9];</span>
<span class="line">    // column[j][digit]: 记录第j列是否已经填入数字digit+1</span>
<span class="line">    bool column[9][9];</span>
<span class="line">    // block[i][j][digit]: 记录第(i,j)个3×3宫格是否已经填入数字digit+1</span>
<span class="line">    bool block[3][3][9];</span>
<span class="line">    // valid: 标记是否找到了有效的解</span>
<span class="line">    bool valid;</span>
<span class="line">    // spaces: 存储所有需要填充的空格位置</span>
<span class="line">    vector&lt;pair&lt;int, int&gt;&gt; spaces;</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    // 深度优先搜索函数</span>
<span class="line">    // board: 数独棋盘</span>
<span class="line">    // pos: 当前处理的是spaces中的第pos个空格</span>
<span class="line">    void dfs(vector&lt;vector&lt;char&gt;&gt;&amp; board, int pos) {</span>
<span class="line">        // 如果所有空格都已填完，说明找到了解</span>
<span class="line">        if (pos == spaces.size()) {</span>
<span class="line">            valid = true;  // 标记找到解</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 获取当前要填充的空格位置</span>
<span class="line">        auto [i, j] = spaces[pos];</span>
<span class="line">        </span>
<span class="line">        // 尝试填入数字1-9</span>
<span class="line">        for (int digit = 0; digit &lt; 9 &amp;&amp; !valid; ++digit) {</span>
<span class="line">            // 检查数字digit+1是否可以填入位置(i,j)</span>
<span class="line">            // 条件：该数字在当前行、列、3×3宫格中都未出现</span>
<span class="line">            if (!line[i][digit] &amp;&amp; !column[j][digit] &amp;&amp; !block[i / 3][j / 3][digit]) {</span>
<span class="line">                // 标记该数字已在对应行、列、宫格中使用</span>
<span class="line">                line[i][digit] = column[j][digit] = block[i / 3][j / 3][digit] = true;</span>
<span class="line">                // 在棋盘上填入数字</span>
<span class="line">                board[i][j] = digit + &#39;0&#39; + 1;</span>
<span class="line">                // 递归处理下一个空格</span>
<span class="line">                dfs(board, pos + 1);</span>
<span class="line">                // 回溯：取消标记（注意：这里不重置board[i][j]，因为找到解后不需要回溯了）</span>
<span class="line">                line[i][digit] = column[j][digit] = block[i / 3][j / 3][digit] = false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 主函数：解决数独问题</span>
<span class="line">    void solveSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) {</span>
<span class="line">        // 初始化所有标记数组为false</span>
<span class="line">        memset(line, false, sizeof(line));</span>
<span class="line">        memset(column, false, sizeof(column));</span>
<span class="line">        memset(block, false, sizeof(block));</span>
<span class="line">        valid = false;  // 初始化未找到解</span>
<span class="line"></span>
<span class="line">        // 预处理：扫描整个棋盘</span>
<span class="line">        for (int i = 0; i &lt; 9; ++i) {</span>
<span class="line">            for (int j = 0; j &lt; 9; ++j) {</span>
<span class="line">                if (board[i][j] == &#39;.&#39;) {</span>
<span class="line">                    // 如果是空格，记录位置</span>
<span class="line">                    spaces.emplace_back(i, j);</span>
<span class="line">                }</span>
<span class="line">                else {</span>
<span class="line">                    // 如果是数字，更新对应的标记数组</span>
<span class="line">                    int digit = board[i][j] - &#39;0&#39; - 1;  // 将字符转换为0-8的索引</span>
<span class="line">                    line[i][digit] = column[j][digit] = block[i / 3][j / 3][digit] = true;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        // 从第0个空格开始进行深度优先搜索</span>
<span class="line">        dfs(board, 0);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(9^n) ，n为空格的个数</li><li>空间复杂度：O(n)，递归栈深度</li></ul>`,15)]))}const q=n(a,[["render",u]]),d=JSON.parse(`{"path":"/leetcode/20250831.html","title":"37. 解数独","lang":"zh-CN","frontmatter":{"date":"2025-08-31T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","矩阵","哈希表","回溯"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"40991bc2ba03d7e38aad0ae1b84400046bba740d","time":1756691314000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"},{"hash":"9bf07edaa1a4053d9e0833978a57f3b8d5cc3b06","time":1756607234000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250831.md","excerpt":"\\n<p>编写一个程序，通过填充空格来解决数独问题。</p>\\n<p>数独的解法需 <strong>遵循如下规则</strong>：</p>\\n<ol>\\n<li>数字 <code>1-9</code> 在每一行只能出现一次。</li>\\n<li>数字 <code>1-9</code> 在每一列只能出现一次。</li>\\n<li>数字 <code>1-9</code> 在每一个以粗实线分隔的 <code>3x3</code> 宫内只能出现一次。（请参考示例图）</li>\\n</ol>\\n<p>数独部分空格内已填入了数字，空白格用 <code>'.'</code> 表示。</p>\\n<p><strong>示例 1：</strong></p>"}`);export{q as comp,d as data};

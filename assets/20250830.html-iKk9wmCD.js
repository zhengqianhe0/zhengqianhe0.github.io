import{_ as s,c as i,a as e,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(u,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="_36-有效的数独" tabindex="-1"><a class="header-anchor" href="#_36-有效的数独"><span><a href="https://leetcode.cn/problems/valid-sudoku/" target="_blank" rel="noopener noreferrer">36. 有效的数独</a></span></a></h1><p>请你判断一个 <code>9 x 9</code> 的数独是否有效。只需要 <strong>根据以下规则</strong> ，验证已经填入的数字是否有效即可。</p><ol><li>数字 <code>1-9</code> 在每一行只能出现一次。</li><li>数字 <code>1-9</code> 在每一列只能出现一次。</li><li>数字 <code>1-9</code> 在每一个以粗实线分隔的 <code>3x3</code> 宫内只能出现一次。（请参考示例图）</li></ol><p><strong>注意：</strong></p><ul><li>一个有效的数独（部分已被填充）不一定是可解的。</li><li>只需要根据以上规则，验证已经填入的数字是否有效即可。</li><li>空白格用 <code>&#39;.&#39;</code> 表示。</li></ul><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：board = </span>
<span class="line">[[&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]</span>
<span class="line">,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]</span>
<span class="line">,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]</span>
<span class="line">输出：true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：board = </span>
<span class="line">[[&quot;8&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]</span>
<span class="line">,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]</span>
<span class="line">,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]</span>
<span class="line">,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]</span>
<span class="line">输出：false</span>
<span class="line">解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>board.length == 9</code></li><li><code>board[i].length == 9</code></li><li><code>board[i][j]</code> 是一位数字（<code>1-9</code>）或者 <code>&#39;.&#39;</code></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>按要求遍历。注意board存储的是char，且需要跳过空格。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    bool isValidSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) {</span>
<span class="line">        unordered_map&lt;char, int&gt; check;</span>
<span class="line">        // 检查每一行</span>
<span class="line">        for(int i = 0; i &lt; 9; i++){</span>
<span class="line">            check.clear();</span>
<span class="line">            for(int j = 0; j &lt; 9; j++){</span>
<span class="line">                if(board[i][j] != &#39;.&#39;){  // 跳过空格</span>
<span class="line">                    auto it = check.find(board[i][j]);</span>
<span class="line">                    if(it != check.end()){</span>
<span class="line">                        return false;</span>
<span class="line">                    }else{</span>
<span class="line">                        check[board[i][j]] = 1;  // 存储字符出现次数</span>
<span class="line">                    }                </span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        // 检查每一列</span>
<span class="line">        for(int j = 0; j &lt; 9; j++){</span>
<span class="line">            check.clear();</span>
<span class="line">            for(int i = 0; i &lt; 9; i++){</span>
<span class="line">                if(board[i][j] != &#39;.&#39;){  // 跳过空格</span>
<span class="line">                    auto it = check.find(board[i][j]);</span>
<span class="line">                    if(it != check.end()){</span>
<span class="line">                        return false;</span>
<span class="line">                    }else{</span>
<span class="line">                        check[board[i][j]] = 1;</span>
<span class="line">                    }                </span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        // 检查每个3x3九宫格</span>
<span class="line">        for(int box = 0; box &lt; 9; box++){</span>
<span class="line">            check.clear();</span>
<span class="line">            int startRow = (box / 3) * 3;</span>
<span class="line">            int startCol = (box % 3) * 3;</span>
<span class="line">            </span>
<span class="line">            for(int i = startRow; i &lt; startRow + 3; i++){</span>
<span class="line">                for(int j = startCol; j &lt; startCol + 3; j++){</span>
<span class="line">                    if(board[i][j] != &#39;.&#39;){  // 跳过空格</span>
<span class="line">                        auto it = check.find(board[i][j]);</span>
<span class="line">                        if(it != check.end()){</span>
<span class="line">                            return false;</span>
<span class="line">                        }else{</span>
<span class="line">                            check[board[i][j]] = 1;</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化写法：使用数组代替哈希表，因为数独中数字范围有限。</p><p>用数组可以一次遍历处理所有的情况。直接以除以三的大小就可以确定所在宫的位置，不用逐一添加到哈希表中。</p><p>memset必需，因为要从0开始累加。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    bool isValidSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) {</span>
<span class="line">        int rows[9][9];</span>
<span class="line">        int columns[9][9];</span>
<span class="line">        int subboxes[3][3][9];</span>
<span class="line">        </span>
<span class="line">        memset(rows,0,sizeof(rows));</span>
<span class="line">        memset(columns,0,sizeof(columns));</span>
<span class="line">        memset(subboxes,0,sizeof(subboxes));</span>
<span class="line">        for (int i = 0; i &lt; 9; i++) {</span>
<span class="line">            for (int j = 0; j &lt; 9; j++) {</span>
<span class="line">                char c = board[i][j];</span>
<span class="line">                if (c != &#39;.&#39;) {</span>
<span class="line">                    int index = c - &#39;0&#39; - 1;</span>
<span class="line">                    rows[i][index]++;</span>
<span class="line">                    columns[j][index]++;</span>
<span class="line">                    subboxes[i / 3][j / 3][index]++;</span>
<span class="line">                    if (rows[i][index] &gt; 1 || columns[j][index] &gt; 1 || subboxes[i / 3][j / 3][index] &gt; 1) {</span>
<span class="line">                        return false;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(1)</li><li>空间复杂度：O(1)</li></ul>`,21)]))}const c=s(l,[["render",t]]),d=JSON.parse(`{"path":"/leetcode/20250830.html","title":"36. 有效的数独","lang":"zh-CN","frontmatter":{"date":"2025-08-30T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["数组","矩阵","哈希表"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":2,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"80ba8ba8c75bff3b5afbc4ea8491a6a78d1f7c85","time":1756518790000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mriyt"}]},"filePathRelative":"leetcode/20250830.md","excerpt":"\\n<p>请你判断一个 <code>9 x 9</code> 的数独是否有效。只需要 <strong>根据以下规则</strong> ，验证已经填入的数字是否有效即可。</p>\\n<ol>\\n<li>数字 <code>1-9</code> 在每一行只能出现一次。</li>\\n<li>数字 <code>1-9</code> 在每一列只能出现一次。</li>\\n<li>数字 <code>1-9</code> 在每一个以粗实线分隔的 <code>3x3</code> 宫内只能出现一次。（请参考示例图）</li>\\n</ol>\\n<p><strong>注意：</strong></p>\\n<ul>\\n<li>一个有效的数独（部分已被填充）不一定是可解的。</li>\\n<li>只需要根据以上规则，验证已经填入的数字是否有效即可。</li>\\n<li>空白格用 <code>'.'</code> 表示。</li>\\n</ul>"}`);export{c as comp,d as data};

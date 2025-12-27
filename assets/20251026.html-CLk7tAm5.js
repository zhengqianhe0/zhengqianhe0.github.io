import{_ as e,c as s,a,o as l}from"./app-Bpj5Mkzv.js";const i={};function c(d,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="_2043-简易银行系统" tabindex="-1"><a class="header-anchor" href="#_2043-简易银行系统"><span><a href="https://leetcode.cn/problems/simple-bank-system/" target="_blank" rel="noopener noreferrer">2043. 简易银行系统</a></span></a></h1><p>你的任务是为一个很受欢迎的银行设计一款程序，以自动化执行所有传入的交易（转账，存款和取款）。银行共有 <code>n</code> 个账户，编号从 <code>1</code> 到 <code>n</code> 。每个账号的初始余额存储在一个下标从 <strong>0</strong> 开始的整数数组 <code>balance</code> 中，其中第 <code>(i + 1)</code> 个账户的初始余额是 <code>balance[i]</code> 。</p><p>请你执行所有 <strong>有效的</strong> 交易。如果满足下面全部条件，则交易 <strong>有效</strong> ：</p><ul><li>指定的账户数量在 <code>1</code> 和 <code>n</code> 之间，且</li><li>取款或者转账需要的钱的总数 <strong>小于或者等于</strong> 账户余额。</li></ul><p>实现 <code>Bank</code> 类：</p><ul><li><code>Bank(long[] balance)</code> 使用下标从 <strong>0</strong> 开始的整数数组 <code>balance</code> 初始化该对象。</li><li><code>boolean transfer(int account1, int account2, long money)</code> 从编号为 <code>account1</code> 的账户向编号为 <code>account2</code> 的账户转帐 <code>money</code> 美元。如果交易成功，返回 <code>true</code> ，否则，返回 <code>false</code> 。</li><li><code>boolean deposit(int account, long money)</code> 向编号为 <code>account</code> 的账户存款 <code>money</code> 美元。如果交易成功，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li><li><code>boolean withdraw(int account, long money)</code> 从编号为 <code>account</code> 的账户取款 <code>money</code> 美元。如果交易成功，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">输入：</span>
<span class="line">[&quot;Bank&quot;, &quot;withdraw&quot;, &quot;transfer&quot;, &quot;deposit&quot;, &quot;transfer&quot;, &quot;withdraw&quot;]</span>
<span class="line">[[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]]</span>
<span class="line">输出：</span>
<span class="line">[null, true, true, true, false, false]</span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">Bank bank = new Bank([10, 100, 20, 50, 30]);</span>
<span class="line">bank.withdraw(3, 10);    // 返回 true ，账户 3 的余额是 $20 ，所以可以取款 $10 。</span>
<span class="line">                         // 账户 3 余额为 $20 - $10 = $10 。</span>
<span class="line">bank.transfer(5, 1, 20); // 返回 true ，账户 5 的余额是 $30 ，所以可以转账 $20 。</span>
<span class="line">                         // 账户 5 的余额为 $30 - $20 = $10 ，账户 1 的余额为 $10 + $20 = $30 。</span>
<span class="line">bank.deposit(5, 20);     // 返回 true ，可以向账户 5 存款 $20 。</span>
<span class="line">                         // 账户 5 的余额为 $10 + $20 = $30 。</span>
<span class="line">bank.transfer(3, 4, 15); // 返回 false ，账户 3 的当前余额是 $10 。</span>
<span class="line">                         // 所以无法转账 $15 。</span>
<span class="line">bank.withdraw(10, 50);   // 返回 false ，交易无效，因为账户 10 并不存在。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>n == balance.length</code></li><li><code>1 &lt;= n, account, account1, account2 &lt;= 105</code></li><li><code>0 &lt;= balance[i], money &lt;= 1012</code></li><li><code>transfer</code>, <code>deposit</code>, <code>withdraw</code> 三个函数，<strong>每个</strong> 最多调用 <code>104</code> 次</li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>直接设计</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Bank {</span>
<span class="line">    vector&lt;long long&gt; b;</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    Bank(vector&lt;long long&gt;&amp; balance) : b(balance) {}</span>
<span class="line"></span>
<span class="line">    bool transfer(int account1, int account2, long long money) {</span>
<span class="line">        if (account1 &gt; b.size() || account2 &gt; b.size() || b[account1 - 1] &lt; money) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        b[account1 - 1] -= money;</span>
<span class="line">        b[account2 - 1] += money;</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    bool deposit(int account, long long money) {</span>
<span class="line">        if (account &gt; b.size()) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        b[account - 1] += money;</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    bool withdraw(int account, long long money) {</span>
<span class="line">        if (account &gt; b.size() || b[account - 1] &lt; money) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        b[account - 1] -= money;</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><ul><li>时间复杂度：O(1)</li><li>空间复杂度：O(1)</li></ul>`,15)]))}const t=e(i,[["render",c]]),r=JSON.parse('{"path":"/leetcode/20251026.html","title":"2043. 简易银行系统","lang":"zh-CN","frontmatter":{"date":"2025-10-26T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["设计"]},"headers":[],"git":{"updatedTime":1761704241000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":1,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"81919479e8539e8d2389317ae4c774b0a7212f3e","time":1761704241000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20251026.md","excerpt":"\\n<p>你的任务是为一个很受欢迎的银行设计一款程序，以自动化执行所有传入的交易（转账，存款和取款）。银行共有 <code>n</code> 个账户，编号从 <code>1</code> 到 <code>n</code> 。每个账号的初始余额存储在一个下标从 <strong>0</strong> 开始的整数数组 <code>balance</code> 中，其中第 <code>(i + 1)</code> 个账户的初始余额是 <code>balance[i]</code> 。</p>\\n<p>请你执行所有 <strong>有效的</strong> 交易。如果满足下面全部条件，则交易 <strong>有效</strong> ：</p>"}');export{t as comp,r as data};

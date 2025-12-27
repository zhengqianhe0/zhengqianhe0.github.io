import{_ as s,c as e,a as i,o as a}from"./app-Bpj5Mkzv.js";const l={};function t(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="_3477-水果成篮-ii" tabindex="-1"><a class="header-anchor" href="#_3477-水果成篮-ii"><span><a href="https://leetcode.cn/problems/fruits-into-baskets-ii/" target="_blank" rel="noopener noreferrer">3477. 水果成篮 II</a></span></a></h1><p>给你两个长度为 <code>n</code> 的整数数组，<code>fruits</code> 和 <code>baskets</code>，其中 <code>fruits[i]</code> 表示第 <code>i</code> 种水果的 <strong>数量</strong>，<code>baskets[j]</code> 表示第 <code>j</code> 个篮子的 <strong>容量</strong>。</p><p>你需要对 <code>fruits</code> 数组从左到右按照以下规则放置水果：</p><ul><li>每种水果必须放入第一个 <strong>容量大于等于</strong> 该水果数量的 <strong>最左侧可用篮子</strong> 中。</li><li>每个篮子只能装 <strong>一种</strong> 水果。</li><li>如果一种水果 <strong>无法放入</strong> 任何篮子，它将保持 <strong>未放置</strong>。</li></ul><p>返回所有可能分配完成后，剩余未放置的水果种类的数量。</p><p><strong>示例 1</strong></p><p><strong>输入：</strong> fruits = [4,2,5], baskets = [3,5,4]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><ul><li><code>fruits[0] = 4</code> 放入 <code>baskets[1] = 5</code>。</li><li><code>fruits[1] = 2</code> 放入 <code>baskets[0] = 3</code>。</li><li><code>fruits[2] = 5</code> 无法放入 <code>baskets[2] = 4</code>。</li></ul><p>由于有一种水果未放置，我们返回 1。</p><p><strong>示例 2</strong></p><p><strong>输入：</strong> fruits = [3,6,1], baskets = [6,4,7]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><ul><li><code>fruits[0] = 3</code> 放入 <code>baskets[0] = 6</code>。</li><li><code>fruits[1] = 6</code> 无法放入 <code>baskets[1] = 4</code>（容量不足），但可以放入下一个可用的篮子 <code>baskets[2] = 7</code>。</li><li><code>fruits[2] = 1</code> 放入 <code>baskets[1] = 4</code>。</li></ul><p>由于所有水果都已成功放置，我们返回 0。</p><p><strong>提示：</strong></p><ul><li><code>n == fruits.length == baskets.length</code></li><li><code>1 &lt;= n &lt;= 105</code></li><li><code>1 &lt;= fruits[i], baskets[i] &lt;= 109</code></li><li><strong>相比于昨天的题目，数据变大，n²的时间复杂度会超时</strong></li></ul><h1 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h1><p>关键在于<strong>高效查找第一个可用篮子</strong>：</p><ol><li>对于每个水果，需要找到第一个容量≥该水果数量的篮子</li><li>找到后该篮子就被占用（容量设为-1）</li><li>统计找不到合适篮子的水果数量</li></ol><p>两个数组都是正整数。遍历fruits数组，每次遍历baskets数组，找到合适的就置0，后续就不会被再次找到。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class SegmentTree{</span>
<span class="line">	// 存储节点区间最大值</span>
<span class="line">    vector&lt;int&gt; mx;、</span>
<span class="line">    // 维护线段树：更新父节点的值为两个子节点的最大值</span>
<span class="line">    void maintain(int o){</span>
<span class="line">        mx[o]=max(mx[o*2],mx[o*2+1]);</span>
<span class="line">    }</span>
<span class="line">    void build(const vector&lt;int&gt;&amp;a,int o,int l,int r){</span>
<span class="line">        if(l==r){</span>
<span class="line">            mx[o]=a[l];</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line">        int m=(l+r)/2;</span>
<span class="line">        build(a,o*2,l,m);</span>
<span class="line">        build(a,o*2+1,m+1,r);</span>
<span class="line">        maintain(o);</span>
<span class="line">    }</span>
<span class="line">public:</span>
<span class="line">	// bit_width(n-1) 计算n-1的二进制位数</span>
<span class="line">	// 2&lt;&lt;bit_width(n-1) 确保空间足够，通常是4n大小</span>
<span class="line">    SegmentTree(const vector&lt;int&gt;&amp; a){</span>
<span class="line">        size_t n=a.size();</span>
<span class="line">        mx.resize(2&lt;&lt;bit_width(n-1));</span>
<span class="line">        // 根节点是编号1</span>
<span class="line">        build(a,1,0,n-1);</span>
<span class="line">    }</span>
<span class="line">    int findFirstAndUpdate(int o,int l,int r,int x){</span>
<span class="line">        if(mx[o]&lt;x){</span>
<span class="line">            return -1;</span>
<span class="line">        }</span>
<span class="line">        if(l==r){</span>
<span class="line">            mx[o]=-1;</span>
<span class="line">            return l;</span>
<span class="line">        }</span>
<span class="line">        int m=(l+r)/2;</span>
<span class="line">        int i=findFirstAndUpdate(o*2,l,m,x);</span>
<span class="line">        if(i&lt;0){</span>
<span class="line">            i=findFirstAndUpdate(o*2+1,m+1,r,x);</span>
<span class="line">        }</span>
<span class="line">        maintain(o);</span>
<span class="line">        return i;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numOfUnplacedFruits(vector&lt;int&gt;&amp; fruits, vector&lt;int&gt;&amp; baskets) {</span>
<span class="line">        SegmentTree t(baskets);</span>
<span class="line">        int n=baskets.size(),ans=0;</span>
<span class="line">        for(int x:fruits){</span>
<span class="line">            if(t.findFirstAndUpdate(1,0,n-1,x)&lt;0){</span>
<span class="line">                ans++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度分析</p><p>时间复杂度：O(n²).</p><p>空间复杂度：O(1)。</p>`,27)]))}const r=s(l,[["render",t]]),p=JSON.parse('{"path":"/leetcode/20250806.html","title":"3477. 水果成篮 II","lang":"zh-CN","frontmatter":{"date":"2025-08-06T00:00:00.000Z","category":["LeetCode每日一题"],"tag":["哈希表","数组","滑动窗口"]},"headers":[],"git":{"updatedTime":1757033208000,"contributors":[{"name":"zhengqianhe0","username":"zhengqianhe0","email":"1821984431@qq.com","commits":3,"url":"https://github.com/zhengqianhe0"}],"changelog":[{"hash":"74ad287b3313cc2928def8d57bf83e6110f9aa4d","time":1757033208000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"整理分类"},{"hash":"0e3ed430fa8bf9c9b74b9ec1c753872023c46258","time":1754556196000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"},{"hash":"fe0e3caa767126240897b6aae25bcdfbb072cc45","time":1754355094000,"email":"1821984431@qq.com","author":"zhengqianhe0","message":"mryt"}]},"filePathRelative":"leetcode/20250806.md","excerpt":"\\n<p>给你两个长度为 <code>n</code> 的整数数组，<code>fruits</code> 和 <code>baskets</code>，其中 <code>fruits[i]</code> 表示第 <code>i</code> 种水果的 <strong>数量</strong>，<code>baskets[j]</code> 表示第 <code>j</code> 个篮子的 <strong>容量</strong>。</p>\\n<p>你需要对 <code>fruits</code> 数组从左到右按照以下规则放置水果：</p>\\n<ul>\\n<li>每种水果必须放入第一个 <strong>容量大于等于</strong> 该水果数量的 <strong>最左侧可用篮子</strong> 中。</li>\\n<li>每个篮子只能装 <strong>一种</strong> 水果。</li>\\n<li>如果一种水果 <strong>无法放入</strong> 任何篮子，它将保持 <strong>未放置</strong>。</li>\\n</ul>"}');export{r as comp,p as data};

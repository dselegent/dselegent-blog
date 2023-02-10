import{ab as n,G as s,H as a,ac as p}from"./framework-09305b5d.js";const t={},e=p(`<h1 id="_6-柱状图" tabindex="-1"><a class="header-anchor" href="#_6-柱状图" aria-hidden="true">#</a> 6.柱状图</h1><ul><li><p>常见效果</p><ul><li><p>标记</p><ul><li>markPoint：标记点（最大值，最小值）</li><li>markLine：标记线（平均值）</li></ul></li><li><p>显示</p><ul><li>label：数值显示</li><li>barWidth：柱宽度</li><li>调换x轴y轴实现横向柱状图</li></ul></li></ul></li></ul><h2 id="_6-1柱状图图表-两大步骤" tabindex="-1"><a class="header-anchor" href="#_6-1柱状图图表-两大步骤" aria-hidden="true">#</a> 6.1柱状图图表（两大步骤）</h2><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><h2 id="_6-2找官网实例" tabindex="-1"><a class="header-anchor" href="#_6-2找官网实例" aria-hidden="true">#</a> 6.2找官网实例</h2><p>引入到html页面中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 柱状图1模块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例化对象</span>
  <span class="token keyword">let</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.bar .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 指定配置和数据</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#3398DB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;shadow&quot;</span> <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;4%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;直接访问&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">&quot;60%&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3根据需求定制" tabindex="-1"><a class="header-anchor" href="#_6-3根据需求定制" aria-hidden="true">#</a> 6.3根据需求定制</h2><p>根据需求定制</p><ul><li><p>修改图表柱形颜色 #2f89cf</p><ul><li>修改图表大小 top 为 10px bottom 为 4% grid决定我们的柱状图的大小</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// color设置我们线条的颜色 注意后面是个数组
   color: [&#39;#2f89cf&#39;],
// 网格配置  grid可以控制线形图 柱状图 图表离上下左右边的距离
   grid: {
     left: &#39;0%&#39;,
     top: &#39;10px&#39;,
     right: &#39;0%&#39;,
     bottom: &#39;4%&#39;,
     // 是否显示刻度标签 如果是true 就显示 否则反之
     containLabel: true,
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>X轴相关设置 xAxis <ul><li>文本颜色设置为 rgba(255,255,255,.6) 字体大小为 12px</li><li>X轴线的样式 不显示</li></ul></li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 设置x轴标签文字样式
// x轴的文字颜色和大小
     axisLabel: {
       color: &quot;rgba(255,255,255,.6)&quot;,
       fontSize: &quot;12&quot;
     },
   //  坐标轴轴线相关设置。
   axisLine: {
     // 是否显示坐标轴轴线。
     show: false,
     // 如果想要设置单独的线条样式
     lineStyle: {
       color: &#39;rgba(255,255,255,.1)&#39;,
       width: 1,
       type: &#39;solid&#39;,
     },
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Y 轴相关定制 <ul><li>文本颜色设置为 rgba(255,255,255,.6) 字体大小为 12px</li><li>Y 轴线条样式 更改为 1像素的 rgba(255,255,255,.1) 边框</li><li>分隔线的颜色修饰为 1像素的 rgba(255,255,255,.1)</li></ul></li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>     // 修改刻度标签 相关样式
     axisLabel: {
       color: &#39;rgba(255,255,255,.6) &#39;,
       fontSize: 12,
     },
     // y轴坐标轴的线条改为了 2像素
     axisLine: {
       lineStyle: {
         color: &#39;rgba(255,255,255,.1)&#39;,
         width: 2,
       },
     },
     // y轴分割线的颜色
     splitLine: {
       lineStyle: {
         color: &#39;rgba(255,255,255,.1)&#39;,
       },
     },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改柱形为圆角以及柱子宽度 series 里面设置</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul><p>// 线的数据 series: [ { // 移入提示文字 name: &#39;直接访问&#39;, type: &#39;bar&#39;, // 柱子的宽度 barWidth: &#39;35%&#39;, // 数据 data: [200, 300, 300, 900, 1500, 1200, 600], itemStyle: { // 修改柱子圆角 barBorderRadius: 5, }, }, ],</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
- 更换对应数据

~~~JavaScript
// x轴中更换data数据
data: [ &quot;旅游行业&quot;,&quot;教育培训&quot;, &quot;游戏行业&quot;, &quot;医疗行业&quot;, &quot;电商行业&quot;, &quot;社交行业&quot;, &quot;金融行业&quot; ],
// series 更换数据
data: [200, 300, 300, 900, 1500, 1200, 600]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>让图表跟随屏幕自适应</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 柱形图1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例化对象</span>
  <span class="token keyword">const</span> barEchart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.bar&gt;.chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 指定配置和数据</span>
  <span class="token keyword">const</span> barOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// color设置我们线条的颜色 注意后面是个数组</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#2f89cf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 图表的提示框组件</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 触发方式</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 网格配置  grid可以控制线形图 柱状图 图表离上下左右边的距离</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否显示刻度标签 如果是true 就显示 否则反之</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置x轴的相关配置</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 坐标轴类型 类目轴，适用于离散的类目数据</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">/*
      类目数据，在类目轴（type: &#39;category&#39;）中有效。
      如果没有设置 type，但是设置了 axis.data，则认为 type 是 &#39;category&#39;。
      */</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;旅游行业&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;教育培训&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;游戏行业&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;医疗行业&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;电商行业&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;社交行业&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;金融行业&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否让我们的线条和坐标轴有缝隙</span>
      <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 坐标轴刻度相关设置。</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。</span>
        <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 修改刻度标签 相关样式</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.6) &#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//  坐标轴轴线相关设置。</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否显示坐标轴轴线。</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 如果想要设置单独的线条样式</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.1)&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 修改刻度标签 相关样式</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.6) &#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// y轴坐标轴的线条改为了 2像素</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.1)&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// y轴分割线的颜色</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,.1)&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 移入提示文字</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;直接访问&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 柱子的宽度</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">&#39;35%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 数据</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 修改柱子圆角</span>
          <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 把配置给实例对象</span>
  barEchart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>barOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> barEchart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i0.hdslb.com/bfs/album/dd0317b888c72464d8d9168792f0f1591d6e31b3.png" alt="image-20220728230034650"><h2 id="_6-4柱状图2定制" tabindex="-1"><a class="header-anchor" href="#_6-4柱状图2定制" aria-hidden="true">#</a> 6.4柱状图2定制</h2><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 修改图形大小 grid</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 图标位置</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;22%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求2： 不显示x轴</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求3： y轴相关定制</p><ul><li>不显示y轴线和相关刻度</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//不显示y轴线条</span>
<span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 不显示刻度</span>
<span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>y轴文字的颜色设置为白色</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求4： 修改第一组柱子相关样式（条状）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;条&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// 柱子之间的距离</span>
<span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
<span class="token comment">//柱子的宽度</span>
<span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token comment">// 柱子设为圆角</span>
<span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>       
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置第一组柱子内百分比显示数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图形上的文本标签</span>
<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token comment">// 图形内显示</span>
         <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
         <span class="token comment">// 文字的显示格式</span>
         <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{c}%&quot;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置第一组柱子不同颜色</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明颜色数组</span>
<span class="token keyword">var</span> myColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;#1089E7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F57474&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#56D0E3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F8B448&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#8B78F6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 2. 给 itemStyle  里面的color 属性设置一个 返回值函数</span>
  <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>  
            <span class="token comment">// params 传进来的是柱子对象</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// dataIndex 是当前柱子的索引号</span>
            <span class="token keyword">return</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
         
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求5： 修改第二组柱子的相关配置（框状）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  	    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;框&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#00c1de&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">15</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">19325</span><span class="token punctuation">,</span> <span class="token number">23438</span><span class="token punctuation">,</span> <span class="token number">31000</span><span class="token punctuation">,</span> <span class="token number">121594</span><span class="token punctuation">,</span> <span class="token number">134141</span><span class="token punctuation">,</span> <span class="token number">681807</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求6： 给y轴添加第二组数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;印尼&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;美国&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;印度&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;世界人口(万)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示y轴的线</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示刻度</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token comment">// 不显示y轴的线</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示刻度</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求7： 设置两组柱子层叠以及更换数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给series  第一个对象里面的 添加 </span>
<span class="token comment">// 控制当前数据使用哪一个y轴</span>
<span class="token comment">// 左边的y坐标轴的索引是0</span>
<span class="token comment">// 右边边的y坐标轴的索引是1</span>
<span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token comment">// 给series  第二个对象里面的 添加 </span>
<span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token comment">// series 第一个对象里面的data</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series 第二个对象里面的data</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// y轴更换第一个对象更换data数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HTML5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CSS3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VUE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NODE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// y轴更换第二个对象更换data数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;#1089E7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#F57474&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#56D0E3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#F8B448&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#8B78F6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 1. 实例化对象</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.bar2 .chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. 指定配置和数据</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;22%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// containLabel: true,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 不显示x轴的相关信息</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 数据反转</span>
        <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;javascript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;VUE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NODE&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示y轴的线</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示刻度</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示y轴的线</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示刻度</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;条&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// yAxisIndex: 0,</span>
        <span class="token comment">// 修改第一组柱子的圆角</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token comment">// 此时的color 可以修改柱子的颜色</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token parameter">params</span> <span class="token operator">=&gt;</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token comment">// params 传进来的是柱子对象</span>
          <span class="token comment">// console.log(params);</span>
          <span class="token comment">// dataIndex 是当前柱子的索引号</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 柱子之间的距离</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token comment">//柱子的宽度</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token comment">// 显示柱子内的文字</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;inside&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// {c} 会自动的解析为 数据  data里面的数据</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{c}%&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;框&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#00c1de&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/8d39c7b47fb60ff7defb9225183f2313cf5a1c8e.png" alt="image-20220729153320110" tabindex="0" loading="lazy"><figcaption>image-20220729153320110</figcaption></figure>`,43),o=[e];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","03.html.vue"]]);export{u as default};

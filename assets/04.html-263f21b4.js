import{ab as n,G as s,H as a,ac as p}from"./framework-844b12a4.js";const t={},e=p(`<h1 id="_7-折线图" tabindex="-1"><a class="header-anchor" href="#_7-折线图" aria-hidden="true">#</a> 7.折线图</h1><h2 id="_7-1常见效果" tabindex="-1"><a class="header-anchor" href="#_7-1常见效果" aria-hidden="true">#</a> 7.1常见效果</h2><p>常见效果</p><ul><li>标记 <ul><li>markPoint：标记点（最大值，最小值）</li><li>markLine：标记线（平均值）</li><li>markArea：标注区间</li></ul></li><li>线条控制 <ul><li>smooth：平滑</li><li>lineStyle：线条样式</li></ul></li><li>填充风格 <ul><li>areaStyle：填充区域风格</li></ul></li><li>紧挨边缘 <ul><li>boundaryGap (配置在xAxis中)</li></ul></li><li>缩放：脱离0值比例 <ul><li>scale</li></ul></li><li>堆叠图（当有多个系列使图表显得杂乱无章时使用） <ul><li>atack</li></ul></li><li>显示 <ul><li>label：数值显示</li></ul></li></ul><h2 id="_7-2折线图1-人员变化模块制作" tabindex="-1"><a class="header-anchor" href="#_7-2折线图1-人员变化模块制作" aria-hidden="true">#</a> 7.2折线图1 人员变化模块制作</h2><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 修改折线图大小，显示边框设置颜色：#012f4a，并且显示刻度标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     // 设置网格样式
     grid: { 
       top: &#39;20%&#39;,
       left: &#39;3%&#39;,
       right: &#39;4%&#39;,
       bottom: &#39;3%&#39;,
       show: true,// 显示边框
       borderColor: &#39;#012f4a&#39;,// 边框颜色
       containLabel: true // 包含刻度文字在内
     },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求2： 修改图例组件中的文字颜色 #4c9bfd， 距离右侧 right 为 10%</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // 图例组件
     legend: {
       textStyle: {
         color: &#39;#4c9bfd&#39; // 图例文字颜色
       },
       right: &#39;10%&#39; // 距离右边10%
     },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求3： x轴相关配置</p><ul><li>刻度去除</li><li>x轴刻度标签字体颜色：#4c9bfd</li><li>剔除x坐标轴线颜色（将来使用Y轴分割线)</li><li>轴两端是不需要内间距 boundaryGap</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     xAxis: {
       type: &#39;category&#39;,
       data: [&quot;周一&quot;, &quot;周二&quot;],
       axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: &#39;#4c9bfd&#39; // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        boundaryGap: false  // 去除轴内间距
     },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求4： y轴的定制</p><ul><li>刻度去除</li><li>字体颜色：#4c9bfd</li><li>分割线颜色：#012f4a</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     yAxis: {
       type: &#39;value&#39;,
       axisTick: {
         show: false  // 去除刻度
       },
       axisLabel: {
         color: &#39;#4c9bfd&#39; // 文字颜色
       },
       splitLine: {
         lineStyle: {
           color: &#39;#012f4a&#39; // 分割线颜色
         }
       }
     },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求5： 两条线形图定制</p><ul><li>颜色分别：#00f2f1 #ed3f35</li><li>把折线修饰为圆滑 series 数据中添加 smooth 为 true</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     color: [&#39;#00f2f1&#39;, &#39;#ed3f35&#39;],
     series: [{
       name:&#39;新增粉丝&#39;,
       data: [820, 932, 901, 934, 1290, 1330, 1320],
       type: &#39;line&#39;,
       // 折线修饰为圆滑
       smooth: true,
       },{
       name:&#39;新增游客&#39;,
       data: [100, 331, 200, 123, 233, 543, 400],
       type: &#39;line&#39;,
       smooth: true,
     }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求6： 配置数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // x轴的文字
 xAxis: {
   type: &#39;category&#39;,
   data: [&#39;1月&#39;, &#39;2月&#39;, &#39;3月&#39;, &#39;4月&#39;, &#39;5月&#39;, &#39;6月&#39;, &#39;7月&#39;, &#39;8月&#39;, &#39;9月&#39;, &#39;10月&#39;, &#39;11月&#39;, &#39;12月&#39;],
 // 图标数据
     series: [{
       name:&#39;新增粉丝&#39;,
       data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
       type: &#39;line&#39;,
       smooth: true
     },{
       name:&#39;新增游客&#39;,
       data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
       type: &#39;line&#39;,
       smooth: true
       }
     }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求7： 新增需求 点击 2020年 2021年 数据发生变化</p><p>以下是后台送过来数据（ajax请求过来的）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var yearData = [
       {
         year: &#39;2020&#39;,  // 年份
         data: [  // 两个数组是因为有两条线
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
           ]
       },
       {
         year: &#39;2021&#39;,  // 年份
         data: [  // 两个数组是因为有两条线
              [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
             [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
           ]
       }
      ];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>tab栏切换事件</li><li>点击2020按钮 需要把 series 第一个对象里面的data 换成 2020年对象里面data[0]</li><li>点击2020按钮 需要把 series 第二个对象里面的data 换成 2020年对象里面data[1]</li><li>2021 按钮同样道理</li></ul><p>完整代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 折线图1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1&gt;.chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> yearData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 年份</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 两个数组是因为有两条线</span>
        <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">213</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2021&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 年份</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 两个数组是因为有两条线</span>
        <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">197</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">143</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">178</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> myOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过这个color修改两条线的颜色</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#00f2f1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ed3f35&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果series 对象有name 值，则 legend可以不用写data</span>
      <span class="token comment">// 修改图例组件 文字颜色</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 这个10% 必须加引号</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示边框</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 包含刻度文字在内</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12月&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去除刻度线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文本颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去除轴线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去除刻度线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文本颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去除轴线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分割线颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;新增粉丝&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;新增游客&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>myOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>tagName <span class="token operator">!==</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.line1 a.active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myOptions<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
    myOptions<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> yearData<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>myOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/7f7eaf66a989fac6812cabf1ca0e96876a5e3051.png" alt="image-20220729161855377" tabindex="0" loading="lazy"><figcaption>image-20220729161855377</figcaption></figure><h2 id="_7-3折线图2-播放量模块制作" tabindex="-1"><a class="header-anchor" href="#_7-3折线图2-播放量模块制作" aria-hidden="true">#</a> 7.3折线图2 播放量模块制作</h2><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 更换图例组件文字颜色 rgba(255,255,255,.5) 文字大小为12</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求2： 修改图表大小</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求3： 修改x轴相关配置</p><ul><li>修改文本颜色为rgba(255,255,255,.6) 文字大小为 12</li><li>x轴线的颜色为 rgba(255,255,255,.2)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>     <span class="token comment">// 文本颜色为rgba(255,255,255,.6)  文字大小为 12</span>
     <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// x轴线的颜色为   rgba(255,255,255,.2)</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.2)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求4： 修改y轴的相关配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
	   <span class="token comment">// 修改分割线的颜色</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求5： 修改两个线模块配置(注意在series 里面定制)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>       <span class="token comment">//第一条 线是圆滑</span>
       <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 单独修改线的样式</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 填充区域</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 渐变色，只需要复制即可</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.4)&quot;</span>   <span class="token comment">// 渐变色的起始颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.1)&quot;</span>   <span class="token comment">// 渐变线的结束颜色</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点 小圆点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
       <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;转发量&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.4)&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.1)&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点 小圆点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
         <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求6： 更换数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// x轴更换数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;01&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;02&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;03&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;04&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;05&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;07&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;08&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;09&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;19&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;29&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  第一个对象data数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  第二个对象data数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 折线图2 模块制作</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.line2 .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;邮件营销&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;联盟广告&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;视频广告&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;直接访问&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;搜索引擎&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// x轴更换数据</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;01&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;02&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;03&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;04&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;05&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;07&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;08&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;09&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;19&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;25&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;29&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;30&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本颜色为rgba(255,255,255,.6)  文字大小为 12</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// x轴线的颜色为   rgba(255,255,255,.2)</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.2)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 修改分割线的颜色</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;邮件营销&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 单独修改当前线条的样式</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 填充颜色设置</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.4)&quot;</span> <span class="token comment">// 渐变色的起始颜色</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.1)&quot;</span> <span class="token comment">// 渐变线的结束颜色</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token number">40</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;联盟广告&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.4)&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.1)&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点 小圆点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">130</span><span class="token punctuation">,</span>
          <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">80</span><span class="token punctuation">,</span>
          <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">90</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">140</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">130</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">80</span><span class="token punctuation">,</span>
          <span class="token number">70</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token number">120</span><span class="token punctuation">,</span>
          <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token number">99</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token number">20</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/11768b2dc68d0af0a2eb70b4206f4bfae027925c.png" alt="屏幕截图 2022-07-30 183240" tabindex="0" loading="lazy"><figcaption>屏幕截图 2022-07-30 183240</figcaption></figure>`,47),o=[e];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","04.html.vue"]]);export{u as default};

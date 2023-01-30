import{ab as n,G as s,H as a,ac as p}from"./framework-844b12a4.js";const e={},t=p(`<h1 id="_5-echarts-各个配置项详细说明总结" tabindex="-1"><a class="header-anchor" href="#_5-echarts-各个配置项详细说明总结" aria-hidden="true">#</a> 5.echarts 各个配置项详细说明总结</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全图默认背景</span>
    <span class="token comment">// backgroundColor: &#39;rgba(0,0,0,0)&#39;,</span>

    <span class="token comment">// 默认色板</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ff7f50&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#87cefa&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#da70d6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#32cd32&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#6495ed&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;#ff69b4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#ba55d3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#cd5c5c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#ffa500&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#40e0d0&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;#1e90ff&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#ff6347&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#7b68ee&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#00fa9a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#ffd700&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;#6699FF&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#ff6666&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#3cb371&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#b8860b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#30e0e0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 图表标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为左对齐，可选为：</span>
                                   <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token comment">//textAlign: null          // 水平对齐方式，默认根据x设置自动调整</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 标题边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 标题边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 标题内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 主副标题纵向间隔，单位px，默认为10，</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bolder&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>          <span class="token comment">// 主标题文字颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subtextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#aaa&#39;</span>          <span class="token comment">// 副标题文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 图例</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>               <span class="token comment">// 水平安放位置，默认为全图居中，可选为：</span>
                                   <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 图例边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 图例边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 图例内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 图例图形宽度</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 图例图形高度</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>          <span class="token comment">// 图例文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 值域</span>
    <span class="token literal-property property">dataRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>        <span class="token comment">// 布局方式，默认为垂直布局，可选为：</span>
                                   <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为全图左对齐，可选为：</span>
                                   <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>               <span class="token comment">// 垂直安放位置，默认为全图底部，可选为：</span>
                                   <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 值域边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 值域边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 值域内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 值域图形宽度，线性渐变水平布局宽度为该值 * 10</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 值域图形高度，线性渐变垂直布局高度为该值 * 10</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>            <span class="token comment">// 分割段数，默认为5，为0时为线性渐变</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;#1e90ff&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#f0ffff&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//颜色 </span>
        <span class="token comment">//text:[&#39;高&#39;,&#39;低&#39;],         // 文本，默认为数值文本</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>          <span class="token comment">// 值域文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>                <span class="token comment">// 水平安放位置，默认为全图右对齐，可选为：</span>
                                   <span class="token comment">// &#39;center&#39; ¦ &#39;left&#39; ¦ &#39;right&#39;</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// &#39;top&#39; ¦ &#39;bottom&#39; ¦ &#39;center&#39;</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#1e90ff&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#22bb22&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#4b0082&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#d2691e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 工具箱背景颜色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 工具箱边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 工具箱边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 工具箱内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>              <span class="token comment">// 工具箱图形宽度</span>
        <span class="token literal-property property">featureImageIcon</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 自定义图片icon</span>
        <span class="token literal-property property">featureTitle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mark</span> <span class="token operator">:</span> <span class="token string">&#39;辅助线开关&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markUndo</span> <span class="token operator">:</span> <span class="token string">&#39;删除辅助线&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markClear</span> <span class="token operator">:</span> <span class="token string">&#39;清空辅助线&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoom</span> <span class="token operator">:</span> <span class="token string">&#39;区域缩放&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoomReset</span> <span class="token operator">:</span> <span class="token string">&#39;区域缩放后退&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataView</span> <span class="token operator">:</span> <span class="token string">&#39;数据视图&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineChart</span> <span class="token operator">:</span> <span class="token string">&#39;折线图切换&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barChart</span> <span class="token operator">:</span> <span class="token string">&#39;柱形图切换&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">restore</span> <span class="token operator">:</span> <span class="token string">&#39;还原&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">saveAsImage</span> <span class="token operator">:</span> <span class="token string">&#39;保存为图片&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 提示框</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>           <span class="token comment">// 触发类型，默认数据触发，见下图，可选为：&#39;item&#39; ¦ &#39;axis&#39;</span>
        <span class="token literal-property property">showDelay</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 显示延迟，添加显示延迟可以避免频繁切换，单位ms</span>
        <span class="token literal-property property">hideDelay</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>            <span class="token comment">// 隐藏延迟，单位ms</span>
        <span class="token literal-property property">transitionDuration</span> <span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>  <span class="token comment">// 动画变换时间，单位s</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0.7)&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 提示背景颜色，默认为透明度为0.7的黑色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 提示边框颜色</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>           <span class="token comment">// 提示边框圆角，单位px，默认为4</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 提示边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 提示内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">axisPointer</span> <span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
            <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>          <span class="token comment">// 直线指示器样式设置</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#48b&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>                       <span class="token comment">// 阴影指示器样式设置</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>                   <span class="token comment">// 阴影大小</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(150,150,150,0.3)&#39;</span>  <span class="token comment">// 阴影颜色</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 区域缩放控制器</span>
    <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// &#39;horizontal&#39; ¦ &#39;vertical&#39;</span>
        <span class="token comment">// x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（x坐标，单位px）</span>
        <span class="token comment">// y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（y坐标，单位px）</span>
        <span class="token comment">// width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配</span>
        <span class="token comment">// height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 背景颜色</span>
        <span class="token literal-property property">dataBackgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>            <span class="token comment">// 数据背景颜色</span>
        <span class="token literal-property property">fillerColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(144,197,237,0.2)&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 填充颜色</span>
        <span class="token literal-property property">handleColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(70,130,180,0.8)&#39;</span>     <span class="token comment">// 手柄颜色</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 网格</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token comment">// width: {totalWidth} - x - x2,</span>
        <span class="token comment">// height: {totalHeight} - y - y2,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 类目轴</span>
    <span class="token literal-property property">categoryAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>    <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持&#39;start&#39; | &#39;end&#39;</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 类目起始和结束两端空白策略</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#48b&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;rgba(250,250,250,0.3)&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;rgba(200,200,200,0.3)&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 数值型坐标轴默认参数</span>
    <span class="token literal-property property">valueAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持&#39;start&#39; | &#39;end&#39;</span>
        <span class="token literal-property property">nameTextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 坐标轴文字样式，默认取全局样式</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 数值起始和结束两端空白策略</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>        <span class="token comment">// 分割段数，默认为5</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#48b&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;rgba(250,250,250,0.3)&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;rgba(200,200,200,0.3)&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">polar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token string">&#39;75%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitNumber</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">areaStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;rgba(250,250,250,0.3)&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;rgba(200,200,200,0.3)&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 柱形图默认参数</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">barMinHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">// 最小高度改为0</span>
        <span class="token comment">// barWidth: null,        // 默认自适应</span>
        <span class="token literal-property property">barGap</span><span class="token operator">:</span> <span class="token string">&#39;30%&#39;</span><span class="token punctuation">,</span>            <span class="token comment">// 柱间距离，默认为柱形宽度的30%，可设固定值</span>
        <span class="token literal-property property">barCategoryGap</span> <span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 类目间柱形距离，默认为类目间距的20%，可设固定值</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;各异&#39;,</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>           <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>            <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;各异&#39;,</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 折线图默认参数</span>
    <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//smooth : false,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 拐点图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 拐点图形旋转控制</span>
        <span class="token literal-property property">showAllSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span>    <span class="token comment">// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// K线图默认参数</span>
    <span class="token literal-property property">k</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// barWidth : null          // 默认自适应</span>
        <span class="token comment">// barMaxWidth : null       // 默认自适应 </span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// 阳线填充颜色</span>
                <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">&#39;#00aa11&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 阴线填充颜色</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ff3200&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 阳线边框颜色</span>
                    <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">&#39;#00aa11&#39;</span>   <span class="token comment">// 阴线边框颜色</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token comment">// color0: 各异</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 散点图默认参数</span>
    <span class="token literal-property property">scatter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//symbol: null,      // 图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>       <span class="token comment">// 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
        <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 大规模散点图</span>
        <span class="token literal-property property">largeThreshold</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span><span class="token comment">// 大规模阀值，large为true且数据量&gt;largeThreshold才启用大规模模式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: &#39;各异&#39;</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为&#39;top&#39;，垂直布局为&#39;right&#39;，可选为</span>
                    <span class="token comment">//           &#39;inside&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 雷达图默认参数</span>
    <span class="token literal-property property">radar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span>           <span class="token comment">// 可计算特性参数，空数据拖拽提示图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 饼图默认参数</span>
    <span class="token literal-property property">pie</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;75%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// 默认逆时针</span>
        <span class="token literal-property property">startAngle</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minAngle</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 最小角度改为0</span>
        <span class="token literal-property property">selectedOffset</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>         <span class="token comment">// 选中是扇区偏移量</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;outer&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: &#39;outer&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mapType</span><span class="token operator">:</span> <span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 各省的mapType暂时都用中文</span>
        <span class="token literal-property property">mapLocation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span> <span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span> <span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
            <span class="token comment">// width    // 自适应</span>
            <span class="token comment">// height   // 自适应</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showLegendSymbol</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 显示图例颜色标识（系列标识的小圆点），存在legend时生效</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token comment">//rgba(135,206,250,0.8)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(139,69,19,1)&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>                 <span class="token comment">// 也是选中样式</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,215,0,0.8)&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(139,69,19,1)&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">force</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数据map到圆的半径的最小值和最大值</span>
        <span class="token literal-property property">minRadius</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxRadius</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">density</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attractiveness</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token comment">// 初始化的随机大小位置</span>
        <span class="token literal-property property">initSize</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token comment">// 向心力因子，越大向心力越大</span>
        <span class="token literal-property property">centripetal</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 冷却因子</span>
        <span class="token literal-property property">coolDown</span> <span class="token operator">:</span> <span class="token number">0.99</span><span class="token punctuation">,</span>
        <span class="token comment">// 分类里如果有样式会覆盖节点默认样式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">brushType</span> <span class="token operator">:</span> <span class="token string">&#39;both&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#f08c2e&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">&#39;#5182ab&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">&#39;#5182ab&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">chord</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;65%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;75%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">padding</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sort</span> <span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">// can be &#39;none&#39;, &#39;ascending&#39;, &#39;descending&#39;</span>
        <span class="token literal-property property">sortSub</span> <span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">// can be &#39;none&#39;, &#39;ascending&#39;, &#39;descending&#39;</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScale</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScaleText</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#000&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#666&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#000&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">island</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">calculateStep</span><span class="token operator">:</span> <span class="token number">0.1</span>  <span class="token comment">// 滚轮可计算步长 0.1 = 10%</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markPoint</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;pin&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// 标注类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>        <span class="token comment">// 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null, // 标注旋转控制</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异，</span>
                <span class="token comment">// borderColor: 各异,     // 标注边线颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">// 标注边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;inside&#39;</span> <span class="token comment">// 可选为&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// position: &#39;inside&#39;  // &#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;arrow&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
        <span class="token comment">// 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 标线起始和结束的symbol旋转控制</span>
        <span class="token comment">//symbolRotate : null,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,           // 标线主色，线色，symbol主色</span>
                <span class="token comment">// borderColor: 随color,     // 标线symbol边框颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 标线symbol边框线宽，单位px，默认为2</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token comment">// 可选为 &#39;start&#39;|&#39;end&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;inside&#39;</span><span class="token punctuation">,</span>  
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">// 默认使用全局文本样式，详见TEXTSTYLE</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// color: 随borderColor, // 主色，线色，优先级高于borderColor和color</span>
                    <span class="token comment">// width: 随borderWidth, // 优先于borderWidth</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,0)&#39;</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: &#39;inside&#39; // &#39;left&#39;|&#39;right&#39;|&#39;top&#39;|&#39;bottom&#39;</span>
                    <span class="token comment">// textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">&#39;Arial, Verdana, sans-serif&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily2</span><span class="token operator">:</span> <span class="token string">&#39;微软雅黑&#39;</span><span class="token punctuation">,</span>    <span class="token comment">// IE8- 字体模糊并且不支持不同字体混排，额外指定一份</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontStyle</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 默认标志图形类型列表</span>
    <span class="token literal-property property">symbolList</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;triangle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;diamond&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;emptyCircle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;emptyRectangle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;emptyTriangle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;emptyDiamond&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loadingText</span> <span class="token operator">:</span> <span class="token string">&#39;Loading...&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 可计算特性配置，孤岛，提示颜色</span>
    <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>              <span class="token comment">// 默认关闭可计算特性</span>
    <span class="token literal-property property">calculableColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,165,0,0.6)&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 拖拽提示边框颜色</span>
    <span class="token literal-property property">calculableHolderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可计算占位提示颜色</span>
    <span class="token literal-property property">nameConnector</span><span class="token operator">:</span> <span class="token string">&#39; &amp; &#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueConnector</span><span class="token operator">:</span> <span class="token string">&#39; : &#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationThreshold</span><span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">,</span>       <span class="token comment">// 动画元素阀值，产生的图形原素超过2500不出动画</span>
    <span class="token literal-property property">addDataAnimation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// 动态数据接口是否开启动画效果</span>
    <span class="token literal-property property">animationDuration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationEasing</span><span class="token operator">:</span> <span class="token string">&#39;ExponentialOut&#39;</span>    <span class="token comment">//BounceOut</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(r,c){return s(),a("div",null,o)}const u=n(e,[["render",l],["__file","02.html.vue"]]);export{u as default};

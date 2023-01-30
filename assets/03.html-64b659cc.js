import{ab as n,G as s,H as a,ac as e}from"./framework-844b12a4.js";const p={},t=e(`<h1 id="_03-【sass语法介绍-嵌套】" tabindex="-1"><a class="header-anchor" href="#_03-【sass语法介绍-嵌套】" aria-hidden="true">#</a> 03 【Sass语法介绍-嵌套】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>在企业的实际项目开发中，Sass 的嵌套可以说是非常非常有用的，它可以让你的 CSS 代码易于管理和维护，看起来也比较清晰，这也是 Sass 中很基础的一个知识点，首先掌握这个至关重要！在此章节我们将学习 Sass 嵌套中的嵌套规则、属性嵌套、父选择器和占位符选择器。Sass 嵌套式一个很基础也很简单的语法，关键在于要多多练习使用！</p><h2 id="_2-什么是嵌套" tabindex="-1"><a class="header-anchor" href="#_2-什么是嵌套" aria-hidden="true">#</a> 2.什么是嵌套？</h2><p>在一般编写 CSS 的时候呢，我们一遍一遍的编写相同的选择器去处理深层级的样式，而 Sass 给你一种轻松的方式，你可以在一个样式规则中直接编写另一个样式规则，而不是重复相同的选择器，Sass 将自动组合内外部的选择器。</p><p>通俗点说就是：你可以在父选择器的样式中直接编写子元素的样式，同理你可以在一个子元素的样式中再去编写孙元素的样式，可以一层一层的嵌套着去写样式。</p><p>一般来说 Sass 中的嵌套应用于以下几种场景：</p><ul><li>样式的嵌套</li><li>父选择器</li><li>占位符选择器</li><li>属性嵌套</li></ul><h2 id="_3-样式的嵌套" tabindex="-1"><a class="header-anchor" href="#_3-样式的嵌套" aria-hidden="true">#</a> 3.样式的嵌套</h2><h3 id="_3-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基本使用" aria-hidden="true">#</a> 3.1 基本使用</h3><p><strong>父选择器里可以嵌套子选择器</strong></p><p>如：有以下标签</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>     
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接这样写：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token selector">ul</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token selector">li</span><span class="token punctuation">{</span>
           <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div ul </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div ul li </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scss嵌套打开(解析)的规则是：<strong>从外层到内层，将嵌套规则块打开，父级的选择器放在子级选择的前面组成一个新的选择器，然后再循环打开内部的嵌套块处理。</strong></p><p>写起来是不是方便很多，但使用嵌套的时候同时需要注意：</p><p>嵌套规则很有用很方便，但是你很难想象它实际会生成多少 CSS 语句，嵌套的越深，那么编译为 CSS 的语句就越多，同时消耗的资源也会越多，所以开发者尽量不要嵌套特别深的层级！</p><h3 id="_3-2-嵌套选择器列表-selector-lists" tabindex="-1"><a class="header-anchor" href="#_3-2-嵌套选择器列表-selector-lists" aria-hidden="true">#</a> 3.2 嵌套选择器列表 (Selector Lists)</h3><p>css中，使用<code>,</code>分割的群组选择器可以同时应用样式在多个选择器上，如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1, h2</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果想对一个特定的容器元素内的多个元素，使用群组选择器时，就会有很多重复性工作。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container h1, .container h2, .container h3</span> <span class="token punctuation">{</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> .8em <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而，sass的嵌套特性，在解开一个内嵌的群组选择器时，会把每一个内嵌选择器正确的结合起来：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token selector">h1,h2,h3</span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span>.8em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sass会组合成 <code>.container h1</code>、 <code>.container h2</code>、<code>.container h3</code> 三者的群组选择器：<code>.container h1, .container h2, .container h3{ xxx }</code>。</p><p>同样，群组选择器内的嵌套也会以这种方式解析：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">nav, aside </span><span class="token punctuation">{</span>
  <span class="token selector">a </span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// nav a, aside a {color: blue}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-嵌套组合符选择器-selector-combinators" tabindex="-1"><a class="header-anchor" href="#_3-3-嵌套组合符选择器-selector-combinators" aria-hidden="true">#</a> 3.3 嵌套组合符选择器 (Selector Combinators)</h3><p>这三种选择器必须和其他选择器配合使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 子组合选择器&gt; */</span>
<span class="token selector">article &gt; section</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc <span class="token punctuation">}</span>

<span class="token comment">/* 相邻组合选择器+  选择 元素后紧跟的指定元素 */</span>
<span class="token selector">header + p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em <span class="token punctuation">}</span>

<span class="token comment">/* 同层全体组合选择器~，选择所有跟在article后的同层article元素 */</span>
<span class="token selector">article ~ article</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在sass中使用时，可以通过嵌套直接生成正确的结果（位于外层选择器的后面，或内层选择器的前面均可！），而不需要使用<code>&amp;</code>。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">article </span><span class="token punctuation">{</span>
  <span class="token comment">/* 放在 里层选择器前边 */</span>
  <span class="token selector">~ article </span><span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc <span class="token punctuation">}</span>
  <span class="token selector">&gt; section </span><span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #eee <span class="token punctuation">}</span>
  <span class="token comment">/* 放在 外层选择器后边 */</span>
  <span class="token selector">dl &gt; </span><span class="token punctuation">{</span>
    <span class="token selector">dt </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333 <span class="token punctuation">}</span>
    <span class="token selector">dd </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #555 <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">nav + <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解开后的css为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">article ~ article</span> <span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc <span class="token punctuation">}</span>
<span class="token selector">article &gt; footer</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #eee <span class="token punctuation">}</span>
<span class="token selector">article dl &gt; dt</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333 <span class="token punctuation">}</span>
<span class="token selector">article dl &gt; dd</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #555 <span class="token punctuation">}</span>
<span class="token selector">nav + article</span> <span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后一句，<code>nav + &amp;</code> <strong>使用父选择器&amp;后，原本默认的嵌套规则不再适用，而是直接应用 &amp; 组合的结果</strong>。</p></blockquote><h2 id="_4-父选择器-parent-selector" tabindex="-1"><a class="header-anchor" href="#_4-父选择器-parent-selector" aria-hidden="true">#</a> 4.父选择器 (Parent Selector)</h2><h3 id="_4-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_4-1-基本使用" aria-hidden="true">#</a> 4.1 基本使用</h3><p>父选择器是 Sass 中一种特殊的选择器，用于嵌套选择器中，用来引用外部的选择器；通俗的讲就是，当你使用嵌套的时候，可能你会需要使用到嵌套外层的父选择器，比如为一个元素 <strong>添加伪类</strong> (hover、active、before、after) 的时候，可以用 <strong>&amp;</strong> 代表嵌套规则外层的父选择器，我们举个例子来更直观的感受下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:active </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:before </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">span </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的 Sass 代码中我们编写了几个伪类，在编译的时候 &amp; 将会被替换为嵌套外层的父选择器，有多层嵌套的话将会把父选择器一级一级的传递下去，最终转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a span:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-添加后缀-adding-suffixes" tabindex="-1"><a class="header-anchor" href="#_4-2-添加后缀-adding-suffixes" aria-hidden="true">#</a> 4.2 添加后缀 (Adding Suffixes)</h3><p>可以使用 &amp; 向外部选择器添加后缀，举个例子看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-head </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>-title </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-body </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-footer </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子将会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-head</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-head-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-body</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-footer</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-占位符选择器-placeholder-selectors" tabindex="-1"><a class="header-anchor" href="#_5-占位符选择器-placeholder-selectors" aria-hidden="true">#</a> 5.占位符选择器 (Placeholder Selectors)</h2><p>在 Sass 中这是一种特殊的选择器，称为 &quot;占位符&quot;；它以 % 开头，必须通过 @extend 指令调用，如果单独使用的话是不会编译到 CSS 中的，后面会讲到 @extend 指令，这里我们先举个简单的例子感受一下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">%placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@extend</span> %placeholder<span class="token punctuation">;</span></span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn2</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@extend</span> %placeholder<span class="token punctuation">;</span></span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请记住，占位符必须<strong>通过 @extend 指令调用</strong>才会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn2, .btn</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn2:hover, .btn:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-属性嵌套" tabindex="-1"><a class="header-anchor" href="#_6-属性嵌套" aria-hidden="true">#</a> 6.属性嵌套</h2><p>当我们在写 CSS 样式的时候，有些 CSS 属性具有相同的<strong>命名空间 (namespace)</strong>，比如定义字体样式的属性： font-size ; font-weight ; font-family ; 它们具有相同的命名空间 font 。再比如定义边框样式的属性：border-radius ; border-color ; 它们具有相同的命名空间 border 。当然还有很多其他这种的属性，为了方便管理和避免重复输入，Sass 允许将属性嵌套在命名空间中，同时命名空间也可以具有自己的属性值，我们举例看一下：</p><blockquote><p><strong>把属性名从中划线-的地方断开，在该属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中</strong>。这样就可以实现属性的嵌套。</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token selector">border: </span><span class="token punctuation">{</span>
    <span class="token property">radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
   <span class="token property">family</span><span class="token punctuation">:</span><span class="token string">&#39;YaHei&#39;</span><span class="token punctuation">;</span>
   <span class="token property">size</span><span class="token punctuation">:</span>18px<span class="token punctuation">;</span>
   <span class="token property">weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">margin: auto </span><span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种写法将会被转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;YaHei&quot;</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结" aria-hidden="true">#</a> 7.小结</h2><p>本节内容我们主要讲了 Sass 中的嵌套规则，Sass 的嵌套是最基本也是最常用的功能，主要包括如下几个重点：</p><ul><li>样式的嵌套 <ul><li>基本的样式嵌套</li><li>嵌套选择器列表 (Selector Lists)</li><li>嵌套组合符选择器 (Selector Combinators)</li></ul></li><li>父选择器 <ul><li>添加后缀 (Adding Suffixes)</li></ul></li><li>占位符选择器</li><li>属性嵌套</li></ul><p>你来根据下面这张图来复习一下本节的内容：</p><figure><img src="https://i0.hdslb.com/bfs/album/55f989eb4bd4508c846a4c1e446c3f8e549631ee.png" alt="image-20220823190110782" tabindex="0" loading="lazy"><figcaption>image-20220823190110782</figcaption></figure><p>学会了 Sass 中的嵌套规则，快使用这种方式来改造一下你的 CSS 代码吧～</p>`,66),c=[t];function i(l,o){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","03.html.vue"]]);export{r as default};

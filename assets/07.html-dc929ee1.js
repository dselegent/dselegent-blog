import{ab as n,G as s,H as a,ac as e}from"./framework-844b12a4.js";const p={},t=e(`<h1 id="_07-【sass语法介绍-控制指令】" tabindex="-1"><a class="header-anchor" href="#_07-【sass语法介绍-控制指令】" aria-hidden="true">#</a> 07 【Sass语法介绍-控制指令】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>Sass 为我们提供了很多控制指令，使得我们可以更高效的来控制样式的输出，或者在函数中进行逻辑控制。本节内容我们就来讲解什么是 Sass 控制指令？它能用来做什么？它将使你更方便的编写 Sass 。</p><h2 id="_2-什么是-sass-控制指令" tabindex="-1"><a class="header-anchor" href="#_2-什么是-sass-控制指令" aria-hidden="true">#</a> 2.什么是 Sass 控制指令</h2><p>控制指令，故名思义它是通过条件来控制某些逻辑的，提到条件你首先肯定想到了 if ，没错这是 Sass 控制指令的一种，除了这个还有循环，所以 Sass 一共为我们提供了 4 种控制指令，它们分别是：</p><ul><li>@if 指令</li><li>@each 指令</li><li>@for 指令</li><li>@while 指令</li></ul><p>如果你熟悉其他的编程语言或者你熟悉 javascript ，看见上面这四种是不是很熟悉，它们在 Sass 中也是用来做条件判断和循环的，下面我们就看一下它们如何在 Sass 中应用。</p><h2 id="_3-if-指令" tabindex="-1"><a class="header-anchor" href="#_3-if-指令" aria-hidden="true">#</a> 3.@if 指令</h2><h3 id="_3-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基本使用" aria-hidden="true">#</a> 3.1 基本使用</h3><p>@if 指令是在 @if 后跟一个表达式，然后再接 {} ，如果表达式为 true 则执行 {} 里的代码逻辑，写为 @if { … } ，我们来举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">avatar</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$circle</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.square </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们在 @mixin 中使用了 @if 指令，<strong>如果 @if 后面的表达式或变量为 true ，它将执行 {} 里的代码</strong>。上面的代码在 .square 的样式中使用了 @mixin ，它将会生成如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面两段代码的对比中我们看到，我们为 @mixin 传入了 $size 并且 @if 后面的变量为 true，所以它执行了 width: $size / 2 生成的 CSS 就是 width: 50px ，在这里你要重点关注 @if 指令的用法，关于 @mixin 在后面的章节我们会详细讲到，这里你可以先认识下就好。</p><h3 id="_3-2-else-和-else-if-指令" tabindex="-1"><a class="header-anchor" href="#_3-2-else-和-else-if-指令" aria-hidden="true">#</a> 3.2 @else 和 @else if 指令</h3><p>如果你了解任何的编程语言，那么你一定知道有 if 就会有 else 和 else if ，<strong>如果 @if 后面的表达式为 false ，就会判断 @else if 后面的表达式，如果还是 false 则会继续往后走，如果所有表达式都为 false 则最终会执行 @else 后面的 {} 中的代码逻辑</strong>。</p><p>当然 @else if 和 @else是在你需要多条逻辑判断的时候写的，也可以不写，就像上面的代码一样。说了这么多可能你不是很理解，一码胜千言，我们直接将上面的代码段改造下，实际体会一下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">avatar</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$circle</span> == 1 </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$circle</span> == 2 </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">/</span> 5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token selector">.a </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.b </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.c </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中我有 3 条判断逻辑对应不同的代码块，然后我在 .a .b .c 中分别调用 @mixin 并传入不同的参数，转换后的 CSS 代码如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.b</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的讲解可以看到 @if 指令还是非常实用的，在你写函数的时候很多地方会用到，所以这块要好好记住。</p><h2 id="_4-each-指令" tabindex="-1"><a class="header-anchor" href="#_4-each-指令" aria-hidden="true">#</a> 4.@each 指令</h2><p>@each 指令一般用来循环一个列表或 Map ，它的写法是这样的 @each in { … } ，这其中 expression 表达式返回一个列表或者直接就是一个列表，variable 是列表中的每一项，{} 中是每次循环都会执行的代码，我们举例来看下:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$borders</span></span><span class="token punctuation">:</span> 2px<span class="token punctuation">,</span> 3px<span class="token punctuation">,</span> 5px<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$bor</span> in <span class="token variable">$borders</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.border-<span class="token variable">#{$bor}</span> </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">$bor</span> solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中我们通过 @each 循环一个 $borders 列表，来生成不同的 class 的 border 样式，上面这段代码转换为 CSS 如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border-2px</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-3px</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-5px</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到上面的写法是不是很方便，这样就直接生成了不用的类名并且对应不同的样式，在 Sass 编程中 @each 也是很常用的指令，所以这个你是一定要会用的，尤其是在写函数的时候！</p><h2 id="_5-for-指令" tabindex="-1"><a class="header-anchor" href="#_5-for-指令" aria-hidden="true">#</a> 5.@for 指令</h2><p>@for 指令很有意思，它可以<strong>设定一个范围然后在这个范围内循环</strong>，比如说在 1 ～ 5 这个范围内，或者在 3 ~ 6 这个范围内等等。</p><p>它有两种写法 @for from to { … } 或者 @for from through { … }，这两种写法中variable 都是每次循环时候的数值，start 都表示开始的边界，end 都表示结束的边界；</p><p>这两种写法不同的是 <strong>through 包含 start 与 en</strong> ，而 <strong>to 包含 start 但不包含 end</strong>。文字描述难免有些抽象，我们直接举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$base-color</span></span><span class="token punctuation">:</span> #036<span class="token punctuation">;</span>

<span class="token comment">// 范围是 1 ~ 3</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token property">ul</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3n <span class="token operator">+</span> <span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$base-color</span><span class="token punctuation">,</span> <span class="token variable">$i</span> <span class="token operator">*</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 范围是 4 ~ 6</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 4 <span class="token keyword">through</span> <span class="token selector">6 </span><span class="token punctuation">{</span>
  <span class="token property">ul</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3n <span class="token operator">+</span> <span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$base-color</span><span class="token punctuation">,</span> <span class="token variable">$i</span> <span class="token operator">*</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码我们用的是 <strong>through</strong> 写法，分别写了 1 ~ 3 范围的循环和 4 ~ 6范围的循环，也就是说循环体中的代码块会分别被计算 3 次，它最终会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 1 ~ 3 范围生成的
ul:nth-child(3n+1)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #004080<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:nth-child(3n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #004d99<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:nth-child(3n+3)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0059b3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">// 4 ~ 6 范围生成的
ul:nth-child(3n+4)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0066cc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:nth-child(3n+5)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0073e6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:nth-child(3n+6)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0080ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到转换后的 CSS 是不是感觉使用 @for 指令写起来简直飞快，下面我们在使用 <strong>to</strong> 写法来举个例子看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$base-color</span></span><span class="token punctuation">:</span> #036<span class="token punctuation">;</span>

<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 3 </span><span class="token punctuation">{</span>
  <span class="token property">ul</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3n <span class="token operator">+</span> <span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$base-color</span><span class="token punctuation">,</span> <span class="token variable">$i</span> <span class="token operator">*</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面使用 <strong>to</strong> 写法的代码将会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul:nth-child(3n+1)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #004080<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:nth-child(3n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #004d99<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，通过上面的代码可以看出使用 to 写法是不包含 end 边界的。从上面我们举的两个例子不难看出，@for 指令可以极大的简化我们编写冗余繁琐的 CSS ，你自己需要多尝试这个指令来实际感受下。</p><h2 id="_6-while-指令" tabindex="-1"><a class="header-anchor" href="#_6-while-指令" aria-hidden="true">#</a> 6.@while 指令</h2><p>@while 指令很像 javascript 中的 while 循环，在 Sass 中 @while 指令的写法是 @while { … } ，当表达式 expression 结果为 true 时就执行 {} 里的代码，直到表达式 expression 结果为 false 。我们举例来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$num</span></span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$num</span> &gt;= 1 </span><span class="token punctuation">{</span>
  <span class="token selector">.box-<span class="token variable">#{$num}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 100 <span class="token operator">*</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">$num</span></span><span class="token punctuation">:</span> <span class="token variable">$num</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的代码可以看出我设定了一个变量 $num 为 4 ，然后每次循环将这个变量 -1 ，知道 $num &lt; 1 的时候会停止循环，也就是说会循环 4 次，我们看下下面转换为 CSS 的代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box-4</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-2</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-1</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@while 指令可以让你很方便的控制循环次数，在实际应用中也是非常有用的！</p><h2 id="_7-实战经验" tabindex="-1"><a class="header-anchor" href="#_7-实战经验" aria-hidden="true">#</a> 7.实战经验</h2><p>在实际项目中应用 Sass 控制指令的地方还是蛮多的，这里我说一个在我的项目中的应用。我的项目中有个需求是将视口分为 12 等份，然后根据不同的 class 类名来为其宽度设置不同的百分比，这很像其他 UI 库中的栅格系统，我们是这样在项目中实现的：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 0 <span class="token keyword">through</span> <span class="token selector">12 </span><span class="token punctuation">{</span>
  <span class="token selector">.width-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1 <span class="token operator">/</span> 12 <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这几行代码就实现了我的需求，我需要有 .width-0 到 .width-12 的选择器，同时它们的样式分别是对应的百分比，我直接做了一个从 0 到 12 的循环，然后在其循环体中动态生成 class 和样式，它转换为 CSS 代码如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.width-0</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-5</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 41.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-7</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 58.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-8</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 66.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-9</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-10</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 83.3333333333%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-11</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 91.6666666667%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.width-12</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面这个示例中是不是可以看出使用控制指令来实现一些需求很方便，这样可以省去你编写大量 CSS 代码的工作，而且计算宽度也仅仅需要设置好公式即可，在我们的项目中有很多类似的用法，至于 @if 指令一般会在函数中做判断来使用。</p><h2 id="_8-小结" tabindex="-1"><a class="header-anchor" href="#_8-小结" aria-hidden="true">#</a> 8.小结</h2><p>本节内容我们讲解了 Sass 控制指令，它是非常常用的，在 Sass 中有四种控制指令，它们分别是：</p><ul><li>@if 指令</li><li>@each 指令</li><li>@for 指令</li><li>@while 指令</li></ul><p>趁热打铁，快来回忆一下这几个指令都是干嘛的：</p><figure><img src="https://i0.hdslb.com/bfs/album/ab11f4161886f8473f13b11d13628494a01a6e13.png" alt="image-20220824230811481" tabindex="0" loading="lazy"><figcaption>image-20220824230811481</figcaption></figure><p>记住它们并多加练习，控制指令是非常好用的，它可以让你避免编写过多冗余的 CSS 代码，在项目中也很方便维护。控制指令是在 Sass 进阶中必不可少的知识！</p>`,57),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","07.html.vue"]]);export{r as default};

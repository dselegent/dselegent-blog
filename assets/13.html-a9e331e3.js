import{ab as n,G as s,H as a,ac as e}from"./framework-844b12a4.js";const p={},t=e(`<h1 id="_13-【语法之编程风格】" tabindex="-1"><a class="header-anchor" href="#_13-【语法之编程风格】" aria-hidden="true">#</a> 13 【语法之编程风格】</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1.概述</h2><p>“编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。</p><p>有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。</p><p>所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。</p><p>必须牢记的一点是，如果你选定了一种“编程风格”，就应该坚持遵守，切忌多种风格混用。如果你加入他人的项目，就应该遵守现有的风格。</p><h2 id="_2-缩进" tabindex="-1"><a class="header-anchor" href="#_2-缩进" aria-hidden="true">#</a> 2.缩进</h2><p>行首的空格和 Tab 键，都可以产生代码缩进效果（indent）。</p><p>Tab 键可以节省击键次数，但不同的文本编辑器对 Tab 的显示不尽相同，有的显示四个空格，有的显示两个空格，所以有人觉得，空格键可以使得显示效果更统一。</p><p>无论你选择哪一种方法，都是可以接受的，要做的就是始终坚持这一种选择。不要一会使用 Tab 键，一会使用空格键。</p><h2 id="_3-区块" tabindex="-1"><a class="header-anchor" href="#_3-区块" aria-hidden="true">#</a> 3.区块</h2><p>如果循环和判断的代码体只有一行，JavaScript 允许该区块（block）省略大括号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的原意可能是下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，实际效果却是下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，建议总是使用大括号表示区块。</p><p>另外，区块起首的大括号的位置，有许多不同的写法。最流行的有两种，一种是起首的大括号另起一行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>block
<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种是起首的大括号跟在关键字的后面。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>block <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来说，这两种写法都可以接受。但是，JavaScript 要使用后一种，因为 JavaScript 会自动添加句末的分号，导致一些难以察觉的错误。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码的原意，是要返回一个对象，但实际上返回的是<code>undefined</code>，因为 JavaScript 自动在<code>return</code>语句后面添加了分号。为了避免这一类错误，需要写成下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span> <span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，表示区块起首的大括号，不要另起一行。</p><h2 id="_4-圆括号" tabindex="-1"><a class="header-anchor" href="#_4-圆括号" aria-hidden="true">#</a> 4.圆括号</h2><p>圆括号（parentheses）在 JavaScript 中有两种作用，一种表示函数的调用，另一种表示表达式的组合（grouping）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 圆括号表示函数的调用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 圆括号表示表达式的组合</span>
<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建议可以用空格，区分这两种不同的括号。</p><blockquote><ol><li>表示函数调用时，函数名与左括号之间没有空格。</li><li>表示函数定义时，函数名与左括号之间没有空格。</li><li>其他情况时，前面位置的语法元素与左括号之间，都有一个空格。</li></ol></blockquote><p>按照上面的规则，下面的写法都是不规范的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span> <span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
<span class="token keyword">return</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的最后一行是一个匿名函数，<code>function</code>是语法关键字，不是函数名，所以与左括号之间应该要有一个空格。</p><h2 id="_5-行尾的分号" tabindex="-1"><a class="header-anchor" href="#_5-行尾的分号" aria-hidden="true">#</a> 5 行尾的分号</h2><p>分号表示一条语句的结束。JavaScript 允许省略行尾的分号。事实上，确实有一些开发者行尾从来不写分号。但是，由于下面要讨论的原因，建议还是不要省略这个分号。</p><h3 id="_5-1-不使用分号的情况" tabindex="-1"><a class="header-anchor" href="#_5-1-不使用分号的情况" aria-hidden="true">#</a> 5.1 不使用分号的情况</h3><p>首先，以下三种情况，语法规定本来就不需要在结尾添加分号。</p><p><strong>（1）for 和 while 循环</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>do...while</code>循环是有分号的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  a<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分号不能省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）分支语句：if，switch，try</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）函数的声明语句</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，函数表达式仍然要使用分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三种情况，如果使用了分号，并不会出错。因为，解释引擎会把这个分号解释为空语句。</p><h3 id="_5-2-分号的自动添加" tabindex="-1"><a class="header-anchor" href="#_5-2-分号的自动添加" aria-hidden="true">#</a> 5.2 分号的自动添加</h3><p>除了上一节的三种情况，所有语句都应该使用分号。但是，如果没有使用分号，大多数情况下，JavaScript 会自动添加。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种语法特性被称为“分号的自动添加”（Automatic Semicolon Insertion，简称 ASI）。</p><p>因此，有人提倡省略句尾的分号。麻烦的是，如果下一行的开始可以与本行的结尾连在一起解释，JavaScript 就不会自动添加分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于 var a = 3</span>
<span class="token keyword">var</span>
a
<span class="token operator">=</span>
<span class="token number">3</span>

<span class="token comment">// 等同于 &#39;abc&#39;.length</span>
<span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">.</span>length

<span class="token comment">// 等同于 return a + b;</span>
<span class="token keyword">return</span> a <span class="token operator">+</span>
b<span class="token punctuation">;</span>

<span class="token comment">// 等同于 obj.foo(arg1, arg2);</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span>
arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于 3 * 2 + 10 * (27 / 6)</span>
<span class="token number">3</span> <span class="token operator">*</span> <span class="token number">2</span>
<span class="token operator">+</span>
<span class="token number">10</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">27</span> <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码都会多行放在一起解释，不会每一行自动添加分号。这些例子还是比较容易看出来的，但是下面这个例子就不那么容易看出来了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token function">y</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
x <span class="token operator">=</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是更多不会自动添加分号的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引擎解释为 c(d+e)</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token function">c</span>
<span class="token punctuation">(</span>d<span class="token operator">+</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引擎解释为 a = b/hi/g.exec(c).map(d)</span>
<span class="token comment">// 正则表达式的斜杠，会当作除法运算符</span>
a <span class="token operator">=</span> b
<span class="token operator">/</span>hi<span class="token operator">/</span>g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 解释为&#39;b&#39;[&#39;red&#39;, &#39;green&#39;]，</span>
<span class="token comment">// 即把字符串当作一个数组，按索引取值</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 解释为 function (x) { return x }(a++)</span>
<span class="token comment">// 即调用匿名函数，结果f等于0</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token punctuation">}</span>
<span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有下一行的开始与本行的结尾，无法放在一起解释，JavaScript 引擎才会自动添加分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> a <span class="token operator">=</span> <span class="token number">0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment">// 等同于下面的代码，</span>
<span class="token comment">// 因为 0console 没有意义</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果一行的起首是“自增”（<code>++</code>）或“自减”（<code>--</code>）运算符，则它们的前面会自动添加分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>

a
<span class="token operator">++</span>
b
<span class="token operator">--</span>
c

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token comment">// 1 2 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码之所以会得到<code>1 2 0</code>的结果，原因是自增和自减运算符前，自动加上了分号。上面的代码实际上等同于下面的形式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a<span class="token punctuation">;</span>
<span class="token operator">++</span>b<span class="token punctuation">;</span>
<span class="token operator">--</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>continue</code>、<code>break</code>、<code>return</code>和<code>throw</code>这四个语句后面，直接跟换行符，则会自动添加分号。这意味着，如果<code>return</code>语句返回的是一个对象的字面量，起首的大括号一定要写在同一行，否则得不到预期结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span>
<span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 解释成</span>
<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于解释引擎自动添加分号的行为难以预测，因此编写代码的时候不应该省略行尾的分号。</p><p>不应该省略结尾的分号，还有一个原因。有些 JavaScript 代码压缩器（uglifier）不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果。</p><p><strong>另外，不写结尾的分号，可能会导致脚本合并出错。所以，有的代码库在第一行语句开始前，会加上一个分号。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种写法就可以避免与其他脚本合并时，排在前面的脚本最后一行语句没有分号，导致运行出错的问题。</p><h2 id="_6-全局变量" tabindex="-1"><a class="header-anchor" href="#_6-全局变量" aria-hidden="true">#</a> 6.全局变量</h2><p>JavaScript 最大的语法缺点，可能就是全局变量对于任何一个代码块，都是可读可写。这对代码的模块化和重复使用，非常不利。</p><p>因此，建议避免使用全局变量。如果不得不使用，可以考虑用大写字母表示变量名，这样更容易看出这是全局变量，比如<code>UPPER_CASE</code>。</p><h2 id="_7-变量声明" tabindex="-1"><a class="header-anchor" href="#_7-变量声明" aria-hidden="true">#</a> 7.变量声明</h2><p>JavaScript 会自动将变量声明“提升”（hoist）到代码块（block）的头部。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> x<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着，变量<code>x</code>是<code>if</code>代码块之前就存在了。为了避免可能出现的问题，最好把变量声明都放在代码块的头部。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写成</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这样的写法，就容易看出存在一个全局的循环变量<code>i</code>。</p><p>另外，所有函数都应该在使用之前定义。函数内部的变量声明，都应该放在函数的头部。</p><h2 id="_8-相等和严格相等" tabindex="-1"><a class="header-anchor" href="#_8-相等和严格相等" aria-hidden="true">#</a> 8.相等和严格相等</h2><p>JavaScript 有两个表示相等的运算符：“相等”（<code>==</code>）和“严格相等”（<code>===</code>）。</p><p>相等运算符会自动转换变量类型，造成很多意想不到的情况。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token comment">// true</span>
<span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// true</span>
<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;false&#39;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span> <span class="token comment">// true</span>
<span class="token string">&#39; \\t\\r\\n &#39;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，建议不要使用相等运算符（<code>==</code>），只使用严格相等运算符（<code>===</code>）。</p><h2 id="_9-语句的合并" tabindex="-1"><a class="header-anchor" href="#_9-语句的合并" aria-hidden="true">#</a> 9.语句的合并</h2><p>有些程序员追求简洁，喜欢合并不同目的的语句。比如，原来的语句是</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他喜欢写成下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然语句少了一行，但是可读性大打折扣，而且会造成误读，让别人误解这行代码的意思是下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> （a <span class="token operator">===</span> b）<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建议不要将不同目的的语句，合并成一行。</p><h2 id="_10-自增和自减运算符" tabindex="-1"><a class="header-anchor" href="#_10-自增和自减运算符" aria-hidden="true">#</a> 10.自增和自减运算符</h2><p>自增（<code>++</code>）和自减（<code>--</code>）运算符，放在变量的前面或后面，返回的值不一样，很容易发生错误。事实上，所有的<code>++</code>运算符都可以用<code>+= 1</code>代替。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">++</span>x
<span class="token comment">// 等同于</span>
x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改用<code>+= 1</code>，代码变得更清晰了。</p><p>建议自增（<code>++</code>）和自减（<code>--</code>）运算符尽量使用<code>+=</code>和<code>-=</code>代替。</p><h2 id="_11-switch-case-结构" tabindex="-1"><a class="header-anchor" href="#_11-switch-case-结构" aria-hidden="true">#</a> 11.switch...case 结构</h2><p><code>switch...case</code>结构要求，在每一个<code>case</code>的最后一行必须是<code>break</code>语句，否则会接着运行下一个<code>case</code>。这样不仅容易忘记，还会造成代码的冗长。</p><p>而且，<code>switch...case</code>不使用大括号，不利于代码形式的统一。此外，这种结构类似于<code>goto</code>语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;hack&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;hack&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;slash&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;slash&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;run&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;run&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid action.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码建议改写成对象结构。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;hack&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;hack&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;slash&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;slash&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;run&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;run&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> actions<span class="token punctuation">[</span>action<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid action.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> actions<span class="token punctuation">[</span>action<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，建议<code>switch...case</code>结构可以用对象结构代替。</p>`,108),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","13.html.vue"]]);export{r as default};

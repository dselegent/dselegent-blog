import{ab as n,G as s,H as a,ac as e}from"./framework-844b12a4.js";const p={},t=e(`<h1 id="_03-【流程控制语句】" tabindex="-1"><a class="header-anchor" href="#_03-【流程控制语句】" aria-hidden="true">#</a> 03 【流程控制语句】</h1><h2 id="_1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-基本介绍" aria-hidden="true">#</a> 1.基本介绍</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">*</span>
 <span class="token operator">*</span> 流程控制语句
 <span class="token operator">*</span> 	<span class="token operator">-</span> <span class="token constant">JS</span>中的程序是从上到下一行一行执行的
 <span class="token operator">*</span> 	<span class="token operator">-</span> 通过流程控制语句可以控制程序执行流程，
 <span class="token operator">*</span> 		使程序可以根据一定的条件来选择执行
 <span class="token operator">*</span>  <span class="token operator">-</span> 语句的分类：
 <span class="token operator">*</span> 		<span class="token number">1.</span>条件判断语句
 <span class="token operator">*</span> 		<span class="token number">2.</span>条件分支语句
 <span class="token operator">*</span> 		<span class="token number">3.</span>循环语句			
 <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>可以弹出一个提示框，该提示框中会带有一个文本框，
 <span class="token operator">*</span> 	用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数，该字符串将会作为提示框的提示文字

 <span class="token operator">*</span> 用户输入的内容将会作为函数的返回值返回，可以定义一个变量来接收该内容<span class="token punctuation">,</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数的返回值是String类型的
 <span class="token operator">*</span>
<span class="token comment">//score就是小明的期末成绩</span>
<span class="token keyword">var</span> score <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入小明的期末成绩(0-100):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-if-条件分支语句" tabindex="-1"><a class="header-anchor" href="#_2-if-条件分支语句" aria-hidden="true">#</a> 2.if(条件分支语句)</h2><p>条件判断语句也称为if语句<br> 语法一：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
   语句<span class="token operator">...</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 执行流程：  
 <span class="token keyword">if</span>语句执行时，会先对条件表达式进行求值判断，  
 如果值为<span class="token boolean">true</span>，则执行<span class="token keyword">if</span>后的语句  
 如果值为<span class="token boolean">false</span>，则不执行  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法二：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 执行流程：  
	<span class="token keyword">if</span><span class="token operator">...</span><span class="token keyword">else</span>语句执行时，会对条件表达式进行求值判断，  
		如果值为<span class="token boolean">true</span>，则执行<span class="token keyword">if</span>后的语句  
		如果值为<span class="token boolean">false</span>，则执行<span class="token keyword">else</span>后的语句  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法三：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>  
	语句<span class="token operator">...</span>  
<span class="token punctuation">}</span>	  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 执行流程  
 <span class="token keyword">if</span><span class="token operator">...</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token operator">...</span><span class="token keyword">else</span>语句执行时，会自上至下依次对条件表达式进行求值判断，  
    如果判断结果为<span class="token boolean">true</span>，则执行当前<span class="token keyword">if</span>后的语句，执行完成后语句结束。  
    如果判断结果为<span class="token boolean">false</span>，则继续向下判断，直到找到为<span class="token boolean">true</span>的为止。  
    如果所有的条件表达式都是<span class="token boolean">false</span>，则执行<span class="token keyword">else</span>后的语句  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>条件语句可以嵌套（最好不要嵌套超过三层）</li><li>if-elseif-else 语句注意条件的区间（下一级条件的成立是建立在上一级条件不成立的条件下）</li><li>可以只有 if 和 else if</li></ul><h2 id="_3-switch-条件分支语句" tabindex="-1"><a class="header-anchor" href="#_3-switch-条件分支语句" aria-hidden="true">#</a> 3.switch(条件分支语句)</h2><p>switch语句<br> 语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>变量<span class="token operator">/</span>表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量值<span class="token operator">/</span>变量<span class="token operator">/</span>表达式<span class="token operator">:</span>
        语句<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量值<span class="token operator">/</span>变量<span class="token operator">/</span>表达式<span class="token operator">:</span>
        语句<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> switch...case...语句在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，<br> 如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码。<br> 如果所有的case判断结果都为false，则从default处开始执行代码。</p><ul><li>与其他高级语言不同，在 JS 中 case 后不仅仅只能跟常量值，还可以跟变量和表达式</li><li>注意 switch 语句的 “开关” 特性（遇见 break 才跳出 switch，否则直接进入下一个 case），合理运用好 break（例如不加 break 可以实现多条 case 共用同一个语句体）</li><li>default 语句不是必须的</li></ul><h2 id="_4-while-循环语句" tabindex="-1"><a class="header-anchor" href="#_4-while-循环语句" aria-hidden="true">#</a> 4.while 循环语句</h2><p>通过循环语句可以反复执行某些语句多次<br><strong>while循环</strong><br> 语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
    语句<span class="token operator">...</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> while语句在执行时，会先对条件表达式进行求值判断，<br> 如果判断结果为false，则终止循环<br> 如果判断结果为true，则执行循环体<br> 循环体执行完毕，继续对条件表达式进行求值判断，依此类推</p><p><strong>do...while循环</strong><br> 语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">do</span><span class="token punctuation">{</span>  
语句<span class="token operator">...</span>  
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程<br> do...while在执行时，会先执行do后的循环体，然后在对条件表达式进行判断，<br> 如果判断判断结果为false，则终止循环。<br> 如果判断结果为true，则继续执行循环体，依此类推</p><p>和while的区别：<br> while：先判断后执行<br> do...while: 先执行后判断<br> do...while可以确保循环体至少执行一次。</p><h2 id="_5-for-循环语句" tabindex="-1"><a class="header-anchor" href="#_5-for-循环语句" aria-hidden="true">#</a> 5.for 循环语句</h2><p><strong>for循环</strong><br> 语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token number">1</span>初始化表达式 <span class="token punctuation">;</span> <span class="token number">2</span>条件表达式 <span class="token punctuation">;</span> <span class="token number">4</span>更新表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token number">3</span>语句<span class="token operator">...</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行流程：<br> 首先执行①初始化表达式，初始化一个变量，<br> 然后对②条件表达式进行求值判断，如果为false则终止循环<br> 如果判断结果为true，则执行③循环体<br> 循环体执行完毕，执行④更新表达式，对变量进行更新。<br> 更新表达式执行完毕重复②</p><p><strong>for in 循环</strong></p><p><code>for</code> 循环的一个变体是 <code>for ... in</code> 循环，它可以把一个对象的所有属性依次循环出来：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> o<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
&quot;name: Jerry&quot;
&quot;age: 20&quot;
&quot;city: Beijing&quot;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要过滤掉对象继承的属性，用 <code>hasOwnProperty()</code> 来实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> o<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
&quot;name: Jerry&quot;
&quot;age: 20&quot;
&quot;city: Beijing&quot;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于数组也是对象，而它的每个元素的索引被视为对象的属性，因此，<code>for ... in</code> 循环可以直接循环出数组的索引：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
0: A
1: B
2: C
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，<code>for ... in</code> 对数组的循环得到的索引是 <code>String</code> 而不是 <code>Number</code>。</p><p><strong>死循环</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  

<span class="token punctuation">}</span>  

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-break-和-continue" tabindex="-1"><a class="header-anchor" href="#_6-break-和-continue" aria-hidden="true">#</a> 6.break 和 continue</h2><p><code>break;</code>：立即终止本层次循环。</p><p><code>continue;</code>：立即跳过本层次循环，提前进入本层次的下一次循环。</p><h2 id="_7-label-表达式" tabindex="-1"><a class="header-anchor" href="#_7-label-表达式" aria-hidden="true">#</a> 7.label 表达式</h2><p><code>label</code> 是一个标签，可以使用 <code>break</code> 或 <code>continue</code> 使程序跳转到这个标签处执行（执行：<code>break</code> 或 <code>continue</code>），从而改变程序的执行流程。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意：label 不是一个特定的关键字，可以随便取名</span>
<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> j <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span> label<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
j=6
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> j <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">continue</span> label<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
j=6
j=5
j=4
j=3
j=2
j=1
j=0
i=7
i=8
i=9
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// label + break 配合可以用在循环外</span>
<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span> label<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
1
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-初识算法" tabindex="-1"><a class="header-anchor" href="#_8-初识算法" aria-hidden="true">#</a> 8.初识算法</h2><p>算法：解决方案的准确而完整的描述！</p><ul><li>输入</li><li>输出</li><li>有穷性</li><li>确定性</li><li>可行性</li></ul><blockquote><p>好的算法还要满足：可读性、健壮性！</p></blockquote>`,54),o=[t];function i(l,c){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","03.html.vue"]]);export{u as default};

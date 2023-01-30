import{ab as p,G as o,H as l,E as s,S as n,N as t,ac as e,W as c}from"./framework-844b12a4.js";const r={},i=e('<h1 id="_01-【react入门】" tabindex="-1"><a class="header-anchor" href="#_01-【react入门】" aria-hidden="true">#</a> 01 【react入门】</h1><h2 id="_1-react简介" tabindex="-1"><a class="header-anchor" href="#_1-react简介" aria-hidden="true">#</a> 1.React简介</h2><p><strong>react是什么？</strong></p><p><strong>React</strong> 是一个用于构建用户界面的 JavaScript 库。</p><ul><li>是一个将数据渲染为 HTML 视图的开源 JS 库</li><li>它遵循基于组件的方法，有助于构建可重用的 UI 组件</li><li>它用于开发复杂的交互式的 web 和移动 UI</li></ul><blockquote><p>React 有什么特点？</p></blockquote><ol><li>使用虚拟 DOM 而不是真正的 DOM</li><li>它可以用服务器渲染</li><li>它遵循单向数据流或数据绑定</li><li>高效</li><li>声明式编码，组件化编码</li></ol><blockquote><p>React 的一些主要优点？</p></blockquote><ol><li>它提高了应用的性能</li><li>可以方便在客户端和服务器端使用</li><li>由于使用 JSX，代码的可读性更好</li><li>使用React，编写 UI 测试用例变得非常容易</li></ol><p><strong>为什么学？</strong></p><p>1.原生JS操作DOM繁琐，效率低</p><p>2.使用JS直接操作DOM,浏览器会进行大量的重绘重排</p><p>3.原生JS没有组件化编码方案，代码复用低</p>',13),u=s("p",null,"在学习之前最好看一下关于npm的知识：下面是我在网上看见的一个写的还不错的npm的文章",-1),d={href:"https://blog.csdn.net/qq_25502269/article/details/79346545",target:"_blank",rel:"noopener noreferrer"},k=s("h2",{id:"_2-react-基础案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-react-基础案例","aria-hidden":"true"},"#"),n(" 2.React 基础案例")],-1),v=s("p",null,"首先需要引入几个 react 包",-1),m=s("ul",null,[s("li",null,"React 核心库、操作 DOM 的 react 扩展库、将 jsx 转为 js 的 babel 库")],-1),b=s("p",null,"【先引入react.development.js，后引入react-dom.development.js】",-1),g=s("p",null,[s("code",null,"react.development.js")],-1),h=s("li",null,"react 是react核心库，只要使用react就必须要引入",-1),f={href:"https://unpkg.com/react@18.0.0/umd/react.development.js",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,[s("code",null,"react-dom.development.js")],-1),D=s("li",null,"react-dom 是react的dom包，使用react开发web应用时必须引入",-1),O={href:"https://unpkg.com/react-dom@18.0.0/umd/react-dom.development.js",target:"_blank",rel:"noopener noreferrer"},j=s("p",null,[s("code",null,"babel.min.js ")],-1),M=s("li",null,[s("p",null,"由于JSX最终需要转换为JS代码执行，所以浏览器并不能正常识别JSX，所以当我们在浏览器中直接使用JSX时，还必须引入babel来完成对代码的编译。")],-1),_={href:"https://unpkg.com/babel-standalone@6/babel.min.js",target:"_blank",rel:"noopener noreferrer"},q=e(`<figure><img src="https://i0.hdslb.com/bfs/album/514c5df0f5f8e7242ca17e1c939b4822b716315f.png" alt="image-20221022171647360" tabindex="0" loading="lazy"><figcaption>image-20221022171647360</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>react.development.js
react-dom.development.js
babel.min.js 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建一个容器</p><p>3.创建虚拟DOM，渲染到容器中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>hello_react<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 准备好一个“容器” <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 引入react核心库 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;../js/react.development.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 引入react<span class="token operator">-</span>dom，用于支持react操作<span class="token constant">DOM</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;../js/react-dom.development.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 引入babel，用于将jsx转为js <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;../js/babel.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/babel&quot;</span><span class="token operator">&gt;</span>
      <span class="token comment">/* 此处一定要写babel */</span>
      <span class="token comment">//1.创建虚拟DOM</span>
      <span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span> <span class="token comment">/* 此处一定不要写引号，因为不是字符串 */</span>
      <span class="token comment">//2.渲染虚拟DOM到页面</span>
	<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>后面很多地方没有用<code>createRoot</code>这种方式是因为一开始学的课程是2020年的，这是现在新的创建方式。</p><p>这里我就只把第一个案例改成新方式了</p></blockquote><p>这样，就会在页面中的这个div容器上添加这个h1.</p><figure><img src="https://i0.hdslb.com/bfs/album/7c5713f248cc28bcb531d2eda325e56789df4286.png" alt="image-20221022171539523" tabindex="0" loading="lazy"><figcaption>image-20221022171539523</figcaption></figure><blockquote><ul><li>React.createElement() <ul><li><code>React.createElement(type, [props], [...children])</code></li><li>用来创建React元素</li><li>React元素无法修改</li></ul></li><li>ReactDOM.createRoot() <ul><li><code>createRoot(container[, options])</code></li><li>用来创建React的根容器，容器用来放置React元素</li></ul></li><li>ReactDOM.render() <ul><li><code>root.render(element)</code></li><li>用来将React元素渲染到根元素中</li><li>根元素中所有的内容都会被删除，被React元素所替换</li><li>当重复调用render()时，React会将两次的渲染结果进行比较，</li><li>它会确保只修改那些发生变化的元素，对DOM做最少的修改</li></ul></li></ul></blockquote><h2 id="_3-jsx-语法" tabindex="-1"><a class="header-anchor" href="#_3-jsx-语法" aria-hidden="true">#</a> 3.jsx 语法</h2><p>JSX 是 JavaScript 的语法扩展，JSX 使得我们可以以类似于 HTML 的形式去使用 JS。JSX便是React中声明式编程的体现方式。声明式编程，简单理解就是以结果为导向的编程。使用JSX将我们所期望的网页结构编写出来，然后React再根据JSX自动生成JS代码。所以我们所编写的JSX代码，最终都会转换为以调用<code>React.createElement()</code>创建元素的代码。</p><ol><li>定义虚拟DOM，JSX不是字符串，不要加引号</li><li>标签中混入JS表达式的时候使用<code>{}</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>id <span class="token operator">=</span> <span class="token punctuation">{</span>myId<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>样式的类名指定不能使用class，使用<code>className</code></p></li><li><p>内敛样式要使用<code>{{}}</code>包裹</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;24px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><p>不能有多个根标签，只能有一个根标签</p></li><li><p>JSX的标签必须正确结束（自结束标签必须写/）</p></li><li><p>JSX中html标签应该小写，React组件应该大写开头。如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错</p></li><li><p>如果表达式是空值、布尔值、undefined，将不会显示</p></li></ol><blockquote><p>关于JS表达式和JS语句：</p><ul><li><p>JS表达式：返回一个值，可以放在任何一个需要值的地方 a a+b demo(a) arr.map() function text(){}</p></li><li><p>JS语句：if(){} for(){} while(){} swith(){} 不会返回一个值</p></li></ul></blockquote><p><strong>其它</strong></p><ol><li>注释</li></ol><p>写在花括号里</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>小丞<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/*注释...*/</span><span class="token punctuation">}</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>class</code>需要使用<code>className</code>代替</li><li><code>style</code>中必须使用对象设置<code> style={{background:&#39;red&#39;}}</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
	<span class="token punctuation">.</span>title<span class="token punctuation">{</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 准备好一个“容器” <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/babel&quot;</span> <span class="token operator">&gt;</span>
	<span class="token keyword">const</span> myId <span class="token operator">=</span> <span class="token string">&#39;aTgUiGu&#39;</span>
	<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token string">&#39;HeLlo,rEaCt&#39;</span>

	<span class="token comment">//1.创建虚拟DOM</span>
	<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span> id<span class="token operator">=</span><span class="token punctuation">{</span>myId<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;29px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>myData<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span> id<span class="token operator">=</span><span class="token punctuation">{</span>myId<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">&#39;29px&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>myData<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token punctuation">)</span>
	<span class="token comment">//2.渲染虚拟DOM到页面</span>
	ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/9d4bafde75cb82f79b17a91491c46eb8576b784a.png" alt="image-20221022204158589" tabindex="0" loading="lazy"><figcaption>image-20221022204158589</figcaption></figure><ol start="4"><li>数组</li></ol><p>JSX 允许在模板中插入数组，数组自动展开全部成员</p><blockquote><p>{} 只能用来放js表达式，而不能放语句（if for） 在语句中是可以去操作JSX</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>小丞<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>同学<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>arr<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tip: JSX 小练习</strong></p><p>根据动态数据生成 <code>li</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
                data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i0.hdslb.com/bfs/album/09241923178d7fdca14d087e6f1a9627dc3b7081.png" alt="image-20221022204645014"><h2 id="_4-两种创建虚拟dom的方式" tabindex="-1"><a class="header-anchor" href="#_4-两种创建虚拟dom的方式" aria-hidden="true">#</a> 4.两种创建虚拟DOM的方式</h2><p><strong>使用JSX创建虚拟DOM</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.创建虚拟DOM</span>
	<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>  <span class="token comment">/* 此处一定不要写引号，因为不是字符串 */</span>
    	<span class="token operator">&lt;</span>h1 id<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span>React<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
	<span class="token punctuation">)</span>
<span class="token comment">//2.渲染虚拟DOM到页面</span>
	ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个在上面的案例中已经演示过了 ，下面看看另外一种创建虚拟DOM的方式</p><p><strong>2.使用JS创建虚拟DOM</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
* React.createElement()
*   - 用来创建一个React元素
*   - 参数：
*        1.元素的名称（html标签必须小写）
*        2.标签中的属性
*           - class属性需要使用className来设置
*           - 在设置事件时，属性名需要修改为驼峰命名法
*       3.元素的内容（子元素）
*   - 注意点：
*       React元素最终会通过虚拟DOM转换为真实的DOM元素
*       React元素一旦创建就无法修改，只能通过新创建的元素进行替换
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.创建虚拟DOM,创建嵌套格式的dom</span>
<span class="token keyword">const</span> <span class="token constant">VDOM</span><span class="token operator">=</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&#39;hello,React&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//2.渲染虚拟DOM到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用JS和JSX都可以创建虚拟DOM，但是可以看出JS创建虚拟DOM比较繁琐，尤其是标签如果很多的情况下，所以还是比较推荐使用JSX来创建。</p><h2 id="_5-两种dom的区别" tabindex="-1"><a class="header-anchor" href="#_5-两种dom的区别" aria-hidden="true">#</a> 5.两种DOM的区别</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 准备好一个“容器” <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/babel&quot;</span><span class="token operator">&gt;</span>
      <span class="token comment">/* 此处一定要写babel */</span>
      <span class="token comment">//1.创建虚拟DOM</span>
      <span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span>React<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span> <span class="token comment">/* 此处一定不要写引号，因为不是字符串 */</span>
      <span class="token comment">//2.渲染虚拟DOM到页面</span>
      ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token constant">VDOM</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token constant">TDOM</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#test&#39;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;虚拟DOM&#39;</span><span class="token punctuation">,</span> <span class="token constant">VDOM</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token string">&#39;真实DOM&#39;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token constant">TDOM</span><span class="token punctuation">)</span>
      <span class="token comment">//   debugger</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token constant">VDOM</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">VDOM</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/3c9c35333c0883a1057bd4c82be8bfbf9b69f04b.png" alt="image-20221022194600803" tabindex="0" loading="lazy"><figcaption>image-20221022194600803</figcaption></figure><p><strong>关于虚拟DOM：</strong></p><p>​ 1. 本质是Object类型的对象（一般对象）</p><p>​ 2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。</p><p>​ 3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。</p>`,47);function x(S,R){const a=c("ExternalLinkIcon");return o(),l("div",null,[i,s("blockquote",null,[u,s("p",null,[s("a",d,[n("npm"),t(a)])])]),k,v,m,b,s("blockquote",null,[g,s("ul",null,[h,s("li",null,[n("下载地址："),s("a",f,[n("https://unpkg.com/react@18.0.0/umd/react.development.js"),t(a)])])]),y,s("ul",null,[D,s("li",null,[n("下载地址："),s("a",O,[n("https://unpkg.com/react-dom@18.0.0/umd/react-dom.development.js"),t(a)])])]),j,s("ul",null,[M,s("li",null,[s("p",null,[n("babel下载地址："),s("a",_,[n("https://unpkg.com/babel-standalone@6/babel.min.js"),t(a)])])])])]),q])}const w=p(r,[["render",x],["__file","01.html.vue"]]);export{w as default};

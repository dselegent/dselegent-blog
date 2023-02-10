import{ab as n,G as s,H as a,ac as e}from"./framework-09305b5d.js";const p={},t=e(`<h1 id="_4-编译选项" tabindex="-1"><a class="header-anchor" href="#_4-编译选项" aria-hidden="true">#</a> 4.编译选项</h1><blockquote><p>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。</p><p>tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。</p><p><strong>tsconfig.json 重要字段</strong></p><ul><li>files - 设置要编译的文件的名称；</li><li>include - 设置需要进行编译的文件，支持路径模式匹配；</li><li>exclude - 设置无需进行编译的文件，支持路径模式匹配；</li><li>compilerOptions - 设置与编译流程相关的选项。</li></ul></blockquote><ul><li><p>自动编译文件</p><ul><li><p>编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。</p></li><li><p>示例：</p><ul><li><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>tsc xxx<span class="token punctuation">.</span>ts <span class="token operator">-</span>w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>自动编译整个项目</p><ul><li><p>如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。</p></li><li><p>但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json</p></li><li><p>tsconfig.json是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译</p></li><li><p>配置选项：</p><ul><li><p>include</p><ul><li><p>定义希望被编译文件所在的目录</p></li><li><p>默认值：[&quot;**/*&quot;]</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tests/**/*&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>上述示例中，所有src目录和tests目录下的文件都会被编译</p></li></ul></li></ul></li><li><p>exclude</p><ul><li><p>定义需要排除在外的目录</p></li><li><p>默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/hello/**/*&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>上述示例中，src下hello目录下的文件都不会被编译</p></li></ul></li></ul></li><li><p>extends</p><ul><li><p>定义被继承的配置文件</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./configs/base&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息</p></li></ul></li></ul></li><li><p>files</p><ul><li><p>指定被编译文件的列表，只有需要编译的文件少时才会用到</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;core.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sys.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;types.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scanner.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;parser.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;utilities.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;binder.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;checker.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tsc.ts&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>列表中的文件都会被TS编译器所编译</p></li></ul></li><li><p>compilerOptions</p><ul><li><p>编译选项是配置文件中非常重要也比较复杂的配置选项</p></li><li><p>在compilerOptions中包含多个子选项，用来完成对编译的配置</p><ul><li><p>项目选项</p><ul><li><p>target</p><ul><li><p>设置ts代码编译的目标版本</p></li><li><p>可选值：</p><ul><li>ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext</li></ul></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码</p></li></ul></li></ul></li><li><p>lib</p><ul><li><p>指定代码运行时所包含的库（宿主环境）</p></li><li><p>可选值：</p><ul><li>ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......</li></ul></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/aa.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>module</p><ul><li><p>设置编译后代码使用的模块化系统</p></li><li><p>可选值：</p><ul><li>CommonJS、UMD、AMD、System、ES2020、ESNext、None</li></ul></li><li><p>示例：</p><ul><li><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CommonJS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>outDir</p><ul><li><p>编译后文件的所在目录</p></li><li><p>默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置后编译后的js文件将会生成到dist目录</p></li></ul></li></ul></li><li><p>outFile</p><ul><li><p>将所有的文件编译为一个js文件</p></li><li><p>默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/app.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>rootDir</p><ul><li><p>指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>allowJs</p><ul><li>是否对js文件编译</li></ul></li><li><p>checkJs</p><ul><li><p>是否对js文件进行检查</p></li><li><p>示例：</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>removeComments</p><ul><li>是否删除注释</li><li>默认值：false</li></ul></li><li><p>noEmit</p><ul><li>不对代码进行编译</li><li>默认值：false</li></ul></li><li><p>sourceMap</p><ul><li>是否生成sourceMap</li><li>默认值：false</li></ul></li></ul></li><li><p>严格检查</p><ul><li>strict <ul><li>启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查</li></ul></li><li>alwaysStrict <ul><li>总是以严格模式对代码进行编译</li></ul></li><li>noImplicitAny <ul><li>禁止隐式的any类型</li></ul></li><li>noImplicitThis <ul><li>禁止类型不明确的this(比如函数时window调用)</li></ul></li><li>strictBindCallApply <ul><li>严格检查bind、call和apply的参数列表</li></ul></li><li>strictFunctionTypes <ul><li>严格检查函数的类型</li></ul></li><li>strictNullChecks <ul><li>严格的空值检查</li></ul></li><li>strictPropertyInitialization <ul><li>严格检查属性是否初始化</li></ul></li></ul></li><li><p>额外检查</p><ul><li>noFallthroughCasesInSwitch <ul><li>检查switch语句包含正确的break</li></ul></li><li>noImplicitReturns <ul><li>检查函数没有隐式的返回值</li></ul></li><li>noUnusedLocals <ul><li>检查未使用的局部变量</li></ul></li><li>noUnusedParameters <ul><li>检查未使用的参数</li></ul></li></ul></li><li><p>高级</p><ul><li>allowUnreachableCode <ul><li>检查不可达代码</li><li>可选值： <ul><li>true，忽略不可达代码</li><li>false，不可达代码将引起错误</li></ul></li></ul></li><li>noEmitOnError <ul><li>有错误的情况下不进行编译</li><li>默认值：false</li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul><p><strong>超哥的compilerOptions 选项</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token comment">/*
  tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
    &quot;include&quot; 用来指定哪些ts文件需要被编译
      路径：** 表示任意目录
            * 表示任意文件
    &quot;exclude&quot; 不需要被编译的文件目录
        默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]

*/</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">//  &quot;exclude&quot;: [</span>
<span class="token comment">//    &quot;./src/hello/**/*&quot;</span>
<span class="token comment">//  ]</span>

  <span class="token comment">/*
    compilerOptions 编译器的选项
  */</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// target 用来指定ts被编译为的ES的版本</span>
    <span class="token comment">// &#39;es3&#39;, &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// module 指定要使用的模块化的规范</span>
    <span class="token comment">// &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// lib用来指定项目中要使用的库(默认即可)</span>
<span class="token comment">//    &quot;lib&quot;: []</span>
    <span class="token comment">// outDir 用来指定编译后文件所在的目录</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 将代码合并为一个文件</span>
    <span class="token comment">// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中</span>
    <span class="token comment">//&quot;outFile&quot;: &quot;./dist/app.js&quot;</span>

    <span class="token comment">// 是否对js文件进行编译，默认是false</span>
<span class="token comment">//    &quot;allowJs&quot;: true,</span>
    <span class="token comment">// 是否检查js代码是否符合语法规范，默认是false</span>
<span class="token comment">//    &quot;checkJs&quot;: true,</span>
    <span class="token comment">// 是否移除注释</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不生成编译后的文件</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>


    <span class="token comment">// 当有错误时不生成编译后的文件</span>
    <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 所有严格检查的总开关</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置编译后的文件是否使用严格模式，默认false</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许隐式的any类型</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许不明确类型的this</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 严格的检查空值</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网上找的compilerOptions 选项</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
    <span class="token comment">/* 基本选项 */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定 ECMAScript 目标版本: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// 指定使用模块: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// 指定要包含在编译中的库文件</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 允许编译 javascript 文件</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 报告 javascript 文件中的错误</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// 指定 jsx 代码的生成: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 生成相应的 &#39;.d.ts&#39; 文件</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// 生成相应的 &#39;.map&#39; 文件</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 将输出文件合并为一个文件</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// 指定输出目录</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用来控制输出目录结构 --outDir.</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 删除编译后的所有的注释</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 不生成输出文件</span>
    <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 从 tslib 导入辅助工具函数</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 将每个文件做为单独的模块 （与 &#39;ts.transpileModule&#39; 类似）.</span>

    <span class="token comment">/* 严格的类型检查选项 */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 启用所有严格类型检查选项</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 启用严格的 null 检查</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 当 this 表达式值为 any 类型的时候，生成一个错误</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 以严格模式检查每个模块，并在每个文件里加入 &#39;use strict&#39;</span>

    <span class="token comment">/* 额外的检查 */</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 有未使用的变量时，抛出错误</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// 有未使用的参数时，抛出错误</span>
    <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// 并不是所有函数里的代码都有返回值时，抛出错误</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）</span>

    <span class="token comment">/* 模块解析选项 */</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 选择模块解析策略： &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 用于解析非相对模块名称的基目录</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// 模块名到基于 baseUrl 的路径映射的列表</span>
    <span class="token property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// 根文件夹列表，其组合内容表示项目运行时的结构内容</span>
    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// 包含类型声明的文件列表</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// 需要包含的类型声明文件名列表</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 允许从没有设置默认导出的模块中默认导入。</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// 指定调试器应该找到 TypeScript 文件而不是源文件的位置</span>
    <span class="token property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定调试器应该找到映射文件而不是生成文件的位置</span>
    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件</span>
    <span class="token property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性</span>

    <span class="token comment">/* 其他选项 */</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 启用装饰器</span>
    <span class="token property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// 为装饰器提供元数据的支持</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-webpack配置" tabindex="-1"><a class="header-anchor" href="#_5-webpack配置" aria-hidden="true">#</a> 5.webpack配置</h1><h2 id="_5-1-项目基本配置" tabindex="-1"><a class="header-anchor" href="#_5-1-项目基本配置" aria-hidden="true">#</a> 5.1 项目基本配置</h2><ul><li><p>通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。</p></li><li><p>步骤：</p><ol><li><p>初始化项目</p><ul><li>进入项目根目录，执行命令 <code> npm init -y</code><ul><li>主要作用：创建package.json文件</li></ul></li></ul></li><li><p>下载构建工具</p><ul><li><code>npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin</code><ul><li>共安装了7个包 <ul><li>webpack <ul><li>构建工具webpack</li></ul></li><li>webpack-cli <ul><li>webpack的命令行工具</li></ul></li><li>webpack-dev-server <ul><li>webpack的开发服务器</li></ul></li><li>typescript <ul><li>ts编译器</li></ul></li><li>ts-loader <ul><li>ts加载器，用于在webpack中编译ts文件</li></ul></li><li>html-webpack-plugin <ul><li>webpack中html插件，用来自动创建html文件</li></ul></li><li>clean-webpack-plugin <ul><li>webpack中的清除插件，每次构建都会先清除目录</li></ul></li></ul></li></ul></li></ul></li><li><p>根目录下创建webpack的配置文件webpack.config.js</p><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入一个包</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入html插件</span>
<span class="token keyword">const</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// webpack中的所有的配置信息都应该写在module.exports中</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token comment">// 指定入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定打包文件所在目录</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定打包文件的目录</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包后文件的文件</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// 告诉webpack不使用箭头</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token literal-property property">clean</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定webpack打包时要使用模块</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定要加载的规则</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test指定的是规则生效的文件</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 要使用的loader</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                     <span class="token comment">// 配置babel</span>
                     <span class="token punctuation">{</span>
                         <span class="token comment">// 指定加载器</span>
                         <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                         <span class="token comment">// 设置babel</span>
                         <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                             <span class="token comment">// 设置预定义的环境</span>
                             <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                 <span class="token punctuation">[</span>
                                     <span class="token comment">// 指定环境的插件</span>
                                     <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                     <span class="token comment">// 配置信息</span>
                                     <span class="token punctuation">{</span>
                                         <span class="token comment">// 要兼容的目标浏览器</span>
                                         <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                             <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span><span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                             <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span><span class="token string">&quot;11&quot;</span>
                                         <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 指定corejs的版本</span>
                                         <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 使用corejs的方式 &quot;usage&quot; 表示按需加载</span>
                                         <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span><span class="token string">&quot;usage&quot;</span>
                                     <span class="token punctuation">}</span>
                                 <span class="token punctuation">]</span>
                             <span class="token punctuation">]</span>
                         <span class="token punctuation">}</span>
                     <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;ts-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// 要排除的文件</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 配置Webpack插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// title: &quot;这是一个自定义的title&quot;</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置引用模块</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>根目录下创建tsconfig.json，配置可以根据自己需要</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>修改package.json添加如下配置</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...略...
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...略...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>在src下创建ts文件，并在并命令行执行<code>npm run build</code>对代码进行编译，或者执行<code>npm start</code>来启动开发服务器</p></li></ol></li></ul><h2 id="_5-2-babel配置" tabindex="-1"><a class="header-anchor" href="#_5-2-babel配置" aria-hidden="true">#</a> 5.2 Babel配置</h2><ul><li><p>经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。</p><ol><li><p>安装依赖包：</p><ul><li><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code></li><li>共安装了4个包，分别是： <ul><li>@babel/core <ul><li>babel的核心工具</li></ul></li><li>@babel/preset-env <ul><li>babel的预定义环境</li></ul></li><li>@babel-loader <ul><li>babel在webpack中的加载器</li></ul></li><li>core-js <ul><li>core-js用来使老版本的浏览器支持新版ES语法</li></ul></li></ul></li></ul></li><li><p>修改webpack.config.js配置文件</p><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>略<span class="token operator">...</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                        <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>略<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。</p></li></ul></li></ol></li></ul>`,12),l=[t];function o(i,c){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","04.html.vue"]]);export{r as default};

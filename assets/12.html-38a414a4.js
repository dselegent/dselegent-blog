const e=JSON.parse('{"key":"v-5d07d237","path":"/front_end/js_advanced/es6/12.html","title":"12【es6模块化】","lang":"zh-CN","frontmatter":{"description":"12【es6模块化】 1.初识Module （1）什么是模块 模块：一个一个的局部作用域的代码块。 （2）什么是模块系统 模块系统：系统的解决了模块化一系列问题。 模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法） 消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰，可以通过特定语法暴露指定内容） 管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/js_advanced/es6/12.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"12【es6模块化】"}],["meta",{"property":"og:description","content":"12【es6模块化】 1.初识Module （1）什么是模块 模块：一个一个的局部作用域的代码块。 （2）什么是模块系统 模块系统：系统的解决了模块化一系列问题。 模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法） 消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰，可以通过特定语法暴露指定内容） 管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12【es6模块化】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.初识Module","slug":"_1-初识module","link":"#_1-初识module","children":[]},{"level":2,"title":"2.Module的基本用法","slug":"_2-module的基本用法","link":"#_2-module的基本用法","children":[]},{"level":2,"title":"3.Module的导入导出","slug":"_3-module的导入导出","link":"#_3-module的导入导出","children":[{"level":3,"title":"3.1 export default 导出和对应的 import 导入","slug":"_3-1-export-default-导出和对应的-import-导入","link":"#_3-1-export-default-导出和对应的-import-导入","children":[]},{"level":3,"title":"3.2 export 导出和对应的 import 导入","slug":"_3-2-export-导出和对应的-import-导入","link":"#_3-2-export-导出和对应的-import-导入","children":[]}]},{"level":2,"title":"4.export 与 import 的复合写法","slug":"_4-export-与-import-的复合写法","link":"#_4-export-与-import-的复合写法","children":[]},{"level":2,"title":"5.import()","slug":"_5-import","link":"#_5-import","children":[{"level":3,"title":"5.1 简介","slug":"_5-1-简介","link":"#_5-1-简介","children":[]},{"level":3,"title":"5.2 适用场合","slug":"_5-2-适用场合","link":"#_5-2-适用场合","children":[]},{"level":3,"title":"5.3 注意点","slug":"_5-3-注意点","link":"#_5-3-注意点","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":8.87,"words":2660},"filePathRelative":"front_end/js_advanced/es6/12.md","localizedDate":"2023年1月30日","excerpt":"<h1> 12【es6模块化】</h1>\\n<h2> 1.初识Module</h2>\\n<p>（1）什么是模块</p>\\n<p>模块：一个一个的局部作用域的代码块。</p>\\n<p>（2）什么是模块系统</p>\\n<p>模块系统：系统的解决了模块化一系列问题。</p>\\n<ol>\\n<li>模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法）</li>\\n<li>消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰，可以通过特定语法暴露指定内容）</li>\\n<li>管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）</li>\\n</ol>","autoDesc":true}');export{e as data};

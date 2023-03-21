const t=JSON.parse('{"key":"v-33875565","path":"/front_end/front_end_framework/vue2/10.html","title":"10 【组件编码流程 组件自定义事件 全局事件总线】","lang":"zh-CN","frontmatter":{"description":"10 【组件编码流程 组件自定义事件 全局事件总线】 1.组件编码流程 组件化编码流程： ​\\t(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。 ​\\t(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用： ​\\t\\t\\t1).一个组件在用：放在组件自身即可。 ​\\t\\t\\t2). 一些组件在用：放在他们共同的父组件上（状态提升）。 ​\\t(3).实现交互：从绑定事件开始。 props适用于： ​\\t(1).父组件 ==&gt; 子组件 通信 ​\\t(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数） 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！ props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/vue2/10.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"10 【组件编码流程 组件自定义事件 全局事件总线】"}],["meta",{"property":"og:description","content":"10 【组件编码流程 组件自定义事件 全局事件总线】 1.组件编码流程 组件化编码流程： ​\\t(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。 ​\\t(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用： ​\\t\\t\\t1).一个组件在用：放在组件自身即可。 ​\\t\\t\\t2). 一些组件在用：放在他们共同的父组件上（状态提升）。 ​\\t(3).实现交互：从绑定事件开始。 props适用于： ​\\t(1).父组件 ==&gt; 子组件 通信 ​\\t(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数） 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！ props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【组件编码流程 组件自定义事件 全局事件总线】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.组件编码流程","slug":"_1-组件编码流程","link":"#_1-组件编码流程","children":[]},{"level":2,"title":"2.组件自定义事件","slug":"_2-组件自定义事件","link":"#_2-组件自定义事件","children":[{"level":3,"title":"2.1绑定自定义事件","slug":"_2-1绑定自定义事件","link":"#_2-1绑定自定义事件","children":[]},{"level":3,"title":"2.2解绑自定义事件","slug":"_2-2解绑自定义事件","link":"#_2-2解绑自定义事件","children":[]},{"level":3,"title":"2.3组件使用原生事件","slug":"_2-3组件使用原生事件","link":"#_2-3组件使用原生事件","children":[]},{"level":3,"title":"2.4自定义组件中的$event","slug":"_2-4自定义组件中的-event","link":"#_2-4自定义组件中的-event","children":[]}]},{"level":2,"title":"3.全局事件总线","slug":"_3-全局事件总线","link":"#_3-全局事件总线","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":5.66,"words":1699},"filePathRelative":"front_end/front_end_framework/vue2/10.md","localizedDate":"2023年1月30日","excerpt":"<h1> 10 【组件编码流程 组件自定义事件 全局事件总线】</h1>\\n<h2> 1.组件编码流程</h2>\\n<ol>\\n<li>\\n<p>组件化编码流程：</p>\\n<p>​\\t(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。</p>\\n<p>​\\t(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：</p>\\n<p>​\\t\\t\\t1).一个组件在用：放在组件自身即可。</p>\\n<p>​\\t\\t\\t2). 一些组件在用：放在他们共同的父组件上（<span style=\\"color:red\\">状态提升</span>）。</p>\\n<p>​\\t(3).实现交互：从绑定事件开始。</p>\\n</li>\\n<li>\\n<p>props适用于：</p>\\n<p>​\\t(1).父组件 ==&gt; 子组件 通信</p>\\n<p>​\\t(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）</p>\\n</li>\\n<li>\\n<p>使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！</p>\\n</li>\\n<li>\\n<p>props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。</p>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};

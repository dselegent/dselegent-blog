const e=JSON.parse(`{"key":"v-020acb62","path":"/front_end/front_end_framework/vue2/02.html","title":"02 【el和data的两种写法 MVVM模型】","lang":"zh-CN","frontmatter":{"description":"02 【el和data的两种写法 MVVM模型】 1.el和data的两种写法 el有2种写法 创建Vue实例对象的时候配置el属性 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值 data有2种写法 对象式：data： 函数式：data() { return { } } 如何选择：目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错 一个重要的原则 由Vue管理的函数，一定不要写箭头函数，否则 this 就不再是Vue实例了","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/vue2/02.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"02 【el和data的两种写法 MVVM模型】"}],["meta",{"property":"og:description","content":"02 【el和data的两种写法 MVVM模型】 1.el和data的两种写法 el有2种写法 创建Vue实例对象的时候配置el属性 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值 data有2种写法 对象式：data： 函数式：data() { return { } } 如何选择：目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错 一个重要的原则 由Vue管理的函数，一定不要写箭头函数，否则 this 就不再是Vue实例了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02 【el和data的两种写法 MVVM模型】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.el和data的两种写法","slug":"_1-el和data的两种写法","link":"#_1-el和data的两种写法","children":[]},{"level":2,"title":"2.MVVM模型","slug":"_2-mvvm模型","link":"#_2-mvvm模型","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"front_end/front_end_framework/vue2/02.md","localizedDate":"2023年1月30日","excerpt":"<h1> 02 【el和data的两种写法 MVVM模型】</h1>\\n<h2> 1.el和data的两种写法</h2>\\n<p><strong>el</strong>有2种写法</p>\\n<ul>\\n<li>\\n<p>创建Vue实例对象的时候配置el属性</p>\\n</li>\\n<li>\\n<p>先创建Vue实例，随后再通过vm.$mount('#root')指定el的值</p>\\n</li>\\n</ul>\\n<p><strong>data</strong>有2种写法</p>\\n<ul>\\n<li>对象式：data：</li>\\n<li>函数式：data() { return { } }</li>\\n<li>如何选择：目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错\\n一个重要的原则</li>\\n<li>由Vue管理的函数，一定不要写箭头函数，否则 this 就不再是Vue实例了</li>\\n</ul>","autoDesc":true}`);export{e as data};

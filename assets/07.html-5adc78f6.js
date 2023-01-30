const e=JSON.parse('{"key":"v-c2511504","path":"/front_end/front_end_framework/vue3/07.html","title":"07 【动态组件 组件注册】","lang":"zh-CN","frontmatter":{"description":"07 【动态组件 组件注册】 1.动态组件 1.1 基本使用 composition api写法：只适用于vue3 在 &lt;script setup&gt; 中，组件被引用为变量而不是作为 字符串键 来注册 核心点 shallowRef() 虽然用 ref() 也能正常使用，但官方不推荐，会爆warn: \\"这可能会导致不必要的性能开销\\" （原因，组件不是动态数据，不需要转为proxy） :is 与 component &gt; 设置动态组件的必要条件 :is 对应绑定的为字符串值即可，值对应引入的组件名 props 数据父传子 shallowRef &gt; 声明 :is 绑定的值，值为 import 的组件名","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/front_end_framework/vue3/07.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"07 【动态组件 组件注册】"}],["meta",{"property":"og:description","content":"07 【动态组件 组件注册】 1.动态组件 1.1 基本使用 composition api写法：只适用于vue3 在 &lt;script setup&gt; 中，组件被引用为变量而不是作为 字符串键 来注册 核心点 shallowRef() 虽然用 ref() 也能正常使用，但官方不推荐，会爆warn: \\"这可能会导致不必要的性能开销\\" （原因，组件不是动态数据，不需要转为proxy） :is 与 component &gt; 设置动态组件的必要条件 :is 对应绑定的为字符串值即可，值对应引入的组件名 props 数据父传子 shallowRef &gt; 声明 :is 绑定的值，值为 import 的组件名"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07 【动态组件 组件注册】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.动态组件","slug":"_1-动态组件","link":"#_1-动态组件","children":[{"level":3,"title":"1.1 基本使用","slug":"_1-1-基本使用","link":"#_1-1-基本使用","children":[]},{"level":3,"title":"1.2 官方案例","slug":"_1-2-官方案例","link":"#_1-2-官方案例","children":[]}]},{"level":2,"title":"2.组件注册","slug":"_2-组件注册","link":"#_2-组件注册","children":[{"level":3,"title":"2.1 全局注册#","slug":"_2-1-全局注册","link":"#_2-1-全局注册","children":[]},{"level":3,"title":"2.2 局部注册#","slug":"_2-2-局部注册","link":"#_2-2-局部注册","children":[]},{"level":3,"title":"2.3 组件名格式#","slug":"_2-3-组件名格式","link":"#_2-3-组件名格式","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":4.91,"words":1474},"filePathRelative":"front_end/front_end_framework/vue3/07.md","localizedDate":"2023年1月30日","excerpt":"<h1> 07 【动态组件 组件注册】</h1>\\n<h2> 1.动态组件</h2>\\n<h3> 1.1 基本使用</h3>\\n<p>composition api写法：只适用于vue3</p>\\n<ul>\\n<li>在 <code>&lt;script setup&gt;</code> 中，组件被引用为变量而不是作为 字符串键 来注册</li>\\n<li>核心点 shallowRef()</li>\\n<li>虽然用 ref() 也能正常使用，但官方不推荐，会爆warn: \\"这可能会导致不必要的性能开销\\" （原因，组件不是动态数据，不需要转为proxy）</li>\\n<li>:is 与 component   &gt;  设置动态组件的必要条件</li>\\n<li>:is 对应绑定的为字符串值即可，值对应引入的组件名</li>\\n<li>props 数据父传子</li>\\n<li>shallowRef   &gt;  声明 :is 绑定的值，值为 import 的组件名</li>\\n</ul>","autoDesc":true}');export{e as data};

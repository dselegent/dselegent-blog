const t=JSON.parse(`{"key":"v-05747ca0","path":"/front_end/front_end_framework/vue2/04.html","title":"04 【计算属性 侦听属性】","lang":"zh-CN","frontmatter":{"description":"04 【计算属性 侦听属性】 1.计算属性 1.1插值语法实现 &lt;title&gt;姓名案例_插值语法实现&lt;/title&gt; &lt;div id=\\"root\\"&gt; 姓：&lt;input type=\\"text\\" v-model=\\"firstName\\"&gt; &lt;br/&gt; 名：&lt;input type=\\"text\\" v-model=\\"lastName\\"&gt; &lt;br/&gt; 全名：&lt;span&gt;{{ firstName }}-{{ lastName }}&lt;/span&gt; &lt;/div&gt; &lt;script type=\\"text/javascript\\"&gt; Vue.config.productionTip = false new Vue({ el:'#root', data:{ firstName:'张', lastName:'三' } }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/front_end_framework/vue2/04.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"04 【计算属性 侦听属性】"}],["meta",{"property":"og:description","content":"04 【计算属性 侦听属性】 1.计算属性 1.1插值语法实现 &lt;title&gt;姓名案例_插值语法实现&lt;/title&gt; &lt;div id=\\"root\\"&gt; 姓：&lt;input type=\\"text\\" v-model=\\"firstName\\"&gt; &lt;br/&gt; 名：&lt;input type=\\"text\\" v-model=\\"lastName\\"&gt; &lt;br/&gt; 全名：&lt;span&gt;{{ firstName }}-{{ lastName }}&lt;/span&gt; &lt;/div&gt; &lt;script type=\\"text/javascript\\"&gt; Vue.config.productionTip = false new Vue({ el:'#root', data:{ firstName:'张', lastName:'三' } }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04 【计算属性 侦听属性】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.计算属性","slug":"_1-计算属性","link":"#_1-计算属性","children":[{"level":3,"title":"1.1插值语法实现","slug":"_1-1插值语法实现","link":"#_1-1插值语法实现","children":[]},{"level":3,"title":"1.2method实现","slug":"_1-2method实现","link":"#_1-2method实现","children":[]},{"level":3,"title":"1.3computed实现","slug":"_1-3computed实现","link":"#_1-3computed实现","children":[]},{"level":3,"title":"1.4method和computed区别","slug":"_1-4method和computed区别","link":"#_1-4method和computed区别","children":[]}]},{"level":2,"title":"2.侦听属性","slug":"_2-侦听属性","link":"#_2-侦听属性","children":[{"level":3,"title":"2.1method实现","slug":"_2-1method实现","link":"#_2-1method实现","children":[]},{"level":3,"title":"2.2watch实现","slug":"_2-2watch实现","link":"#_2-2watch实现","children":[]},{"level":3,"title":"2.3深度侦听","slug":"_2-3深度侦听","link":"#_2-3深度侦听","children":[]},{"level":3,"title":"2.4简写","slug":"_2-4简写","link":"#_2-4简写","children":[]},{"level":3,"title":"2.5computed和watch之间的区别","slug":"_2-5computed和watch之间的区别","link":"#_2-5computed和watch之间的区别","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":5.71,"words":1714},"filePathRelative":"front_end/front_end_framework/vue2/04.md","localizedDate":"2023年1月30日","excerpt":"<h1> 04 【计算属性 侦听属性】</h1>\\n<h2> 1.计算属性</h2>\\n<h3> 1.1插值语法实现</h3>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>姓名案例_插值语法实现<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>root<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  姓：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>firstName<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n  名：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>lastName<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n  全名：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>{{ firstName }}-{{ lastName }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  Vue<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>productionTip <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n  <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">firstName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'张'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">lastName</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'三'</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};

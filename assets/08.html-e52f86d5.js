const l=JSON.parse('{"key":"v-7b40a292","path":"/front_end/front_end_base/html_css/08.html","title":"12.盒模型(上)","lang":"zh-CN","frontmatter":{"description":"12.盒模型(上) 12.1文档流（normalflow） 网页是一个多层的结构，一层摁着一层 通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，最底下的一层称为文档流 文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列 对于我们来元素主要有两个状态 在文档流中 不在文档流中（脱离文档流） 12.2块元素 块元素会在页面中独占一行 默认宽度是父元素的全部（会把父元素撑满） 默认高度是被内容撑开（子元素）","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/front_end_base/html_css/08.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"12.盒模型(上)"}],["meta",{"property":"og:description","content":"12.盒模型(上) 12.1文档流（normalflow） 网页是一个多层的结构，一层摁着一层 通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，最底下的一层称为文档流 文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列 对于我们来元素主要有两个状态 在文档流中 不在文档流中（脱离文档流） 12.2块元素 块元素会在页面中独占一行 默认宽度是父元素的全部（会把父元素撑满） 默认高度是被内容撑开（子元素）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12.盒模型(上)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"12.1文档流（normalflow）","slug":"_12-1文档流-normalflow","link":"#_12-1文档流-normalflow","children":[]},{"level":2,"title":"12.2块元素","slug":"_12-2块元素","link":"#_12-2块元素","children":[]},{"level":2,"title":"12.3行内元素","slug":"_12-3行内元素","link":"#_12-3行内元素","children":[]},{"level":2,"title":"12.4盒子模型","slug":"_12-4盒子模型","link":"#_12-4盒子模型","children":[{"level":3,"title":"12.4.1盒子模型（box model）","slug":"_12-4-1盒子模型-box-model","link":"#_12-4-1盒子模型-box-model","children":[]},{"level":3,"title":"12.4.2内容区（content）","slug":"_12-4-2内容区-content","link":"#_12-4-2内容区-content","children":[]},{"level":3,"title":"12.4.3边框（border）","slug":"_12-4-3边框-border","link":"#_12-4-3边框-border","children":[]},{"level":3,"title":"12.4.4内边距(padding）","slug":"_12-4-4内边距-padding","link":"#_12-4-4内边距-padding","children":[]},{"level":3,"title":"12.4.5外边距（margin）","slug":"_12-4-5外边距-margin","link":"#_12-4-5外边距-margin","children":[]}]},{"level":2,"title":"12.5水平方向布局","slug":"_12-5水平方向布局","link":"#_12-5水平方向布局","children":[]},{"level":2,"title":"12.6垂直方向布局","slug":"_12-6垂直方向布局","link":"#_12-6垂直方向布局","children":[{"level":3,"title":"12.6.1元素溢出","slug":"_12-6-1元素溢出","link":"#_12-6-1元素溢出","children":[]},{"level":3,"title":"12.6.2边距折叠","slug":"_12-6-2边距折叠","link":"#_12-6-2边距折叠","children":[]}]},{"level":2,"title":"12.7行内元素的盒模型","slug":"_12-7行内元素的盒模型","link":"#_12-7行内元素的盒模型","children":[]},{"level":2,"title":"12.8浏览器的默认样式","slug":"_12-8浏览器的默认样式","link":"#_12-8浏览器的默认样式","children":[{"level":3,"title":"reset样式","slug":"reset样式","link":"#reset样式","children":[]},{"level":3,"title":"normalize样式","slug":"normalize样式","link":"#normalize样式","children":[]}]},{"level":2,"title":"12.9参考资料","slug":"_12-9参考资料","link":"#_12-9参考资料","children":[]},{"level":2,"title":"13.1盒子大小","slug":"_13-1盒子大小","link":"#_13-1盒子大小","children":[]},{"level":2,"title":"13.2轮廓","slug":"_13-2轮廓","link":"#_13-2轮廓","children":[]},{"level":2,"title":"13.3盒子阴影","slug":"_13-3盒子阴影","link":"#_13-3盒子阴影","children":[]},{"level":2,"title":"13.4圆角边框","slug":"_13-4圆角边框","link":"#_13-4圆角边框","children":[]},{"level":2,"title":"13.5 CSS3其他特性（了解）","slug":"_13-5-css3其他特性-了解","link":"#_13-5-css3其他特性-了解","children":[{"level":3,"title":"13.5.1 CSS3滤镜 filter","slug":"_13-5-1-css3滤镜-filter","link":"#_13-5-1-css3滤镜-filter","children":[]},{"level":3,"title":"13.5.2 CSS3 calc 函数","slug":"_13-5-2-css3-calc-函数","link":"#_13-5-2-css3-calc-函数","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":19.85,"words":5956},"filePathRelative":"front_end/front_end_base/html_css/08.md","localizedDate":"2023年1月30日","excerpt":"<h1> 12.盒模型(上)</h1>\\n<h2> 12.1文档流（normalflow）</h2>\\n<p>网页是一个多层的结构，一层摁着一层</p>\\n<p>通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层</p>\\n<p>这些层中，最底下的一层称为文档流</p>\\n<p>文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列</p>\\n<p>对于我们来元素主要有两个状态</p>\\n<ul>\\n<li>\\n<p>在文档流中</p>\\n</li>\\n<li>\\n<p>不在文档流中（脱离文档流）</p>\\n</li>\\n</ul>\\n<h2> 12.2块元素</h2>\\n<ul>\\n<li>\\n<p>块元素会在页面中独占一行</p>\\n</li>\\n<li>\\n<p>默认宽度是父元素的全部（会把父元素撑满）</p>\\n</li>\\n<li>\\n<p>默认高度是被内容撑开（子元素）</p>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};
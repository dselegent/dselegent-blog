const e=JSON.parse('{"key":"v-7b40a292","path":"/front_end/front_end_base/html_css/08.html","title":"08 【盒模型(上) 盒模型(下)】","lang":"zh-CN","frontmatter":{"description":"08 【盒模型(上) 盒模型(下)】 1.盒模型(上) 1.1 文档流（normalflow） 网页是一个多层的结构，一层摁着一层 通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，最底下的一层称为文档流 文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列 对于我们来元素主要有两个状态 在文档流中 不在文档流中（脱离文档流） 1.2 块元素","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_base/html_css/08.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"08 【盒模型(上) 盒模型(下)】"}],["meta",{"property":"og:description","content":"08 【盒模型(上) 盒模型(下)】 1.盒模型(上) 1.1 文档流（normalflow） 网页是一个多层的结构，一层摁着一层 通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层 这些层中，最底下的一层称为文档流 文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列 对于我们来元素主要有两个状态 在文档流中 不在文档流中（脱离文档流） 1.2 块元素"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-03T03:34:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-03T03:34:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"08 【盒模型(上) 盒模型(下)】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-03T03:34:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.盒模型(上)","slug":"_1-盒模型-上","link":"#_1-盒模型-上","children":[{"level":3,"title":"1.1 文档流（normalflow）","slug":"_1-1-文档流-normalflow","link":"#_1-1-文档流-normalflow","children":[]},{"level":3,"title":"1.2 块元素","slug":"_1-2-块元素","link":"#_1-2-块元素","children":[]},{"level":3,"title":"1.3 行内元素","slug":"_1-3-行内元素","link":"#_1-3-行内元素","children":[]},{"level":3,"title":"1.4 盒子模型","slug":"_1-4-盒子模型","link":"#_1-4-盒子模型","children":[]},{"level":3,"title":"1.5 水平方向布局","slug":"_1-5-水平方向布局","link":"#_1-5-水平方向布局","children":[]},{"level":3,"title":"1.6 垂直方向布局","slug":"_1-6-垂直方向布局","link":"#_1-6-垂直方向布局","children":[]},{"level":3,"title":"1.7 行内元素的盒模型","slug":"_1-7-行内元素的盒模型","link":"#_1-7-行内元素的盒模型","children":[]},{"level":3,"title":"1.8 浏览器的默认样式","slug":"_1-8-浏览器的默认样式","link":"#_1-8-浏览器的默认样式","children":[]},{"level":3,"title":"1.9 reset样式","slug":"_1-9-reset样式","link":"#_1-9-reset样式","children":[]},{"level":3,"title":"1.10 normalize样式","slug":"_1-10-normalize样式","link":"#_1-10-normalize样式","children":[]},{"level":3,"title":"1.11 参考资料","slug":"_1-11-参考资料","link":"#_1-11-参考资料","children":[]}]},{"level":2,"title":"2.盒模型(下)","slug":"_2-盒模型-下","link":"#_2-盒模型-下","children":[{"level":3,"title":"2.1 盒子大小","slug":"_2-1-盒子大小","link":"#_2-1-盒子大小","children":[]},{"level":3,"title":"2.2 轮廓","slug":"_2-2-轮廓","link":"#_2-2-轮廓","children":[]},{"level":3,"title":"2.3 盒子阴影","slug":"_2-3-盒子阴影","link":"#_2-3-盒子阴影","children":[]},{"level":3,"title":"2.4 圆角边框","slug":"_2-4-圆角边框","link":"#_2-4-圆角边框","children":[]},{"level":3,"title":"2.5 CSS3其他特性（了解）","slug":"_2-5-css3其他特性-了解","link":"#_2-5-css3其他特性-了解","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1677814492000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":2}]},"readingTime":{"minutes":19.86,"words":5959},"filePathRelative":"front_end/front_end_base/html_css/08.md","localizedDate":"2023年1月30日","excerpt":"<h1> 08 【盒模型(上) 盒模型(下)】</h1>\\n<h2> 1.盒模型(上)</h2>\\n<h3> 1.1 文档流（normalflow）</h3>\\n<p>网页是一个多层的结构，一层摁着一层</p>\\n<p>通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层</p>\\n<p>这些层中，最底下的一层称为文档流</p>\\n<p>文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列</p>\\n<p>对于我们来元素主要有两个状态</p>\\n<ul>\\n<li>\\n<p>在文档流中</p>\\n</li>\\n<li>\\n<p>不在文档流中（脱离文档流）</p>\\n</li>\\n</ul>\\n<h3> 1.2 块元素</h3>","autoDesc":true}');export{e as data};
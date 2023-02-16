const e=JSON.parse('{"key":"v-baffce4a","path":"/front_end/front_end_base/html_css/10.html","title":"16.高度塌陷与BFC","lang":"zh-CN","frontmatter":{"description":"16.高度塌陷与BFC 16.1高度塌陷 在浮动布局中，父元素的高度默认是被子元素撑开的 当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失 父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/front_end_base/html_css/10.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"16.高度塌陷与BFC"}],["meta",{"property":"og:description","content":"16.高度塌陷与BFC 16.1高度塌陷 在浮动布局中，父元素的高度默认是被子元素撑开的 当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失 父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16.高度塌陷与BFC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"16.1高度塌陷","slug":"_16-1高度塌陷","link":"#_16-1高度塌陷","children":[]},{"level":2,"title":"16.2BFC","slug":"_16-2bfc","link":"#_16-2bfc","children":[]},{"level":2,"title":"16.3为什么需要清除浮动？","slug":"_16-3为什么需要清除浮动","link":"#_16-3为什么需要清除浮动","children":[]},{"level":2,"title":"16.4清除浮动本质","slug":"_16-4清除浮动本质","link":"#_16-4清除浮动本质","children":[]},{"level":2,"title":"16.5clear","slug":"_16-5clear","link":"#_16-5clear","children":[]},{"level":2,"title":"16.6清除浮动方法","slug":"_16-6清除浮动方法","link":"#_16-6清除浮动方法","children":[]},{"level":2,"title":"16.7清除浮动 —— 额外标签法","slug":"_16-7清除浮动-——-额外标签法","link":"#_16-7清除浮动-——-额外标签法","children":[]},{"level":2,"title":"16.8清除浮动 —— 父级添加 overflow","slug":"_16-8清除浮动-——-父级添加-overflow","link":"#_16-8清除浮动-——-父级添加-overflow","children":[]},{"level":2,"title":"16.9清除动 —— ::after 伪元素法","slug":"_16-9清除动-——-after-伪元素法","link":"#_16-9清除动-——-after-伪元素法","children":[]},{"level":2,"title":"16.10清除浮动 —— 双伪元素清除浮动","slug":"_16-10清除浮动-——-双伪元素清除浮动","link":"#_16-10清除浮动-——-双伪元素清除浮动","children":[]},{"level":2,"title":"16.11清除浮动总结","slug":"_16-11清除浮动总结","link":"#_16-11清除浮动总结","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":10.34,"words":3102},"filePathRelative":"front_end/front_end_base/html_css/10.md","localizedDate":"2023年1月30日","excerpt":"<h1> 16.高度塌陷与BFC</h1>\\n<h2> 16.1高度塌陷</h2>\\n<p>在浮动布局中，父元素的高度默认是被子元素撑开的</p>\\n<p>当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失</p>\\n<p>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</p>\\n<figure><img src=\\"https://i0.hdslb.com/bfs/album/cb831d42c016c9f6ddd693d5c1d9135dafa780fc.gif\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
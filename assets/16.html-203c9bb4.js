const t=JSON.parse('{"key":"v-a685a6d6","path":"/front_end/front_end_base/html_css/16.html","title":"16 【过渡 动画】","lang":"zh-CN","frontmatter":{"description":"16 【过渡 动画】 1.过渡 1.1 概述 在CSS中用于设置过渡特效的属性是 transition，该属性允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标悬浮（:hover）、鼠标单击（:active）、表单元素获得焦点（:focus）或对元素任何改变以及在JavaScript中某些事件执行后触发，并圆滑（若不对时间曲线进行特殊设置）地以动画效果改变CSS的属性值。 该属性能够对CSS中绝大部分属性的变化生效，但不能对CSS属性值不为“数值”的属性生效，即只有当属性的值为一个数值的时候，该属性才能生效。数值包含“纯数字”、“像素数值”、“百分比数值”、“十六进制数值”等CSS属性的值为数值的元素生效。如：当元素的宽度为“width:100px”变化为“width:200px”的时候过渡效果能够生效，但当元素的宽度为“width:100px”变化为“width:auto”的时候，就不会产生过渡效果了。当一个元素的字体颜色为“#f31e1d”，变化为“#2396fd”的时候过渡有效，但当它的字体颜色由“#f31e1d”变为“transparent”的时候过渡就不会产生效果了。这一点在使用中需要留意。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_base/html_css/16.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"16 【过渡 动画】"}],["meta",{"property":"og:description","content":"16 【过渡 动画】 1.过渡 1.1 概述 在CSS中用于设置过渡特效的属性是 transition，该属性允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标悬浮（:hover）、鼠标单击（:active）、表单元素获得焦点（:focus）或对元素任何改变以及在JavaScript中某些事件执行后触发，并圆滑（若不对时间曲线进行特殊设置）地以动画效果改变CSS的属性值。 该属性能够对CSS中绝大部分属性的变化生效，但不能对CSS属性值不为“数值”的属性生效，即只有当属性的值为一个数值的时候，该属性才能生效。数值包含“纯数字”、“像素数值”、“百分比数值”、“十六进制数值”等CSS属性的值为数值的元素生效。如：当元素的宽度为“width:100px”变化为“width:200px”的时候过渡效果能够生效，但当元素的宽度为“width:100px”变化为“width:auto”的时候，就不会产生过渡效果了。当一个元素的字体颜色为“#f31e1d”，变化为“#2396fd”的时候过渡有效，但当它的字体颜色由“#f31e1d”变为“transparent”的时候过渡就不会产生效果了。这一点在使用中需要留意。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T03:53:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T03:53:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16 【过渡 动画】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-10T03:53:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.过渡","slug":"_1-过渡","link":"#_1-过渡","children":[{"level":3,"title":"1.1 概述","slug":"_1-1-概述","link":"#_1-1-概述","children":[]},{"level":3,"title":"1.2 transition-property","slug":"_1-2-transition-property","link":"#_1-2-transition-property","children":[]},{"level":3,"title":"1.3 transition-duration","slug":"_1-3-transition-duration","link":"#_1-3-transition-duration","children":[]},{"level":3,"title":"1.4 transition-timing-function","slug":"_1-4-transition-timing-function","link":"#_1-4-transition-timing-function","children":[]},{"level":3,"title":"1.5 transition-delay","slug":"_1-5-transition-delay","link":"#_1-5-transition-delay","children":[]},{"level":3,"title":"1.6 简写","slug":"_1-6-简写","link":"#_1-6-简写","children":[]}]},{"level":2,"title":"2.动画","slug":"_2-动画","link":"#_2-动画","children":[{"level":3,"title":"2.1 动画的基本使用","slug":"_2-1-动画的基本使用","link":"#_2-1-动画的基本使用","children":[]},{"level":3,"title":"2.2 动画常用属性","slug":"_2-2-动画常用属性","link":"#_2-2-动画常用属性","children":[]},{"level":3,"title":"2.3 动画简写属性","slug":"_2-3-动画简写属性","link":"#_2-3-动画简写属性","children":[]},{"level":3,"title":"2.4 速度曲线细节","slug":"_2-4-速度曲线细节","link":"#_2-4-速度曲线细节","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1678420427000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":2}]},"readingTime":{"minutes":10.9,"words":3269},"filePathRelative":"front_end/front_end_base/html_css/16.md","localizedDate":"2023年1月30日","excerpt":"<h1> 16 【过渡 动画】</h1>\\n<h2> 1.过渡</h2>\\n<h3> 1.1 概述</h3>\\n<p>在CSS中用于设置过渡特效的属性是 transition，该属性允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标悬浮<code>（:hover）</code>、鼠标单击<code>（:active）</code>、表单元素获得焦点<code>（:focus）</code>或对元素任何改变以及在JavaScript中某些事件执行后触发，并圆滑（若不对时间曲线进行特殊设置）地以动画效果改变CSS的属性值。</p>\\n<p>该属性能够对CSS中绝大部分属性的变化生效，但不能对CSS属性值不为“数值”的属性生效，即只有当属性的值为一个数值的时候，该属性才能生效。数值包含“纯数字”、“像素数值”、“百分比数值”、“十六进制数值”等CSS属性的值为数值的元素生效。如：当元素的宽度为<code>“width:100px”</code>变化为<code>“width:200px”</code>的时候过渡效果能够生效，但当元素的宽度为<code>“width:100px”</code>变化为<code>“width:auto”</code>的时候，就不会产生过渡效果了。当一个元素的字体颜色为<code>“#f31e1d”</code>，变化为<code>“#2396fd”</code>的时候过渡有效，但当它的字体颜色由<code>“#f31e1d”</code>变为<code>“transparent”</code>的时候过渡就不会产生效果了。这一点在使用中需要留意。</p>","autoDesc":true}');export{t as data};

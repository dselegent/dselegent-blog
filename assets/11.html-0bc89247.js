const e=JSON.parse('{"key":"v-b7961d0c","path":"/front_end/front_end_base/html_css/11.html","title":"17.定位","lang":"zh-CN","frontmatter":{"description":"17.定位 17.1为什么需要定位？ 提问： 以下情况使用标准流或者浮动能实现吗？ 某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子。 当我们滚动窗口的时候，盒子是固定屏幕某个位置的。 以上效果，标准流或浮动都无法快速实现，此时需要定位来实现。 所以： 浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/front_end/front_end_base/html_css/11.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"17.定位"}],["meta",{"property":"og:description","content":"17.定位 17.1为什么需要定位？ 提问： 以下情况使用标准流或者浮动能实现吗？ 某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子。 当我们滚动窗口的时候，盒子是固定屏幕某个位置的。 以上效果，标准流或浮动都无法快速实现，此时需要定位来实现。 所以： 浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17.定位\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"17.1为什么需要定位？","slug":"_17-1为什么需要定位","link":"#_17-1为什么需要定位","children":[]},{"level":2,"title":"17.2定位组成","slug":"_17-2定位组成","link":"#_17-2定位组成","children":[]},{"level":2,"title":"17.3相对定位","slug":"_17-3相对定位","link":"#_17-3相对定位","children":[{"level":3,"title":"17.3.1基本使用","slug":"_17-3-1基本使用","link":"#_17-3-1基本使用","children":[]},{"level":3,"title":"17.3.2相对定位的特点","slug":"_17-3-2相对定位的特点","link":"#_17-3-2相对定位的特点","children":[]}]},{"level":2,"title":"17.4绝对定位","slug":"_17-4绝对定位","link":"#_17-4绝对定位","children":[]},{"level":2,"title":"17.5布局","slug":"_17-5布局","link":"#_17-5布局","children":[{"level":3,"title":"17.5.1水平方向的布局","slug":"_17-5-1水平方向的布局","link":"#_17-5-1水平方向的布局","children":[]},{"level":3,"title":"17.5.2水平居中","slug":"_17-5-2水平居中","link":"#_17-5-2水平居中","children":[]},{"level":3,"title":"17.5.3垂直方向的布局","slug":"_17-5-3垂直方向的布局","link":"#_17-5-3垂直方向的布局","children":[]},{"level":3,"title":"17.5.4垂直居中","slug":"_17-5-4垂直居中","link":"#_17-5-4垂直居中","children":[]},{"level":3,"title":"17.5.5水平垂直居中","slug":"_17-5-5水平垂直居中","link":"#_17-5-5水平垂直居中","children":[]},{"level":3,"title":"17.5.6小结","slug":"_17-5-6小结","link":"#_17-5-6小结","children":[]}]},{"level":2,"title":"17.6子绝父相的由来","slug":"_17-6子绝父相的由来","link":"#_17-6子绝父相的由来","children":[]},{"level":2,"title":"17.7固定定位","slug":"_17-7固定定位","link":"#_17-7固定定位","children":[]},{"level":2,"title":"17.8固定定位小技巧：固定在版心右侧位置","slug":"_17-8固定定位小技巧-固定在版心右侧位置","link":"#_17-8固定定位小技巧-固定在版心右侧位置","children":[]},{"level":2,"title":"17.9粘滞定位","slug":"_17-9粘滞定位","link":"#_17-9粘滞定位","children":[]},{"level":2,"title":"17.10定位的总结","slug":"_17-10定位的总结","link":"#_17-10定位的总结","children":[]},{"level":2,"title":"17.11元素层级","slug":"_17-11元素层级","link":"#_17-11元素层级","children":[]},{"level":2,"title":"17.12定位的拓展","slug":"_17-12定位的拓展","link":"#_17-12定位的拓展","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":20.56,"words":6167},"filePathRelative":"front_end/front_end_base/html_css/11.md","localizedDate":"2023年1月30日","excerpt":"<h1> 17.定位</h1>\\n<h2> 17.1为什么需要定位？</h2>\\n<p>提问： 以下情况使用标准流或者浮动能实现吗？</p>\\n<ol>\\n<li>\\n<p>某个元素可以<strong>自由</strong>的在一个盒子内移动位置，并且压住其他盒子。</p>\\n</li>\\n<li>\\n<p>当我们滚动窗口的时候，盒子是<strong>固定</strong>屏幕某个位置的。</p>\\n</li>\\n</ol>\\n<p>以上效果，标准流或浮动都无法快速实现，此时需要定位来实现。</p>\\n<p>所以：</p>\\n<ol>\\n<li>浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。</li>\\n<li>定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。</li>\\n</ol>","autoDesc":true}');export{e as data};
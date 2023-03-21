const e=JSON.parse('{"key":"v-b246b6f8","path":"/front_end/front_end_framework/uniapp/05.html","title":"05 【uni-app的API】","lang":"zh-CN","frontmatter":{"description":"05 【uni-app的API】 1.概述 uni-app的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。 标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。 uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/uniapp/05.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"05 【uni-app的API】"}],["meta",{"property":"og:description","content":"05 【uni-app的API】 1.概述 uni-app的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。 标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。 uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05 【uni-app的API】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.概述","slug":"_1-概述","link":"#_1-概述","children":[{"level":3,"title":"1.1 标准 js 和浏览器 js 的区别","slug":"_1-1-标准-js-和浏览器-js-的区别","link":"#_1-1-标准-js-和浏览器-js-的区别","children":[]},{"level":3,"title":"1.2 各端特色 API 调用","slug":"_1-2-各端特色-api-调用","link":"#_1-2-各端特色-api-调用","children":[]},{"level":3,"title":"1.3 说明","slug":"_1-3-说明","link":"#_1-3-说明","children":[]},{"level":3,"title":"1.4 API Promise 化","slug":"_1-4-api-promise-化","link":"#_1-4-api-promise-化","children":[]},{"level":3,"title":"1.5 Vue 2 和 Vue 3 的 API Promise化","slug":"_1-5-vue-2-和-vue-3-的-api-promise化","link":"#_1-5-vue-2-和-vue-3-的-api-promise化","children":[]}]},{"level":2,"title":"2.网络","slug":"_2-网络","link":"#_2-网络","children":[{"level":3,"title":"2.1 发起请求","slug":"_2-1-发起请求","link":"#_2-1-发起请求","children":[]}]},{"level":2,"title":"3.路由和页面跳转","slug":"_3-路由和页面跳转","link":"#_3-路由和页面跳转","children":[{"level":3,"title":"3.1 uni.navigateTo(OBJECT)","slug":"_3-1-uni-navigateto-object","link":"#_3-1-uni-navigateto-object","children":[]},{"level":3,"title":"3.2 uni.redirectTo(OBJECT)","slug":"_3-2-uni-redirectto-object","link":"#_3-2-uni-redirectto-object","children":[]},{"level":3,"title":"3.3 uni.reLaunch(OBJECT)","slug":"_3-3-uni-relaunch-object","link":"#_3-3-uni-relaunch-object","children":[]},{"level":3,"title":"3.4 uni.switchTab(OBJECT)","slug":"_3-4-uni-switchtab-object","link":"#_3-4-uni-switchtab-object","children":[]},{"level":3,"title":"3.5 uni.navigateBack(OBJECT)","slug":"_3-5-uni-navigateback-object","link":"#_3-5-uni-navigateback-object","children":[]},{"level":3,"title":"3.6 EventChannel","slug":"_3-6-eventchannel","link":"#_3-6-eventchannel","children":[]}]},{"level":2,"title":"4.数据缓存","slug":"_4-数据缓存","link":"#_4-数据缓存","children":[{"level":3,"title":"4.1 uni.setStorageSync(KEY,DATA)","slug":"_4-1-uni-setstoragesync-key-data","link":"#_4-1-uni-setstoragesync-key-data","children":[]},{"level":3,"title":"4.2 uni.getStorageSync(KEY)","slug":"_4-2-uni-getstoragesync-key","link":"#_4-2-uni-getstoragesync-key","children":[]},{"level":3,"title":"4.3 uni.removeStorageSync(KEY)","slug":"_4-3-uni-removestoragesync-key","link":"#_4-3-uni-removestoragesync-key","children":[]},{"level":3,"title":"4.4 uni.clearStorageSync()","slug":"_4-4-uni-clearstoragesync","link":"#_4-4-uni-clearstoragesync","children":[]}]},{"level":2,"title":"5.界面","slug":"_5-界面","link":"#_5-界面","children":[{"level":3,"title":"5.1 交互反馈","slug":"_5-1-交互反馈","link":"#_5-1-交互反馈","children":[]},{"level":3,"title":"5.2 下拉刷新","slug":"_5-2-下拉刷新","link":"#_5-2-下拉刷新","children":[]}]},{"level":2,"title":"6.页面和窗体","slug":"_6-页面和窗体","link":"#_6-页面和窗体","children":[{"level":3,"title":"6.1 页面","slug":"_6-1-页面","link":"#_6-1-页面","children":[]},{"level":3,"title":"6.2 页面通讯","slug":"_6-2-页面通讯","link":"#_6-2-页面通讯","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":24.43,"words":7330},"filePathRelative":"front_end/front_end_framework/uniapp/05.md","localizedDate":"2023年1月30日","excerpt":"<h1> 05 【uni-app的API】</h1>\\n<h2> 1.概述</h2>\\n<p><code>uni-app</code>的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。</p>\\n<p>标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。</p>\\n<p>uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。</p>","autoDesc":true}');export{e as data};

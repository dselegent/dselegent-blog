import{ab as o,G as s,H as d,E as e,S as n,N as a,ac as l,W as t}from"./framework-844b12a4.js";const p={},r=e("h1",{id:"_02-【uni-app起步】",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_02-【uni-app起步】","aria-hidden":"true"},"#"),n(" 02 【uni-app起步】")],-1),c=e("h2",{id:"_1-什么是uni-app",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-什么是uni-app","aria-hidden":"true"},"#"),n(" 1.什么是uni-app")],-1),u=e("code",null,"uni-app",-1),h={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g=e("blockquote",null,[e("p",null,"翻译翻译就是：写一套代码就可以在多端运行")],-1),_=e("code",null,"DCloud",-1),b={href:"https://opendocs.alipay.com/mini/ide/overview",target:"_blank",rel:"noopener noreferrer"},f={href:"https://ask.dcloud.net.cn/article/35640",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"uni-app",-1),v=e("code",null,"uni-app",-1),w={href:"https://ask.dcloud.net.cn/article/35947",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"_2-uni-app-环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-uni-app-环境搭建","aria-hidden":"true"},"#"),n(" 2.uni-app 环境搭建")],-1),x=e("code",null,"uni-app",-1),j={href:"https://uniapp.dcloud.io/quickstart-cli",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"vue-cli",-1),y=e("p",null,"可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。",-1),B=e("p",null,"开始之前，开发者需先下载安装如下工具：",-1),H={href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"},z=l('<p>HBuilderX是通用的前端开发工具，但为<code>uni-app</code>做了特别强化。</p><h3 id="_2-1-创建uni-app" tabindex="-1"><a class="header-anchor" href="#_2-1-创建uni-app" aria-hidden="true">#</a> 2.1 创建uni-app</h3><p>在点击工具栏里的文件 -&gt; 新建 -&gt; 项目（快捷键<code>Ctrl+N</code>）：</p><figure><img src="https://i0.hdslb.com/bfs/album/001a7e2797edb732ae2be49927272e8da7f4787d.png" alt="image-20221012200152918" tabindex="0" loading="lazy"><figcaption>image-20221012200152918</figcaption></figure><p>选择<code>uni-app</code>类型，输入工程名，选择模板，点击创建，即可成功创建。</p><p>uni-app自带的模板有 默认的空项目模板、Hello uni-app 官方组件和API示例，还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。</p><figure><img src="https://i0.hdslb.com/bfs/album/fc1ff9bfcbe771013e62c53b182b3be27499cea3.png" alt="image-20221012200227087" tabindex="0" loading="lazy"><figcaption>image-20221012200227087</figcaption></figure>',7),V=e("code",null,"cli",-1),X={href:"https://uniapp.dcloud.io/quickstart-cli.html",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"差别是：HBuilderX创建的项目根目录就是源码，可直接编辑。uni-app的编译器在HBuilderX的插件目录下，跟随HBuilderX升级而一起升级。",-1),C={href:"https://uniapp.dcloud.net.cn/quickstart-cli#clidiff",target:"_blank",rel:"noopener noreferrer"},S=l('<h3 id="_2-2-运行uni-app" tabindex="-1"><a class="header-anchor" href="#_2-2-运行uni-app" aria-hidden="true">#</a> 2.2 运行uni-app</h3><ol><li>浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行到浏览器 -&gt; 选择浏览器，即可体验 uni-app 的 web 版。</li></ol><figure><img src="https://i0.hdslb.com/bfs/album/0cdaef87ed51ef3f21d25a4535ca3ac673b3ccb9.png" alt="image-20221012200308031" tabindex="0" loading="lazy"><figcaption>image-20221012200308031</figcaption></figure><ol start="2"><li>运行App到手机或模拟器：使用电压足够的usb端口连接手机，设置中开启USB调试，手机上允许电脑设备调试手机，进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行App到手机或模拟器，即可在该设备里面体验uni-app。</li></ol><figure><img src="https://i0.hdslb.com/bfs/album/91430d87d04bd3020fce08cf6ffb89d455e5a6d4.png" alt="image-20221012200359605" tabindex="0" loading="lazy"><figcaption>image-20221012200359605</figcaption></figure>',5),N={href:"https://uniapp.dcloud.net.cn/tutorial/run/run-app-faq.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground",target:"_blank",rel:"noopener noreferrer"},I=l(`<ol start="3"><li>在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行到小程序模拟器 -&gt; 微信开发者工具，即可在微信开发者工具里面体验uni-app。</li></ol><figure><img src="https://i0.hdslb.com/bfs/album/a8df3bf4fb45c4fdf1dd121269a7951fbd2792a7.png" alt="image-20221012200437511" tabindex="0" loading="lazy"><figcaption>image-20221012200437511</figcaption></figure><p><strong>注意</strong>：如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。</p><figure><img src="https://i0.hdslb.com/bfs/album/6fcd39f14abdb550ac748127c668c0e10c8b513b.png" alt="image-20221012200500652" tabindex="0" loading="lazy"><figcaption>image-20221012200500652</figcaption></figure><p><strong>注意</strong>：微信开发者工具需要开启服务端口 在微信工具的设置-&gt;安全中。</p><figure><img src="https://i0.hdslb.com/bfs/album/6e08a0e6959e795eba2019eea81839ab663b1130.png" alt="image-20221012200517918" tabindex="0" loading="lazy"><figcaption>image-20221012200517918</figcaption></figure><h2 id="_3-uni-app的开发目录结构" tabindex="-1"><a class="header-anchor" href="#_3-uni-app的开发目录结构" aria-hidden="true">#</a> 3.uni-app的开发目录结构</h2><h3 id="_3-1-官方" tabindex="-1"><a class="header-anchor" href="#_3-1-官方" aria-hidden="true">#</a> 3.1 官方</h3><p>一个uni-app工程，默认包含如下目录及文件：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放<span class="token url">[<span class="token content">uni_module</span>](<span class="token url">/uni_modules</span>)</span>。
├─platforms             存放各平台专用页面的目录，详见
├─nativeplugins         App原生语言插件 详见
├─nativeResources       App端原生资源目录
│  └─android            Android原生资源目录 详见
├─hybrid                App端存放本地html文件的目录，详见
├─wxcomponents          存放小程序组件的目录，详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─AndroidManifest.xml   Android原生应用清单文件 详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss              这里是uni-app内置的常用样式变量 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Tips</strong></p><ul><li>编译到任意平台时，<code>static</code> 目录下的文件均会被完整打包进去，且不会编译。非 <code>static</code> 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。</li><li><code>static</code> 目录下的 <code>js</code> 文件不会被编译，如果里面有 <code>es6</code> 的代码，不经过转换直接运行，在手机设备上会报错。</li><li><code>css</code>、<code>less/scss</code> 等资源不要放在 <code>static</code> 目录下，建议这些公用的资源放在自建的 <code>common</code> 目录下。</li><li>HbuilderX 1.9.0+ 支持在根目录创建 <code>ext.json</code>、<code>sitemap.json</code> 等小程序需要的文件。</li></ul><h3 id="_3-2-基础项目" tabindex="-1"><a class="header-anchor" href="#_3-2-基础项目" aria-hidden="true">#</a> 3.2 基础项目</h3><figure><img src="https://i0.hdslb.com/bfs/album/cdc77725add1d4fda236938df819eb6a4c60d10f.png" alt="image-20221012200922934" tabindex="0" loading="lazy"><figcaption>image-20221012200922934</figcaption></figure><p>pages目录： 存放页面的。</p><p>static目录：存放静态资源的。</p><p>unpackage目录：存放最终打包的存放位置。</p><p>App.vue文件：项目根组件。</p><p>main.js文件：项目的入口文件，也就是项目加载时，先加载main.js文件。</p><p>manifest.json文件：负责管理打包的一些配置，指定应用名称，图标，权限等。</p><p>pages.json文件：页面路由，负责设置整个项目的页面(pages)存放路径以及窗口外观(globalStyle)的。</p><p>uni.scss文件：配置一些颜色什么的。</p><p><strong>uni-app的开发规范：(看起来就是Vue和小程序混合起来了)</strong></p><p>为了实现多端兼容，综合考虑编译速度、运行性能等因素，<code>uni-app</code> 约定了如下开发规范：</p>`,24),D={href:"https://vue-loader.vuejs.org/zh/spec.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://uniapp.dcloud.net.cn/component/",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"wx",-1),Q=e("code",null,"uni",-1),T={href:"https://uniapp.dcloud.net.cn/api/",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,[n("数据绑定及事件处理同 "),e("code",null,"Vue.js"),n(" 规范，同时补充了App及页面的生命周期")],-1),F=e("li",null,"为兼容多端运行，建议使用flex布局进行开发",-1);function G(J,M){const i=t("ExternalLinkIcon");return s(),d("div",null,[r,c,e("p",null,[u,n(" 是一个使用 "),e("a",h,[n("Vue.js (opens new window)"),a(i)]),n("开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。")]),g,e("p",null,[_,n("公司拥有900万开发者、数百万应用、12亿手机端月活用户、数千款uni-app插件、70+微信/qq群。阿里小程序工具官方内置uni-app（"),e("a",b,[n("详见 (opens new window)"),a(i)]),n("），腾讯课堂官方为uni-app录制培训课程（"),e("a",f,[n("详见 (opens new window)"),a(i)]),n("），开发者可以放心选择。")]),e("p",null,[m,n("在手，做啥都不愁。即使不跨端，"),v,n("也是更好的小程序开发框架（"),e("a",w,[n("详见 (opens new window)"),a(i)]),n("）、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。")]),k,e("blockquote",null,[e("p",null,[x,n("支持通过 可视化界面、"),e("a",j,[A,n("命令行 (opens new window)"),a(i)]),n("两种方式快速创建项目。")])]),y,B,e("ul",null,[e("li",null,[n("HBuilderX："),e("a",H,[n("官方IDE下载地址(opens new window)"),a(i)])])]),z,e("p",null,[n("开发者也可以使用"),V,n("方式创建项目，另见"),e("a",X,[n("文档 (opens new window)"),a(i)]),n("。")]),q,e("p",null,[n("如果开发者习惯于node模式的项目，对HBuilderX可视化方式感到困惑，可另行参考文档："),e("a",C,[n("## cli创建项目和HBuilderX可视化界面创建项目的区别"),a(i)])]),S,e("ul",null,[e("li",null,[e("p",null,[n("如手机或模拟器无法识别，请点击"),e("a",N,[n("常见故障排查指南 (opens new window)"),a(i)]),n("。")])]),e("li",null,[e("p",null,[n("如需运行在苹果手机真机上，注意需使用自定义基座。"),e("a",E,[n("详见"),a(i)])])])]),I,e("ul",null,[e("li",null,[n("页面文件遵循 "),e("a",D,[n("Vue 单文件组件 (SFC) 规范(opens new window)"),a(i)])]),e("li",null,[n("组件标签靠近小程序规范，详见"),e("a",L,[n("uni-app 组件规范"),a(i)])]),e("li",null,[n("接口能力（JS API）靠近微信小程序规范，但需将前缀 "),P,n(" 替换为 "),Q,n("，详见"),e("a",T,[n("uni-app接口规范"),a(i)])]),W,F])])}const R=o(p,[["render",G],["__file","02.html.vue"]]);export{R as default};

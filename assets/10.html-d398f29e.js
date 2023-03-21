const e=JSON.parse('{"key":"v-5323d68f","path":"/front_end/other/electron/10.html","title":"10 【Vite + Vue3 + Electron 创建打包桌面程序】","lang":"zh-CN","frontmatter":{"description":"10 【Vite + Vue3 + Electron 创建打包桌面程序】 1.使用 Vite 构建 Electron 项目 1.1 创建 Vite 应用，安装 Electron 依赖 创建一个 Vite 项目 npm init vite@latest","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/other/electron/10.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"10 【Vite + Vue3 + Electron 创建打包桌面程序】"}],["meta",{"property":"og:description","content":"10 【Vite + Vue3 + Electron 创建打包桌面程序】 1.使用 Vite 构建 Electron 项目 1.1 创建 Vite 应用，安装 Electron 依赖 创建一个 Vite 项目 npm init vite@latest"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【Vite + Vue3 + Electron 创建打包桌面程序】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.使用 Vite 构建 Electron 项目","slug":"_1-使用-vite-构建-electron-项目","link":"#_1-使用-vite-构建-electron-项目","children":[{"level":3,"title":"1.1 创建 Vite 应用，安装 Electron 依赖","slug":"_1-1-创建-vite-应用-安装-electron-依赖","link":"#_1-1-创建-vite-应用-安装-electron-依赖","children":[]},{"level":3,"title":"1.2 在 vite.config.ts 中，配置 Electron 入口文件","slug":"_1-2-在-vite-config-ts-中-配置-electron-入口文件","link":"#_1-2-在-vite-config-ts-中-配置-electron-入口文件","children":[]},{"level":3,"title":"1.3 编写 electron / index.ts","slug":"_1-3-编写-electron-index-ts","link":"#_1-3-编写-electron-index-ts","children":[]},{"level":3,"title":"1.3.4 整理 electron/main/index.ts","slug":"_1-3-4-整理-electron-main-index-ts","link":"#_1-3-4-整理-electron-main-index-ts","children":[]},{"level":3,"title":"1.4 配置 package json，运行项目","slug":"_1-4-配置-package-json-运行项目","link":"#_1-4-配置-package-json-运行项目","children":[]}]},{"level":2,"title":"2.打包 Electron 桌面程序","slug":"_2-打包-electron-桌面程序","link":"#_2-打包-electron-桌面程序","children":[{"level":3,"title":"3.1 安装打包依赖，调整打包命令","slug":"_3-1-安装打包依赖-调整打包命令","link":"#_3-1-安装打包依赖-调整打包命令","children":[]},{"level":3,"title":"3.2 增加 electron-builder 相关配置","slug":"_3-2-增加-electron-builder-相关配置","link":"#_3-2-增加-electron-builder-相关配置","children":[]},{"level":3,"title":"3.3 nsis（桌面应用程序安装过程）配置一览","slug":"_3-3-nsis-桌面应用程序安装过程-配置一览","link":"#_3-3-nsis-桌面应用程序安装过程-配置一览","children":[]},{"level":3,"title":"3.4 执行打包，安装应用","slug":"_3-4-执行打包-安装应用","link":"#_3-4-执行打包-安装应用","children":[]},{"level":3,"title":"3.5 主进程接收渲染进程消息时，在控制台输出乱码","slug":"_3-5-主进程接收渲染进程消息时-在控制台输出乱码","link":"#_3-5-主进程接收渲染进程消息时-在控制台输出乱码","children":[]}]},{"level":2,"title":"4.实现 渲染进程 / 主进程 通信（IPC）","slug":"_4-实现-渲染进程-主进程-通信-ipc","link":"#_4-实现-渲染进程-主进程-通信-ipc","children":[{"level":3,"title":"4.1 让 Vite 支持 ipcRenderer","slug":"_4-1-让-vite-支持-ipcrenderer","link":"#_4-1-让-vite-支持-ipcrenderer","children":[]}]},{"level":2,"title":"4.2 渲染进程发送消息，主进程接收消息","slug":"_4-2-渲染进程发送消息-主进程接收消息","link":"#_4-2-渲染进程发送消息-主进程接收消息","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":6.64,"words":1993},"filePathRelative":"front_end/other/electron/10.md","localizedDate":"2023年1月30日","excerpt":"<h1> 10 【Vite + Vue3 + Electron 创建打包桌面程序】</h1>\\n<h2> 1.使用 Vite 构建 Electron 项目</h2>\\n<h3> 1.1 创建 Vite 应用，安装 Electron 依赖</h3>\\n<p>创建一个 Vite 项目</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">npm</span> init vite@latest\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

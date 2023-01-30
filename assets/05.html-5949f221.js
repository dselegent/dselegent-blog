const e=JSON.parse('{"key":"v-7eb6a686","path":"/back_end/linux/05.html","title":"05【实操篇-文件目录类命令】","lang":"zh-CN","frontmatter":{"description":"05【实操篇-文件目录类命令】 1.pwd 显示当前工作目录的绝对路径 pwd:print working directory 打印工作目录 到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由pwd命令提供的，它能够输出当前的工作目录。 pwd命令是非常非常常用的命令，尤其是在一些命令提示符设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.cf/back_end/linux/05.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"05【实操篇-文件目录类命令】"}],["meta",{"property":"og:description","content":"05【实操篇-文件目录类命令】 1.pwd 显示当前工作目录的绝对路径 pwd:print working directory 打印工作目录 到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由pwd命令提供的，它能够输出当前的工作目录。 pwd命令是非常非常常用的命令，尤其是在一些命令提示符设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05【实操篇-文件目录类命令】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.pwd 显示当前工作目录的绝对路径","slug":"_1-pwd-显示当前工作目录的绝对路径","link":"#_1-pwd-显示当前工作目录的绝对路径","children":[]},{"level":2,"title":"2.ls 列出目录的内容","slug":"_2-ls-列出目录的内容","link":"#_2-ls-列出目录的内容","children":[]},{"level":2,"title":"3.cd 切换目录","slug":"_3-cd-切换目录","link":"#_3-cd-切换目录","children":[]},{"level":2,"title":"4.mkdir 创建一个新的目录","slug":"_4-mkdir-创建一个新的目录","link":"#_4-mkdir-创建一个新的目录","children":[]},{"level":2,"title":"5.rmdir 删除空的目录","slug":"_5-rmdir-删除空的目录","link":"#_5-rmdir-删除空的目录","children":[]},{"level":2,"title":"6.touch 创建空文件","slug":"_6-touch-创建空文件","link":"#_6-touch-创建空文件","children":[]},{"level":2,"title":"7.cp 复制文件或目录","slug":"_7-cp-复制文件或目录","link":"#_7-cp-复制文件或目录","children":[]},{"level":2,"title":"8.rm 删除文件或目录","slug":"_8-rm-删除文件或目录","link":"#_8-rm-删除文件或目录","children":[]},{"level":2,"title":"9.mv 移动文件与目录或重命名","slug":"_9-mv-移动文件与目录或重命名","link":"#_9-mv-移动文件与目录或重命名","children":[]},{"level":2,"title":"10.cat 查看文件内容","slug":"_10-cat-查看文件内容","link":"#_10-cat-查看文件内容","children":[]},{"level":2,"title":"11.less 分屏显示文件内容","slug":"_11-less-分屏显示文件内容","link":"#_11-less-分屏显示文件内容","children":[]},{"level":2,"title":"12.echo 输出内容到控制台","slug":"_12-echo-输出内容到控制台","link":"#_12-echo-输出内容到控制台","children":[]},{"level":2,"title":"13.head 显示文件头部内容","slug":"_13-head-显示文件头部内容","link":"#_13-head-显示文件头部内容","children":[]},{"level":2,"title":"14.tail 输出文件尾部内容","slug":"_14-tail-输出文件尾部内容","link":"#_14-tail-输出文件尾部内容","children":[]},{"level":2,"title":"15.> 输出重定向和 >> 追加","slug":"_15-输出重定向和-追加","link":"#_15-输出重定向和-追加","children":[]},{"level":2,"title":"16.history 查看已经执行过历史命令","slug":"_16-history-查看已经执行过历史命令","link":"#_16-history-查看已经执行过历史命令","children":[]},{"level":2,"title":"17.ln软链接","slug":"_17-ln软链接","link":"#_17-ln软链接","children":[]},{"level":2,"title":"18.总结","slug":"_18-总结","link":"#_18-总结","children":[{"level":3,"title":"18.1 文件剪贴删除复制重名等","slug":"_18-1-文件剪贴删除复制重名等","link":"#_18-1-文件剪贴删除复制重名等","children":[]},{"level":3,"title":"18.2 文件查看","slug":"_18-2-文件查看","link":"#_18-2-文件查看","children":[]}]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":20.99,"words":6296},"filePathRelative":"back_end/linux/05.md","localizedDate":"2023年1月30日","excerpt":"<h1> 05【实操篇-文件目录类命令】</h1>\\n<h2> 1.pwd 显示当前工作目录的绝对路径</h2>\\n<blockquote>\\n<p>pwd:print working directory 打印工作目录</p>\\n</blockquote>\\n<p>到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由<code>pwd</code>命令提供的，它能够输出当前的工作目录。</p>\\n<p><code>pwd</code>命令是非常非常常用的命令，尤其是在一些<code>命令提示符</code>设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。</p>","autoDesc":true}');export{e as data};

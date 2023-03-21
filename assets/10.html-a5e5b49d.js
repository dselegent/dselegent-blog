const e=JSON.parse('{"key":"v-a9d6b2a8","path":"/back_end/linux/10.html","title":"10 【实操篇-进程管理类】","lang":"zh-CN","frontmatter":{"description":"10 【实操篇-进程管理类】 无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用\\"任务管理器\\"来进行进程管理的。 通常，使用\\"任务管理器\\"主要有 3 个目的： 利用\\"应用程序\\"和\\"进程\\"标签来査看系统中到底运行了哪些程序和进程； 利用\\"性能\\"和\\"用户\\"标签来判断服务器的健康状态； 在\\"应用程序\\"和\\"进程\\"标签中强制中止任务和进程； Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/linux/10.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"10 【实操篇-进程管理类】"}],["meta",{"property":"og:description","content":"10 【实操篇-进程管理类】 无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用\\"任务管理器\\"来进行进程管理的。 通常，使用\\"任务管理器\\"主要有 3 个目的： 利用\\"应用程序\\"和\\"进程\\"标签来査看系统中到底运行了哪些程序和进程； 利用\\"性能\\"和\\"用户\\"标签来判断服务器的健康状态； 在\\"应用程序\\"和\\"进程\\"标签中强制中止任务和进程； Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【实操篇-进程管理类】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.什么是进程和程序","slug":"_1-什么是进程和程序","link":"#_1-什么是进程和程序","children":[]},{"level":2,"title":"2.进程管理的作用","slug":"_2-进程管理的作用","link":"#_2-进程管理的作用","children":[]},{"level":2,"title":"3.ps 查看当前系统进程状态","slug":"_3-ps-查看当前系统进程状态","link":"#_3-ps-查看当前系统进程状态","children":[]},{"level":2,"title":"4.kill 终止进程","slug":"_4-kill-终止进程","link":"#_4-kill-终止进程","children":[{"level":3,"title":"4.1 kill 终止进程","slug":"_4-1-kill-终止进程","link":"#_4-1-kill-终止进程","children":[]},{"level":3,"title":"4.2  killall 终止特定的一类进程","slug":"_4-2-killall-终止特定的一类进程","link":"#_4-2-killall-终止特定的一类进程","children":[]}]},{"level":2,"title":"5.pstree 查看进程树","slug":"_5-pstree-查看进程树","link":"#_5-pstree-查看进程树","children":[]},{"level":2,"title":"6.top 实时监控系统进程状态","slug":"_6-top-实时监控系统进程状态","link":"#_6-top-实时监控系统进程状态","children":[]},{"level":2,"title":"7.netstat 显示网络状态和端口占用信息","slug":"_7-netstat-显示网络状态和端口占用信息","link":"#_7-netstat-显示网络状态和端口占用信息","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":23.52,"words":7056},"filePathRelative":"back_end/linux/10.md","localizedDate":"2023年1月30日","excerpt":"<h1> 10 【实操篇-进程管理类】</h1>\\n<p>无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用\\"任务管理器\\"来进行进程管理的。</p>\\n<p>通常，使用\\"任务管理器\\"主要有 3 个目的：</p>\\n<ol>\\n<li>利用\\"应用程序\\"和\\"进程\\"标签来査看系统中到底运行了哪些程序和进程；</li>\\n<li>利用\\"性能\\"和\\"用户\\"标签来判断服务器的健康状态；</li>\\n<li>在\\"应用程序\\"和\\"进程\\"标签中强制中止任务和进程；</li>\\n</ol>\\n<p>Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。</p>","autoDesc":true}');export{e as data};

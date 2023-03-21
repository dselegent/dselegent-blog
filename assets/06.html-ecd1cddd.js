const e=JSON.parse('{"key":"v-287aaf08","path":"/front_end/other/electron/06.html","title":"06 【electron对话框】","lang":"zh-CN","frontmatter":{"description":"06 【electron对话框】 显示用于打开和保存文件、警报等的本机系统对话框 1.选择文件 browserWindow 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。 dialog.showOpenDialog([browserWindow, ]options) browserWindow BrowserWindow (可选) 选项 对象 title string (可选) - 对话框窗口的标题 defaultPath string (可选) - 对话框的默认展示路径 buttonLabel string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。 filters [FileFilter] (可选) properties string[] (可选) - 包含对话框相关属性。 支持以下属性值: openFile - 允许选择文件 openDirectory - 允许选择文件夹 multiSelections-允许多选。 showHiddenFiles-显示对话框中的隐藏文件。 createDirectory macOS -允许你通过对话框的形式创建新的目录。 promptToCreate Windows-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。 noResolveAliases macOS-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。 treatPackageAsDirectory macOS -将包 (如 .app 文件夹) 视为目录而不是文件。 dontAddToRecent Windows - 不要将正在打开的项目添加到最近的文档列表中。 message string (可选) macOS -显示在输入框上方的消息。 securityScopedBookmarks boolean (可选) macOS mas - 在打包提交到Mac App Store时创建 security scoped bookmarks","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/other/electron/06.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"06 【electron对话框】"}],["meta",{"property":"og:description","content":"06 【electron对话框】 显示用于打开和保存文件、警报等的本机系统对话框 1.选择文件 browserWindow 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。 dialog.showOpenDialog([browserWindow, ]options) browserWindow BrowserWindow (可选) 选项 对象 title string (可选) - 对话框窗口的标题 defaultPath string (可选) - 对话框的默认展示路径 buttonLabel string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。 filters [FileFilter] (可选) properties string[] (可选) - 包含对话框相关属性。 支持以下属性值: openFile - 允许选择文件 openDirectory - 允许选择文件夹 multiSelections-允许多选。 showHiddenFiles-显示对话框中的隐藏文件。 createDirectory macOS -允许你通过对话框的形式创建新的目录。 promptToCreate Windows-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。 noResolveAliases macOS-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。 treatPackageAsDirectory macOS -将包 (如 .app 文件夹) 视为目录而不是文件。 dontAddToRecent Windows - 不要将正在打开的项目添加到最近的文档列表中。 message string (可选) macOS -显示在输入框上方的消息。 securityScopedBookmarks boolean (可选) macOS mas - 在打包提交到Mac App Store时创建 security scoped bookmarks"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06 【electron对话框】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.选择文件","slug":"_1-选择文件","link":"#_1-选择文件","children":[]},{"level":2,"title":"2.保存文件","slug":"_2-保存文件","link":"#_2-保存文件","children":[]},{"level":2,"title":"3.消息框","slug":"_3-消息框","link":"#_3-消息框","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":6.73,"words":2019},"filePathRelative":"front_end/other/electron/06.md","localizedDate":"2023年1月30日","excerpt":"<h1> 06 【electron对话框】</h1>\\n<blockquote>\\n<p>显示用于打开和保存文件、警报等的本机系统对话框</p>\\n</blockquote>\\n<h2> 1.选择文件</h2>\\n<p><code>browserWindow</code> 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。</p>\\n<p><code>dialog.showOpenDialog([browserWindow, ]options)</code></p>\\n<ul>\\n<li><code>browserWindow</code> <a href=\\"https://www.electronjs.org/zh/docs/latest/api/browser-window\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">BrowserWindow</a> (可选)</li>\\n<li><code>选项</code> 对象\\n<ul>\\n<li><code>title</code> string (可选) - 对话框窗口的标题</li>\\n<li><code>defaultPath</code> string (可选) - 对话框的默认展示路径</li>\\n<li><code>buttonLabel</code> string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。</li>\\n<li><code>filters</code> [FileFilter<a href=\\"https://www.electronjs.org/zh/docs/latest/api/structures/file-filter\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">]</a> (可选)</li>\\n<li><code>properties</code> string[] (可选) - 包含对话框相关属性。 支持以下属性值:\\n<ul>\\n<li><code>openFile</code> - 允许选择文件</li>\\n<li><code>openDirectory</code> - 允许选择文件夹</li>\\n<li><code>multiSelections</code>-允许多选。</li>\\n<li><code>showHiddenFiles</code>-显示对话框中的隐藏文件。</li>\\n<li><code>createDirectory</code> <em>macOS</em> -允许你通过对话框的形式创建新的目录。</li>\\n<li><code>promptToCreate</code> <em>Windows</em>-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。</li>\\n<li><code>noResolveAliases</code> <em>macOS</em>-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。</li>\\n<li><code>treatPackageAsDirectory</code> <em>macOS</em> -将包 (如 <code>.app </code>文件夹) 视为目录而不是文件。</li>\\n<li><code>dontAddToRecent</code> <em>Windows</em> - 不要将正在打开的项目添加到最近的文档列表中。</li>\\n</ul>\\n</li>\\n<li><code>message</code> string (可选) <em>macOS</em> -显示在输入框上方的消息。</li>\\n<li><code>securityScopedBookmarks</code> boolean (可选) <em>macOS</em> <em>mas</em> - 在打包提交到Mac App Store时创建 <a href=\\"https://developer.apple.com/library/content/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">security scoped bookmarks</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};

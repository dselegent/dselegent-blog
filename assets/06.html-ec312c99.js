const e=JSON.parse('{"key":"v-2ebb2e62","path":"/back_end/nodeJs/06.html","title":"06 【nodejs内置模块（中）】","lang":"zh-CN","frontmatter":{"description":"06 【nodejs内置模块（中）】 1.路劲处理模块 path 1.1 模块概览 在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。 将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。 1.2 获取路径/文件名/扩展名 获取路径：path.dirname(filepath) 获取文件名：path.basename(filepath) 获取扩展名：path.extname(filepath)","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/nodeJs/06.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"06 【nodejs内置模块（中）】"}],["meta",{"property":"og:description","content":"06 【nodejs内置模块（中）】 1.路劲处理模块 path 1.1 模块概览 在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。 将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。 1.2 获取路径/文件名/扩展名 获取路径：path.dirname(filepath) 获取文件名：path.basename(filepath) 获取扩展名：path.extname(filepath)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-30T06:57:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T06:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06 【nodejs内置模块（中）】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-30T06:57:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.路劲处理模块 path","slug":"_1-路劲处理模块-path","link":"#_1-路劲处理模块-path","children":[{"level":3,"title":"1.1 模块概览","slug":"_1-1-模块概览","link":"#_1-1-模块概览","children":[]},{"level":3,"title":"1.2 获取路径/文件名/扩展名","slug":"_1-2-获取路径-文件名-扩展名","link":"#_1-2-获取路径-文件名-扩展名","children":[]},{"level":3,"title":"1.3 路径组合","slug":"_1-3-路径组合","link":"#_1-3-路径组合","children":[]},{"level":3,"title":"1.4 几个常见路径","slug":"_1-4-几个常见路径","link":"#_1-4-几个常见路径","children":[]}]},{"level":2,"title":"2.本地文件操作模块 fs","slug":"_2-本地文件操作模块-fs","link":"#_2-本地文件操作模块-fs","children":[{"level":3,"title":"2.1 文件读取","slug":"_2-1-文件读取","link":"#_2-1-文件读取","children":[]},{"level":3,"title":"2.2 文件写入","slug":"_2-2-文件写入","link":"#_2-2-文件写入","children":[]},{"level":3,"title":"2.3 文件是否存在","slug":"_2-3-文件是否存在","link":"#_2-3-文件是否存在","children":[]},{"level":3,"title":"2.4 删除文件","slug":"_2-4-删除文件","link":"#_2-4-删除文件","children":[]},{"level":3,"title":"2.5 创建目录","slug":"_2-5-创建目录","link":"#_2-5-创建目录","children":[]},{"level":3,"title":"2.6 遍历目录","slug":"_2-6-遍历目录","link":"#_2-6-遍历目录","children":[]},{"level":3,"title":"2.7 读取目录","slug":"_2-7-读取目录","link":"#_2-7-读取目录","children":[]},{"level":3,"title":"2.8 删除目录","slug":"_2-8-删除目录","link":"#_2-8-删除目录","children":[]},{"level":3,"title":"2.9 删除整个目录","slug":"_2-9-删除整个目录","link":"#_2-9-删除整个目录","children":[]},{"level":3,"title":"2.10 文件重命名","slug":"_2-10-文件重命名","link":"#_2-10-文件重命名","children":[]},{"level":3,"title":"2.11 获取文件状态","slug":"_2-11-获取文件状态","link":"#_2-11-获取文件状态","children":[]},{"level":3,"title":"2.12 追加文件内容","slug":"_2-12-追加文件内容","link":"#_2-12-追加文件内容","children":[]}]},{"level":2,"title":"3.事件机制模块 events","slug":"_3-事件机制模块-events","link":"#_3-事件机制模块-events","children":[]}],"git":{"createdTime":1675061856000,"updatedTime":1675061856000,"contributors":[{"name":"dselegent","email":"1799661558@qq.com","commits":1}]},"readingTime":{"minutes":10.13,"words":3039},"filePathRelative":"back_end/nodeJs/06.md","localizedDate":"2023年1月30日","excerpt":"<h1> 06 【nodejs内置模块（中）】</h1>\\n<h2> 1.路劲处理模块 path</h2>\\n<h3> 1.1 模块概览</h3>\\n<p>在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。</p>\\n<p>将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。</p>\\n<h3> 1.2 获取路径/文件名/扩展名</h3>\\n<ul>\\n<li>获取路径：path.dirname(filepath)</li>\\n<li>获取文件名：path.basename(filepath)</li>\\n<li>获取扩展名：path.extname(filepath)</li>\\n</ul>","autoDesc":true}');export{e as data};

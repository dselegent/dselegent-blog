import{ab as r,G as n,H as l,E as t,S as d,N as i,ac as a,W as g}from"./framework-844b12a4.js";const s={},o=a(`<h1 id="_02-【基础篇-vim编辑器-网络配置-远程登录】" tabindex="-1"><a class="header-anchor" href="#_02-【基础篇-vim编辑器-网络配置-远程登录】" aria-hidden="true">#</a> 02 【基础篇-vim编辑器 网络配置 远程登录】</h1><h2 id="_1-vi和vim编辑器" tabindex="-1"><a class="header-anchor" href="#_1-vi和vim编辑器" aria-hidden="true">#</a> 1.vi和vim编辑器</h2><h3 id="_1-1-vi和vim的基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-vi和vim的基本介绍" aria-hidden="true">#</a> 1.1 vi和vim的基本介绍</h3><ul><li>所有Linux系统都会内置vi文本编辑器</li><li>vim是vi的升级版，可以主动以字体颜色分辨语法的正确性，代码补完和编译，错误跳转等功能。</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/a0196d78f8e7e4af8150fc199185b84c90fc644a.png" alt="image-20220815123840409" tabindex="0" loading="lazy"><figcaption>image-20220815123840409</figcaption></figure><h3 id="_1-2-vi和vim的三种模式" tabindex="-1"><a class="header-anchor" href="#_1-2-vi和vim的三种模式" aria-hidden="true">#</a> 1.2 vi和vim的三种模式</h3><p>基本上 vi/vim 共分为三种模式，分别是<strong>命令模式（Command mode）</strong>，<strong>输入模式（Insert mode）<strong>和</strong>底线命令模式（Last line mode）</strong>。 这三种模式的作用分别是：</p><h4 id="_1-2-1-正常模式" tabindex="-1"><a class="header-anchor" href="#_1-2-1-正常模式" aria-hidden="true">#</a> 1.2.1 正常模式</h4><ul><li><p>用户刚刚启动 vi/vim，便进入了正常模式。</p><p>此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。</p><p>以下是常用的几个命令：</p><ul><li><strong>i</strong> 切换到输入模式，以输入字符。</li><li><strong>x</strong> 删除当前光标所在处的字符。</li><li><strong>:</strong> 切换到底线命令模式，以在最底一行输入命令。</li></ul></li></ul><p>若想要编辑文本：启动Vim，进入了命令模式，按下i，切换到输入模式。</p><p>命令模式只有一些最基本的命令，因此仍要依靠底线命令模式输入更多命令。</p><h4 id="_1-2-2-插入-编辑模式" tabindex="-1"><a class="header-anchor" href="#_1-2-2-插入-编辑模式" aria-hidden="true">#</a> 1.2.2 插入/编辑模式</h4><ul><li><p>在命令模式下按下i就进入了输入模式。</p><p>在输入模式中，可以使用以下按键：</p><ul><li><strong>字符按键以及Shift组合</strong>，输入字符</li><li><strong>ENTER</strong>，回车键，换行</li><li><strong>BACK SPACE</strong>，退格键，删除光标前一个字符</li><li><strong>DEL</strong>，删除键，删除光标后一个字符</li><li><strong>方向键</strong>，在文本中移动光标</li><li><strong>HOME</strong>/<strong>END</strong>，移动光标到行首/行尾</li><li><strong>Page Up</strong>/<strong>Page Down</strong>，上/下翻页</li><li><strong>Insert</strong>，切换光标为输入/替换模式，光标将变成竖线/下划线</li><li><strong>ESC</strong>，退出输入模式，切换到命令模式</li></ul></li></ul><h4 id="_1-2-3-命令行模式" tabindex="-1"><a class="header-anchor" href="#_1-2-3-命令行模式" aria-hidden="true">#</a> 1.2.3 命令行模式</h4><ul><li><p>在命令模式下按下:（英文冒号）就进入了底线命令模式。</p><p>底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。</p><p>在底线命令模式中，基本的命令有（已经省略了冒号）：</p><ul><li>q 退出程序</li><li>w 保存文件</li></ul><p>按ESC键可随时退出底线命令模式。</p></li></ul><h4 id="_1-2-4-三种模式转换示意图" tabindex="-1"><a class="header-anchor" href="#_1-2-4-三种模式转换示意图" aria-hidden="true">#</a> 1.2.4 三种模式转换示意图</h4><figure><img src="https://i0.hdslb.com/bfs/album/be02de7ca3ef734ffc094598a07193a7ddc56b7a.jpg" alt="3.2vim模式转换.jpg" tabindex="0" loading="lazy"><figcaption>3.2vim模式转换.jpg</figcaption></figure><h3 id="_1-3-vi-vim-使用实例" tabindex="-1"><a class="header-anchor" href="#_1-3-vi-vim-使用实例" aria-hidden="true">#</a> 1.3 vi/vim 使用实例</h3><p><strong>使用 vi/vim 进入一般模式</strong></p><p>如果你想要使用 vi 来建立一个名为 runoob.txt 的文件时，你可以这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ vim runoob.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接输入 <strong>vi 文件名</strong> 就能够进入 vi 的一般模式了。请注意，记得 vi 后面一定要加文件名，不管该文件存在与否！</p><figure><img src="https://i0.hdslb.com/bfs/album/6e4689bed198cb377cd7341650f9927ae4002295.png" alt="image-20220815124239030" tabindex="0" loading="lazy"><figcaption>image-20220815124239030</figcaption></figure><p><strong>按下 i 进入输入模式(也称为编辑模式)，开始编辑文字</strong></p><p>在一般模式之中，只要按下 i, o, a 等字符就可以进入输入模式了！</p><p>在编辑模式当中，你可以发现在左下角状态栏中会出现 –INSERT- 的字样，那就是可以输入任意字符的提示。</p><p>这个时候，键盘上除了 <strong>Esc</strong> 这个按键之外，其他的按键都可以视作为一般的输入按钮了，所以你可以进行任何的编辑。</p><figure><img src="https://i0.hdslb.com/bfs/album/cdfc99dc399b6fc3b0e83a6280eb816535e64ed7.png" alt="image-20220815124308987" tabindex="0" loading="lazy"><figcaption>image-20220815124308987</figcaption></figure><p><strong>按下 ESC 按钮回到一般模式</strong></p><p>好了，假设我已经按照上面的样式给他编辑完毕了，那么应该要如何退出呢？是的！没错！就是给他按下 <strong>Esc</strong> 这个按钮即可！马上你就会发现画面左下角的 – INSERT – 不见了！</p><p><strong>在一般模式中按下 :wq 储存后离开 vi</strong></p><p>OK，我们要存档了，存盘并离开的指令很简单，输入 <strong>:wq</strong> 即可保存离开！</p><h3 id="_1-4-vim-按键说明" tabindex="-1"><a class="header-anchor" href="#_1-4-vim-按键说明" aria-hidden="true">#</a> 1.4 Vim 按键说明</h3><p>除了上面简易范例的 i, Esc, :wq 之外，其实 vim 还有非常多的按键可以使用。</p><h4 id="_1-4-1-一般模式的光标移动、搜索替换、复制粘贴" tabindex="-1"><a class="header-anchor" href="#_1-4-1-一般模式的光标移动、搜索替换、复制粘贴" aria-hidden="true">#</a> 1.4.1 一般模式的光标移动、搜索替换、复制粘贴</h4><table><thead><tr><th style="text-align:left;">移动光标的方法</th><th></th></tr></thead><tbody><tr><td style="text-align:left;"><mark>h 或 向左箭头键(←)</mark></td><td><mark>光标向左移动一个字符</mark></td></tr><tr><td style="text-align:left;"><mark>j 或 向下箭头键(↓)</mark></td><td><mark>光标向下移动一个字符</mark></td></tr><tr><td style="text-align:left;"><mark>k 或 向上箭头键(↑)</mark></td><td><mark>光标向上移动一个字符</mark></td></tr><tr><td style="text-align:left;"><mark>l 或 向右箭头键(→)</mark></td><td><mark>光标向右移动一个字符</mark></td></tr><tr><td style="text-align:left;">[Ctrl] + [f]</td><td>屏幕『向下』移动一页，相当于 [Page Down]按键 (常用)</td></tr><tr><td style="text-align:left;">[Ctrl] + [b]</td><td>屏幕『向上』移动一页，相当于 [Page Up] 按键 (常用)</td></tr><tr><td style="text-align:left;">[Ctrl] + [d]</td><td>屏幕『向下』移动半页</td></tr><tr><td style="text-align:left;">[Ctrl] + [u]</td><td>屏幕『向上』移动半页</td></tr><tr><td style="text-align:left;">+</td><td>光标移动到非空格符的下一行</td></tr><tr><td style="text-align:left;">-</td><td>光标移动到非空格符的上一行</td></tr><tr><td style="text-align:left;"><mark><code>n&lt;space&gt;</code></mark></td><td><mark>那个 n 表示『数字』，例如 20 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。例如 <code>20&lt;space&gt;</code> 则光标会向后面移动 20 个字符距离。</mark></td></tr><tr><td style="text-align:left;">0 或功能键[Home]</td><td>这是数字『 0 』：移动到这一行的最前面字符处 (常用)</td></tr><tr><td style="text-align:left;">$ 或功能键[End]</td><td>移动到这一行的最后面字符处(常用)</td></tr><tr><td style="text-align:left;">H</td><td>光标移动到这个屏幕的最上方那一行的第一个字符</td></tr><tr><td style="text-align:left;">M</td><td>光标移动到这个屏幕的中央那一行的第一个字符</td></tr><tr><td style="text-align:left;">L</td><td>光标移动到这个屏幕的最下方那一行的第一个字符</td></tr><tr><td style="text-align:left;">G</td><td>移动到这个档案的最后一行(常用)</td></tr><tr><td style="text-align:left;">nG</td><td>n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu)</td></tr><tr><td style="text-align:left;">gg</td><td>移动到这个档案的第一行，相当于 1G 啊！ (常用)</td></tr><tr><td style="text-align:left;"><mark><code>n&lt;Enter&gt;</code></mark></td><td><mark>n 为数字。光标向下移动 n 行(常用)</mark></td></tr></tbody></table><table><thead><tr><th style="text-align:left;">搜索</th><th></th></tr></thead><tbody><tr><td style="text-align:left;"><mark>/word</mark></td><td><mark>向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！ (常用)</mark></td></tr><tr><td style="text-align:left;">\`?word</td><td>向光标之上寻找一个字符串名称为 word 的字符串。</td></tr><tr><td style="text-align:left;">/^abc</td><td>查找以 abc 为行首的行</td></tr><tr><td style="text-align:left;">/abc$</td><td>查找以 abc 为行尾的行</td></tr><tr><td style="text-align:left;">n</td><td><mark>这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！</mark></td></tr><tr><td style="text-align:left;"><mark>N</mark></td><td><mark>这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。 例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 。</mark></td></tr></tbody></table><p>在查找过程中需要注意的是，要查找的字符串是严格区分大小写的，如查找 &quot;shenchao&quot; 和 &quot;ShenChao&quot; 会得到不同的结果。</p><p>如果想忽略大小写，则输入命令 &quot;:set ic&quot;；调整回来输入&quot;:set noic&quot;。</p><p>如果在字符串中出现特殊符号，则需要加上转义字符 &quot;&quot;。常见的特殊符号有 \\、*、?、$ 等。如果出现这些字符，例如，要查找字符串 &quot;10$&quot;，则需要在命令模式中输入 &quot;/10$&quot;。</p><table><thead><tr><th>替换文本</th><th>功能描述</th></tr></thead><tbody><tr><td>r</td><td>替换光标所在位置的字符</td></tr><tr><td>R</td><td>从光标所在位置开始替换字符，其输入内容会覆盖掉后面等长的文本内容，按“Esc”可以结束</td></tr><tr><td>😒/a1/a2/g</td><td>将当前光标所在行中的所有 a1 用 a2 替换</td></tr><tr><td>:n1,n2s/a1/a2/g</td><td>将文件中 n1 到 n2 行中所有 a1 都用 a2 替换</td></tr><tr><td>:g/a1/a2/g</td><td>将文件中所有的 a1 都用 a2 替换例如，要将某文件中所有的 &quot;root&quot; 替换为 &quot;liudehua&quot;，则有两种输入命令，分别为：</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>:1, <span class="token variable">$s</span>/root/liudehua/g
或
:%s/root/liudehua/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令是在编辑模式下操作的，表示的是从第一行到最后一行，即全文查找 &quot;root&quot;，然后替换成 &quot;liudehua&quot;。</p><p>如果刚才的命令变成 <code>:10,20 s/root/liudehua/g</code>，则只替换从第 10 行到第 20 行的 &quot;root&quot;。</p><table><thead><tr><th>复制粘贴</th><th>功能描述</th></tr></thead><tbody><tr><td>p</td><td>将剪贴板中的内容粘贴到光标后</td></tr><tr><td>P（大写）</td><td>将剪贴板中的内容粘贴到光标前</td></tr><tr><td>y</td><td>复制已选中的文本到剪贴板</td></tr><tr><td>yy</td><td>将光标所在行复制到剪贴板，此命令前可以加数字 n，可复制多行</td></tr><tr><td>yw</td><td>将光标位置的单词复制到剪贴板</td></tr></tbody></table><table><thead><tr><th>删除文本</th><th>功能描述</th></tr></thead><tbody><tr><td>x</td><td>删除光标所在位置的字符</td></tr><tr><td>dd</td><td>删除光标所在行</td></tr><tr><td>ndd</td><td>删除当前行（包括此行）后 n 行文本</td></tr><tr><td>dG</td><td>删除光标所在行一直到文件末尾的所有内容</td></tr><tr><td>D</td><td>删除光标位置到行尾的内容</td></tr><tr><td>:a1,a2d</td><td>函数从 a1 行到 a2 行的文本内容</td></tr></tbody></table><blockquote><p>注意，被删除的内容并没有真正删除，都放在了剪贴板中。将光标移动到指定位置处，按下 &quot;p&quot; 键，就可以将刚才删除的内容又粘贴到此处。</p></blockquote><h4 id="_1-4-2-一般模式切换到编辑模式" tabindex="-1"><a class="header-anchor" href="#_1-4-2-一般模式切换到编辑模式" aria-hidden="true">#</a> 1.4.2 一般模式切换到编辑模式</h4><table><thead><tr><th style="text-align:left;">进入输入或取代的编辑模式</th><th></th></tr></thead><tbody><tr><td style="text-align:left;"><mark>i, I</mark></td><td><mark>进入输入模式(Insert mode)： i 为『从目前光标所在处输入』， I 为『在目前所在行的第一个非空格符处开始输入』。 (常用)</mark></td></tr><tr><td style="text-align:left;">a, A</td><td>进入输入模式(Insert mode)： a 为『从目前光标所在的下一个字符处开始输入』， A 为『从光标所在行的最后一个字符处开始输入』。(常用)</td></tr><tr><td style="text-align:left;">o, O</td><td>进入输入模式(Insert mode)： 这是英文字母 o 的大小写。o 为在目前光标所在的下一行处输入新的一行； O 为在目前光标所在的上一行处输入新的一行！(常用)</td></tr><tr><td style="text-align:left;">r, R</td><td>进入取代模式(Replace mode)： r 只会取代光标所在的那一个字符一次；R会一直取代光标所在的文字，直到按下 ESC 为止；(常用)</td></tr><tr><td style="text-align:left;"><mark>[Esc]</mark></td><td><mark>退出编辑模式，回到一般模式中(常用)</mark></td></tr></tbody></table><h4 id="_1-4-3-一般模式切换到指令行模式" tabindex="-1"><a class="header-anchor" href="#_1-4-3-一般模式切换到指令行模式" aria-hidden="true">#</a> 1.4.3 一般模式切换到指令行模式</h4><table><thead><tr><th style="text-align:left;">指令行的储存、离开等指令</th><th></th></tr></thead><tbody><tr><td style="text-align:left;"><mark>:w</mark></td><td><mark>将编辑的数据写入硬盘档案中(常用)</mark></td></tr><tr><td style="text-align:left;"><mark>:w!</mark></td><td><mark>若文件属性为『只读』时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！</mark></td></tr><tr><td style="text-align:left;"><mark>:q</mark></td><td><mark>离开 vi (常用)</mark></td></tr><tr><td style="text-align:left;"><mark>:q!</mark></td><td><mark>若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。</mark></td></tr><tr><td style="text-align:left;">注意一下啊，那个惊叹号 (!) 在 vi 当中，常常具有『强制』的意思～</td><td></td></tr><tr><td style="text-align:left;"><mark>:wq</mark></td><td><mark>储存后离开，若为 :wq! 则为强制储存后离开 (常用)</mark></td></tr><tr><td style="text-align:left;"><mark>ZZ</mark></td><td><mark>这是大写的 Z 喔！如果修改过，保存当前文件，然后退出！效果等同于(保存并退出)</mark></td></tr><tr><td style="text-align:left;">ZQ</td><td>不保存，强制退出。效果等同于 <strong>:q!</strong>。</td></tr><tr><td style="text-align:left;">:w [filename]</td><td>将编辑的数据储存成另一个档案（类似另存新档）</td></tr><tr><td style="text-align:left;">:r [filename]</td><td>在编辑的数据中，读入另一个档案的数据。亦即将 『filename』 这个档案内容加到游标所在行后面</td></tr><tr><td style="text-align:left;">:n1,n2 w [filename]</td><td>将 n1 到 n2 的内容储存成 filename 这个档案。</td></tr><tr><td style="text-align:left;">:! command</td><td>暂时离开 vi 到指令行模式下执行 command 的显示结果！例如 『:! ls /home』即可在 vi 当中察看 /home 底下以 ls 输出的档案信息！</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">vim 环境的变更</th><th></th></tr></thead><tbody><tr><td style="text-align:left;"><mark>:set nu</mark></td><td><mark>显示行号，设定之后，会在每一行的前缀显示该行的行号</mark></td></tr><tr><td style="text-align:left;">:set nonu</td><td>与 set nu 相反，为取消行号！</td></tr></tbody></table><h3 id="_1-5-总结vim-的常见指令" tabindex="-1"><a class="header-anchor" href="#_1-5-总结vim-的常见指令" aria-hidden="true">#</a> 1.5 总结Vim 的常见指令</h3><p><strong>必须掌握</strong></p><ol><li>yy：复制光标当前一行</li><li>5yy：拷贝当前5行</li><li>p：箭头移动到目的行粘贴</li><li>u：撤销上一步</li><li>dd：删除当前行</li><li>5dd：删除当前行向下的5行</li><li>x：剪切一个字母，相当于del</li><li>X：剪切一个字母，相当于退格键</li><li>yw：复制一个词</li><li>dw：删除一个词</li><li>在文件中查找某个单词：命令行输入 /（查找内容），按n查找下一个</li><li>设置文件行号：set nu，取消文件行号：set nonu</li><li>编辑文件，正常模式下使用快捷键到达文档最末行：G，最首行：gg</li><li>编辑文件，光标移动到某行：shift+g <ul><li>显示行号：set nu</li><li>输入行号这个数</li><li>输入shift+g</li></ul></li><li>w：向前移动一个单词（光标停在单词首部）</li><li>b：向后移动一个单词 2b 向后移动2个单词</li></ol><p><strong>插入命令</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>i</td><td>在当前位置生前插入</td></tr><tr><td>I</td><td>在当前行首插入</td></tr><tr><td>a</td><td>在当前位置后插入</td></tr><tr><td>A</td><td>在当前行尾插入</td></tr><tr><td>o</td><td>在当前行之后插入一行</td></tr><tr><td>O</td><td>在当前行之前插入一行</td></tr></tbody></table><p><strong>游标移动</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>gg</td><td>移动到文件头。 = [[</td></tr><tr><td>G（shift + g）</td><td>移动到文件尾。 = ]]</td></tr><tr><td>行數 → G</td><td>移動到第 n 行</td></tr><tr><td>冒号+行号，回车</td><td>比如跳到240行就是 :240回车</td></tr><tr><td>h</td><td>左移一个字符</td></tr><tr><td>l</td><td>右移一个字符，这个命令很少用，一般用w代替。</td></tr><tr><td>k</td><td>上移一个字符</td></tr><tr><td>j</td><td>下移一个字符</td></tr><tr><td>w</td><td>向前移动一个单词（光标停在单词首部）</td></tr><tr><td>b</td><td>向后移动一个单词 2b 向后移动2个单词</td></tr><tr><td>e</td><td>同w，只不过是光标停在单词尾部</td></tr><tr><td>ge</td><td>同b，光标停在单词尾部。</td></tr><tr><td>^</td><td>移动到本行第一个非空白字符上。</td></tr><tr><td>0</td><td>移动到本行第一个字符上</td></tr><tr><td>HOME</td><td>移动到本行第一个字符。同0健。</td></tr><tr><td>$</td><td>移动到行尾 3$ 移动到下面3行的行尾</td></tr><tr><td>f（find）</td><td>fx将找到光标后第一个为x的字符，3fd将找到第三个为d的字符。</td></tr><tr><td>F</td><td>同f，反向查找</td></tr></tbody></table><p><strong>撤销和重做</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>u</td><td>撤销（Undo）</td></tr><tr><td>U</td><td>撤销对整行的操作</td></tr><tr><td>Ctrl + r</td><td>重做（Redo），即撤销的撤销。</td></tr></tbody></table><p><strong>删除命令</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>x</td><td>删除当前字符</td></tr><tr><td>3x</td><td>删除当前光标开始向后三个字符</td></tr><tr><td>X</td><td>删除当前字符的前一个字符。X=dh</td></tr><tr><td>dl</td><td>删除当前字符， dl=x</td></tr><tr><td>dh</td><td>删除前一个字符</td></tr><tr><td>dd</td><td>删除当前行</td></tr><tr><td>dj</td><td>删除上一行</td></tr><tr><td>dk</td><td>删除下一行</td></tr><tr><td>10d</td><td>删除当前行开始的10行。</td></tr><tr><td>D</td><td>删除当前字符至行尾。D=d$</td></tr><tr><td>d$</td><td>删除当前字符之后的所有字符（本行）</td></tr><tr><td>kdgg</td><td>删除当前行之前所有行（不包括当前行）</td></tr><tr><td>jdG（jd shift + g）</td><td>删除当前行之后所有行（不包括当前行）</td></tr><tr><td>:1,10d</td><td>删除1-10行</td></tr><tr><td>:11,$d</td><td>删除11行及以后所有的行</td></tr><tr><td>:1,$d</td><td>删除所有行</td></tr><tr><td>J(shift + j)</td><td>删除两行之间的空行，实际上是合并两行。</td></tr></tbody></table><p><strong>拷贝，剪贴和粘贴</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>yy</td><td>拷贝当前行</td></tr><tr><td>nyy</td><td>拷贝当前后开始的n行，比如2yy拷贝当前行及其下一行。</td></tr><tr><td>p</td><td>在当前光标后粘贴,如果之前使用了yy命令来复制一行，那么就在当前行的下一行粘贴。</td></tr><tr><td>shift+p</td><td>在当前行前粘贴</td></tr><tr><td>:1,10 co 20</td><td>将1-10行插入到第20行之后。</td></tr><tr><td>:1,$ co $</td><td>将整个文件复制一份并添加到文件尾部。</td></tr><tr><td>ddp</td><td>交换当前行和其下一行</td></tr><tr><td>xp</td><td>交换当前字符和其后一个字符</td></tr><tr><td>ndd</td><td>剪切当前行之后的n行。利用p命令可以对剪切的内容进行粘贴</td></tr><tr><td>:1,10d</td><td>将1-10行剪切。利用p命令可将剪切后的内容进行粘贴。</td></tr><tr><td>:1, 10 m 20</td><td>将第1-10行移动到第20行之后。</td></tr></tbody></table><p>正常模式下按v（逐字）或V（逐行）进入可视模式，然后用jklh命令移动即可选择某些行或字符，再按y即可复制</p><p><strong>退出命令</strong></p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>:wq</td><td>保存并退出</td></tr><tr><td>ZZ</td><td>保存并退出</td></tr><tr><td>:q!</td><td>强制退出并忽略所有更改</td></tr><tr><td>:e!</td><td>放弃所有修改，并打开原来文件。</td></tr><tr><td>:q</td><td>未修改直接退出</td></tr></tbody></table><h2 id="_2-网络配置" tabindex="-1"><a class="header-anchor" href="#_2-网络配置" aria-hidden="true">#</a> 2.网络配置</h2><h3 id="_2-1-三种网络模式详解" tabindex="-1"><a class="header-anchor" href="#_2-1-三种网络模式详解" aria-hidden="true">#</a> 2.1 三种网络模式详解</h3><p>vmware为我们提供了三种网络工作模式，它们分别是：<strong>Bridged（桥接模式）</strong>、<strong>NAT（网络地址转换模式）</strong>、<strong>Host-Only（仅主机模式）</strong>。</p><p>打开vmware虚拟机，我们可以在选项栏的“编辑”下的“虚拟网络编辑器”中看到VMnet0（桥接模式）、VMnet1（仅主机模式）、VMnet8（NAT模式），那么这些都是有什么作用呢？其实，我们现在看到的VMnet0表示的是用于桥接模式下的虚拟交换机；VMnet1表示的是用于仅主机模式下的虚拟交换机；VMnet8表示的是用于NAT模式下的虚拟交换机。</p><figure><img src="https://i0.hdslb.com/bfs/album/ee24cee5cdad25bb2a992ba665553b822473b126.png" alt="image-20220815195704711" tabindex="0" loading="lazy"><figcaption>image-20220815195704711</figcaption></figure><p>同时，在主机上对应的有VMware Network Adapter VMnet1和VMware Network Adapter VMnet8两块虚拟网卡，它们分别作用于仅主机模式与NAT模式下。在“网络连接”中我们可以看到这两块虚拟网卡，如果将这两块卸载了，可以在vmware的“编辑”下的“虚拟网络编辑器”中点击“还原默认设置”，可重新将虚拟网卡还原。</p><figure><img src="https://i0.hdslb.com/bfs/album/3244dc5ef61faac2bfee5a5940d7a4883718fcf6.png" alt="image-20220815195743297" tabindex="0" loading="lazy"><figcaption>image-20220815195743297</figcaption></figure><p>小伙伴看到这里，肯定有疑问，为什么在真机上没有VMware Network Adapter VMnet0虚拟网卡呢？那么接下来，我们就一起来看一下这是为什么。</p><h4 id="_2-1-1-bridged-桥接模式" tabindex="-1"><a class="header-anchor" href="#_2-1-1-bridged-桥接模式" aria-hidden="true">#</a> 2.1.1 Bridged（桥接模式）</h4><p>什么是桥接模式？桥接模式就是将主机网卡与虚拟机虚拟的网卡利用虚拟网桥进行通信。在桥接的作用下，类似于把物理主机虚拟为一个交换机，所有桥接设置的虚拟机连接到这个交换机的一个接口上，物理主机也同样插在这个交换机当中，所以所有桥接下的网卡与网卡都是交换模式的，相互可以访问而不干扰。在桥接模式下，虚拟机ip地址需要与主机在同一个网段，如果需要联网，则网关DNS需要与主机网卡一致。其网络结构如下图所示：</p><figure><img src="https://i0.hdslb.com/bfs/album/da53965814800fc4c6ed509d342a98c92ebaf73f.png" alt="image-20220815195824917" tabindex="0" loading="lazy"><figcaption>image-20220815195824917</figcaption></figure><p>点击“网络适配器”，选择“桥接模式”，然后“确定”</p><figure><img src="https://i0.hdslb.com/bfs/album/bbf1feb660af180fbc6758834b276e4a757c2a16.png" alt="image-20220815195911118" tabindex="0" loading="lazy"><figcaption>image-20220815195911118</figcaption></figure><p>在进入系统之前，我们先确认一下主机的ip地址、网关、DNS等信息。</p><figure><img src="https://i0.hdslb.com/bfs/album/12ea5f96f660c11d2949098d8c7f7af7af0e281e.png" alt="image-20220815195920630" tabindex="0" loading="lazy"><figcaption>image-20220815195920630</figcaption></figure><p>然后，进入系统编辑网卡配置文件，在终端输入命令<code>vim /etc/sysconfig/network-scripts/ifcfg-eth0</code></p><p>添加内容如下：</p><figure><img src="https://i0.hdslb.com/bfs/album/feecd44f3a8c421c6340e1bc9b07467b36a5be64.png" alt="image-20220815200013770" tabindex="0" loading="lazy"><figcaption>image-20220815200013770</figcaption></figure><p>编辑完成，保存退出，然后重启虚拟机网卡，使用ping命令ping外网ip，测试能否联网。</p>`,87),c=t("p",null,"基本语法: ping [主机地址]",-1),p={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},b=a(`<figure><img src="https://i0.hdslb.com/bfs/album/f82d7bd3be7abb5b18cba1d35570023ba9e259e4.png" alt="image-20220815200027788" tabindex="0" loading="lazy"><figcaption>image-20220815200027788</figcaption></figure><p>能ping通外网ip，证明桥接模式设置成功。</p><p>能ping通外网ip，证明桥接模式设置成功。</p><p>那主机与虚拟机之间的通信是否正常呢？我们就用远程工具来测试一下。</p><figure><img src="https://i0.hdslb.com/bfs/album/3a720a028a54a7d98aaff5f55799aef20d59b671.png" alt="image-20220815200102291" tabindex="0" loading="lazy"><figcaption>image-20220815200102291</figcaption></figure><p>主机与虚拟机通信正常。</p><p>这就是桥接模式的设置步骤，相信大家应该学会了如何去设置桥接模式了。桥接模式配置简单，但如果你的网络环境是ip资源很缺少或对ip管理比较严格的话，那桥接模式就不太适用了。这时，我们就来认识vmware的另一种网络模式：NAT模式。</p><h4 id="_2-1-2-nat-地址转换模式" tabindex="-1"><a class="header-anchor" href="#_2-1-2-nat-地址转换模式" aria-hidden="true">#</a> 2.1.2 NAT（地址转换模式）</h4><p>如果你的网络ip资源紧缺，但是你又希望你的虚拟机能够联网，这时候NAT模式是最好的选择。NAT模式借助虚拟NAT设备和虚拟DHCP服务器，使得虚拟机可以联网。其网络结构如下图所示：</p><figure><img src="https://i0.hdslb.com/bfs/album/e9688aa206ae1003042fe5256a25497b91c05c05.png" alt="image-20220815200210830" tabindex="0" loading="lazy"><figcaption>image-20220815200210830</figcaption></figure><p>在NAT模式中，主机网卡直接与虚拟NAT设备相连，然后虚拟NAT设备与虚拟DHCP服务器一起连接在虚拟交换机VMnet8上，这样就实现了虚拟机联网。那么我们会觉得很奇怪，为什么需要虚拟网卡VMware Network Adapter VMnet8呢？原来我们的VMware Network Adapter VMnet8虚拟网卡主要是为了实现主机与虚拟机之间的通信。在之后的设置步骤中，我们可以加以验证。</p><p>首先，设置虚拟机中NAT模式的选项，打开vmware，点击“编辑”下的“虚拟网络编辑器”，设置NAT参数及DHCP参数。</p><figure><img src="https://i0.hdslb.com/bfs/album/d62e2bb3d5a15dc2dbca6d594b875cd1b62bd5e0.png" alt="image-20220815200228608" tabindex="0" loading="lazy"><figcaption>image-20220815200228608</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/19e5972a9d9e6f888cf7f7997add7ecb5c989d22.png" alt="image-20220815200238861" tabindex="0" loading="lazy"><figcaption>image-20220815200238861</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/a9468789e50fe61d80e12ee4a1cb73855533c1fc.png" alt="image-20220815200259125" tabindex="0" loading="lazy"><figcaption>image-20220815200259125</figcaption></figure><p>将虚拟机的网络连接模式修改成NAT模式。</p><p>点击“网络适配器”，选择“NAT模式”</p><figure><img src="https://i0.hdslb.com/bfs/album/980fb0a5071db9d1bf88cb672f7cd7d414423d98.png" alt="image-20220815200327743" tabindex="0" loading="lazy"><figcaption>image-20220815200327743</figcaption></figure><p>然后开机启动系统，编辑网卡配置文件，在终端输入命令<code>vim /etc/sysconfig/network-scripts/ifcfg-eth0</code></p><p>具体配置如下：</p><figure><img src="https://i0.hdslb.com/bfs/album/72bd28d00d8b752da7078c509706c890d3d6d859.png" alt="image-20220815200401415" tabindex="0" loading="lazy"><figcaption>image-20220815200401415</figcaption></figure><p>编辑完成，保存退出，然后重启虚拟机网卡，动态获取ip地址，使用ping命令ping外网ip，测试能否联网。</p><figure><img src="https://i0.hdslb.com/bfs/album/5ae0c3d927dc8b5ad61e6ae06483f728f295c7a9.png" alt="image-20220815200410949" tabindex="0" loading="lazy"><figcaption>image-20220815200410949</figcaption></figure><p>之前，我们说过VMware Network Adapter VMnet8虚拟网卡的作用，那我们现在就来测试一下。</p><figure><img src="https://i0.hdslb.com/bfs/album/b9b4a398da088d5ae0f99344ab197a184b9e4b97.png" alt="image-20220815200426008" tabindex="0" loading="lazy"><figcaption>image-20220815200426008</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/c4d4d256a74d094167a1605c5c506950b864920e.png" alt="image-20220815200435870" tabindex="0" loading="lazy"><figcaption>image-20220815200435870</figcaption></figure><p>如此看来，虚拟机能联通外网，确实不是通过VMware Network Adapter VMnet8虚拟网卡，那么为什么要有这块虚拟网卡呢？</p><p>之前我们就说VMware Network Adapter VMnet8的作用是主机与虚拟机之间的通信，接下来，我们就用远程连接工具来测试一下。</p><figure><img src="https://i0.hdslb.com/bfs/album/f9c0ef7cd879419b3f4147040ee600336aa4d59d.png" alt="image-20220815200451232" tabindex="0" loading="lazy"><figcaption>image-20220815200451232</figcaption></figure><p>然后，将VMware Network Adapter VMnet8启用之后，发现远程工具可以连接上虚拟机了。</p><p>那么，这就是NAT模式，利用虚拟的NAT设备以及虚拟DHCP服务器来使虚拟机连接外网，而VMware Network Adapter VMnet8虚拟网卡是用来与虚拟机通信的。</p><h4 id="_2-1-3-host-only-仅主机模式" tabindex="-1"><a class="header-anchor" href="#_2-1-3-host-only-仅主机模式" aria-hidden="true">#</a> 2.1.3 Host-Only（仅主机模式）</h4><p>Host-Only模式其实就是NAT模式去除了虚拟NAT设备，然后使用VMware Network Adapter VMnet1虚拟网卡连接VMnet1虚拟交换机来与虚拟机通信的，Host-Only模式将虚拟机与外网隔开，使得虚拟机成为一个独立的系统，只与主机相互通讯。其网络结构如下图所示：</p><figure><img src="https://i0.hdslb.com/bfs/album/9112bf9968122839aabf8048a0ea86cca6cb333f.png" alt="image-20220815200523595" tabindex="0" loading="lazy"><figcaption>image-20220815200523595</figcaption></figure><p>通过上图，我们可以发现，如果要使得虚拟机能联网，我们可以将主机网卡共享给VMware Network Adapter VMnet1网卡，从而达到虚拟机联网的目的。接下来，我们就来测试一下。</p><p>首先设置“虚拟网络编辑器”，可以设置DHCP的起始范围。</p><figure><img src="https://i0.hdslb.com/bfs/album/fbee609ea8624fb198bf20ff154b959e92303bd2.png" alt="image-20220815200545448" tabindex="0" loading="lazy"><figcaption>image-20220815200545448</figcaption></figure><p>设置虚拟机为Host-Only模式。</p><figure><img src="https://i0.hdslb.com/bfs/album/6e25cf1fcebd6c40f3b0fa5938b1df63caccaf43.png" alt="image-20220815200602718" tabindex="0" loading="lazy"><figcaption>image-20220815200602718</figcaption></figure><p>开机启动系统，然后设置网卡文件。</p><figure><img src="https://i0.hdslb.com/bfs/album/c64bde49346573bd5fc768b9196f0d03d11c75b5.png" alt="image-20220815200612317" tabindex="0" loading="lazy"><figcaption>image-20220815200612317</figcaption></figure><p>保存退出，然后重启网卡，利用远程工具测试能否与主机通信。</p><figure><img src="https://i0.hdslb.com/bfs/album/5be5c99244429c5375411d5165ba9ae583d3cc41.png" alt="image-20220815200622408" tabindex="0" loading="lazy"><figcaption>image-20220815200622408</figcaption></figure><p>主机与虚拟机之间可以通信，现在设置虚拟机联通外网。</p><figure><img src="https://i0.hdslb.com/bfs/album/bfd966fe4c9a9904684a1c02155a864590fe2df9.png" alt="image-20220815200634892" tabindex="0" loading="lazy"><figcaption>image-20220815200634892</figcaption></figure><p>我们可以看到上图有一个提示，强制将VMware Network Adapter VMnet1的ip设置成192.168.137.1，那么接下来，我们就要将虚拟机的DHCP的子网和起始地址进行修改，点击“虚拟网络编辑器”</p><figure><img src="https://i0.hdslb.com/bfs/album/26af0bbe03bc68d3fc8e56d25bedfe3b36b90820.png" alt="image-20220815200653975" tabindex="0" loading="lazy"><figcaption>image-20220815200653975</figcaption></figure><p>重新配置网卡，将VMware Network Adapter VMnet1虚拟网卡作为虚拟机的路由。</p><figure><img src="https://i0.hdslb.com/bfs/album/4a2332b3944ce97b635ee3c4d71d43bd1e1cc191.png" alt="image-20220815200721717" tabindex="0" loading="lazy"><figcaption>image-20220815200721717</figcaption></figure><p>重启网卡，然后通过 远程工具测试能否联通外网以及与主机通信。</p><figure><img src="https://i0.hdslb.com/bfs/album/511329168b2bac89e79940628e20a0b5f48db59f.png" alt="image-20220815200752317" tabindex="0" loading="lazy"><figcaption>image-20220815200752317</figcaption></figure><p>测试结果证明可以使得虚拟机连接外网。</p><h3 id="_2-2-查看网络-ip-和-网关" tabindex="-1"><a class="header-anchor" href="#_2-2-查看网络-ip-和-网关" aria-hidden="true">#</a> 2.2 查看网络 IP 和 网关</h3><p>1）查看虚拟网络编辑器</p><figure><img src="https://i0.hdslb.com/bfs/album/29862c5ca010e080847f2d3a5903178d888487c6.png" alt="image-20220815201209483" tabindex="0" loading="lazy"><figcaption>image-20220815201209483</figcaption></figure><p>2）修改虚拟网卡 Ip</p><figure><img src="https://i0.hdslb.com/bfs/album/4ef964e9fa39db2a76e44431fa75098ede6b9423.png" alt="image-20220815204412976" tabindex="0" loading="lazy"><figcaption>image-20220815204412976</figcaption></figure><p>3）查看网关</p><figure><img src="https://i0.hdslb.com/bfs/album/20163e57c1c6b82448af52cc1ff6c536f4a60052.png" alt="image-20220815204439960" tabindex="0" loading="lazy"><figcaption>image-20220815204439960</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/ab2b830cd96bb69e9f86fef52dec08e9e1654fba.png" alt="image-20220815204455124" tabindex="0" loading="lazy"><figcaption>image-20220815204455124</figcaption></figure><p>4）查看 windows 环境的中 VMnet8 网络配置</p><figure><img src="https://i0.hdslb.com/bfs/album/a3a76ec9a2880387198da9a307fdd4845abd1948.png" alt="image-20220815204605529" tabindex="0" loading="lazy"><figcaption>image-20220815204605529</figcaption></figure><h3 id="_2-3-配置网络-ip-地址" tabindex="-1"><a class="header-anchor" href="#_2-3-配置网络-ip-地址" aria-hidden="true">#</a> 2.3 配置网络 ip 地址</h3><h4 id="_2-3-1-自动抓取" tabindex="-1"><a class="header-anchor" href="#_2-3-1-自动抓取" aria-hidden="true">#</a> 2.3.1 自动抓取</h4><figure><img src="https://i0.hdslb.com/bfs/album/1dd45ae232ec2f3bc35b8cc2fda3ef8e708aa8c9.png" alt="image-20220815204635593" tabindex="0" loading="lazy"><figcaption>image-20220815204635593</figcaption></figure><p><strong><code>缺点：</code></strong> 每次自动获取的ip地址可能不一样，不适用于做服务器</p><h4 id="_2-3-2-指定ip地址" tabindex="-1"><a class="header-anchor" href="#_2-3-2-指定ip地址" aria-hidden="true">#</a> 2.3.2 指定ip地址</h4><p><code>ifconfig</code> 查看当前网络配置</p><blockquote><p>BOOTPROTO=&quot;static&quot; #IP 的配置方法[none|static|bootp|dhcp]（引导 时不 使用协议|静态分配 IP|BOOTP 协议|DHCP 协议）</p><p>ONBOOT=&quot;yes&quot; #系统启动的时候网络接口是否有效（yes/no）</p><p>#IP 地址 IPADDR=192.168.2.100 #网段必须符合要求，后面的主机地址自己设置 #网关 GATEWAY=192.168.2.2 #网关要和vm8虚拟交换机网关一样 #域名解析器 DNS1=192.168.2.2 #这个设置成和网关一样就行</p><p>子网掩码默认255.255.255.0</p></blockquote><p>直接修改配置文件来指定IP，并可以连接到外网，编辑：vim /etc/sysconfig/network-scripts/ifcfg-ens160</p><blockquote><p>centos7是ifcfg-ens33</p></blockquote><p><img src="https://i0.hdslb.com/bfs/album/a414c7903674fcdaf58a3f3e8ab13725f9a4b2ae.png" alt="image-20220815204909611" loading="lazy"><img src="https://i0.hdslb.com/bfs/album/46b13351b7f4804b7dd921392fe0114aedd6685d.png" alt="image-20220815204852826" loading="lazy"></p><p>重启网络服务：service network restart</p><blockquote><p>centos8重启网卡的方法</p><p>1.重启⽹卡之前⼀定要重新载⼊⼀下配置⽂件，不然不能⽴即⽣效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli c reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.重启⽹卡（下⾯的三条命令都可以）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nmcli c up ens160
nmcli d reapply ens160
nmcli d connect ens160
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-3-修改-ip-地址后可能会遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-3-修改-ip-地址后可能会遇到的问题" aria-hidden="true">#</a> 2.3 修改 IP 地址后可能会遇到的问题</h3><p>（1）物理机能 ping 通虚拟机，但是虚拟机 ping 不通物理机,一般都是因为物理机的 防火墙问题,把防火墙关闭就行 （</p><p>（2）虚拟机能 Ping 通物理机,但是虚拟机 Ping 不通外网,一般都是因为 DNS 的设置有 问题</p>`,77),f={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>（4）如果以上全部设置完还是不行，需要关闭 NetworkManager 服务</p><blockquote><ul><li>systemctl stop NetworkManager 关闭</li><li>systemctl disable NetworkManager 禁用</li></ul></blockquote><p>（5）如果检查发现 systemctl status network 有问题 需要检查 ifcfg-ens160</p><h3 id="_2-4-配置主机名" tabindex="-1"><a class="header-anchor" href="#_2-4-配置主机名" aria-hidden="true">#</a> 2.4 配置主机名</h3><p><strong>修改主机名称</strong></p><p><code>hostname</code> （功能描述：查看当前服务器的主机名称）</p><p>如果感觉此主机名不合适，我们可以进行修改。通过编辑<code>vim /etc/hostname</code> 文文件</p><p>修改完成后重启生效。</p><blockquote><p>如果想立即生效可以通过<code>hostnamectl set-hostname dselegent-study【要修改的主机名】</code>这个命令，然后重启终端就可以看到效果了</p></blockquote><p><strong>修改 hosts 映射文件</strong></p><p>1）修改 linux 的主机映射文件（hosts 文件） 后续在 hadoop 阶段，虚拟机会比较多，配置时通常会采用主机名的方式配置， 比较简单方便。 不用刻意记 ip 地址。<code>vim /etc/host</code></p><p>添加如下内容</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>192.168.2.100 ds100
192.168.2.101 ds101
192.168.2.102 ds102
192.168.2.103 ds103
192.168.2.104 ds104
192.168.2.105 ds105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启设备，重启后，查看主机名，已经修改成功</p><p>2）修改 windows 的主机映射文件（hosts 文件）</p><p>​ 进入 <code>C:\\Windows\\System32\\drivers\\etc</code> 路径</p><p>​ 打开 hosts 文件并添加如下内容</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>192.168.2.100 ds100
192.168.2.101 ds101
192.168.2.102 ds102
192.168.2.103 ds103
192.168.2.104 ds104
192.168.2.105 ds105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>先将该文件只读关闭，然后写入内容保存，最后恢复到只读状态</p></blockquote><p>这时可以在windows通过<code>ping ds100</code>来测试是否连通虚拟机</p><h2 id="_3-远程登录" tabindex="-1"><a class="header-anchor" href="#_3-远程登录" aria-hidden="true">#</a> 3.远程登录</h2><p>通常在工作过程中，公司中使用的真实服务器或者是云服务器，都不允许除运维人员之 外的员工直接接触，因此就需要通过远程登录的方式来操作。所以，远程登录工具就是必不 可缺的，目前，比较主流的有 Xshell，SSH Secure Shell，SecureCRT，FinalShell 等，同学们 可以根据自己的习惯自行选择，以下以 Xshell5 为例。</p><h3 id="_3-1-远程登录方法" tabindex="-1"><a class="header-anchor" href="#_3-1-远程登录方法" aria-hidden="true">#</a> 3.1 远程登录方法</h3><blockquote><p>两个文件的安装步骤都在01文章中的<code>2.3centos安装</code>下的网盘链接中</p></blockquote><p><strong>配置 Xshell 终端</strong></p><p>1）打开安装好的 Xshell</p><figure><img src="https://i0.hdslb.com/bfs/album/8799ba5a5c1af42a2035903f81415919331e9c3b.png" alt="image-20220816142329675" tabindex="0" loading="lazy"><figcaption>image-20220816142329675</figcaption></figure><p>2） 编辑新链接</p><figure><img src="https://i0.hdslb.com/bfs/album/d4c918530216bbab5bba6a4371a5f586a9108f29.png" alt="image-20220816142358241" tabindex="0" loading="lazy"><figcaption>image-20220816142358241</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/acac2d2e7ba90c6fb72d9e35acdc249d80e90720.png" alt="image-20220816142412603" tabindex="0" loading="lazy"><figcaption>image-20220816142412603</figcaption></figure><p>3）测试链接</p><figure><img src="https://i0.hdslb.com/bfs/album/0bfe335ebe98c8982111d6eb38edd560be4b673c.png" alt="image-20220816142430521" tabindex="0" loading="lazy"><figcaption>image-20220816142430521</figcaption></figure><p>4）连接成功</p><figure><img src="https://i0.hdslb.com/bfs/album/7d08f6bb4ef68e360b5476a27a087571e7f9d894.png" alt="image-20220816142441896" tabindex="0" loading="lazy"><figcaption>image-20220816142441896</figcaption></figure><p>5）断开连接</p><figure><img src="https://i0.hdslb.com/bfs/album/77b167490a8cdbf0f531d99ecc0758f677963a8b.png" alt="image-20220816142541451" tabindex="0" loading="lazy"><figcaption>image-20220816142541451</figcaption></figure><p>6）添加右键点击粘贴和选中复制</p><p><code>工具 -&gt; 选项</code></p><figure><img src="https://i0.hdslb.com/bfs/album/28158d380acad7463c82ac2037f31ea97057c649.png" alt="image-20220816142850894" tabindex="0" loading="lazy"><figcaption>image-20220816142850894</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/ce6971bffebe4a0db5901c765ab182a61cf0bce8.png" alt="image-20220816142931574" tabindex="0" loading="lazy"><figcaption>image-20220816142931574</figcaption></figure><h3 id="_3-2-ftp文件传输" tabindex="-1"><a class="header-anchor" href="#_3-2-ftp文件传输" aria-hidden="true">#</a> 3.2 ftp文件传输</h3><blockquote><p>主要用于向服务上传或下载文件</p></blockquote><p><strong>配置 Xftp</strong></p><p>1）创建新链接</p><figure><img src="https://i0.hdslb.com/bfs/album/8ad9550dc1d1cb181f1a5546d357bb2dc3ac14dd.png" alt="image-20220816143139643" tabindex="0" loading="lazy"><figcaption>image-20220816143139643</figcaption></figure><p>2）编辑新链接</p><figure><img src="https://i0.hdslb.com/bfs/album/1ec1f5d4049e4290ae9110fc0b2390e99d3f38f3.png" alt="image-20220816143220540" tabindex="0" loading="lazy"><figcaption>image-20220816143220540</figcaption></figure><blockquote><p>如果配置hosts，主机可以填和名称一样的</p></blockquote><figure><img src="https://i0.hdslb.com/bfs/album/cf14f548fc511fa35b3823e7fba82aa91dd4d7b8.png" alt="image-20220816143307410" tabindex="0" loading="lazy"><figcaption>image-20220816143307410</figcaption></figure><p>出现以上界面表示链接成功，可以进行 windows 和 linux 系统互传数据。</p><p><strong>注：有可能会有部分人右边是乱码，可以使用以下方式修改，修改后重启 Xftp。</strong></p><p><code>文件-当前会话属性--选项--编码：UTF-8</code></p><figure><img src="https://i0.hdslb.com/bfs/album/45e7ef25dd37c8ed35859e6e5e146a3d08f0ebb5.png" alt="image-20220816143434490" tabindex="0" loading="lazy"><figcaption>image-20220816143434490</figcaption></figure>`,53);function h(u,y){const e=g("ExternalLinkIcon");return n(),l("div",null,[o,t("blockquote",null,[c,t("p",null,[d("例如： ping "),t("a",p,[d("www.baidu.com"),i(e)])])]),b,t("p",null,[d("（3）虚拟机 Ping "),t("a",f,[d("www.baidu.com"),i(e)]),d(" 显示域名未知等信息,一般查看 GATEWAY 和 DNS 设 置是否正确")]),m])}const v=r(s,[["render",h],["__file","02.html.vue"]]);export{v as default};

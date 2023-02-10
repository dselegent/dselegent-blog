import{ab as l,G as o,H as i,E as s,S as n,N as t,ac as a,W as c}from"./framework-09305b5d.js";const p={},r=a(`<h1 id="_05【实操篇-文件目录类命令】" tabindex="-1"><a class="header-anchor" href="#_05【实操篇-文件目录类命令】" aria-hidden="true">#</a> 05【实操篇-文件目录类命令】</h1><h2 id="_1-pwd-显示当前工作目录的绝对路径" tabindex="-1"><a class="header-anchor" href="#_1-pwd-显示当前工作目录的绝对路径" aria-hidden="true">#</a> 1.pwd 显示当前工作目录的绝对路径</h2><blockquote><p>pwd:print working directory 打印工作目录</p></blockquote><p>到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由<code>pwd</code>命令提供的，它能够输出当前的工作目录。</p><p><code>pwd</code>命令是非常非常常用的命令，尤其是在一些<code>命令提示符</code>设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。</p><p>有很多线上事故，都是由于没有确认当前目录所引起的。比如<code>rm -rf *</code>这种危险的命令。在执行一些高危命令时，随时确认当前目录，是个好的习惯。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# pwd [-P]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li><strong>-P</strong> ：显示出确实的路径，而非使用链接 (link) 路径。</li></ul><p>实例：单纯显示出目前的工作目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# pwd
/root   &lt;== 显示出目录啦～
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们使用root用户默认登陆后，就停留在<code>/root</code>目录中。Linux中的目录层次，是通过<code>/</code>进行划分的。</p></blockquote><p>实例显示出实际的工作目录，而非链接档本身的目录名而已。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># cd /var/mail   &lt;==注意，/var/mail是一个链接档</span>
<span class="token punctuation">[</span>root@www mail<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/var/mail         <span class="token operator">&lt;=</span><span class="token operator">=</span>列出目前的工作目录
<span class="token punctuation">[</span>root@www mail<span class="token punctuation">]</span><span class="token comment"># pwd -P</span>
/var/spool/mail   <span class="token operator">&lt;=</span><span class="token operator">=</span>怎么回事？有没有加 <span class="token parameter variable">-P</span> 差很多～
<span class="token punctuation">[</span>root@www mail<span class="token punctuation">]</span><span class="token comment"># ls -ld /var/mail</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">10</span> Sep  <span class="token number">4</span> <span class="token number">17</span>:54 /var/mail -<span class="token operator">&gt;</span> spool/mail
<span class="token comment"># 看到这里应该知道为啥了吧？因为 /var/mail 是链接档，链接到 /var/spool/mail </span>
<span class="token comment"># 所以，加上 pwd -P 的选项后，会不以链接档的数据显示，而是显示正确的完整路径啊！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d={id:"_2-ls-列出目录的内容",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#_2-ls-列出目录的内容","aria-hidden":"true"},"#",-1),m={href:"http://2.ls",target:"_blank",rel:"noopener noreferrer"},v=a(`<blockquote><p>ls:list 列出目录内容</p></blockquote><p><code>ls</code>命令，能够列出相关目录的文件信息。可以被评为linux下最勤劳的命令标兵。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># ls [-aAdfFhilnrRSt] 目录名称</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># ls [--color={never,auto,always}] 目录名称</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># ls [--full-time] 目录名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li><li>-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)</li><li>-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls /</span>
<span class="token comment"># 注意：ls可以接受路径参数，你不用先跳转，就可以输出相关信息</span>
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls -l /</span>
<span class="token comment"># 带上 -l参数，能够看到文件的一些权限信息已经更新日期等。</span>
total <span class="token number">20</span>
lrwxrwxrwx.   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:24 bin -<span class="token operator">&gt;</span> usr/bin
dr-xr-xr-x.   <span class="token number">5</span> root root <span class="token number">4096</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:34 boot
drwxr-xr-x.  <span class="token number">19</span> root root <span class="token number">3080</span> Nov  <span class="token number">3</span> <span class="token number">21</span>:19 dev
drwxr-xr-x.  <span class="token number">74</span> root root <span class="token number">8192</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:34 etc
drwxr-xr-x.   <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span>  <span class="token number">2018</span> home
lrwxrwxrwx.   <span class="token number">1</span> root root    <span class="token number">7</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:24 lib -<span class="token operator">&gt;</span> usr/lib
lrwxrwxrwx.   <span class="token number">1</span> root root    <span class="token number">9</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:24 lib64 -<span class="token operator">&gt;</span> usr/lib64
drwxr-xr-x.   <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span>  <span class="token number">2018</span> media
drwxr-xr-x.   <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span>  <span class="token number">2018</span> mnt
drwxr-xr-x.   <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span>  <span class="token number">2018</span> opt
dr-xr-xr-x. <span class="token number">108</span> root root    <span class="token number">0</span> Nov  <span class="token number">3</span> <span class="token number">21</span>:19 proc
dr-xr-x---.   <span class="token number">2</span> root root  <span class="token number">135</span> Nov  <span class="token number">4</span> 07:53 root
drwxr-xr-x.  <span class="token number">24</span> root root  <span class="token number">740</span> Nov  <span class="token number">3</span> <span class="token number">21</span>:20 run
lrwxrwxrwx.   <span class="token number">1</span> root root    <span class="token number">8</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:24 sbin -<span class="token operator">&gt;</span> usr/sbin
drwxr-xr-x.   <span class="token number">2</span> root root    <span class="token number">6</span> Apr <span class="token number">11</span>  <span class="token number">2018</span> srv
dr-xr-xr-x.  <span class="token number">13</span> root root    <span class="token number">0</span> Nov  <span class="token number">3</span> <span class="token number">21</span>:19 sys
drwxrwxrwt.   <span class="token number">9</span> root root <span class="token number">4096</span> Nov  <span class="token number">4</span> 03:40 tmp
drwxr-xr-x.  <span class="token number">13</span> root root  <span class="token number">155</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:24 usr
drwxr-xr-x.  <span class="token number">19</span> root root  <span class="token number">267</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:34 var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>每行列出的信息依次是： 文件类型与权限 链接数 文件属主 文件属组 文件大小用byte 来表示 建立或最近修改的时间 名字</p><figure><img src="https://i0.hdslb.com/bfs/album/0b901b1573479aada8d856c091084281de5c1b7b.png" alt="image-20220816220526783" tabindex="0" loading="lazy"><figcaption>image-20220816220526783</figcaption></figure></blockquote><p>直接在你的/root目录里，执行<code>ls -al</code>，你会看到更多东西。这些额外的隐藏文件，都是以<code>.</code>开头，以配置文件居多。这就是参数<code>a</code>的作用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -al</span>
total <span class="token number">28</span>
dr-xr-x---.  <span class="token number">2</span> root root  <span class="token number">135</span> Nov  <span class="token number">4</span> 07:53 <span class="token builtin class-name">.</span>
dr-xr-xr-x. <span class="token number">17</span> root root  <span class="token number">224</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:28 <span class="token punctuation">..</span>
-rw-------.  <span class="token number">1</span> root root <span class="token number">1273</span> Nov  <span class="token number">3</span> <span class="token number">20</span>:28 anaconda-ks.cfg
-rw-------.  <span class="token number">1</span> root root  <span class="token number">246</span> Nov  <span class="token number">4</span> <span class="token number">11</span>:41 .bash_history
-rw-r--r--.  <span class="token number">1</span> root root   <span class="token number">18</span> Dec <span class="token number">28</span>  <span class="token number">2013</span> .bash_logout
-rw-r--r--.  <span class="token number">1</span> root root  <span class="token number">176</span> Dec <span class="token number">28</span>  <span class="token number">2013</span> .bash_profile
-rw-r--r--.  <span class="token number">1</span> root root  <span class="token number">176</span> Dec <span class="token number">28</span>  <span class="token number">2013</span> .bashrc
-rw-r--r--.  <span class="token number">1</span> root root  <span class="token number">100</span> Dec <span class="token number">28</span>  <span class="token number">2013</span> .cshrc
-rw-r--r--.  <span class="token number">1</span> root root  <span class="token number">129</span> Dec <span class="token number">28</span>  <span class="token number">2013</span> .tcshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ls最常用的，就是加参数<code>l</code>或者参数<code>a</code>。</p><p>细心的同学，应该会注意到两个特殊的目录。<code>.</code>和<code>..</code>。前者表示的是当前目录，而后者表示的是上层目录。</p><p>使用<code>cd</code>命令，将在这些目录中，自由穿梭。</p><blockquote><p>小技巧：如果你对英文日期阅读困难，可以使用<code>ls -al --full-time</code>查看可读的日期。</p></blockquote>`,14),b={id:"_3-cd-切换目录",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#_3-cd-切换目录","aria-hidden":"true"},"#",-1),h={href:"http://3.cd",target:"_blank",rel:"noopener noreferrer"},g=a(`<blockquote><p>cd:Change Directory 切换路径</p></blockquote><p>执行cd命令，可以将工作目录切换到目标文件夹。为了展示cd命令的效果。请在root用户下，执行下面的命令，这将创建一个7层的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> a1/b2/c3/d4/e5/f6/<span class="token punctuation">{</span>g7,g8,g9,g10<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用cd命令，切换到最后一层。然后，我们使用<code>..</code>切换到上层目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd a1/b2/c3/d4/e5/f6/g7</span>
<span class="token punctuation">[</span>root@localhost g7<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/a1/b2/c3/d4/e5/f6/g7

<span class="token punctuation">[</span>root@localhost g7<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@localhost f6<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/a1/b2/c3/d4/e5/f6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，切换到上面n层目录，只需使用多层级的<code>../</code>即可。有几个特殊的变量，需要说明一下。</p><ul><li><code>../</code> 指的是上层目录</li><li><code>../../</code> 指的是上两层目录</li><li><code>./</code> 指的是当前目录</li><li><code>~</code> 指的是当前的用户目录，这是一个缩写符号</li><li><code>-</code> 使用它，可以在最近两次的目录中来回切换</li></ul><p>我们来使用命令把上面这些特殊变量验证一下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 跳转到用户根目录</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># cd ~</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root

<span class="token comment"># 进入到第三层目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd a1/b2/c3/</span>
<span class="token punctuation">[</span>root@localhost c3<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/a1/b2/c3

<span class="token comment"># 跳回到前三层目录</span>
<span class="token punctuation">[</span>root@localhost c3<span class="token punctuation">]</span><span class="token comment"># cd ../../..</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root

<span class="token comment"># 跳到上次访问的目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd -</span>
/root/a1/b2/c3
<span class="token punctuation">[</span>root@localhost c3<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/a1/b2/c3

<span class="token comment"># 进入当前目录：等于什么都没干</span>
<span class="token punctuation">[</span>root@localhost c3<span class="token punctuation">]</span><span class="token comment"># cd ./</span>
<span class="token punctuation">[</span>root@localhost c3<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root/a1/b2/c3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-mkdir-创建一个新的目录" tabindex="-1"><a class="header-anchor" href="#_4-mkdir-创建一个新的目录" aria-hidden="true">#</a> 4.mkdir 创建一个新的目录</h2><blockquote><p>mkdir:Make directory 建立目录</p></blockquote><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir [-mp] 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-m ：配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～</li><li>-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！</li></ul><p>实例：请到/tmp底下尝试创建数个新目录看看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# cd /tmp
[root@www tmp]# mkdir test    &lt;==创建一名为 test 的新目录
[root@www tmp]# mkdir test1/test2/test3/test4
mkdir: cannot create directory \`test1/test2/test3/test4&#39;: 
No such file or directory       &lt;== 没办法直接创建此目录啊！
[root@www tmp]# mkdir -p test1/test2/test3/test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加了这个 -p 的选项，可以自行帮你创建多层目录！</p><p>实例：创建权限为 <strong>rwx--x--x</strong> 的目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www tmp]# mkdir -m 711 test2
[root@www tmp]# ls -l
drwxr-xr-x  3 root  root 4096 Jul 18 12:50 test
drwxr-xr-x  3 root  root 4096 Jul 18 12:53 test1
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的权限部分，如果没有加上 -m 来强制配置属性，系统会使用默认属性。</p><p>如果我们使用 -m ，如上例我们给予 -m 711 来给予新的目录 drwx--x--x 的权限。</p><h2 id="_5-rmdir-删除空的目录" tabindex="-1"><a class="header-anchor" href="#_5-rmdir-删除空的目录" aria-hidden="true">#</a> 5.rmdir 删除空的目录</h2><blockquote><p>rmdir:Remove directory 移除目录</p></blockquote><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> rmdir [-p] 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>**-p ：**从该目录起，一次删除多级空目录</li></ul><p>删除 runoob 目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www tmp]# rmdir runoob/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 mkdir 实例中创建的目录(/tmp 底下)删除掉！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www tmp]# ls -l   &lt;==看看有多少目录存在？
drwxr-xr-x  3 root  root 4096 Jul 18 12:50 test
drwxr-xr-x  3 root  root 4096 Jul 18 12:53 test1
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
[root@www tmp]# rmdir test   &lt;==可直接删除掉，没问题
[root@www tmp]# rmdir test1  &lt;==因为尚有内容，所以无法删除！
rmdir: \`test1&#39;: Directory not empty
[root@www tmp]# rmdir -p test1/test2/test3/test4
[root@www tmp]# ls -l        &lt;==您看看，底下的输出中test与test1不见了！
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 -p 这个选项，立刻就可以将 test1/test2/test3/test4 一次删除。</p><blockquote><p>删除完test4发现test3是空目录继续删除，以此类推。</p></blockquote><p>不过要注意的是，这个 rmdir 仅能删除空的目录，你可以使用 rm 命令来删除非空目录。</p><h2 id="_6-touch-创建空文件" tabindex="-1"><a class="header-anchor" href="#_6-touch-创建空文件" aria-hidden="true">#</a> 6.touch 创建空文件</h2><p>1）基本语法</p><p>touch 文件名称</p><p>2）案例实操</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># touch xiyou/dssz/sunwukong.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-cp-复制文件或目录" tabindex="-1"><a class="header-anchor" href="#_7-cp-复制文件或目录" aria-hidden="true">#</a> 7.cp 复制文件或目录</h2><p>cp 即拷贝文件和目录。</p><p>语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# cp [-adfilprsu] 来源档(source) 目标档(destination)
[root@www ~]# cp [options] source1 source2 source3 .... directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>**-i：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</li><li>**-p：**连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li><li>**-r：**递归持续复制，用於目录的复制行为；(常用)</li><li>**-f：**为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；</li></ul><p>用 root 身份，将 root 目录下的 .bashrc 复制到 /tmp 下，并命名为 bashrc</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc /tmp/bashrc</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># cp -i ~/.bashrc /tmp/bashrc</span>
cp: overwrite \`/tmp/bashrc&#39;? n  <span class="token operator">&lt;=</span><span class="token operator">=</span>n不覆盖，y为覆盖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-rm-删除文件或目录" tabindex="-1"><a class="header-anchor" href="#_8-rm-删除文件或目录" aria-hidden="true">#</a> 8.rm 删除文件或目录</h2><p>rm 是强大的删除命令，它可以永久性地删除文件系统中指定的文件或目录。在使用 rm 命令删除文件或目录时，系统不会产生任何提示信息。</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> rm [-fir] 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；</li><li>-i ：互动模式，在删除前会询问使用者是否动作</li><li>-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！</li></ul><p>注意，rm 命令是一个具有破坏性的命令，因为 rm 命令会永久性地删除文件或目录，这就意味着，如果没有对文件或目录进行备份，一旦使用 rm 命令将其删除，将无法恢复，因此，尤其在使用 rm 命令删除目录时，要慎之又慎。</p><p>【例 1】基本用法。 rm 命令如果任何选项都不加，则默认执行的是&quot;rm -i 文件名&quot;，也就是在删除一个文件之前会先询问是否删除。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm cangls</span>
rm:是否删除普通空文件<span class="token string">&quot;cangls&quot;</span>?y
<span class="token comment">#删除前会询问是否删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【例 2】 删除目录。 如果需要删除目录，则需要使用&quot;-r&quot;选项。例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test/lm/movie/jp</span>
<span class="token comment">#递归建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm /test</span>
rm:无法删除<span class="token string">&quot;/test/&quot;</span><span class="token builtin class-name">:</span> 是一个目录
<span class="token comment">#如果不加&quot;-r&quot;选项，则会报错</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -r /test</span>
rm:是否进入目录<span class="token string">&quot;/test&quot;</span>?y
rm:是否进入目录<span class="token string">&quot;/test/lm/movie&quot;</span>?y
rm:是否删除目录<span class="token string">&quot;/test/lm/movie/jp&quot;</span>?y
rm:是否删除目录<span class="token string">&quot;/test/lm/movie&quot;</span>?y
rm:是否删除目录<span class="token string">&quot;/test/lm&quot;</span>?y
rm:是否删除目录<span class="token string">&quot;/test&quot;</span>?y
<span class="token comment">#会分别询问是否进入子目录、是否删除子目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家会发现，如果每级目录和每个文件都需要确认，那么在实际使用中简直是灾难！</p><p>【例 3】强制删除。 如果要删除的目录中有 1 万个子目录或子文件，那么普通的 rm 删除最少需要确认 1 万次。所以，在真正删除文件的时候，我们会选择强制删除。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test/lm/movie/jp</span>
<span class="token comment">#重新建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /test</span>
<span class="token comment">#强制删除，一了百了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入了强制功能之后，删除就会变得很简单，但是需要注意，数据强制删除之后无法恢复，除非依赖第三方的数据恢复工具，如 extundelete 等。但要注意，数据恢复很难恢复完整的数据，一般能恢复 70%~80% 就很难得了。所以，与其把宝压在数据恢复上，不如养成良好的操作习惯。</p><p>虽然 &quot;-rf&quot; 选项是用来删除目录的，但是删除文件也不会报错。所以，为了使用方便，一般不论是删除文件还是删除目录，都会直接使用 &quot;-rf&quot; 选项。</p>`,64),x={id:"_9-mv-移动文件与目录或重命名",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#_9-mv-移动文件与目录或重命名","aria-hidden":"true"},"#",-1),f={href:"http://9.mv",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># mv [-fiu] source destination</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># mv [options] source1 source2 source3 .... directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li>-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li><li>-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)</li></ul><p>复制一文件，创建一目录，将文件移动到目录中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp</span>
<span class="token punctuation">[</span>root@www tmp<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc bashrc</span>
<span class="token punctuation">[</span>root@www tmp<span class="token punctuation">]</span><span class="token comment"># mkdir mvtest</span>
<span class="token punctuation">[</span>root@www tmp<span class="token punctuation">]</span><span class="token comment"># mv bashrc mvtest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将某个文件移动到某个目录去，就是这样做！</p><p>将刚刚的目录名称更名为 mvtest2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www tmp<span class="token punctuation">]</span><span class="token comment"># mv mvtest mvtest2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-cat-查看文件内容" tabindex="-1"><a class="header-anchor" href="#_10-cat-查看文件内容" aria-hidden="true">#</a> 10.cat 查看文件内容</h2><p>为了查看文件的生成效果，可以使用cat命令检测。cat命令将会把文件的内容，输出打印到终端上。如果加上参数<code>n</code>，甚至可以打印行号。效果如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span>root@localhost <span class="token operator">~</span><span class="token punctuation">]</span># cat spring
<span class="token number">10</span>
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
<span class="token number">14</span>
<span class="token number">15</span>
<span class="token number">16</span>
<span class="token number">17</span>
<span class="token number">18</span>
<span class="token number">19</span>
<span class="token number">20</span>
<span class="token punctuation">[</span>root@localhost <span class="token operator">~</span><span class="token punctuation">]</span># cat <span class="token operator">-</span>n spring
<span class="token number">1</span>	<span class="token number">10</span>
<span class="token number">2</span>	<span class="token number">11</span>
<span class="token number">3</span>	<span class="token number">12</span>
<span class="token number">4</span>	<span class="token number">13</span>
<span class="token number">5</span>	<span class="token number">14</span>
<span class="token number">6</span>	<span class="token number">15</span>
<span class="token number">7</span>	<span class="token number">16</span>
<span class="token number">8</span>	<span class="token number">17</span>
<span class="token number">9</span>	<span class="token number">18</span>
<span class="token number">10</span>	<span class="token number">19</span>
<span class="token number">11</span>	<span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了查看文件内容，cat命令通常用在更多的地方。只有和其他命令联合起来，它才会觉得生活有意义。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 合并a文件和b文件到c文件</span>
<span class="token function">cat</span> a  b<span class="token operator">&gt;&gt;</span> c

<span class="token comment"># 把a文件的内容作为输入，使用管道处理。我们在后面介绍</span>
<span class="token function">cat</span> a <span class="token operator">|</span> cmd

<span class="token comment"># 写入内容到指定文件。在shell脚本中非常常用。我们在后面会多次用到这种写法</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> index.html <span class="token operator">&lt;&lt;</span><span class="token string">EOF
&lt;html&gt;
    &lt;head&gt;&lt;title&gt;&lt;/title&gt;&lt;/head&gt;
    &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们的文件不大，cat命令没有什么危害。但假如文件有几个<code>GB</code>，使用cat就危险的多，这只叫做<code>猫</code>的小命令，会在终端上疯狂的进行输出，你可以通过多次按<code>ctrl+c</code>来终止它。</p><h2 id="_11-less-分屏显示文件内容" tabindex="-1"><a class="header-anchor" href="#_11-less-分屏显示文件内容" aria-hidden="true">#</a> 11.less 分屏显示文件内容</h2><p>既然cat命令不适合操作大文件，那一定有替换的方案。less和more就是。由于less的加载速度比more快一些，所以现在一般都使用<code>less</code>。它最主要的用途，是用来分页浏览文件内容，并提供一些快速查找的方式。less是一个<code>交互式</code>的命令，你需要使用一些快捷键来控制它。</p><p>不仅如此，为了方面用户浏览文本内容，less 命令还提供了以下几个功能：</p><ul><li>使用光标键可以在文本文件中前后（左后）滚屏；</li><li>用行号或百分比作为书签浏览文件；</li><li>提供更加友好的检索、高亮显示等操作；</li><li>兼容常用的字处理程序（如 Vim、Emacs）的键盘操作；</li><li>阅读到文件结束时，less 命令不会退出；</li><li>屏幕底部的信息提示更容易控制使用，而且提供了更多的信息。</li></ul><p>less 命令的基本格式如下：</p><p><code>[root@localhost ~]# less [选项] 文件名</code></p><p>此命令可用的选项以及各自的含义如表所示。</p><table><thead><tr><th>选项</th><th>选项含义</th></tr></thead><tbody><tr><td>-N</td><td>显示每行的行号。</td></tr><tr><td>-S</td><td>行过长时将超出部分舍弃。</td></tr><tr><td>-e</td><td>当文件显示结束后，自动离开。</td></tr><tr><td>-g</td><td>只标志最后搜索到的关键同。</td></tr><tr><td>-Q</td><td>不使用警告音。</td></tr><tr><td>-i</td><td>忽略搜索时的大小写。</td></tr><tr><td>-m</td><td>显示类似 more 命令的百分比。</td></tr><tr><td>-f</td><td>强迫打开特殊文件，比如外围设备代号、目录和二进制文件。</td></tr><tr><td>-s</td><td>显示连续空行为一行。</td></tr><tr><td>-b &lt;缓冲区大小&gt;</td><td>设置缓冲区的大小。</td></tr><tr><td>-o &lt;文件名&gt;</td><td>将 less 输出的内容保存到指定文件中。</td></tr><tr><td>-x &lt;数字&gt;</td><td>将【Tab】键显示为规定的数字空格。</td></tr></tbody></table><p>在使用 less 命令查看文件内容的过程中，和 more 命令一样，也会进入交互界面，因此需要读者掌握一些常用的交互指令，如表所示。</p><ul><li><code>空格</code> 向下滚屏翻页</li><li><code>b</code> 向上滚屏翻页</li><li><code>/</code> 进入查找模式，比如<code>/1111</code>将查找1111字样</li><li><code>q</code> 退出less</li><li><code>g</code> 到开头</li><li><code>G</code> 去结尾</li><li><code>j</code> 向下滚动</li><li><code>k</code> 向上滚动，这两个按键和vim的作用非常像</li></ul><p>【例 1】使用 less 命令查看 /boot/grub/grub.cfg 文件中的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># less /boot/grub/grub.cfg</span>
<span class="token comment">#</span>
<span class="token comment">#DO NOT EDIT THIS FILE</span>
<span class="token comment">#</span>
<span class="token comment">#It is automatically generated by grub-mkconfig using templates from /etc/grub.d and settings from /etc/default/grub</span>
<span class="token comment">#</span>

<span class="token comment">### BEGIN /etc/grub.d/00_header ###</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token variable">$prefix</span>/grubenv <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">set</span> <span class="token assign-left variable">have_grubenv</span><span class="token operator">=</span>true
 load_env
<span class="token keyword">fi</span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">default</span><span class="token operator">=</span><span class="token string">&quot;0&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;$ {prev_saved_entry}&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">set</span> <span class="token assign-left variable">saved_entry</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${prev_saved_entry}</span>&quot;</span>
 save_env saved_entry
 <span class="token builtin class-name">set</span> <span class="token assign-left variable">prev_saved_entry</span><span class="token operator">=</span> save_env prev_saved_entry
 <span class="token builtin class-name">set</span> <span class="token assign-left variable">boot_once</span><span class="token operator">=</span>true
<span class="token keyword">fi</span>

<span class="token keyword">function</span> <span class="token function-name function">savedefault</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${boot_once}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，less 在屏幕底部显示一个冒号（：），等待用户输入命令，比如说，用户想向下翻一页，可以按空格键；如果想向上翻一页，可以按 b 键。</p><h2 id="_12-echo-输出内容到控制台" tabindex="-1"><a class="header-anchor" href="#_12-echo-输出内容到控制台" aria-hidden="true">#</a> 12.echo 输出内容到控制台</h2><p>echo 输出内容到控制台</p><p><strong>基本语法</strong></p><p>echo [选项] [输出内容]</p><p><strong>选项：</strong></p><ul><li>-e： 支持反斜线控制的字符转换</li></ul><table><thead><tr><th>控制字符</th><th>作用</th></tr></thead><tbody><tr><td>\\</td><td>输出\\本身</td></tr><tr><td>\\n</td><td>换行符</td></tr><tr><td>\\t</td><td>制表符，也就是 Tab</td></tr></tbody></table><p><strong>案例实操</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop101 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> “hello<span class="token punctuation">\\</span>tworld”
hello<span class="token punctuation">\\</span>tworld
<span class="token punctuation">[</span>atguigu@hadoop101 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> “hello<span class="token punctuation">\\</span>tworld”
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-head-显示文件头部内容" tabindex="-1"><a class="header-anchor" href="#_13-head-显示文件头部内容" aria-hidden="true">#</a> 13.head 显示文件头部内容</h2><p>取出文件前面几行</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>head [-n number] 文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-n ：后面接数字，代表显示几行的意思</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# head /etc/man.config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认的情况中，显示前面 10 行！若要显示前 20 行，就得要这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@www ~]# head -n 20 /etc/man.config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-tail-输出文件尾部内容" tabindex="-1"><a class="header-anchor" href="#_14-tail-输出文件尾部内容" aria-hidden="true">#</a> 14.tail 输出文件尾部内容</h2><p>取出文件后面几行</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail [-n number] 文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-n ：后面接数字，代表显示几行的意思</li><li>-f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># tail /etc/man.config</span>
<span class="token comment"># 默认的情况中，显示最后的十行！若要显示最后的 20 行，就得要这样：</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># tail -n 20 /etc/man.config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于部分程序员来说，<code>tail -f</code>或许是最常用的命令之一。它可以在控制终端，实时监控文件的变化，来看一些滚动日志。比如查看nginx或者tomcat日志等等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 滚动查看系统日志</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#tail -f anaconda-ks.cfg</span>
@server-platform
@server-policy
pax
oddjob
sgpio
certmonger
pam_krb5
krb5-workstation
perl-DBD-SQLite
%end
<span class="token comment">#光标不会退出文件，而会一直监听在文件的结尾处</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这条命令会显示文件的最后 10 行内容，而且光标不会退出命令，每隔一秒会检查一下文件是否增加新的内容，如果增加就追加到原来的输出结果后面并显示。因此，这时如果向文件中追加一些数据（需要开启一个新终端）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo 2222222222 &gt;&gt; anaconda-ks.cfg</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo 3333333333 &gt;&gt; anaconda-ks.cfg</span>
<span class="token comment">#在新终端中通过echo命令向文件中追加数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，在原始的正在监听的终端中，会看到如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tail -f anaconda-ks.cfg @server-platforin</span>
@server-policy
pax
oddjob
sgpio
certmonger
pam_krb5
krb5-workstation
perl-DBD-SQLite
%end
<span class="token number">2222222222</span>
<span class="token number">33333333333</span>
<span class="token comment">#在文件的结尾处监听到了新増数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想终止输出，按【Ctrl+c】键中断 tail 命令即可。</p><p>通常情况下，日志滚动的过快，依然会造成一些困扰，需要配合grep命令达到过滤效果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 滚动查看包含info字样的日志信息</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages <span class="token operator">|</span> <span class="token function">grep</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对于tail命令来说，还有一个大写的参数<code>F</code>。这个参数，能够监控到重新创建的文件。比如像一些log4j等日志是按天滚动的，<code>tail -f</code>无法监控到这种变化。</p></blockquote><h2 id="_15-输出重定向和-追加" tabindex="-1"><a class="header-anchor" href="#_15-输出重定向和-追加" aria-hidden="true">#</a> 15.&gt; 输出重定向和 &gt;&gt; 追加</h2><p><strong>1）基本语法</strong></p><p>（1）ls -l &gt; 文件 （功能描述：列表的内容写入文件 a.txt 中（覆盖写））</p><p>（2）ls -al &gt;&gt; 文件 （功能描述：列表的内容追加到文件 aa.txt 的末尾）</p><p>（3）cat 文件 1 &gt; 文件 2 （功能描述：将文件 1 的内容覆盖到文件 2） cat 文件1 文件2 &gt; 文件3（功能描述：将文件1 和 2的内容合并后输出到文件3中。）</p><p>（4）echo “内容” &gt;&gt; 文件</p><p><strong>2）案例实操</strong></p><p>（1）将 ls 查看信息写入到文件中</p><p><code>[root@hadoop101 ~]# ls -l&gt;houge.txt</code></p><p>（2）将 ls 查看信息追加到文件中</p><p><code>[root@hadoop101 ~]# ls -l&gt;&gt;houge.txt </code></p><p>（3）采用 echo 将 hello 单词追加到文件中</p><p><code>[root@hadoop101 ~]# echo hello&gt;&gt;houge.txt</code></p><p>（4）将文件 file1.txt 和 file2.txt 的内容合并后输出到文件 file3.txt 中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># ls</span>
file1.txt    file2.txt
<span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># cat file1.txt</span>
ds<span class="token punctuation">(</span>file1.txt<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># cat file2.txt</span>
is great<span class="token punctuation">(</span>file2.txt<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># cat file1.txt file2.txt &gt; file3.txt</span>
<span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># more file3.txt</span>
<span class="token comment">#more 命令可查看文件中的内容</span>
ds<span class="token punctuation">(</span>file1.txt<span class="token punctuation">)</span>
is great<span class="token punctuation">(</span>file2.txt<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost base<span class="token punctuation">]</span><span class="token comment"># ls</span>
file1.txt    file2.txt    file3.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-history-查看已经执行过历史命令" tabindex="-1"><a class="header-anchor" href="#_16-history-查看已经执行过历史命令" aria-hidden="true">#</a> 16.history 查看已经执行过历史命令</h2><p><strong>1）基本语法</strong></p><p>history （功能描述：查看已经执行过历史命令）</p><p><strong>2）案例实操</strong></p><p>（1）查看已经执行过的历史命令</p><p><code>[root@hadoop101 test1]# history</code></p><p>（2）显示最近3条命令历史</p><p><code>histroy 3</code></p><p>（3）清除历史记录</p><p><code>history -c</code></p><h2 id="_17-ln软链接" tabindex="-1"><a class="header-anchor" href="#_17-ln软链接" aria-hidden="true">#</a> 17.ln软链接</h2><p>软链接也称为符号链接，类似于 windows 里的快捷方式，有自己的数据块，主要存放 了链接其他文件的路径。</p><p>1）基本语法</p><p><code> ln -s [原文件或目录] [软链接名] </code>（功能描述：给原文件创建一个软链接）</p><p>2）经验技巧</p><p>​ 删除软链接： rm -rf 软链接名，而不是 <code>rm -rf 软链接名/</code></p><p>​ <strong>如果使用 rm -rf 软链接名/ 删除，会把软链接对应的真实目录下内容删掉</strong></p><p>​ 查询：通过 ll 就可以查看，列表属性第 1 位是 l，尾部会有位置指向。</p><p>3）案例实操</p><p>​ （1）创建软连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># mv houge.txt xiyou/dssz/</span>
<span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># ln -s xiyou/dssz/houge.txt ./houzi</span>
<span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># ll</span>
lrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">20</span> <span class="token number">6</span> 月 <span class="token number">17</span> <span class="token number">12</span>:56 houzi -<span class="token operator">&gt;</span>
xiyou/dssz/houge.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ （2）删除软连接(注意不要写最后的/)</p><p>​ <code>[root@hadoop101 ~]# rm -rf houzi</code></p><p>​ （3）进入软连接实际物理路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># ln -s xiyou/dssz/ ./dssz</span>
<span class="token punctuation">[</span>root@hadoop101 ~<span class="token punctuation">]</span><span class="token comment"># cd -P dssz/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-总结" tabindex="-1"><a class="header-anchor" href="#_18-总结" aria-hidden="true">#</a> 18.总结</h2><h3 id="_18-1-文件剪贴删除复制重名等" tabindex="-1"><a class="header-anchor" href="#_18-1-文件剪贴删除复制重名等" aria-hidden="true">#</a> 18.1 文件剪贴删除复制重名等</h3><ul><li>pwd：Print Working Directory，显示当前工作目录的绝对路径。</li><li>ls：-a：显示当前目录所有的文件和目录，包括隐藏的； <ul><li>-l：以列表的方式显示信息。</li></ul></li><li>cd：cd ~：回到自己的家目录；cd …：回到当前目录的上一级目录。</li><li>mkdir：创建目录；-p：创建多级目录。</li><li>rmdir：删除空目录。rmdir不能删除非空的目录。如果需要删除非空的目录，需要使用rm -rf。</li><li>cp：拷贝文件到指定目录； <ul><li>-r：递归复制整个文件夹。强制覆盖不提示的方法：</li><li>cp命令改为\\cp</li></ul></li><li>rm：移除文件或目录； <ul><li>-r：递归删除整个文件夹；</li><li>-f：强制删除不提示。</li></ul></li><li>mv：移动文件与目录或重命名，两种功能！</li><li>touch：创建空文件。可以一次性创建多个文件</li><li>ln 给文件创建一个软连接 <ul><li>用法:ln -s [源文件或目录][软连接名]</li></ul></li></ul><h3 id="_18-2-文件查看" tabindex="-1"><a class="header-anchor" href="#_18-2-文件查看" aria-hidden="true">#</a> 18.2 文件查看</h3><ul><li>cat：查看文件内容。只能浏览文件，而不能修改文件。 <ul><li>-n：显示行号。</li><li>结尾加上 | more：分页显示，不会全部一下显示完。</li></ul></li><li>more：是一个基于VI编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more还内置了很多快捷键： <ul><li>空白键（Space）：向下翻一页</li><li>Enter：向下翻一行</li><li>q：立刻离开more，不再显示该文件内容</li><li>Ctrl + F：向下滚动一屏</li><li>Ctrl + B：返回上一屏</li><li>= :输出当前行的行号</li><li>:f 输出文件名和当前行的行号</li></ul></li><li>less：用来分屏查看文件内容，与more相似，但是更强大，支持各种显示终端。less指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容。对于显示大型文件具有较高的效率。</li><li>head：显示文件的开头部分。-n 5：看前面5行内容。</li><li>tail：输出文件中尾部的内容。 <ul><li>-n 5：看后面5行内容。</li><li>-f：时事追踪该文档的所有更新</li></ul></li><li>&gt;指令：输出重定向。如果不存在会创建文件，否则会将原来的文件内容覆盖。</li><li>&gt;&gt;指令：追加。如果不存在会创建文件，否则不会覆盖原来的文件内容，而是追加到文件的尾部。</li><li>echo：输出内容到控制台。</li><li>history：查看历史指令</li></ul>`,108);function y(q,N){const e=c("ExternalLinkIcon");return o(),i("div",null,[r,s("h2",d,[u,n(),s("a",m,[n("2.ls"),t(e)]),n(" 列出目录的内容")]),v,s("h2",b,[k,n(),s("a",h,[n("3.cd"),t(e)]),n(" 切换目录")]),g,s("h2",x,[w,n(),s("a",f,[n("9.mv"),t(e)]),n(" 移动文件与目录或重命名")]),_])}const z=l(p,[["render",y],["__file","05.html.vue"]]);export{z as default};

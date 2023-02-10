import{ab as i,G as a,H as e,ac as t}from"./framework-09305b5d.js";const g={},c=t('<h1 id="_06-【计算机网络-应用层】" tabindex="-1"><a class="header-anchor" href="#_06-【计算机网络-应用层】" aria-hidden="true">#</a> 06 【计算机网络-应用层】</h1><h2 id="_1-应用层概述" tabindex="-1"><a class="header-anchor" href="#_1-应用层概述" aria-hidden="true">#</a> 1.应用层概述</h2><figure><img src="https://article.biliimg.com/bfs/article/7a067ff7ed5f2a814f3c79dc8e1b2ff09d4fb917.png" alt="image-20201023195112701" tabindex="0" loading="lazy"><figcaption>image-20201023195112701</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/107b2834eb0dd39dc064b741df13662ef9a2e219.png" alt="image-20201023200511781" tabindex="0" loading="lazy"><figcaption>image-20201023200511781</figcaption></figure><p>我们在浏览器的地址中输入某个网站的域名后，就可以访问该网站的内容，这个就是<strong>万维网WWW应用</strong>，其相关的应用层协议为<strong>超文本传送协议HTTP</strong></p><figure><img src="https://article.biliimg.com/bfs/article/ac0a8a353cdc32b669e17edf23eddc532e2a3161.png" alt="image-20201023200819770" tabindex="0" loading="lazy"><figcaption>image-20201023200819770</figcaption></figure><p>用户在浏览器地址栏中输入的是“见名知意”的<strong>域名</strong>，而TCP/IP的网际层使用<strong>IP地址</strong>来表示目的主机，从域名到IP地址的装转换，由属于<strong>应用层范畴的域名系统DNS</strong>，在后台帮用户完成</p><figure><img src="https://article.biliimg.com/bfs/article/b05babe0bc0665e29b8328eeb5c834c2d698b84a.png" alt="image-20201023201028141" tabindex="0" loading="lazy"><figcaption>image-20201023201028141</figcaption></figure><p>常见的应用</p><figure><img src="https://article.biliimg.com/bfs/article/4430160818180c538bde81a48d5f728412bb00f5.png" alt="image-20201023201101024" tabindex="0" loading="lazy"><figcaption>image-20201023201101024</figcaption></figure><p>总结</p><figure><img src="https://article.biliimg.com/bfs/article/6a25eceda46b60664e040ab17e76ecad3da6219b.png" alt="image-20201023201137047" tabindex="0" loading="lazy"><figcaption>image-20201023201137047</figcaption></figure><h2 id="_2-客户-服务器方式-c-s方式-和对等方式-p2p方式" tabindex="-1"><a class="header-anchor" href="#_2-客户-服务器方式-c-s方式-和对等方式-p2p方式" aria-hidden="true">#</a> 2.客户/服务器方式（C/S方式）和对等方式（P2P方式）</h2><h3 id="_2-1-概念" tabindex="-1"><a class="header-anchor" href="#_2-1-概念" aria-hidden="true">#</a> 2.1 概念</h3><figure><img src="https://article.biliimg.com/bfs/article/69454720ceb19d7b2f75b464df5551997f291fc6.png" alt="image-20201023201308269" tabindex="0" loading="lazy"><figcaption>image-20201023201308269</figcaption></figure><h3 id="_2-2-客户-服务器方式-c-s方式" tabindex="-1"><a class="header-anchor" href="#_2-2-客户-服务器方式-c-s方式" aria-hidden="true">#</a> 2.2 客户/服务器方式（C/S方式）</h3><figure><img src="https://article.biliimg.com/bfs/article/3cd6f41ed422be7194fc09a451c71745ae84a6e0.png" alt="image-20201023201610088" tabindex="0" loading="lazy"><figcaption>image-20201023201610088</figcaption></figure><h3 id="_2-3-对等方式-p2p方式" tabindex="-1"><a class="header-anchor" href="#_2-3-对等方式-p2p方式" aria-hidden="true">#</a> 2.3 对等方式（P2P方式）</h3><figure><img src="https://article.biliimg.com/bfs/article/391c8c31503bd6a97c6e4bc9987e766b0f0921e2.png" alt="image-20201023202017683" tabindex="0" loading="lazy"><figcaption>image-20201023202017683</figcaption></figure><h3 id="_2-4-总结" tabindex="-1"><a class="header-anchor" href="#_2-4-总结" aria-hidden="true">#</a> 2.4 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/2afe2cf58cdbc42591616c3ee11396b3413b0473.png" alt="image-20201023202049202" tabindex="0" loading="lazy"><figcaption>image-20201023202049202</figcaption></figure><h2 id="_3-动态主机配置协议dhcp" tabindex="-1"><a class="header-anchor" href="#_3-动态主机配置协议dhcp" aria-hidden="true">#</a> 3.动态主机配置协议DHCP</h2><h3 id="_3-1-概念" tabindex="-1"><a class="header-anchor" href="#_3-1-概念" aria-hidden="true">#</a> 3.1 概念</h3><ul><li>互联网广泛使用的<strong>动态主机配置协议 DHCP</strong> (Dynamic Host Configuration Protocol) 提供了<strong>即插即用连网</strong> (plug-and-play networking) 的机制。</li><li>这种机制允许一台计算机加入新的网络和获取 IP 地址，而不用手工配置。</li></ul><h3 id="_3-2-dhcp的作用" tabindex="-1"><a class="header-anchor" href="#_3-2-dhcp的作用" aria-hidden="true">#</a> 3.2 DHCP的作用</h3><p>在之前，如果要正常访问Web服务器，需要该主机手动配置网络的相关配置信息</p><figure><img src="https://article.biliimg.com/bfs/article/e2ed42551a923d64d0816a427a8640188200f8c6.png" alt="image-20201023205719672" tabindex="0" loading="lazy"><figcaption>image-20201023205719672</figcaption></figure><blockquote><p>如果主机数很多，就工作量大，容易出错</p></blockquote><p>如果我们给网络中添加一台DHCP服务器</p><figure><img src="https://article.biliimg.com/bfs/article/a9435f198b5bb389f37ff3a3fd97d8a2774adc78.png" alt="image-20201023210345650" tabindex="0" loading="lazy"><figcaption>image-20201023210345650</figcaption></figure><h3 id="_3-3-dhcp的工作过程" tabindex="-1"><a class="header-anchor" href="#_3-3-dhcp的工作过程" aria-hidden="true">#</a> 3.3 DHCP的工作过程</h3><p><strong>DHCP 使用客户 - 服务器方式</strong></p><ul><li>需要 IP 地址的主机在启动时就向 DHCP 服务器广播发送发现报文 （DHCP DISCOVER），这时该主机就成为 DHCP 客户。</li><li>本地网络上所有主机都能收到此广播报文，但只有 DHCP 服务器才回答此广播报文。</li><li>DHCP 服务器先在其数据库中查找该计算机的配置信息。若找到，则返回找到的信息。若找不到，则从服务器的 IP 地址池 (address pool) 中取一个地址分配给该计算机。DHCP服务器的回答报文叫做提供报文（DHCP OFFER）。</li></ul><p><strong>DHCP 工作方式</strong></p><ul><li>DHCP 使用客户-服务器方式，采用请求/应答方式工作。</li><li>DHCP 基于 UDP 工作（DHCP报文在运输层会被封装成为UDP用户数据报），DHCP 服务器运行在 67 号端口， DHCP客户运行在 68 号端口。</li></ul><p><strong>DHCP交互过程</strong></p><figure><img src="https://article.biliimg.com/bfs/article/f6631476f91f09c2d4ef4abc72def2fa76aea4e1.png" alt="image-20201023211525686" tabindex="0" loading="lazy"><figcaption>image-20201023211525686</figcaption></figure><blockquote><p><strong>DHCP客户端将广播发送DHCP发现报文（DHCP DISCOVER）</strong></p><ul><li>事务ID</li><li>DHCP客户端的MAC地址</li></ul><p><strong>封装该报文的IP数据报的源IP地址为0.0.0.0，这是因为主机目前还未分配到IP地址</strong>，因此使用该地址代替</p><p><strong>目的IP地址为广播地址255.255.255.255，之所以广播发送，是因为主机现在并不知道网络中有哪几个DHCP服务器</strong>。它们的IP地址各是什么</p><p><strong>DHCP服务器收到DHCP发现报文后，根据其中封装的DHCP客户端的MAC地址来查找自己的数据库</strong>，如果查到匹配信息，则使用这些配置信息来构建并发送DHCP提供报文，如果没有则采用默认配置信息来构建报文并发送</p></blockquote><figure><img src="https://article.biliimg.com/bfs/article/8ba46bf8c4d0620d887629ed42454fd19323d5a9.png" alt="image-20201023213058543" tabindex="0" loading="lazy"><figcaption>image-20201023213058543</figcaption></figure><blockquote><p><strong>DHCP服务端将广播发送DHCP提供报文（DHCP OFFER）</strong></p><ul><li>事务ID：DHCP客户端会与之前DHCP发现报文的事务ID做对比，来判断该DHCP提供报文是否是自己的</li><li>配置信息： <ul><li>IP地址：DHCP服务器从自己的IP地址池中挑选待租用给主机的IP地址（使用ARP来确保所选IP地址未被网络中其他主机占用）</li><li>子网掩码</li><li>地址租期</li><li>默认网关</li><li>DNS服务器</li></ul></li></ul><p>源IP地址：发送DHCP提供报文的DHCP服务器的IP</p><p>目的地址：因为目的主机还没分配到IP，所以使用广播地址</p></blockquote><p>在本例中，DHCP客户会收到两个DHCP服务器发来的DHCP提供报文，DHCP客户从中选择一个，一般选择先到的，并向所选择的DHCP服务器发送DHCP请求报文</p><figure><img src="https://article.biliimg.com/bfs/article/c84533e1a201882d4c80d441eef0f3b592e78ccd.png" alt="image-20201023214542329" tabindex="0" loading="lazy"><figcaption>image-20201023214542329</figcaption></figure><blockquote><p><strong>DHCP客户端将广播发送DHCP请求报文（DHCP REQUEST）</strong></p><ul><li>事务ID</li><li>DHCP客户端的MAC地址</li><li>接收的租约中的IP地址</li><li>提供此租约的DHCP服务器端的IP地址</li></ul><p>源地址：0.0.0.0，因为此时DHCP客户才从多个DHCP服务器中挑选一个作为自己的DHCP服务器。它首先要征得该服务器的同意，之后才能正式使用向该DHCP服务器租用的IP地址</p><p>目的地址：广播地址，这样可以一次性向所有DHCP服务器发送DHCP请求报文，来告知它们是否请求它们作为自己的DHCP服务器</p></blockquote><p>在本例中，假设DHCP客户端选择DHCP服务器1作为自己的DHCP服务器，DHCP服务器1接受该请求，于是DHCP服务器1给DHCP客户端发送DHCP确认报文</p><figure><img src="https://article.biliimg.com/bfs/article/1fa8336596f4b959a6505aa10192ec98b390eca5.png" alt="image-20201023215341522" tabindex="0" loading="lazy"><figcaption>image-20201023215341522</figcaption></figure><blockquote><p>源地址：DHCP服务器1的IP地址</p><p>目的地址：广播地址</p><p><strong>DHCP客户收到该报文后就可以使用租用的IP地址</strong></p><p><strong>在使用前还会进行ARP检测</strong></p><figure><img src="https://article.biliimg.com/bfs/article/9fa28b2ff711b115a4ada7d4767cf20977790ed4.png" alt="image-20201023215652859" tabindex="0" loading="lazy"><figcaption>image-20201023215652859</figcaption></figure></blockquote><p>剩下流程图示</p><figure><img src="https://article.biliimg.com/bfs/article/5bde5134044b7704ad27735b4d3c69d63c939dd8.png" alt="image-20201023220114952" tabindex="0" loading="lazy"><figcaption>image-20201023220114952</figcaption></figure><h3 id="_3-4-dhcp中继代理" tabindex="-1"><a class="header-anchor" href="#_3-4-dhcp中继代理" aria-hidden="true">#</a> 3.4 DHCP中继代理</h3><p>下图的网络拓扑中的各主机是否可以通过DHCP来自动获取到网络配置？</p><figure><img src="https://article.biliimg.com/bfs/article/755a110ae3d18c57cd4ed8c14b749b1c6c11f8e5.png" alt="image-20201023221111923" tabindex="0" loading="lazy"><figcaption>image-20201023221111923</figcaption></figure><blockquote><p>使用DHCP中继代理是因为我们不用给每一个网络上都设置一个DHCP服务器，这样会使DHCP服务器的数量太多</p></blockquote><h3 id="_3-5-总结" tabindex="-1"><a class="header-anchor" href="#_3-5-总结" aria-hidden="true">#</a> 3.5 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/55e34681dfe1292c168b72a8976335f96ec80edf.png" alt="image-20201023221251022" tabindex="0" loading="lazy"><figcaption>image-20201023221251022</figcaption></figure><h2 id="_4-域名系统dns" tabindex="-1"><a class="header-anchor" href="#_4-域名系统dns" aria-hidden="true">#</a> 4.域名系统DNS</h2><h3 id="_4-1-概述" tabindex="-1"><a class="header-anchor" href="#_4-1-概述" aria-hidden="true">#</a> 4.1 概述</h3><p>域名相比IP地址更容易记忆</p><figure><img src="https://article.biliimg.com/bfs/article/77af2c54eeb5b87f4be5aa46b9241488881d15bc.png" alt="image-20201023234832678" tabindex="0" loading="lazy"><figcaption>image-20201023234832678</figcaption></figure><p>因特网是否可以只使用一台DNS服务器？</p><p>不行</p><figure><img src="https://article.biliimg.com/bfs/article/f71963f7024eece58fbb9e926c4856bd41c11b19.png" alt="image-20201023235123151" tabindex="0" loading="lazy"><figcaption>image-20201023235123151</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/fbb9f4c876a9fcbb68e209f3c285554ad48ca252.png" alt="image-20201023235231869" tabindex="0" loading="lazy"><figcaption>image-20201023235231869</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/7961b69efb3935b9b6120c8821af721458abc685.png" alt="image-20201023235457857" tabindex="0" loading="lazy"><figcaption>image-20201023235457857</figcaption></figure><blockquote><p>名称相同的域名其等级未必相同</p></blockquote><figure><img src="https://article.biliimg.com/bfs/article/0c173d2ef4a174d3ef4a8e24064388c9003367f7.png" alt="image-20201023235617575" tabindex="0" loading="lazy"><figcaption>image-20201023235617575</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/469b16834236d72959fb2ffa8115641659cc8dac.png" alt="image-20201023235910545" tabindex="0" loading="lazy"><figcaption>image-20201023235910545</figcaption></figure><h3 id="_4-2-域名解析过程" tabindex="-1"><a class="header-anchor" href="#_4-2-域名解析过程" aria-hidden="true">#</a> 4.2 域名解析过程</h3><figure><img src="https://article.biliimg.com/bfs/article/35f8dc93bcb4d5ec3ea9bd2deaf65aafc3d95b63.png" alt="image-20201024000255580" tabindex="0" loading="lazy"><figcaption>image-20201024000255580</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/d1786f608a834df805af565f1cae25c311fca9c4.png" alt="image-20201024000335147" tabindex="0" loading="lazy"><figcaption>image-20201024000335147</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/1e764e2458e6504ca05c008a95a8be0f329f345a.png" alt="image-20201024000408396" tabindex="0" loading="lazy"><figcaption>image-20201024000408396</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/0d155528277be957f3042dc62ae1bb3b35a1143c.png" alt="image-20201024002135210" tabindex="0" loading="lazy"><figcaption>image-20201024002135210</figcaption></figure><h3 id="_4-3-总结" tabindex="-1"><a class="header-anchor" href="#_4-3-总结" aria-hidden="true">#</a> 4.3 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/02bd5d23ec91e30eebabb14616f5f5eb46298a52.png" alt="image-20201024002224354" tabindex="0" loading="lazy"><figcaption>image-20201024002224354</figcaption></figure><h2 id="_5-文件传送协议ftp" tabindex="-1"><a class="header-anchor" href="#_5-文件传送协议ftp" aria-hidden="true">#</a> 5.文件传送协议FTP</h2><h3 id="_5-1-概念" tabindex="-1"><a class="header-anchor" href="#_5-1-概念" aria-hidden="true">#</a> 5.1 概念</h3><figure><img src="https://article.biliimg.com/bfs/article/8cbb06251862b22d326c57f317e42d28e6caec90.png" alt="image-20201024132745558" tabindex="0" loading="lazy"><figcaption>image-20201024132745558</figcaption></figure><h3 id="_5-2-文件传送协议ftp的应用" tabindex="-1"><a class="header-anchor" href="#_5-2-文件传送协议ftp的应用" aria-hidden="true">#</a> 5.2 文件传送协议FTP的应用</h3><p>FTP采用C/S方式（客户/服务器方式）</p><p>FTP客户计算机可将各种类型的文件上传到FTP服务器计算机</p><img src="https://article.biliimg.com/bfs/article/c3cf82c93a5bea8596e92c7b4968f7abb5fa03aa.png" alt="image-20201024133155327" style="zoom:50%;"><p>FTP客户计算机也可以从FTP服务器计算机下载文件</p><img src="https://article.biliimg.com/bfs/article/de9e5ae40ad55f5906e543addc0556f100bcb2a2.png" alt="image-20201024133247537" style="zoom:50%;"><figure><img src="https://article.biliimg.com/bfs/article/7f92dbfb1ef29797b9cf9962b74e2a2d7b2793d2.png" alt="image-20201024133400777" tabindex="0" loading="lazy"><figcaption>image-20201024133400777</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/58a99bbcf3eb7f53aedbb7e10f38d67f68732291.png" alt="image-20201024133601943" tabindex="0" loading="lazy"><figcaption>image-20201024133601943</figcaption></figure><h3 id="_5-3-ftp基本工作原理" tabindex="-1"><a class="header-anchor" href="#_5-3-ftp基本工作原理" aria-hidden="true">#</a> 5.3 FTP基本工作原理</h3><p>FTP服务器监听熟知端口（端口号为 21），使客户进程能够连接上。</p><p>FTP客户随机选择一个临时端口号与其建立TCP连接，这条TCP连接用于FTP客户与服务器之间传送FTP的相关控制命令（这条连接是FTP客户与服务器之间的命令通道）</p><figure><img src="https://article.biliimg.com/bfs/article/1fb4b0253cdcf252355fd95fd84e98cfa63a6369.png" alt="image-20201024134319922" tabindex="0" loading="lazy"><figcaption>image-20201024134319922</figcaption></figure><p>下图为建立数据通道的TCP连接</p><p>FTP服务器使用自己的熟知端口号20与其建立TCP连接，这条TCP连接用于FTP客户与服务器之间传送文件</p><figure><img src="https://article.biliimg.com/bfs/article/f394a1d54bab7d7e91168e6314628c5a519a1b02.png" alt="image-20201024134624114" tabindex="0" loading="lazy"><figcaption>image-20201024134624114</figcaption></figure><blockquote><p>上面例子是主动模式：建立数据通道时，FTP服务器主动连接FTP客户</p></blockquote><p>下图实例为被动模式</p><img src="https://article.biliimg.com/bfs/article/473851153daafb4e79a97bf2c5d9f8f9cb2eb05e.png" alt="image-20201024135018620" style="zoom:67%;"><p>两种模式对比</p><figure><img src="https://article.biliimg.com/bfs/article/5864c7ac1834c3fabcc24251aacd12cba6962504.png" alt="image-20201024135050743" tabindex="0" loading="lazy"><figcaption>image-20201024135050743</figcaption></figure><blockquote><p>注意两种模式都是</p><p>控制连接在整个会话期间保持打开状态</p><p>数据连接传输完毕后就关闭</p></blockquote><h3 id="_5-4-总结" tabindex="-1"><a class="header-anchor" href="#_5-4-总结" aria-hidden="true">#</a> 5.4 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/1b3285f1d1fa759b39a3499c372c99c1aba61176.png" alt="image-20201024135848563" tabindex="0" loading="lazy"><figcaption>image-20201024135848563</figcaption></figure><h2 id="_6-电子邮件" tabindex="-1"><a class="header-anchor" href="#_6-电子邮件" aria-hidden="true">#</a> 6.电子邮件</h2><h3 id="_6-1-概念" tabindex="-1"><a class="header-anchor" href="#_6-1-概念" aria-hidden="true">#</a> 6.1 概念</h3><figure><img src="https://article.biliimg.com/bfs/article/b8244f53f3e14805fc7eb4d63e9e1a0955135a10.png" alt="image-20201024151757221" tabindex="0" loading="lazy"><figcaption>image-20201024151757221</figcaption></figure><h3 id="_6-2-邮件发送和接收过程" tabindex="-1"><a class="header-anchor" href="#_6-2-邮件发送和接收过程" aria-hidden="true">#</a> 6.2 邮件发送和接收过程</h3><figure><img src="https://article.biliimg.com/bfs/article/990578bfce9796f8107b2148d163fa3dd8808c11.png" alt="image-20201024152052056" tabindex="0" loading="lazy"><figcaption>image-20201024152052056</figcaption></figure><h3 id="_6-3-简单邮件传送协议smtp-simple-mail-transfer-protocol-的基本工作原理" tabindex="-1"><a class="header-anchor" href="#_6-3-简单邮件传送协议smtp-simple-mail-transfer-protocol-的基本工作原理" aria-hidden="true">#</a> 6.3 简单邮件传送协议SMTP（Simple Mail Transfer Protocol）的基本工作原理</h3><figure><img src="https://article.biliimg.com/bfs/article/01ad4d6abf564c8ee1463e7817c784e82a32b044.png" alt="image-20201024152628966" tabindex="0" loading="lazy"><figcaption>image-20201024152628966</figcaption></figure><h3 id="_6-4-电子邮件的信息格式" tabindex="-1"><a class="header-anchor" href="#_6-4-电子邮件的信息格式" aria-hidden="true">#</a> 6.4 电子邮件的信息格式</h3><figure><img src="https://article.biliimg.com/bfs/article/3ce616adc58f3fca06e013778d22fb8a5d627373.png" alt="image-20201024153425016" tabindex="0" loading="lazy"><figcaption>image-20201024153425016</figcaption></figure><h3 id="_6-5-邮件读取" tabindex="-1"><a class="header-anchor" href="#_6-5-邮件读取" aria-hidden="true">#</a> 6.5 邮件读取</h3><figure><img src="https://article.biliimg.com/bfs/article/4edfb716c513dbed221e0592ddea29ddaf489957.png" alt="image-20201024153736033" tabindex="0" loading="lazy"><figcaption>image-20201024153736033</figcaption></figure><h3 id="_6-6-基于万维网的电子邮件" tabindex="-1"><a class="header-anchor" href="#_6-6-基于万维网的电子邮件" aria-hidden="true">#</a> 6.6 基于万维网的电子邮件</h3><figure><img src="https://article.biliimg.com/bfs/article/e3ba29b0d7e555b6b0978b1e8f5c6e68846e739a.png" alt="image-20201024154039565" tabindex="0" loading="lazy"><figcaption>image-20201024154039565</figcaption></figure><h3 id="_6-7-总结" tabindex="-1"><a class="header-anchor" href="#_6-7-总结" aria-hidden="true">#</a> 6.7 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/957aff7ecaf9ec415b39abafd00b716f32b7b722.png" alt="image-20201024154744175" tabindex="0" loading="lazy"><figcaption>image-20201024154744175</figcaption></figure><h2 id="_7-万维网www" tabindex="-1"><a class="header-anchor" href="#_7-万维网www" aria-hidden="true">#</a> 7.万维网WWW</h2><h3 id="_7-1-概念" tabindex="-1"><a class="header-anchor" href="#_7-1-概念" aria-hidden="true">#</a> 7.1 概念</h3><p><strong>概述</strong></p><ul><li><strong>万维网</strong> WWW (World Wide Web) 并非某种特殊的计算机网络。</li><li>万维网是一个大规模的、联机式的<strong>信息储藏所</strong>。</li><li>万维网用链接的方法能非常方便地从互联网上的一个站点访问另一个站点，从而主动地按需获取丰富的信息。</li><li>这种访问方式称为“<strong>链接</strong>”。</li></ul><p><strong>万维网的工作方式</strong></p><ul><li>万维网以<strong>客户 - 服务器</strong>方式工作。</li><li><strong>浏览器</strong>就是在用户计算机上的万维网<strong>客户程序</strong>。万维网文档所驻留的计算机则运行<strong>服务器程序</strong>，因此这个计算机也称为<strong>万维网服务器</strong>。</li><li>客户程序向服务器程序发出请求，服务器程序向客户程序送回客户所要的<strong>万维网文档</strong>。</li><li>在一个客户程序主窗口上显示出的万维网文档称为<strong>页面</strong> (page)。</li></ul><figure><img src="https://article.biliimg.com/bfs/article/741207c25abd283ee6ffa9e4ee36bb26a2eae7d4.png" alt="image-20201024170819303" tabindex="0" loading="lazy"><figcaption>image-20201024170819303</figcaption></figure><figure><img src="https://article.biliimg.com/bfs/article/ca655f7df0d91200596ccc85529f7a3a6a1557a0.png" alt="image-20201024171432743" tabindex="0" loading="lazy"><figcaption>image-20201024171432743</figcaption></figure><p><strong>万维网应用举例</strong></p><p>访问网页</p><figure><img src="https://article.biliimg.com/bfs/article/d2a54a46502f4afb2a7b451b5c17fe2c083e561b.png" alt="image-20201024170923530" tabindex="0" loading="lazy"><figcaption>image-20201024170923530</figcaption></figure><p><strong>怎样标志分布在整个互联网上的万维网文档？</strong></p><figure><img src="https://article.biliimg.com/bfs/article/3ab1d7ef0ddd42551fb2a1ffce6040f31fa9a8e6.png" alt="image-20201024171058583" tabindex="0" loading="lazy"><figcaption>image-20201024171058583</figcaption></figure><p><strong>万维网的文档</strong></p><figure><img src="https://article.biliimg.com/bfs/article/3de1b148b0a6ba5d7e2af512959753c533788dc0.png" alt="image-20201024171724030" tabindex="0" loading="lazy"><figcaption>image-20201024171724030</figcaption></figure><h3 id="_7-2-超文本传输协议http-hyper-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#_7-2-超文本传输协议http-hyper-transfer-protocol" aria-hidden="true">#</a> 7.2 超文本传输协议HTTP（Hyper Transfer Protocol）</h3><h4 id="概念和传输过程" tabindex="-1"><a class="header-anchor" href="#概念和传输过程" aria-hidden="true">#</a> 概念和传输过程</h4><ul><li>在万维网客户程序与万维网服务器程序之间进行交互所使用的协议，是<strong>超文本传送协议</strong> HTTP (HyperText Transfer Protocol)。</li><li>HTTP 是一个应用层协议，它使用 TCP 连接进行可靠的传送。</li></ul><figure><img src="https://article.biliimg.com/bfs/article/0cfaf51d59e9cb0c85dd82e67b7425a7c36f9c8d.png" alt="image-20201024222457800" tabindex="0" loading="lazy"><figcaption>image-20201024222457800</figcaption></figure><ul><li>每个万维网网点都有一个服务器进程，它不断地<strong>监听 TCP 的端口 80</strong>，以便发现是否有浏览器向它发出连接建立请求。</li><li>一旦监听到连接建立请求并建立了 TCP 连接之后，浏览器就向万维网服务器发出浏览某个页面的请求，服务器接着就返回所请求的页面作为响应。</li><li>最后，TCP 连接就被释放了。</li></ul><figure><img src="https://article.biliimg.com/bfs/article/5701649ac0b1afdb5539a54d0c87e6f4d63a65d2.png" alt="image-20201024222825888" tabindex="0" loading="lazy"><figcaption>image-20201024222825888</figcaption></figure><h4 id="http报文格式" tabindex="-1"><a class="header-anchor" href="#http报文格式" aria-hidden="true">#</a> HTTP报文格式</h4><p><strong>HTTP请求报文格式</strong></p><figure><img src="https://article.biliimg.com/bfs/article/e970a7fc735a271dfec588b43acd001fc8f11ca6.png" alt="image-20201024224828528" tabindex="0" loading="lazy"><figcaption>image-20201024224828528</figcaption></figure><p><strong>HTTP响应报文格式</strong></p><figure><img src="https://article.biliimg.com/bfs/article/1ce1f6b993e830dfb149b3cb77692e1d5ea743b4.png" alt="image-20201024224920638" tabindex="0" loading="lazy"><figcaption>image-20201024224920638</figcaption></figure><h4 id="使用cookie在服务器上记录用户信息" tabindex="-1"><a class="header-anchor" href="#使用cookie在服务器上记录用户信息" aria-hidden="true">#</a> 使用Cookie在服务器上记录用户信息</h4><figure><img src="https://article.biliimg.com/bfs/article/7369851d2ee3978ac817f60655ec4c606fa0ede8.png" alt="image-20201024224945200" tabindex="0" loading="lazy"><figcaption>image-20201024224945200</figcaption></figure><h4 id="万维网缓存与代理服务器" tabindex="-1"><a class="header-anchor" href="#万维网缓存与代理服务器" aria-hidden="true">#</a> 万维网缓存与代理服务器</h4><figure><img src="https://article.biliimg.com/bfs/article/0829ae41fe6ec2b2e7b8a764db4399e89c0f40d5.png" alt="image-20201024224632514" tabindex="0" loading="lazy"><figcaption>image-20201024224632514</figcaption></figure><p>如果该请求有缓存</p><figure><img src="https://article.biliimg.com/bfs/article/65074134d07a40c4e12be4398799a12922c8cb00.png" alt="image-20201024224720124" tabindex="0" loading="lazy"><figcaption>image-20201024224720124</figcaption></figure><p>如果该请求没有缓存</p><figure><img src="https://article.biliimg.com/bfs/article/c6f1d58cd21eae63bf65d1120328e2287c6cb0c5.png" alt="image-20201024225013288" tabindex="0" loading="lazy"><figcaption>image-20201024225013288</figcaption></figure><blockquote><p>若WEb缓存的命中率比较高</p><p>则会大大减小了该链路上的通信量，因而减少了访问因特网的时延</p></blockquote><p>假设原始服务器的文档被更改，这样代理服务器的文档就不是最新的</p><p>所以原始服务器通常会为每个响应的对象设定一个<strong>修改时间字段</strong>和一个<strong>有效日期字段</strong></p><p>若未过期</p><figure><img src="https://article.biliimg.com/bfs/article/61274f1628c98e4eca5f88ce3b77dbee01719503.png" alt="image-20201024225504869" tabindex="0" loading="lazy"><figcaption>image-20201024225504869</figcaption></figure><p>若过期并且代理服务器的文档和原始服务器的<strong>文档一致</strong>，原始服务器则给代理服务器发送不包含实体主体的响应</p><figure><img src="https://article.biliimg.com/bfs/article/81cfa2c7ea76840cb49c3320f01beeffab6bf83c.png" alt="image-20201024225846863" tabindex="0" loading="lazy"><figcaption>image-20201024225846863</figcaption></figure><p>若过期并且代理服务器的文档和原始服务器的<strong>文档不一致</strong>，原始服务器则给代理服务器发送封装有该文档的响应报文</p><figure><img src="https://article.biliimg.com/bfs/article/18c58e3c8cded08a7d4e1e32014aaf4cdc5f9f91.png" alt="image-20201024230242550" tabindex="0" loading="lazy"><figcaption>image-20201024230242550</figcaption></figure><h3 id="_7-3-总结" tabindex="-1"><a class="header-anchor" href="#_7-3-总结" aria-hidden="true">#</a> 7.3 总结</h3><figure><img src="https://article.biliimg.com/bfs/article/90c80da9e178c821def658cb665dc8745389accd.png" alt="image-20201024231143505" tabindex="0" loading="lazy"><figcaption>image-20201024231143505</figcaption></figure>',159),r=[c];function l(f,n){return a(),e("div",null,r)}const o=i(g,[["render",l],["__file","06.html.vue"]]);export{o as default};

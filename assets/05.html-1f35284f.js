import{ab as p,G as a,H as e,ac as t}from"./framework-09305b5d.js";const i={},r=t('<h1 id="_05-【详细设计】" tabindex="-1"><a class="header-anchor" href="#_05-【详细设计】" aria-hidden="true">#</a> 05 【详细设计】</h1><p>根本目标：确定应该怎样具体地实现所要求的系统。</p><p>详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。</p><p>详细设计的结果基本上决定了最终的程序代码的质量。</p><h2 id="_1-结构程序设计" tabindex="-1"><a class="header-anchor" href="#_1-结构程序设计" aria-hidden="true">#</a> 1.结构程序设计</h2><p><strong>定义</strong></p><ul><li>结构化程序设计采用<strong>自顶向下、逐步求精</strong>的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。</li><li>结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。</li><li>如果一个程序的代码块仅仅通过<strong>顺序、选择和循环</strong>这3 种基本控制结构进行连接，并且<strong>每个代码块只有一个入口和一个出口，则称这个程序是结构化的。</strong></li></ul><p>下图中（a）为顺序结构，（b）为 IF-THEN-ELSE选择（分支）结构，（c）为 DO-WHILE 型循环结构。</p><img src="https://article.biliimg.com/bfs/article/4679a39979aaf136e2b8188981027f3900606127.png" alt="image-20230204202851564" style="zoom:80%;"><p>图（a）为 DO - UNTIL型循环结构，（b）多分支结构。</p><img src="https://article.biliimg.com/bfs/article/0125ed0548599e728d1937614426eec124c7d68f.png" alt="image-20230204202907613" style="zoom:50%;"><h2 id="_2-人机界面设计" tabindex="-1"><a class="header-anchor" href="#_2-人机界面设计" aria-hidden="true">#</a> 2.人机界面设计</h2><p>人机界面设计是接口设计的重要组成部分。对于交互式系统来说，人机界面设计和数据设计、体系结构设计及过程设计一样重要。（可参考概要设计）。</p><h3 id="_2-1-设计问题" tabindex="-1"><a class="header-anchor" href="#_2-1-设计问题" aria-hidden="true">#</a> 2.1 设计问题</h3><p>设计人机界面过程中会遇到的4 个问题：系统响应时间、用户帮助设施、出错信息处理、命令交互。</p><p><strong>① 系统响应时间。</strong></p><p>系统响应时间指从用户完成某个控制动作(例如，按回车键或单击鼠标)，到软件给出预期的响应(输出信息或做动作)之间的这段时间。</p><p>系统响应时间有两个重要属性，分别是长度和易变性。</p><p>1）长度：时间过长，用户就会感到紧张，过短，加快用</p><p>户操作节奏，可能会犯错误</p><p>2）易变性：系统响应时间相对于平均响应时间的偏差</p><p>即使系统响应时间较长，响应时间易变性低也有助于用</p><p>户建立起稳定的工作节奏。</p><p><strong>② 用户帮助设施。</strong></p><p>常见的帮助设施可分为集成的和附加的两类。</p><p>具体设计帮助设施时，必须解决下述的一系列问题。</p><p>(1)在用户与系统交互期间，是否在任何时候都能获得关于系统任何功能的帮助信息?有两种选择：提供部分功能的帮助信息和提供全部功能的帮助信息。</p><p>(2)用户怎样请求帮助?有3种选择：帮助菜单，特殊功能键和HELP命令。</p><p>(3)怎样显示帮助信息?有3种选择：在独立的窗口中，指出参考某个文档(不理想)和在屏幕固定位置显示简短提示。</p><p>(4)用户怎样返回到正常的交互方式中?有两种选择：屏幕上的返回按钮和功能键。</p><p>(5)怎样组织帮助信息?有3种选择：平面结构，信息的层次结构和超文本结构。</p><p><strong>③ 出错信息处理。</strong></p><p>出错信息和警告信息，是出现问题时交互式系统给出的“坏消息”。一般说来，交互式系统给出的出错信息或警告信息，具有下述属性。</p><p>(1) 用用户可以理解的术语描述问题。</p><p>(2) 提供有助于从错误中恢复的建设性意见。</p><p>(3) 指出错误可能导致哪些负面后果(例如，破坏数据文件)，以便用户检查是否出现了这些问题，并在确实出现问题时及时解决。</p><p>(4) 伴随着听觉上或视觉上的提示</p><p>(5) 不能带有指责色彩，不能责怪用户。</p><p><strong>④ 命令交互。</strong></p><p>许多高级用户仍然偏爱面向命令行的交互方式</p><p>在提供命令交互方式时，必须考虑下列设计问题。</p><p>(1) 是否每个菜单选项都有对应的命令?</p><p>(2) 采用何种命令形式?有3种选择：控制序列(例如，Ctrl+P)，功能键和输入命令。</p><p>(3) 学习和记忆命令的难度有多大?忘记了命令怎么办?</p><p>(4) 用户是否可以定制或缩写命令?</p><p>在越来越多的应用软件中，人机界面设计者都提供了“命令宏机制”。</p><p>在理想的情况下，所有应用软件都有一致的命令使用方法。</p><h3 id="_2-2-设计过程" tabindex="-1"><a class="header-anchor" href="#_2-2-设计过程" aria-hidden="true">#</a> 2.2 设计过程</h3><p>用户界面设计是一个迭代的过程，通常先创建设计模型，再用原型实现这个设计模型，并由用户试用和评估，然后根据用户意见进行修改。</p><p>建立起用户界面的原型，就必须对它进行评估，评估可以是非正式的也可以使正式的。</p><img src="https://article.biliimg.com/bfs/article/5a0223d7999f895a524c1a630bc28e862d5b8bc7.png" alt="image-20230204203236964" style="zoom:67%;"><p>创建了用户界面的设计模型之后，可以运用下述评估标准对设计进行早期复审。</p><p>(1) 系统及其界面的规格说明书的长度和复杂程度，预示了用户学习使用该系统所需要的工作量。</p><p>(2) 命令或动作的数量、命令的平均参数个数或动作中单个操作的个数，预示了系统的交互时间和总体效率。</p><p>(3) 设计模型中包含的动作、命令和系统状态的数量，预示了用户学习使用该系统时需要记忆的内容的多少。</p><p>(4) 界面风格、帮助设施和出错处理协议，预示了界面的复杂程度及用户接受该界面的程度。</p><h3 id="_2-3-人机界面设计指南" tabindex="-1"><a class="header-anchor" href="#_2-3-人机界面设计指南" aria-hidden="true">#</a> 2.3 人机界面设计指南</h3><p><strong>① 一般交互指南</strong>：涉及信息显示、数据输入和系统整体控制</p><p>(1)保持一致性。</p><p>(2)提供有意义的反馈。</p><p>(3)在执行有较大破坏性的动作之前要求用户确认。</p><p>(4)允许取消绝大多数操作。</p><p>(5)减少在两次操作之间必须记忆的信息量。</p><p>(6)提高对话、移动和思考的效率。</p><p>(7)允许犯错误。</p><p>(8)按功能对动作分类，并据此设计屏幕布局。</p><p>(9)提供对用户工作内容敏感的帮助设施</p><p>(10)用简单动词或动词短语作为命令名。</p><p>创建了用户界面的设计模型之后，可以运用下述评估标准对设计进行早期复审。</p><p>(1) 系统及其界面的规格说明书的长度和复杂程度，预示了用户学习使用该系统所需要的工作量。</p><p>(2) 命令或动作的数量、命令的平均参数个数或动作中单个操作的个数，预示了系统的交互时间和总体效率。</p><p>(3) 设计模型中包含的动作、命令和系统状态的数量，预示了用户学习使用该系统时需要记忆的内容的多少。</p><p>(4) 界面风格、帮助设施和出错处理协议，预示了界面的复杂程度及用户接受该界面的程度。</p><p><strong>② 信息显示指南</strong>：多种不同方式“显示”信息：用文字、图形和声音；按位置、移动和大小；使用颜色、分辨率和省略。</p><p>(1)只显示与当前工作内容有关的信息。</p><p>(2)不要用数据淹没用户，应该用便于用户迅速吸取信息的方式来表示数据。</p><p>(3)使用一致的标记、标准的缩写和可预知的颜色。</p><p>(4)允许用户保持可视化的语境。</p><p>(5)产生有意义的出错信息。</p><p>(6)使用大小写、缩进和文本分组以帮助理解。</p><p>(7)使用窗口分隔不同类型的信息。</p><p>(8)使用“模拟”显示方式表示信息，以使信息更容易被用户提取。</p><p>(9) 高效率地使用显示屏。</p><p><strong>③ 数据输入指南</strong>：用户的大部分时间用在选择命令、输入数据和向系统提供输入。</p><p>(1)尽量减少用户的输入动作。</p><p>(2)保持信息显示和数据输入之间的一致性。</p><p>(3)允许用户自定义输入。</p><p>(4)交互应该是灵活的，并且可调整成用户最喜欢的输入方式。</p><p>(5)使在当前动作语境中不适用的命令不起作用。</p><p>(6)让用户控制交互流。</p><p>(7)对所有输入动作都提供帮助。</p><p>(8)消除冗余的输入。</p><p>(9) 高效率地使用显示屏。</p><h2 id="_3-详细设计工具" tabindex="-1"><a class="header-anchor" href="#_3-详细设计工具" aria-hidden="true">#</a> 3.详细设计工具</h2><table><thead><tr><th>工具名</th><th>主要优点</th><th>主要缺点</th></tr></thead><tbody><tr><td>程序流程图</td><td>简单直观</td><td>不考虑全局；不易表示数据结构</td></tr><tr><td>盒图(N-S图)</td><td>考虑全局；作用域明确</td><td>不易绘制和修改</td></tr><tr><td>PAD图</td><td>清晰表现逻辑结构、数据结构；有直接转换工具</td><td>~</td></tr><tr><td>判定表</td><td>清晰表现动作关系</td><td>含义复杂；不够简洁</td></tr><tr><td>判定树</td><td>形式简单</td><td>简洁性比判定表还要差</td></tr><tr><td>过程设计语言PDL</td><td>便于保持文档和程序一致性；便于数据结构说明</td><td>不直观</td></tr></tbody></table><h3 id="_3-1-程序流程图" tabindex="-1"><a class="header-anchor" href="#_3-1-程序流程图" aria-hidden="true">#</a> 3.1 程序流程图</h3><p><strong>程序流程图又称为程序框图</strong>，它是使用最广泛的描述过程设计的方法。程序流程图中使用的符号(a) 选择(分支)； (b) 注释； (c) 预先定义的处理； (d) 多分支； (e) 开始或停止； (f) 准备； (g) 循环上界限； (h) 循环下界限； (i) 虚线； (j) 省略符； (k) 并行方式； (l) 处理； (m) 输入输出； (n) 连接； (o) 换页连接； (p) 控制流</p><img src="https://article.biliimg.com/bfs/article/31dd27f9fd95c17d350e81a749591a4b0b0d89ab.png" alt="image-20230204203735474" style="zoom:67%;"><p>总的趋势是越来越多的人不再使用程序流程图了。</p><p>程序流程图的主要缺点如下。</p><p>(1) 程序流程图本质上不是逐步求精的好工具，它诱使程序员过早地考虑程序的控制流程，而不去考虑程序的全局结构。</p><p>(2) 程序流程图中用箭头代表控制流，因此程序员不受任何约束，可以完全不顾结构程序设计的精神，随意转移控制。</p><p>(3) 程序流程图不易表示数据结构。</p><h3 id="_3-2-盒图-n-s图" tabindex="-1"><a class="header-anchor" href="#_3-2-盒图-n-s图" aria-hidden="true">#</a> 3.2 盒图(N-S图）</h3><p>出于要有一种不允许违背结构程序设计精神的图形工具的考虑，Nassi和Shneiderman提出了盒图，又称为N-S图。它有下述特点。</p><p>(1) 功能域(即一个特定控制结构的作用域)明确，可以从盒图上一眼就看出来。</p><p>(2) 不可能任意转移控制。</p><p>(3) 很容易确定局部和全程数据的作用域。</p><p>(4) 很容易表现嵌套关系，也可以表示模块的层次结构。</p><p>图给出了结构化控制结构的盒图表示，也给出了调用子程序的盒图表示方法。其中</p><p>基本符号：(a) 顺序； (b) IF_THEN_ELSE型分支； (c) CASE型多分支； (d) 循环； (e) 调用子程序A</p><img src="https://article.biliimg.com/bfs/article/ea929a0fed215d23441ba625a079237f383e7c18.png" alt="image-20230204204704318" style="zoom:50%;"><h3 id="_3-3-pad图" tabindex="-1"><a class="header-anchor" href="#_3-3-pad图" aria-hidden="true">#</a> 3.3 PAD图</h3><p>PAD是问题分析图(problem analysis diagram)的英文缩写，用二维树形结构的图来表示程序的控制流。</p><p>基本符号</p><p>(a) 顺序(先执行P1后执行P2)；</p><p>(b) 选择(IF C THEN P1 ELSE P2);</p><p>(c) CASE型多分支；</p><p>(d) WHILE型循环(WHILE C DO P);</p><p>(e) UNTIL型循环(REPEAT P UNTIL C)；</p><p>(f) 语句标号；</p><p>(g) 定义</p><figure><img src="https://article.biliimg.com/bfs/article/99ab14e9437efd42d67b4113e8e53ca15402a018.png" alt="image-20230204204838150" tabindex="0" loading="lazy"><figcaption>image-20230204204838150</figcaption></figure><p>PAD图的主要优点如下：</p><p>(1) 使用表示结构化控制结构的PAD符号所设计出来的程序必然是结构化程序。</p><p>(2) PAD图所描绘的程序结构十分清晰。</p><p>(3) 用PAD图表现程序逻辑，易读、易懂、易记。</p><p>(4) 容易将PAD图转换成高级语言源程序，这种转换可 用软</p><p>件工具自动完成，从而可省去人工编码的工作，有利于提高</p><p>软件可靠性和软件生产率。</p><p>(5) 即可用于表示程序逻辑，也可用于描绘数据结构。</p><p>(6) PAD图的符号支持自顶向下、逐步求精方法的使用。</p><h3 id="_3-4-判定表" tabindex="-1"><a class="header-anchor" href="#_3-4-判定表" aria-hidden="true">#</a> 3.4 判定表</h3><p>判定表能够清晰地表示复杂的条件组合与应做的动作之间的对应关系。</p><p>判定表由4部分组成</p><ul><li>左上部列出所有条件</li><li>左下部是所有可能做的动作</li><li>右上部是表示各种条件组合的一个矩阵</li><li>右下部是和每种条件组合相对应的动作</li></ul><p>判定表右半部的每一列实质上是一条规则，规定了与特定的条件组合相对应的动作。</p><blockquote><p>优点： 能清晰地表示复杂的条件组合与应做的动作之间的对应关系。</p><p>缺点： 1.含义无法一眼看出，需要有一个简短的学习过程。 2.当数据元素的值多于两个时，判定表的简洁程度也将下降。</p></blockquote><h3 id="_3-5-判定树" tabindex="-1"><a class="header-anchor" href="#_3-5-判定树" aria-hidden="true">#</a> 3.5 判定树</h3><p>判定树是判定表的变种，也能清晰地表示复杂的条件组合与应做的动作之间的对应关系。多年来判定树一直受到人们的重视，是一种比较常用的系统分析和设计的工具。</p><blockquote><p>优点： 它的形式简单，一眼就可以看出其含义，因此易于掌握和使用。</p><p>缺点： 简洁性不如判定表，数据元素的同一个值往往要重复写多遍，而且越接近树的叶端重复次数越多。</p></blockquote><p>画判定树时分枝的次序可能对最终画出的判定树的简洁程度有较大影响。</p><img src="https://article.biliimg.com/bfs/article/f6e4611cd547950f824ef7de947161eb673e04dc.png" alt="image-20230204205144308" style="zoom:50%;"><p>利用判定表：</p><img src="https://article.biliimg.com/bfs/article/032f906938f95bd13dce97b48d420de9607efc18.png" alt="image-20230204205204841" style="zoom:67%;"><p>利用判定树：</p><img src="https://article.biliimg.com/bfs/article/8fd22aa4fab6a5ed782c41c291b18e3ff30219e1.png" alt="image-20230204205919544" style="zoom:67%;"><h3 id="_3-6-过程设计语言" tabindex="-1"><a class="header-anchor" href="#_3-6-过程设计语言" aria-hidden="true">#</a> 3.6 过程设计语言</h3><p>过程设计语言（PDL）也称为伪码。是用正文形式表示数据和处理过程的设计工具。</p><p>PDL有下述特点：</p><p>(1)关键字的固定语法，它提供了结构化控制结构、数据说明和模块化的特点。如，if…fi(或endif)等</p><p>(2) 自然语言的自由语法，它描述处理特点。</p><p>(3) 数据说明的手段。应该既包括简单的数据结构(例如纯量和数组)，又包括复杂的数据结构(例如，链表或层次的数据结构)。</p><p>(4) 模块定义和调用的技术，应该提供各种接口描述模式。</p><p>PDL有下述优点：</p><p>(1) 可以作为注释直接插在源程序中间。</p><p>(2) 可以使用普通的正文编辑程序或文字处理系统，很方便地完成PDL的书写和编辑工作。</p><p>(3) 已经有自动处理PDL的程序存在，而且可以自动由PDL生成程序代码。</p><p>PDL的缺点是不如图形工具形象直观，描述复杂的条件组合与动作间的对应关系时，不如判定表清晰简单。</p><h2 id="_4-程序复杂程度的定量度量" tabindex="-1"><a class="header-anchor" href="#_4-程序复杂程度的定量度量" aria-hidden="true">#</a> 4.程序复杂程度的定量度量</h2><p>定量度量程序复杂程度的方法很有价值：</p><p>a) 把程序的复杂程度乘以适当常数即可估算出软件中错误的数量以及软件开发需要用的工作量，</p><p>b) 定量度量的结果可以用来比较两个不同的设计或两个不同算法的优劣；</p><p>c) 程序的定量的复杂程度可以作为模块规模的精确限度。</p><h3 id="_4-1-mccabe方法" tabindex="-1"><a class="header-anchor" href="#_4-1-mccabe方法" aria-hidden="true">#</a> 4.1 McCabe方法</h3><p>① <strong>流图</strong></p><p>McCabe方法根据程序控制流的复杂程度定量度量程序的复杂程度，这样度量出的结果称为程序的环形复杂度。</p><p>流图实质上是“退化了的”程序流程图，描绘程序的控制流程，不表现对数据的具体操作以及分支或循环的具体条件。</p><p>一个圆代表一条或多条语句；一个顺序结构可以合并一个结点；流图中的箭头线称为边，代表控制流；在流图中一条边必须终止于一个结点</p><img src="https://article.biliimg.com/bfs/article/f8608faff5ad45e15868571bb4b7e50f25fbd6ff.png" alt="image-20230204210400846" style="zoom:80%;"><p>由PDL翻译成的流图</p><img src="https://article.biliimg.com/bfs/article/2e19829ba41eaff1d880289e22e70de619de4d40.png" alt="image-20230204210526633" style="zoom:67%;"><p>复合条件，就是在条件中包含了一个或多个布尔运算符(逻辑OR，AND，NAND，NOR)</p><img src="https://article.biliimg.com/bfs/article/d5d84502c96d105b018d3e8344a71e5bdf73e720.png" alt="image-20230204210550876" style="zoom:67%;"><p>② <strong>计算环形复杂度的方法</strong></p><p>(1) 流图中线性无关的区域数等于环形复杂度。</p><p>(2) 流图G的环形复杂度V(G)=E-N+2,其中，E是流图中边的条数，N是结点数。</p><p>(3) 流图G的环形复杂度V(G)=P+1，其中，P是流图中判定结点的数目。</p><p>图6.17流图的环形复杂度为4。</p><p>③ <strong>环形复杂度的用途</strong></p><p>对测试难度的一种定量度量，也能对软件最终的可靠性给出某种预测。</p><p>实践表明，模块规模以V(G)≤10为宜</p><h3 id="_4-2-halstead方法" tabindex="-1"><a class="header-anchor" href="#_4-2-halstead方法" aria-hidden="true">#</a> 4.2 Halstead方法</h3><p>根据程序中运算符和操作数的总数来度量程序的复杂程度。 令N1为程序中运算符出现的总次数，N2为操作数出现的总次数，程序长度N定义为：</p><p>​ N=N1+N2</p><p>​ 程序中使用的不同运算符(包括关键字)的个数n1，以及不同操作数(变量和常数)的个数n2。Halstead给出预测程序长度的公式如下：</p><p>​ H=n1 log2 n1+n2 log2n2</p><p>多次验证都表明，预测的长度H与实际长度N非常接近。</p><p>Halstead还给出了预测程序中包含错误的个数的公式如下：E=N log2 (n1+n2)/3000</p><h2 id="_5-本章小结" tabindex="-1"><a class="header-anchor" href="#_5-本章小结" aria-hidden="true">#</a> 5.本章小结</h2><p>1.结构程序设计技术是进行详细设计的逻辑基础。</p><p>2.人机界面设计必须重视。</p><p>3.过程设计是详细设计阶段完成的主要工作。</p><p>4.在开发有清楚的层次结构时可采用面向数据结构的设计方法完成设计过程设计。</p><p>5.使用环形复杂度可以定量度量程序的复杂程度。</p>',195),d=[r];function s(c,h){return a(),e("div",null,d)}const l=p(i,[["render",s],["__file","05.html.vue"]]);export{l as default};

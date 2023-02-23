import{ab as l,G as i,H as a,ac as p}from"./framework-09305b5d.js";const e={},r=p('<h1 id="_01-【软件工程学概述】" tabindex="-1"><a class="header-anchor" href="#_01-【软件工程学概述】" aria-hidden="true">#</a> 01 【软件工程学概述】</h1><p>迄今为止，计算机系统已经经历了4个不同的发展阶段，但是，人们仍然没有彻底摆脱“软件危机”的困扰，软件已经成为限制计算机系统发展的瓶颈。</p><p>为了更有效地开发与维护软件，软件工作者在20世纪60年代后期开始认真研究消除软件危机的途径，从而逐渐形成了一门新兴的工程学科——计算机软件工程学。</p><h2 id="_1-软件危机" tabindex="-1"><a class="header-anchor" href="#_1-软件危机" aria-hidden="true">#</a> 1.软件危机</h2><h3 id="_1-1-软件危机的介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-软件危机的介绍" aria-hidden="true">#</a> 1.1 软件危机的介绍</h3><p>在计算机软件的开发和维护过程中所遇到的一系列严重问题。</p><p><strong>软件危机的典型表现</strong></p><ul><li>对软件开发成本和进度的估算很不准确</li><li>难以准确获取用户需求，用户不满意</li><li>质量很不可靠，没有适当的文档</li><li>缺乏方法指导和工具支持，大型软件系统经常失败</li><li>供不应求：软件开发生产率跟不上计算机应用的迅速发展</li><li>做好软件定义时期的工作，是降低软件成本提高软件质量的关键。</li></ul><h3 id="_1-2-产生软件危机的原因" tabindex="-1"><a class="header-anchor" href="#_1-2-产生软件危机的原因" aria-hidden="true">#</a> 1.2 产生软件危机的原因</h3><p><strong>与软件本身特点有关</strong></p><ul><li>软件不同于硬件，管理和控制软件开发过程相当困难。</li><li>软件在运行过程中不会因为使用时间过长而被 “用坏 “如果运行中发现了错误,很可能是遇到了一个在开发时期引入的在测试阶段没能检测出来的错误。</li><li>软件不同于一般程序 ，它的一个显著特点是规模庞大 ，而且程序复杂性将随着程序规模的增加而呈指数上升。</li><li>事实上，对用户要求没有完整准确的认识就匆忙着手编写程序是许多软件开发工程失败的主要原因之一。</li><li>目前相当多的软件专业人员对软件开发和维护还有不少糊涂观念 。在实践过程中或多或少地采用了错误的方法和技术，这可能是使软件问题发展成软件危机的主要原因。</li><li>错误的认识和做法主要表现为忽视软件需求分析的重要性，认为软件开发就是写程序并设法使之运行,轻视软件维护等</li></ul><p><strong>软件开发与维护的方法不正确有关</strong></p><ul><li>只重视程序而忽视软件配置其余成分的糊涂观念。</li><li>软件开发人员在定义时期没有正确全面地理解用户需求，直到测试阶段或软件交付使用后才发现 “已完成的 ”软件不完全符合用户的需要。</li><li>严重的问题是在软件开发的不同阶段进行修改需要付出的代价是很不相同的，如下图所示。</li></ul><img src="https://i0.hdslb.com/bfs/album/9a0798f5f83bd1d446cc378f815b3ea41fe8a3c1.png" alt="image-20230124173056597" style="zoom:33%;"><h3 id="_1-3-消除软件危机的途径" tabindex="-1"><a class="header-anchor" href="#_1-3-消除软件危机的途径" aria-hidden="true">#</a> 1.3 消除软件危机的途径</h3><ul><li>首先应该对计算机软件有一个正确的认识。</li><li>充分认识到软件开发不是某种个体劳动的神秘技巧 ，而应该是各类人员协同配合，共同完成的工程项目。</li><li>推广使用在实践中总结出来的开发软件的成功的技术和方法，并且研究探索更好更有效的技术和方法。</li><li>应该开发和使用更好的软件工具。</li></ul><h2 id="_2-软件工程" tabindex="-1"><a class="header-anchor" href="#_2-软件工程" aria-hidden="true">#</a> 2.软件工程</h2><h3 id="_2-1-软件工程的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-软件工程的介绍" aria-hidden="true">#</a> 2.1 软件工程的介绍</h3><p><strong>软件工程概述</strong></p><p>软件工程是指导计算机软件开发和维护的一门工程学科。采用工程的概念、原理、技术和方法来开发与维护软件，把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来，以经济地开发出高质量的软件并有效地维护它，这就是软件工程。</p><p>1968年在第一届NATO会议上曾经给出了软件工程的一个早期定义：“软件工程就是为了经济地获得可靠的且能在实际机器上有效地运行的软件，而建立和使用完善的工程原理。”</p><p>1993年IEEE进一步给出了一个更全面更具体的定义：“软件工程是： ①把系统的、规范的、可度量的途径应用于软件开发、运行和维护过程，也就是把工程应用于软件； ②研究①中提到的途径。</p><p><strong>软件具有的本质特性</strong></p><img src="https://i0.hdslb.com/bfs/album/11251bffbb2960e31a06a9c80a0a0abca9d3f72a.png" alt="image-20230124174920751" style="zoom:67%;"><h3 id="_2-2-软件工程的基本原理" tabindex="-1"><a class="header-anchor" href="#_2-2-软件工程的基本原理" aria-hidden="true">#</a> 2.2 软件工程的基本原理</h3><img src="https://i0.hdslb.com/bfs/album/0ee13ee436cf5c39b23b791a7bccb217851ae255.png" alt="image-20230124174945098" style="zoom:67%;"><h3 id="_2-3-软件工程的原则" tabindex="-1"><a class="header-anchor" href="#_2-3-软件工程的原则" aria-hidden="true">#</a> 2.3 软件工程的原则</h3><ol><li>抽象</li></ol><p>抽取事物最基本的特性和行为，忽略非基本的细节。采用分层次抽象、自顶向下、逐层分解的办法控制软件开发过程的复杂性。例如：软件瀑布模型、结构化分析方法、结构化设计方法，以及面向对象建模技术等都体现了抽象的原则。</p><ol start="2"><li>信息隐蔽</li></ol><p>将模块设计成“黑箱”，实现的细节隐藏在模块内部，不让模块的使用者直接访问。</p><ol start="3"><li>模块化</li></ol><p>模块是程序在逻辑上相对独立的成分，是独立的编程单位，应有良好的接口定义。模块化有助于信息隐蔽和抽象，有助于表示复杂的系统。</p><ol start="4"><li>局部化</li></ol><p>要求在一个物理模块内集中逻辑上相互关联的计算机资源，保证 模块之间具有松散的耦合，模块内部具有较强的内聚。这有助于加强模块的独立性，控制解的复杂性。</p><ol start="5"><li>确定性</li></ol><p>软件开发过程中所有概念的表达应该是确定的、无歧义的、规范的。这有助于人们之间在交流时不会产生误解、遗漏，保证整个开发工作协调一致。</p><ol start="6"><li>一致性</li></ol><p>整个软件系统（包括程序、文档和数据）的各个模块应使用一致的概念、符号和术语。程序内部接口应保持一致。软件和硬件、操作系统的接口应保持一致。系统规格说明与系统行为应保持一致。用于形式化规格说明的公理系统应保持一致。</p><ol start="7"><li>完备性</li></ol><p>软件系统不丢失任何重要成分，可以完全实现系统所要求功能的程度。为了保证系统的完备性，在软件开发和运行过程中需要严格的技术评审。</p><ol start="8"><li>可验证性</li></ol><p>开发大型的软件系统需要对系统自顶向下、逐层分解。系统分解应遵循系统已于检查、测试、评审的原则，以确保系统的正确性。</p><h3 id="_2-4-软件工程的本质特征" tabindex="-1"><a class="header-anchor" href="#_2-4-软件工程的本质特征" aria-hidden="true">#</a> 2.4 软件工程的本质特征</h3><ul><li>软件工程关注大型程序的构造</li><li>软件工程的中心课题是控制复杂性</li><li>软件经常变化</li><li>开发软件的效率非常重要</li><li>和谐地合作是开发软件的关键</li><li>软件必须有效地支持它的用户</li><li>在软件工程领域中是由具有一种文化背景的人替具有另一种文化背景的人</li></ul><h3 id="_2-6-软件工程的基本原理" tabindex="-1"><a class="header-anchor" href="#_2-6-软件工程的基本原理" aria-hidden="true">#</a> 2.6 软件工程的基本原理</h3><ol><li>用分阶段的生命周期计划严格管理</li></ol><p>把软件生命周期划分为若干个阶段，并相应地制定出切实可行的计划，然后严格按照计划对软件的开发和维护工作进行管理。</p><ol start="2"><li>坚持进行阶段评审</li></ol><p>软件的质量保证工作不能等到编码阶段结束之后再进行。错误发现与改正越晚，所需付出的代价也越高。因此，在每个阶段都进行严格的评审，以便尽早发现在软件开发过程中所犯的错误，是一条必须遵循的重要原则。</p><ol start="3"><li><p>实行严格的产品控制</p></li><li><p>采用现代程序设计技术</p></li></ol><p>采用先进的技术不仅可以提高软件开发和维护的效率，而且可以提高软件产品的质量。</p><ol start="5"><li>结果应能清楚地审查</li></ol><p>应该根据软件开发项目的总目标及完成期限，规定开发组织的责任和产品标准，从而使得所得到的结果能够清楚地审查。</p><ol start="6"><li>开发小组的人员应该少而精</li></ol><h3 id="_2-7-软件工程方法学" tabindex="-1"><a class="header-anchor" href="#_2-7-软件工程方法学" aria-hidden="true">#</a> 2.7 软件工程方法学</h3><img src="https://i0.hdslb.com/bfs/album/8cb10d9365893237454b1eb56555a0e1950f2ac5.png" alt="image-20230124175422473" style="zoom:50%;"><ul><li><p>传统方法学</p><ul><li>**概念：**传统方法学也称为生命周期方法学或结构化范型。它采用结构化技术(结构化分析、结构化设计和结构化实现)来完成软件开发的各项任务，并使用适当的软件工具或软件工程环境来支持结构化技术的运用。</li><li><strong>特点</strong>： <ul><li>传统方法学把软件生命周期的全过程依次划分为若干个阶段，然后顺序地完成每个阶段的任务。</li><li>每个阶段的开始和结束都有严格标准，对于任何两个相邻的阶段而言，前一阶段的结束标准就是后一阶段的开始标准。</li><li>在每一个阶段结束之前都必须进行正式严格的技术审查和管理复审。</li><li>审查的一条主要标准就是每个阶段都应该交出“最新式的”(即和所开发的软件完全一致的)高质量的文档资料，从而保证在软件开发工程结束时有一个完整准确的软件配置交付使用。</li><li>采用生命周期方法学可以大大提高软件开发的成功率，软件开发的生产率也能明显提高。</li><li>目前，传统方法学仍然是人们在开发软件时使用得十分广泛的软件工程方法学。</li></ul></li></ul></li><li><p>面向对象方法学</p><ul><li><p>**概念：**与传统方法相反，面向对象方法把数据和行为看成是同等重要的，它是一种以数据为主线，把数据和对数据的操作紧密地结合起来的方法。</p></li><li><p><strong>四个要点</strong></p><ul><li>把对象(object)作为融合了数据及在数据上的操作行为的统一的软件构件。</li><li>把所有对象都划分成类(class)。</li><li>按照父类与子类的关系，把若干个相关类组成一个层次结构的系统。</li><li>对象彼此间仅能通过发送消息互相联系。</li></ul></li><li><p>**基本原则：**尽量模拟人类习惯的思维方式，使开发软件的方法与过程尽可能接近人类认识世界、解决问题的方法与过程，从而使描述问题的问题空间(也称为问题域)与实现解法的解空间(也称为求解域)在结构上尽可能一致。</p></li><li><p>**优点：**降低了软件产品的复杂性，提高了软件的可理解性，简化了软件的开发和维护工作。</p><p>面向对象方法特有的继承性和多态性，进一步提高了面向对象软件的可重用性。</p></li></ul></li></ul><h2 id="_3-软件生命周期" tabindex="-1"><a class="header-anchor" href="#_3-软件生命周期" aria-hidden="true">#</a> 3.软件生命周期</h2><p>软件生命周期由软件定义、软件开发和运行维护(也称为软件维护)3个时期组成，每个时期又进一步划分成若干个阶段。</p><p>软件定义时期的任务是： 确定软件开发工程必须完成的总目标；确定工程的可行性；导出实现工程目标应该采用的策略及系统必须完成的功能；估计完成该项工程需要的资源和成本，并且制定工程进度表。这个时期的工作通常又称为系统分析，由系统分析员负责完成。</p><p>软件定义时期通常进一步划分成3个阶段，即问题定义、可行性研究和需求分析。开发时期具体设计和实现在前一个时期定义的软件，它通常由下述4个阶段组成：总体设计，详细设计，编码和单元测试，综合测试。其中前两个阶段又称为系统设计，后两个阶段又称为系统实现。维护时期的主要任务是使软件持久地满足用户的需要。</p><ol><li>问题定义</li></ol><p>问题定义阶段必须回答的关键问题是：“要解决的问题是什么？”</p><p>通过对客户的访问调查，系统分析员扼要地写出关于问题性质、工程目标和工程规模的书面报告，经过讨论和必要的修改之后这份报告应该得到客户的确认。</p><ol start="2"><li>可行性研究</li></ol><p>这个阶段回答的关键问题是：“对于上一个阶段所确定的问题有行得通的解决方法吗？”</p><p>技术上、经济上、操作上、时间上、法律上</p><ol start="3"><li>需求分析（功能分析）</li></ol><p>这个阶段的任务仍然不是具体解决问题，而是确定“为了解决这个问题，目标系统必须做什么？”，主要是确定目标系统必须具备哪些功能。</p><p>系统分析员必须和用户密切配合，充分交流信息，以得出经过用户确认的系统逻辑模型。通常用数据流图（DFD）、数据字典（DD）和简要的算法表示。</p><p>在需求分析阶段确定的系统逻辑模型是以后设计和实现系统的基础。这个阶段的一项重要任务是用正式文档准确地记录对目标系统的需求，这份文档通常称为 规格说明书（specification）。（SRS）</p><ol start="4"><li>总体设计</li></ol><p>这个阶段必须回答的关键问题是：“怎样实现目标系统？”</p><p>成果：系统结构图（SC）</p><p>一个程序应该由若干个规模适中的模块按合理的层次结构组织而成。总体设计的另一项主要任务是设计程序的体系结构，也就是确定程序由哪些模块组成以及模块间的关系。</p><ol start="5"><li>详细设计</li></ol><p>这个阶段的任务就是把解法具体化，也就是回答这个关键问题：“应该怎样具体地实现这个系统呢？”</p><p>这个阶段的任务还不是编写程序，而是设计出程序的详细规格说明。这种规格说明应该包含必要的细节，程序员可以根据它们写出实际的程序代码。</p><p>详细设计也称为模块设计，在这个阶段将详细地设计每个模块，确定实现模块功能所需要的算法和数据结构。</p><ol start="6"><li>编码和单元测试</li></ol><p>这个阶段的关键任务是写出正确的、容易理解、容易维护的程序模块。</p><p>程序员应该根据目标系统的性质和实质环境，选择一种适当的高级程序设计语言，把详细设计的结果翻译成用选定的语言书写的程序，并且仔细测试编写出的每一个模块。</p><ol start="7"><li>综合测试</li></ol><p>这个阶段的关键任务是通过各种类型的测试使软件达到预定的要求。</p><p>最基本的测试是集成测试和验收测试。</p><p>集成测试是根据设计的软件结构，把经过单元测试检验的模块按某种选定的策略装配起来，在装配过程中对程序进行必要的测试。</p><p>验收测试是按照规格说明书的规定，由用户对目标系统进行验收。</p><p>必要时还可以再通过现场测试或平行运行等方法对目标系统进一步测试检验。</p><ol start="8"><li>软件维护</li></ol><p>这个阶段的关键任务是，通过各种必要的维护活动使系统持久地满足用户的需要。</p><p>改正性维护，也就是诊断和改正在使用过程中出现的软件错误； 适应性维护，即修改软件以适应环境的变化 完善性维护，即根据用户的要求改进或扩充软件使它更完善； 预防性维护，即修改软件为将来的维护活动预先做准备。</p><h2 id="_4-软件过程" tabindex="-1"><a class="header-anchor" href="#_4-软件过程" aria-hidden="true">#</a> 4.软件过程</h2><p>软件过程是为了获得高质量软件所需要完成的一系列任务的框架，它规定了完成各项任务的工作步骤。</p><p>软件过程描述为了开发出客户需要的软件，什么人（who）、在什么时候（when）、做什么事（what）以及怎样（how）做这些事以实现某一个特定的具体目标。</p><h3 id="_4-1-瀑布模型" tabindex="-1"><a class="header-anchor" href="#_4-1-瀑布模型" aria-hidden="true">#</a> 4.1 瀑布模型</h3><p>瀑布模型一直是唯一被广泛采用的生命周期模型，现在它仍然是软件工程中应用得最广泛的过程模型。如下图所示为传统的瀑布模型</p><figure><img src="https://i0.hdslb.com/bfs/album/d48273e5bdaef8b94afe64c6968fc6d1d835e006.png" alt="image-20230124180734730" tabindex="0" loading="lazy"><figcaption>image-20230124180734730</figcaption></figure><p>按照传统的瀑布模型开发软件，有下述的几个特点。</p><ul><li><p>阶段间具有顺序性和依赖性：</p><p>两重含义： ①必须等前一阶段的工作完成之后，才能开始后一阶段的工作； ②前一阶段的输出文档就是后一阶段的输入文档，因此，只有前一阶段的输出文档正确，后一阶段的工作才能获得正确的结果。</p></li><li><p>推迟实现的观点：</p><p>瀑布模型在编码之前设置了系统分析与系统设计的各个阶段，分析与设计阶段的基本任务规定，在这两个阶段主要考虑目标系统的逻辑模型，不涉及软件的物理实现。</p></li><li><p>质量保证的观点：</p><p>软件工程的基本目标是优质、高产。为了保证所开发的软件的质量，在瀑布模型的每个阶段都应坚持两个重要做法。</p><ol><li><p>每个阶段都必须完成规定的文档，没有交出合格的文档就是没有完成该阶段的任务。</p></li><li><p>每个阶段结束前都要对所完成的文档进行评审，以便尽早发现问题，改正错误。</p></li></ol></li></ul><p>传统的瀑布模型过于理想化了，事实上，人在工作过程中不可能不犯错误。实际的瀑布模型是带“反馈环”的，如系统图所示。</p><img src="https://i0.hdslb.com/bfs/album/8f2f43fffe779be86b72f6b3f6d4c2520a00d6e2.png" alt="image-20230124180838938" style="zoom:67%;"><p><strong>瀑布模型有许多优点：</strong></p><ol><li>可强迫开发人员采用规范的方法（例如，结构化技术）；</li><li>严格地规定了每个阶段必须提交的文档；</li><li>要求每个阶段交出的所有产品都必须经过质量保证小组的仔细验证。</li></ol><h3 id="_4-2-快速原型模型" tabindex="-1"><a class="header-anchor" href="#_4-2-快速原型模型" aria-hidden="true">#</a> 4.2 快速原型模型</h3><p>快速原型是快速建立起来的可以在计算机上运行的程序，它所能完成的功能往往是最终产品能完成的功能的一个子集。</p><p>快速原型模型适用于中小型软件，且需求模糊的用户。</p><figure><img src="https://i0.hdslb.com/bfs/album/8183debd4087a32475a9c27db146bb8ce165d391.png" alt="image-20230124181237898" tabindex="0" loading="lazy"><figcaption>image-20230124181237898</figcaption></figure><p>快速原型模型是不带反馈环的，这正是这种过程模型的主要优点： 软件产品的开发基本上是线性顺序进行的。能基本上做到线性顺序开发的主要原因如下：</p><p>（1） 原型系统已经通过与用户交互而得到验证，据此产生的规格说明文档正确地描述了用户需求，因此，在开发过程的后续阶段不会因为发现了规格说明文档的错误而进行较大的返工。</p><p>（2） 开发人员通过建立原型系统已经学到了许多东西，因此，在设计和编码阶段发生错误的可能性也比较小，这自然减少了在后续阶段需要改正前面阶段所犯错误的可能性。</p><p><strong>快速原型模型的特点</strong>：</p><ul><li>快速开发工具</li><li>循环</li><li>低成本</li></ul><p><strong>种类</strong>：</p><ul><li>渐进型</li><li>抛弃型</li></ul><h3 id="_4-3-增量模型" tabindex="-1"><a class="header-anchor" href="#_4-3-增量模型" aria-hidden="true">#</a> 4.3 增量模型</h3><p>增量模型也称为渐增模型。使用增量模型开发软件时，把软件产品作为一系列的增量构件来设计、编码、集成和测试。每个构件由多个相互作用的模块构成，并且能够完成特定的功能。使用增量模型时，第一个增量构件往往实现软件的基本需求，提供最核心的功能。</p><img src="https://i0.hdslb.com/bfs/album/b09288f2e9ef762f2190bb16136a2ae896262104.png" alt="image-20230124182358289" style="zoom:67%;"><p><strong>优点：</strong></p><ul><li>能在较短时间内向用户提交可完成部分工作的产品。</li><li>逐步增加产品功能可以使用户有较充裕的时间学习和适应新产品，从而减少一个全新的软件可能给客户组织带来的冲击。</li></ul><p><strong>使用增量模型的困难：</strong></p><ul><li>在把每个新的增量构件集成到现有软件体系结构中时，必须不破坏原来已经开发出的产品。</li><li>逐步增加产品功能可以使用户有较充裕的时间学习和适应新产品，从而减少一个全新的软件可能给客户组织带来的冲击。</li><li>在把每个新的增量构件集成到现有软件体系结构中时，必须不破坏原来已经开发出的产品。</li><li>必须把软件的体系结构设计得便于按这种方式进行扩充，向现有产品中加入新构件的过程必须简单、方便，也就是说，软件体系结构必须是开放的。</li></ul><h3 id="_4-4-螺旋模型" tabindex="-1"><a class="header-anchor" href="#_4-4-螺旋模型" aria-hidden="true">#</a> 4.4 螺旋模型</h3><p>螺旋模型是风险驱动的。</p><p>螺旋模型的基本思想是，使用原型及其他方法来尽量降低风险。理解这种模型的一个简便方法，是把它看作在每个阶段之前都增加了风险分析过程的快速原型模型。</p><img src="https://i0.hdslb.com/bfs/album/93eb2b033d60c69c3be631a7a449b8acc8a34e6f.png" alt="image-20230124182824638" style="zoom:67%;"><p><strong>螺旋模型的特点</strong>：</p><ul><li>瀑布模型+快速原型+风险分析</li><li>迭代过程</li></ul><p><strong>一个螺旋式周期</strong>：</p><p>确定目标、选择方案、选定完成目标的策略 风险角度分析该策略 启动一个开发阶段 评价前一步的结果，计划下一轮的工作</p><h3 id="_4-5-喷泉模型" tabindex="-1"><a class="header-anchor" href="#_4-5-喷泉模型" aria-hidden="true">#</a> 4.5 喷泉模型</h3><p>“喷泉”这个词体现了面向对象软件开发过程迭代和无缝的特性。迭代是软件开发过程中普遍存在的一种内在属性。用面向对象方法学开发软件时，工作重点应该放在生命周期中的分析阶段。</p><img src="https://i0.hdslb.com/bfs/album/f57b4766bba1a833dc8402ceefd2bdbb906cc35e.png" alt="image-20230124182909042" style="zoom:67%;"><h2 id="_5-本章小结" tabindex="-1"><a class="header-anchor" href="#_5-本章小结" aria-hidden="true">#</a> 5.本章小结</h2><ol><li><p>本章对计算机软件工程学作一个简短的概述，回顾计算机系统发展简史。</p></li><li><p>本章介绍 软件工程的基本原理和方法有概括的本质的认识，详细讲解生命周期相关知识。</p></li><li><p>详细讲解8种典型的软件过程模型。</p></li></ol>',135),t=[r];function s(h,o){return i(),a("div",null,t)}const n=l(e,[["render",s],["__file","01.html.vue"]]);export{n as default};

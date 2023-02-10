import{ab as n,G as s,H as a,ac as e}from"./framework-09305b5d.js";const p={},t=e(`<h1 id="_09-【子查询】" tabindex="-1"><a class="header-anchor" href="#_09-【子查询】" aria-hidden="true">#</a> 09 【子查询】</h1><p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。</p><p>SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。</p><p>先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span>存在聚合函数<span class="token punctuation">)</span>

<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">ON</span> 多表的连接条件 

<span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">WHERE</span> 不包含聚合函数的过滤条件

<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">HAVING</span> 包含聚合函数的过滤条件

<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">ASC</span> <span class="token operator">/</span> <span class="token keyword">DESC</span> <span class="token punctuation">)</span>

<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-需求分析与问题解决" tabindex="-1"><a class="header-anchor" href="#_1-需求分析与问题解决" aria-hidden="true">#</a> 1. 需求分析与问题解决</h2><h3 id="_1-1-实际问题" tabindex="-1"><a class="header-anchor" href="#_1-1-实际问题" aria-hidden="true">#</a> 1.1 实际问题</h3><figure><img src="https://i0.hdslb.com/bfs/album/f46772a19fabdf371cb29d41f2929732fdc225df.png" alt="image-20221020194326690" tabindex="0" loading="lazy"><figcaption>image-20221020194326690</figcaption></figure><p>现有解决方式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#方式一：</span>
<span class="token keyword">SELECT</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span><span class="token punctuation">;</span>
 
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token number">11000</span><span class="token punctuation">;</span>
 
<span class="token comment">#方式二：自连接</span>
<span class="token keyword">SELECT</span> e2<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>e2<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span>employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
<span class="token operator">AND</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span> <span class="token operator">&lt;</span> e2<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span>
<span class="token comment">#方式三：子查询</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> salary
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/7893918b47af93594158c63026b4bf0bf344c3f6.png" alt="image-20221020194344754" tabindex="0" loading="lazy"><figcaption>image-20221020194344754</figcaption></figure><h3 id="_1-2-子查询的基本使用" tabindex="-1"><a class="header-anchor" href="#_1-2-子查询的基本使用" aria-hidden="true">#</a> 1.2 子查询的基本使用</h3><ul><li>子查询的基本语法结构：</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/10b70d32b3c261f0218f9df3c200334bcf28cc5e.png" alt="image-20221020194656348" tabindex="0" loading="lazy"><figcaption>image-20221020194656348</figcaption></figure><ul><li>子查询（内查询）在主查询之前一次执行完成。</li><li>子查询的结果被主查询（外查询）使用 。</li><li>注意事项 <ul><li>子查询要包含在括号内</li><li>将子查询放在比较条件的右侧</li><li>单行操作符对应单行子查询，多行操作符对应多行子查询</li></ul></li></ul><h3 id="_1-3-子查询的分类" tabindex="-1"><a class="header-anchor" href="#_1-3-子查询的分类" aria-hidden="true">#</a> 1.3 子查询的分类</h3><p><strong>分类方式1：</strong></p><p>我们按内查询的结果返回一条还是多条记录，将子查询分为<code>单行子查询</code>、<code>多行子查询</code>。</p><ul><li>单行子查询</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/e473557403677fef0a1cd602224782e148f81c6e.png" alt="image-20221020195259239" tabindex="0" loading="lazy"><figcaption>image-20221020195259239</figcaption></figure><ul><li>多行子查询</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/868174eb87bed7354694c994b16733727439204b.png" alt="image-20221020195327859" tabindex="0" loading="lazy"><figcaption>image-20221020195327859</figcaption></figure><p><strong>分类方式2：</strong></p><p>我们按内查询是否被执行多次，将子查询划分为<code>相关(或关联)子查询</code>和<code>不相关(或非关联)子查询</code>。</p><p>子查询从数据表中查询了数据结果，如果这个数据结果只执行一次，然后这个数据结果作为主查询的条件进行执行，那么这样的子查询叫做不相关子查询。</p><p>同样，如果子查询需要执行多次，即采用循环的方式，先从外部查询开始，每次都传入子查询进行查询，然后再将结果反馈给外部，这种嵌套的执行方式就称为相关子查询。</p><h2 id="_2-单行子查询" tabindex="-1"><a class="header-anchor" href="#_2-单行子查询" aria-hidden="true">#</a> 2. 单行子查询</h2><h3 id="_2-1-单行比较操作符" tabindex="-1"><a class="header-anchor" href="#_2-1-单行比较操作符" aria-hidden="true">#</a> 2.1 单行比较操作符</h3><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td>=</td><td>equal to</td></tr><tr><td>&gt;</td><td>greater than</td></tr><tr><td>&gt;=</td><td>greater than or equal to</td></tr><tr><td>&lt;</td><td>less than</td></tr><tr><td>&lt;=</td><td>less than or equal to</td></tr><tr><td>&lt;&gt;</td><td>not equal to</td></tr></tbody></table><h3 id="_2-2-代码示例" tabindex="-1"><a class="header-anchor" href="#_2-2-代码示例" aria-hidden="true">#</a> 2.2 代码示例</h3><p><strong>题目：查询工资大于149号员工工资的员工的信息</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/5964c2447f81af4238e9738ec43d883682f7cad7.png" alt="image-20221020200905859" tabindex="0" loading="lazy"><figcaption>image-20221020200905859</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/5f870b496d335e5c99000b95bc1d09f9f9299efb.png" alt="image-20221020200912862" tabindex="0" loading="lazy"><figcaption>image-20221020200912862</figcaption></figure><p><strong>题目：返回job_id与员工号为141的员工相同，salary比员工号为143的员工多的员工姓名，job_id和工资</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">=</span>  
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span> job_id
                 <span class="token keyword">FROM</span>   employees
                 <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> <span class="token number">141</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>    salary <span class="token operator">&gt;</span>
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span> salary
                 <span class="token keyword">FROM</span>   employees
                 <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> <span class="token number">143</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/020635abda8413c43bdbc04783c31850e84147d9.png" alt="image-20221020202106504" tabindex="0" loading="lazy"><figcaption>image-20221020202106504</figcaption></figure><p><strong>题目：返回公司工资最少的员工的last_name,job_id和salary</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  salary <span class="token operator">=</span> 
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
                 <span class="token keyword">FROM</span>   employees<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/2edd76f8aaa3c3097e9a649a55510d1f2819ac10.png" alt="image-20221020202216852" tabindex="0" loading="lazy"><figcaption>image-20221020202216852</figcaption></figure><p><strong>题目：查询与141号或174号员工的manager_id和department_id相同的其他员工的employee_id，manager_id，department_id</strong></p><p>实现方式1：不成对比较</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>  employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>    employees
<span class="token keyword">WHERE</span>   manager_id <span class="token operator">IN</span>
		  <span class="token punctuation">(</span><span class="token keyword">SELECT</span>  manager_id
                   <span class="token keyword">FROM</span>    employees
                   <span class="token keyword">WHERE</span>   employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">174</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>     department_id <span class="token operator">IN</span> 
		  <span class="token punctuation">(</span><span class="token keyword">SELECT</span>  department_id
                   <span class="token keyword">FROM</span>    employees
                   <span class="token keyword">WHERE</span>   employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">174</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>	employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span><span class="token punctuation">(</span><span class="token number">174</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现方式2：成对比较</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>	employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>	employees
<span class="token keyword">WHERE</span>  <span class="token punctuation">(</span>manager_id<span class="token punctuation">,</span> department_id<span class="token punctuation">)</span> <span class="token operator">IN</span>
                      <span class="token punctuation">(</span><span class="token keyword">SELECT</span> manager_id<span class="token punctuation">,</span> department_id
                       <span class="token keyword">FROM</span>   employees
                       <span class="token keyword">WHERE</span>  employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">174</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>	employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">174</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-having-中的子查询" tabindex="-1"><a class="header-anchor" href="#_2-3-having-中的子查询" aria-hidden="true">#</a> 2.3 HAVING 中的子查询</h3><ul><li>首先执行子查询。</li><li>向主查询中的HAVING 子句返回结果。</li></ul><p><strong>题目：查询最低工资大于50号部门最低工资的部门id和其最低工资</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>   department_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>     employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span>   <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span>
                       <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
                        <span class="token keyword">FROM</span>   employees
                        <span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-case中的子查询" tabindex="-1"><a class="header-anchor" href="#_2-4-case中的子查询" aria-hidden="true">#</a> 2.4 CASE中的子查询</h3><p>在CASE表达式中使用单列子查询：</p><p><strong>题目：显式员工的employee_id,last_name和location。其中，若员工department_id与location_id为1800的department_id相同，则location为’Canada’，其余则为’USA’。</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token keyword">CASE</span> department_id
        <span class="token keyword">WHEN</span>
             <span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id <span class="token keyword">FROM</span> departments
	      <span class="token keyword">WHERE</span> location_id <span class="token operator">=</span> <span class="token number">1800</span><span class="token punctuation">)</span>           
        <span class="token keyword">THEN</span> <span class="token string">&#39;Canada&#39;</span> 
        <span class="token keyword">ELSE</span> <span class="token string">&#39;USA&#39;</span> <span class="token keyword">END</span><span class="token punctuation">)</span> location
<span class="token keyword">FROM</span>   employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-子查询中的空值问题" tabindex="-1"><a class="header-anchor" href="#_2-5-子查询中的空值问题" aria-hidden="true">#</a> 2.5 子查询中的空值问题</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">=</span>
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span> job_id
                 <span class="token keyword">FROM</span>   employees
                 <span class="token keyword">WHERE</span>  last_name <span class="token operator">=</span> <span class="token string">&#39;Haas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/b5f9dcfe0ab5bbc0eeafe6bded2a0c728e5c1856.png" alt="image-20221020202956416" tabindex="0" loading="lazy"><figcaption>image-20221020202956416</figcaption></figure><blockquote><p><strong>子查询不返回任何行</strong></p></blockquote><h3 id="_2-6-非法使用子查询" tabindex="-1"><a class="header-anchor" href="#_2-6-非法使用子查询" aria-hidden="true">#</a> 2.6 非法使用子查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  salary <span class="token operator">=</span>
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span>   <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
                 <span class="token keyword">FROM</span>     employees
                 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/17b575ea99fa3608909ee5a608a31dad925287de.png" alt="image-20221020203056319" tabindex="0" loading="lazy"><figcaption>image-20221020203056319</figcaption></figure><blockquote><p><strong>多行子查询使用单行比较符</strong></p></blockquote><h2 id="_3-多行子查询" tabindex="-1"><a class="header-anchor" href="#_3-多行子查询" aria-hidden="true">#</a> 3. 多行子查询</h2><ul><li>也称为集合比较子查询</li><li>内查询返回多行</li><li>使用多行比较操作符</li></ul><h3 id="_3-1-多行比较操作符" tabindex="-1"><a class="header-anchor" href="#_3-1-多行比较操作符" aria-hidden="true">#</a> 3.1 多行比较操作符</h3><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td>IN</td><td>等于列表中的<strong>任意一个</strong></td></tr><tr><td>ANY</td><td>需要和单行比较操作符一起使用，和子查询返回的<strong>某一个</strong>值比较</td></tr><tr><td>ALL</td><td>需要和单行比较操作符一起使用，和子查询返回的<strong>所有</strong>值比较</td></tr><tr><td>SOME</td><td>实际上是ANY的别名，作用相同，一般常使用ANY</td></tr></tbody></table><blockquote><p>体会 ANY 和 ALL 的区别</p></blockquote><h3 id="_3-2-代码示例" tabindex="-1"><a class="header-anchor" href="#_3-2-代码示例" aria-hidden="true">#</a> 3.2 代码示例</h3><p><strong>题目：返回其它job_id中比job_id为‘IT_PROG’部门任一工资低的员工的员工号、姓名、job_id 以及salary</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/e679bd0fad5ac9936d05dc2952cf3fcabfc8e066.png" alt="image-20221020203140032" tabindex="0" loading="lazy"><figcaption>image-20221020203140032</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/023f4e25fcea5f21cfb64a2adba18f754e190299.png" alt="image-20221020203149809" tabindex="0" loading="lazy"><figcaption>image-20221020203149809</figcaption></figure><p><strong>题目：返回其它job_id中比job_id为‘IT_PROG’部门所有工资都低的员工的员工号、姓名、job_id以及salary</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/8e6b9eae3b72c421a4cbd67da138d81d8f5aa30f.png" alt="image-20221020203205815" tabindex="0" loading="lazy"><figcaption>image-20221020203205815</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/90426d7a663eebb0262535efa1a963ab8d9b3b41.png" alt="image-20221020203916085" tabindex="0" loading="lazy"><figcaption>image-20221020203916085</figcaption></figure><p><strong>题目：查询平均工资最低的部门id</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#方式1：</span>
<span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>avg_sal<span class="token punctuation">)</span>
			<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
				<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sal
				<span class="token keyword">FROM</span> employees
				<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
				<span class="token punctuation">)</span> dept_avg_sal
			<span class="token punctuation">)</span>
			
			
<span class="token comment">#方式2：</span>
<span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
				<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sal
				<span class="token keyword">FROM</span> employees
				<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token punctuation">)</span>


<span class="token comment">-- 方式3：</span>
<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">ASC</span>
<span class="token keyword">LIMIT</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-空值问题" tabindex="-1"><a class="header-anchor" href="#_3-3-空值问题" aria-hidden="true">#</a> 3.3 空值问题</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> manager_id  <span class="token comment">-- manager_id可能为空，not in(null,....)----&gt;结果为空</span>
			<span class="token keyword">FROM</span> employees
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/2d4d95a1ff6ff1b95b83d39f51757dc18e654d8f.png" alt="image-20221020204008643" tabindex="0" loading="lazy"><figcaption>image-20221020204008643</figcaption></figure><h2 id="_4-相关子查询" tabindex="-1"><a class="header-anchor" href="#_4-相关子查询" aria-hidden="true">#</a> 4. 相关子查询</h2><h3 id="_4-1-相关子查询执行流程" tabindex="-1"><a class="header-anchor" href="#_4-1-相关子查询执行流程" aria-hidden="true">#</a> 4.1 相关子查询执行流程</h3><p>如果子查询的执行依赖于外部查询，通常情况下都是因为子查询中的表用到了外部的表，并进行了条件关联，因此每执行一次外部查询，子查询都要重新计算一次，这样的子查询就称之为<code>关联子查询</code>。</p><p>相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询。</p><figure><img src="https://i0.hdslb.com/bfs/album/f2bb2ab1986fa554c016bc3393c0cd2bafb2e477.png" alt="image-20221020204023748" tabindex="0" loading="lazy"><figcaption>image-20221020204023748</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/e17fa39989a1e1dc2c489a09b96f2b85ff9606ef.png" alt="image-20221020204029553" tabindex="0" loading="lazy"><figcaption>image-20221020204029553</figcaption></figure><p>说明：<strong>子查询中使用主查询中的列</strong></p><h3 id="_4-2-代码示例" tabindex="-1"><a class="header-anchor" href="#_4-2-代码示例" aria-hidden="true">#</a> 4.2 代码示例</h3><p><strong>题目：查询员工中工资大于本部门平均工资的员工的last_name,salary和其department_id</strong></p><p><strong>方式一：相关子查询</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/cfa0f3ef9f79502749fd26c6669f8bf5726ef9c6.png" alt="image-20221020204101384" tabindex="0" loading="lazy"><figcaption>image-20221020204101384</figcaption></figure><p><strong>方式二：在 FROM 中使用子查询</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>e1<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> dept_avg_sal 
                   <span class="token keyword">FROM</span> employees 
                   <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> e2<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> e2<span class="token punctuation">.</span>dept_avg_sal <span class="token operator">&lt;</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>from型的子查询：子查询是作为from的一部分，子查询要用()引起来，并且要给这个子查询取别名， 把它当成一张“临时的虚拟的表”来使用。</p></blockquote><p>在ORDER BY 中使用子查询：</p><p><strong>题目：查询员工的id,salary,按照department_name 排序</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees e
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>
	  <span class="token keyword">SELECT</span> department_name
	  <span class="token keyword">FROM</span> departments d
	  <span class="token keyword">WHERE</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	
<span class="token comment">-- 方式2：</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>department_name
<span class="token keyword">FROM</span> employees
<span class="token keyword">JOIN</span> departments
<span class="token keyword">ON</span> employees<span class="token punctuation">.</span>department_id <span class="token operator">=</span> departments<span class="token punctuation">.</span>department_id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> department_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>题目：若employees表中employee_id与job_history表中employee_id相同的数目不小于2，输出这些相同id的员工的employee_id,last_name和其job_id</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span>e<span class="token punctuation">.</span>job_id
<span class="token keyword">FROM</span>   employees e 
<span class="token keyword">WHERE</span>  <span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
             <span class="token keyword">FROM</span>   job_history 
             <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-exists-与-not-exists关键字" tabindex="-1"><a class="header-anchor" href="#_4-3-exists-与-not-exists关键字" aria-hidden="true">#</a> 4.3 EXISTS 与 NOT EXISTS关键字</h3><ul><li>关联子查询通常也会和 EXISTS操作符一起来使用，用来检查在子查询中是否存在满足条件的行。</li><li>如果在子查询中不存在满足条件的行： <ul><li>条件返回 FALSE</li><li>继续在子查询中查找</li></ul></li><li>如果在子查询中存在满足条件的行： <ul><li>条件返回 TRUE</li><li>不在子查询中继续查找</li></ul></li><li>NOT EXISTS关键字表示如果不存在某种条件，则返回TRUE，否则返回FALSE。</li></ul><p><strong>题目：查询公司管理者的employee_id，last_name，job_id，department_id信息</strong></p><p>方式一：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>   employees manager
<span class="token keyword">WHERE</span>  <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span>
                 <span class="token keyword">FROM</span>   employees worker
                 <span class="token keyword">WHERE</span>  worker<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> 
                        manager<span class="token punctuation">.</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：自连接</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span>manager<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>manager<span class="token punctuation">.</span>job_id<span class="token punctuation">,</span>manager<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees <span class="token keyword">as</span> <span class="token keyword">work</span>
<span class="token keyword">JOIN</span> employees manager
<span class="token keyword">ON</span> <span class="token keyword">work</span><span class="token punctuation">.</span>manager_id <span class="token operator">=</span> manager<span class="token punctuation">.</span>employee_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式三：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
		     <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
		     <span class="token keyword">FROM</span> employees
		     <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>题目：查询departments表中，不存在于employees表中的部门的department_id和department_name</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> department_name
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token string">&#39;X&#39;</span>
                  <span class="token keyword">FROM</span>   employees
                  <span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/383b518f00f5d1e37de32d4ed1fe2d925bb9b051.png" alt="image-20221020204136437" tabindex="0" loading="lazy"><figcaption>image-20221020204136437</figcaption></figure><h3 id="_4-4-相关更新" tabindex="-1"><a class="header-anchor" href="#_4-4-相关更新" aria-hidden="true">#</a> 4.4 相关更新</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> table1 alias1
<span class="token keyword">SET</span>    <span class="token keyword">column</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> expression
                 <span class="token keyword">FROM</span>   table2 alias2
                 <span class="token keyword">WHERE</span>  alias1<span class="token punctuation">.</span><span class="token keyword">column</span> <span class="token operator">=</span> alias2<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用相关子查询依据一个表中的数据更新另一个表的数据。</p><p><strong>题目：在employees中增加一个department_name字段，数据为员工对应的部门名称</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 1）</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> employees
<span class="token keyword">ADD</span><span class="token punctuation">(</span>department_name VARCHAR2<span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment"># 2）</span>
<span class="token keyword">UPDATE</span> employees e
<span class="token keyword">SET</span> department_name <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_name 
	                       <span class="token keyword">FROM</span>   departments d
	                       <span class="token keyword">WHERE</span>  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-相关删除" tabindex="-1"><a class="header-anchor" href="#_4-5-相关删除" aria-hidden="true">#</a> 4.5 相关删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table1 alias1
 <span class="token keyword">WHERE</span> <span class="token keyword">column</span> operator <span class="token punctuation">(</span><span class="token keyword">SELECT</span> expression
                        <span class="token keyword">FROM</span>   table2 alias2
                        <span class="token keyword">WHERE</span>  alias1<span class="token punctuation">.</span><span class="token keyword">column</span> <span class="token operator">=</span> alias2<span class="token punctuation">.</span><span class="token keyword">column</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用相关子查询依据一个表中的数据删除另一个表的数据。</p><p><strong>题目：删除表employees中，其与emp_history表皆有的数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> employees e
<span class="token keyword">WHERE</span> employee_id <span class="token operator">in</span>  
           <span class="token punctuation">(</span><span class="token keyword">SELECT</span> employee_id
            <span class="token keyword">FROM</span>   emp_history 
            <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-抛一个思考题" tabindex="-1"><a class="header-anchor" href="#_5-抛一个思考题" aria-hidden="true">#</a> 5. 抛一个思考题</h2><p>**问题：**谁的工资比Abel的高？</p><p><strong>解答：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#方式1：自连接</span>
<span class="token keyword">SELECT</span> e2<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>e2<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span>employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
<span class="token operator">AND</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span> <span class="token operator">&lt;</span> e2<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span>
<span class="token comment">#方式2：子查询</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> salary
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**问题：**以上两种方式有好坏之分吗？</p><p>**解答：**自连接方式好！</p><p>题目中可以使用子查询，也可以使用自连接。一般情况建议你使用自连接，因为在许多 DBMS 的处理过程中，对于自连接的处理速度要比子查询快得多。</p><p>可以这样理解：子查询实际上是通过未知表进行查询后的条件判断，而自连接是通过已知的自身数据表进行条件判断，因此在大部分 DBMS 中都对自连接处理进行了优化。</p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><p>1.查询和Zlotkey相同部门的员工姓名和工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> salary 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span> 
    <span class="token keyword">SELECT</span> department_id 
    <span class="token keyword">FROM</span> employees 
    <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Zlotkey&#39;</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.查询工资比公司平均工资高的员工的员工号，姓名和工资。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span> 
    <span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
    <span class="token keyword">FROM</span> employees 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.选择工资大于所有JOB_ID = &#39;SA_MAN&#39;的员工的工资的员工的last_name, job_id, salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1 </span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>   <span class="token comment">-- 单行子查询</span>
    <span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
    <span class="token keyword">FROM</span> employees 
    <span class="token keyword">WHERE</span> job_id<span class="token operator">=</span><span class="token string">&#39;SA_MAN&#39;</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式2</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>  <span class="token comment">-- 多行子查询</span>
    <span class="token keyword">SELECT</span> salary 
    <span class="token keyword">FROM</span> employees 
    <span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;SA_MAN&#39;</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">IN</span><span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">WHERE</span> last_name <span class="token operator">LIKE</span> <span class="token string">&#39;%u%&#39;</span>
	<span class="token comment">-- WHERE last_name REGEXP &#39;[u]&#39; --正则表达式</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.查询在部门的location_id为1700的部门工作的员工的员工号</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">IN</span><span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id
		<span class="token keyword">FROM</span> departments
		<span class="token keyword">WHERE</span> location_id <span class="token operator">=</span> <span class="token number">1700</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.查询管理者是King的员工姓名和工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1 多表连接 join on</span>
<span class="token keyword">SELECT</span> worker<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>worker<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees worker
<span class="token keyword">JOIN</span> employees mar
<span class="token keyword">ON</span> worker<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> mar<span class="token punctuation">.</span>employee_id
<span class="token keyword">WHERE</span> mar<span class="token punctuation">.</span>last_name<span class="token operator">=</span><span class="token string">&#39;King&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式2  多行子查询</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> salary 
<span class="token keyword">FROM</span> employees 
<span class="token keyword">WHERE</span> manager_id <span class="token operator">IN</span> <span class="token punctuation">(</span> 
    <span class="token keyword">SELECT</span> employee_id 
    <span class="token keyword">FROM</span> employees 
    <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;King&#39;</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.查询工资最低的员工信息: last_name, salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> 
    <span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.查询平均工资最低的部门信息</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> 
<span class="token keyword">FROM</span> departments 
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span> 
		<span class="token keyword">SELECT</span> department_id 
		<span class="token keyword">FROM</span> employees 
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id 
		<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span> 
				<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>dept_avgsal<span class="token punctuation">)</span> 
				<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
						<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> dept_avgsal 
						<span class="token keyword">FROM</span> employees 
						<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id 
					<span class="token punctuation">)</span> avg_sal 
		<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式二： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> departments
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
<span class="token comment">-- 方式三： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> departments
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
<span class="token comment">-- 方式四： </span>
<span class="token keyword">SELECT</span> d<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> departments d<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span> dept_avg_sal
<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> dept_avg_sal<span class="token punctuation">.</span>department_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9.查询平均工资最低的部门信息和该部门的平均工资（相关子查询）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一： </span>
<span class="token keyword">SELECT</span> d<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>dept_avgsal<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> dept_avgsal
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token punctuation">)</span> avg_sal
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式二： </span>
<span class="token keyword">SELECT</span> d<span class="token punctuation">.</span><span class="token operator">*</span>
	<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span>
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式三： </span>
<span class="token keyword">SELECT</span> d<span class="token punctuation">.</span><span class="token operator">*</span>
	<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
<span class="token comment">-- 方式四： </span>
<span class="token keyword">SELECT</span> d<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span> dept_avg_sal<span class="token punctuation">.</span>avg_sal
<span class="token keyword">FROM</span> departments d<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span> dept_avg_sal
<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> dept_avg_sal<span class="token punctuation">.</span>department_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.查询平均工资最高的 job 信息</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> jobs
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> job_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>avg_sal<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
		<span class="token punctuation">)</span> job_avgsal
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式二： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> jobs
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> job_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式三： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> jobs
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> job_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
	<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal <span class="token keyword">DESC</span>
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式四： </span>
<span class="token keyword">SELECT</span> j<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> jobs j<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> job_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> job_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal <span class="token keyword">DESC</span>
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span> job_avg_sal
<span class="token keyword">WHERE</span> j<span class="token punctuation">.</span>job_id <span class="token operator">=</span> job_avg_sal<span class="token punctuation">.</span>job_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.查询平均工资高于公司平均工资的部门有哪些?</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12.查询出公司中所有 manager 的详细信息</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
	<span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式2： </span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> e1<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e1
	<span class="token keyword">JOIN</span> employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>employee_id <span class="token operator">=</span> e2<span class="token punctuation">.</span>manager_id<span class="token punctuation">;</span>
 
<span class="token comment">-- 方式3： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span>
	<span class="token keyword">FROM</span> employees e2
	<span class="token keyword">WHERE</span> e2<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> e1<span class="token punctuation">.</span>employee_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13.各个部门的最高工资中最低的那个部门的 最低工资是多少?</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1: </span>
<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>max_sal<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_sal
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token punctuation">)</span> dept_max_sal
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
<span class="token comment">-- 方式2: </span>
<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
<span class="token comment">-- 方式3： </span>
<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> max_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
 
 
<span class="token comment">-- 方式4： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees e<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> max_sal
		<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
	<span class="token punctuation">)</span> dept_max_sal
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> dept_max_sal<span class="token punctuation">.</span>department_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14.查询平均工资最高的部门的 manager 的详细信息: last_name, department_id, email, salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> department_id<span class="token punctuation">,</span> email<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>avg_sal<span class="token punctuation">)</span>
			<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
				<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
				<span class="token keyword">FROM</span> employees
				<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
			<span class="token punctuation">)</span> dept_sal
		<span class="token punctuation">)</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式二： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> department_id<span class="token punctuation">,</span> email<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id
		<span class="token keyword">FROM</span> employees e
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
		<span class="token punctuation">)</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式三： </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
	<span class="token keyword">FROM</span> employees e<span class="token punctuation">,</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
			<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> avg_sal <span class="token keyword">DESC</span>
			<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
		<span class="token punctuation">)</span> dept_avg_sal
	<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> dept_avg_sal<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>15.查询部门的部门号，其中不包括job_id是&quot;ST_CLERK&quot;的部门号</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方法一： </span>
<span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> department_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;ST_CLERK&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方法二： </span>
<span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span>
	<span class="token keyword">FROM</span> employees e
	<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span>
		<span class="token operator">AND</span> job_id <span class="token operator">=</span> <span class="token string">&#39;ST_CLERK&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16.选择所有没有管理者的员工的last_name</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span>
	<span class="token keyword">FROM</span> employees e2
	<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> e2<span class="token punctuation">.</span>employee_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>17．查询员工号、姓名、雇用时间、工资，其中员工的管理者为 &#39;De Haan&#39;</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> hire_date<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> manager_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> employee_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;De Haan&#39;</span>
<span class="token punctuation">)</span>
 
<span class="token comment">-- 方式2： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> hire_date<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span>
	<span class="token keyword">FROM</span> employees e2
	<span class="token keyword">WHERE</span> e2<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>employee_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> e1<span class="token punctuation">.</span>manager_id
		<span class="token operator">AND</span> e2<span class="token punctuation">.</span>last_name <span class="token operator">=</span> <span class="token string">&#39;De Haan&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>18.查询各部门中工资比本部门平均工资高的员工的员工号, 姓名和工资（相关子查询）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一：</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees e2
	<span class="token keyword">WHERE</span> e2<span class="token punctuation">.</span>department_id <span class="token operator">=</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">-- 方式二： </span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_sal
		<span class="token keyword">FROM</span> employees e2
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token punctuation">)</span> dept_avg_sal
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> dept_avg_sal<span class="token punctuation">.</span>department_id
	<span class="token operator">AND</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span> <span class="token operator">&gt;</span> dept_avg_sal<span class="token punctuation">.</span>avg_sal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>19.查询每个部门下的部门人数大于 5 的部门名称（相关子查询）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式1</span>
<span class="token keyword">SELECT</span> department_name
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> employees e
	<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span>department_id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">-- 方式2</span>
<span class="token keyword">SELECT</span> department_name
<span class="token keyword">FROM</span> departments
<span class="token keyword">WHERE</span> department_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20.查询每个国家下的部门个数大于 2 的国家编号（相关子查询）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> country_id
<span class="token keyword">FROM</span> locations l
<span class="token keyword">WHERE</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
	<span class="token keyword">FROM</span> departments d
	<span class="token keyword">WHERE</span> l<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>location_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>location_id<span class="token punctuation">\`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子查询的编写技巧（或步骤）：</p><p>① 从里往外写 ② 从外往里写</p><p>如何选择？</p><p>① 如果子查询相对较简单，建议从外往里写。一旦子查询结构较复杂，则建议从里往外写</p><p>② 如果是相关子查询的话，通常都是从外往里写。</p>`,172),l=[t];function o(i,c){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","09.html.vue"]]);export{r as default};

import{ab as p,G as i,H as o,E as s,S as n,N as e,ac as a,W as l}from"./framework-09305b5d.js";const c={},r=a('<h1 id="_02-【css-代码规范】" tabindex="-1"><a class="header-anchor" href="#_02-【css-代码规范】" aria-hidden="true">#</a> 02 【CSS 代码规范】</h1><h2 id="_1-stylelint介绍及安装" tabindex="-1"><a class="header-anchor" href="#_1-stylelint介绍及安装" aria-hidden="true">#</a> 1. Stylelint介绍及安装</h2><h3 id="_1-1-什么是stylelint" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是stylelint" aria-hidden="true">#</a> 1.1 什么是Stylelint</h3><p>Stylelint是一个强大的，现代的代码检查工具，与ESLint类似，Stylelint能够通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。</p><p>目前在开源社区上，关于CSS Lint的解决方案主要包括了csslint、SCSS-Lint和Stylelint等几种。而由于Stylelint在技术架构上基于AST 的方式扩展CSS，除原生CSS 语法，其也支持 SCSS、Less 这类预处理器，并且也有非常多的第三方插件，因此我们团队选择了Stylelint作为CSS Lint工具。</p>',5),u={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="_1-2-安装stylelint" tabindex="-1"><a class="header-anchor" href="#_1-2-安装stylelint" aria-hidden="true">#</a> 1.2 安装Stylelint</h3><p>可以选采用npm安装Stylelint。其中，stylelint-config-standard是Stylelint的标准配置。如果想使用airbnb或prettier的规范，也可以将stylelint-config-standard改为stylelint-config-airbnb或stylelint-config-prettier。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install stylelint stylelint-config-standard --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-安装适配预处理语法的插件" tabindex="-1"><a class="header-anchor" href="#_1-3-安装适配预处理语法的插件" aria-hidden="true">#</a> 1.3 安装适配预处理语法的插件</h3><p>如果我们项目中采用了如sass或less等css预处理器，那么可以安装适配预处理语法的插件。以sass为例，需要安装stylelint-scss插件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install stylelint-scss --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-安装css属性排序插件" tabindex="-1"><a class="header-anchor" href="#_1-4-安装css属性排序插件" aria-hidden="true">#</a> 1.4 安装CSS属性排序插件</h3><p>我们也可以选择安装stylelint-order插件。该插件能够强制我们按照某个顺序编写css，比如先写定位，再写盒模型，再写内容区样式，最后写CSS3相关属性，这样可以更好的保证我们代码的可读性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install stylelint-order --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-stylelint配置" tabindex="-1"><a class="header-anchor" href="#_2-stylelint配置" aria-hidden="true">#</a> 2. Stylelint配置</h2><h3 id="_2-1-stylelint配置方式" tabindex="-1"><a class="header-anchor" href="#_2-1-stylelint配置方式" aria-hidden="true">#</a> 2.1 Stylelint配置方式</h3><p>安装好Stylelint之后，就需要对Stylelint进行配置。Stylelint的配置方式包括了以下几种：</p><ul><li><p>在package.json中添加stylelint属性并添加规则</p></li><li><p>在.stylelintrc文件中指定，.stylelintrc文件支持添加一个文件扩展名来区分 JSON，YAML 或 JS 格式，如创建.stylelintrc.json、.stylelintrc.yaml、.stylelintrc.yml或.stylelintrc.js文件</p></li><li><p>在stylelint.config.js文件中指定，该文件将会exports一个配置对象</p><p>在这里，我们选择了在项目根目录创建.stylelintrc.js来配置Stylelint。</p></li></ul><figure><img src="https://article.biliimg.com/bfs/article/75e9e492f1c132fabe3d25d5e1af7a2d9a7e4ab1.png" alt="image-20230216225913721" tabindex="0" loading="lazy"><figcaption>image-20230216225913721</figcaption></figure><p>在.stylelintrc.js文件中，我们可以指定要配置的内容，下面给出了一个配置文件的例子。</p><p>其中，该配置文件采用了stylelint-config-standard标准配置，并且添加了stylelint-order插件用于CSS属性排序，在rules中，可以指定声明块内属性的顺序，也可以自定义CSS检查规则。比如定义了color-hex-case为lower，表示CSS文件的颜色值都必须小写，否则会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-order&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-config-standard&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定声明块内属性的字母顺序</span>
    <span class="token string-property property">&#39;order/properties-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;z-index&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;float&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-top-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-right-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-bottom-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-left-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-x&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-y&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clip&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-smoothing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;osx-font-smoothing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-weight&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;hyphens&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;line-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;letter-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-decoration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-indent&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-rendering&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-size-adjust&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-shadow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-transform&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-break&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;white-space&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;vertical-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-type&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;pointer-events&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;cursor&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-attachment&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-repeat&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-right-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-right-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-left-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-left-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius-topright&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius-bottomright&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius-bottomleft&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius-topleft&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;quotes&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-offset&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;opacity&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;visibility&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;zoom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-flex&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-orient&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-pack&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-shadow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-sizing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;table-layout&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-delay&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-duration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-iteration-count&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-name&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-play-state&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-timing-function&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-fill-mode&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-delay&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-duration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-property&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-timing-function&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-clip&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;backface-visibility&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;appearance&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;user-select&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;interpolation-mode&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;direction&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;marks&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;set-link-source&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;unicode-bidi&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;speak&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 颜色值要小写     &#39;color-hex-case&#39;: &#39;lower&#39;,&#39;number-leading-zero&#39;: &#39;always&#39;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-stylelint配置项" tabindex="-1"><a class="header-anchor" href="#_2-2-stylelint配置项" aria-hidden="true">#</a> 2.2 Stylelint配置项</h2><p>在上面的配置文件中，我们主要定义了一个配置对象，接下来将对常用的配置项进行介绍。</p><p><strong>（1）plugins</strong></p><p>plugins定义了一个数组，该配置项允许我们使用第三方插件，在该数组中，需要包含“定位器”标识出你要使用的插件，一个“定位器”可以是一个 npm 模块名，一个绝对路径，或一个相对于要调用的配置文件的路径。</p><p>一旦声明了插件，在rules中需要为插件的规则添加选项，就像其他标准的规则一样。你需要查看插件的文档去了解规则的名称。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;../special-rule.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
    <span class="token string-property property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugin/special-rule&quot;</span><span class="token operator">:</span> <span class="token string">&quot;everything&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）extends</strong></p><p>extends定义了一个数组，该配置项允许我们extend一个已存在的配置文件(无论是你自己的还是第三方的配置)。当一个配置继承了里一个配置，它将会添加自己的属性并覆盖原有的属性。比如下面的代码，我们就extend了Stylelint的标准配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;number-leading-zero&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果extends中包含多个配置项，那么数组中的每一项都优先于前一项，也就是说第二项会覆盖第一项，第三项会覆盖第一项和第二项，最后一项将覆盖其它所有项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./myExtendableConfig&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）rules</strong></p>`,29),v={href:"https://stylelint.io/user-guide/rules/list",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>规则名称主要由两个部分组成，第一部分描述该规则应用于什么东西，第二部分表示该规则检查了什么。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;number-leading-zero&quot;</span>
<span class="token comment">// ↑          ↑</span>
<span class="token comment">// the thing  what the rule is checking</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当规则名称应用于整个样式表时只包含第二个部分：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;no-eol-whitespace&quot;</span>
<span class="token string">&quot;indentation&quot;</span>
<span class="token comment">//    ↑</span>
<span class="token comment">// what the rules are checking</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当规则名称不同时，规则取值也不同。我们可以将某个规则设置为null禁用该规则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;at-rule-blacklist&quot;</span><span class="token operator">:</span> string<span class="token operator">|</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;at-rule-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token operator">|</span><span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;at-rule-name-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lower&quot;</span><span class="token operator">|</span><span class="token string">&quot;upper&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;block-no-empty&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了规则本身的取值之外，Stylelint还支持一些自定义配置，允许给规则传递一个数组，数组第一项是规则取值，第二项是自定义配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;selector-pseudo-class-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;ignorePseudoClasses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过自定义配置，我们可以指定：</p><ul><li>severity：错误级别，取值为”warning&quot;或&quot;error&quot;，默认情况下，所有规则的错误级别都为&quot;error&quot;，通过defatuleServerity，可以修改错误级别的默认值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// error-level severity examples</span>
<span class="token punctuation">{</span> <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

<span class="token comment">// warning-level severity examples</span>
<span class="token punctuation">{</span> <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;except&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>message：当一个规则被触发时，如果你想实现一个自定义的消息，可以给规则的传递&quot;message“作为第二选项，如果提供，将替代提供的任何标准的消息。例如，以下规则配置会使用一些自定义的消息：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;color-hex-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lowercase letters are easier to distinguish from numbers&quot;</span>
  <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;block&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Please use 2 spaces for indentation. Tabs make The Architect grumpy.&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>
  <span class="token punctuation">}</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）processors</strong></p><p>Processors是Stylelint的钩子函数，只能用在命令行和Node API，不适用于PostCSS插件。Processors可以使Stylelint检测非样式表文件中的CSS。例如，可以检测HTML内中<code>&lt;style&gt;</code>标签中的CSS，Markdown文件中代码块或JavaScript中的字符串。</p><p>使用Processors的话，需要在配置中添加一个”processors“数组，包含“定位器”标识出你要使用的 processors。同上面的extends，一个“定位器”可以是一个 npm 模块名，一个绝对路径，或一个相对于要调用的配置文件的路径。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;processors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-html-processor&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的processor有选项，把它们放到一个数组里，第一项是“定位器”，第二项是选项对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;processors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-html-processor&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span> <span class="token string">&quot;some-other-processor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;optionOne&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;optionTwo&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-忽略特定文件的检查" tabindex="-1"><a class="header-anchor" href="#_2-3-忽略特定文件的检查" aria-hidden="true">#</a> 2.3 忽略特定文件的检查</h2><p>在实际的使用场景中，我们可能存在某些文件或某行代码，希望能够跳过Stylelint的检查或禁用某些规则，下面主要介绍了几种跳过Stylelint检查的方式：</p><p><strong>（1）使用注释禁用规则</strong></p><p>使用/* stylelint-disable */，可以在代码片段禁用所有规则或禁用特定规则。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* stylelint-disable */</span>
<span class="token selector">a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/* stylelint-enable */</span>

<span class="token comment">/* stylelint-disable selector-no-id, declaration-no-important  */</span>
<span class="token selector">#id</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* stylelint-enable */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用/* stylelint-disable-line */，可以在个别行上禁用规则。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id</span> <span class="token punctuation">{</span> <span class="token comment">/* stylelint-disable-line */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/* stylelint-disable-line declaration-no-important */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用/* stylelint-disable-next-line */，可以在下一行禁用规则。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id</span> <span class="token punctuation">{</span>
  <span class="token comment">/* stylelint-disable-next-line declaration-no-important */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）创建.stylelintignore忽略某些文件的检查</strong></p><p>在项目根目录创建.stylelintignore文件。</p><figure><img src="https://article.biliimg.com/bfs/article/371513c40ae9b099cebce668c36d412571ec6adb.png" alt="image-20230216230415310" tabindex="0" loading="lazy"><figcaption>image-20230216230415310</figcaption></figure><p>在.stylelintignore中写入需要跳过Stylelint检查的文件名称，比如下面的代码将会忽略dist，node_modules和package.json文件的Stylelint检查。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist
node_modules
package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-执行stylelint检查" tabindex="-1"><a class="header-anchor" href="#_2-4-执行stylelint检查" aria-hidden="true">#</a> 2.4 执行Stylelint检查</h3><p>安装配置好Stylelint之后，我们就可以运行Stylelint命令，对指定的文件进行CSS语法检查，其中，--fix表示自动修复Stylelint错误。</p><p>运行Stylelint命令后，如果什么也没有输出，就说明我们的文件已经通过Stylelint的检查。如果输出报错信息，就说明没有通过Stylelint的检查，需要根据错误信息对代码进行修复。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 对某个文件进行检查
stylelint <span class="token string">&quot;src/App.vue&quot;</span> <span class="token parameter variable">--fix</span>

// 对指定后缀名的文件进行检查
stylelint <span class="token string">&quot;src/*.{html,vue,css,saas,scss,less}&quot;</span> <span class="token parameter variable">--fix</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了直接在命令行运行Stylelint命令方式之外，我们也可以在package.json中自定义Stylelint的启动命令。如下面代码所示，配置好package.json之后，我们通过运行npm run lint:css就能够对指定文件进行Stylelint检查。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development vue-cli-service serve --mode dev&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;serve:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=test vue-cli-service serve --mode test&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;serve:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production vue-cli-service serve --mode prod&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production vue-cli-service build --mode dev&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production vue-cli-service build --mode test&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production vue-cli-service build --mode prod&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lint:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint **/*.{vue,htm,html,css,sss,less,scss,sass} --fix&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vscode插件" tabindex="-1"><a class="header-anchor" href="#_3-vscode插件" aria-hidden="true">#</a> 3. VSCode插件</h2><h3 id="_3-1-安装stylelint插件" tabindex="-1"><a class="header-anchor" href="#_3-1-安装stylelint插件" aria-hidden="true">#</a> 3.1 安装Stylelint插件</h3><p>为了让我们在编写代码的过程中，能够实时提示Stylelint错误，并且在保存文件时，能够自动对当前文件进行Stylelint检查和修复，我们可以在VSCode中安装Stylelint插件。</p><p>在VSCode的EXTENSIONS中找到Stylelint插件，点击install就可以安装Stylelint插件。</p><figure><img src="https://article.biliimg.com/bfs/article/a9ba2dcfcad2a93ad0ba1da1ddc6daeb9db28efa.png" alt="image-20230216230515078" tabindex="0" loading="lazy"><figcaption>image-20230216230515078</figcaption></figure><h2 id="_3-2-配置settings-json文件" tabindex="-1"><a class="header-anchor" href="#_3-2-配置settings-json文件" aria-hidden="true">#</a> 3.2 配置settings.json文件</h2><p>安装好Stylelint插件之后，我们还需要配置VSCode的settings.json文件，让我们的代码在保存时，就能够按照规范对CSS样式进行检查及自动fix。VSCode的settings.json设置分为工作区和用户区两个级别。其中，用户区的设置会对所有项目生效，工作区的设置只能对当前项目生效。</p><p><strong>（1）用户区settings.json配置</strong></p><p>点击VSCode左下角的设置按钮，选择Settings，并且选择以文本编辑的方式打开settings.json，在settings.json中加入以下代码。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 保存时是否自动 stylelint 修复</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）工作区settings.json配置</strong></p><p>在项目根目录创建.vscode目录，并且在该目录下创建settings.json文件。</p><p>在settings.json中加入以下代码。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 保存时是否自动 stylelint 修复</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好用户区或工作区的settings.json后，当我们修改了某个文件的CSS代码，并且保存时，就会发现能够对当前文件自动进行stylelint检查和修复了。</p>`,54);function m(g,b){const t=l("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[n("官方文档："),s("a",u,[n("https://stylelint.io/"),e(t)])]),d,s("p",null,[n("rules定义了一个对象，属性名为规则名称，属性值为规则取值，它告诉Stylelint该检查什么，该怎么报错，所有的"),s("a",v,[n("规则"),e(t)]),n("都是默认关闭的。我们可以通过该选项开启相应规则，进行相应的检测。所有规则必须显式的进行配置，因为没有默认值。")]),k])}const h=p(c,[["render",m],["__file","02.html.vue"]]);export{h as default};

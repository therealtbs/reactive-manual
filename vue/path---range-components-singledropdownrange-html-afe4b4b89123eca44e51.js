webpackJsonp([0xca9fd56f0936],{491:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/xiwVBBU.png" alt="Image to be displayed"></p>\n<p><code>SingleDropdownRange</code> creates a dropdown based numeric range UI component.</p>\n<blockquote>\n<p>Note</p>\n<p>This component is exactly like the <a href="/reactive-manual/basic-components/singlerange.html">SingleRange</a> component except the UI is based on a dropdown, ideal for showing additional UI filters while conserving screen space.</p>\n</blockquote>\n<p>Example uses:</p>\n<ul>\n<li>filtering search results by prices in an e-commerce or food delivery experience.</li>\n<li>browsing movies by a ratings filter.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>SingleDropdownRange\n  componentId<span class="token operator">=</span><span class="token string">"PriceSensor"</span>\n  dataField<span class="token operator">=</span><span class="token string">"price"</span>\n  data<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n  title<span class="token operator">=</span><span class="token string">"Prices"</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>SingleDropdownRange\n  componentId<span class="token operator">=</span><span class="token string">"PriceSensor"</span>\n  dataField<span class="token operator">=</span><span class="token string">"price"</span>\n  data<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n  title<span class="token operator">=</span><span class="token string">"Prices"</span>\n  defaultSelected<span class="token operator">=</span><span class="token string">"Cheap"</span>\n  placeholder<span class="token operator">=</span><span class="token string">"Select price range"</span>\n  showFilter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n  filterLabel<span class="token operator">=</span><span class="token string">"Price"</span>\n  URLParams<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. The range items are filtered by a database query on this field.</li>\n<li><strong>data</strong> <code>Object Array</code><br>\ncollection of UI <code>labels</code> with associated <code>start</code> and <code>end</code> range values.</li>\n<li><strong>title</strong> <code>String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>defaultSelected</strong> <code>String</code> [optional]<br>\npre-select a label from the <code>data</code> array.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nset the placeholder to show for the dropdown UI, useful when no option is <code>defaultSelected</code>. The default placeholder value is set to “Select a value”.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/SingleDropdownRange" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>SingleDropdownRange</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>select</code></li>\n<li><code>list</code></li>\n<li><code>icon</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>SingleDropdownRange</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code> and <code>onQueryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>SingleDropdownRange\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS styles to be applied to the <strong>SingleDropdownRange</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code><br>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>SingleDropdownRange</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a range item is selected in a “Prices” SingleDropdownRange.</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Range%20components%2FSingleDropdownRange" target="_blank">SingleDropdownRange with default props</a></p>',frontmatter:{title:"SingleDropdownRange",next:"range-components/multidropdownrange.html",prev:"range-components/multirange.html",nextTitle:"MultiDropdownRange",prevTitle:"MultiRange"},fields:{path:"docs/range-components/SingleDropdownRange.md",slug:"range-components/singledropdownrange.html"}}},pathContext:{slug:"range-components/singledropdownrange.html"}}}});
//# sourceMappingURL=path---range-components-singledropdownrange-html-afe4b4b89123eca44e51.js.map
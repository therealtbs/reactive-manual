webpackJsonp([70538765135625],{429:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/jIWB5wY.png">\n<img src="https://i.imgur.com/7Nn63DP.png"></p>\n<p><code class="gatsby-code-text">SingleDropdownList</code> creates a dropdown list based single select UI component. It is used for filtering results based on the current selection from a list of items.</p>\n<p>Example uses:</p>\n<ul>\n<li>select a category from a list of categories for filtering e-commerce search results.</li>\n<li>filtering restaurants by a cuisine choice.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleDropdownList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>brand.raw<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleDropdownList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>brand.raw<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Pick a car<span class="token punctuation">"</span></span>\n  <span class="token attr-name">defaultSelected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>volvo<span class="token punctuation">"</span></span>\n  <span class="token attr-name">selectAllLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>All cars<span class="token punctuation">"</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>count<span class="token punctuation">"</span></span>\n  <span class="token attr-name">showCount</span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showFilter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">filterLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Car<span class="token punctuation">"</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CategoryFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code class="gatsby-code-text">String</code><br>\nunique identifier of the component, can be referenced in other components’ <code class="gatsby-code-text">react</code> prop.</li>\n<li><strong>dataField</strong> <code class="gatsby-code-text">String</code><br>\ndata field to be connected to the component’s UI view. This field is used for doing an aggregation and returns the result. We’re using a <code class="gatsby-code-text">.raw</code> multifield here. You can use a field of type <code class="gatsby-code-text">keyword</code> or <code class="gatsby-code-text">not_analyzed</code> depending on your Elasticsearch cluster.</li>\n<li><strong>defaultSelected</strong> <code class="gatsby-code-text">string</code> [optional]<br>\ndefault selected value pre-selects an option from the list.</li>\n<li><strong>placeholder</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nplaceholder to be displayed in the dropdown searchbox. Defaults to “Select a value”.</li>\n<li><strong>size</strong> <code class="gatsby-code-text">Number</code> [optional]<br>\ncontrol how many items to display in the List. Defaults to 100.</li>\n<li><strong>sortBy</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nproperty that decides on how to sort the list items, accepts one of <code class="gatsby-code-text">count</code>, <code class="gatsby-code-text">asc</code> or <code class="gatsby-code-text">desc</code> as valid values. <code class="gatsby-code-text">count</code> sorts the list based on the count occurences, with highest value at the top. <code class="gatsby-code-text">asc</code> sorts the list in the ascending order of the list item (Alphabetical). <code class="gatsby-code-text">desc</code> sorts the list in the descending order of the term. Defaulted to <code class="gatsby-code-text">count</code>.</li>\n<li><strong>showCount</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow count of number of occurences besides an item. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>selectAllLabel</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nif provided, shows an extra option to select all the options in the list with the provided string value.</li>\n<li><strong>showFilter</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>filterLabel</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code class="gatsby-code-text">showFilter</code> is enabled. Default value used here is <code class="gatsby-code-text">componentId</code>.</li>\n<li><strong>innerProps</strong> <code class="gatsby-code-text">Object</code> [optional]<br>\nspecifies additional props for the internal components. Accepts an object with the specified keys. Read more about the usage <a href="/reactive-manual/native/advanced/innerprops.html">here</a></li>\n</ul>\n<br />\n<table>\n<thead>\n<tr>\n<th align="right"><strong>Key</strong></th>\n<th align="center"><strong>Explanation</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="right"><code class="gatsby-code-text">picker</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#picker-def-headref">Picker</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code class="gatsby-code-text">pickerItem</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#picker-def-headref">Picker.Item</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<div data-snack-id="@dhruvdutt/singledropdownlist-example" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>\n<p><a href="https://snack.expo.io/@dhruvdutt/singledropdownlist-example" target="_blank">View on Snack</a></p>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code class="gatsby-code-text">SingleDropdownList</code> component supports <code class="gatsby-code-text">style</code> prop. Read more about it <a href="/reactive-manual/native/advanced/style.html">here</a>.</p>\n<p>It also supports an <code class="gatsby-code-text">innerStyle</code> prop with the following keys:</p>\n<ul>\n<li><code class="gatsby-code-text">label</code></li>\n<li><code class="gatsby-code-text">title</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/native/advanced/style.html#innerstyle">here</a></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code class="gatsby-code-text">SingleDropdownList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code class="gatsby-code-text">style</code>,</li>\n<li>update the underlying DB query with <code class="gatsby-code-text">customQuery</code>,</li>\n<li>connect with external interfaces using <code class="gatsby-code-text">beforeValueChange</code>, <code class="gatsby-code-text">onValueChange</code> and <code class="gatsby-code-text">onQueryChange</code>,</li>\n<li>specify how search suggestions should be filtered using <code class="gatsby-code-text">react</code> prop</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>SingleDropdownList\n  <span class="token operator">...</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// specify how and which suggestions are filtered using `react` prop.</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"pricingFilter"</span><span class="token punctuation">,</span> <span class="token string">"dateFilter"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"or"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"searchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<ul>\n<li><strong>style</strong> <code class="gatsby-code-text">Object</code>\nCSS styles to be applied to the <strong>SingleDropdownList</strong> component.</li>\n<li><strong>customQuery</strong> <code class="gatsby-code-text">Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code class="gatsby-code-text">Note:</code> customQuery is called on value changes in the <strong>SingleDropdownList</strong> component as long as the component is a part of <code class="gatsby-code-text">react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the SingleDropdownList.</li>\n<li><strong>onQueryChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li>\n<p><strong>react</strong> <code class="gatsby-code-text">Object</code><br>\nspecify dependent components to reactively update <strong>SingleDropdownList’s</strong> suggestions.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code class="gatsby-code-text">String</code><br>\none of <code class="gatsby-code-text">and</code>, <code class="gatsby-code-text">or</code>, <code class="gatsby-code-text">not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code class="gatsby-code-text">String or Array or Object</code>  </p>\n<ul>\n<li><code class="gatsby-code-text">String</code> is used for specifying a single component by its <code class="gatsby-code-text">componentId</code>.</li>\n<li><code class="gatsby-code-text">Array</code> is used for specifying multiple components by their <code class="gatsby-code-text">componentId</code>.</li>\n<li><code class="gatsby-code-text">Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"SingleDropdownList",next:"components/multidropdownlist.html",prev:"components/datasearch.html",nextTitle:"MultiDropdownList",prevTitle:"DataSearch"},fields:{path:"docs/components/SingleDropdownList.md",slug:"components/singledropdownlist.html"}}},pathContext:{slug:"components/singledropdownlist.html"}}}});
//# sourceMappingURL=path---components-singledropdownlist-html-fa9c866878851bf9384f.js.map
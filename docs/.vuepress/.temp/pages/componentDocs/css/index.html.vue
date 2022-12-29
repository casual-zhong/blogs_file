<template><div><h1 id="常用css样式" tabindex="-1"><a class="header-anchor" href="#常用css样式" aria-hidden="true">#</a> 常用css样式</h1>
<h2 id="文字超出部分显示省略号" tabindex="-1"><a class="header-anchor" href="#文字超出部分显示省略号" aria-hidden="true">#</a> 文字超出部分显示省略号</h2>
<blockquote>
<p>一定要有宽度</p>
</blockquote>
<div class="language-css" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* 单行文本的溢出显示省略号 */</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
    width<span class="token punctuation">:</span>200rpx<span class="token punctuation">;</span>
    overflow<span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    text-overflow<span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
    white-space<span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token comment">/* 多行文本溢出显示省略号 */</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
    display<span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    -webkit-box-orient<span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    -webkit-line-clamp<span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    overflow<span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div><h2 id="中英文自动换行" tabindex="-1"><a class="header-anchor" href="#中英文自动换行" aria-hidden="true">#</a> 中英文自动换行</h2>
<blockquote>
<p>word-break:break-all;只对英文起作用，以字母作为换行依据word-wrap:break-word; 只对英文起作用，以单词作为换行依据white-space:pre-wrap; 只对中文起作用，强制换行white-space:nowrap; 强制不换行，都起作用</p>
</blockquote>
<div class="language-css" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 不换行 */</span>
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  white-space<span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 自动换行 */</span>
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  word-wrap<span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  word-break<span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 强制换行 */</span>
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  word-break<span class="token punctuation">:</span>break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>



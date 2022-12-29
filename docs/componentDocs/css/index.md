# 常用css样式

## 文字超出部分显示省略号

>一定要有宽度

```css
/* 单行文本的溢出显示省略号 */
p{
    width:200rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
 }
/* 多行文本溢出显示省略号 */
p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
 }
```

## 中英文自动换行

>word-break:break-all;只对英文起作用，以字母作为换行依据word-wrap:break-word; 只对英文起作用，以单词作为换行依据white-space:pre-wrap; 只对中文起作用，强制换行white-space:nowrap; 强制不换行，都起作用

```css
p{
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
}

/* 不换行 */
.wrap {
  white-space:nowrap;
}
/* 自动换行 */
.wrap {
  word-wrap: break-word;
  word-break: normal;
}
/* 强制换行 */
.wrap {
  word-break:break-all;
}
```

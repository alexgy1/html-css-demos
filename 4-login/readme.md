## 两个方式实现 login

- loginwithJQ
  - 里面 after attr 处理显示的文字
  - jq 操作 dom 的思想实现 添加/移除类名
  - 有 bug 点击文字的时候不会缩放
- loginwithVue
  - 数据驱动视图
  - label 的使用

## 关于自定义字体的引入

```
//引入 并且给个名字
@font-face {
    font-family: diy;
    src: url("assets/方正-喵呜.TTF");
}

//使用
font-family: diy;
```

## 定位

- position absolute/relative
- display flex 的使用

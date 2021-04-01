## html5 标签

- article

  - 可以平级
  - 可以嵌套
  - 可以内嵌页面

- aside

  - article 里面解释
  - 全局侧边栏

- nav 导航
- section

  - 没有标题的内容不要使用
  - 不要之作为将设置样式的容器，是 div 的工作
  - article nav aside 更符合 不要用 section

- time

  - T 分隔符
  - Z 机器编码 utc 时间
  - +09:00 时差

- pubdate

## 媒体查询

- 外联 link 标签支持 media 属性
- 内嵌 @media 里面属性规则 根据最小和最大宽度来重新调整样式

## 菜单 大屏幕和小屏幕响应式

## table 响应式

## 过度效果

tranform :

- rotate
- scale
- skew
- transalteX /Y/ Z
- translate3d

## 动画效果

animation + keyframe

```js
//keyframe 定一个 动画
@keyframes anim{
  to {

  }
  from{

  }
}
```

- `animation-name` 需要绑定到选择器的 keyframe 的名称
- `animation-duration` 完成动画所花费的时间，毫秒计算
- `animation-time-function` 规定动画的速度曲线
- `animation-delay` 动画开始之前的延迟
- `animation-iteration-count` 动画应该播放的次数

50% 不写 100% 的话 就会自己回到 100%

也可以用 `from` `to`来定义
代表 0% to 代表 100%

默认是的 ease 要改成 linear 如果实现 cd 一直匀速旋转的效果的话

停止动画效果

animation-play-state : paused

## 布局

- flex

- flex-grow 放大比例 默认为 0 空间充足 等比例补全
- flex-shrink 缩小比例 默认是 1 空间不足将自动缩小
- flex-basis 主轴排列为宽度 交叉轴排列为高度 设置 px 默认值是 auto
- flex : 1 综合上面三个样式

align-self 项目自己的对其的方式

- grid

先设置 grid 容器

```css
.container {
  display: grid;
}
```

grid-auto-flow 设置纵向排列

容器属性

justify-items 水平方向的对齐方式
align-items 垂直方向的对齐方式

justify-content 属性
align-content 整个在项目中的位置

grid-auto-cloumns 属性
grid-auto-rows 属性

项目属性
四个单元格 是五条线 1 2 3 4 5

grid-column-start 属性 1
grid-column-end 属性 指定合并多少单元格 3

grid-column 上面两个的简写 1/3

gird-row-start
gird-row-end
gird-row 是上面两个的简写

justify-self 属性
align-self 属性

## 响应式布局

> 同一套代码 在不同端显示不同 一般用 media query 实现

- 两套代码不是响应式页面

优点：一套页面适应多端设备，提升开发效率
缺点：页面效果不及单独为某一终端定制的页面效果， 性能问题，维护成本提升

总结： 大部分项目不会整体才有响应式页面的解决方案

## rem 布局

> 移动端的特点

- 设备尺寸不同
- 可以通过百分比解决
- 设置百分比计算繁琐

pc 端量出多少就写多少 px 移动端不行要找一个基准
一般是 iphone6 width 375px 给 2 倍的图 750 宽度的设计稿

单位概述：
px： 像素
em: 相对父级的 font-size 的值
rem: 相对于 html 标签的 font-size 的值
html:font-size: 30px; 1rem 代表 30px 10rem 代表 300px

通过 js 文件，根据浏览器的视窗宽度设置 html 元素的 font-size 的值

docEl.style.fontSize = 100 \*( clientWidht / 750) + 'px'

clientWidth 为浏览器的视窗宽度

如果浏览器视窗口宽度为 750px ，那么 html 的 font-size 为 50px
100px = 1rem
100% = 750

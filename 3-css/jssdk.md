##

- 国际化
- 兼容性
- ie8? support
- 多种引入方式
- 支持 pc 和移动端 30kb

## 架构

- 自顶向下 自外而内
- 1 对外的 API 的设计
- 2 模块的划分与关联
- 3 模块的具体实现与一般套路

# 对外的接口的设计

- 简单易用 封装性 灵活性

```js
var login = pass.login({
  container: document.getElementById("login-box"),
  autocomplete: false,
  success: function () {
    location.replace("profile.html");
  },
});
```

公共模块
表单验证 a
活人验证 b
省市区联动 c

手机号验证 [a b]
手机号注册 【a】
个人信息填写 【a c】
绑定支付方式

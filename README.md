# ConsultationPlatform
My graduation project

# day 1 2024/2/26
编辑环境变量

修改文件类型从 commonJS 改为 module 以便支持 import 语法。

在Routes文件夹中 配置路由文件

在controller文件夹中配置路由对应的操作

建立数据库cpDB

设计数据库 用户表模板

测试注册接口 成功

配置jwt

实现登陆功能

实现登出功能

### Day 2 2024/2/27

设计对话数据库，每次对话在 conversation 中根据对话双方的 _id 生成对应项，并设置message集合，此后，双方的对话将添加到 message 集合中； 发送的每条消息在 message 集合添加对应id；并创建对应 message 项

为 message/send 路由添加路由守卫 确保用户在登陆状态下进行对话



#### 对话功能实现逻辑

首先 发件人在确保状态为已登录时 向收件人发送信件;

路由守卫拦截发送请求，验证cookie, 若通过， 将cookie中保存的发件人id一并加入req.body;

收集对话中的信息并保存至数据库；



实现对话功能

实现聊天记录获取功能

实现获取用户侧边栏功能

**聊天系统后端功能完成**

### 前端

安装TailwindCss daisyUI

完成登陆页面样式设计
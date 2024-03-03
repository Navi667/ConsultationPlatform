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

### Day 3 2024/2/29

**聊天系统前端完成**

注册逻辑实现过程中，发起fetch请求没有反应，经检查，在判断用户信息完整性使忘记设置返回值

注册逻辑完成

### Day 4 2024/3/1

前端使用Context验证是否已登录，使用localStorage 保存登录信息，

完成登出逻辑

完成登录逻辑

安装 zustand 状态管理工具(类似Redux)，用于存储 选中的聊天 以及相应的聊天信息，在切换 聊天对象时，实时更新

实现获取对话列表功能，直接拉取所有已注册用户

完成聊天室侧边栏

完成消息发送功能，发件人信息由context中数据获取， 收件人信息由zustand中保存的信息获取

完成消息展示功能，

完成聊天室功能
### Day 5 2024/3/3

搜索功能初步完成，待后续更新

#### 优化对话流程


当前我们对于对话流程的设计为：

1.用户1发送消息给用户2，服务器接收发送消息请求；

2.服务器将将消息传入数据库；

3.数据库更新；

4.待用户2获取消息列表时将最新消息发送；

可以看出，我们无法实时将消息的更新反馈给用户2，需要用户2刷新或主动访问才可收到最新消息，针对这一问题进行优化

做法是：在express服务器上再添加一个socket服务器

优化后，在express服务器的基础上增加socket ，监听发送消息接口，实时将发送的消息传给前端，前端将消息添加至 context 中，刷新 messages队列，实现实时更新。

至此，聊天室功能完全实现

// ============================================================
// Python 从小白到精通 — 学习路径三个阶段详细内容
// ============================================================

const roadmapContent = {

  'phase-1': {
    badge: 'Phase 01',
    icon: '🐣',
    title: '小白入门 — 从零到能写完整程序',
    intro: '这个阶段的目标很明确：让一个从没接触过编程的人，在 4 到 6 周内能够独立写出自己的第一个完整的 Python 程序。不需要任何预备知识——会用鼠标键盘、会打字就足够了。',
    sections: [
      {
        title: '🎯 阶段目标',
        text: '完成这个阶段后，你应该能：\n\n1. 独立在自己的电脑上安装 Python 和编辑器\n2. 理解变量、数据类型、条件判断、循环、函数、文件操作等核心概念\n3. 独立写出 200 行以内的 Python 程序（比如：猜数字游戏、待办事项管理器、简单计算器）\n4. 能读懂 Python 报错信息，自己解决简单的语法错误\n5. 知道去哪里查资料（官方文档、搜索引擎、社区）'
      },
      {
        title: '📅 学习周期：4-6 周',
        text: '第1周：安装环境 + 第一个程序 + 变量和基本数据类型（数字、字符串）\n第2周：列表和字典 + if 条件判断 + for/while 循环\n第3周：函数定义与调用 + 模块导入 + 文件读写\n第4周：综合实战项目（猜数字、Todo 管理器、简单计算器）\n第5-6周（可选）：复习巩固 + JSON 处理 + 异常处理入门',
      },
      {
        title: '📚 你将掌握的知识点',
        code: '# === Phase 01 知识清单 ===\n\n# 1. 变量与赋值\n# 变量 = 贴了标签的盒子，用来存放数据\nname = "小明"          # 放文字进去\nage = 20               # 放数字进去\n\n# 2. 数据类型\n# str（字符串）、int（整数）、float（小数）\n# list（列表）、dict（字典）、bool（布尔值）\nfruits = ["苹果", "香蕉"]      # 列表：有顺序的容器\nstudent = {"name": "小明", "age": 20}  # 字典：键值对\n\n# 3. 流程控制\nif age >= 18:           # 条件判断\n    print("成年")\nfor fruit in fruits:    # 循环遍历\n    print(fruit)\n\n# 4. 函数\ndef greet(name):        # 定义函数\n    return f"你好, {name}!"\nprint(greet("世界"))    # 调用函数\n\n# 5. 文件操作\nwith open("日记.txt", "w", encoding="utf-8") as f:\n    f.write("今天学了 Python！")  # 写入文件',
      },
      {
        title: '✅ 检验标准：你能独立完成什么',
        text: '如果你能不看参考答案、独立写出以下任意 3 个小程序，说明你已经掌握了这个阶段的内容：\n\n1. **猜数字游戏**：程序随机生成一个 1-100 的数，玩家猜，程序告诉猜大了还是猜小了\n2. **简易计算器**：用户输入两个数和运算符（+、-、*、/），程序输出结果\n3. **待办事项管理器（命令行版）**：支持添加任务、查看所有任务、标记任务完成、删除任务\n4. **密码生成器**：用户输入密码长度，程序生成一个随机密码（包含字母和数字）\n5. **成绩统计器**：输入多名学生的分数，输出平均分、最高分、最低分',
      },
      {
        title: '💡 学习建议',
        text: '• 每天至少写 30 分钟代码——坚持比突击重要\n• 书上/网页上的代码示例，**亲手敲一遍而不是复制粘贴**——肌肉记忆比视觉记忆更牢固\n• 改代码比写代码学得快——拿一个能跑的例子，故意改坏它，看它会出什么错，再修好\n• 不要把报错当成失败——每个报错都是在告诉你「问题出在这里，修好它就能继续」\n• 用本页面的「在线练习」区域随时动手实验',
      },
    ],
    tip: '入门阶段最重要的是建立「我能让电脑做我想做的事情」的信心。先别追求写得好不好看——能跑起来就是胜利。代码风格和最佳实践可以在第二阶段慢慢打磨。'
  },

  'phase-2': {
    badge: 'Phase 02',
    icon: '🐍',
    title: '进阶提升 — 从写小程序到做中等项目',
    intro: '你已经能写出 200 行以内的程序了。但这个阶段，我们要把目光从「写出来」转向「写好」——面向对象编程、装饰器、生成器、数据库、Web 开发……这些工具让你从「搭积木」升级到「盖房子」。',
    sections: [
      {
        title: '🎯 阶段目标',
        text: '完成这个阶段后，你应该能：\n\n1. 理解并运用面向对象编程设计你的程序结构\n2. 使用装饰器给函数增加通用功能（日志、计时、权限检查）\n3. 用生成器处理大文件和大数据流，节省内存\n4. 用 Flask 或 FastAPI 写出一个带数据库的 Web 应用\n5. 独立完成 1000+ 行的项目，代码结构清晰、有适当的注释\n6. 能够阅读第三方库的文档并使用它们',
      },
      {
        title: '📅 学习周期：6-8 周',
        text: '第1-2周：面向对象编程（类、对象、继承、多态、魔术方法）\n第3周：高级函数特性（闭包、装饰器、生成器、迭代器）\n第4-5周：数据库入门（SQLite + SQL + SQLAlchemy ORM）\n第6-7周：Web 开发（Flask 或 FastAPI，做一个小网站）\n第8周：综合实战项目（个人博客系统 / Todo 应用 Web 版）',
      },
      {
        title: '📚 核心技能详解',
        code: '# === Phase 02 核心技能速览 ===\n\n# 1. 面向对象编程：把数据和操作打包成「类」\nclass Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def is_pass(self):\n        return self.score >= 60\n\ns = Student("小明", 85)\nprint(s.is_pass())  # True\n\n# 2. 装饰器：给函数加功能而不修改原函数\nimport time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__} 耗时: {time.time()-start:.2f}s")\n        return result\n    return wrapper\n\n# 3. 生成器：需要时才产生数据，省内存\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\n# 4. Web 开发（Flask 示例）\n# from flask import Flask\n# app = Flask(__name__)\n# @app.route("/")\n# def home():\n#     return "<h1>我的第一个网站</h1>"',
      },
      {
        title: '✅ 检验标准：你能独立完成什么',
        text: '如果你能独立完成以下任意 2 个项目，说明你已经掌握了这个阶段：\n\n1. **个人博客系统**：包含文章列表、文章详情、写文章、编辑、删除功能，数据存 SQLite\n2. **Todo 应用 Web 版**：用户注册登录、创建待办、标记完成、分类筛选\n3. **天气查询工具**：调用免费天气 API，用户输入城市名，返回天气信息\n4. **文件批量处理工具**：遍历某个文件夹，按规则批量重命名、转换格式\n5. **记账本**：记录收支、分类统计、生成简单的消费报表',
      },
      {
        title: '💡 学习建议',
        text: '• 做项目比刷教程重要十倍——选定一个想做的项目，边做边学\n• 开始使用 Git 版本控制——每次改动都有历史记录，不怕改坏\n• 把你的代码放到 GitHub 上——这是你的作品集\n• 阅读优秀开源项目的源码，学习别人的代码结构和命名习惯\n• 进阶阶段的主要瓶颈不是「不会写」，而是「不知道怎么写才是好的」——多看多模仿',
      },
    ],
    tip: 'OOP（面向对象）不是必须用的——Python 社区推崇「简单的事情用函数，复杂的事情用类」。当你发现一个函数里需要维护大量相关状态时，自然就知道该用类了。不要为了 OOP 而 OOP。'
  },

  'phase-3': {
    badge: 'Phase 03',
    icon: '🐉',
    title: '精通之路 — 从写代码到设计系统',
    intro: '这是 Python 学习的最后阶段。你将深入语言的底层机制——GIL 到底怎么工作的？元类是如何操控类创建的？如何用异步编程承载上千并发请求？完成这个阶段，你不仅能写代码，更能做技术决策。',
    sections: [
      {
        title: '🎯 阶段目标',
        text: '完成这个阶段后，你应该能：\n\n1. 理解并发模型（多线程、多进程、asyncio）并能根据场景选型\n2. 掌握元编程（元类、描述符、动态创建类），理解框架背后的魔法\n3. 使用性能分析工具（cProfile）定位瓶颈并实施优化\n4. 阅读 CPython 源码，理解对象模型和内存管理机制\n5. 具备系统架构设计能力，能独立完成技术选型和方案设计\n6. 能够给开源项目贡献代码（提交 Pull Request）',
      },
      {
        title: '📅 学习周期：8-12 周',
        text: '第1-2周：并发编程（threading → multiprocessing → asyncio）\n第3-4周：python 性能优化（cProfile 剖析、算法优化、内存优化 __slots__、Cython 入门）\n第5-6周：元编程（type() 动态创建类、metaclass、描述符、__init_subclass__）\n第7-8周：CPython 源码阅读（对象模型、引用计数、GC、GIL 实现）\n第9-10周：设计模式在 Python 中的应用（工厂、单例、观察者、策略）\n第11-12周：开源贡献 + 大型项目实战',
      },
      {
        title: '📚 核心概念速览',
        code: '# === Phase 03 核心概念速览 ===\n\n# 1. asyncio：高并发网络编程\nimport asyncio\nasync def fetch(url):\n    print(f"获取 {url}...")\n    await asyncio.sleep(0.5)  # 模拟网络请求\n    return f"{url} 的数据"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch("api/users"),\n        fetch("api/orders"),\n        fetch("api/products"),\n    )\n    print(results)\n# asyncio.run(main())\n\n# 2. 元类：操控类的创建过程\nclass AutoRegMeta(type):\n    registry = []\n    def __new__(mcs, name, bases, ns):\n        cls = super().__new__(mcs, name, bases, ns)\n        mcs.registry.append(cls)\n        return cls\n\n# 3. 性能优化\nimport cProfile\n# profiler = cProfile.Profile()\n# profiler.enable()\n# 慢代码...\n# profiler.disable()\n# 查看报告',
      },
      {
        title: '✅ 检验标准',
        text: '1. 能解释为什么 Python 多线程在 CPU 密集型任务上不加速（GIL 机制）\n2. 能独立完成一个包含异步操作和数据库的 Web API 服务\n3. 能读懂至少一个 Python 内置类型的 CPython 源码（如 listobject.c）\n4. 能够对你的代码进行性能分析并拿出量化优化数据\n5. 能给至少一个开源项目提交被合并的 Pull Request',
      },
      {
        title: '🚀 持续成长',
        text: '完成这三个阶段，你已经具备了职业 Python 开发者的核心能力。接下来：\n\n• 选择一个方向深入：Web 后端、数据科学、自动化运维、AI/机器学习\n• 参与真实项目：工作中的项目或大型开源项目\n• 持续阅读源码和优秀的技术博客\n• 写技术文章分享你的知识——教是最好的学\n• 准备技术面试：算法题 + 系统设计 + 项目经验',
      },
    ],
    tip: '精通不是终点——Python 语言本身和它的生态系统每天都在进化。保持好奇心，持续学习，同时记住：最好的代码是能解决实际问题的代码，不是最炫技的代码。'
  }
};

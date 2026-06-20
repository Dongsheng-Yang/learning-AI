// ============================================================
// Python 从小白到精通 — 知识体系超详细教学内容
// 每个代码示例都逐行解释：做什么、为什么这么写、目的是什么
// 目标读者：连电脑都没用过的人
// ============================================================

const topicContent = {

  // ==================== 入门篇 ====================

  '基础语法': {
    level: '入门', badgeClass: 'badge-beginner', icon: '📝',
    intro: '欢迎！这是你编程之旅的第一站。别担心——你不需要任何预备知识，只要会用鼠标和键盘就够了。"编程"就是"告诉电脑做什么事"。Python 是目前最容易上手的编程语言，因为它的语法很像英语，读起来像读文章。我们从零开始，一步一步走进 Python 的世界。',
    sections: [
      {
        title: '一、什么是变量？—— 给数据贴个标签',
        text: '变量是编程里最基础也最重要的概念。什么是变量？很简单——变量就是一个"贴着标签的盒子"。你把东西放进盒子里，以后通过标签就能找到里面的东西。\n\n举一个生活中的例子：你有一个鞋盒，上面写着"冬天的衣服"。以后你要找冬天的衣服，直接找这个鞋盒就行了，不需要打开每个盒子看。编程中的变量完全一样："鞋盒的标签"就是变量名，"里面的衣服"就是数据。\n\n为什么需要变量？因为程序要处理数据，而数据需要有个名字才能被反复使用。没有变量，你每次用数据都要重新写一遍。',
        code: '# === 变量是什么？逐行解释 ===\n\n# 第1行：创建一个叫 name 的盒子，把"小明"这个文字放进去\nname = "小明"\n# 逐字拆解：\n# name   → 变量名（你自己起的名字，就像鞋盒上的标签）\n# 空格=空格 → 赋值符号（把右边的东西放进左边的盒子里）\n# "小明" → 你要存的数据（双引号表示这是文字，不是数字）\n# 整句翻译成人话：拿一个盒子，贴上标签"name"，把"小明"放进去\n\n# 第2行：创建一个叫 age 的盒子，把数字 25 放进去\nage = 25\n# 注意：数字不需要加引号。加了引号就变成文字了\n# age = 25  → 数字 25（可以做数学运算）\n# age = "25" → 文字"25"（不能做数学运算，它只是两个字"2"和"5"）\n\n# 第3行：创建一个叫 height 的盒子，把小数 1.75 放进去\nheight = 1.75\n# Python 中小数叫"浮点数"（float），因为有小数点，会"浮"动\n\n# 第4行：使用变量——通过标签取出里面的内容\nprint(name)\n# 拆解：print() 是"显示"函数，括号里放你想显示的东西\n# 这里括号里是 name——Python 会找到 name 这个盒子，取出里面的"小明"\n# 然后显示在屏幕上\n\n# 第5行：显示多段内容，用逗号隔开\nprint("你好，我叫", name, "，今年", age, "岁")\n# print() 可以一次显示很多个东西，中间用逗号隔开\n# Python 会在每个逗号处自动插入一个空格\n# 输出：你好，我叫 小明 ，今年 25 岁\n\n# 第6行：更好的写法——f-string\nprint(f"你好，我叫{name}，今年{age}岁")\n# f"..." → 字母 f 写在字符串前面，表示这是一个"格式化字符串"\n# {name} → 花括号里的内容会被替换成变量的值\n# {age} → 同理，会被替换成 25\n# 为什么推荐 f-string？因为它更直观、更不容易出错、性能也更好'
      },
      {
        title: '二、数字类型 —— Python 里的数怎么用',
        text: 'Python 中的数字分三种：整数（int）、浮点数（float，就是小数）、复数（complex，初学者可忽略）。Python 的整数可以无限大——你写 10 的 10000 次方都没问题，不像其他语言有限制。\n\n每种运算符号的含义和数学课上学的基本一样，但有几个需要特别注意的：//（整除）和 %（取余）。',
        code: '# === 基本数字运算，逐行解释 ===\n\na = 10    # 把数字 10 放进变量 a\nb = 3     # 把数字 3 放进变量 b\n\n# 加法：+ 号\nprint("加法 a+b =", a + b)   # 输出：13\n# + 号在数字中间表示"把两个数加起来"\n# 注意：+ 号在字符串中间表示"拼接"（把两段文字连起来）\n# Python 根据 + 号两边是什么类型，自动决定做加法还是拼接\n\n# 减法：- 号\nprint("减法 a-b =", a - b)   # 输出：7\n\n# 乘法：* 号（不是 × 号！键盘上没有 ×）\nprint("乘法 a*b =", a * b)   # 输出：30\n\n# 除法：/ 号（不是 ÷ 号！）\nprint("除法 a/b =", a / b)   # 输出：3.3333333333333335\n# 注意：用 / 做除法，结果永远是小数（浮点数）\n# 即使 6 / 3 也会得到 2.0 而不是 2\n# 为什么 Python 这样设计？因为在很多场景下你需要保留小数部分，\n# 默认给小数结果更安全。如果需要整数结果，用下面的 //\n\n# 整除：// 号 —— 只要整数部分，砍掉小数\nprint("整除 a//b =", a // b)  # 输出：3\n# 10 // 3 = 3（因为 3×3=9，多出来的 1 不要了）\n# 这和数学里的"带余除法"的商是一个意思\n\n# 取余：% 号 —— 取除法的余数\nprint("取余 a%b =", a % b)    # 输出：1\n# 10 除以 3，商是 3，余数是 1\n# 取余非常有用！比如判断一个数是奇数还是偶数：\nprint("7 是奇数吗？", 7 % 2 == 1)  # True（7除以2余1，是奇数）\n\n# 乘方：** 号 —— 某个数的几次方\nprint("乘方 a**b =", a ** b)  # 输出：1000\n# 10 ** 3 = 10 × 10 × 10 = 1000\n\n# === 运算优先级（和数学课一模一样） ===\nresult1 = 2 + 3 * 4       # 先乘后加：3×4=12, 2+12=14\nresult2 = (2 + 3) * 4     # 括号优先：(2+3)=5, 5×4=20\nprint(f"2+3*4={result1}, (2+3)*4={result2}")\n# 记不住优先级？加括号就行！括号里的永远先算'
      },
      {
        title: '三、字符串 —— 处理文字的秘密',
        text: '在编程里，文字叫"字符串"（string）—— 一串字符的意思。你的名字、一句歌词、一篇文章，在 Python 里都是字符串。\n\n字符串用引号包起来——单引号（\'）或双引号（"）都可以，效果完全一样。选择你喜欢的就好，但选了一种就保持一致。\n\n一个重要的概念：字符串中的每个字符都有"位置编号"，从 0 开始！这在编程里叫"索引"。Python 从 0 开始数而不是从 1——这是几乎所有编程语言的惯例，需要适应一下。',
        code: '# === 字符串基本操作，逐行解释 ===\n\n# 创建字符串：用引号包起来\nword = "Python"\n# "Python" → 双引号告诉 Python"这里面是文字"\n# 没有引号的话，Python 会以为 Python 是一个变量名，然后找不到就报错\n\n# 取第1个字符（位置编号是 0）\nfirst = word[0]\n# word[0] → [0] 表示"取位置编号为 0 的那个字符"\n# 位置编号从 0 开始！所以 word[0] = "P"\nprint(f"第1个字：{first}")    # P\n\n# 取第2个字符（位置编号是 1）\nprint(f"第2个字：{word[1]}")  # y\n\n# 取最后一个字符（位置编号是 -1）\nprint(f"最后一个字：{word[-1]}")  # n\n# word[-1] → 负数表示"从右边开始数"\n# -1 是倒数第1个，-2 是倒数第2个\n\n# 切片：取一段连续的文字\nprint(f"前3个字：{word[0:3]}")  # Pyt\n# word[0:3] → 取位置 0 到位置 2（不包含 3！）\n# 这是初学者最容易搞混的地方：包含左边不包含右边\nprint(f"从第3个到末尾：{word[2:]}")  # thon\n# word[2:] → 从位置 2 取到末尾（省略冒号右边的数字 = 取到最后）\nprint(f"从开头到第3个：{word[:3]}")  # Pyt\n# word[:3] → 从开头取到位置 2（省略冒号左边的数字 = 从 0 开始）\n\n# 字符串拼接：用 + 号\nfirst_name = "张"\nlast_name = "三"\nfull_name = first_name + last_name\nprint(full_name)  # 张三\n# first_name + last_name → 把两段文字连起来\n# 注意：+ 号在数字之间是做加法，在字符串之间是做拼接\n\n# 字符串重复：用 * 号\nline = "-" * 20\nprint(line)  # --------------------\n# "-" * 20 → 把 "-" 重复 20 次\n# 这招很适合画分隔线\n\n# 字符串长度：用 len() 函数\nprint(f"word 的长度：{len(word)}")  # 6\n# len() → Python 内置函数，返回"长度"\n# 对字符串：返回有几个字符\n# 对列表：返回有几个元素',
      },
      {
        title: '四、列表 —— 装东西的购物筐',
        text: '列表（list）是 Python 最常用的数据类型之一。把它想象成一个购物筐——你可以往里面放任何东西，有先后顺序（先放的在前面），可以随时加东西、拿东西、替换东西。\n\n列表用方括号 [ ] 表示，里面的每一项（叫"元素"）用逗号隔开。和字符串一样，元素的位置编号从 0 开始。',
        code: '# === 列表的基本操作，逐行解释 ===\n\n# 创建一个列表：用方括号，元素用逗号隔开\nfruits = ["苹果", "香蕉", "橙子"]\n# [ → 列表开始\n# "苹果" → 第0个元素\n# , → 分隔符\n# "香蕉" → 第1个元素\n# , → 分隔符\n# "橙子" → 第2个元素\n# ] → 列表结束\n\n# 访问元素：用方括号+位置编号\nprint(fruits[0])  # 苹果\n# fruits[0] → "fruits 里的第 0 个元素"\n# 位置 0 = 第一个！不要写成 fruits[1] 去拿第一个\nprint(fruits[-1])  # 橙子（最后一个）\n\n# 修改元素：直接用位置编号赋值\nfruits[1] = "草莓"  # 把第 1 个元素（"香蕉"）替换成"草莓"\n# 为什么可以改？列表是"可变"的——你可以修改它的内容\n# 字符串是"不可变"的——你不能修改字符串里的某个字\nprint(fruits)  # [\'苹果\', \'草莓\', \'橙子\']\n\n# 追加元素：用 .append() 方法\nfruits.append("葡萄")\n# .append(元素) → 在列表末尾添加一个新元素\n# 为什么叫 append？这个词来自拉丁语，意思是"挂在后面"\n# 点号 . 表示"这个列表的某个功能"，Python 用 . 来访问对象的方法\nprint(fruits)  # [\'苹果\', \'草莓\', \'橙子\', \'葡萄\']\n\n# 插入元素：用 .insert() 方法\nfruits.insert(1, "西瓜")\n# .insert(位置, 元素) → 在指定位置插入，原来该位置及后面的都往后移\n# 在位置 1 插入"西瓜"：苹果(0) → 西瓜(1) → 草莓(2) → ...\nprint(fruits)  # [\'苹果\', \'西瓜\', \'草莓\', \'橙子\', \'葡萄\']\n\n# 删除元素：用 .remove() 方法\nfruits.remove("草莓")\n# .remove(元素) → 删掉匹配的第一个元素\n# 注意：如果列表里没有"草莓"，会报错！\nprint(fruits)  # [\'苹果\', \'西瓜\', \'橙子\', \'葡萄\']\n\n# 拿走并返回最后一个元素：用 .pop() 方法\nlast = fruits.pop()\n# .pop() → 拿走列表的最后一个元素，并把它交给你\n# 就像从购物筐里拿最上面那个东西出来\nprint(last)    # 葡萄\nprint(fruits)  # [\'苹果\', \'西瓜\', \'橙子\']\n\n# 查看列表长度\nprint(len(fruits))  # 3\n# len() → 同样是内置函数，对列表返回"有几个元素"',
      },
      {
        title: '五、字典 —— 像查词典一样找数据',
        text: '字典（dict）是 Python 另一个非常重要的数据类型。它就像一本真正的词典——你查一个"词"（叫"键"），就能找到对应的"释义"（叫"值"）。\n\n字典用花括号 { } 表示，每一项是"键: 值"的配对。字典的特点：查找速度极快！不管字典里有 10 条还是 100 万条数据，查一个键的时间几乎一样。',
        code: '# === 字典的基本操作，逐行解释 ===\n\n# 创建一个字典：用花括号，键值对用冒号分隔\nstudent = {\n    "name": "小明",    # "name"是键，"小明"是值\n    "age": 20,         # "age"是键，20 是值\n    "grade": "A",      # "grade"是键，"A"是值\n}\n# 字典就像一个表格：键是表头，值是对应的数据\n# 为什么不直接用列表 [小明, 20, A]？\n# 因为列表只能按位置找（student[0]=小明），字典可以按名字找（student["name"]=小明）\n# 按名字找显然更直观，不容易搞错\n\n# 通过键查值：用方括号\nprint(student["name"])   # 小明\n# student["name"] → 去 student 字典里找键为 "name" 的那个值\n\n# 安全的查找方式：用 .get() 方法\nprint(student.get("phone", "没登记"))\n# .get(键, 默认值) → 如果键存在，返回对应的值；\n# 如果键不存在，返回默认值（而不是报错），更加安全\n\n# 添加新键值对\nstudent["phone"] = "138-0000-1111"\n# 直接给一个不存在的键赋值，就会创建新的键值对\nprint(student)  # {..., \'phone\': \'138-0000-1111\'}\n\n# 修改已有的值\nstudent["age"] = 21\n# 给一个已经存在的键赋新值，会覆盖原来的值\n\n# 删除键值对\ndel student["grade"]\n# del → Python 关键字，表示"删除"\n# del 字典名[键] → 删掉这个键和它对应的值\n\n# 遍历字典：依次查看每一对键值\nfor key, value in student.items():\n    # .items() → 返回所有的键值对\n    print(f"{key} → {value}")\n# 输出：\n# name → 小明\n# age → 21\n# phone → 138-0000-1111',
      },
      {
        title: '六、其他常用类型速查',
        text: '除了上面详细介绍的变量、数字、字符串、列表、字典，Python 还有几个常用类型。初学者不需要全记住，用的时候回来查就行。',
        code: '# === 元组 (tuple) —— 不可修改的列表 ===\npoint = (3, 4)     # 用圆括号（不是方括号！）\n# 元组创建后就不能修改了——不能加元素、不能删元素、不能改元素\n# 为什么需要不可改的列表？有些数据你不想被意外修改，\n# 比如坐标点、日期、配置项。元组给你的数据上了一把锁\nprint(f"x={point[0]}, y={point[1]}")  # x=3, y=4\n# point[0] = 5  # 这行会报错！TypeError: \'tuple\' object does not support item assignment\n\n# === 集合 (set) —— 没有重复元素的乱序容器 ===\ncolors = {"红", "绿", "蓝", "红"}  # 用花括号但不用冒号\n# 重复的"红"会被自动去掉！\nprint(colors)  # 可能显示 {\'绿\', \'红\', \'蓝\'}（顺序不固定）\n# 集合的主要用途：去重（把重复的去掉）、做成员检查（极快）\nprint("红" in colors)  # True\n# in 关键字：判断某个东西是否在集合/列表/字典里\n# 在集合里用 in 非常快（O(1)），在列表里用 in 比较慢（O(n)）\n\n# === 布尔值 (bool) —— 只有两个选项 ===\nis_raining = True   # 是 / 真 / 对\nis_sunny = False    # 否 / 假 / 错\n# 布尔值只有 True 和 False 两个可能，首字母必须大写\n# 布尔值通常来自"判断"的结果：\nprint(5 > 3)   # True（5 大于 3，这个判断是对的）\nprint(5 < 3)   # False（5 不大于 3，判断错误）\nprint(5 == 5)  # True（5 等于 5，注意要用两个等号！）',
      },
    ],
    tip: '初学 Python 最重要的不是记住所有东西，而是理解"变量"和"类型"这两个核心概念。变量 = 贴标签的盒子，类型 = 盒子里可以放不同种类的东西（数字、文字、列表……）。每天打开"在线练习"把上面的代码敲一遍，错的越多学得越快。'
  },

  '流程控制': {
    level: '入门', badgeClass: 'badge-beginner', icon: '🔀',
    intro: '如果程序只能一行一行按顺序执行，那它跟录音机一样死板。流程控制让程序有了"判断力"和"重复力"——它可以根据不同条件做不同的事，也可以不厌其烦地重复做一件事。学会流程控制，你的程序就从"按部就班"变成了"智能响应"。',
    sections: [
      {
        title: '一、if 语句 —— 让程序做选择',
        text: 'if 语句就是程序里的"岔路口"——走到这里，根据条件决定往哪边走。语法格式是：if 后面写条件，末尾加冒号（:），然后换行缩进写要做的事。\n\n为什么缩进这么重要？Python 靠缩进来判断哪些代码"属于"这个 if。没有缩进的代码不属于 if，不管条件成不成立都会执行。',
        code: '# === if 语句详解，逐行解释 ===\n\nscore = 85  # 定义一个变量：分数是 85\n\n# 第一层判断：分数 >= 90 吗？\nif score >= 90:                     # ← if + 条件 + 冒号\n    print("优秀！")                  # ← 缩进 4 空格（属于这个 if）\n    # 这行的意思是：如果 score >= 90 成立，就显示"优秀！"\n    # 如果不成立（score < 90），就跳过这行\nelif score >= 80:                   # ← elif = else if，"否则如果...呢？"\n    print("良好！")                  # ← 缩进 4 空格（属于这个 elif）\n    # 这行的意思是：如果上面不成立但 score >= 80 成立，就显示"良好！"\n    # elif 可以有多个，依次检查，第一个成立的就执行，后面的跳过\nelif score >= 70:\n    print("中等")                    # ← 如果前两个都不成立但 score >= 70\nelse:                               # ← else = "否则"（以上所有都不成立）\n    print("需要加油！")             # ← 前面的 if 和 elif 都不成立才执行这行\n\n# 注意：下面这行没有缩进，不属于任何 if 分支\n# 所以无论分数多少，这行都会执行\nprint("成绩评定完毕")\n\n# === 为什么缩进是 Python 的灵魂 ===\n# 很多语言用花括号 {} 来分组代码，Python 设计师认为花括号\n# 看起来很乱，而且总是忘记写。用缩进来分组代码，强迫你\n# 写出格式良好的代码——你的代码天然就是对齐的、可读的\n\n# === 条件中可以用的比较符号 ===\n# ==   等于（两个等号！一个等号是赋值，完全不同）\n# !=   不等于\n# >    大于\n# <    小于\n# >=   大于等于\n# <=   小于等于\n# and  并且（左右两边都要成立）\n# or   或者（左右两边只要有一个成立就行）\n# not  取反（把 True 变 False，把 False 变 True）\n\n# === and / or 的组合条件 ===\nage = 25\nhas_id = True\n\nif age >= 18 and has_id:      # 两个条件都要满足\n    print("成年人且带身份证，可以进入")\n    # age >= 18 是 True，has_id 是 True，True and True = True → 执行\n\nif age < 18 or not has_id:    # 满足任一即可\n    print("未成年或没带身份证，不能进入")\n    # age < 18 是 False，not has_id 是 False，False or False = False → 不执行',
      },
      {
        title: '二、for 循环 —— 对每个东西做同样的事',
        text: 'for 循环让程序能"遍历"一组数据——对里面的每一个元素，都执行一次相同的操作。比如"对于购物清单里的每一件商品，都去货架上拿一份"。\n\nfor 循环的语法：for 临时变量 in 可迭代对象:，然后是缩进的循环体。每次循环，Python 会自动把下一个元素的值赋给临时变量。',
        code: '# === for 循环详解，逐行解释 ===\n\n# 示例：有一串学生名单，给每个人都打一遍招呼\nstudents = ["小明", "小红", "小刚", "小美"]\n# 创建一个列表，里面有 4 个名字\n\nfor name in students:           # ← for 临时变量 in 可迭代对象:\n    # 这行怎么理解？"对于 students 里的每个元素，依次把它赋值给 name"\n    # 第一次循环：name = "小明"\n    # 第二次循环：name = "小红"\n    # 第三次循环：name = "小刚"\n    # 第四次循环：name = "小美"\n    # 没有第五次了——列表里只有 4 个元素\n\n    print(f"你好，{name}同学！")  # ← 缩进，属于 for 循环\n    # 这行会执行 4 次，每次 name 的值不同\n\n# === range() 函数：生成一系列数字 ===\n# 如果你需要执行固定次数，用 range()\n\nfor i in range(5):              # range(5) 产生 0,1,2,3,4\n    print(f"这是第 {i+1} 次")   # i 从 0 到 4，共 5 次\n\n# range(起始值, 结束值) —— 包含起始，不包含结束\nfor i in range(2, 6):           # 产生 2,3,4,5（不包含 6）\n    print(i, end=" ")           # end=" " 不让每次 print 后换行\n# 输出：2 3 4 5\n\n# range(起始值, 结束值, 步长)\nfor i in range(1, 10, 2):       # 1,3,5,7,9 每隔 2 取一个\n    print(i, end=" ")\n# 输出：1 3 5 7 9\n\n# === 一个完整的例子：计算 1 到 100 的累加和 ===\ntotal = 0                       # 创建一个"累加器"，初始为 0\nfor num in range(1, 101):       # num 依次等于 1,2,3,...,100\n    total = total + num         # 每次把当前数值加进总和\n    # 这行怎么理解？"新的 total = 旧的 total + 当前的 num"\n    # 第一次：total = 0 + 1 = 1\n    # 第二次：total = 1 + 2 = 3\n    # 第三次：total = 3 + 3 = 6\n    # ...一直加到 100\nprint(f"1+2+...+100 = {total}")  # 5050\n\n# === enumerate() 同时拿编号和内容 ===\nfruits = ["苹果", "香蕉", "橙子"]\nfor index, fruit in enumerate(fruits):\n    # enumerate 给每个元素配一个编号，从 0 开始\n    print(f"第 {index+1} 个水果：{fruit}")\n# 输出：\n# 第 1 个水果：苹果\n# 第 2 个水果：香蕉\n# 第 3 个水果：橙子',
      },
      {
        title: '三、while 循环 —— 条件成立就一直做',
        text: 'while 循环和 for 循环的区别：for 循环你知道要执行多少次（列表有几个元素就几次），while 循环你不知道具体要多少次——它取决于条件什么时候从 True 变成 False。\n\n⚠️ while 循环最大的陷阱是"死循环"——条件永远不变成 False，程序就永远停不下来。每次写 while 之前，先在脑子里过一遍：这个条件最终是怎么变成 False 的？',
        code: '# === while 循环详解，逐行解释 ===\n\ncount = 1                        # 从 1 开始数\nwhile count <= 5:                # 只要 count ≤ 5，就一直循环\n    print(f"第 {count} 次执行")  # 显示当前是第几次\n    count = count + 1            # count 加 1（这行至关重要！）\n    # 如果没有上面这行，count 永远是 1\n    # 条件 count <= 5 永远成立 → 死循环！\n    # 程序会卡住不动，屏幕上不停地显示"第 1 次执行"\n    # 这时你需要按 Ctrl+C 强制停止程序\nprint("循环结束！")              # while 结束后才执行这行\n\n# === 循环中的 break 和 continue ===\n\n# break：立即跳出循环（不执行剩余循环）\nfor i in range(10):             # 本来要循环 10 次\n    if i == 5:\n        print(f"到 {i} 了，不找了，停止！")\n        break                    # ← 遇到 break，立刻跳出循环\n    print(f"正在检查 {i}")\n# 输出：正在检查 0,1,2,3,4 → 到 5 了，停止！\n# 注意：没有"正在检查 6"及以后的输出——break 直接终止了整个循环\n\n# continue：跳过本次循环的剩余代码，进入下一次循环\nfor i in range(8):\n    if i % 2 == 0:              # i 是偶数时\n        continue                 # ← 跳过本次，不执行下面的 print\n    print(i, end=" ")           # 只打印奇数\n# 输出：1 3 5 7\n# continue 常用于"排除某些不需要处理的情况"',
      },
      {
        title: '四、列表推导式 —— 一行代码取代整个循环',
        text: '列表推导式是 Python 的标志性语法——用一行简洁的表达式创建列表，替代传统的多行 for 循环。它读起来就像数学中的集合定义。\n\n基本格式：[表达式 for 临时变量 in 可迭代对象 if 条件]\n\n初学者可能觉得它有点难读，没关系——先用普通 for 循环写，熟悉后再逐步改用推导式。',
        code: '# === 列表推导式，逐行对比传统写法和推导式 ===\n\n# 需求：生成 1 到 10 每个数的平方\n\n# 传统写法（4 行）\nsquares = []                     # 1. 先创建空列表\nfor i in range(1, 11):          # 2. 循环 1 到 10\n    squares.append(i ** 2)      # 3. 计算平方并追加\n# squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n# 列表推导式写法（1 行）\nsquares = [i ** 2 for i in range(1, 11)]\n# 逐字拆解：\n# [          → 表示"我要创建一个新列表"\n# i ** 2     → 表达式：每个元素怎么计算（计算平方）\n# for i in range(1, 11) → 循环：哪些 i 需要计算\n# ]          → 列表结束\n# 翻译成人话：对于 1 到 10 的每个 i，计算 i 的平方，结果放到列表里\n\n# === 带 if 条件的推导式 ===\n# 需求：只取 1 到 20 中的奇数\nodds = [i for i in range(1, 21) if i % 2 != 0]\n# 翻译：对于 1 到 20 的每个 i，如果 i 是奇数，放到列表里\n# odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]\n\n# === if-else 在表达式位置 ===\n# 需求：偶数的话取本身，奇数的话取 0\nmodified = [i if i % 2 == 0 else 0 for i in range(1, 11)]\n# modified = [0, 2, 0, 4, 0, 6, 0, 8, 0, 10]\n# 注意区别：if 在 for 前面（表达式位置）用 if-else\n#           if 在 for 后面（过滤位置）只用 if，没有 else',
      },
    ],
    tip: '写 Python 代码时，最重要的一条规则：同一代码块的缩进必须一致。建议在 VS Code 设置中将"Tab 键"替换为"4 个空格"。如果你代码运行结果和预期不一样，先检查缩进——这是新手最常见的问题。另外，while 循环写完后，在脑子里模拟执行一遍，确认条件最终能变成 False。'
  },

  '函数与模块': {
    level: '入门', badgeClass: 'badge-beginner', icon: '⚙️',
    intro: '学到这里你可能会发现——有些代码反复出现。每次写一样的逻辑，不仅麻烦还容易出错。函数把一段代码"打包"成一个工具，给它起个名字。以后用到的时候，喊名字就行，不用重写。\n\n函数是编程中最重要的抽象工具。掌握了函数，你的代码就从"流水账"变成了"积木搭建"——把小的功能块组装成大的系统。',
    sections: [
      {
        title: '一、定义函数 —— 打造你自己的工具',
        text: '在 Python 里用 def 关键字定义函数。def 是 define（定义）的缩写。def 后面写函数名，然后是一对圆括号（参数放里面），最后加冒号。函数体必须缩进。\n\n函数就像一台榨汁机：你从上面放进去原料（参数），里面经过处理（函数体），下面流出果汁（返回值）。',
        code: '# === 定义和调用函数，逐行解释 ===\n\n# 第1行：def = "我要定义一个函数"；greet = 函数名；name = 参数\ndef greet(name):                  # ← def 关键字 + 函数名 + (参数) + 冒号\n    """向指定的人问好"""         # ← 文档字符串（可选但推荐）\n    # 这个三重引号包围的文字叫 docstring，用来解释函数是干什么的\n    # 它不会被执行，但 help(greet) 会显示它\n\n    # 函数体：缩进的这行才是真正要执行的代码\n    result = f"你好，{name}！欢迎！"\n    # 这行用 f-string 把 name 嵌入到问候语里\n    # result 是函数内部的"局部变量"——函数外面访问不到它\n\n    return result                # ← return：把结果交给调用者\n    # return 有两个作用：\n    # 1. 把后面表达式的计算结果"送出去"\n    # 2. 函数执行到这里就结束了，return 后面的代码不会执行\n\n# === 调用函数 ===\nmsg1 = greet("小明")\n# 执行过程：\n# 1. Python 看到 greet("小明")\n# 2. 跳到 def greet(name) 那行，name = "小明"\n# 3. 执行函数体：生成"你好，小明！欢迎！"\n# 4. 遇到 return，带着结果跳回调用处\n# 5. msg1 = "你好，小明！欢迎！"\nprint(msg1)  # 你好，小明！欢迎！\n\nmsg2 = greet("小红")\nprint(msg2)  # 你好，小红！欢迎！\n# 同一个函数，传入不同的参数，返回不同的结果——这就是函数的复用性',
      },
      {
        title: '二、参数的各种形式 —— 让函数更灵活',
        text: 'Python 函数参数非常灵活，支持四种形式：位置参数（按顺序传）、默认参数（不传就用默认值）、可变位置参数（*args，接收任意多）、可变关键字参数（**kwargs，接收带名字的任意参数）。\n\n理解这些参数形式的目的是：让你的函数既好用又灵活——调用者可以用最简单的方式调用，也可以在需要时传入更多控制。',
        code: '# === 参数形式详解，逐行解释 ===\n\n# 形式一：基本的位置参数\n# 调用时按定义时的顺序传参\ndef describe(name, age, city):\n    print(f"{name}，{age}岁，来自{city}")\n\ndescribe("小明", 20, "北京")\n# "小明"→name, 20→age, "北京"→city（按位置对应）\n# 这种方式的缺点是：调用者必须记住参数顺序，容易搞混\n\n# 形式二：关键字参数（调用时写明参数名，不怕顺序错）\ndescribe(age=25, city="上海", name="小红")\n# 好处：不需要记顺序，代码读起来就是一句话\n# 坏处：写起来稍微长一点\n\n# 形式三：默认参数（给参数一个默认值）\ndef power(base, exponent=2):  # exponent 有默认值 2\n    """计算 base 的 exponent 次方。不传 exponent 就算平方。"""\n    return base ** exponent\n\nprint(power(5))       # 25（没传 exponent，默认是 2 → 5²）\nprint(power(5, 3))    # 125（传了 exponent=3 → 5³）\n# 默认参数让你"大部分时候简单调用，特殊时候再传更多参数"\n\n# 形式四：*args —— 接收任意数量的参数\n# * 号告诉 Python"把所有多出来的参数打包成一个元组"\ndef sum_all(*numbers):\n    """返回任意数量参数的和"""\n    total = 0\n    for num in numbers:       # numbers 是一个元组，包含了所有传入的参数\n        total += num\n    return total\n\nprint(sum_all(1, 2))          # 3\nprint(sum_all(1, 2, 3, 4, 5)) # 15\nprint(sum_all())              # 0（不传参数也可以）\n\n# 形式五：**kwargs —— 接收任意数量的关键字参数\n# ** 号告诉 Python"把所有带名字的参数打包成一个字典"\ndef build_profile(**info):\n    """打印个人资料，可以传任意多个字段"""\n    for key, value in info.items():\n        print(f"  {key}: {value}")\n\nbuild_profile(name="小明", age=20, hobby="编程", city="北京")\n# 输出：\n#   name: 小明\n#   age: 20\n#   hobby: 编程\n#   city: 北京',
      },
      {
        title: '三、lambda —— 迷你匿名函数',
        text: 'lambda 是"一次性小函数"——不需要起名字，写在一行里。它只能包含一个表达式（不能有循环、if 等复杂逻辑）。\n\nlambda 最适合的场景是：需要传一个简单的函数作为参数（比如给 sorted 传排序规则、给 filter 传过滤条件）。',
        code: '# === lambda 详解，逐行解释 ===\n\n# 传统方式：定义一个普通函数\ndef add(x, y):\n    return x + y\n# 这用了 2 行代码\n\n# lambda 方式：1 行搞定\nadd_lambda = lambda x, y: x + y\n# lambda  → Python 关键字，表示"我要创建一个匿名函数"\n# x, y    → 参数列表\n# :       → 分隔符，左边是参数，右边是返回值\n# x + y   → 返回值表达式（不需要写 return！lambda 自动返回这个值）\n\nprint(add_lambda(3, 5))  # 8\n\n# === lambda 配合 sorted() 自定义排序 ===\n# sorted() 的 key 参数需要一个函数：告诉它"按什么排序"\n\nstudents = [\n    {"name": "小明", "score": 85},\n    {"name": "小红", "score": 92},\n    {"name": "小刚", "score": 78},\n]\n\n# key=lambda s: s["score"]\n# 逐字拆解：\n# key=  → sorted 的参数，表示排序依据\n# lambda s: → 定义一个匿名函数，s 是每个元素（每个学生的字典）\n# s["score"] → 返回该学生的分数\n# 合起来：对每个学生，按他的分数排序\nranked = sorted(students, key=lambda s: s["score"], reverse=True)\n# reverse=True → 从高到低（降序）\n\nfor stu in ranked:\n    print(f"{stu[\'name\']}: {stu[\'score\']}分")\n# 输出：\n# 小红: 92分\n# 小明: 85分\n# 小刚: 78分',
      },
      {
        title: '四、模块与 import —— 使用全世界的代码',
        text: 'Python 自带了一个庞大的"标准库"——几百个预先写好的模块，覆盖了从数学运算到网络通信的各种功能。此外，通过 pip（Python 的包管理器），你还可以安装全球程序员贡献的 50 多万个第三方包。\n\n每个 .py 文件都是一个模块。当你 import 一个模块时，Python 会去指定的目录找到这个文件，加载到内存里，你就可以使用里面定义的函数和类了。',
        code: '# === import 的四种写法，逐行解释 ===\n\n# 写法一：导入整个模块\nimport math\n# import → Python 关键字，表示"我要用别的模块"\n# math → Python 标准库中的数学模块（开方、三角函数、圆周率等）\n# 导入后，用 模块名.函数名() 调用\n\nprint(math.sqrt(16))   # 4.0 — sqrt = square root（平方根）\nprint(math.pi)         # 3.141592653589793 — 圆周率 π\nprint(math.ceil(3.1))  # 4 — ceil = 天花板，往上取整\nprint(math.floor(3.9)) # 3 — floor = 地板，往下取整\n# 为什么用 模块名.xxx？这叫做"命名空间"，避免不同模块的函数同名冲突\n\n# 写法二：从模块中导入特定功能\nfrom random import randint, choice\n# from 模块名 import 函数名 — 只导入需要的，不导入整个模块\n# 好处：使用时不需要写模块名前缀\n# 坏处：如果和当前代码中的变量同名会冲突\n\nprint(randint(1, 100))  # 随机返回 1~100 之间的一个整数\nprint(choice(["苹果", "香蕉", "橙子"]))  # 从列表中随机选一个\n\n# 写法三：导入并起别名（模块名太长了，起个短名）\nimport datetime as dt\n# as → 关键字，给模块起个别名\n# 这在数据分析领域非常常见：import numpy as np, import pandas as pd\n\nprint(dt.date.today())    # 今天的日期\nprint(dt.datetime.now())  # 现在的日期时间（精确到微秒）\n\n# 写法四：导入所有（不推荐！）\n# from math import *  # ← 星号表示"导入一切"\n# 为什么不推荐？因为 math 里可能有和你的变量同名的东西，\n# 导致你的变量被意外覆盖，非常危险',
      },
    ],
    tip: '定义函数时，参数名尽量有意义（name 比 n 好，student_count 比 sc 好）。函数名用动词开头（get_user, calculate_total, find_best）。这让代码读起来像文章。记住：你的代码是写给未来（三个月后）的自己或者其他程序员看的——好的命名就是最好的文档。'
  },

  '文件与 IO': {
    level: '入门', badgeClass: 'badge-beginner', icon: '📁',
    intro: '目前你写的程序有一个致命缺陷——关了电脑，数据全没了。文件操作让你能把数据"永久保存"到硬盘上，就像 Word 保存文档一样。从这一章开始，你的程序有了记忆。\n\n"IO"是 Input/Output（输入/输出）的缩写——数据进（读文件）和出（写文件）的总称。',
    sections: [
      {
        title: '一、写文件 —— 把数据保存到硬盘',
        text: '写文件需要三步：打开文件 → 写入内容 → 关闭文件。Python 提供了 with 语句来优雅地完成这三步——它会自动帮你关闭文件，即使中途出了错也不会忘。\n\n打开文件时，需要指定"模式"：w 表示写入（write），会覆盖已有内容；a 表示追加（append），在末尾添加，不清空原有内容。',
        code: '# === 写文件详解，逐行解释 ===\n\n# 打开文件：open(文件名, 模式, 编码)\nwith open("日记.txt", "w", encoding="utf-8") as f:\n    # with → Python 关键字，创建一个"安全上下文"\n    #       （出了 with 块之后，文件会自动关闭）\n    # open → 打开文件的函数\n    # "日记.txt" → 文件名为"日记.txt"（不存在则自动创建！）\n    # "w" → write 模式。如果文件已存在，会清空再写\n    # encoding="utf-8" → 用 UTF-8 编码（处理中文的标准编码）\n    #                    不写的话在某些系统上中文会变乱码\n    # as f → 给打开的文件起个别名 f，后面用 f 来操作它\n\n    # 写入内容：用 .write() 方法\n    f.write("2026年6月19日 晴\\n")\n    # .write(字符串) → 把字符串写入文件\n    # \\n → 换行符（看起来是两个字符，实际上是一个"换行"指令）\n    #      不加 \\n 的话，接下来写的内容会黏在这一行后面\n    f.write("今天开始学 Python！\\n")\n    f.write("学会了变量和 print 函数。\\n")\n\n# 这里已经出了 with 块——文件自动关闭了！\n# 不需要写 f.close()，Python 已经帮你做了\nprint("文件已保存！去当前文件夹找找「日记.txt」吧")\n\n# === 追加模式：不清空原有内容 ===\nwith open("日记.txt", "a", encoding="utf-8") as f:\n    # "a" → append 模式，在文件末尾追加，不清空\n    f.write("今天又学了 if 和 for 循环。\\n")\n    f.write("加油！\\n")',
      },
      {
        title: '二、读文件 —— 从硬盘取出数据',
        text: '读取文件有几种方式，根据文件大小选择：\n• f.read()：一次性读全部（适合小文件）\n• f.readline()：一次读一行\n• for line in f：逐行迭代（最推荐！内存占用最小）\n\n对于大文件（几百 MB 以上），千万不要用 f.read()——会把整个文件载入内存，可能导致电脑卡死。',
        code: '# === 读取文件详解，逐行解释 ===\n\n# 方式一：一次性读取全部内容\nwith open("日记.txt", "r", encoding="utf-8") as f:\n    # "r" → read 模式（这是默认的，可以省略不写）\n    content = f.read()\n    # .read() → 读取文件的全部内容，作为一个大字符串返回\n    # 适合小文件（< 100KB），大文件慎用！\n    print("=== 文件全部内容 ===\\n" + content)\n\n# 方式二：逐行读取（推荐：最省内存）\nwith open("日记.txt", "r", encoding="utf-8") as f:\n    # 文件对象本身就是"可迭代"的——可以直接放在 for 循环里\n    for line in f:                    # line 依次是文件中的每一行\n        line = line.strip()           # .strip() 去掉行首行尾的空白和换行符\n        # 为什么要 strip()？因为 print 自己会加换行，不 strip 的话\n        # 会多出空行（文件中的 \\n + print 的 \\n = 两个换行）\n        if line:                      # 如果这一行不是空的\n            print(f"→ {line}")\n\n# 方式三：读取所有行到列表\nwith open("日记.txt", "r", encoding="utf-8") as f:\n    lines = f.readlines()\n    # .readlines() → 返回一个列表，每个元素是文件中的一行\n    # 注意：每行末尾的 \\n 会被保留\n    print(f"文件共有 {len(lines)} 行")\n    print(f"第一行：{lines[0].strip()}")\n    print(f"第二行：{lines[1].strip()}")',
      },
      {
        title: '三、JSON —— 结构化数据存储',
        text: 'JSON（JavaScript Object Notation）是目前全世界最通用的数据交换格式。它本质是一种文本格式，长得很像 Python 的字典和列表。\n\n几乎所有的网络 API、配置文件、数据导出都用 JSON。Python 的 json 模块让你在 Python 对象和 JSON 之间自由转换。\n\n核心操作只有两个：\n• dumps/loads：在"字符串"和"Python 对象"之间转换（末尾的 s = string）\n• dump/load：在"文件"和"Python 对象"之间转换',
        code: '# === JSON 操作详解，逐行解释 ===\nimport json  # 导入 Python 内置的 json 模块\n\n# === Python 对象 → JSON 字符串（序列化/dumps） ===\nstudent = {                       # 一个 Python 字典\n    "name": "小明",\n    "age": 20,\n    "scores": [85, 92, 78],      # 字典里面可以嵌套列表\n    "is_graduated": False\n}\n\n# dumps：把 Python 对象变成 JSON 字符串\njson_str = json.dumps(student,\n                       ensure_ascii=False,  # 不把中文转成 \\uxxxx 编码\n                       indent=2)           # 缩进 2 个空格，让输出更好看\n# 如果不写 ensure_ascii=False，中文会变成 \\u5c0f\\u660e 这种形式\n# 如果不写 indent=2，所有内容会挤在一行，很难读\nprint(json_str)\n\n# === JSON 字符串 → Python 对象（反序列化/loads） ===\njson_data = \'{"product": "笔记本电脑", "price": 5999}\'\n# 这是一个 JSON 格式的字符串（注意最外层用了单引号，里面的 JSON 用双引号）\nparsed = json.loads(json_data)\n# loads：把 JSON 字符串变成 Python 对象（通常是字典或列表）\nprint(parsed["product"])  # 笔记本电脑\nprint(parsed["price"])    # 5999\nprint(type(parsed))       # <class \'dict\'>\n\n# === 直接读写 JSON 文件 ===\n# 写入\nwith open("students.json", "w", encoding="utf-8") as f:\n    json.dump(student, f, ensure_ascii=False, indent=2)\n    # json.dump(对象, 文件对象) —— 和 dumps 的区别是直接写文件\n\n# 读取\nwith open("students.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\n    # json.load(文件对象) —— 和 loads 的区别是直接从文件读\n    print(loaded["name"])  # 小明',
      },
    ],
    tip: '永远使用 with open() 来打开文件（它会自动关闭），永远加上 encoding="utf-8" 来处理中文。文件操作是最容易出错的地方——文件可能被删了、磁盘可能满了——重要操作用 try-except 包住。另外，用 pathlib 替代 os.path 做路径操作，代码更简洁。'
  },

  // ==================== 进阶篇 ====================

  '面向对象编程': {
    level: '进阶', badgeClass: 'badge-intermediate', icon: '🏗️',
    intro: '你已经学会了用变量存数据、用函数组织代码。现在要学一种全新的思维方式：面向对象编程（OOP）。它的核心思想是——把"数据"和"操作数据的方法"打包在一起。\n\n就像一个手机：它既有属性（颜色、内存、电量），也有功能（打电话、拍照、上网）。OOP 中，这被称为"对象"——既有数据，也有操作数据的方法。',
    sections: [
      {
        title: '一、类与对象 —— 图纸和实物',
        text: '类（class）是"设计图纸"——定义了这类东西有什么属性、能做什么。对象（object/instance）是"根据图纸造出来的实物"——你可以使用它。一张图纸可以造出无数个实物，同样一个类可以创建无数个对象。\n\n例如：Dog 是一个类（图纸），描述狗这个物种；my_dog = Dog("旺财", 3) 是一个对象（具体的狗）。',
        code: '# === 类与对象，逐行解释 ===\n\n# 定义类：class 类名:\nclass Dog:  # ← class 关键字 + 类名（约定首字母大写）+ 冒号\n    """狗类——所有狗的模板（图纸）"""\n    # 这个 docstring 解释类的作用\n\n    # 类属性：所有狗共享的属性\n    species = "犬科动物"\n    # species → 类属性，通过 Dog.species 或 self.species 访问\n    # 类属性在类的"顶层"（没缩进在方法里面），不属于任何特定实例\n\n    # 构造函数：创建对象时自动调用\n    def __init__(self, name, age):\n        # __init__ → 双下划线包围，这是 Python 的"魔术方法"\n        # 创建对象时（Dog("旺财", 3)），__init__ 自动执行\n        # self → 代表"当前正在被创建的这个对象"\n        #        Python 会自动传 self，你不需要管它\n        # name, age → 创建对象时传进来的参数\n\n        # 实例属性：每只狗自己特有的属性\n        self.name = name   # 把传进来的 name 存入这个对象的 name 属性\n        self.age = age     # 同理，存入 age\n        # self.name 和 name 是两回事：self.name 是对象的属性\n        # name 是参数，只在 __init__ 里有效\n\n    # 实例方法：对象能做的事情\n    def bark(self):\n        """叫一声"""\n        return f"{self.name} 说：汪汪！"\n        # self.name → 访问"这个对象自己的名字"\n        # 如果 my_dog.bark()，self.name 就是 my_dog 的 name\n        # 如果 your_dog.bark()，self.name 就是 your_dog 的 name\n\n    def birthday(self):\n        """过生日，年龄+1"""\n        self.age += 1\n        # self.age += 1 → 把当前这个对象的 age 属性加 1\n        return f"{self.name} 现在 {self.age} 岁了！"\n\n# === 创建对象（实例化） ===\nmy_dog = Dog("旺财", 3)\n# 执行过程：\n# 1. Python 看到 Dog("旺财", 3)\n# 2. 创建一个新的 Dog 对象\n# 3. 自动调用 __init__(self, name, age) → self=新对象, name="旺财", age=3\n# 4. __init__ 里给 self.name 和 self.age 赋了值\n# 5. 返回创建好的对象，存到 my_dog 变量\n\nyour_dog = Dog("小白", 1)  # 第二只狗，独立的对象\n\nprint(my_dog.name)            # 旺财（访问属性）\nprint(my_dog.bark())          # 旺财 说：汪汪！（调用方法）\nprint(my_dog.birthday())     # 旺财 现在 4 岁了！\nprint(my_dog.age)            # 4（确实长了一岁）\nprint(your_dog.age)          # 1（你的狗没有过生日，不受影响！）\n# 每个对象的数据是独立的——这是 OOP 的核心好处',
      },
      {
        title: '二、继承 —— 代码复用的终极武器',
        text: '继承就像生物分类学——"狗"和"猫"都是"动物"，自动继承了动物的所有特征（会吃东西、会呼吸），然后各自有自己的特色（狗汪汪叫，猫喵喵叫）。\n\n在代码里，继承让你不用重复写相同的东西。父类（基类）定义共性的东西，子类只需写自己特有的。',
        code: '# === 继承详解，逐行解释 ===\n\n# 父类（基类）：定义所有动物的共性\nclass Animal:\n    """所有动物的基类"""\n    def __init__(self, name):\n        self.name = name\n        # 所有动物都有名字\n\n    def eat(self):\n        return f"{self.name} 正在吃饭"\n        # 所有动物都会吃东西——共性放在父类里\n\n    def speak(self):\n        pass\n        # pass = "什么都不做，只是一个占位符"\n        # 每个动物的叫声不一样，所以父类不实现\n        # 子类自己负责写 speak()——这叫"留给子类重写"\n\n# 子类：继承自 Animal，自动拥有 eat() 方法\nclass Dog(Animal):        # ← Dog(Animal) 表示"Dog 继承自 Animal"\n    """狗类——拥有 Animal 的一切 + 自己的特色"""\n    def speak(self):      # 重写（override）父类的 speak\n        return f"{self.name} 说：汪汪！🐶"\n    # 父类也有 speak()，但子类用自己的版本覆盖了\n    # 这叫"多态"——同一个方法名，不同类的实现不同\n\n    def fetch(self):      # 狗特有的方法（父类没有）\n        return f"{self.name} 跑去捡球！"\n\nclass Cat(Animal):        # Cat 也继承 Animal\n    def speak(self):\n        return f"{self.name} 说：喵喵！🐱"\n    def climb(self):\n        return f"{self.name} 爬上了树！"\n\n# === 使用 ===\ndog = Dog("旺财")\ncat = Cat("咪咪")\nprint(dog.eat())    # 旺财 正在吃饭（继承自 Animal）\nprint(cat.eat())    # 咪咪 正在吃饭（继承自 Animal）\nprint(dog.speak())  # 旺财 说：汪汪！🐶（Dog 自己重写的版本）\nprint(cat.speak())  # 咪咪 说：喵喵！🐱（Cat 自己重写的版本）\nprint(dog.fetch())  # 旺财 跑去捡球！（Dog 独有的方法）\n# cat.fetch()  → 报错！Cat 没有 fetch 方法',
      },
      {
        title: '三、魔术方法 —— 让你的对象像内置类型一样好用',
        text: '魔术方法（Magic Methods）以双下划线开头和结尾，如 __str__、__len__、__add__。它们让你的自定义对象能响应 Python 的内置操作——print()、len()、+号等。\n\n如果说普通方法是"对象能做什么"，魔术方法就是"对象如何与 Python 配合"。',
        code: '# === 魔术方法详解，逐行解释 ===\n\nclass Book:\n    """一本书——演示各种魔术方法"""\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n\n    def __str__(self):\n        """print(book) 时自动调用——给用户看的友好显示"""\n        return f"《{self.title}》—— {self.author}（{self.pages}页）"\n        # __str__ 的目标：易读、友好\n\n    def __repr__(self):\n        """在列表里或命令行直接输入对象名时自动调用——给开发者看的"""\n        return f"Book(title=\'{self.title}\', author=\'{self.author}\', pages={self.pages})"\n        # __repr__ 的目标：精确、能用来重建对象\n\n    def __len__(self):\n        """len(book) 时自动调用"""\n        return self.pages\n        # 现在可以用 len(book) 获取页数了\n\n    def __add__(self, other):\n        """book1 + book2 时自动调用"""\n        return self.pages + other.pages\n        # 两本书相加 = 两种页数之和\n\n    def __eq__(self, other):\n        """book1 == book2 时自动调用"""\n        return self.title == other.title and self.author == other.author\n        # 标题和作者相同 = 同一本书\n\n# 使用\nb1 = Book("流畅的 Python", "Ramalho", 850)\nb2 = Book("Python 入门", "Matthes", 460)\nprint(b1)              # 《流畅的 Python》—— Ramalho（850页）\nprint(len(b1))         # 850\nprint(b1 + b2)         # 1310\nprint(b1 == b2)        # False',
      },
    ],
    tip: 'OOP 不是银弹。Python 社区推崇实用主义——简单的场景用函数就够了，不要为了用 OOP 而用 OOP。如果你发现自己写了一个只有一两个方法、没什么状态（属性）的类，很可能直接写一个函数更合适。'
  },

  '高级函数特性': {
    level: '进阶', badgeClass: 'badge-intermediate', icon: '🎯',
    intro: '这一章介绍 Python 三个"看起来高级但其实很实用"的特性：闭包（函数记住外部变量）、装饰器（给函数添加功能而不修改它）、生成器（需要时才计算，省内存）。学会它们，你的代码会从"能跑"升级到"优雅"。',
    sections: [
      {
        title: '一、函数是一等公民 —— 函数能当参数传',
        text: '在 Python 中，函数跟数字、字符串一样，是"一等公民"——可以赋值给变量、当作参数传给另一个函数、从函数里返回函数。这是理解闭包和装饰器的基础。',
        code: '# === 函数是"一等公民"，逐行解释 ===\n\n# 1. 把函数赋值给变量\ndef greet():\n    return "你好！"\n\nf = greet     # ← 把函数本身赋值给 f（注意：没有括号！）\n# greet  → 函数本身（就像一块代码的"地址"）\n# greet() → 调用函数并获取返回值\n# 区别：有括号是"执行"，没括号是"拿函数本身"\nprint(f())   # 你好！（和 greet() 效果一样）\n\n# 2. 函数作为参数传给另一个函数\ndef apply(func, value):\n    """对 value 执行 func 两次"""\n    return func(func(value))\n    # func(func(value)) → 先算 func(value)，再把结果传给 func\n\ndef double(x):\n    return x * 2\n\nresult = apply(double, 5)\n# 执行过程：\n# 1. apply(double, 5)，func = double, value = 5\n# 2. func(value) = double(5) = 10\n# 3. func(10) = double(10) = 20\n# 4. return 20\nprint(result)  # 20\n# 如果把 apply 的 func 换成 triple，行为就变了——这叫"策略模式"\n\n# 3. 函数里返回函数\ndef make_multiplier(n):\n    """返回一个乘以 n 的函数"""\n    def multiplier(x):\n        return x * n      # n 来自外部函数 make_multiplier\n    return multiplier      # 返回内部函数本身（没有括号）\n\ndouble = make_multiplier(2)  # double 现在是 multiply(x) { return x * 2 }\ntriple = make_multiplier(3)  # triple 现在是 multiply(x) { return x * 3 }\nprint(double(10))  # 20\nprint(triple(10))  # 30',
      },
      {
        title: '二、装饰器 —— 给函数"穿衣服"',
        text: '装饰器让你在不修改原函数的前提下，给函数增加额外的功能——就像给手机加了个壳。装饰器的本质是：接收一个函数，返回一个新函数。新函数在原函数的前后做了额外的操作。\n\n最常见的装饰器应用：计时（测函数执行时间）、日志记录、权限检查、缓存结果、重试机制。',
        code: '# === 装饰器详解，逐行解释 ===\nimport time\n# 导入 time 模块，要用 time.time() 获取当前时间戳\n\n# 第1步：定义一个装饰器（它就是一个函数，接收函数，返回函数）\ndef timer(func):\n    """测量函数执行时间的装饰器"""\n\n    # wrapper（包装函数）：在原函数前后加了计时代码\n    def wrapper(*args, **kwargs):\n        # *args, **kwargs → 接收任意参数\n        # 这样不管被装饰的函数有什么参数，wrapper 都能正确处理\n\n        start = time.time()\n        # time.time() → 返回当前时间（自 1970-01-01 以来的秒数）\n\n        result = func(*args, **kwargs)\n        # 执行原函数！把收到的所有参数原封不动传给它\n        # 为什么要 *args, **kwargs？因为装饰器不知道原函数需要什么参数\n        # 用 * 和 ** 可以"转发"任意参数，适配任何函数\n\n        elapsed = time.time() - start\n        # 计算耗时 = 结束时间 - 开始时间\n\n        print(f"[计时] {func.__name__} 耗时 {elapsed:.4f} 秒")\n        # func.__name__ → 原函数的名字（__name__ 是每个函数都有的属性）\n        # :.4f → 格式化为 4 位小数\n\n        return result\n        # 返回原函数的执行结果，保持原函数的行为不变\n\n    return wrapper\n    # 返回包装后的新函数\n\n# 第2步：使用装饰器——@ 语法\n@timer  # ← @装饰器名，等价于：my_function = timer(my_function)\ndef my_function():\n    """一个很慢的函数（模拟）"""\n    time.sleep(0.5)  # 暂停 0.5 秒，假装在做复杂的计算\n    return "完成了！"\n\n# 调用被装饰后的函数\nprint(my_function())\n# 执行过程：\n# 1. Python 知道 my_function 被 @timer 装饰了\n# 2. 实际调用的是 wrapper()，不是原始的 my_function\n# 3. wrapper 记录了开始时间\n# 4. wrapper 调用了原始的 my_function\n# 5. wrapper 计算耗时并打印\n# 6. wrapper 返回原始函数的结果\n# 输出：\n# [计时] my_function 耗时 0.5001 秒\n# 完成了！',
      },
      {
        title: '三、生成器 —— 需要时才生产',
        text: '生成器是一种"懒惰"的函数——它不会一次性把所有结果算出来存好，而是每次你问它要的时候才给你下一个。核心关键字是 yield（产出），它的作用和 return 类似，但函数不会结束，而是"暂停"，等你下次要的时候继续。\n\n最大的好处：省内存。处理 10GB 的文件？用生成器一次只读一行，内存只占一行的大小。',
        code: '# === 生成器详解，逐行解释 ===\n\n# 普通函数：一次返回所有结果（占内存）\ndef get_squares_normal(n):\n    result = []               # 创建一个空列表\n    for i in range(n):\n        result.append(i ** 2)  # 把每个平方数都加到列表里\n    return result              # 一次性返回整个列表（占用 n 个元素的内存）\n\n# 生成器函数：一个一个给（省内存）\ndef get_squares_gen(n):\n    for i in range(n):\n        yield i ** 2          # ← yield！不是 return！\n        # yield = "给你当前这个结果，但我还没完，下次从这里继续"\n\n# 使用生成器\nsquares = get_squares_gen(5)\n# 调用生成器函数不会执行函数体！\n# 它只是创建了一个"生成器对象"，等着你去取\n\nprint(next(squares))  # 0 — 用 next() 取下一个值\nprint(next(squares))  # 1\nprint(next(squares))  # 4\n# 每次 next()，生成器从上次 yield 的地方继续执行\n# 直到遇到下一个 yield 或函数结束\n\n# 可以用 for 循环遍历：\nfor sq in get_squares_gen(5):\n    print(sq, end=" ")  # 0 1 4 9 16\n\n# === 生成长达 10 亿个数也不怕！ ===\n# 生成器表达式：把列表推导式的 [] 换成 ()\nhuge = (x ** 2 for x in range(10**9))  # 10亿！\n# 如果用列表：[x**2 for x in range(10**9)] → 内存直接爆炸\n# 但生成器表达式只创建了一个生成器对象，没算任何值\nprint(next(huge))  # 0 — 现在才计算第一个\nprint(next(huge))  # 1 — 现在才计算第二个\n# 内存占用几乎为 0！',
      },
    ],
    tip: '装饰器和生成器不是必须掌握的，但它们能让你的 Python 水平上一个台阶。刚开始学的时候，先确保能看懂别人写的装饰器和生成器；熟练之后自己写。不必强求一步到位。'
  },

  'Web 开发入门': {
    level: '进阶', badgeClass: 'badge-intermediate', icon: '🌐',
    intro: '你写的程序现在还只能在你自己的电脑上用——别人想用你的程序，得先把代码发给他们，他们还要装 Python……太麻烦了。Web 开发解决了这个问题：把程序变成一个网站，任何人只要有浏览器（Chrome/Edge/Safari）就能用。\n\nPython 有两个主流 Web 框架：Flask（轻量灵活，适合入门和小项目）和 FastAPI（现代高性能，适合 API 服务）。两个都学，不同场景用不同工具。',
    sections: [
      {
        title: '0. Web 是怎么工作的？—— 浏览器和服务器',
        text: '你在浏览器地址栏输入网址、按回车——这个简单的动作背后发生了一系列事情：\n\n1. 浏览器（你电脑上的程序）向服务器（远方的电脑）发送一个"请求"——"请给我 xxx 页面"\n2. 服务器收到请求，处理（查数据库、运算），然后把结果打包成 HTML 发回来\n3. 浏览器收到 HTML，把它"翻译"成你看到的网页\n\n这就是"请求-响应"模型——Web 开发的核心。'
      },
      {
        title: '一、Flask —— 轻量灵活的 Web 框架',
        text: 'Flask 被称为"微框架"——它只提供路由（URL 和函数的映射）和模板渲染等核心功能，其他功能（数据库、登录认证）由你自由选择扩展。\n\nFlask 的设计哲学：简单、不强制你按某种方式做事。',
        code: '# === Flask 最简应用，逐行解释 ===\n# 文件：app.py（在命令行用 pip install flask 安装后运行）\n\nfrom flask import Flask\n# 从 flask 包中导入 Flask 类\n# Flask 是 Web 应用的"大总管"，所有功能都在它身上\n\napp = Flask(__name__)\n# 创建一个 Flask 应用实例\n# __name__ → Python 内置变量，表示当前模块名\n# Flask 用 __name__ 来确定模板文件和静态文件的位置\n\n@app.route("/")\n# @app.route(路径) → 装饰器，把一个 URL 路径和一个函数绑定\n# "/" 表示网站的"根路径"（首页）\n# 当用户访问 http://你的网址/ 时，执行下面这个函数\ndef home():\n    """处理首页请求"""\n    return "<h1>欢迎来到我的网站！</h1><p>这是用 Python Flask 写的。</p>"\n    # return 的字符串就是返回给浏览器的 HTML\n    # 浏览器收到这段 HTML 就会渲染成网页\n\n@app.route("/hello/<name>")\n# <name> → 动态路由参数！\n# 访问 /hello/小明 时，name 会自动变成 "小明"\n# 访问 /hello/World 时，name 会自动变成 "World"\ndef hello(name):\n    """个性化问候页面"""\n    return f"<h1>你好，{name}！</h1>\\n<p>欢迎使用 Flask。</p>"\n    # 用 f-string 把 URL 中的参数嵌入到 HTML 中\n\n# 运行方式（在命令行）：\n# flask run\n# 然后在浏览器访问 http://127.0.0.1:5000',
      },
      {
        title: '二、FastAPI —— 现代高性能框架',
        text: 'FastAPI 是 Python Web 框架的新秀，它最大的三个卖点：\n1. 快——性能接近 Node.js 和 Go\n2. 利用 Python 类型提示做自动数据验证\n3. 自动生成交互式 API 文档（访问 /docs 就能看到）',
        code: '# === FastAPI 简单示例，逐行解释 ===\n# 文件：main.py（运行：pip install fastapi uvicorn）\n\nfrom fastapi import FastAPI     # 导入 FastAPI 类\nfrom pydantic import BaseModel  # 导入数据验证的基类\n\napp = FastAPI(title="我的第一个 API")\n# 创建 FastAPI 应用，title 参数是 API 的标题\n\n# 用 Pydantic 模型定义请求体格式\nclass Item(BaseModel):\n    """商品数据模型"""\n    name: str         # 字段名: 类型 —— 必须是一个字符串\n    price: float      # 必须是一个小数\n    quantity: int = 1 # = 1 表示默认值为 1（这个字段是可选的）\n\n# 内存数据库（实际项目会用真数据库）\nitems_db = {}\n\n@app.get("/")\n# @app.get(路径) → 处理 GET 请求（浏览器访问网页就是 GET 请求）\ndef read_root():\n    """根路径：返回欢迎信息"""\n    return {"message": "欢迎使用商品管理 API"}\n    # FastAPI 中直接返回字典，会自动转成 JSON\n\n@app.post("/items/")\n# @app.post(路径) → 处理 POST 请求（提交数据用 POST）\ndef create_item(item: Item):\n    # item: Item → FastAPI 会自动从请求体中解析 JSON\n    # 并验证是否符合 Item 模型的定义\n    # 比如如果没传 price，会自动返回 422 错误\n    item_id = len(items_db) + 1\n    items_db[item_id] = item\n    return {"id": item_id, "item": item}\n\n@app.get("/items/")\ndef list_items():\n    """列出所有商品"""\n    return items_db\n\n# 运行方式：\n# uvicorn main:app --reload\n# 然后访问 http://127.0.0.1:8000/docs 体验自动生成的 API 文档！',
      },
    ],
    tip: 'Web 开发最好的学习方式是"做一个自己想用的东西"——个人博客、Todo 应用、记账工具。带着项目需求去学框架，比干看文档高效十倍。另外，Flask 入门更简单，FastAPI 更现代化——两个都值得学。'
  },

  '数据库与存储': {
    level: '进阶', badgeClass: 'badge-intermediate', icon: '🗄️',
    intro: '你的网站现在有了用户、有了留言——但重启服务器后数据全丢了。数据库专门解决"持久化存储"问题：把数据有组织地存到硬盘上，并能高效查询。\n\nPython 自带 SQLite（轻量数据库，一个文件就是整个数据库），也支持 PostgreSQL/MySQL 等专业数据库。这一章从 SQLite 入门，再到 SQLAlchemy ORM（用 Python 代码代替 SQL 操作数据库）。',
    sections: [
      {
        title: '一、SQLite —— Python 内置数据库',
        text: 'SQLite 是世界上最广泛部署的数据库引擎——每个手机 App、每个浏览器都在用它。它不需要安装服务器，一个 .db 文件就是整个数据库。Python 标准库自带了 sqlite3 模块。',
        code: '# === SQLite 详解，逐行解释 ===\nimport sqlite3\n\n# 连接数据库（文件不存在会自动创建！）\nconn = sqlite3.connect("school.db")\n# sqlite3.connect(文件名) → 打开（或创建）一个 SQLite 数据库文件\n# conn 是"连接对象"，代表你到数据库的"电话线"\n\n# 创建游标（通过游标执行 SQL 语句）\nc = conn.cursor()\n# cursor → "游标"，相当于数据库操作的"手柄"\n# 你通过游标发送 SQL 命令，也通过游标获取查询结果\n\n# 创建表（表 = Excel 的一个 sheet）\nc.execute("""\n    CREATE TABLE IF NOT EXISTS students (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        age INTEGER,\n        score REAL\n    )\n""")\n# execute() → 执行一条 SQL 语句\n# CREATE TABLE → SQL 关键字：创建一张新表\n# IF NOT EXISTS → 如果表已经存在就不创建（避免报错）\n# id INTEGER PRIMARY KEY AUTOINCREMENT → id 是主键（唯一标识），自动递增\n# name TEXT NOT NULL → name 是文本类型，不能为空\n# score REAL → score 是小数类型\n\n# 插入数据（用 ? 占位符防 SQL 注入）\nc.execute("INSERT INTO students (name, age, score) VALUES (?, ?, ?)",\n          ("小明", 20, 92.5))\n# ? → 参数占位符，后面的元组依次替代 ?\n# 为什么用 ? 而不是直接拼字符串？为了防 SQL 注入攻击！\n# 直接拼字符串的话，如果用户输入恶意 SQL 代码，数据库会被攻击\n\n# 批量插入\nstudents = [("小红", 21, 88.0), ("小刚", 19, 95.0)]\nc.executemany("INSERT INTO students (name, age, score) VALUES (?, ?, ?)",\n              students)\n# executemany → 批量执行同一 SQL 语句，每行用不同的参数\n\nconn.commit()  # 提交事务——不调用这行，插入不会真正写入！\n# commit = "确认，把改动真正写入硬盘"\n\n# 查询数据\nc.execute("SELECT * FROM students WHERE score >= ? ORDER BY score DESC", (90,))\n# SELECT * → 查询所有列\n# WHERE score >= ? → 条件筛选：只取分数 >= 90 的\n# ORDER BY score DESC → 按分数降序排列\n# (90,) → 给 ? 的参数（注意：单个值也要写成元组，所以有逗号）\n\nfor row in c.fetchall():  # fetchall() → 取回所有结果行\n    print(f"ID={row[0]}, 姓名={row[1]}, 年龄={row[2]}, 分数={row[3]}")\n\nconn.close()  # 关闭连接',
      },
      {
        title: '二、SQLAlchemy ORM —— 用 Python 操作数据库',
        text: 'ORM（Object-Relational Mapping，对象关系映射）让你用 Python 类操作数据库——定义一个类就相当于建一张表，创建一个对象就相当于插入一行数据。不用手写 SQL。',
        code: '# === SQLAlchemy 入门，逐行解释 ===\nfrom sqlalchemy import create_engine, Column, Integer, String, Float\nfrom sqlalchemy.orm import Session, DeclarativeBase\n\n# 1. 创建引擎（连接数据库）\nengine = create_engine("sqlite:///school.db", echo=True)\n# "sqlite:///school.db" → 数据库 URL 格式：数据库类型:///文件路径\n# echo=True → 把执行的每一条 SQL 打印到控制台（学习时有用）\n\n# 2. 定义模型基类\nclass Base(DeclarativeBase):\n    pass  # 这是一个"声明式基类"，所有模型都继承它\n\n# 3. 定义模型（= 建表语句的 Python 版本）\nclass Student(Base):\n    __tablename__ = "students"     # ← 映射到数据库中的 students 表\n\n    id = Column(Integer, primary_key=True)     # 主键\n    name = Column(String(50), nullable=False)  # 字符串，最长50，不能为空\n    age = Column(Integer)\n    score = Column(Float)\n\n    def __repr__(self):\n        return f"<Student {self.name}, Score:{self.score}>"\n        # 打印对象时的显示格式\n\n# 4. 创建所有表\nBase.metadata.create_all(engine)\n# 扫描所有继承自 Base 的模型，自动生成 CREATE TABLE 语句并执行\n\n# 5. 使用 Session 操作数据库\nwith Session(engine) as session:\n    # Session → "工作单元"，把多个操作组成一个事务\n\n    # 插入\n    new_stu = Student(name="小丽", age=20, score=97.0)\n    session.add(new_stu)     # 标记为"待插入"\n    session.commit()         # 真正执行（commit = 提交事务）\n\n    # 查询（用 Python 表达式，不用写 SQL！）\n    top = session.query(Student)\\\n          .filter(Student.score >= 90)\\\n          .order_by(Student.score.desc())\\\n          .all()\n    # .query(Student) → 查询 Student 表\n    # .filter(条件) → 相当于 SQL 的 WHERE\n    # .order_by() → 排序\n    # .all() → 获取所有结果\n\n    for s in top:\n        print(f"{s.name}: {s.score}分")',
      },
    ],
    tip: '学习数据库的建议顺序：先手写 SQL 打基础（理解表结构、JOIN、GROUP BY），再用 ORM 提高效率。理解底层原理后，用 ORM 出问题时你才知道怎么排查。'
  },

  // ==================== 精通篇 ====================

  '并发与异步编程': {
    level: '精通', badgeClass: 'badge-advanced', icon: '⚡',
    intro: '你的程序现在一次只能做一件事——下载文件的时候界面卡住，算数据的时候不能同时响应用户操作。并发编程让你能"一只手画圆，一只手画方"——同时处理多个任务。\n\nPython 提供了三种方案：线程（threading）、进程（multiprocessing）和异步 IO（asyncio）。选对方案，性能可以提升几十倍。',
    sections: [
      {
        title: '0. 并发 vs 并行 —— 关键概念',
        text: '并发（Concurrency）：一个人同时管理多个任务——你在等水烧开的时候去切菜。看起来像同时，其实是快速切换。\n并行（Parallelism）：多个人同时做不同的事——你烧水，室友切菜。真正的"同时"。\n\nPython 因为 GIL（全局解释器锁）的存在，多线程只能"并发"不能"并行"。但对 IO 密集型任务（网络请求、文件读写），并发已经足够快了。'
      },
      {
        title: '一、多线程 —— IO 密集任务的灵丹妙药',
        text: '线程就像程序里的"分身"——它们共享内存，但各自独立执行。当你需要同时下载多个文件、同时等待多个 API 响应时，多线程能让总时间从"所有任务时间之和"降到"最慢那个任务的时间"。',
        code: '# === 多线程 vs 顺序执行，逐行解释 ===\nimport time\nimport threading\n\ndef download(filename, duration):\n    """模拟下载文件"""\n    print(f"  开始下载 {filename}...（需要 {duration} 秒）")\n    time.sleep(duration)  # 暂停 duration 秒（假装在等待网络响应）\n    print(f"  ✓ {filename} 下载完成！")\n\n# === 顺序执行：一个一个来 ===\nstart = time.time()\ndownload("电影.mp4", 0.5)   # 等 0.5 秒\ndownload("音乐.mp3", 0.5)   # 等 0.5 秒\ndownload("文档.pdf", 0.5)   # 等 0.5 秒\nprint(f"顺序执行耗时: {time.time() - start:.1f} 秒")  # ≈ 1.5 秒\n\n# === 多线程：三个一起启动 ===\nstart = time.time()\nthreads = []\nfor name in ["电影.mp4", "音乐.mp3", "文档.pdf"]:\n    t = threading.Thread(target=download, args=(name, 0.5))\n    # Thread(target=函数, args=(参数,)) → 创建一个线程\n    # target → 线程要执行的函数\n    # args → 传给函数的参数（必须是元组）\n    threads.append(t)\n    t.start()  # ← .start() 启动线程（不是 .run()！）\n\nfor t in threads:\n    t.join()   # ← .join() 等待线程执行完毕\n    # 如果不 join，主程序会继续往下走，不等线程完成\n\nprint(f"多线程耗时: {time.time() - start:.1f} 秒")  # ≈ 0.5 秒！\n# 快了 3 倍！因为三个下载同时进行，只需要等最慢的那个',
      },
      {
        title: '二、asyncio —— 高并发网络编程',
        text: 'asyncio 是 Python 官方的异步 IO 库。它的核心思想：在等待 IO 的时候（网络响应、文件读写），切换到其他任务。async/await 语法让你用"看起来像同步代码"的方式写异步程序。\n\nasyncio 特别适合：网络爬虫、API 网关、聊天服务器等需要同时维护成千上万连接的应用。',
        code: '# === asyncio 详解，逐行解释 ===\nimport asyncio\n\n# async def → 定义一个"协程函数"（不是普通函数！）\nasync def fetch_data(name, delay):\n    """模拟异步获取数据"""\n    print(f"  开始获取 {name}...（需要 {delay} 秒）")\n    await asyncio.sleep(delay)\n    # await → "在这里暂停，去执行其他协程，等这个完成了再回来"\n    # asyncio.sleep(delay) → 异步版本的 sleep（不阻塞其他任务！）\n    # 如果用 time.sleep()，整个线程都会卡住\n    print(f"  ✓ {name} 获取完成！")\n    return f"{name} 的数据"\n\nasync def main():\n    """主协程"""\n    print("=== 同时请求 5 个 API ===\\n")\n    start = time.time()\n\n    # gather：并发执行多个协程，等全部完成\n    results = await asyncio.gather(\n        fetch_data("用户API", 0.3),\n        fetch_data("订单API", 0.5),\n        fetch_data("商品API", 0.4),\n        fetch_data("物流API", 0.3),\n        fetch_data("库存API", 0.5),\n    )\n    # gather → "启动所有协程，等它们全部完成"\n    # 5 个协程并发执行 → 总时间 ≈ 最慢的那个 (0.5s)\n    # 同步顺序执行 → 0.3+0.5+0.4+0.3+0.5 = 2.0s\n\n    print(f"\\n全部完成！耗时: {time.time() - start:.2f} 秒")\n    print(f"结果: {results}")\n\n# 运行主协程\nasyncio.run(main())\n# asyncio.run() → 创建事件循环并执行协程（Python 3.7+ 推荐方式）',
      },
    ],
    tip: '选择策略：IO 密集型（网络请求、文件读写）→ asyncio（最高效）或 threading（更简单）；CPU 密集型（数学计算、图像处理）→ multiprocessing。不确认的话，各写一个小测试对比一下，用数据说话。'
  },

  '元编程': {
    level: '精通', badgeClass: 'badge-advanced', icon: '🔮',
    intro: '元编程是"编写操作代码的代码"——你的程序可以在运行时创建类、修改类、检查类。这不是日常工具，但理解了它，你会发现很多框架（Django ORM、SQLAlchemy、Pydantic）的"魔法"背后其实就是元编程。',
    sections: [
      {
        title: '一、类也是对象 —— Python 的核心秘密',
        text: '你一直以为 Python 中的一切（数字、字符串、函数）都是对象。但你知道吗——"类"本身也是对象！当你写下 class Dog: 时，Python 内部用 type() 函数动态创建了 Dog 类。\n\ntype 有两个身份：\n• type(对象) → 查看类型（你以前用的）\n• type(类名, 父类, 属性) → 动态创建类（你将要学的）',
        code: '# === 类也是对象，逐行解释 ===\n\n# 验证：类也是对象\nclass Dog:\n    sound = "汪汪"\n\nprint(type(Dog))     # <class \'type\'>\n# 惊不惊讶？Dog 的类型是 type！\n# type 是 Python 中所有类的"元类"——类的类\nprint(type(5))       # <class \'int\'>（5 是 int 类型的对象）\nprint(type(Dog))     # <class \'type\'>（Dog 是 type 类型的对象）\n\n# === 用 type() 动态创建类 ===\n# type(类名, (父类,), {属性字典})\nCat = type(\'Cat\', (object,), {\n    # \'Cat\' → 类名\n    # (object,) → 父类元组（object 是所有类的祖先）\n    # {} → 类的属性字典\n\n    \'sound\': \'喵喵\',\n    # 一个类属性\n\n    \'make_sound\': lambda self: f"猫说：{self.sound}"\n    # 一个方法（这里用 lambda 简单定义）\n})\n\nmy_cat = Cat()\nprint(my_cat.make_sound())  # 猫说：喵喵\nprint(type(Cat))            # <class \'type\'>\n\n# 上面这两段代码（class Dog 和 type 创建 Cat）本质上是等价的！\n# 当你写 class 时，Python 做的就是上面 type() 做的事',
      },
      {
        title: '二、metaclass —— 控制类的创建过程',
        text: '如果类是"对象的模板"，那么元类（metaclass）就是"类的模板"。当 Python 碰到 class 语句时，它会调用元类的 __new__ 方法来创建这个类。你可以在 __new__ 中"插入"一些逻辑——比如自动给所有属性加日志、自动注册类等。',
        code: '# === 元类实战，逐行解释 ===\n\n# 定义一个元类：给使用它的类自动加创建时间戳\nclass AutoTimestampMeta(type):\n    # 继承自 type——所有元类都应该继承 type\n\n    def __new__(mcs, name, bases, namespace):\n        # mcs      → 元类自身 (MetaClass Self)\n        # name     → 要创建的类的名称（如 "MyClass"）\n        # bases    → 父类元组\n        # namespace → 类的属性字典（方法、类变量等都在里面）\n\n        from datetime import datetime\n        # 在属性字典里添加一个时间戳属性\n        namespace[\'created_at\'] = datetime.now().isoformat()\n        # 这个属性会被自动添加到每个使用 AutoTimestampMeta 的类上\n\n        # 调用父类 (type) 的 __new__ 来正式创建类\n        return super().__new__(mcs, name, bases, namespace)\n        # super() → 调用父类的方法\n        # 这一步是必须的——最终还是要让 type 来创建类\n\n# 使用元类\nclass ModelA(metaclass=AutoTimestampMeta):\n    """模型 A"""\n    data = "一些数据"\n\nclass ModelB(metaclass=AutoTimestampMeta):\n    """模型 B"""\n    data = "其他数据"\n\nprint(ModelA.created_at)  # 2026-06-19T10:30:45\nprint(ModelB.created_at)  # 2026-06-19T10:30:45\n# 两个类创建时间几乎一样，但关键是——\n# created_at 属性是"自动"加上的，你不需要在每个类里手写！\n# 这就是元类的威力：一处定义，处处生效',
      },
    ],
    tip: '元编程威力强大，但也最容易写出让人看不懂的代码。记住原则：能用简单方案就不用元编程。库的开发者（需要控制类的创建行为）用得多，应用开发者用得少。'
  },

  '性能优化': {
    level: '精通', badgeClass: 'badge-advanced', icon: '📊',
    intro: '你的程序能跑了——但能跑得更快吗？性能优化是一门科学，不是玄学。核心原则只有一条：「先测量，再优化；没测量，别优化」。\n\n新手最常犯的错误是凭直觉说"我觉得这段很慢"然后开始瞎优化——结果优化了半天，发现慢的是另一段代码。用工具（profiler）找到真正的瓶颈，把有限的精力用在对的地方。',
    sections: [
      {
        title: '一、cProfile —— 用数据找到真正的瓶颈',
        text: 'cProfile 是 Python 内置的性能分析器。它记录：每个函数被调用了多少次、每次花了多少时间、总耗时多少。有了这份报告，你就不需要"猜"哪里慢了。',
        code: '# === cProfile 使用详解，逐行解释 ===\nimport cProfile\nimport pstats\n\ndef heavy_task():\n    """假装这是一个很重的计算任务"""\n    total = 0\n    for i in range(1_000_000):   # 100 万次循环\n        total += i ** 2\n    return total\n\ndef light_task():\n    """一个很轻的任务"""\n    return sum(range(1000))      # 只算 1000 个数的和\n\ndef main():\n    heavy_task()   # 执行重任务\n    light_task()   # 执行轻任务\n    heavy_task()   # 再执行一次重任务（总共执行了 2 次）\n\n# 运行性能分析\nprofiler = cProfile.Profile()  # 创建分析器\nprofiler.enable()              # 开启分析\nmain()                         # 执行要分析的代码\nprofiler.disable()             # 关闭分析\n\n# 查看结果\nstats = pstats.Stats(profiler)  # 处理分析数据\nstats.sort_stats("cumtime")    # 按累计时间排序\n# cumtime = cumulative time → 函数及其内部调用的总耗时\n# tottime = total time → 函数本身（不含内部调用）的耗时\n\nstats.print_stats(10)           # 显示耗时最多的 10 个函数\n# 输出会告诉你 heavy_task 花了最多时间，light_task 几乎不花时间\n# 这样你就知道应该优化 heavy_task 而不是 light_task',
      },
      {
        title: '二、Python 代码优化的常用技巧',
        text: '以下是几个"低成本、高回报"的优化技巧，每个都有确切的理由。优化不是魔法——它是对 Python 内部实现的理解。',
        code: '# === 技巧 1：用 set 做成员检查（O(1) vs O(n)） ===\n# 在列表中查找一个元素，需要从第一个开始逐个对比（最坏：全比一遍）\nmy_list = list(range(10000))\n# if 5000 in my_list: pass  # 平均比较 5000 次\n\n# 在集合中查找，无论多少元素都几乎是瞬间（哈希查找）\nmy_set = set(my_list)\n# if 5000 in my_set: pass     # 几乎 1 次就找到！\n# 为什么区别这么大？列表是连续扫描，集合用哈希表直接定位\n\n# === 技巧 2：join() 拼接字符串（而不是循环中用 +） ===\nwords = ["Python", "是", "最好的", "语言"] * 1000  # 4000 个词\n\n# 慢写法：每次 + 都创建一个新字符串对象（旧字符串 + 新片段）\n# result = ""\n# for w in words:\n#     result += w + " "       # 创建大量中间字符串 → 慢\n\n# 快写法：join 一次性计算总长度，一次性分配内存\nresult = " ".join(words)       # 只创建一次 → 快很多\n# 原理：join 先遍历一遍算出总长度，然后一次性分配内存并拼接\n\n# === 技巧 3：局部变量比全局变量快 ===\n# 全局变量存储在字典中，需要哈希查找\n# 局部变量存储在数组中，按索引直接访问\n\nx_global = 10  # 全局变量\n\ndef use_global():\n    return x_global * 2  # 每次访问要查全局命名空间\n\ndef use_local():\n    x = 10                # 局部变量\n    return x * 2          # 直接按索引取 → 更快\n\n# 在百万级别循环中，这个差异是显著的',
      },
    ],
    tip: '优化的三重境界：1) 算法优化——选对数据结构和算法，效果最显著（O(n²) → O(n log n)）；2) 代码优化——上面那些小技巧；3) 底层优化——Cython、PyPy、C 扩展。99% 的场景下，做好前两个就够了。「过早优化是万恶之源」—— Donald Knuth'
  },

  'CPython 源码': {
    level: '精通', badgeClass: 'badge-advanced', icon: '🔬',
    intro: '这是 Python 学习之路的最后一站。CPython 是 Python 语言最主流的实现——用 C 语言写成的 Python 解释器。阅读 CPython 源码让你理解 Python "内部到底发生了什么"，是「会用 Python」和「真正理解 Python」的分水岭。\n\n但别被"C 语言"吓到。CPython 的 C 代码写得很清晰，注释也非常好。只要你带着具体问题去读（比如"列表的 append 为什么是 O(1)？"），就能一步步看懂。',
    sections: [
      {
        title: '一、Python 对象在 C 层面长什么样',
        text: '在 Python 中"一切皆对象"——这句话在 C 源码中的体现是：所有的 Python 类型结构体都以 PyObject 开头。PyObject 包含两种东西：引用计数（ob_refcnt）和类型指针（ob_type）。\n\n每种具体类型（整数、列表、字典）都是在这个基础上的扩展。',
        code: '// === Python 对象底层结构，逐行解释 ===\n// 源码位置：Include/object.h\n\n// 这是所有 Python 对象的"基结构体"——所有对象都以这个开头\ntypedef struct _object {\n    Py_ssize_t ob_refcnt;   // 引用计数：几个地方在引用这个对象\n    // 当引用计数变为 0 时，对象被立即销毁，内存被回收\n\n    PyTypeObject *ob_type;   // 类型指针：指向这个对象所属的类型\n    // 比如整数对象指向 PyLong_Type，列表对象指向 PyList_Type\n} PyObject;\n\n// === 整数对象 = PyObject + 存储数字的数组 ===\n// 源码位置：Include/longobject.h\ntypedef struct {\n    PyObject ob_base;        // 继承 PyObject（引用计数 + 类型指针）\n    Py_ssize_t ob_size;      // 数字用了多少个 30-bit "digit"\n    uint32_t ob_digit[1];    // 实际存储数字的变长数组\n    // 这就是 Python 整数可以无限大的秘密！\n    // 不够大就增加 digit，不像 C 的 int 最多到 2³¹-1\n} PyLongObject;\n\n// === 列表对象 = PyObject + 元素指针数组 + 容量 ===\n// 源码位置：Include/listobject.h\ntypedef struct {\n    PyObject_VAR_HEAD        // 包含 ob_refcnt, ob_type, ob_size\n    PyObject **ob_item;      // 指向元素数组的指针\n    Py_ssize_t allocated;    // 当前分配的空间（≥ ob_size）\n    // ob_size = 列表的实际长度（len(list) 返回的值）\n    // allocated = 预分配的空间（大于实际长度）\n    // 这就是为什么 append 是 O(1) 均摊——空间不够时一次性扩容\n} PyListObject;',
      },
      {
        title: '二、引用计数与垃圾回收',
        text: 'CPython 内存管理的核心是引用计数——每个对象都记录着"有多少地方在引用我"。引用计数降到 0 时，对象立即被销毁。\n\n但引用计数解决不了"循环引用"——A 引用 B、B 也引用 A，两者引用计数永不为 0。这就是 CPython 还需要一套"垃圾回收器"（GC）来周期性检测和清理循环引用。',
        code: '# === 引用计数实验，逐行解释 ===\nimport sys\n\n# 查看对象的引用计数\na = [1, 2, 3]\nprint(sys.getrefcount(a))   # 2\n# 为什么是 2 不是 1？\n# 一个引用是变量 a，另一个是 getrefcount 的参数！\n# getrefcount 的参数 a 会临时增加一次引用计数\n\nb = a                       # b 也指向同一个列表\nprint(sys.getrefcount(a))   # 3（a + b + getrefcount参数）\n\ndel b                       # 删除 b 这个引用\nprint(sys.getrefcount(a))   # 2（a + getrefcount参数）\n\n# === 循环引用：引用计数的死穴 ===\nclass Node:\n    def __init__(self, name):\n        self.name = name\n        self.ref = None     # 可以引用另一个 Node\n\nx = Node("X")\ny = Node("Y")\nx.ref = y   # x 引用 y\ny.ref = x   # y 引用 x → 形成循环！\n\ndel x       # 删除外部引用\ndel y       # 但 x 和 y 仍然互相引用\n# x 和 y 的引用计数都是 1（互指），不会归零！\n# 如果没有垃圾回收器，这两个对象将永远不会被释放 → 内存泄漏\n\n# 手动触发垃圾回收\nimport gc\ncollected = gc.collect()    # GC 会检测并清理循环引用\nprint(f"回收了 {collected} 个对象")',
      },
    ],
    tip: '阅读 CPython 源码可以从这几个文件开始：Objects/listobject.c（列表实现）、Objects/dictobject.c（字典核心是哈希表）、Python/ceval.c（字节码解释循环——GIL 就在这里）。带着问题去读，不要从头到尾死磕。另外，《CPython Internals》这本书是非常好的向导。'
  }
};

import { Day } from "date-fns";

const zh = {
  cancel: "取消",
  confirm: "确认",
  common: {
    day: {
      0: "星期一",
      1: "星期二",
      2: "星期三",
      3: "星期四",
      4: "星期五",
      5: "星期六",
      6: "星期日",
    } as Record<Day, string>,
    frequency: {
      1: "每周",
      2: "隔周",
    },
  },
  page: {
    home: "首页",
    editRegularWorship: "编辑定期证道",
    editSpecialWorship: "编辑特别证道",
    createSpecialWorship: "添加特别证道",
    createFellowship: "添加团契",
    editFellowship: "编辑团契",
    createEvent: "添加活动",
    editEvent: "编辑活动",
    dashboard: "Dashboard",
    events: "活动",
    fellowships: "团契",
    confirmPassword: "确认密码",
    forgetPassword: "忘记密码",
    resetPassword: "重置密码",
    login: "登录",
    register: "注册",
    emailVerification: "验证邮件",
    profile: "用户信息",
  },
  home: {
    welcome: "欢迎来到",
    heading: "法兰克福华人基督教会",
    subheading:
      "期待在2024，我们一起学习顺服神，让我们的教会成为一个神同在的教会。神若与我们同在，教会必然复兴，教会必然蒙福，教会必然有能力，教会必然蒙引导，教会必然经历神。你也愿意让神居首位，满足主的心肠，让神得荣耀吗？让我们一同建造教会，兴旺神的家。",
    worship: {
      heading: "主日敬拜",
      schedule: "每周日",
      sunday: "周日",
      description:
        "教会主日崇拜现采取线上，线下双轨制。欢迎弟兄姊妹和各位朋友参加我们的实体或网络主日崇拜。",
      sermon: "布道",
      baptism: "洗礼",
      eucharist: "圣餐",
      dinner: "爱宴",
      video: "证道视频",
    },
    events: "最新活动",
    fellowships: {
      heading: "团契",
    },
  },
  header: {
    events: "最新活动",
    fellowships: "团契",
    library: "图书馆",
    about: "关于",
    liveStream: "实时转播",
    donate: "奉献",
    imprint: "版本说明",
    terms: "使用条款",
  },
  admin: {
    menu: {
      church: "主日敬拜",
      fellowship: "团契",
      event: "活动",
      profile: "用户信息",
      signOut: "退出登录",
    },
    fellowships: {
      name: "名称",
      status: "状态",
      description: "内容",
      location: "聚会地点",
      schedule: "聚会时间",
      contact: "联络人",
      zoom: "Zoom",
      cover: "上传封面",
      help: "点击或者拖动一个文件到这个区域",
    },
    post: {
      publish: "发布",
      saveDraft: "保存为草稿",
      status: {
        published: "已发布",
        draft: "草稿",
        archived: "已存档",
      },
    },
    worships: {
      type: "类型",
      date: "日期",
      title: "主题 (可选)",
      location: "地点",
      baptism: "洗礼",
      eucharist: "圣餐",
      dinner: "爱宴",
      regular: "定期证道",
      special: "特别证道",
    },
    events: {
      date: "日期",
      title: "标题",
      description: "详情",
      location: "地点",
      cover: "上传封面",
    },
  },
  profile: {
    updateProfile: {
      header: "档案信息",
      subheader: "更新您帐户的个人资料信息和电子邮件地址。",
      name: "姓名",
      email: "邮箱",
      button: "更新档案",
      verifyEmail: {
        info: "您的电子邮件地址尚未验证。",
        resendVerificationEmail: "单击此处重新发送验证电子邮件。",
        newVerificationLink: "新的验证链接已发送至您的电子邮件地址。",
      },
    },
    updatePassword: {
      header: "更新密码",
      subheader: "确保您的帐户使用较长的随机密码以确保安全。",
      currentPassword: "当前密码",
      newPassword: "新密码",
      confirmPassword: "确认密码",
      button: "更新密码",
    },
    deleteAccount: {
      header: "删除账户",
      subheader:
        "一旦您的帐户被删除，其所有资源和数据将被永久删除。在删除您的帐户之前，请下载您希望保留的任何数据或信息。",
      button: "删除账户",
      modal: {
        header: "你确定要删除当前账号吗？",
        info: "一旦您的帐户被删除，其所有资源和数据将被永久删除。请输入您的密码以确认您想要永久删除您的帐户。",
        password: "密码",
      },
    },
  },
  auth: {
    email: "邮箱",
    password: "密码",
    confirmPassword: {
      info: "这是应用程序的安全区域。请确认您的密码后再继续。",
    },
    forgetPassword: {
      info: "忘记密码？没问题。只需告诉我们您的电子邮件地址，我们就会通过电子邮件向您发送密码重置链接，以便您选择一个新密码。",
      sendLink: "发送电子邮件密码重置链接",
    },
    login: {
      remember: "记住我",
      forget: "忘记密码？",
      button: "登录",
    },
    register: {
      name: "姓名",
      confirmPassword: "确认密码",
      alreadyRegistered: "已经注册？",
      button: "注册",
    },
    resetPassword: {
      confirmPassword: "确认密码",
      button: "重置密码",
    },
    verifyEmail: {
      info: "感谢您注册！在开始之前，您能否通过点击我们刚刚通过电子邮件发送给您的链接来验证您的电子邮件地址？如果您没有收到电子邮件，我们很乐意再给您发送一封。",
      verificationLink: "新的验证链接已发送至您在注册时提供的电子邮件地址。",
      resendEmail: "重新发送验证邮件",
      logout: "退出登录",
    },
  },
};

export default zh;

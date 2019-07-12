// components/cusnav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background: String,
    color: String,
    size: Number,
    return: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    titleBarHeight: 0,
    defaultSrc: '/image/icon.jpg',
    avatarUrl: null,
    placeholder: '点我搜索'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getuserinfo(e) {
      if(this.data.avatarUrl) return
      this.setData({
        avatarUrl: e.detail.userInfo.avatarUrl
      })
    }
  },

  /**
   * 生命周期
   */
  attached() {
    const { statusBarHeight, system } = wx.getSystemInfoSync()
    let titleBarHeight = 48
    if (system.includes('iOS')) titleBarHeight = 44
    this.setData({ statusBarHeight, titleBarHeight })
  }
})

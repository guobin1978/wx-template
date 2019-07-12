// components/tabbar/index.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background: String,
    size: String,
    color: String,
    activeColor: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigate(e) {
      const index = e.currentTarget.dataset.index
      if(index == app.globalData.tabbar.index) return
      app.globalData.tabbar.index = index 
      this.setData({
        activeIndex: index
      })
      this.triggerEvent('getIndex', index);
    }
  },

  /**
   * 生命周期
   */
  attached() {
    this.setData({
      list: app.globalData.tabbar.List,
      activeIndex: app.globalData.tabbar.index
    })
  }
})

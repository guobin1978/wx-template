//app.js
import api from '/api/index.js'

App({
  // 生命周期
  onLaunch: function () {
   
  },
  // 全局数据
  globalData: {
    userInfo: null,
    tabbar: {
      List: [{
        title: '新闻',
        src: '/image/tabbar/news.png',
        activeSrc: '/image/tabbar/news_select.png',
        url: ''
      }, {
        title: '报告',
        src: '/image/tabbar/report.png',
        activeSrc: '/image/tabbar/report_select.png',
        url: ''
      }],
      index: 0
    },
  },

  // 全局事件

})
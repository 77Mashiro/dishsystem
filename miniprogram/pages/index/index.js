// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {

    photo_address:"cloud://cloud1-0g6ojs2ja6ce371a.636c-cloud1-0g6ojs2ja6ce371a-1314916374/肉饼饭.jpg",
    food_name:"菜名",
    food_price:"15",
    address:"三饭二楼",
    showUploadTip: false,
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },

  get_image(e){ 

    var that = this
    console.log(e)

    wx.showLoading({
      icon: 'loading',
      title: '加载中，请稍后',
    })
    wx.cloud.getTempFileURL({
      fileList: [
         'cloud://cloud1-0g6ojs2ja6ce371a.636c-cloud1-0g6ojs2ja6ce371a-1314916374/云吞面.jpg','cloud://cloud1-0g6ojs2ja6ce371a.636c-cloud1-0g6ojs2ja6ce371a-1314916374/肉饼饭.jpg'
        // maxAge: 60 * 60, // one hour
      ]
    }).then(res => {
      // get temp file URL
      console.log(res.fileList)

      that.setData({
        imgData1: res.fileList[0].tempFileURL,
        imgData2: res.fileList[1].tempFileURL,
      }) 

    }).catch(error => {
      // handle error
      console.log(error)
    })
    

  },
  onTapButton:function(e){
    this.get_image(e)

    wx.navigateTo({
      url:this.data.imgData1,
    })
  },



  onShow(){
    var that = this
    wx.getStorage({
      key:'sex',
      success(res){
        console.log(res)
        if(res)
        {
          that.setData({
            usersex:res.data
          })
      }
      }
    })
    wx.getStorage({
      key:'fanliang',
      success(res){
        console.log(res)
        if(res)
        {
          that.setData({
            userfanliang:res.data
          })
      }
      }
    })
    wx.getStorage({
      key:'like',
      success(res){
        console.log(res)
        if(res)
        {
          that.setData({
            userlike:res.data
          })
      }
      }
    })
    wx.getStorage({
      key:'unlike',
      success(res){
        console.log(res)
        if(res)
        {
          that.setData({
            userunlike:res.data
          })
      }
      }
    })
  }
});

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgData1:"",
      imgData2:"cloud://cloud1-0g6ojs2ja6ce371a.636c-cloud1-0g6ojs2ja6ce371a-1314916374/肉饼饭.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
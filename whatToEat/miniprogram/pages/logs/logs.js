// pages/logs/logs.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['减肥', '健身', '省钱', '无'],
    objectArray: [
      {id: 0,   name: '减肥'},
      {id: 1,   name: '健身'},
      {id: 2,   name: '省钱' },
      {id: 3,   name: '无'}],
        array1:['男','女'],
        objectArray1: [{id:0,name:'男'},{id:1,name:'女'}],
        array2:['大','小'],
        objectArray2:[{id:0,name:'大'},{id:1,name:'小'}],
        array3:['不吃辣','不吃香菜','不吃猪肉','无'],
        objectArray3:[{id:0,name:'不吃辣'},{id:1,name:'不吃香菜'},{id:2,name:'不吃猪肉'},{id:4,name:'无'}]
  },
  //偏好
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    console.log('picker发送选择改变，值为',  e.detail.value)
    console.log(this.data.objectArray[e.detail.value])
  },
  // 男女
  bindPickerChange1(e) {
    this.setData({
      index1: e.detail.value
    })
    console.log('picker发送选择改变，值为',  e.detail.value)
    console.log(this.data.objectArray1[e.detail.value])
  },
  // 饭量
  bindPickerChange2(e) {
    this.setData({
      index2: e.detail.value
    })
    console.log('picker发送选择改变，值为',  e.detail.value)
    console.log(this.data.objectArray2[e.detail.value])
  },
  // 忌口
  bindPickerChange3(e) {
    this.setData({
      index3: e.detail.value
    })
    console.log('picker发送选择改变，值为',  e.detail.value)
    console.log(this.data.objectArray3[e.detail.value])
  },

  upstore:function () {
    wx.setStorage({
      key:"sex",
      data:this.data.array1[this.data.index1],
      success:function () {
        console.log('成功')
      },
      fail:function () {
        console.log('失败')
      }
    })  
    wx.setStorage({
      key:"fanliang",
      data:this.data.array2[this.data.index2],
      success:function () {
        console.log('成功')
      },
      fail:function () {
        console.log('失败')
      }
    })  
    wx.setStorage({
      key:"like",
      data:this.data.array[this.data.index],
      success:function () {
        console.log('成功')
      },
      fail:function () {
        console.log('失败')
      }
    }) 
    wx.setStorage({
      key:"unlike",
      data:this.data.array3[this.data.index3],
      success:function () {
        console.log('成功')
      },
      fail:function () {
        console.log('失败')
      }
    })   

    
  },
  goto:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
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
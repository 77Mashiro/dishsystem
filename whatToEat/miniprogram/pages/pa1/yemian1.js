Page({
  data: {
    array: ['健身', '减肥', '省钱','无'],
    objectArray: [{  id: 0,name: '健身'},{id: 1,name: '减肥'},{id: 2,name: '省钱' },{  id: 3,name: '无'}],

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
  }
}
)
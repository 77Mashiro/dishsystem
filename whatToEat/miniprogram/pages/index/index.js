// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
const db = wx.cloud.database()
Page({
  data: {
    i:false,
    fatnumber:1,
    proteinnumber:1,
    chonumber:1,
    pricenumber:50,
    photo_address:"",
    food_name:"",
    food_price:"",
    address:"",
    showUploadTip: false,
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
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
            usersex:res.data,
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
    
  },
  get:function () {
    var that = this;
    that.setData({
      i:true
    });
    console.log("转换");
    if(that.data.usersex=="男"){
      that.setData({
        chonumber:1
      })
    }else if(that.data.usersex=="女"){
      that.setData({
        chonumber:0.8
      })
    }
    if(that.data.userfanliang=="大"){
      that.setData({
        chonumber:that.data.chonumber*1.2
      })
    }
    if(that.data.userlike=="减肥"){
      that.setData({
        fatnumber:0.5
      })
    }else if(that.data.userlike=="健身"){
      that.setData({
        proteinnumber:1.5
      })
    }else if(that.data.userlike=="省钱"){
      that.setData({
        pricenumber:13
      })
    };
  
    
    db.collection("table").where({
      tablecho:db.command.gte(1200*that.data.chonumber)&&db.command.lte(1400*that.data.chonumber),
      tablefat:db.command.gte(25*that.data.fatnumber)&&db.command.lte(40*that.data.fatnumber),
      tableprotein:db.command.gte(40*that.data.proteinnumber)&&db.command.lte(60*that.data.proteinnumber),
      tableprice:db.command.lte(that.data.pricenumber)
    }).get().then(res=>{
      console.log("获取成功",res);
      that.setData({
      randomnumber:Math.floor(Math.random()*(res.data.length-1))
    })
      console.log(res.data.length);
      that.setData({
      food_name:res.data[that.data.randomnumber].tablename,
      food_price:res.data[that.data.randomnumber].tableprice,
      address:res.data[that.data.randomnumber].address,
      photo_address:"cloud://cloud1-0g6ojs2ja6ce371a.636c-cloud1-0g6ojs2ja6ce371a-1314916374/"+res.data[that.data.randomnumber].tablename+".jpg"
      })
    })
    

  
  },
  

})

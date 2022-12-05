//index.js
//获取应用实例
const app = getApp()

var util = require('../../utils/util.js');

Page({
  data: {
    tips:'',
    region:['广东省','广州市','番禺区'],
    key: '2ab5a358ada84749915e3cd87988656b',
    city: '',
    weather_now: {},
    future: {},
    twenty_four: {},
    indices: {},
    flag: false,
    latitude_value: 1,
    longitude_value: 12,
    weather_now:{
        temp:20,
        text:'NAN',
        icon:999,
        humidity:0,
        pressure:0,
        vis:0,
        windDir:'NAN',
        windScale:0,
        windSpeed:0,
        
 
    }
  },


  regionChange:function(e){
    this.setData({
        region:['广东省','广州市','番禺区']
    });
    this.getWeather();
},

getWeather:function(){
  var that=this;
  wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup', 
      method: 'GET',
      data: {
        key: "2ab5a358ada84749915e3cd87988656b",
        location: that.data.region[1]  //这个就是前端输入的城市名
      },
      success: (res) => {
        console.log(res);
        // return res.data.location[0].id
        this.setData({
          location: res.data.location[0].id  //提取返回结果中的id
        })
     
        // 获取locationid后，查询当前天气，在success中发起请求
        var location_id = this.data.location;
        // console.log(location_id);
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now', 
          method: 'GET',
          data: {
            key: "2ab5a358ada84749915e3cd87988656b",
            location: location_id
          },
          success: (res) => {
            console.log(res);
            this.setData({
              weather_now: res.data.now,
              flag: true
            })
          },
        });
          // 获取locationid后，查询天气指数
          wx.request({
            url: 'https://devapi.qweather.com/v7/weather/3d', 
            method: 'GET',
            data: {
              key: "2ab5a358ada84749915e3cd87988656b",
              location: location_id,
              type: 3
            },
            success: (res) => {
              console.log(res);
              this.setData({
                indices: res.data.daily,
                flag: true
              })
            },
          });
      },
    })
},

onLoad: function () {
  // 调用函数时，传入new Date()参数，返回值是日期和时间
  var time = util.formatTime(new Date());
  var month=new Date().getMonth();
  var tips;
  // 再通过setData更改Page()里面的data，动态更新页面的数据
  if (month <= 5 && month >= 3) {
   
     tips = '春季气候温暖，饮食宜清淡，推荐食用橘子、甘蔗等果品'
}

  if(month >= 6 && month <= 8){
    tips = '夏季气候炎热，饮食宜甘寒，多食用新鲜蔬菜'
}

  if(month >= 9 && month <= 11){
    tips = '秋季气候干燥，饮食可适当油腻，宜饮用银耳汤、梨汁或其他果汁'
  }

  if(month == 12 || month == 1 || month == 2)
  {
    tips = '冬季水冰地冻，饮食应去寒就温，宜食用肉、蛋、枣、仁之类'
  }
  this.setData({
    time: time,   
    month:  month,
    tips: tips,
  });
}  ,


})
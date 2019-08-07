"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  // store,
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {},
  data: {
    photos: ''
  },
  computed: {},
  methods: {
    /**
     * 前后端连同测试
     */
    postTest: function postTest() {
      wx.request({
        url: 'http://localhost:8080/user/test',
        method: 'POST',
        data: {// answer : JSON.stringify(this.data.answer),
          // score : _score,
          // pjid : this.data.pj.pjid,
          // testpaperid : this.data.pj.testpaperid,
          // student : JSON.stringify(this.data.student),
          // message : this.data.message
        },
        header: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          wx.navigateBack({
            delta: 1 // 小程序关闭当前页面返回上一页面

          });
          wx.showToast({
            title: '测试成功！',
            icon: 'success',
            duration: 2000
          });
        }
      });
    },

    /**
     * 选择照片
     */
    // test 1
    chooseImg: function chooseImg() {
      var that = this;
      wx.chooseImage({
        count: 1,
        // 默认9
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths);
          that.photos = tempFilePaths;
          console.log('the that.photos here is ' + that.photos);
        }
      });
    },

    /**
     * 上传照片
     */
    uploadImg: function uploadImg() {
      var that = this;
      wx.uploadFile({
        url: 'http://118.25.149.183:8080/pics/upload',
        // 仅为示例，非真实的接口地址
        filePath: that.photos[0],
        // filePath: that2.data.photos[0],
        name: 'file',
        formData: {
          'user': 'CALL ME BY YOUR NAME'
        },
        success: function success(res) {
          console.log('test!');
          var data = res.data;
          console.log(data); // do something
        }
      });
    },

    /**
     * 选择视频
     */
    // test 1
    chooseVideo: function chooseVideo() {
      var that = this;
      wx.chooseImage({
        count: 1,
        // 默认9
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths);
          that.video = tempFilePaths;
          console.log('the that.video here is ' + that.video);
        }
      });
    },

    /**
     * 上传视频
     */
    uploadVideo: function uploadVideo() {
      var that = this;
      wx.uploadFile({
        url: 'http://118.25.149.183:8080/video/upload',
        // 仅为示例，非真实的接口地址
        filePath: that.video[0],
        // filePath: that2.data.photos[0],
        name: 'file',
        formData: {
          'user': 'Video User'
        },
        success: function success(res) {
          console.log('test the video upload');
          var data = res.data;
          console.log(data); // do something
        }
      });
    },

    /**
     * 心率监测测试
     */
    testGetHR: function testGetHR() {
      wx.request({
        url: 'http://118.25.149.183:8000/getHR/face2.mp4',
        method: 'GET',
        data: {// answer : JSON.stringify(this.data.answer),
          // score : _score,
          // pjid : this.data.pj.pjid,
          // testpaperid : this.data.pj.testpaperid,
          // student : JSON.stringify(this.data.student),
          // message : this.data.message
        },
        header: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          wx.navigateBack({
            delta: 1 // 小程序关闭当前页面返回上一页面

          });
          wx.showToast({
            title: '测试成功！',
            icon: 'success',
            duration: 2000
          });
        }
      });
    } // end of test 1
    // test 2
    // chooseImg: function() {
    //   wx.chooseImage({
    //     success: function(res) {
    //       var tempFilePaths = res.tempFilePaths
    //       wx.uploadFile({
    //         url: 'http://localhost:8080/user/test',
    //         // url: 'http://127.0.0.1:8888/pesss/weChat/uploadImage.do',
    //         filePath: tempFilePaths[0],
    //         name: 'file',
    //         formData: {
    //           'user': 'test'
    //         },
    //         success: function(res) {
    //           // eslint-disable-next-line no-unused-vars
    //           var data = res.data
    //           console.log(data)
    //           // do something
    //         },
    //         fail: function(err) {
    //           console.log(err)
    //         }
    //       })
    //     }
    //   })
    // }
    // end of test 2
    // test 3
    // chooseImg: function() {
    //   wx.chooseImage({
    //     success: function(res) {
    //       var tempFilePaths = res.tempFilePaths
    //       wx.uploadFile({
    //         url: 'http://localhost:8080/user/test', // 仅为示例，非真实的接口地址
    //         filePath: tempFilePaths[0],
    //         name: 'file',
    //         formData: {
    //           'user': 'test'
    //         },
    //         success: function(res) {
    //           var data = res.data
    //           console.log(data)
    //           // do something
    //         }
    //       })
    //     }
    //   })
    // }
    // end of test 3

  }
}, {info: {"components":{"componentTest":{"path":"..\\components\\componentTest"}},"on":{}}, handlers: {'8-35': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.postTest($event)
      })();
    
  }},'8-36': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'8-37': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImg($event)
      })();
    
  }},'8-38': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadVideo($event)
      })();
    
  }},'8-39': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseVideo($event)
      })();
    
  }},'8-40': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.testGetHR($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"componentTest":{"path":"..\\components\\componentTest"}},"on":{}}, handlers: {'8-35': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.postTest($event)
      })();
    
  }},'8-36': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'8-37': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImg($event)
      })();
    
  }},'8-38': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadVideo($event)
      })();
    
  }},'8-39': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseVideo($event)
      })();
    
  }},'8-40': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.testGetHR($event)
      })();
    
  }}}, models: {} });
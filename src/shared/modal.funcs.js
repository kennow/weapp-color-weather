export let modalForGetWeatherFail = () => new Promise((resolve, reject) => {
  wx.showModal({
    title: '天气信息获取失败',
    content: '是否重新获取',
    cancelColor: '#999',
    confirmText: '重新获取',
    success: (res) => {
      if (res.confirm) {
        console.log('confirm');
        resolve();
      } else if (res.cancel) {
        console.log('cancel');
        reject(new Error('cancel'));
      }
    }
  });
});

export let modalForReAuth = () => new Promise((resolve, reject) => {
  wx.showModal({
    title: '程序需要您授权位置服务以继续',
    content: '是否进入授权页面',
    cancelColor: '#999',
    confirmText: '进入授权',
    success: (res) => {
      if (res.confirm) {
        console.log('confirm');
        resolve();
      } else if (res.cancel) {
        console.log('cancel');
        reject(new Error('cancel'));
      }
    }
  });
});

// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    "redTotal": 0,
    "blueTotal": 0,
    "redCount": 0,
    "blueCount": 0,
    "redList": [],
    "blueList": [],
    "redResult": [],
    "blueResult": [],
    "redList" : [],
    "blueList" : [],
    "result" : []
  },
  handleClickBtn(){
    console.log(1111);
  },

  getANum () {

    this.data.redTotal = 33;
    this.data.blueTotal = 16;
    this.data.redCount = 6;
    this.data.blueCount = 1;
    this.data.redList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
    this.data.blueList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.data.redResult = [];
    this.data.blueResult = [];
    this.data.result.push(this.getNum());
    },
  getBNum (){
    const bNum = new generateNum(35, 12, 5, 2);

    this.result.push(getNum());
  }, 
 
  getNum() {
    for (let i = 0; i < this.data.redCount; i++) {
      const index = Math.floor(Math.random() * this.data.redList.length);
      this.data.redResult.push(this.data.redList[index]);
      this.data.redList.splice(index, 1);
    }
    for (let i = 0; i < this.data.blueCount; i++) {
      const index = Math.floor(Math.random() * this.data.blueList.length);
      this.data.blueResult.push(this.data.blueList[index]);
      this.data.blueList.splice(index, 1);
    }
    log.console(this.data.redResult.toString);
    return `红球: ${this.data.redResult} 蓝球: ${this.data.blueResult}`;
  },

clearData () {
  result.value = [];
},



})

const locations = [
  { title: '土杉', image: 'https://i.imgur.com/vqVcRMh.jpg' },
  { title: '山櫻花', image: 'https://i.imgur.com/ruFJNDr.jpg' },
  { title: '木荷', image: 'https://i.imgur.com/ZcQoxLn.jpg' },
  { title: '杜英', image: 'https://i.imgur.com/C6VCtkS.jpg' },
  { title: '烏來柯', image: 'https://i.imgur.com/xPSbTbz.jpg' },
  { title: '水金京', image: 'https://i.imgur.com/orRSgKE.jpg' },
  { title: '欒樹', image: 'https://i.imgur.com/DiV47tH.jpg' },
  { title: '南洋杉', image: 'https://i.imgur.com/u4UHrVp.jpg' },
  { title: '牡丹', image: 'https://i.imgur.com/lLJTdY1.jpg' },
  { title: '水松', image: 'https://i.imgur.com/2E8l38Q.jpg' },
  { title: '花椒', image: 'https://i.imgur.com/lBCIOfl.jpg' },
  { title: '四季春', image: 'https://i.imgur.com/28R9xYi.jpg' },
  { title: '胡桃', image: 'https://i.imgur.com/1TT0fN2.jpg' },
  { title: '澤米芋', image: 'https://i.imgur.com/lNds51q.jpg' },
  { title: '馬告', image: 'https://i.imgur.com/kIpB9uK.jpg' },
  { title: '白梅', image: 'https://i.imgur.com/dSd7pBF.jpg' },
  { title: '檸檬', image: 'https://i.imgur.com/lookFo1.jpg' },
  { title: '流蘇', image: 'https://i.imgur.com/lf13a6f.jpg' },
  { title: '天日松', image: 'https://i.imgur.com/x4WIs0o.jpg' },
  { title: '禾雀', image: 'https://i.imgur.com/2TSPtpx.jpg' },
  { title: '月月紅', image: 'https://i.imgur.com/cM6XYiS.jpg' },
  { title: '蒲公英', image: 'https://i.imgur.com/rZTqnzK.jpg' },
  { title: '木棉', image: 'https://i.imgur.com/SELCBP3.jpg' },
  { title: '月橘', image: 'https://i.imgur.com/rxar5ue.jpg' },
  { title: '魚木', image: 'https://i.imgur.com/8jHGWD7.jpg' },
  { title: '香楠', image: 'https://i.imgur.com/Gmtx9Pb.jpg' },
  { title: '赤楊', image: 'https://i.imgur.com/xF1RnHx.jpg' },
  { title: '榕樹', image: 'https://i.imgur.com/QL6UcV4.jpg' },
];

var app = new Vue({
  el: '#app',
  data: {
    locations: locations,
    bingo: null,
    result: localStorage.getItem('bingo')
      ? JSON.parse(localStorage.getItem('bingo'))
      : [],
  },
  watch: {
    result: function (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.list.scrollTop = this.$refs.list.scrollHeight;
        });
      }
    },
  },
  computed: {
    total() {
      return this.locations.length;
    },
    bingoed() {
      return this.result.length;
    },
    remainder() {
      return this.total - this.bingoed;
    },
  },
  methods: {
    onBingo() {
      if (this.bingo) return;

      let difference = this.locations.filter(
        (location) => !this.result.includes(location)
      );

      this.bingo = difference[Math.floor(Math.random() * difference.length)];

      this.result.push(this.bingo);

      this.clearBingo();

      localStorage.setItem('bingo', JSON.stringify(this.result));
    },
    clearBingo() {
      let vm = this;
      setTimeout(() => (vm.bingo = null), 1500);
    },
    reset() {
      localStorage.clear();
      this.result = [];
    },
  },
});

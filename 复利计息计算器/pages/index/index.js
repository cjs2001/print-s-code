Page({ /**

  */ data: {
   principal: '',
   interestrate: '',
   accessperiod: '',
   interest:'',
   Totalprincipal:''
 },

 principalInput: function (e) {
   this.setData({
     principal: e.detail.value
   });
 },
 interestrateInput: function (e) {
   this.setData({
     interestrate: e.detail.value
   });
 },
 accessperiodInput: function (e) {
   this.setData({
     accessperiod: e.detail.value
   });
 },

 mysubmit: function () {
     var benjin =parseFloat(this.data.principal);
     var lilu = parseFloat(this.data.interestrate);
     var lixi = 0;
     for(var i = 1;i <= this.data.accessperiod; i++  ){
       lixi += benjin*lilu;
       benjin = benjin + lixi;
     }
     benjin = benjin.toFixed(2);
     lixi = lixi.toFixed(2);
     this.setData({
       Totalprincipal: benjin, 
       interest: lixi,
     });
   }
 }
)
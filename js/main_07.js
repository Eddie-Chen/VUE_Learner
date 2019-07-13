function initial(){
	
	new Vue({
		el: '#msg',
		data: {
			woTax:'0',
		} ,
		computed: {
			wTax:{
				//未稅價轉成含稅價
				get:function(){
					return parseInt(this.woTax * 1.05);
				},
				//含稅價轉成未稅價
				set:function(val){
					this.woTax=Math.ceil(val/1.05);
				}
			}
		}
	})
}

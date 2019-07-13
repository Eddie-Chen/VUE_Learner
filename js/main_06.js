function initial(){
	
	new Vue({
		el: '#msg',
		data: {
			number:'0',
		} ,
		computed: {
			result: function(){
				var total=0;
				/*
				for迴圈，將０到this.number的值全部累加至變數total,
				然後再以return total 回傳total值
				此值就會被當成此computed屬性值
				*/
				for(var i=0;i<=this.number;i++){
					total+=i;
				}
				return total;
			}
		}
	})
}

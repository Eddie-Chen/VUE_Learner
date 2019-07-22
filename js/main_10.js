function initial(){
	new Vue({
		el:'#msg',
		data:{
			flag:false,
		},
		//created用來指定 Vue 物件產生後立即執行的處理動作。
		created:function(){
			this.flag=ture;
		}
	})
}
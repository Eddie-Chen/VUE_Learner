function initial(){
	new Vue({
		el: '#msg',
		data:{
			message:'this is Vue.js sample!',
			text1:''
		},
		methods:{
			doAction:function(){
				var str=this.text1;
				this.message='you typed: ' + str + '.';
			}
		}
	})

	new Vue({
		el: '#msg_2',
		data:{
			message2:'this is 2nd Vue.js sample',
			text2:''
		},
		methods:{
			doAction:function(){
				var str2=this.text2;
				this.message2='you typed: <span style="color:white; background:red">' + str2 + '</span>.';
			}
		}
	})
}


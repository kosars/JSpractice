var vm = new Vue({
	el: '#app',
	data: {a:7},
	computed: {
		aSum: function(){
			return this.a +2;
		},
		aSquare: function(){
			return this.a*this.a;
		}
	}
})
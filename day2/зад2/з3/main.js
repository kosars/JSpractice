var vm = new Vue({
	el: '#app',
	data: {a:0},
	methods: {
		aSum: function(){
			return this.a +2;
		},
		aSquare: function(){
			return this.a*this.a;
		}
	}
})
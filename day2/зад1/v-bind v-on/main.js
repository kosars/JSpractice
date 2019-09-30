var vm = new Vue({
	el: '#app',
	data: {
		source: 'img/2.gif',
		ok:true,
		counter:0,
		items:[
			{message:'hi!'},
			{message:'hello!'},
			{message:'hey!'},
			{message:'sup!'}],
		selected:'img/1.gif',
		options:[
			{text:'One', value: 'img/1.gif'},
			{text:'Two', value: 'img/2.gif'},
			{text:'Three', value: 'img/3.gif'}]
	},
	beforeCreate: function(){
		console.log('before create counter is ' + this.counter);
	},
	created: function(){
		console.log('after create counter is '+ this.counter);
	},
	beforeMount: function(){
		this.counter++;
		console.log('before mount counter was increased');
	},
	mounted: function(){
		console.log('after mount counter is '+ this.counter);
	},
	beforeUpdate:function(){
		this.counter++;
		console.log('before update counter was increased');
	},
	updated:function(){
		console.log('after update counter is '+ this.counter);
	},
	methods: {
		changeSource: function(){
			if(this.source == 'img/1.gif'){
				this.source='img/2.gif';
			}
			else if (this.source=='img/2.gif') {
				this.source='img/3.gif'
			}
			else{
				this.source='img/1.gif';
			}
			
		}
	}
})


  
let app = new Vue({
	el: '#app',
	data: {
		check: false,
		value1: 'black',
	},
	methods: {
	color: function() {
		this.check ? this.value1 = 'black' : this.value1 = 'white';
	}
	}
});
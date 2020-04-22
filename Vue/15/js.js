let d = new Date();
let app = new Vue({
	el: '#app',
	data: {
		str: `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
	},
	filters: {
		format: function(value) {
			return (value.split('-').reverse().join('.'));
		}
	}
});
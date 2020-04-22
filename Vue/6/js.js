let app = new Vue({
	el: '#app',
	data: {
		items: [-99, 1, 3, 3, -77, -13, 88, 7, 16, 20, -64531235, 26546846456421, 15446864564563123456486],
	},
methods: {
		removeItem: function(index) {
			let res = this.items.splice(index, 1);
			res = Math.pow(res, 2);
			this.items.splice(index, 0, res);
		}
	}
});
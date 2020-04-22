let app = new Vue({
	el: '#app',
	data: {
		items: [-99, 1, 3, 3, -77, -13, 88, 7, 16, 20, -64531235, 26546846456421, 15446864564563123456486],
	},
	methods: {
		Fil: function() {
			this.items = this.items.filter(function(elem) {
			if (elem <= 10 && elem >= 0) {
				return true;
			} else {
				return false;
			}
		});
		}
	}
});
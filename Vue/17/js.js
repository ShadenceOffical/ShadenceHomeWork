
let q1 = new Vue({
	el: '#q1',
	data: {
		ttt: 'pathofexile.com',
		tex: '',
	},
	methods: {
		doThis: function(value) {
			this.tex = this.ttt;
		}
	}
});

let q3 = new Vue({
	el: '#q3',
	data: {
		tex1: 'still sane exile',
	},
	methods: {
		addItem: function() {
				this.tex1 = 'Zana, Master Cartographer (с)';
			}
		}
});

let q4 = new Vue({
	el: '#q4',
	data: {
		tex2: 'Elder',
	},
	methods: {
		addItem: function() {
				this.tex2 = "н е р а б о т а е т"
			}
		}
});
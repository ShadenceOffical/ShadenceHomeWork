
let q = new Vue({
	el: '#q',
	data: {
		newItem: '',
		items: [],
	},
	methods: {
		addItem: function() {
			let words = this.newItem.split(' ');
			for (let i of words){
			this.items.push(i);
			}
		}
	}
});

let qqq = new Vue({
	el: '#qqq',
	data: {
		q: [],
	},
});

let qqqq = new Vue({
	el: '#qqqq',
	data: {
		type: '',
	},
});

let qqqqq = new Vue({
	el: '#qqqqq',
	data: {
		selected: '',
		options: ['i', 'already', 'know', 'about', 'this', 'sssss'], 
	},
});
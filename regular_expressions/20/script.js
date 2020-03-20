let str = '31.12.2025';
let res=str.match(/(\d{2})\.(\d{2})\.(\d{4})/);
console.log(res[1]);
console.log(res[2]);
console.log(res[3]);
let str = 'sss site.ru zzz site.com kkk';
let res=str.replace(/(\w+\.ru|\w+\.com)/g,'<a href="http://$1">$1</a>');
console.log(res);
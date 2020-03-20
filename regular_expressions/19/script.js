//Задача2
let str = 'a1b@c34d# e567f';
let arr=str.match(/\d/g,'!');
let res=0;
for (let elem of arr){
    res+=Number(elem);
}
console.log(res);
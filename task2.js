/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

let car ={
    color: 'black',
    year:2000 ,

      
}
let stroka="company"

function hasProp(str,obj){
for(let key in obj){
    if(key===str){
        return true
    }
     else return false
   
}
}
console.log(hasProp(stroka,car))


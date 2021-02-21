/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

let car ={
    color: 'black',
    year: 2000
} 

function ownProp(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {

            console.log(key,obj[key]);
        }   
    }
}
ownProp(car)





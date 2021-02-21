
function ElectApplience(name,lifeTime){
    this.name=name,
    this.lifeTime=lifeTime
    
}
//Вкл\Выкл прибор
ElectApplience.prototype.enable=function (enabled) {
    if(enabled===true){
        return`Прибор включен`
    }
    else{
        return `Прибор отключен`
    }   
}
//мощность  тока
ElectApplience.prototype.getPower=function(volt,resist) {
    console.log(`Потребляемая мощность равна ${Math.pow(volt,2)/resist}  Вт`)
}

//Прибор пылесос
function Vacuum() {
    this.type= 'wireless',
    //Пылесборник
    this.dustCollector=function (dust) { 
        let container=25;   
        if(dust>container) {
            return `Почистите контейнер`
        }
        else return `Продолжайте работу` 
    }
}
let autoShut=false
//Прибор пылесос
function Iron(steam,weigth) {
    this.steam=steam,
    this.weigth=weigth,
     //Автоотключение
    this.autoOff=function (workingHour) {
        if(workingHour>1){
            return autoShut=true
        } 
        else return false
    }
   
}


Vacuum.prototype= new ElectApplience('smsung',2019)
let vacum= new Vacuum()
console.log(vacum.getPower(200,20))// Потребляемая мощность равна  2000  Вт
console.log(vacum.dustCollector(26))//Почистите контейнер


Iron.prototype= new ElectApplience('redmond',2020)
let iron=new Iron(true,8)
iron.getPower(300,10)
console.log(iron.weigth)
console.log(iron.steam)
console.log(iron.autoOff(2))//автоотключение вкл












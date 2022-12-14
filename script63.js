let y = 2432
let doz = parseInt(y/10)% 10
let unit = y % 10
let hun = parseInt(y/100)% 10
let thous = parseInt(y/1000)
if(doz == 1 || unit == 1 || hun == 1 || thous ==1){
    console.log(1)
}else{
    console.log(0)
}

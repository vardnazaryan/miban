let x = '3324'
let t = true
if ((+x[3]) + (+x[2])===(+x[0]) + (+x[1]) ){
    console.log(t)
}else{
    t = false
    console.log(t)
}



let y = 8945
let doz = parseInt(y/10)% 10
let unit = y % 10
let hun = parseInt(y/100)% 10
let thous = parseInt(y/1000)
let t = true
if(unit + doz == thous + hun){
    console.log(t)
}else{
    t = false
    console.log(t)
}
let x = 564
let unit = x % 10
let doz = parseInt(x/10) % 10
let hun = parseInt(x/100)
if (x > 300){
    if(unit > 0){
        console.log(doz / unit)
    }
}else{
    if(unit > 0){
        console.log(hun / unit)
    }
}
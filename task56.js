let x = 351
let unit = x % 10
let doz = parseInt(x/10) % 10
let hun = parseInt(x/100)
if(unit > doz){
 console.log((unit + doz + hun)/x)
}else{
    console.log(x)
}
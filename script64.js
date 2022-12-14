let x = 4444
let doz = parseInt(x/10)% 10
let unit = x % 10
let hun = parseInt(x/100)% 10
let thous = parseInt(x/1000)
let y = Symbol("s")
if(unit + doz == 5){
    console.log(y)
}else{
    y = Symbol("d")
    console.log(y)
}

let x = 9696
let doz = parseInt(x/10)% 10
let unit = x % 10
let hun = parseInt(x/100)% 10
let thous = parseInt(x/1000)
let y = 1
if(doz + unit + hun + thous > 20){
    console.log(y)
}else{
    y = 0
    console.log(y)
}

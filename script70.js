let x = 3333
let doz = parseInt(x/10)% 10
let unit = x % 10
let hun = parseInt(x/100)% 10
let thous = parseInt(x/1000)
let y = 0
if (unit * doz * hun * thous > 200){
    console.log(y)
}else{
    y = 1
    console.log(y)
}

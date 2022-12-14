let x = 225
let unit = x % 10
let doz = parseInt(x/10) % 10
let hun = parseInt(x/100)
let f = Symbol("a")
if ( doz + hun < 5){
    console.log(f)
}else{
    f = Symbol("b")
    console.log(f)
}
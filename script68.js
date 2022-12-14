let x = 8267
let doz = parseInt(x/10)% 10
let unit = x % 10
let hun = parseInt(x/100)% 10
let thous = parseInt(x/1000)
if(unit > doz){
    console.log(unit * hun)
}else{
    console.log(1)
}

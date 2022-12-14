let y = 1546
let doz = parseInt(y/10)% 10
let unit = y % 10
let hun = parseInt(y/100)% 10
let thous = parseInt(y/1000)
if ( y < 5000) {
    console.log(y / (unit + hun))
}else (unit > 0 && hun > 0)  {
    console.log(y/(thous + doz))
}
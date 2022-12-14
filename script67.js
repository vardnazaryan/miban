let x = 5534
let doz = parseInt(x/10)% 10
let unit = x % 10
let hun = parseInt(x/100)% 10
let thous = parseInt(x/1000)
if(x == Math.pow(doz + unit + hun + thous,2)){
    alert("YES")
}else{
    alert("NO")
}
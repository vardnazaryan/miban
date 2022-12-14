let x = 362
let miavor = x % 10
let tasnavor = parseInt(x/10)% 10
let haruravor = parseInt(x/100)
if(miavor + tasnavor + haruravor < x ){
    console.log(x/(miavor + tasnavor + haruravor) )
}else{
    console.log(x/miavor)
}

let k = +prompt("k=")
let x = 549
let miavor = x % 10
let tasnavor = parseInt(x/10) % 10
let haruravor = parseInt(x/100)
if(k > x ){
    console.log(x/(miavor + tasnavor + haruravor) )
}else{
    console.log(x/miavor)
}
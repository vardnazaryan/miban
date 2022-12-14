let x = 549
let miavor = x % 10
let tasnavor = parseInt(x/10) % 10
let haruravor = parseInt(x/100)
let t = true
if( miavor == tasnavor || miavor == haruravor || haruravor == tasnavor){
    console.log(t)
}else{
    t = false
    console.log(t)
}
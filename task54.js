let x = 356
let miavor = x % 10
let tasnavor = parseInt(x/10) % 10
let haruravor = parseInt(x/100)
if(miavor > haruravor){
    if(miavor > tasnavor){
        console.log(miavor)
    }
}
else if(haruravor > miavor){
    if(haruravor > tasnavor){
        console.log(haruravor)
    }
}else (tasnavor > haruravor)
    if(tasnavor > miavor){
        console.log(tasnavor)
    }
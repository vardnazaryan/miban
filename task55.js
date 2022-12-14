let x = 351
let miavor = x % 10
let tasnavor = parseInt(x/10) % 10
let haruravor = parseInt(x/100)
if(miavor < tasnavor){
    if(miavor < haruravor){
        console.log(miavor)
    }
}
if( tasnavor < miavor){
    if(tasnavor < haruravor){
        console.log(tasnavor)
    }
}
if(haruravor < miavor){
    if(haruravor < tasnavor){
        console.log(haruravor)
    }
}

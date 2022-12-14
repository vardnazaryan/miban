let x = 358
let unit = x % 10
let doz =  parseInt(x/10) % 10
let hun = parseInt(x/100)
if(hun > doz ){
    if(doz > unit){
        console.log(hun, doz, unit )
    }
}
if(hun > unit ){
    if(unit > doz){
        console.log(hun, unit, doz)
    }
}
if(unit > doz){
    if(doz > hun){
        console.log(unit, doz, hun)
    }
}
if(unit > hun){
    if(hun > doz){
        console.log( unit,  hun, doz)
    }
}
if(doz > unit){
    if(unit > hun){
        console.log(doz, unit, hun)
    }
}
if(doz > hun){
    if(hun > unit){
        console.log(doz, hun, unit)
    }
}
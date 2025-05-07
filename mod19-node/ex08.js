function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if(temParam("memama")){
    console.log("Ce ta maluco, vem na mão, otário")
}
let user = {
    leve1: {
        level2: {
            leve3:{
                level4: {
                    level5: 'level6'
                }
            }
        }
    }
}
// user.flat(Infinity);
// console.log(user.flat(Infinity));
function printKey(Obj) {
for (let key in Obj){
    console.log(key);
    if(typeof Obj[key] === 'object'){
        printKey(Obj[key]);
    }

}
};
printKey(user);

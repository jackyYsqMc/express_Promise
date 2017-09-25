/**
 * Created by jackyMC on 2017/9/22.
 */
const test =function(){
    console.log("执行test函数");

    return new Promise(function(resolve,reject){
        if(true){
            resolve("成功啦")
        }else{
            reject("失败啦")
        }

    })
}
test().then(function(mesg){
    console.log(mesg);
    throw new Error("出错")
    return mesg
}).catch(function(mesg){
    console.log(mesg.name);
    console.log(mesg.message)
}).then(function(mesg){
    throw new Error("出错")
    console.log(mesg);
}).catch(function(){
    console.log("11111")
})
// test().then((mesg)=>{
//     console.log(mesg)
//    return mesg
//
// }).then(mesg=>{
//     console.log(mesg+"最后执行");
//     throw  new Error('wtf')
//
// }).catch(function(mes){
//     console.log(mes.message)
// })
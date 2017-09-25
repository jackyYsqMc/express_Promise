/**
 * Created by jackyMC on 2017/9/21.
 */
const pool=require('./../config/databaseConfig')
const queryEvent=function(obj) {
    console.log(obj)

    /**
     * 最后返回结果
     */
    return new Promise(function (resolve, reject) {
        pool.sqlpool().connect("select * from t_user",[],function(err,data){
            if(err==null){
                resolve(data);
            }else{
                reject(err)
            }

        })

    });


}

module.exports={
    queryEvent
}
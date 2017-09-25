/**
 * Created by jackyMC on 2017/9/18.
 */
/**
 * mongoDB
 */
// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mymongo';
// const options={
//     useMongoClient:true
// }
// mongoose.Promise=global.Promise;
// mongoose.connect(uri,options)
// .then(db => console.log('链接成功'))
// .catch (error=>console.log('链接失败'));
//
//
// module.exports=mongoose;
/**
 * mysql
 */
const mysql = require("promise-mysql");
module.exports.sqlpool = function (){
    "use strict";
    let pool ={
        config:{
            host: '172.16.0.113',
            user: 'root',
            password: 'root',
            database: 'db118',
            port: 3306,
            dateStrings:true
        },
        connect:function(sql,arr,fn){
            /*1.创建连接池，传入config，返回连接对象*/
            var pool = mysql.createPool(this.config);
            //console.log(pool);
            /*2.获取连接对象*/
            pool.getConnection(function(err,connection){
                if(err){
                    console.log(err)
                }
                /*3.发送query语句*/
                connection.query(sql,arr,fn);
                /*4.关闭连接*/
                connection.release();
            })
        }
    }
    return pool;
}
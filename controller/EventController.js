/**
 * Created by jackyMC on 2017/9/19.
 */

const EventClass=require('./../model/EventModelJs');
const EventDAO=require('./../dao/EventDAO')
const index = (req,resp)=>{
    resp.send({
        message:"hello Express"
    })
}
const submitData=(req,resp)=>{
    let eJs = new EventClass(req.body.title,"amdin");
    EventDAO.queryEvent(eJs)
        .then(
            value=>{
                resp.send(value);
            }
        ).catch(()=>{
        console.log("出错啦！")
        resp.redirect("404.html")
    })
    // resp.send({title:req.body.title})
}

const show =(req,resp)=>{
    let id = req.params.id

}
const deleteData=(req,resp)=>{
    let id = req.params.id

}
module.exports={
    index,
    submitData,
    show,
    deleteData
}
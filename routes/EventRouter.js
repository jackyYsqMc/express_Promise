/**
 * Created by jackyMC on 2017/9/19.
 */
const express =require('express')
const EventController = require('./../controller/EventController')
const router = express.Router();


router.route("/events")
    .get(EventController.index)
    .post(EventController.submitData)
    .put()
    .delete()
    .patch()
// router.route("/events")
//     .get(EventController.index)
//     .post(EventController.submitData)

router.route("/events/:id")
    .get(EventController.show)
    .delete(EventController.deleteData)

module.exports=router
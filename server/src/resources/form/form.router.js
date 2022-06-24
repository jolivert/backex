const {Router}= require('express');
const formControllers= require('./form.controllers');
const router= Router();

router.post("/",formControllers.createOne);
router.delete("/",formControllers.deleteOne)

module.exports= router;
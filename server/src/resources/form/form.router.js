const {Router}= require('express');
const formControllers= require('./form.controllers');
const router= Router();

router.post("/",formControllers.createOne);

module.exports= router;
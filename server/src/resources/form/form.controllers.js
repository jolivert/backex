
const Form = require ('./form.model');

const createOne = async(req,res)=> {
    try{

        const newForm =req.body;
        const doc = await Form.create(newForm);
        
        res.status(200).send({results:[doc]});

    } catch (e){
        res.status(500).send({error:"Creation failed"});

    }
}

const deleteOne = async(req,res)=> {
    try{

        const delForm =req.body;
        const del = await Form.deleteOne(delForm)
        
        res.status(200).send({results:[del]});

    } catch (e){
        res.status(500).send({error:"Creation failed"});

    }
}

module.exports = {
    createOne,
    deleteOne,
}
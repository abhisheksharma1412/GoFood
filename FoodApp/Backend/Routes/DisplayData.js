const express=require('express');
const router=express.Router();


router.post('/foodData', (req,res)=>{
    try {

        console.log(global.food_Data)
        res.send([global.food_Data,  global.food_Categories]);
        // res.status(200).send({
        //     foodData: global.food_Data,
        //     foodCategories: global.food_Categories
        // });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("server error");
    }
})


module.exports=router;
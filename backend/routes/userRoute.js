import express from 'express';
import User from '../models/userModal'
const router = express.Router();

router.get("/createadmin", async (req, res)=>{
    try {
        const user = new User({
            name:'Anthony',
            email:'anthonyfc9101@gmail.com',
            password:'tony1946',
            isAdmin:true,
        })
    const newUser = await user.save();
    res.send(user);
    } catch (error) {
        res.send({msg:error.message})
    }

})

export default router;
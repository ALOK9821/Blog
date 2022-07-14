import User from "../model/User";

export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users = await User.find();
    }catch(e){
        console.log(e);
    }
    if(!users){
        return res.status(404).json({message: "no users found"});
    }
    return res.status(200).json({users});
}
export const signup = async (req,res,next) => {
    const {name,email,password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }catch(err){
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:'user already exists'});
    }
    const user = new User({
        name,
        email,
        password
    });
    try{
       await user.save();
    }catch(err){
        console.log(err);
    }
    return res.status(201).json({user});
}
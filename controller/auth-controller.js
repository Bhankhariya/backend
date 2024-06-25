const User = require("../models/user-model");
const bcrypt = require("bcrypt");


const home = async(req,res)=>{
    try {
        res.status(200).send("welcome home using router");
    } catch (error) {
        console.log(error);
    }

};

const register = async (req,res)=>{
    try {
        console.log(req.body);
        const {username, email, password} = req.body;

        const userExist = await User.findOne({ email });

        if(userExist){
            return res.status(400).json({message:"Email already exist"});
        }

        
        // const hash_password = await bcrypt.hash(password,10);

        const userCreated = await User.create({username, email, password});



        res.status(201).json({
            msg : "Registration Successfull", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(), 
        });
        
    } catch (error) {
        // res.status(400).json("server prob");
        next(error);
    }
}


// login

const login = async (req,res)=>{
    try {
        const { email,password } = req.body;
        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:"invalid credentials"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({message : "login successfull", 
            token: await userExist.generateToken(), 
            userId: userExist._id.toString(), 
        });
        }else{
            res.status(401).json({message:"invalid credentials"});
        }



    } catch (error) {
        res.status(400).json("server prob");
    }
}



module.exports ={home , register , login};
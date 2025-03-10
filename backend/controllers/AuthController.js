import signUpModel from '../models/signUp.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//create account
export const createAccount =async (req , res)=>{
    const {firstName , lastName , email , password } = req.body;

    try{
        const hash= await bcrypt.hash(password , 10)
    
        // if(!firstName || !lastName || !email || !password){
        //     return res.status(401).json({
        //         error:true , 
        //         message:"all fields are required"
        //     })
        // }

        const missingFields = []

    if(!firstName) missingFields.push("firstName")
    if(!lastName) missingFields.push("lastName")
    if(!email) missingFields.push("email")
    if(!password) missingFields.push("password")

    if(missingFields.length > 0 ) {
        return res.status(400).json({
            error:true,
            message:`the following fields are required ${missingFields.join(', ')}`
        })
    }
    
        const checkUser = await signUpModel.findOne({email})
    
        if(checkUser){
            return res.status(401).json({
                error:true,
                message:"this account is already existed"
            })
        }
    
        const user =await signUpModel({
            firstName,
            lastName,
            email,
            password:hash
    
        })
    
        await user.save()
    
        return res.status(200).json({
            error:false,
            user:{
                firstName,
                lastName,
                email
            }
        })
        
    }catch(error){
        res.status(500).json({
            error: true,
            message: "An error occurred while creating the account",
            details: error.message})
    }
    
}

//login
export const login =async (req ,res)=>{
    const {email , password}=req.body;

try{
    const missingFields = []

    if(!email) missingFields.push("email")
    if(!password) missingFields.push("password")

        if(missingFields.length > 0 ) {
            return res.status(400).json({
                error:true,
                message:`the following fields are required ${missingFields.join(', ')}`
            })
        }

    const user = await signUpModel.findOne({email})

    if(!user){
        return res.status(401).json({
            error:true,
            message:"User is not found"
        })
    }

    const isPassword =await bcrypt.compare(password , user.password)
    if(!isPassword){
        return res.status(400).json({
            error:true,
            message:"the email or password is wrong "
        })
    }
    
    const token = jwt.sign({id : user._id} , process.env.SECRET_KEY , {
        expiresIn:"3600h"
    } )

    return res.status(200).json({
        error:false,
        user:{
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            token
        }
    })


}catch(error){
    res.status(500).json({
        error: true,
        message: "An error occurred while login , try.again",
        details: error.message})
}



} 


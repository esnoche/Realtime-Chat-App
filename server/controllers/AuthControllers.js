import { compare } from "bcrypt";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken"
import { renameSync,mkdirSync ,existsSync, unlinkSync} from "fs"
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const maxAge = 3 * 24 * 360 * 1000;

const creaToken = (email, userId) => {
    return jwt.sign({email, userId},process.env.JWT_KEY,{expiresIn:maxAge})
}


export const signup = async (req, res, next) => {
    try{
        const { email } = req.body;
        const { password } = req.body;
        if(!email || !password){
            return res.status(400).send("atleast give me email & password bruhh!")
        }
        const user = await User.create({email, password});
        res.cookie("jwt", creaToken(email, user.id),{
            maxAge,
            secure:true,
            sameSite:"None",
        })
        return res.status(201).json({user:{
            id:user.id,
            email:user.email,
            profileSetup: user.profileSetup,

        }})

    }catch(err){
        console.log({err});
        return res.status(500).send("Server Error");
    }
}

export const login = async (req, res, next) => {
    try{
        const { email } = req.body;
        const { password } = req.body;
        if(!email || !password){
            return res.status(400).send("atleast give me email & password bruhh!")
        }
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).send("i didn't found the user with given Email!")
        }
        const auth = await compare(password, user.password)
        if(!auth){
            return res.status(400).send("Password is incorrect!")
        }

        res.cookie("jwt", creaToken(email, user.id),{
            maxAge,
            secure:true,
            sameSite:"None",
        })
        return res.status(200).json({user:{
            id:user.id,
            email:user.email,
            profileSetup: user.profileSetup,
            firstName:user.firstName,
            lastName:user.lastName,
            image:user.image,
            color:user.color,

        }})

    }catch(err){
        console.log({err});
        return res.status(500).send("Server Error");
    }
}

export const getUserInfo = async (req, res, next) => {
    try{
        const userData = await User.findById(req.userId);
        if(!userData) return res.status(403).send("ohh oo i didn't found the user with the given user id");
        
        return res.status(200).json({
            id:userData.id,
            email:userData.email,
            profileSetup: userData.profileSetup,
            firstName:userData.firstName,
            lastName:userData.lastName,
            image:userData.image,
            color:userData.color,

        })

    }catch(err){
        console.log({err});
        return res.status(500).send("Server Error");
    }
}


export const updateProfile = async (req, res, next) => {
    try{
        const {userId} = req;
        const { firstName, lastName, color} = req.body;
        
        if(!firstName || !lastName || !color) return res.status(400).send("You have to set your Firstname lastname and color");

        const userData = await User.findByIdAndUpdate(userId, {firstName, lastName, color, profileSetup: true},{new:true, runValidators: true});

        
        return res.status(200).json({
            id:userData.id,
            email:userData.email,
            profileSetup: userData.profileSetup,
            firstName:userData.firstName,
            lastName:userData.lastName,
            image:userData.image,
            color:userData.color,

        })

    }catch(err){
        console.log({err});
        return res.status(500).send("Server Error");
    }
}

export const addProfileImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send("File is required");
        }
        const date = Date.now();
        const fileExtension = path.extname(req.file.originalname);
        const uploadDir = path.join(__dirname, '..', 'uploads', 'profiles');
        const fileName = `${date}${fileExtension}`;
        const newFilePath = path.join(uploadDir, fileName);

        // Ensure the upload directory exists
        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir, { recursive: true });
        }

        // Move the file to the new location
        renameSync(req.file.path, newFilePath);

        const updatedUser = await User.findByIdAndUpdate(req.userId, { image: `/uploads/profiles/${fileName}` }, { new: true, runValidators: true });

        return res.status(200).json({
            image: updatedUser.image,
        });
    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};


export const removeProfileImage = async (req, res, next) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        if (user.image) {
            // Build the absolute path to the image file
            const imagePath = path.join(__dirname, '..', 'uploads', 'profiles', path.basename(user.image));

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            } else {
                console.log('File not found:', imagePath);
            }
        }

        user.image = null;
        await user.save(); 

        return res.status(200).send("Profile image removed successfully");
    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};

export const logout = async (req, res, next) => {
    try {
        res.cookie("jwt","",{maxAge:1, secure:true, sameSite:"None"})

        return res.status(200).send("Logout Successfull");
    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};
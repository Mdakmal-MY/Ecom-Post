import pkg from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/authenthicate.js';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

let login_get = (req, res) => {
    res.render('login.html')
}

let register_get = (req, res) => {
    res.render('signup.html');
}

let user_get = async (req, res) => {
    try {
        const users = await prisma.user.findMany({});
        res.json(users);
    } catch (err) {
        console.log(err);
    }
}

let logout_get = async (req, res) => {    
}

let register_post = async (req, res) => {
    try {
        const userExist = await prisma.user.findFirst({ where: {email: req.body.email}});
        console.log(req.body)
        if (!userExist) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            const user = await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword
                }
            });
            
            if(!user){
                return;
            }

            res.redirect('/')
        } else {
            res.send({message: "The email already existed"})
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

let login_post = async (req, res) => {
    let loginSucess = false;
    try {
        const user = await prisma.user.findFirst({ where: {email: req.body.email}});
        if (!user){
            res.send({ message: "Account not exist"});
        } else {
            loginSucess = await bcrypt.compare(req.body.password, user.password);
            if(loginSucess) {
                //create token secret
                let token = generateToken({session: user.id});
                res.cookie('session', token);
                res.redirect('../merchant/');
            } else {
                res.send({ message: "Wrong Email/Password" });
            } 
        }
    } catch (err) {
        res.status(400).send(err)
    }
}

export { register_post, register_get, login_post, login_get, user_get, logout_get };
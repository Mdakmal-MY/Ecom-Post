import jwt from "jsonwebtoken";

const authenthicateToken = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
            }
            console.log(decodedToken)
            next();
        })
    } else {
        console.log(token)
        res.redirect('../../')
    }
}

const generateToken = (id) => {
    return jwt.sign(id, process.env.ACCESS_TOKEN, {expiresIn: '1800s'});
}

export { authenthicateToken, generateToken };
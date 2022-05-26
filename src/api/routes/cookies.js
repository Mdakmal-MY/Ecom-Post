import express from "express";
const router = express.Router();

router.get('/set', (req, res) => {
    // res.setHeader('Set-Cookie', 'user=admin');
    res.cookie("newUser", false);
    res.cookie("isEmployee", true, {maxAge: 1000*60*60*24, httpOnly: true});
    res.send('cookies created');
});

router.get('/read', (req, res) => {
    let cookies = req.cookies;
    res.json(cookies);
});

export default router;

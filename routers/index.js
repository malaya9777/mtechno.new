const express = require('express');
const router = express.Router();


router.get('', async(req, res)=>{
    res.render('home', {data:{active:'home'}});
});

router.get('/bio', async(req, res)=>{
    res.render('bio', {data:{active:'bio'}});
});

router.get('/contact', async(req, res)=>{
    res.render('contact', {data:{active:'contact'}});
});

module.exports = router;












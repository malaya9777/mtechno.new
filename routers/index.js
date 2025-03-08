const express = require('express');
const router = express.Router();


router.get('', async(req, res)=>{
    res.render('main', {data:{active:'home'}});
});

router.get('/bio', async(req, res)=>{
    res.render('main', {data:{active:'bio'}});
});


module.exports = router;












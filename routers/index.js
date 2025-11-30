const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('', async(req, res)=>{
    res.render('home', {data:{active:'home'}});
});

router.get('/bio', async(req, res)=>{
    res.render('bio', {data:{active:'bio'}});
});
router.get('/blogs', async(req, res)=>{
    res.render('blogs', {data:{active:'blogs'}});
});

router.get('/contact', async(req, res)=>{
    res.render('contact', {data:{active:'contact'}});
});

router.get('/perviousworks', async(req, res)=>{

    const directoryPath = 'public/pictures';
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.render('perviousworks', {data:{active:'perviousworks', fileList:files.map(file => '/pictures/' + file)}});
    });

    
});
module.exports = router;












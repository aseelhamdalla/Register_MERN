const express = require('express');
const router = express.Router();
 

// @route    GET api/auth 
// desc     testing auth route 
// @access     public 

router.get('/' , (req,res)=>res.send('posts profile'));
module.exports = router;


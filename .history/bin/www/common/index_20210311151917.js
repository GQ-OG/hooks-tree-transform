let express = require('express')
let router = express.Router()
let path = require('path');
let fs = require('fs')
let jsons = require('../../../mock')

router.get("/getTreesData", (req, res, next) => {
    console.log(req.originalUrl, "req", jsons[req.originalUrl])
    res.status(200).json({
        code: 200
    })
})

module.exports = router
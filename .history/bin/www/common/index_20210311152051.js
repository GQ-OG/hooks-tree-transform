let express = require('express')
let router = express.Router()
let path = require('path');
let fs = require('fs')
let jsons = require('../../../mock')

router.get("/getTreesData", (req, res, next) => {
    console.log(req.originalUrl, "req", jsons[req.originalUrl])
    let file = path.join(__dirname, jsons[req.originalUrl])
    fs.readdirSync(file, 'utf-8', (err, data) => {
        console.log(data, "data")
    })
    res.status(200).json({
        code: 200
    })
})

module.exports = router
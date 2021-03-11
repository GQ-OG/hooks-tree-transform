let express = require('express')
let router = express.Router()
let path = require('path');
let fs = require('fs')
let jsons = require('../../../mock')
let { keys, values } = require('lodash')



router.get("/getTreesData", (req, res, next) => {
    console.log(req.originalUrl, "req", jsons[req.originalUrl])
    let file = path.join(__dirname, `../../../mock/${jsons[req.originalUrl]}`)
    fs.readFile(file, 'utf-8', (err, data) => {
        if(!err) {
            res.status(200).json({
                code: 200,
                data: JSON.parse(data)
            })
        }
        else {
            res.status(200).json(({
                data: []
            }))
        }
    })
})

module.exports = router
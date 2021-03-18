let express = require('express')
let router = express.Router()
let path = require('path');
let fs = require('fs')
let jsons = require('../../../mock')

const getFileName = (key) => {
    let file = path.join(__dirname, `../../../mock${jsons[key]}`)
    return file
}

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
router.get("/getChecked", (req, res, next) => {
    const file = getFileName(req.originalUrl)
    fs.readFile(file, "utf-8", (err, data) => {
        if(!err) {
            res.status(200).json({
                code: 200,
                data: JSON.parse(data)
            })
        }
        else {
            res.status(200).json({
                code: "200",
                message: "error"
            })
        }
    })
})

module.exports = router

let express = require('express')
let router = express.Router()

router.get("/getTreesData", (req, res, next) => {
    console.log(req.originalUrl, "req")
    res.status(200).json({
        code: 200
    })
})

module.exports = router
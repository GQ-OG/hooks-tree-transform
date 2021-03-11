let express = require('express')
let router = express.Router()

router.get("/api-test/getTreesData", (req, res, next) => {
    res.status(200).json({
        code: 200
    })
})

module.exports = router
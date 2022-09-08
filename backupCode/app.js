const express = require('express')
const { uploadSingleFile } = require('./Helper/multerUpload');

const app = express()
app.use(express.static(__dirname));
app.post('/', (req, res, next) => {
    uploadSingleFile({ req })
    res.json({
        message: 'oke'
    })
})


// listen on port
const port = 5000
app.listen(
    port,
    () => console.log(`Server Running at http://localhost:${port}`)
);























/*
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
})
*/

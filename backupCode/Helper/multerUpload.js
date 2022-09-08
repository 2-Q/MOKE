const multer = require("multer");
const path = require("path");
const fs = require("fs");

const checkFileType = (file, callback, mimes) => {
    const extensionAllowed = new RegExp(mimes);
    const extName = extensionAllowed.test(path.extname(file.originalname).toLowerCase());
    const mimeType = extensionAllowed.test(file.mimetype);

    if (!(mimeType && extName)) {
        callback("Error: Images Only !!!");
    }
}

const makeDir = (pathDir = 'images') => {
    const dirs = ['storage', ...String(pathDir).split('/')]
    var newDir = ''
    dirs.map((dir, index) => {
        newDir = newDir + dir + '/'
        if (!fs.existsSync(newDir)) {
            fs.mkdirSync(newDir);
        }
    });
    return newDir;
}


const upload = ({ pathDir, filename, maxSize, mimes }) => multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, makeDir(pathDir));
        },
        filename: (req, file, callback) => {
            callback(null, ((filename ?? Date.now()) + path.extname(file.originalname)));
        }
    }),
    limits: { fileSize: Number(maxSize ?? 2000000) },
    fileFilter: (req, file, callback) => {
        if (mimes) {
            checkFileType(file, callback, mimes);
        }
        callback(null, true);
    },
})



exports.uploadSingleFile = ({ req, namefield, pathDir, filename, maxSize, mimes }) => {
    upload({ pathDir, filename, maxSize, mimes })
        .single(namefield ?? 'image')(req, null, (e) => { if (e) console.error(e); });
}



exports.uploadMultipleFile = ({ req, namefield, pathDir, filename, maxSize, mimes }) => {
    upload({ pathDir, filename, maxSize, mimes })
        .array(namefield ?? 'image')(req, null, (e) => { if (e) console.error(e); });
}
const multer = require('multer');
const path = require('path');

const storageProductIMG = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null, 'public/images/Productos-img')
    },
    filename : function (req,file,callback) {
        callback(null,`${Date.now()}_product_${path.extname(file.originalname)}`)
    }
});

const uploadProductImages = multer({
    storage : storageProductIMG
});

const storageUserImage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "public/images/User-img");
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_users_${path.extname(file.originalname)}`);
    },
});

const uploadUserImage = multer({
    storage: storageUserImage,
    
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            req.fileValidationError = "Solo se permite imágenes";
            return cb(null, false, req.fileValidationError);
        }

        cb(null, true);
    },
});

module.exports = {
    uploadProductImages,
    uploadUserImage
}
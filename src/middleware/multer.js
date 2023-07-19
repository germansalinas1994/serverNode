const multer = require('multer');


//esta funcion es para subir archivos utilizando multer
//multer es un middleware que se utiliza para subir archivos

function uploadFile() {
    const storage = multer.diskStorage({
        destination: 'public/images', //aca va la ruta donde se va a guardar el archivo
        filename: (req, file, cb) => {
            // const extension = file.originalname.lastIndexOf('.');
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

    const upload = multer({ storage }).single('file');
    return upload;
}

module.exports = uploadFile;


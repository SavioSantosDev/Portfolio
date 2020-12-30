import multer from 'multer';
import path from 'path';

/**
 * Renomear o arquivo e definir o diretório de destino do mesmo.
 */
export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        // A função de cb é para dar nome ao arquivo
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
}

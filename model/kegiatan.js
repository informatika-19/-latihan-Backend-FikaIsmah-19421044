const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kegiatanSchema = new Schema({
    NAMAKEGIATAN: {
        type: String
    },
    DESKRIPSI: {
        type: String
    },
    WAKTU: {
        type: String
    }
}) 

module.exports = mongoose.model('Kegiatan', kegiatanSchema)
const KegiatanModel = require('../model/kegiatan')
const ObjectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {

    KegiatanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil Menginput Kegiatan'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Menginput Kegiatan'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) => {
    KegiatanModel.find()
    .then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            data: result
        })
    }).catch(() => reject ({
        status: false,
        pesan: 'Gagal Menampilkan Data',
        data: []
    }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) => {
    KegiatanModel.findOne({
        _id: ObjectId(id)
    })
        .then(result => {
            resolve({
                status: true,
                pesan: 'Berhasil Menampilkan Data',
                data: result
            })  
        }).catch(() => reject ({
            status: false,
            pesan: 'Gagal Menampilkan Data',
            data: null
        }))
})

exports.update = (id, data) => 
new Promise((resolve, reject) => {
    KegiatanModel.updateOne({
        _id: ObjectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Merubah Data'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Merubah Data'
    }))
})

exports.delete = (id) =>
new Promise ((resolve, reject) => {
    KegiatanModel.deleteOne({
        _id : ObjectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil Hapus Data'
    })).catch(() => ({
        status: false,
        pesan: 'Gagal Hapus Data'
    }))
})

// let kelas = {
//     nama : "wismoyo",
//     kelas: "IPA",
//     umur : 19,
//     hobi : "koding",
//     pindah: function (nkelas){
//         this.kelas = nkelas
//         console.log(`${this.nama} Telah pindah ke kelas ${this.nkelas}`)
//     }
// }

// function Kelas(nama, nkelas,){
//     let kelas = {};
//     kelas.nama = nama;
//     kelas.nkelas = nkelas;
//     kelas.pindah = function(baru){
//         this.nkelas = baru;
//         console.log(`${this.nama} telah berpindah kelas`);
//     }
//     return kelas;
// }

// let bagas = Kelas('Wismoyo', 'IPA')

function Kelas(nama, kelas){
    this.nama = nama;
    this.kelas = kelas;

    this.pindah = function(baru){
        this.kelas = baru;
        console.log(`${this.nama} telah berpindah kelas`)
    }

    let keluar = 'telah di keluarkan!'
    this.keluar = function(keluar){
        this.kelas = keluar
        console.log(`${this.nama} telah keluar dari kelas`)
    }
}

let bagas = new Kelas('Bagas', 'IPA')



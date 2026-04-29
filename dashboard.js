import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Ambil elemen dari HTML
const formUpload = document.getElementById('formUpload'); // Pastikan ID ini ada di HTML
const btnSimpan = document.getElementById('btnSimpan');

if (btnSimpan) {
    btnSimpan.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // Contoh mengambil data dari input
        const namaInput = document.getElementById('inputNama').value;

        if (namaInput === "") {
            alert("Harap isi data terlebih dahulu!");
            return;
        }

        try {
            // Proses Upload ke Firestore
            const docRef = await addDoc(collection(db, "laporan_hm"), {
                nama: namaInput,
                waktu: serverTimestamp()
            });

            // NOTIFIKASI BERHASIL
            console.log("Berhasil dengan ID: ", docRef.id);
            alert("✅ Berhasil! Data telah tersimpan ke Firebase.");
            
            // Reset form jika perlu
            document.getElementById('inputNama').value = "";

        } catch (error) {
            // NOTIFIKASI GAGAL
            console.error("Error: ", error);
            alert("❌ Gagal upload: " + error.message);
        }
    });
}

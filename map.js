import { db } from './firebase.js';
// Import fungsi firestore yang dibutuhkan untuk map
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function loadMarkers() {
    try {
        console.log("Mengambil data koordinat dari Firestore...");
        const querySnapshot = await getDocs(collection(db, "lokasi_map"));
        
        querySnapshot.forEach((doc) => {
            // Logika menampilkan marker peta kamu di sini
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Gagal memuat peta: ", error);
    }
}

// Jalankan fungsi
loadMarkers();

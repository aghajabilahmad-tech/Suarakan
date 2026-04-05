let dataAspirasi = [];

function tambahData() {
    let data = {
        judul: document.getElementById("judul").value,
        isi: document.getElementById("isi").value,
        tanggal: document.getElementById("tanggal").value,
        lokasi: document.getElementById("lokasi").value,
        instansi: document.getElementById("instansi").value,
        kategori: document.getElementById("kategori").value,
    };

    dataAspirasi.push(data);
    tampilkanData();
}

function tampilkanData() {
    let list = document.getElementById("list-Data");
    list.innerHTML = "";

    dataAspirasi.forEach((item, index) => {
        list.innerHTML += `
        <li>
            <b>${item.judul}</b><br><br>
            ${item.isi}<br>
            ${item.tanggal}<br>
            ${item.lokasi}<br>
            ${item.instansi}<br>
            ${item.kategori}<br><br>

            <button onclick="editData(${index})">Edit</button>
            <button onclick="hapusData(${index})">Hapus</button>
        </li>
        `;
    });
}

function editData(index) {
    document.getElementById("judul").value = dataAspirasi[index].judul;
    document.getElementById("isi").value = dataAspirasi[index].isi;
    document.getElementById("tanggal").value = dataAspirasi[index].tanggal;
    document.getElementById("lokasi").value = dataAspirasi[index].lokasi;
    document.getElementById("instansi").value = dataAspirasi[index].instansi;
    document.getElementById("kategori").value = dataAspirasi[index].kategori;

    dataAspirasi.splice(index, 1);
    tampilkanData();
}

function hapusData(index) {
    if (confirm("Yakin akan hapus?")) {
        dataAspirasi.splice(index, 1);
        tampilkanData();
    }
}

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User sudah login, tampilkan emailnya di dashboard
    console.log("Selamat datang: " + user.email);
    document.getElementById("user-display-name").innerText = user.email;
  } else {
    // User belum login, paksa ke halaman login
    window.location.href = "login.html";
  }
});
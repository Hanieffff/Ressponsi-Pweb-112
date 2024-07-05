var bookList = [
    {
        judul: "Laskar Pelangi",
        pengarang: "Andrea Hirata",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0cBIqHzO94_JmH3v20GQJe6C6cbd6syrkg&s.jpg",
        harga: 50000
    },
    {
        judul: "Bumi Manusia",
        pengarang: "Pramoedya Ananta Toer",
        gambar: "https://cdn.gramedia.com/uploads/items/bumi-manusia-edit.jpg",
        harga: 30000
    },
    {
        judul: "Cantik Itu Luka",
        pengarang: "Eka Kurniawan",
        gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d2/CiL_%28sampul%29.jpg/220px-CiL_%28sampul%29.jpg",
        harga: 20000
    },
    {
        judul: "Rumah Kaca",
        pengarang: "Pramoedya Ananta Toer",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4v-uZsxTp6aDUpYCzguE-y3MxZoVzJhBVw&s.jpg",
        harga: 40000
    },
    {
        judul: "Anak Semua Bangsa",
        pengarang: "Pramoedya Ananta Toer",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hbpS0XsRv07xp9htZgyg8v7PzaDCP2Omg&s.jpg",
        harga: 60000
    }
];

function displayBookList() {
    var bookHtml = "";
    for (var i = 0; i < bookList.length; i++) {
        bookHtml += `
            <div class="book-item">
                <img src="${bookList[i].gambar}" alt="${bookList[i].judul}">
                <h2>${bookList[i].judul}</h2>
                <p>Pengarang: ${bookList[i].pengarang}</p>
                <p>Harga Sewa: ${bookList[i].harga} IDR</p>
            </div>
        `;
    }
    document.getElementById("book-list").innerHTML = bookHtml;
}

document.addEventListener("DOMContentLoaded", function() {
    displayBookList();
});

document.getElementById("rent-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var judulBukuInput = document.getElementById("judul_buku").value;
    var nama = document.getElementById("nama").value;
    var tanggal_pengembalian = document.getElementById("tanggal_pengembalian").value;
    var hargaSewa = 0;

    for (var i = 0; i < bookList.length; i++) {
        if (bookList[i].judul.toLowerCase() === judulBukuInput.toLowerCase()) {
            hargaSewa = bookList[i].harga;
            break;
        }
    }

    if (hargaSewa > 0) {
        alert("Harga sewa untuk buku '" + judulBukuInput + "' adalah: " + hargaSewa + " IDR");
    } else {
        alert("Buku dengan judul '" + judulBukuInput + "' tidak ditemukan!");
    }
});

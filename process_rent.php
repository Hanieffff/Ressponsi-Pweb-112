<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    $judulBuku = $_POST['judul_buku'];
    $nama = $_POST['nama'];
    $tanggal_pengembalian = $_POST['tanggal_pengembalian'];

    $bookList = array(
        "Laskar Pelangi" => 50000,
        "Bumi Manusia" => 30000,
        "Cantik Itu Luka" => 20000,
        "Rumah Kaca" => 40000,
        "Anak Semua Bangsa" => 60000
    );


        $fp = fopen("data.txt", "a+");
        fputs($fp, "$nama | $judulBuku | $tanggal_pengembalian\n");
        fclose($fp);
    
}
?>

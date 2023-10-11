function pendaftaran() {
  var namaLengkap = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (namaLengkap === "" || email === "" || alamat === "") {
    alert('Data harus diisi')
  }
}

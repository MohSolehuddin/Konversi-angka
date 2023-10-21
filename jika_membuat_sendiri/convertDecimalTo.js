// membuat function decimalConvertTo yang menerima 2 parameter, angka desimal dan basis angka yang ingin di hasilkan dan mengkonvert nilai desimal ke nilai tertentu sesuai basis yang di masukan ke dalam parameter ke 2
function decimalConvertTo(desimalValue, basis) {
  // variabel result untuk menampung hasil
  let result = "";
  // variabel resultModulus yang akan menampung setiap hasil modulus
  let resultModulus = "";
  // membuat perulangan yang akan di menghitung hasil modulus nilai desimal dengan basis
  for (let i = 0;desimalValue > 0;i++) {
    // hitung hasil modulus
    resultModulus = desimalValue%basis;
    if (resultModulus === 10) {
      resultModulus ="a"
    }
    if(resultModulus === 11){
      resultModulus ="b";
    }
    if(resultModulus === 12){
      resultModulus ="c";
    }
    if(resultModulus === 13){
      resultModulus ="d";
    }
    if(resultModulus === 14){
      resultModulus ="e";
    }
    if(resultModulus === 15){
      resultModulus ="f";
    }
    console.log("hasil modulus: ", resultModulus);
    //tampung hasil modulus dengan hasil resultsebelumnya
    result = `${resultModulus}${result}`;
    console.log("hasil result sekarang: ", result);
    // setiap selesai melakukan modulus maka bagi desimalValue dengan basis, nanti hasil baginya akan menjadi desimalValue yang akan di modulus kembali, lakukan terusa sampai desimalValue < 0
    desimalValue = Math.floor((desimalValue/basis));
  }
  // keluarkan nilai result
  return result;
}
// percobaan
console.log(decimalConvertTo(500, 16));
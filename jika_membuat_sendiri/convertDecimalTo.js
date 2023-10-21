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

function convertToDecimal(value, basisBilangan) {
  // variabel result yang akan menyimpan hasil konversi
  let result= 0;
  // variabel eksponden yang nantinya memangkatkan setiap basisBilangan
  let eksponden = 0;
  // rubah value ke string agar nantinya bisa mendapatkan index dari setiap huruf nya
  value = `${value}`;
  // variabel valueIndex yang akan menampung nilai dari setiap indexnya dan merubahnya ke Number
  let valueIndex;
  //perulangan yang nantinya akan melooping tiap digit dan melakukan oprasi bilangan di dalamnya
  for (let i = value.length -1; 0 <= i; i--) {
    //apakah nilai di digit tertentu bukan 0
    if (value[i] != 0) {
      // jika nilai yang di input adalah hexadesimal maka rubah ke angka sesuai bobot yang di miliki
      if (value[i] === "a") {
        valueIndex = 10;
      }
      else if(value[i] === "b"){
        valueIndex = 11;
      }
      else if(value[i] === "c"){
        valueIndex = 12;
      }
      else if(value[i] === "d"){
        valueIndex = 13;
      }
      else if(value[i] === "e"){
        valueIndex = 14;
      }
      else if(value[i] === "f"){
        valueIndex = 15;
      }else {
        valueIndex = Number(value[i]);
      }
      // hitung result dan tambah dengan result sebelumnya
      result = result + (valueIndex * (basisBilangan**eksponden));
    }
    eksponden++;
  }
  return result;
}

// percobaan
console.log("conversi dari desimal: ",decimalConvertTo(100, 16));
console.log("conversi ke desimal: ",convertToDecimal(64,16));
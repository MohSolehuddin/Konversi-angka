//membuat fungsi convertNumber menerima 3 parameter valueFrom untuk nilai input dari user, from dan to yaitu dari apa ke apa
function convertNumber(valueFrom, from, to){
  // karakter terlarang di setiap bilangan
  let notHexadecimal = /[^0-9a-fA-F]/;
  let notBiner = /[^0-1]/;
  let notOctal = /[^0-7]/;
  
  // cegat jika input kosong 
  if (valueFrom === "") {
    return null;
  }
  //cegat terlebih terlebih dahulu jika di konvert dari bilangan yang sama, contoh biner ke biner
  if (from === to) {
    //periksa apakah bilangan tersebut biner atau bukan
    if (from === "biner") {
      if (notBiner.test(valueFrom)) {
        return false;
      } else {
        return valueFrom;
      }
    }
    //periksa apakah bilangan tersebut hexadesimal atau bukan
    if (from === "hexa") {
      if (notHexadecimal.test(valueFrom)) {
        return false;
      } else {
        return valueFrom;
      }
    }
    //periksa apakah bilangan tersebut octal atau bukan
    if (from === "octa") {
      if (notOctal.test(valueFrom)) {
        return false;
      } else {
        return valueFrom;
      }
    }
    //jika desimal langsung return tanpa pemeriksaan
    if (from === "desimal") {
      return valueFrom;
    }
  }
  
  // jika bukan hexadesimal maka rubah ke number
  if (from !== "hexa") {
    // rubah ke big integer karena seblumnya jika angka terlalu besar maka di konversi ke angka ilmiah yang mana ketika dari biner mau ke yang lain maka menghasilkan false karena ada huruf e di dalamnya contoh 10e+23
    valueFrom = BigInt(valueFrom);
   //desimal to
    if (from === "desimal") {
      if (to === "biner") {
        return valueFrom.toString(2);
      }
      if (to === "hexa") {
        return valueFrom.toString(16);
      }
      if(to === "octa") {
        return valueFrom.toString(8);
      }
    }
    // biner to
    if (from === "biner") {
      //periksa apakah bilangan tersebut biner atau bukan
      if (notBiner.test(valueFrom)) {
        return false;
      }else{
        if (to === "desimal") {
          return parseInt(valueFrom,2);
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom, 2);
          return desimal.toString(16);
        }
        if (to === "octa") {
          let desimal = parseInt(valueFrom,2);
          return desimal.toString(8);
        }
      }
    }
    // octa to
    if (from === "octa") {
      //periksa apakah bilangan tersebut octal atau bukan
      if (notOctal.test(valueFrom)) {
        return false;
      } else {
        if (to === "desimal") {
          return parseInt(valueFrom, 8);
        }
        if (to === "biner") {
          let desimal = parseInt(valueFrom,8);
          return desimal.toString(2);
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom,8);
          return desimal.toString(16);
        }
      }
    }
  } else {
    //hexa to
    //periksa apakah bilangan tersebut hexadesimal atau bukan
    if (notHexadecimal.test(valueFrom)) {
      return false;
    } else {
      if (to === "desimal") {
        return parseInt(valueFrom, 16);
      }
      if (to === "biner") {
        let desimal = parseInt(valueFrom,16);
        return desimal.toString(2);
      }
      if (to === "octa") {
        let desimal = parseInt(valueFrom,16);
        return desimal.toString(8);
      }
    } 
  }
}
//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  
  //jika hexa maka input text, jika bukan maka number
  if (from === "hexa") {
    document.getElementById("input-group").innerHTML = `
         <input type="text" name="valueFrom" id="valueFrom" placeholder="masukkan nilai ${from}" oninput="printResultConvertion()"/>
  `
  }else{
  document.getElementById("input-group").innerHTML = `
         <input type="number" name="valueFrom" id="valueFrom" placeholder="masukkan nilai ${from}" oninput="printResultConvertion()"/>
  `}
}

function printResultConvertion() {
  // mengambil nilai input nilai yang ingin di convert
  let valueFrom = document.getElementById("valueFrom").value;
  // mengambil nilai input pilihan dari apa ke apa konversi akan dilakukan
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  //buat variabel resultConvertion yang mendapat nilai dari function convertNumber
  let resultConvertion = convertNumber(valueFrom ,from ,to);
  // cegat jika input tidak sesuai dengan jenis bilangan
  if (resultConvertion === false ) {
    // cegat untuk masing masing bilangan
    if (from === "biner") {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 2 yang terdiri dari: 0 dan 1 </h3>`;
    } else if (from === "hexa"){
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 16 yang terdiri dari: 0 sampai F</h3>`;
    }else {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 8 yang terdiri dari: 0 sampai 7 </h3>`;
    }
  }
  // jika ternyata user tidak menginput maka beritau user untuk menginput
  else if (resultConvertion === null) {
    document.getElementById("output").innerHTML = `<h3>silahkan masukkan nilai ${from}</h3>`; 
  }
  // jika user tidak menginput nilai yang salah maka keluarkan nilai
  else{
    // memberikan  pemisah ribuan yang baik dan benar pada angka desimal
    if (to === "desimal" || from === "desimal") {
      if (from === "desimal" && to !== "desimal") {
        document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from} dengan nilai ${Number(valueFrom).toLocaleString('in-id')} ke ${to} adalah: </h3><span class="output">${resultConvertion}</span>`;
      }
      else if (to === "desimal" && from !== "desimal"){
        document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from} dengan nilai ${valueFrom} ke ${to} adalah: </h3><span class="output">${Number(resultConvertion).toLocaleString("in-id")}</span>`
      }else{
      document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from} dengan nilai ${Number(valueFrom).toLocaleString('in-id')} ke ${to} adalah: </h3><span class="output">${Number(resultConvertion).toLocaleString("in-id")}</span>`;
      }
    } else {
      document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from} dengan nilai ${valueFrom} ke ${to} adalah: </h3><span class="output">${resultConvertion}</span>`
    }
  }
}

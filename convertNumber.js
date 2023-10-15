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
        return valueFrom.toLocaleString('in-id');
      }
    }
    //periksa apakah bilangan tersebut hexadesimal atau bukan
    if (from === "hexa") {
      if (notHexadecimal.test(valueFrom)) {
        return false;
      } else {
        return valueFrom.toLocaleString('in-id');
      }
    }
    //periksa apakah bilangan tersebut octal atau bukan
    if (from === "octa") {
      if (notOctal.test(valueFrom)) {
        return false;
      } else {
        return valueFrom.toLocaleString('in-id');
      }
    }
    //jika desimal langsung return tanpa pemeriksaan
    if (from === "desimal") {
      return valueFrom.toLocaleString('in-id');
    }
  }
  
  // jika bukan hexadesimal maka rubah ke number
  if (from !== "hexa") {
    // rubah ke number
    valueFrom = Number(valueFrom);
   //desimal to
    if (from === "desimal") {
      if (to === "biner") {
        return valueFrom.toString(2).toLocaleString('in-ID');
      }
      if (to === "hexa") {
        return valueFrom.toString(16).toLocaleString('in-ID');
      }
      if(to === "octa") {
        return valueFrom.toString(8).toLocaleString('in-ID');
      }
    }
    // biner to
    if (from === "biner") {
      //periksa apakah bilangan tersebut biner atau bukan
      if (notBiner.test(valueFrom)) {
        return false;
      }else{
        if (to === "desimal") {
          return parseInt(valueFrom,2).toLocaleString('in-ID');
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom,2);
          return desimal.toString(16).toLocaleString('in-ID');
        }
        if (to === "octa") {
          let desimal = parseInt(valueFrom,2);
          return desimal.toString(8).toLocaleString('in-ID');
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
          return desimal.toString(2).toLocaleString('in-ID');
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom,8);
          return desimal.toString(16).toLocaleString('in-ID');
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
        // output += 
        return desimal.toString(2).toLocaleString('in-ID');
      }
      if (to === "octa") {
        let desimal = parseInt(valueFrom,16);
        // output += 
        return desimal.toString(8).toLocaleString('in-ID');
      }
    } 
  }
  return output
}
//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  
  //jika hexa maka input text, jika bukan maka number
  if (from === "hexa") {
    document.getElementById("input-group").innerHTML = `
         <input type="text" name="valueFrom" id="valueFrom" placeholder="masukkan nilai ${from}" oninput="print()"/>
  `
  }else{
  document.getElementById("input-group").innerHTML = `
         <input type="number" name="valueFrom" id="valueFrom" placeholder="masukkan nilai ${from}" oninput="print()"/>
  `}
}

function print() {
  // mengambil nilai input nilai yang ingin di convert
  let valueFrom = document.getElementById("valueFrom").value;
  // mengambil nilai input pilihan dari apa ke apa konversi akan dilakukan
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  //buat variabel value yang mendapat nilai dari function convertNumber
  let value = convertNumber(valueFrom ,from ,to);
  // cegat jika input tidak sesuai dengan jenis bilangan
  if (value === false ) {
    // cegat untuk masing masing bilangan
    if (from === "biner") {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 2 yang terdiri dari: 0 dan 1 </h3>`;
    } else if (from === "hexa"){
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 16 yang terdiri dari: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, dan e </h3>`;
    }else {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 8 yang terdiri dari: 0, 1, 2, 3, 4, 5, 6, dan 7 </h3>`;
    }
  }
  // jika ternyata user tidak menginput maka beritau user untuk menginput
  else if (value === null) {
    document.getElementById("output").innerHTML = `<h3>silahkan masukkan nilai ${from}</h3>`; 
  }
  // jika user tidak menginput nilai yang salah maka keluarkan nilai
  else{
   document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from.toLocaleString()} dengan nilai ${valueFrom.toLocaleString()} ke ${to.toLocaleString()} adalah: </h3><span class="output">${value}</span>`; 
  }
}

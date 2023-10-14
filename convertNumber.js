//membuat fungsi convertNumber menerima 3 parameter valueFrom untuk nilai input dari user, from dan to yaitu dari apa ke apa
function convertNumber(valueFrom, from, to){
  // karakter terlarang di setiap bilangan
  // hexadesimal
  let hexadecimalNumber = /0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|A|B|C|D|E|F/;
  let binerNumber = /0|1/;
  let octalNumber = /0|1|2|3|4|5|6|7/;
  // cegat jika input kosong 
  if (valueFrom === "") {
    return null;
  }
  //cegat terlebih terlebih dahulu jika di konvert dari basis yang sama
  if (from === to) {
    if (from === "biner") {
      if (binerNumber.test(valueFrom)) {
        return valueFrom.toLocaleString('in-id');
      } else {
        return false;
      }
    }
    if (from === "hexa") {
      if (hexadecimalNumber.test(valueFrom)) {
        return valueFrom.toLocaleString('in-id');
      } else {
        return false;
      }
    }
    if (from === "octa") {
      if (octalNumber.test(valueFrom)) {
        return valueFrom.toLocaleString('in-id');
      } else {
        return false;
      }
    }
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
        // output += 
        return valueFrom.toString(2).toLocaleString('in-ID');
      }
      if (to === "hexa") {
        // output += 
        return valueFrom.toString(16).toLocaleString('in-ID');
      }
      if(to === "octa") {
        // output +=
        return valueFrom.toString(8).toLocaleString('in-ID');
      }
    }
    // biner to
    if (from === "biner") {
      // jika bukan biner maka keluarkan false
      if (binerNumber.test(valueFrom)) {
        if (to === "desimal") {
          return parseInt(valueFrom,2).toLocaleString('in-ID');
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom,2);
          // output += 
          return desimal.toString(16).toLocaleString('in-ID');
        }
        if (to === "octa") {
          let desimal = parseInt(valueFrom,2);
          // output += 
          return desimal.toString(8).toLocaleString('in-ID');
        }
      }else{
        return false;
      }
    }
    // octa to
    if (from === "octa") {
      if (octalNumber.test(valueFrom)) {
        
        if (to === "desimal") {
          // output += 
          return parseInt(valueFrom, 8);
        }
        if (to === "biner") {
          let desimal = parseInt(valueFrom,8);
          // output += 
          return desimal.toString(2).toLocaleString('in-ID');
        }
        if (to === "hexa") {
          let desimal = parseInt(valueFrom,8);
          // output +=
          return desimal.toString(16).toLocaleString('in-ID');
        }
      } else {
        return false;
      }
    }
  } else {
   //hexa to
    if (from === "hexa") {
      if (hexadecimalNumber.test(valueFrom)) {
        if (to === "desimal") {
          // output += 
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
      } else {
        return false;
      }
    } 
  }
  return output
}

// function untuk memvalidasi apakah bukan bilangan tertentu
// function isValidateInput(inputUser) {
  
//}
//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  
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
  // mengambil nilai input rentang awal
  let valueFrom = document.getElementById("valueFrom").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let value = convertNumber(valueFrom ,from ,to);
  // cegat jika input kosong
  
  if (value === false ) {
    if (from === "biner") {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 2 yang terdiri dari: 0 dan 1 </h3>`;
    } else if (from === "hexa"){
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 16 yang terdiri dari: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, dan e </h3>`;
    }else {
      document.getElementById("output").innerHTML = `<h3 class="danger">Maaf data yang anda input bukanlah bilangan ${from}, bilangan ${from} hanya memiliki basis 8 yang terdiri dari: 0, 1, 2, 3, 4, 5, 6, dan 7 </h3>`;
    }
  }else if (value === null) {
    document.getElementById("output").innerHTML = `<h3>silahkan masukkan nilai ${from}</h3>`; 
  }else{
   document.getElementById("output").innerHTML = `<h3>Hasil konversi dari ${from.toLocaleString()} dengan nilai ${valueFrom.toLocaleString()} ke ${to.toLocaleString()} adalah: </h3><span class="output">${value}</span>`; 
  }
}
//membuat fungsi convertNumber menerima 3 parameter valueFrom untuk nilai input dari user, from dan to yaitu dari apa ke apa
function convertNumber(valueFrom, from, to){
  // rubah ke number
  valueFrom = Number(valueFrom);
  // membuat variabel output untuk menampung nilai yang akan di keluarkan ke html
  let output = `<h3>Hasil konversi dari ${from.toLocaleString()} dengan nilai ${valueFrom.toLocaleString()} ke ${to.toLocaleString()} adalah :</h3>`;
  
  //cegat terlebih terlebih dahulu jika di konvert dari basis yang sama
  if (from === to) {
    output += valueFrom.toLocaleString('in-id');
  }
  //desimal to
  if (from === "desimal") {
    if (to === "biner") {
      output += valueFrom.toString(2).toLocaleString('in-ID');
    }
    if (to === "hexa") {
      output += valueFrom.toString(16).toLocaleString('in-ID');
    }
    if(to === "octa") {
      output += valueFrom.toString(8).toLocaleString('in-ID');
    }
  }
  // biner to
  if (from === "biner") {
    if (to === "desimal") {
      output += parseInt(valueFrom,2).toLocaleString('in-ID');
    }
    if (to === "hexa") {
      let desimal = parseInt(valueFrom,2);
      output += desimal.toString(16).toLocaleString('in-ID');
    }
    if (to === "octa") {
      let desimal = parseInt(valueFrom,2);
      output += desimal.toString(8).toLocaleString('in-ID');
    }
  }
  //hexa to
  if (from === "hexa") {
    if (to === "desimal") {
      output += parseInt(valueFrom, 16);
    }
    if (to === "biner") {
      let desimal = parseInt(valueFrom,16);
      output += desimal.toString(2).toLocaleString('in-ID');
    }
    if (to === "octa") {
      let desimal = parseInt(valueFrom,16);
      output += desimal.toString(8).toLocaleString('in-ID');
    }
  }
  // octa to
  if (from === "octa") {
    if (to === "desimal") {
      output += parseInt(valueFrom, 8);
    }
    if (to === "biner") {
      let desimal = parseInt(valueFrom,8);
      output += desimal.toString(2).toLocaleString('in-ID');
    }
    if (to === "hexa") {
      let desimal = parseInt(valueFrom,8);
      output += desimal.toString(16).toLocaleString('in-ID');
    }
  }
  return output
}

//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  console.log(from);
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
  let value = convertNumber(valueFrom ,from ,to)
  document.getElementById("output").innerHTML = `${value}`;
}
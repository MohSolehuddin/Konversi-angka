// jangan lupa baca README.md ya juri hehe:)
// maaf ya juri tidak fasih bahasa inggris jadinya campur campur

//membuat fungsi convertFromDesimal
function convertFromDesimal(value, jumlah) {
  if (to === value) {
      output += valueFrom.toString(jumlah).toLocaleString('in-ID');
    }
}
function convertNumber(valueFrom, from, to){
  // membuat variabel output untuk menampung nilai yang akan di keluarkan ke html
  let output = `<h3>Hasil konversi dari ${from.toLocaleString()} ke ${to.toLocaleString()} adalah :</h3>`;
  if (from === "desimal") {
    if (to === "desimal") {
      output += valueFrom.toLocaleString('in-ID');
    }
    if (to === "biner") {
      output += valueFrom.toString(2).toLocaleString('in-ID');
    }
    if (to === "hexa") {
      output += valueFrom.toString(16).toLocaleString('in-ID');
    }
    convertFromDesimal("octa",8);
  }
  return output
}

//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  console.log(from);
  document.getElementById("input-group").innerHTML = `
         <input type="number" name="valueFrom" id="valueFrom" placeholder="masukkan nilai ${from}" oninput="print()"/>
  `
}
function print() {
  // mengambil nilai input rentang awal
  let valueFrom = document.getElementById("valueFrom").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let value = convertNumber(Number(valueFrom) ,from ,to)
  document.getElementById("output").innerHTML = `${value}`;
}
// jangan lupa baca README.md ya juri hehe:)
// maaf ya juri tidak fasih bahasa inggris jadinya campur campur

function convertNumber(valueFrom, form, to){
  // membuat variabel output untuk menampung nilai yang akan di keluarkan ke html
  let output = `<h3>Hasil konversi dari ${from.toLocaleString()} ke ${to.toLocaleString()} adalah :</h3>`;
  return output
}

//membuat fungsi print untuk menampilkan ke html
function printInput() {
  let from = document.getElementById("form").value;
  let to = document.getElementById("to").value;
  console.log(form);
  document.getElementById("input-group").innerHTML = `
         <input type="number" name="valueFrom" id="startRange" placeholder="nilai ${from}" oninput="print()"/>
  `
}
function print() {
  // mengambil nilai input rentang awal
  let valueFrom = document.getElementById("valueFrom").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let value = convertNumber(Number(valueFrom),Number(from),Number(to))
  document.getElementById("output").innerHTML = `${value}`;
}
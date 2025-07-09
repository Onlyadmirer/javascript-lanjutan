// buat objek angkot

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;


  this.penumpangNaik = function(namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  }

  this.penumpangTurun = function(namaPenumpang, bayar) {
    if (this.penumpang.includes(namaPenumpang)) {
      this.kas += bayar;
      let indexP = this.penumpang.indexOf(namaPenumpang);

      this.penumpang.splice(indexP, indexP);

      return kas, penumpang;
    } else {
      return `${namaPenumpang} tidak ada didalam angkot`
    }
  }
}

let angkot1 = new Angkot("Akmal", ["pelali", "toraja"], [], 0);
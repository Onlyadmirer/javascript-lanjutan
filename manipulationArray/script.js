
let penumpang = [];

function tambahPenumpang(nama, penumpang) {
  if (penumpang.includes(nama)) {
    return `${nama} sudah ada didalam angkot`;
  } else {
    if (penumpang.includes(undefined)) {
      let tempatDuduk = penumpang.indexOf(undefined);
      penumpang[tempatDuduk] = nama;
      return penumpang;
    } else {
      penumpang.push(nama);
      return penumpang;
    }
  }
}

function hapusPenumpang(dihapus, penumpang) {
  if (penumpang.includes(dihapus)) {
    let tempatDuduk = penumpang.indexOf(dihapus);
    penumpang.splice(tempatDuduk, tempatDuduk, undefined);
    return penumpang
  } else {
    return `${dihapus} tidak ada didalam angkot`;
  }
}
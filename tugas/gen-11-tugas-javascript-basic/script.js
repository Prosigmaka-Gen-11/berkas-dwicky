function perkalian(x, y) {
  return x * y;
}

const biodata = {
  namaLengkap: "Dwicky Darmawan",
  umur: 22,
  alamat: {
    kota: "Bandung",
    kodePos: 40374,
  },
  fungsiBaru: function () {},
  perkalian: perkalian(3, 2),
};

console.log(biodata.perkalian);

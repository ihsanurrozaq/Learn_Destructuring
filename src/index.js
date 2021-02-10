import "./styles.css";

let person = {
  firstName: "eksan",
  lastName: "Rozaq",
  fisika: {
    nilai: 80
  },
  kimia: {
    nilai: 60
  },
  geografI: {
    nilai: 85
  },
  sosiologi: {
    nilai: 80
  }
};

const ipa = {
  mapel: ["fisika", "kimia"],
  kkm: 75
};

const ips = {
  mapel: ["geografi", "sosiologi"],
  kkm: 80
};

for (const x in person) {
  if (x === "firstName") {
    person.firstName = "Maulana";
  }
  person.fullName = `${person.firstName} ${person.lastName}`;
}

for (const x in person) {
  for (const y in ipa.mapel) {
    if (ipa.mapel[y].toLowerCase() === x.toLowerCase()) {
      person[x].nilai >= ipa.kkm
        ? (person[x].status = "diatas rata-rata")
        : (person[x].status = "dibawah rata-rata");
    }
  }
  for (const y in ips.mapel) {
    if (ips.mapel[y].toLowerCase() === x.toLowerCase()) {
      person[x].nilai >= ips.kkm
        ? (person[x].status = "diatas rata-rata")
        : (person[x].status = "dibawah rata-rata");
    }
  }
}

console.log(person);

// let { lastName: firstName, firstName: lastName } = person;

// console.log(firstName, lastName);
// document.getElementById("app").innerHTML = person.firstName;
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

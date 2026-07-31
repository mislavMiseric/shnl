export interface Facility {
  name: string;
  address: string;
  phone: string;
  email?: string;
  url: string;
  description: string;
}

export interface City {
  slug: string;
  name: string;
  nameLoc: string;
  clubs: string[];
  mapX: number;
  mapY: number;
  labelDx?: number;
  labelDy?: number;
  facility: Facility;
}

export const VIEWBOX = { width: 512, height: 493 } as const;

export const cities: City[] = [
  {
    slug: "zagreb",
    name: "Zagreb",
    nameLoc: "Zagrebu",
    clubs: ["GNK Dinamo Zagreb", "NK Lokomotiva Zagreb", "NK Rudeš"],
    mapX: 222,
    mapY: 100,
    labelDx: 10,
    labelDy: -6,
    facility: {
      name: "Dnevna bolnica za liječenje ovisnosti o kockanju, Klinika za psihijatriju Vrapče",
      address: "Bolnička cesta 32, 10090 Zagreb",
      phone: "01 3780 777",
      email: "db.ovisnosti@bolnica-vrapce.hr",
      url: "https://bolnica-vrapce.hr/dnevna-bolnica-za-lijecenje-ovisnosti-o-kockanju/",
      description:
        "Besplatan specijalizirani program dnevne bolnice za ovisnost o kockanju u trajanju do tri mjeseca, temeljen na grupnoj psihoterapiji. Za upis su potrebni uputnica i prethodni dogovor prvog razgovora telefonom ili emailom.",
    },
  },
  {
    slug: "split",
    name: "Split",
    nameLoc: "Splitu",
    clubs: ["HNK Hajduk Split"],
    mapX: 259,
    mapY: 357,
    facility: {
      name: "Služba za mentalno zdravlje, Nastavni zavod za javno zdravstvo Splitsko-dalmatinske županije",
      address: "Vukovarska 46, 21000 Split",
      phone: "021 401 111",
      url: "https://nzjz-split.hr/sluzbe/sluzba-za-mentalno-zdravlje-o-nama/",
      description:
        "Služba pruža izvanbolničko liječenje ovisnosti i radi na smanjenju rizika kockanja. Možete se javiti samoinicijativno, telefonom ili dolaskom.",
    },
  },
  {
    slug: "rijeka",
    name: "Rijeka",
    nameLoc: "Rijeci",
    clubs: ["HNK Rijeka"],
    mapX: 99,
    mapY: 153,
    facility: {
      name: "Odjel za zaštitu mentalnog zdravlja i liječenje ovisnosti, Nastavni zavod za javno zdravstvo Primorsko-goranske županije",
      address: "Krešimirova 52a, 51000 Rijeka",
      phone: "051 327 160",
      url: "https://zzjzpgz.hr/zavod/odjeli/odjel-za-zastitu-mentalnog-zdravlja-i-lijecenje-ovisnosti/",
      description:
        "Odjel provodi grupnu psihoterapiju za osobe ovisne o kockanju ili klađenju. Radno vrijeme: ponedjeljkom i srijedom od 7 do 19:30, ostalim radnim danima od 7 do 15 sati.",
    },
  },
  {
    slug: "osijek",
    name: "Osijek",
    nameLoc: "Osijeku",
    clubs: ["NK Osijek"],
    mapX: 439,
    mapY: 129,
    facility: {
      name: "Centar za zdravstvenu zaštitu mentalnog zdravlja, prevenciju i izvanbolničko liječenje ovisnosti, Nastavni zavod za javno zdravstvo Osječko-baranjske županije",
      address: "Drinska 8, 31000 Osijek",
      phone: "031 304 455",
      email: "zz-cmz@zzjzosijek.hr",
      url: "https://www.zzjzosijek.hr/centar-za-zdravstvenu-zastitu-mentalnog-zdravlja-prevenciju-i-izvanbolnicko-lijecenje-bolesti-ovisnosti",
      description:
        "Centar provodi prevenciju i izvanbolničko liječenje ovisnosti, uključujući ovisnost o kocki. Za termin se najavite telefonom ili emailom.",
    },
  },
  {
    slug: "pula",
    name: "Pula",
    nameLoc: "Puli",
    clubs: ["NK Istra 1961"],
    mapX: 52,
    mapY: 205,
    facility: {
      name: "Služba za mentalno zdravlje i prevenciju ovisnosti, Nastavni zavod za javno zdravstvo Istarske županije",
      address: "Sveti Mihovil 2, 52100 Pula",
      phone: "052 217 501",
      email: "ovisnost@zzjziz.hr",
      url: "https://www.nzzjziz.hr/usluge/savjetovalista/ovisnost",
      description:
        "Služba provodi savjetovanje i liječenje ovisnika, uključujući ovisnost o kockanju. Javite se izravno telefonom ili emailom.",
    },
  },
  {
    slug: "varazdin",
    name: "Varaždin",
    nameLoc: "Varaždinu",
    clubs: ["NK Varaždin"],
    mapX: 251,
    mapY: 44,
    facility: {
      name: "Odjel za zaštitu mentalnog zdravlja, prevenciju i izvanbolničko liječenje ovisnosti, Zavod za javno zdravstvo Varaždinske županije",
      address: "Ivana Meštrovića 1/11, 42000 Varaždin",
      phone: "042 320 969",
      email: "ovisnost@zzjzzv.hr",
      url: "https://zzjzzv.hr/djelatnosti/javno-zdravstvo/odjel-za-zastitu-mentalnog-zdravlja-prevenciju-i-izvanbolnicko-lijecenje-ovisnosti/",
      description:
        "Odjel provodi prevenciju i izvanbolničko liječenje svih oblika ovisnosti. Za dolazak se najavite telefonom ili emailom.",
    },
  },
  {
    slug: "koprivnica",
    name: "Koprivnica",
    nameLoc: "Koprivnici",
    clubs: ["NK Slaven Belupo"],
    mapX: 290,
    mapY: 60,
    labelDx: 10,
    labelDy: 14,
    facility: {
      name: "Centar za zaštitu mentalnog zdravlja i prevenciju ovisnosti, Zavod za javno zdravstvo Koprivničko-križevačke županije",
      address: "Trg dr. Tomislava Bardeka 10/10, 48000 Koprivnica",
      phone: "048 655 160",
      email: "prevencija.ovisnosti@zzjz-kkz.hr",
      url: "https://www.zzjz-kkz.hr/defaultcont.asp?id=13&n=3",
      description:
        "Centar provodi prevenciju i izvanbolničko liječenje ovisnosti o kocki i drugih ovisnosti. Uputnica nije potrebna, a povjerljivost je zajamčena. Radno vrijeme: radnim danom od 7 do 15 sati.",
    },
  },
  {
    slug: "velika-gorica",
    name: "Velika Gorica",
    nameLoc: "Velikoj Gorici",
    clubs: ["HNK Gorica"],
    mapX: 230,
    mapY: 111,
    labelDx: 10,
    labelDy: 14,
    facility: {
      name: "Odjel za mentalno zdravlje i izvanbolničko liječenje ovisnosti, Zavod za javno zdravstvo Zagrebačke županije",
      address: "Šetalište Franje Lučića 21, 10410 Velika Gorica",
      phone: "01 6052 399",
      email: "mentalno-zdravlje@zzjz-zz.hr",
      url: "https://www.zzjz-zz.hr/usluge/zastita-mentalnog-zdravlja-prevencija-i-izvanbolnicko-lijecenje-ovisnosti/",
      description:
        "Odjel provodi besplatno izvanbolničko liječenje svih oblika ovisnosti. Uputnica nije potrebna, ali je obavezna prethodna najava termina telefonom.",
    },
  },
];

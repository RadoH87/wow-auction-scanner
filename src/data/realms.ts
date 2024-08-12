export type RealmData = {
  id: number;
  slug: string;
  name: string;
  connectedRealms?: string[];
  language: string;
};

export const realmList: RealmData[] = [
  {
    id: 1312,
    slug: "aerie-peak",
    name: "Aerie Peak",
    connectedRealms: [
      "Aerie Peak",
      "Bronzebeard",
      "Blade's Edge",
      "Eonar",
      "Vek'nilash",
    ],
    language: "English",
  },
  {
    id: 513,
    slug: "agamaggan",
    name: "Agamaggan",
    connectedRealms: [
      "Agamaggan",
      "Bloodscalp",
      "Crushridge",
      "Emeriss",
      "Hakkar",
      "Twilight's Hammer",
    ],
    language: "English",
  },
  {
    id: 1303,
    slug: "grim-batol",
    name: "Grim Batol",
    connectedRealms: ["Aggra (Português)", "Frostmane"],
    language: "Portuguese",
  },
  {
    id: 500,
    slug: "aggramar",
    name: "Aggramar",
    connectedRealms: ["Aggramar", "Hellscream"],
    language: "English",
  },
  {
    id: 526,
    slug: "ahnqiraj",
    name: "Ahn'Qiraj",
    connectedRealms: [
      "Ahn'Qiraj",
      "Balnazzar",
      "Boulderfist",
      "Chromaggus",
      "Daggerspine",
      "Laughing Skull",
      "Shattered Halls",
      "Sunstrider",
      "Talnivarr",
      "Trollbane",
    ],
    language: "English",
  },
  {
    id: 519,
    slug: "alakir",
    name: "Al'Akir",
    connectedRealms: ["Al'Akir", "Burning Legion", "Skullcrusher", "Xavius"],
    language: "English",
  },
  {
    id: 562,
    slug: "alexstrasza",
    name: "Alexstrasza",
    connectedRealms: ["Alexstrasza", "Nethersturm", "Madmortem", "Proudmoore"],
    language: "German",
  },
  {
    id: 563,
    slug: "alleria",
    name: "Alleria",
    connectedRealms: ["Alleria", "Rexxar"],
    language: "German",
  },
  {
    id: 1394,
    slug: "alonsus",
    name: "Alonsus",
    connectedRealms: ["Alonsus", "Anachronos", "Kul Tiras"],
    language: "English",
  },
  {
    id: 1105,
    slug: "amanthul",
    name: "Aman'Thul",
    connectedRealms: ["Aman'Thul", "Nazjatar", "Khaz'goroth"],
    language: "German",
  },
  {
    id: 1330,
    slug: "ambossar",
    name: "Ambossar",
    connectedRealms: ["Ambossar", "Kargath", "Thrall"],
    language: "German",
  },
  {
    id: 1104,
    slug: "anetheron",
    name: "Anetheron",
    connectedRealms: [
      "Anetheron",
      "Festung der Stürme",
      "Gul'dan",
      "Kil'jaeden",
      "Nathrezim",
      "Rajaxx",
    ],
    language: "German",
  },
  {
    id: 608,
    slug: "anubarak",
    name: "Anub'arak",
    connectedRealms: ["Anub'arak", "Dalvengyr", "Frostmourne", "Zuluhed"],
    language: "German",
  },
  {
    id: 512,
    slug: "arakarahm",
    name: "Arak-arahm",
    connectedRealms: ["Arak-arahm", "Kael'thas", "Rashgarroth", "Throk'Feroth"],
    language: "French",
  },
  {
    id: 541,
    slug: "arathi",
    name: "Arathi",
    connectedRealms: ["Arathi", "Illidan", "Naxxramas", "Temple noir"],
    language: "French",
  },
  {
    id: 501,
    slug: "arathor",
    name: "Arathor",
    connectedRealms: ["Arathor", "Hellfire", "Kilrogg", "Nagrand", "Runetotem"],
    language: "English",
  },
  {
    id: 539,
    slug: "archimonde",
    name: "Archimonde",
    connectedRealms: ["Archimonde", "Stonemaul"],
    language: "French",
  },
  {
    id: 1404,
    slug: "area-52",
    name: "Area 52",
    connectedRealms: ["Area 52", "Sen'jin", "Un'Goro"],
    language: "German",
  },
  {
    id: 578,
    slug: "arthas",
    name: "Arthas",
    connectedRealms: [
      "Arthas",
      "Blutkessel",
      "Durotan",
      "Kel'Thuzad",
      "Tirion",
      "Vek'lor",
      "Wrathbringer",
    ],
    language: "German",
  },
  {
    id: 569,
    slug: "arygos",
    name: "Arygos",
    connectedRealms: ["Khaz'goroth", "Arygos"],
    language: "German",
  },
  {
    id: 502,
    slug: "aszune",
    name: "Aszune",
    connectedRealms: ["Aszune", "Shadowsong"],
    language: "English",
  },
  {
    id: 1597,
    slug: "auchindoun",
    name: "Auchindoun",
    connectedRealms: ["Auchindoun", "Dunemaul", "Jaedenar", "Sylvanas"],
    language: "English",
  },
  {
    id: 503,
    slug: "azjolnerub",
    name: "Azjol-Nerub",
    connectedRealms: ["Azjol-Nerub", "Molten Core", "Quel'Thalas"],
    language: "English",
  },
  {
    id: 616,
    slug: "azshara",
    name: "Azshara",
    connectedRealms: ["Azshara", "Krag'jin", "Baelgun", "Lothar"],
    language: "German",
  },
  {
    id: 550,
    slug: "stormrage",
    name: "Stormrage",
    connectedRealms: ["Stormrage", "Azuremyst"],
    language: "English",
  },
  {
    id: 580,
    slug: "blackmoore",
    name: "Blackmoore",
    connectedRealms: ["Blackmoore", "Lordaeron", "Tichondrius"],
    language: "German",
  },
  {
    id: 1929,
    slug: "blackscar",
    name: "Blackscar",
    connectedRealms: [
      "Blackscar",
      "Borean Tundra",
      "Grom",
      "Thermaplugg",
      "Booty Bay",
      "Deathweaver",
    ],
    language: "Russian",
  },
  {
    id: 521,
    slug: "bladefist",
    name: "Bladefist",
    connectedRealms: [
      "Bladefist",
      "Frostwhisper",
      "Zenedar",
      "Darksorrow",
      "Genjuros",
      "Neptulon",
    ],
    language: "English",
  },
  {
    id: 630,
    slug: "bloodfeather",
    name: "Bloodfeather",
    connectedRealms: [
      "Bloodfeather",
      "Burning Steppes",
      "Darkspear",
      "Executus",
      "Kor'gall",
      "Saurfang",
      "Shattered Hand",
      "Terokkar",
    ],
    language: "English",
  },
  {
    id: 504,
    slug: "bloodhoof",
    name: "Bloodhoof",
    connectedRealms: ["Bloodhoof", "Khadgar"],
    language: "English",
  },
  {
    id: 393,
    slug: "nordrassil",
    name: "Nordrassil",
    connectedRealms: ["Nordrassil", "Bronze Dragonflight"],
    language: "English",
  },
  {
    id: 523,
    slug: "burning-blade",
    name: "Burning Blade",
    connectedRealms: ["Burning Blade", "Drak'thul"],
    language: "Czech",
  },
  {
    id: 1378,
    slug: "cthun",
    name: "C'Thun",
    connectedRealms: ["C'Thun", "Dun Modr"],
    language: "Spanish",
  },
  {
    id: 540,
    slug: "elune",
    name: "Elune",
    connectedRealms: ["Elune", "Varimathras"],
    language: "French",
  },
  {
    id: 510,
    slug: "voljin",
    name: "Vol'jin",
    connectedRealms: ["Chants éternels"],
    language: "French",
  },
  {
    id: 545,
    slug: "chogall",
    name: "Cho'gall",
    connectedRealms: [
      "Cho'gall",
      "Eldre'Thalas",
      "Sinstralis",
      "Dalaran",
      "Marécage de Zangar",
    ],
    language: "French",
  },
  {
    id: 1387,
    slug: "los-errantes",
    name: "Los Errantes",
    connectedRealms: ["Los Errantes", "Colinas Pardas", "Tyrande"],
    language: "Spanish",
  },
  {
    id: 537,
    slug: "kirin-tor",
    name: "Kirin Tor",
    connectedRealms: [
      "Confrérie du Thorium",
      "Les Clairvoyants",
      "Les Sentinelles",
      "Conseil des Ombres",
      "Culte de la Rive noire",
      "La Croisade écarlate",
    ],
    language: "French",
  },
  {
    id: 613,
    slug: "kult-der-verdammten",
    name: "Kult der Verdammten",
    connectedRealms: [
      "Kult der Verdammten",
      "Das Konsortium",
      "Das Syndikat",
      "Der abyssische Rat",
      "Die Arguswacht",
      "Die Todeskrallen",
      "Die ewige Wacht",
      "Die Silberne Hand",
    ],
    language: "German",
  },
  {
    id: 527,
    slug: "deathwing",
    name: "Deathwing",
    connectedRealms: [
      "Deathwing",
      "Dragonblight",
      "Ghostlands",
      "Karazhan",
      "Lightning's Blade",
      "The Maelstrom",
    ],
    language: "English",
  },
  {
    id: 1609,
    slug: "deepholm",
    name: "Deepholm",
    connectedRealms: ["Deepholm", "Galakrond", "Razuvious"],
    language: "Russian",
  },
  {
    id: 561,
    slug: "earthen-ring",
    name: "Earthen Ring",
    connectedRealms: [
      "Earthen Ring",
      "Darkmoon Faire",
      "Ravenholdt",
      "Defias Brotherhood",
      "Scarshield Legion",
      "The Venture Co",
      "Sporeggar",
    ],
    language: "English",
  },
  {
    id: 1306,
    slug: "tarren-mill",
    name: "Tarren Mill",
    connectedRealms: ["Tarren Mill", "Dentarg"],
    language: "English",
  },
  {
    id: 586,
    slug: "destromath",
    name: "Destromath",
    connectedRealms: [
      "Destromath",
      "Gorgonnash",
      "Mannoroth",
      "Nefarian",
      "Nera'thor",
    ],
    language: "German",
  },
  {
    id: 531,
    slug: "dethecus",
    name: "Dethecus",
    connectedRealms: [
      "Dethecus",
      "Mug'thol",
      "Onyxia",
      "Terrordar",
      "Theradras",
    ],
    language: "German",
  },
  {
    id: 516,
    slug: "forscherliga",
    name: "Forscherliga",
    connectedRealms: [
      "Forscherliga",
      "Die Nachtwache",
      "Todeswache",
      "Zirkel des Cenarius",
      "Der Mithrilorden",
      "Der Rat von Dalaran",
    ],
    language: "German",
  },
  {
    id: 505,
    slug: "doomhammer",
    name: "Doomhammer",
    connectedRealms: ["Doomhammer", "Menethil", "Turalyon"],
    language: "English",
  },
  {
    id: 528,
    slug: "dragonmaw",
    name: "Dragonmaw",
    connectedRealms: [
      "Dragonmaw",
      "Haomarush",
      "Spinebreaker",
      "Stormreaver",
      "Vashj",
    ],
    language: "English",
  },
  {
    id: 641,
    slug: "drekthar",
    name: "Drek'Thar",
    connectedRealms: ["Drek'Thar", "Uldaman", "Eitrigg", "Krasus"],
    language: "French",
  },
  {
    id: 600,
    slug: "dun-morogh",
    name: "Dun Morogh",
    connectedRealms: ["Dun Morogh", "Norgannon"],
    language: "German",
  },
  {
    id: 1612,
    slug: "echsenkessel",
    name: "Echsenkessel",
    connectedRealms: ["Echsenkessel", "Mal'Ganis", "Taerar", "Blackhand"],
    language: "German",
  },
  {
    id: 552,
    slug: "terenas",
    name: "Terenas",
    connectedRealms: ["Terenas", "Emerald Dream"],
    language: "English",
  },
  {
    id: 585,
    slug: "exodar",
    name: "Exodar",
    connectedRealms: ["Exodar", "Minahonda"],
    language: "Spanish",
  },
  {
    id: 546,
    slug: "sargeras",
    name: "Sargeras",
    connectedRealms: ["Sargeras", "Garona", "Ner'zhul"],
    language: "French",
  },
  {
    id: 574,
    slug: "nozdormu",
    name: "Nozdormu",
    connectedRealms: [
      "Nozdormu",
      "Garrosh",
      "Perenolde",
      "Shattrath",
      "Teldrassil",
    ],
    language: "German",
  },
  {
    id: 1928,
    slug: "goldrinn",
    name: "Goldrinn",
    connectedRealms: ["Goldrinn", "Greymane", "Lich King"],
    language: "Portuguese",
  },
  {
    id: 1388,
    slug: "lightbringer",
    name: "Lightbringer",
    connectedRealms: ["Lightbringer", "Mazrigos"],
    language: "English",
  },
  {
    id: 1098,
    slug: "malygos",
    name: "Malygos",
    connectedRealms: ["Malygos", "Malfurion"],
    language: "German",
  },
  {
    id: 1324,
    slug: "malorne",
    name: "Malorne",
    connectedRealms: ["Malorne", "Ysera"],
    language: "German",
  },
  {
    id: 1331,
    slug: "suramar",
    name: "Suramar",
    connectedRealms: ["Suramar", "Medivh"],
    language: "French",
  },
  {
    id: 1105,
    slug: "steamwheedle-cartel",
    name: "Steamwheedle Cartel",
    connectedRealms: ["Steamwheedle Cartel", "Moonglade", "The Sha'tar"],
    language: "English",
  },
  {
    id: 1391,
    slug: "sanguino",
    name: "Sanguino",
    connectedRealms: ["Sanguino", "Shen'dralar", "Uldum", "Zul'jin"],
    language: "Spanish",
  },
  {
    id: 560,
    slug: "stormscale",
    name: "Stormscale",
    connectedRealms: ["Stormscale", "Winterhuf"],
    language: "German",
  },
  {
    id: 552,
    slug: "wildhammer",
    name: "Wildhammer",
    connectedRealms: ["Wildhammer", "Thunderhorn"],
    language: "English",
  },
  {
    id: 577,
    slug: "aegwynn",
    name: "Aegwynn",
    language: "German",
  },
  {
    id: 564,
    slug: "antonidas",
    name: "Antonidas",
    language: "German",
  },
  {
    id: 536,
    slug: "argent-dawn",
    name: "Argent Dawn",
    language: "English",
  },
  {
    id: 541,
    slug: "ashenvale",
    name: "Ashenvale",
    language: "Russian",
  },
  {
    id: 522,
    slug: "azuregos",
    name: "Azuregos",
    language: "Russian",
  },
  {
    id: 574,
    slug: "blackrock",
    name: "Blackrock",
    language: "German",
  },
  {
    id: 1307,
    slug: "chamber-of-aspects",
    name: "Chamber of Aspects",
    language: "English",
  },
  {
    id: 1605,
    slug: "deathguard",
    name: "Deathguard",
    language: "Russian",
  },
  {
    id: 1618,
    slug: "die-aldor",
    name: "Die Aldor",
    language: "German",
  },
  {
    id: 506,
    slug: "draenor",
    name: "Draenor",
    language: "English",
  },
  {
    id: 524,
    slug: "eredar",
    name: "Eredar",
    language: "German",
  },
  {
    id: 1925,
    slug: "eversong",
    name: "Eversong",
    language: "Russian",
  },
  {
    id: 1622,
    slug: "fordragon",
    name: "Fordragon",
    language: "Russian",
  },
  {
    id: 1614,
    slug: "frostwolf",
    name: "Frostwolf",
    language: "German",
  },
  {
    id: 1615,
    slug: "howling-fjord",
    name: "Howling Fjord",
    language: "Russian",
  },
  {
    id: 542,
    slug: "hyjal",
    name: "Hyjal",
    language: "French",
  },
  {
    id: 1616,
    slug: "kazzak",
    name: "Kazzak",
    language: "English",
  },
  {
    id: 640,
    slug: "khaz-modan",
    name: "Khaz Modan",
    language: "French",
  },
  {
    id: 622,
    slug: "magtheridon",
    name: "Magtheridon",
    language: "English",
  },
  {
    id: 1598,
    slug: "nemesis",
    name: "Nemesis",
    language: "Portuguese",
  },
  {
    id: 1301,
    slug: "outland",
    name: "Outland",
    language: "English",
  },
  {
    id: 1309,
    slug: "pozzo-delleternità",
    name: "Pozzo dell'Eternità",
    language: "Italian",
  },
  {
    id: 626,
    slug: "ragnaros",
    name: "Ragnaros",
    language: "English",
  },
  {
    id: 554,
    slug: "ravencrest",
    name: "Ravencrest",
    language: "English",
  },
  {
    id: 549,
    slug: "silvermoon",
    name: "Silvermoon",
    language: "English",
  },
  {
    id: 1604,
    slug: "soulflayer",
    name: "Soulflayer",
    language: "Russian",
  },
  {
    id: 625,
    slug: "twisting-nether",
    name: "Twisting Nether",
    language: "English",
  },
  {
    id: 1323,
    slug: "ulduar",
    name: "Ulduar",
    language: "Russian",
  },
  {
    id: 1297,
    slug: "ysondre",
    name: "Ysondre",
    language: "French",
  },
];

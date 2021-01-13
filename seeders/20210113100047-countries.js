"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countries",
      [
        {
          name: "Afghanistan",
          code: "AFG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Åland Islands",
          code: "ALA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Albania",
          code: "ALB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Algeria",
          code: "DZA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "American Samoa",
          code: "ASM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andorra",
          code: "AND",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angola",
          code: "AGO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anguilla",
          code: "AIA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antarctica",
          code: "ATA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antigua and Barbuda",
          code: "ATG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Argentina",
          code: "ARG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Armenia",
          code: "ARM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aruba",
          code: "ABW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Australia",
          code: "AUS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Austria",
          code: "AUT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Azerbaijan",
          code: "AZE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bahamas",
          code: "BHS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bahrain",
          code: "BHR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bangladesh",
          code: "BGD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barbados",
          code: "BRB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belarus",
          code: "BLR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belgium",
          code: " BEL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belize",
          code: "BLZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benin",
          code: "BEN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bermuda",
          code: "BMU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bhutan",
          code: "BTN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bolivia",
          code: "BOL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bonaire, Sint Eustatius and Saba",
          code: "BES",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bosnia and Herzegovina",
          code: "BIH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Botswana",
          code: "BWA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bouvet Island",
          code: "BVT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brazil",
          code: "BRA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "British Indian Ocean Territory",
          code: "IOT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United States Minor Outlying Islands",
          code: "UMI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Virgin Islands (British)",
          code: "VGB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Virgin Islands (U.S.)",
          code: "VIR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brunei Darussalam",
          code: "BRN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bulgaria",
          code: "BGR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Burkina Faso",
          code: "BFA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Burundi",
          code: "BDI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Cambodia",
          code: "KHM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cameroon",
          code: "CMR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Canada",
          code: "CAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cabo Verde",
          code: "CPV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cayman Islands",
          code: "CYM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Central African Republic",
          code: "CAF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chad",
          code: "TCD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Chile",
          code: "CHL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "China",
          code: "CHN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Christmas Island",
          code: "CXR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cocos (Keeling) Islands",
          code: "CCK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Colombia",
          code: "COL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Comoros",
          code: "COM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Congo",
          code: "COG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Congo (Democratic Republic of the)",
          code: "COD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cook Islands",
          code: "COK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Costa Rica",
          code: " CRI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Croatia",
          code: "HRV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cuba",
          code: "CUB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Curaçao",
          code: "CUW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cyprus",
          code: "CYP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Czech Republic",
          code: "CZE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Denmark",
          code: "DNK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Djibouti",
          code: "DJI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dominica",
          code: "DMA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dominican Republic",
          code: "DOM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ecuador",
          code: "ECU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Egypt",
          code: "EGY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "El Salvador",
          code: "SLV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Equatorial Guinea",
          code: "GNQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eritrea",
          code: "ERI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Estonia",
          code: "EST",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ethiopia",
          code: "ETH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Falkland Islands (Malvinas)",
          code: "FLK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Faroe Islands",
          code: "FRO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiji",
          code: "FJI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Finland",
          code: "FIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "France",
          code: "FRA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "French Guiana",
          code: "GUF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "French Polynesia",
          code: "PYF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "French Southern Territories",
          code: "ATF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gabon",
          code: "GAB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gambia",
          code: "GMB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Georgia",
          code: "GEO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Germany",
          code: "DEU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghana",
          code: "GHA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gibraltar",
          code: "GIB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greece",
          code: "GRC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greenland",
          code: "GRL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grenada",
          code: "GRD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guadeloupe",
          code: "GLP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guam",
          code: "GUM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guatemala",
          code: "GTM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guernsey",
          code: "GGY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guinea",
          code: "GIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guinea-Bissau",
          code: "GNB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guyana",
          code: "GUY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haiti",
          code: "HTI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heard Island and McDonald Islands",
          code: "HMD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Holy See",
          code: "VAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honduras",
          code: "HND",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hong Kong",
          code: "HKG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hungary",
          code: "HUN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iceland",
          code: "ISL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "India",
          code: "IND",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indonesia",
          code: "IDN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Côte d'Ivoire`,
          code: "CIV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iran",
          code: "IRN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iraq",
          code: "IRQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ireland",
          code: "IRL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Isle of Man",
          code: "IMN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Israel",
          code: "ISR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italy",
          code: "ITA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jamaica",
          code: "JAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Japan",
          code: "JPN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jersey",
          code: "JEY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jordan",
          code: "JOR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kazakhstan",
          code: "KAZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kenya",
          code: "KEN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kiribati",
          code: "KIR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kuwait",
          code: "KWT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kyrgyzstan",
          code: "KGZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Lao People's Democratic Republic`,
          code: "LAO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Latvia",
          code: "LVA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lebanon",
          code: "LBN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lesotho",
          code: "LSO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liberia",
          code: "LBR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Libya",
          code: "LBY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liechtenstein",
          code: "LIE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lithuania",
          code: "LTU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luxembourg",
          code: "LUX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Macao",
          code: "MAC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Macedonia",
          code: "MKD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Madagascar",
          code: "MDG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Malawi",
          code: "MWI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Malaysia",
          code: "MYS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maldives",
          code: "MDV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mali",
          code: "MLI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Malta",
          code: "MLT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marshall Islands",
          code: "MHL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Martinique",
          code: "MTQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mauritania",
          code: "MRT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mauritius",
          code: "MUS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mayotte",
          code: "MYT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mexico",
          code: "MEX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Federated States of Micronesia",
          code: "FSM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moldova",
          code: "MDA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monaco",
          code: "MCO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mongolia",
          code: "MNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Montenegro",
          code: "MNE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Montserrat",
          code: "MSR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Morocco",
          code: "MAR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mozambique",
          code: "MOZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Myanmar",
          code: "MMR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Namibia",
          code: "NAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nauru",
          code: "NRU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nepal",
          code: "NPL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Netherlands",
          code: "NLD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "New Caledonia",
          code: "NCL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "New Zealand",
          code: "NZL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nicaragua",
          code: "NIC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Niger",
          code: "NER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nigeria",
          code: "NGA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Niue",
          code: "NIU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Norfolk Island",
          code: "NFK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Democratic People's Republic of Korea `,
          code: "PRK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Northern Mariana Islands",
          code: "MNP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Norway",
          code: "NOR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oman",
          code: "OMN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pakistan",
          code: "PAK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Palau",
          code: "PLW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Palestine",
          code: "PSE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Panama",
          code: "PAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Papua New Guinea",
          code: "PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paraguay",
          code: "PRY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peru",
          code: "PER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philippines",
          code: "PHL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pitcairn",
          code: "PCN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Poland",
          code: "POL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Portugal",
          code: "PRT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puerto Rico",
          code: "PRI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Qatar",
          code: "QAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Republic of Kosovo",
          code: "KOS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Réunion",
          code: "REU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Romania",
          code: "ROU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Russian Federation",
          code: "RUS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rwanda",
          code: "RWA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Barthélemy",
          code: "BLM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Helena, Ascension and Tristan da Cunha",
          code: "SHN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Kitts and Nevis",
          code: "KNA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Lucia",
          code: "LCA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Martin",
          code: "MAF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Pierre and Miquelon",
          code: "SPM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint Vincent and the Grenadines",
          code: "VCT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samoa",
          code: "WSM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "San Marino",
          code: "SMR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sao Tome and Principe",
          code: "STP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saudi Arabia",
          code: "SAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Senegal",
          code: "SEN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Serbia",
          code: "SRB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Seychelles",
          code: "SYC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sierra Leone",
          code: "SLE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Singapore",
          code: "SGP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slovakia",
          code: "SVK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slovenia",
          code: "SVN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Solomon Islands",
          code: "SLB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Somalia",
          code: "SOM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "South Africa",
          code: "ZAF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "SGS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Republic of Korea`,
          code: "KOR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "South Sudan",
          code: "SSD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spain",
          code: "ESP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sri Lanka",
          code: "LKA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sudan",
          code: "SDN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suriname",
          code: "SUR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Svalbard and Jan Mayen",
          code: "SJM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swaziland",
          code: "SWZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sweden",
          code: "SWE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Switzerland",
          code: "CHE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Syrian Arab Republic",
          code: "SYR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taiwan",
          code: "TWN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tajikistan",
          code: "TJK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tanzania",
          code: "TZA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thailand",
          code: "THA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Timor-Leste",
          code: "TLS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Togo",
          code: "TGO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tokelau",
          code: "TKL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tonga",
          code: "TON",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trinidad and Tobago",
          code: "TTO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tunisia",
          code: "TUN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Turkey",
          code: "TUR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Turkmenistan",
          code: "TKM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Turks and Caicos Islands",
          code: "TCA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuvalu",
          code: "TUV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uganda",
          code: "UGA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ukraine",
          code: "UKR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United Arab Emirates",
          code: "ARE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United Kingdom of Great Britain and Northern Ireland",
          code: "GBR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United States of America",
          code: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uruguay",
          code: "URY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Uzbekistan",
          code: "UZB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vanuatu",
          code: "VUT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venezuela",
          code: "VEN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Viet Nam",
          code: "VNM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wallis and Futuna",
          code: "WLF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Western Sahara",
          code: "ESH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yemen",
          code: "YEM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zambia",
          code: "ZMB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zimbabwe",
          code: "ZWE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countries", null, {});
  },
};

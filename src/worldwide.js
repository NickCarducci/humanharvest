import React from "react";
import { linecss, shortNumber } from "./vaxx";

/*
const worldwide = {
  "1965": [
    {
      age
      :"0",
      deaths: 2519,
      pop: 3947
    */

const popdata = {
  1950: [
    {
      age: "0-4",
      pop: "338,497"
    },
    {
      age: "5-9",
      pop: "270,083"
    },
    {
      age: "10-14",
      pop: "261,028"
    },
    {
      age: "15-19",
      pop: "239,488"
    },
    {
      age: "20-24",
      pop: "222,896"
    },
    {
      age: "25-29",
      pop: "196,163"
    },
    {
      age: "30-34",
      pop: "169,236"
    },
    {
      age: "35-39",
      pop: "164,473"
    },
    {
      age: "40-44",
      pop: "147,563"
    },
    {
      age: "45-49",
      pop: "128,450"
    },
    {
      age: "50-54",
      pop: "107,722"
    },
    {
      age: "55-59",
      pop: "88,674"
    },
    {
      age: "60-64",
      pop: "73,448"
    },
    {
      age: "65-69",
      pop: "55,143"
    },
    {
      age: "70-74",
      pop: "37,383"
    },
    {
      age: "75-79",
      pop: "21,902"
    },
    {
      age: "80-84",
      pop: "9,627"
    },
    {
      age: "85-89",
      pop: "3,475"
    },
    {
      age: "90-94",
      pop: "947"
    },
    {
      age: "95",
      pop: 198 + 34
    }
  ],

  1955: [
    {
      age: "0-4",
      pop: "407,177"
    },
    {
      age: "5-9",
      pop: "316,014"
    },
    {
      age: "10-14",
      pop: "263,432"
    },
    {
      age: "15-19",
      pop: "255,371"
    },
    {
      age: "20-24",
      pop: "232,637"
    },
    {
      age: "25-29",
      pop: "215,829"
    },
    {
      age: "30-34",
      pop: "189,433"
    },
    {
      age: "35-39",
      pop: "162,531"
    },
    {
      age: "40-44",
      pop: "157,012"
    },
    {
      age: "45-49",
      pop: "138,918"
    },
    {
      age: "50-54",
      pop: "120,107"
    },
    {
      age: "55-59",
      pop: "97,658"
    },
    {
      age: "60-64",
      pop: "77,073"
    },
    {
      age: "65-69",
      pop: "59,538"
    },
    {
      age: "70-74",
      pop: "40,493"
    },
    {
      age: "75-79",
      pop: "23,754"
    },
    {
      age: "80-84",
      pop: "11,309"
    },
    {
      age: "85-89",
      pop: "3,627"
    },
    {
      age: "90-94",
      pop: "917"
    },
    {
      age: "95",
      pop: 165 + 24
    }
  ],

  1960: [
    {
      age: "0-4",
      pop: "434,008"
    },
    {
      age: "5-9",
      pop: "383,756"
    },
    {
      age: "10-14",
      pop: "309,875"
    },
    {
      age: "15-19",
      pop: "257,985"
    },
    {
      age: "20-24",
      pop: "248,984"
    },
    {
      age: "25-29",
      pop: "226,721"
    },
    {
      age: "30-34",
      pop: "209,608"
    },
    {
      age: "35-39",
      pop: "183,031"
    },
    {
      age: "40-44",
      pop: "155,427"
    },
    {
      age: "45-49",
      pop: "149,151"
    },
    {
      age: "50-54",
      pop: "130,424"
    },
    {
      age: "55-59",
      pop: "109,466"
    },
    {
      age: "60-64",
      pop: "85,360"
    },
    {
      age: "65-69",
      pop: "63,029"
    },
    {
      age: "70-74",
      pop: "44,212"
    },
    {
      age: "75-79",
      pop: "26,016"
    },
    {
      age: "80-84",
      pop: "12,359"
    },
    {
      age: "85-89",
      pop: "4,387"
    },
    {
      age: "90-94",
      pop: "967"
    },
    {
      age: "95",
      pop: 164 + 20
    }
  ],

  1965: [
    {
      age: "0-4",
      pop: "479,304"
    },
    {
      age: "5-9",
      pop: "411,063"
    },
    {
      age: "10-14",
      pop: "376,012"
    },
    {
      age: "15-19",
      pop: "304,328"
    },
    {
      age: "20-24",
      pop: "252,276"
    },
    {
      age: "25-29",
      pop: "243,201"
    },
    {
      age: "30-34",
      pop: "220,676"
    },
    {
      age: "35-39",
      pop: "203,346"
    },
    {
      age: "40-44",
      pop: "176,285"
    },
    {
      age: "45-49",
      pop: "147,801"
    },
    {
      age: "50-54",
      pop: "140,160"
    },
    {
      age: "55-59",
      pop: "119,924"
    },
    {
      age: "60-64",
      pop: "96,281"
    },
    {
      age: "65-69",
      pop: "70,710"
    },
    {
      age: "70-74",
      pop: "47,734"
    },
    {
      age: "75-79",
      pop: "29,555"
    },
    {
      age: "80-84",
      pop: "14,364"
    },
    {
      age: "85-89",
      pop: "5,107"
    },
    {
      age: "90-94",
      pop: "1,259"
    },
    {
      age: "95",
      pop: 179 + 20
    }
  ],

  1970: [
    {
      age: "0-4",
      pop: "524,080"
    },
    {
      age: "5-9",
      pop: "459,404"
    },
    {
      age: "10-14",
      pop: "405,658"
    },
    {
      age: "15-19",
      pop: "370,848"
    },
    {
      age: "20-24",
      pop: "298,471"
    },
    {
      age: "25-29",
      pop: "247,308"
    },
    {
      age: "30-34",
      pop: "238,132"
    },
    {
      age: "35-39",
      pop: "214,924"
    },
    {
      age: "40-44",
      pop: "197,371"
    },
    {
      age: "45-49",
      pop: "169,732"
    },
    {
      age: "50-54",
      pop: "139,907"
    },
    {
      age: "55-59",
      pop: "130,546"
    },
    {
      age: "60-64",
      pop: "107,840"
    },
    {
      age: "65-69",
      pop: "82,239"
    },
    {
      age: "70-74",
      pop: "55,587"
    },
    {
      age: "75-79",
      pop: "33,116"
    },
    {
      age: "80-84",
      pop: "17,199"
    },
    {
      age: "85-89",
      pop: "6,270"
    },
    {
      age: "90-94",
      pop: "1,536"
    },
    {
      age: "95",
      pop: 246 + 23
    }
  ],

  1975: [
    {
      age: "0-4",
      pop: "544,510"
    },
    {
      age: "5-9",
      pop: "504,917"
    },
    {
      age: "10-14",
      pop: "453,689"
    },
    {
      age: "15-19",
      pop: "400,257"
    },
    {
      age: "20-24",
      pop: "364,789"
    },
    {
      age: "25-29",
      pop: "294,190"
    },
    {
      age: "30-34",
      pop: "243,513"
    },
    {
      age: "35-39",
      pop: "233,575"
    },
    {
      age: "40-44",
      pop: "209,782"
    },
    {
      age: "45-49",
      pop: "191,059"
    },
    {
      age: "50-54",
      pop: "162,413"
    },
    {
      age: "55-59",
      pop: "130,909"
    },
    {
      age: "60-64",
      pop: "118,327"
    },
    {
      age: "65-69",
      pop: "93,141"
    },
    {
      age: "70-74",
      pop: "65,451"
    },
    {
      age: "75-79",
      pop: "39,218"
    },
    {
      age: "80-84",
      pop: "19,717"
    },
    {
      age: "85-89",
      pop: "7,715"
    },
    {
      age: "90-94",
      pop: "1,967"
    },
    {
      age: "95",
      pop: 311 + 32
    }
  ],

  1980: [
    {
      age: "0-4",
      pop: "547,597"
    },
    {
      age: "5-9",
      pop: "527,349"
    },
    {
      age: "10-14",
      pop: "500,035"
    },
    {
      age: "15-19",
      pop: "449,746"
    },
    {
      age: "20-24",
      pop: "395,072"
    },
    {
      age: "25-29",
      pop: "359,396"
    },
    {
      age: "30-34",
      pop: "289,865"
    },
    {
      age: "35-39",
      pop: "238,555"
    },
    {
      age: "40-44",
      pop: "228,343"
    },
    {
      age: "45-49",
      pop: "203,360"
    },
    {
      age: "50-54",
      pop: "183,250"
    },
    {
      age: "55-59",
      pop: "153,161"
    },
    {
      age: "60-64",
      pop: "119,741"
    },
    {
      age: "65-69",
      pop: "103,714"
    },
    {
      age: "70-74",
      pop: "75,524"
    },
    {
      age: "75-79",
      pop: "47,567"
    },
    {
      age: "80-84",
      pop: "23,497"
    },
    {
      age: "85-89",
      pop: "9,180"
    },
    {
      age: "90-94",
      pop: "2,568"
    },
    {
      age: "95",
      pop: 437 + 45
    }
  ],

  1985: [
    {
      age: "0-4",
      pop: "590,128"
    },
    {
      age: "5-9",
      pop: "532,513"
    },
    {
      age: "10-14",
      pop: "522,713"
    },
    {
      age: "15-19",
      pop: "496,129"
    },
    {
      age: "20-24",
      pop: "444,469"
    },
    {
      age: "25-29",
      pop: "390,205"
    },
    {
      age: "30-34",
      pop: "355,119"
    },
    {
      age: "35-39",
      pop: "285,527"
    },
    {
      age: "40-44",
      pop: "233,895"
    },
    {
      age: "45-49",
      pop: "221,934"
    },
    {
      age: "50-54",
      pop: "195,489"
    },
    {
      age: "55-59",
      pop: "173,017"
    },
    {
      age: "60-64",
      pop: "140,541"
    },
    {
      age: "65-69",
      pop: "105,008"
    },
    {
      age: "70-74",
      pop: "84,768"
    },
    {
      age: "75-79",
      pop: "55,230"
    },
    {
      age: "80-84",
      pop: "29,197"
    },
    {
      age: "85-89",
      pop: "11,192"
    },
    {
      age: "90-94",
      pop: "3,183"
    },
    {
      age: "95",
      pop: 598 + 66
    }
  ],

  1990: [
    {
      age: "0-4",
      pop: "643,553"
    },
    {
      age: "5-9",
      pop: "575,774"
    },
    {
      age: "10-14",
      pop: "528,773"
    },
    {
      age: "15-19",
      pop: "518,869"
    },
    {
      age: "20-24",
      pop: "490,173"
    },
    {
      age: "25-29",
      pop: "438,507"
    },
    {
      age: "30-34",
      pop: "385,595"
    },
    {
      age: "35-39",
      pop: "350,133"
    },
    {
      age: "40-44",
      pop: "280,554"
    },
    {
      age: "45-49",
      pop: "227,917"
    },
    {
      age: "50-54",
      pop: "213,991"
    },
    {
      age: "55-59",
      pop: "185,445"
    },
    {
      age: "60-64",
      pop: "159,735"
    },
    {
      age: "65-69",
      pop: "124,430"
    },
    {
      age: "70-74",
      pop: "86,539"
    },
    {
      age: "75-79",
      pop: "63,067"
    },
    {
      age: "80-84",
      pop: "34,899"
    },
    {
      age: "85-89",
      pop: "14,418"
    },
    {
      age: "90-94",
      pop: "3,999"
    },
    {
      age: "95",
      pop: 766 + 92
    }
  ],

  1995: [
    {
      age: "0-4",
      pop: "619,843"
    },
    {
      age: "5-9",
      pop: "630,434"
    },
    {
      age: "10-14",
      pop: "572,597"
    },
    {
      age: "15-19",
      pop: "524,436"
    },
    {
      age: "20-24",
      pop: "511,301"
    },
    {
      age: "25-29",
      pop: "483,642"
    },
    {
      age: "30-34",
      pop: "433,843"
    },
    {
      age: "35-39",
      pop: "380,503"
    },
    {
      age: "40-44",
      pop: "344,174"
    },
    {
      age: "45-49",
      pop: "273,612"
    },
    {
      age: "50-54",
      pop: "220,280"
    },
    {
      age: "55-59",
      pop: "203,173"
    },
    {
      age: "60-64",
      pop: "171,695"
    },
    {
      age: "65-69",
      pop: "141,632"
    },
    {
      age: "70-74",
      pop: "103,340"
    },
    {
      age: "75-79",
      pop: "64,913"
    },
    {
      age: "80-84",
      pop: "40,593"
    },
    {
      age: "85-89",
      pop: "17,777"
    },
    {
      age: "90-94",
      pop: "5,325"
    },
    {
      age: "95",
      pop: 979 + 120
    }
  ],

  2000: [
    {
      age: "0-4",
      pop: "615,666"
    },
    {
      age: "5-9",
      pop: "608,770"
    },
    {
      age: "10-14",
      pop: "626,883"
    },
    {
      age: "15-19",
      pop: "568,145"
    },
    {
      age: "20-24",
      pop: "517,287"
    },
    {
      age: "25-29",
      pop: "505,356"
    },
    {
      age: "30-34",
      pop: "478,114"
    },
    {
      age: "35-39",
      pop: "428,112"
    },
    {
      age: "40-44",
      pop: "373,778"
    },
    {
      age: "45-49",
      pop: "336,199"
    },
    {
      age: "50-54",
      pop: "264,787"
    },
    {
      age: "55-59",
      pop: "209,514"
    },
    {
      age: "60-64",
      pop: "188,677"
    },
    {
      age: "65-69",
      pop: "153,220"
    },
    {
      age: "70-74",
      pop: "118,485"
    },
    {
      age: "75-79",
      pop: "78,789"
    },
    {
      age: "80-84",
      pop: "42,357"
    },
    {
      age: "85-89",
      pop: "21,140"
    },
    {
      age: "90-94",
      pop: "6,740"
    },
    {
      age: "95",
      pop: 1327 + 151
    }
  ],

  2005: [
    {
      age: "0-4",
      pop: "627,238"
    },
    {
      age: "5-9",
      pop: "607,187"
    },
    {
      age: "10-14",
      pop: "606,629"
    },
    {
      age: "15-19",
      pop: "622,164"
    },
    {
      age: "20-24",
      pop: "560,548"
    },
    {
      age: "25-29",
      pop: "511,318"
    },
    {
      age: "30-34",
      pop: "499,702"
    },
    {
      age: "35-39",
      pop: "471,989"
    },
    {
      age: "40-44",
      pop: "420,747"
    },
    {
      age: "45-49",
      pop: "364,457"
    },
    {
      age: "50-54",
      pop: "325,570"
    },
    {
      age: "55-59",
      pop: "253,710"
    },
    {
      age: "60-64",
      pop: "195,777"
    },
    {
      age: "65-69",
      pop: "169,123"
    },
    {
      age: "70-74",
      pop: "129,306"
    },
    {
      age: "75-79",
      pop: "90,869"
    },
    {
      age: "80-84",
      pop: "52,636"
    },
    {
      age: "85-89",
      pop: "22,665"
    },
    {
      age: "90-94",
      pop: "8,321"
    },
    {
      age: "95",
      pop: 1744 + 208
    }
  ],

  2010: [
    {
      age: "0-4",
      pop: "652,014"
    },
    {
      age: "5-9",
      pop: "619,555"
    },
    {
      age: "10-14",
      pop: "604,972"
    },
    {
      age: "15-19",
      pop: "602,028"
    },
    {
      age: "20-24",
      pop: "613,689"
    },
    {
      age: "25-29",
      pop: "555,351"
    },
    {
      age: "30-34",
      pop: "506,150"
    },
    {
      age: "35-39",
      pop: "494,465"
    },
    {
      age: "40-44",
      pop: "465,073"
    },
    {
      age: "45-49",
      pop: "412,943"
    },
    {
      age: "50-54",
      pop: "354,590"
    },
    {
      age: "55-59",
      pop: "312,065"
    },
    {
      age: "60-64",
      pop: "237,241"
    },
    {
      age: "65-69",
      pop: "177,320"
    },
    {
      age: "70-74",
      pop: "144,462"
    },
    {
      age: "75-79",
      pop: "100,725"
    },
    {
      age: "80-84",
      pop: "62,689"
    },
    {
      age: "85-89",
      pop: "29,495"
    },
    {
      age: "90-94",
      pop: "9,399"
    },
    {
      age: "95",
      pop: 2305 + 294
    }
  ],

  2015: [
    {
      age: "0-4",
      pop: "670,674"
    },
    {
      age: "5-9",
      pop: "644,706"
    },
    {
      age: "10-14",
      pop: "615,946"
    },
    {
      age: "15-19",
      pop: "601,644"
    },
    {
      age: "20-24",
      pop: "597,563"
    },
    {
      age: "25-29",
      pop: "609,086"
    },
    {
      age: "30-34",
      pop: "550,414"
    },
    {
      age: "35-39",
      pop: "500,480"
    },
    {
      age: "40-44",
      pop: "487,733"
    },
    {
      age: "45-49",
      pop: "456,777"
    },
    {
      age: "50-54",
      pop: "402,233"
    },
    {
      age: "55-59",
      pop: "340,945"
    },
    {
      age: "60-64",
      pop: "294,050"
    },
    {
      age: "65-69",
      pop: "216,166"
    },
    {
      age: "70-74",
      pop: "153,429"
    },
    {
      age: "75-79",
      pop: "114,720"
    },
    {
      age: "80-84",
      pop: "70,755"
    },
    {
      age: "85-89",
      pop: "36,351"
    },
    {
      age: "90-94",
      pop: "12,920"
    },
    {
      age: "95",
      pop: 2790 + 417
    }
  ],

  2020: [
    {
      age: "0-4",
      pop: "677,942"
    },
    {
      age: "5-9",
      pop: "664,439"
    },
    {
      age: "10-14",
      pop: "641,267"
    },
    {
      age: "15-19",
      pop: "612,196"
    },
    {
      age: "20-24",
      pop: "597,388"
    },
    {
      age: "25-29",
      pop: "594,692"
    },
    {
      age: "30-34",
      pop: "605,531"
    },
    {
      age: "35-39",
      pop: "544,819"
    },
    {
      age: "40-44",
      pop: "493,789"
    },
    {
      age: "45-49",
      pop: "479,366"
    },
    {
      age: "50-54",
      pop: "445,773"
    },
    {
      age: "55-59",
      pop: "387,849"
    },
    {
      age: "60-64",
      pop: "322,142"
    },
    {
      age: "65-69",
      pop: "269,644"
    },
    {
      age: "70-74",
      pop: "188,677"
    },
    {
      age: "75-79",
      pop: "123,782"
    },
    {
      age: "80-84",
      pop: "81,930"
    },
    {
      age: "85-89",
      pop: "42,186"
    },
    {
      age: "90-94",
      pop: "16,680"
    },
    {
      age: "95",
      pop: 4134 + 573
    }
  ]
};

const worldwide = {
  1955: [
    {
      age: "0-4",
      deaths: "98,141"
    },
    {
      age: "5-9",
      deaths: "9,649"
    },
    {
      age: "10-14",
      deaths: "5,256"
    },
    {
      age: "15-19",
      deaths: "5,946"
    },
    {
      age: "20-24",
      deaths: "6,701"
    },
    {
      age: "25-29",
      deaths: "6,679"
    },
    {
      age: "30-34",
      deaths: "6,530"
    },
    {
      age: "35-39",
      deaths: "6,941"
    },
    {
      age: "40-44",
      deaths: "7,951"
    },
    {
      age: "45-49",
      deaths: "8,819"
    },
    {
      age: "50-54",
      deaths: "9,532"
    },
    {
      age: "55-59",
      deaths: "10,872"
    },
    {
      age: "60-64",
      deaths: "13,526"
    },
    {
      age: "65-69",
      deaths: "14,726"
    },
    {
      age: "70-74",
      deaths: "14,786"
    },
    {
      age: "75-79",
      deaths: "13,071"
    },
    {
      age: "80-84",
      deaths: "8,626"
    },
    {
      age: "85-89",
      deaths: "4,074"
    },
    {
      age: "90-94",
      deaths: "1,445"
    },
    {
      age: "95",
      deaths: "432"
    }
  ],
  1960: [
    {
      age: "0-4",
      deaths: "96,117"
    },
    {
      age: "5-9",
      deaths: "9,791"
    },
    {
      age: "10-14",
      deaths: "4,869"
    },
    {
      age: "15-19",
      deaths: "5,313"
    },
    {
      age: "20-24",
      deaths: "6,115"
    },
    {
      age: "25-29",
      deaths: "6,257"
    },
    {
      age: "30-34",
      deaths: "6,295"
    },
    {
      age: "35-39",
      deaths: "6,590"
    },
    {
      age: "40-44",
      deaths: "7,350"
    },
    {
      age: "45-49",
      deaths: "8,383"
    },
    {
      age: "50-54",
      deaths: "9,808"
    },
    {
      age: "55-59",
      deaths: "11,596"
    },
    {
      age: "60-64",
      deaths: "13,691"
    },
    {
      age: "65-69",
      deaths: "15,072"
    },
    {
      age: "70-74",
      deaths: "15,581"
    },
    {
      age: "75-79",
      deaths: "13,749"
    },
    {
      age: "80-84",
      deaths: "9,512"
    },
    {
      age: "85-89",
      deaths: "4,524"
    },
    {
      age: "90-94",
      deaths: "1,440"
    },
    {
      age: "95",
      deaths: "378"
    }
  ],
  1965: [
    {
      age: "0-4",
      deaths: "97,170"
    },
    {
      age: "5-9",
      deaths: "10,381"
    },
    {
      age: "10-14",
      deaths: "5,361"
    },
    {
      age: "15-19",
      deaths: "5,137"
    },
    {
      age: "20-24",
      deaths: "5,562"
    },
    {
      age: "25-29",
      deaths: "5,823"
    },
    {
      age: "30-34",
      deaths: "6,160"
    },
    {
      age: "35-39",
      deaths: "6,574"
    },
    {
      age: "40-44",
      deaths: "7,244"
    },
    {
      age: "45-49",
      deaths: "8,308"
    },
    {
      age: "50-54",
      deaths: "10,069"
    },
    {
      age: "55-59",
      deaths: "12,116"
    },
    {
      age: "60-64",
      deaths: "14,425"
    },
    {
      age: "65-69",
      deaths: "15,567"
    },
    {
      age: "70-74",
      deaths: "15,903"
    },
    {
      age: "75-79",
      deaths: "14,030"
    },
    {
      age: "80-84",
      deaths: "9,915"
    },
    {
      age: "85-89",
      deaths: "5,010"
    },
    {
      age: "90-94",
      deaths: "1,633"
    },
    {
      age: "95",
      deaths: "377"
    }
  ],
  1970: [
    {
      age: "0-4",
      deaths: "90,240"
    },
    {
      age: "5-9",
      deaths: "8,042"
    },
    {
      age: "10-14",
      deaths: "4,130"
    },
    {
      age: "15-19",
      deaths: "4,507"
    },
    {
      age: "20-24",
      deaths: "4,693"
    },
    {
      age: "25-29",
      deaths: "4,790"
    },
    {
      age: "30-34",
      deaths: "5,193"
    },
    {
      age: "35-39",
      deaths: "5,690"
    },
    {
      age: "40-44",
      deaths: "6,380"
    },
    {
      age: "45-49",
      deaths: "7,212"
    },
    {
      age: "50-54",
      deaths: "8,714"
    },
    {
      age: "55-59",
      deaths: "10,871"
    },
    {
      age: "60-64",
      deaths: "13,545"
    },
    {
      age: "65-69",
      deaths: "15,174"
    },
    {
      age: "70-74",
      deaths: "15,400"
    },
    {
      age: "75-79",
      deaths: "14,263"
    },
    {
      age: "80-84",
      deaths: "10,779"
    },
    {
      age: "85-89",
      deaths: "5,698"
    },
    {
      age: "90-94",
      deaths: "1,979"
    },
    {
      age: "95",
      deaths: "446"
    }
  ],
  1975: [
    {
      age: "0-4",
      deaths: "82,121"
    },
    {
      age: "5-9",
      deaths: "8,213"
    },
    {
      age: "10-14",
      deaths: "3,839"
    },
    {
      age: "15-19",
      deaths: "4,220"
    },
    {
      age: "20-24",
      deaths: "4,603"
    },
    {
      age: "25-29",
      deaths: "4,219"
    },
    {
      age: "30-34",
      deaths: "4,403"
    },
    {
      age: "35-39",
      deaths: "4,952"
    },
    {
      age: "40-44",
      deaths: "5,785"
    },
    {
      age: "45-49",
      deaths: "6,925"
    },
    {
      age: "50-54",
      deaths: "8,375"
    },
    {
      age: "55-59",
      deaths: "10,552"
    },
    {
      age: "60-64",
      deaths: "13,863"
    },
    {
      age: "65-69",
      deaths: "16,130"
    },
    {
      age: "70-74",
      deaths: "17,172"
    },
    {
      age: "75-79",
      deaths: "15,771"
    },
    {
      age: "80-84",
      deaths: "12,175"
    },
    {
      age: "85-89",
      deaths: "6,769"
    },
    {
      age: "90-94",
      deaths: "2,404"
    },
    {
      age: "95",
      deaths: "570"
    }
  ],
  1980: [
    {
      age: "0-4",
      deaths: "73,437"
    },
    {
      age: "5-9",
      deaths: "7,203"
    },
    {
      age: "10-14",
      deaths: "3,701"
    },
    {
      age: "15-19",
      deaths: "4,332"
    },
    {
      age: "20-24",
      deaths: "4,816"
    },
    {
      age: "25-29",
      deaths: "4,512"
    },
    {
      age: "30-34",
      deaths: "4,251"
    },
    {
      age: "35-39",
      deaths: "4,590"
    },
    {
      age: "40-44",
      deaths: "5,508"
    },
    {
      age: "45-49",
      deaths: "6,731"
    },
    {
      age: "50-54",
      deaths: "8,595"
    },
    {
      age: "55-59",
      deaths: "10,249"
    },
    {
      age: "60-64",
      deaths: "13,402"
    },
    {
      age: "65-69",
      deaths: "16,597"
    },
    {
      age: "70-74",
      deaths: "18,735"
    },
    {
      age: "75-79",
      deaths: "17,795"
    },
    {
      age: "80-84",
      deaths: "13,675"
    },
    {
      age: "85-89",
      deaths: "7,763"
    },
    {
      age: "90-94",
      deaths: "2,941"
    },
    {
      age: "95",
      deaths: "729"
    }
  ],
  1985: [
    {
      age: "0-4",
      deaths: "68,150"
    },
    {
      age: "5-9",
      deaths: "6,444"
    },
    {
      age: "10-14",
      deaths: "3,363"
    },
    {
      age: "15-19",
      deaths: "4,407"
    },
    {
      age: "20-24",
      deaths: "5,030"
    },
    {
      age: "25-29",
      deaths: "4,838"
    },
    {
      age: "30-34",
      deaths: "4,603"
    },
    {
      age: "35-39",
      deaths: "4,542"
    },
    {
      age: "40-44",
      deaths: "5,332"
    },
    {
      age: "45-49",
      deaths: "6,738"
    },
    {
      age: "50-54",
      deaths: "8,894"
    },
    {
      age: "55-59",
      deaths: "11,145"
    },
    {
      age: "60-64",
      deaths: "13,933"
    },
    {
      age: "65-69",
      deaths: "16,762"
    },
    {
      age: "70-74",
      deaths: "20,260"
    },
    {
      age: "75-79",
      deaths: "20,080"
    },
    {
      age: "80-84",
      deaths: "16,019"
    },
    {
      age: "85-89",
      deaths: "9,058"
    },
    {
      age: "90-94",
      deaths: "3,601"
    },
    {
      age: "95",
      deaths: "989"
    }
  ],
  1990: [
    {
      age: "0-4",
      deaths: "65,336"
    },
    {
      age: "5-9",
      deaths: "6,115"
    },
    {
      age: "10-14",
      deaths: "3,231"
    },
    {
      age: "15-19",
      deaths: "4,330"
    },
    {
      age: "20-24",
      deaths: "5,075"
    },
    {
      age: "25-29",
      deaths: "4,898"
    },
    {
      age: "30-34",
      deaths: "4,875"
    },
    {
      age: "35-39",
      deaths: "4,986"
    },
    {
      age: "40-44",
      deaths: "5,386"
    },
    {
      age: "45-49",
      deaths: "6,543"
    },
    {
      age: "50-54",
      deaths: "8,872"
    },
    {
      age: "55-59",
      deaths: "11,482"
    },
    {
      age: "60-64",
      deaths: "15,234"
    },
    {
      age: "65-69",
      deaths: "17,540"
    },
    {
      age: "70-74",
      deaths: "20,629"
    },
    {
      age: "75-79",
      deaths: "22,016"
    },
    {
      age: "80-84",
      deaths: "18,484"
    },
    {
      age: "85-89",
      deaths: "10,942"
    },
    {
      age: "90-94",
      deaths: "4,368"
    },
    {
      age: "95",
      deaths: "1,299"
    }
  ],
  1995: [
    {
      age: "0-4",
      deaths: "59,832"
    },
    {
      age: "5-9",
      deaths: "5,994"
    },
    {
      age: "10-14",
      deaths: "3,268"
    },
    {
      age: "15-19",
      deaths: "4,280"
    },
    {
      age: "20-24",
      deaths: "5,154"
    },
    {
      age: "25-29",
      deaths: "5,220"
    },
    {
      age: "30-34",
      deaths: "5,344"
    },
    {
      age: "35-39",
      deaths: "5,786"
    },
    {
      age: "40-44",
      deaths: "6,433"
    },
    {
      age: "45-49",
      deaths: "7,115"
    },
    {
      age: "50-54",
      deaths: "9,194"
    },
    {
      age: "55-59",
      deaths: "12,204"
    },
    {
      age: "60-64",
      deaths: "16,301"
    },
    {
      age: "65-69",
      deaths: "19,845"
    },
    {
      age: "70-74",
      deaths: "22,192"
    },
    {
      age: "75-79",
      deaths: "22,747"
    },
    {
      age: "80-84",
      deaths: "20,684"
    },
    {
      age: "85-89",
      deaths: "13,237"
    },
    {
      age: "90-94",
      deaths: "5,557"
    },
    {
      age: "95",
      deaths: "1,661"
    }
  ],
  2000: [
    {
      age: "0-4",
      deaths: "52,619"
    },
    {
      age: "5-9",
      deaths: "5,449"
    },
    {
      age: "10-14",
      deaths: "3,239"
    },
    {
      age: "15-19",
      deaths: "4,351"
    },
    {
      age: "20-24",
      deaths: "5,310"
    },
    {
      age: "25-29",
      deaths: "5,623"
    },
    {
      age: "30-34",
      deaths: "5,901"
    },
    {
      age: "35-39",
      deaths: "6,455"
    },
    {
      age: "40-44",
      deaths: "7,338"
    },
    {
      age: "45-49",
      deaths: "8,407"
    },
    {
      age: "50-54",
      deaths: "9,811"
    },
    {
      age: "55-59",
      deaths: "12,406"
    },
    {
      age: "60-64",
      deaths: "16,835"
    },
    {
      age: "65-69",
      deaths: "21,091"
    },
    {
      age: "70-74",
      deaths: "24,723"
    },
    {
      age: "75-79",
      deaths: "24,615"
    },
    {
      age: "80-84",
      deaths: "21,954"
    },
    {
      age: "85-89",
      deaths: "15,487"
    },
    {
      age: "90-94",
      deaths: "7,027"
    },
    {
      age: "95",
      deaths: "2,184"
    }
  ],
  2005: [
    {
      age: "0-4",
      deaths: "45,828"
    },
    {
      age: "5-9",
      deaths: "5,010"
    },
    {
      age: "10-14",
      deaths: "3,080"
    },
    {
      age: "15-19",
      deaths: "4,366"
    },
    {
      age: "20-24",
      deaths: "5,385"
    },
    {
      age: "25-29",
      deaths: "5,811"
    },
    {
      age: "30-34",
      deaths: "6,286"
    },
    {
      age: "35-39",
      deaths: "7,055"
    },
    {
      age: "40-44",
      deaths: "7,940"
    },
    {
      age: "45-49",
      deaths: "9,374"
    },
    {
      age: "50-54",
      deaths: "11,242"
    },
    {
      age: "55-59",
      deaths: "12,864"
    },
    {
      age: "60-64",
      deaths: "16,763"
    },
    {
      age: "65-69",
      deaths: "21,618"
    },
    {
      age: "70-74",
      deaths: "26,221"
    },
    {
      age: "75-79",
      deaths: "27,496"
    },
    {
      age: "80-84",
      deaths: "23,788"
    },
    {
      age: "85-89",
      deaths: "16,670"
    },
    {
      age: "90-94",
      deaths: "8,470"
    },
    {
      age: "95",
      deaths: "2,848"
    }
  ],
  2010: [
    {
      age: "0-4",
      deaths: "38,234"
    },
    {
      age: "5-9",
      deaths: "4,461"
    },
    {
      age: "10-14",
      deaths: "2,777"
    },
    {
      age: "15-19",
      deaths: "4,066"
    },
    {
      age: "20-24",
      deaths: "5,219"
    },
    {
      age: "25-29",
      deaths: "5,589"
    },
    {
      age: "30-34",
      deaths: "6,061"
    },
    {
      age: "35-39",
      deaths: "6,915"
    },
    {
      age: "40-44",
      deaths: "7,954"
    },
    {
      age: "45-49",
      deaths: "9,551"
    },
    {
      age: "50-54",
      deaths: "12,040"
    },
    {
      age: "55-59",
      deaths: "14,557"
    },
    {
      age: "60-64",
      deaths: "17,279"
    },
    {
      age: "65-69",
      deaths: "21,563"
    },
    {
      age: "70-74",
      deaths: "27,243"
    },
    {
      age: "75-79",
      deaths: "29,418"
    },
    {
      age: "80-84",
      deaths: "26,915"
    },
    {
      age: "85-89",
      deaths: "18,607"
    },
    {
      age: "90-94",
      deaths: "9,406"
    },
    {
      age: "95",
      deaths: "3,623"
    }
  ],
  2015: [
    {
      age: "0-4",
      deaths: "31,822"
    },
    {
      age: "5-9",
      deaths: "3,846"
    },
    {
      age: "10-14",
      deaths: "2,449"
    },
    {
      age: "15-19",
      deaths: "3,614"
    },
    {
      age: "20-24",
      deaths: "4,703"
    },
    {
      age: "25-29",
      deaths: "5,141"
    },
    {
      age: "30-34",
      deaths: "5,539"
    },
    {
      age: "35-39",
      deaths: "6,293"
    },
    {
      age: "40-44",
      deaths: "7,432"
    },
    {
      age: "45-49",
      deaths: "9,260"
    },
    {
      age: "50-54",
      deaths: "12,109"
    },
    {
      age: "55-59",
      deaths: "15,507"
    },
    {
      age: "60-64",
      deaths: "19,574"
    },
    {
      age: "65-69",
      deaths: "22,474"
    },
    {
      age: "70-74",
      deaths: "27,326"
    },
    {
      age: "75-79",
      deaths: "30,798"
    },
    {
      age: "80-84",
      deaths: "29,222"
    },
    {
      age: "85-89",
      deaths: "22,020"
    },
    {
      age: "90-94",
      deaths: "11,223"
    },
    {
      age: "95",
      deaths: "4,446"
    }
  ],
  2020: [
    {
      age: "0-4",
      deaths: "27,507"
    },
    {
      age: "5-9",
      deaths: "3,445"
    },
    {
      age: "10-14",
      deaths: "2,250"
    },
    {
      age: "15-19",
      deaths: "3,353"
    },
    {
      age: "20-24",
      deaths: "4,335"
    },
    {
      age: "25-29",
      deaths: "4,760"
    },
    {
      age: "30-34",
      deaths: "5,364"
    },
    {
      age: "35-39",
      deaths: "6,143"
    },
    {
      age: "40-44",
      deaths: "7,237"
    },
    {
      age: "45-49",
      deaths: "9,206"
    },
    {
      age: "50-54",
      deaths: "12,524"
    },
    {
      age: "55-59",
      deaths: "16,198"
    },
    {
      age: "60-64",
      deaths: "21,281"
    },
    {
      age: "65-69",
      deaths: "25,795"
    },
    {
      age: "70-74",
      deaths: "28,975"
    },
    {
      age: "75-79",
      deaths: "31,768"
    },
    {
      age: "80-84",
      deaths: "31,604"
    },
    {
      age: "85-89",
      deaths: "24,871"
    },
    {
      age: "90-94",
      deaths: "13,955"
    },
    {
      age: "95",
      deaths: "5,704"
    }
  ]
};

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["0-4"];
    } else if (a === 1) {
      frequency = ["5-49"];
    } else if (a === 2) {
      frequency = ["50-64"];
    } else if (a === 3) {
      frequency = ["65-74"];
    } else if (a === 4) {
      frequency = ["75-84"];
    } else if (a === 5) {
      frequency = ["85-94"];
    } else if (a === 6) {
      frequency = ["95"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = ["65-69"];
    } else if (a === 1) {
      frequency = ["70-74"];
    } else if (a === 2) {
      frequency = ["75-79"];
    } else if (a === 3) {
      frequency = ["80-84"];
    } else if (a === 4) {
      frequency = ["85-89"];
    } else if (a === 5) {
      frequency = ["90-94"];
    } else if (a === 6) {
      frequency = ["95"];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = ["0-4"];
    } else if (a === 1) {
      frequency = [
        "5-9",
        "10-14",
        "15-19",
        "20-24",
        "25-29",
        "30-34",
        "35-39",
        "40-44",
        "45-49"
      ];
    } else if (a === 2) {
      frequency = ["50-54", "55-59", "60-64"];
    } else if (a === 3) {
      frequency = ["65-69", "70-74"];
    } else if (a === 4) {
      frequency = ["75-79", "80-84"];
    } else if (a === 5) {
      frequency = ["85-89", "90-94"];
    } else if (a === 6) {
      frequency = ["95"];
    }
  }
  return frequency;
};
class Worldwide extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalEightyFiveNJDataAge = [];
    let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    let mortalZeroNJAge = [];
    let mortalFiftyNJData = [];
    let mortalFiftyNJ = [];
    let mortalSeventyFiveNJData = [];
    let mortalSeventyFiveNJ = [];
    let mortalSixtyFiveNJData = [];
    let mortalSixtyFiveNJ = [];
    let mortalEightyFiveNJData = [];
    let mortalEightyFiveNJ = [];
    let mortalNinetyFiveNJData = [];
    let mortalNinetyFiveNJ = [];
    let mortalOneTenNJData = [];
    let mortalOneTenNJ = [];
    let mZeroNJData = [];
    let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];
    let mZeroNJDataAge = [];
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    let avgLifetime = {};
    const numer = (d) => Number(String(d).replaceAll(",", ""));
    const val = (d, p = 1000) => numer(d) * 1000 * p;
    // Math.round((numer(d) / 100000) * numer(p) );
    Object.keys(worldwide).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);

      Object.values(worldwide)[i].forEach((x, i) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        //console.log(x);
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            avgLifetime[x.age].total +
            val(x.deaths) /*val(x.deaths, popp))*/ / avgLifetime[x.age].total
        };
        avgLifetime[x.age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      averageLifetimeData.push([x.year, x.total / x.length]);
    });
    Object.keys(worldwide).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.values(worldwide)[i].forEach((x) => {
        const pop = numer(popdata[year].find((y) => y.age === x.age).pop);
        if (x.age === "0-4") {
          mZeroNJData.push([year, val(x.deaths, pop)]);
          mZeroNJDataAge.push([year, pop]);
        } else if (
          x.age === "5-9" ||
          x.age === "10-14" ||
          x.age === "15-19" ||
          x.age === "20-24" ||
          x.age === "25-29" ||
          x.age === "30-34" ||
          x.age === "35-39" ||
          x.age === "40-44" ||
          x.age === "45-49"
        ) {
          mFiftyNJData.push([year, val(x.deaths, pop)]);
          mFiftyNJDataAge.push([year, pop]);
        } else if (
          x.age === "50-54" ||
          x.age === "55-59" ||
          x.age === "60-64"
        ) {
          mSixtyFiveNJData.push([year, val(x.deaths, pop)]);
          mSixtyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "65-69" || x.age === "70-74") {
          mSeventyFiveNJData.push([year, val(x.deaths, pop)]);
          mSeventyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "75-79" || x.age === "80-84") {
          mEightyFiveNJData.push([year, val(x.deaths, pop)]);
          mEightyFiveNJDataAge.push([year, pop]);
        } else if (x.age === "85-89" || x.age === "90-94") {
          mNinetyFiveNJData.push([year, val(x.deaths, pop)]);
        } else if (
          x.age === "95" ||
          x.age === "100-104" ||
          x.age === "105-109" ||
          x.age === "110"
        ) {
          mOneTenNJData.push([year, val(x.deaths, pop)]);
        }
      });
    });
    date.forEach((x) => {
      let totmO = 0;
      mOneTenNJData.forEach((obj) => {
        if (obj[0] === x) totmO = totmO + obj[1];
      });
      mortalOneTenNJ.push(totmO);
      mortalOneTenNJData.push([x, totmO]);

      let totmN = 0;
      mNinetyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmN = totmN + obj[1];
      });
      mortalNinetyFiveNJ.push(totmN);
      mortalNinetyFiveNJData.push([x, totmN]);
      let totmE = 0;
      mEightyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmE = totmE + obj[1];
      });
      mortalEightyFiveNJ.push(totmE);
      mortalEightyFiveNJData.push([x, totmE]);
      let totmSe = 0;
      mSeventyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmSe = totmSe + obj[1];
      });
      mortalSeventyFiveNJ.push(totmSe);
      mortalSeventyFiveNJData.push([x, totmSe]);
      let totmS = 0;
      mSixtyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmS = totmS + obj[1];
      });
      mortalSixtyFiveNJ.push(totmS);
      mortalSixtyFiveNJData.push([x, totmS]);
      let totmF = 0;
      mFiftyNJData.forEach((obj) => {
        if (obj[0] === x) totmF = totmF + obj[1];
      });
      mortalFiftyNJ.push(totmF);
      mortalFiftyNJData.push([x, totmF]);
      let totmEFA = 0;
      mEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmEFA = totmEFA + obj[1];
      });
      mortalEightyFiveNJAge.push(totmEFA);
      mortalEightyFiveNJDataAge.push([x, totmEFA]);
      let totmSeA = 0;
      mSeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSeA = totmSeA + obj[1];
      });
      mortalSeventyFiveNJAge.push(totmSeA);
      mortalSeventyFiveNJDataAge.push([x, totmSeA]);
      let totmSA = 0;
      mSixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSA = totmSA + obj[1];
      });
      mortalSixtyFiveNJAge.push(totmSA);
      mortalSixtyFiveNJDataAge.push([x, totmSA]);
      let totmFA = 0;
      mFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmFA = totmFA + obj[1];
      });
      mortalFiftyNJAge.push(totmFA);
      mortalFiftyNJDataAge.push([x, totmFA]);
      let totmZA = 0;
      mZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmZA = totmZA + obj[1];
      });
      mortalZeroNJAge.push(totmZA);
      mortalZeroNJDataAge.push([x, totmZA]);
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([x, totmZ]);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...mortalZeroNJ);
    const all = [
      ...mortalZeroNJ,
      ...mortalFiftyNJ,
      ...mortalSixtyFiveNJ,
      ...mortalSeventyFiveNJ,
      ...mortalEightyFiveNJ,
      ...mortalNinetyFiveNJ,
      ...mortalOneTenNJ
    ];
    var highlifetime = Math.max(...averageLifetime);
    var highDeaths = Math.max(...all);
    var cappop = Math.max(
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );
    noData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      cappop,
      highlifetime,
      averageLifetimeData,
      date,
      mortalZeroNJData,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalFiftyNJData,
      mortalSixtyFiveNJData,
      mortalSeventyFiveNJData,
      mortalEightyFiveNJData,
      mortalNinetyFiveNJData,
      mortalOneTenNJData,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths,
      chosenRate: true
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    const { chosenRate, chosenfrequency } = this.state;
    if (
      chosenRate !== this.state.lastChosenRate ||
      this.state.lastchosenfrequency !== chosenfrequency
    )
      this.setState(
        {
          lastchosenfrequency: chosenfrequency,
          lastChosenRate: chosenRate
        },
        () => {
          let date = [];
          let noData = [];
          let mortalZeroNJData = [];
          var mortalZeroNJ = [];
          let mortalZeroNJDataAge = [];
          let mortalZeroNJAge = [];
          let mortalFiftyNJDataAge = [];
          let mortalFiftyNJAge = [];
          let mortalSixtyFiveNJDataAge = [];
          let mortalSixtyFiveNJAge = [];
          let mortalSeventyFiveNJDataAge = [];
          let mortalSeventyFiveNJAge = [];
          let mortalEightyFiveNJDataAge = [];
          let mortalEightyFiveNJAge = [];
          let mortalFiftyNJData = [];
          let mortalFiftyNJ = [];
          let mortalSixtyFiveNJData = [];
          let mortalSixtyFiveNJ = [];
          let mortalSeventyFiveNJData = [];
          let mortalSeventyFiveNJ = [];
          let mortalEightyFiveNJData = [];
          let mortalEightyFiveNJ = [];
          let mortalNinetyFiveNJData = [];
          let mortalNinetyFiveNJ = [];
          let mortalOneTenNJData = [];
          let mortalOneTenNJ = [];
          let mZeroNJData = [];
          let mZeroNJDataAge = [];
          let mFiftyNJDataAge = [];
          let mSixtyFiveNJDataAge = [];
          let mSeventyFiveNJDataAge = [];
          let mEightyFiveNJDataAge = [];
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];
          Object.keys(worldwide).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = popdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const numer = (d) => Number(String(d).replaceAll(",", ""));
            const val = (d, p = 1000, rate = 1) => (numer(d) * p * 1000) / rate;
            // Math.round((numer(d) / 100000) * numer(p) );
            Object.values(worldwide)[i].forEach((x) => {
              const popp = numer(
                popdata[year].find((y) => y.age === x.age).pop
              );
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJDataAge.push([year, chosenRate ? popp : popp]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJDataAge.push([year, chosenRate ? popp / 9 : popp]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([year, chosenRate ? popp / 3 : popp]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  chosenRate ? popp / 2 : popp
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([year, chosenRate ? popp / 2 : popp]);
              }
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 10) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 3) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 2) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 2) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 2) : val(x.deaths, popp)
                ]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  chosenRate ? val(x.deaths, popp, 4) : val(x.deaths, popp)
                ]);
              }
            });
          });
          date.forEach((x) => {
            let totmO = 0;
            mOneTenNJData.forEach((obj) => {
              if (obj[0] === x) totmO = totmO + obj[1];
            });
            mortalOneTenNJ.push(totmO);
            mortalOneTenNJData.push([x, totmO]);

            let totmN = 0;
            mNinetyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmN = totmN + obj[1];
            });
            mortalNinetyFiveNJ.push(totmN);
            mortalNinetyFiveNJData.push([x, totmN]);
            let totmE = 0;
            mEightyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmE = totmE + obj[1];
            });
            mortalEightyFiveNJ.push(totmE);
            mortalEightyFiveNJData.push([x, totmE]);
            let totmSe = 0;
            mSeventyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmSe = totmSe + obj[1];
            });
            mortalSeventyFiveNJ.push(totmSe);
            mortalSeventyFiveNJData.push([x, totmSe]);
            let totmS = 0;
            mSixtyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmS = totmS + obj[1];
            });
            mortalSixtyFiveNJ.push(totmS);
            mortalSixtyFiveNJData.push([x, totmS]);
            let totmF = 0;
            mFiftyNJData.forEach((obj) => {
              if (obj[0] === x) totmF = totmF + obj[1];
            });
            mortalFiftyNJ.push(totmF);
            mortalFiftyNJData.push([x, totmF]);
            let totmEFA = 0;
            mEightyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmEFA = totmEFA + obj[1];
            });
            mortalEightyFiveNJAge.push(totmEFA);
            mortalEightyFiveNJDataAge.push([x, totmEFA]);
            let totmSeA = 0;
            mSeventyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSeA = totmSeA + obj[1];
            });
            mortalSeventyFiveNJAge.push(totmSeA);
            mortalSeventyFiveNJDataAge.push([x, totmSeA]);
            let totmSA = 0;
            mSixtyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSA = totmSA + obj[1];
            });
            mortalSixtyFiveNJAge.push(totmSA);
            mortalSixtyFiveNJDataAge.push([x, totmSA]);
            let totmFA = 0;
            mFiftyNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmFA = totmFA + obj[1];
            });
            mortalFiftyNJAge.push(totmFA);
            mortalFiftyNJDataAge.push([x, totmFA]);
            let totmZA = 0;
            mZeroNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmZA = totmZA + obj[1];
            });
            mortalZeroNJAge.push(totmZA);
            mortalZeroNJDataAge.push([x, totmZA]);
            let totmZ = 0;
            mZeroNJData.forEach((obj) => {
              if (obj[0] === x) totmZ = totmZ + obj[1];
            });
            mortalZeroNJ.push(totmZ);
            mortalZeroNJData.push([x, totmZ]);
          });

          var lowDate = Math.min(...date);
          var highDate = Math.max(...date);
          var lowDeaths = 0; //Math.min(...mortalZeroNJ);
          const all = [
            ...mortalZeroNJ,
            ...mortalFiftyNJ,
            ...mortalSixtyFiveNJ,
            ...mortalSeventyFiveNJ,
            ...mortalEightyFiveNJ,
            ...mortalNinetyFiveNJ,
            ...mortalOneTenNJ
          ];
          var highDeaths = Math.max(...all);
          var cappop = Math.max(
            ...mortalZeroNJAge,
            ...mortalFiftyNJAge,
            ...mortalSixtyFiveNJAge,
            ...mortalSeventyFiveNJAge,
            ...mortalEightyFiveNJAge
          );
          noData.sort((a, b) => a[0] - b[0]);
          mortalZeroNJData.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
          this.setState({
            date,
            cappop,
            mortalZeroNJData,
            mortalFiftyNJDataAge,
            mortalSixtyFiveNJDataAge,
            mortalSeventyFiveNJDataAge,
            mortalEightyFiveNJDataAge,
            mortalFiftyNJData,
            mortalSixtyFiveNJData,
            mortalSeventyFiveNJData,
            mortalEightyFiveNJData,
            mortalNinetyFiveNJData,
            mortalOneTenNJData,
            noData,
            yAxis: highDeaths - lowDeaths,
            xAxis: highDate - lowDate,
            lowDate,
            highDate,
            lowDeaths,
            highDeaths
          });
        }
      );
  };
  render() {
    const yaxis = this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const mortalZeroNJData = this.state.mortalZeroNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.cappop) * 150
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalFiftyNJData = this.state.mortalFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalSixtyFiveNJData = this.state.mortalSixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSeventyFiveNJData = this.state.mortalSeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalEightyFiveNJData = this.state.mortalEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalNinetyFiveNJData = this.state.mortalNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalOneTenNJData = this.state.mortalOneTenNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const averageLifetimeData = this.state.averageLifetimeData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / this.state.highlifetime) * 150
    ]);
    const ite = { border: "1px grey dashed", width: "max-content" };
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    return (
      <div style={this.props.style}>
        {/*<div
          style={{
            position
            :"relative",
            top
            :"0px",
            height
            :"min-content",
            flexWrap
            :"wrap",
            display
            :"flex"
          }}
        >
          {["New Jersey"].map((x, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() =>
                  this.setState({ () => {
                    clearTimeout(,his.unHover);
                    this.unHover = setTimeout(
                      () => this.setState({ hoveredBtn: x }),
                      200
                    );
                  })
                }
                style={{
                  transition
                  :".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === x ? 7 : 0
                  }px  ${this.state.hoveredBtn === x ? 2 : 0.5}px black`,
                  alignItems
                  :"center",
                  padding
                  :"4px 7px",
                  border: this.state.chosenState === x ? "1px solid black" : {1
                  display
                  :"flex",                }}
              >
                <div onClick={() => this.setState({ chosenState: x })}>{x}</div>
                &nbsp;
                {this.state.chosenState === x && (
                  <button onClick={() => this.setState({ chosenState: null })}>
                    &times;
                  </button>
                )}
              </div>
            );
          })}
        </div>*/}
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div style={labelstyle}>
            <div
              style={buttonStyle}
              onClick={() =>
                this.setState(
                  this.state.chosenRate && this.state.chosenfrequency
                    ? { chosenRate: false, chosenfrequency: false }
                    : !this.state.chosenfrequency
                    ? { chosenfrequency: true }
                    : { chosenRate: true }
                )
              }
            >
              {chosenRate
                ? "population per 5yr "
                : `highest accu yearly mortality `}
            </div>
            <button
              style={buttonStyle}
              onClick={() => {
                this.setState({
                  yaxis: !this.state.yaxis
                });
              }}
            >
              {!this.state.yaxis
                ? "pop"
                : this.state.chosenfrequency && !chosenRate
                ? "high"
                : "cohort"}
            </button>
            <div>
              -&nbsp;
              <br />
              {shortNumber(Math.round(this.state.highDeaths /*/5 */))}
            </div>
            <div
              style={{
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {lowDate}&nbsp;
              {this.state.highDate}
            </div>
            <br />
            {/* <div
              style={{
                textAlign
                :"right",
                top
                :"0px",
                height
                :"min-content",
                display
                :"flex",
                position
                :"relative",
                right
                :"0px"
              }}
            >
              {this.state.highlifetime} average
            </div>
            {/*<div
              style={{
                top
                :"200px",
                height
                :"min-content",
                display
                :"flex",
                position
                :"absolute",
                right
                :"0px",
                flexDirection
                :"column"
              }}
            >
              {this.state.lowDeaths}
            </div>*/}
          </div>
          <div style={{ transform: "translate(0px,200px)" }}>
            <svg
              className="all"
              style={linecss}
              xmlns="http://www.w3.org/2000/svg"
            >
              {noData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="rgb(230,230,230)"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalZeroNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {/*<BasisCurve
              showPoints={false}
              strokeWidth={4}
              stroke="purple"
              data={mortalZeroNJData}
            />*/}
              {mortalZeroNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalFiftyNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSixtyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSeventyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalEightyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalFiftyNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalSixtyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalSeventyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalEightyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalNinetyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="red"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalOneTenNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="black"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {averageLifetimeData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="black"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            </svg>
          </div>
          <div style={labelstyle}>
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "max-content"
              }}
            >
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "white"
                  }}
                />
                {frequency(this.state.chosenfrequency, 0, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "purple"
                  }}
                />
                {frequency(this.state.chosenfrequency, 1, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "blue"
                  }}
                />
                {frequency(this.state.chosenfrequency, 2, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "green"
                  }}
                />
                {frequency(this.state.chosenfrequency, 3, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                {frequency(this.state.chosenfrequency, 4, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "red"
                  }}
                />
                {frequency(this.state.chosenfrequency, 5, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                {
                  frequency(this.state.chosenfrequency, 6, true) //chosenfrequency, index, range defaults cohort
                }
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%"
          }}
        >
          {this.state.date.map((x) => (
            <div
              key={x}
              style={{
                width: "max-content",
                wordBreak: "none",
                margin: "0px 10px"
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Worldwide;

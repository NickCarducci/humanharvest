import React from "react";
import { yearly, yearlypop } from "./mortal";
import { linecss, shortNumber } from "./vaxx";

const accidentsAge = {
  Population: [
    {
      1975: 45851304,
      1976: 45000704,
      1977: 44337332,
      1978: 43907467,
      1979: 43778959,
      1980: 43914342,
      1981: 44049940,
      1982: 44131596,
      1983: 44119297,
      1984: 43978044,
      1985: 44260136,
      1986: 44755454,
      1987: 45348247,
      1988: 45942966,
      1989: 46690604,
      1990: 47472527,
      1991: 48240747,
      1992: 48903668,
      1993: 49335864,
      1994: 49692462,
      1995: 49920484,
      1996: 50085188,
      1997: 50364983,
      1998: 50527476,
      1999: 50667139,
      2000: 52219423,
      2001: 52341395,
      2002: 52332306,
      2003: 52187602,
      2004: 52151406,
      2005: 52149395,
      2006: 52306908,
      2007: 52585809,
      2008: 52929779,
      2009: 53753412,
      2010: 52937278,
      2011: 52921253,
      2012: 52855061,
      2013: 52719631,
      2014: 52676380,
      2015: 52764080,
      2016: 52811215,
      2017: 52726410,
      2018: 52553599,
      2019: 52266740,
      2020: 51887147,
      Age: 13
    },
    {
      1975: 29795023,
      1976: 29909414,
      1977: 29800313,
      1978: 29543252,
      1979: 29077607,
      1980: 28486487,
      1981: 27743947,
      1982: 27160586,
      1983: 26737497,
      1984: 26435885,
      1985: 26001247,
      1986: 25592481,
      1987: 25209615,
      1988: 25004445,
      1989: 24664300,
      1990: 24404795,
      1991: 24066587,
      1992: 24163175,
      1993: 24664091,
      1994: 25219838,
      1995: 25764300,
      1996: 26357198,
      1997: 26730812,
      1998: 27174728,
      1999: 27518156,
      2000: 28326412,
      2001: 28437711,
      2002: 28644313,
      2003: 29028500,
      2004: 29400392,
      2005: 29589854,
      2006: 29772198,
      2007: 29775943,
      2008: 29710307,
      2009: 29667279,
      2010: 30247014,
      2011: 29917216,
      2012: 29646417,
      2013: 29551607,
      2014: 29462818,
      2015: 29356330,
      2016: 29350222,
      2017: 29387954,
      2018: 29402794,
      2019: 29412828,
      2020: 29367208,
      Age: 19
    },
    {
      1975: 50998098,
      1976: 52745005,
      1977: 54497448,
      1978: 55909063,
      1979: 57499197,
      1980: 58814391,
      1981: 60563416,
      1982: 61099524,
      1983: 61840154,
      1984: 62491255,
      1985: 62961154,
      1986: 63115889,
      1987: 63032298,
      1988: 62784739,
      1989: 62494056,
      1990: 62282683,
      1991: 62025750,
      1992: 61427100,
      1993: 60582332,
      1994: 59629351,
      1995: 58712407,
      1996: 57753910,
      1997: 57046569,
      1998: 56421053,
      1999: 55961401,
      2000: 58971709,
      2001: 59465066,
      2002: 60046068,
      2003: 60599350,
      2004: 61003240,
      2005: 61180772,
      2006: 61527219,
      2007: 61623322,
      2008: 61990546,
      2009: 63105881,
      2010: 62914600,
      2011: 63965818,
      2012: 64900433,
      2013: 65681251,
      2014: 66367803,
      2015: 66762737,
      2016: 67142780,
      2017: 67381469,
      2018: 67504170,
      2019: 67647658,
      2020: 67664401,
      Age: 35
    },
    {
      1975: 74764829,
      1976: 75419921,
      1977: 76203083,
      1978: 77348222,
      1979: 78311107,
      1980: 79111522,
      1981: 79785591,
      1982: 81488902,
      1983: 82861204,
      1984: 84256661,
      1985: 85628410,
      1986: 87205537,
      1987: 88808046,
      1988: 90464406,
      1989: 92250762,
      1990: 94140108,
      1991: 96068111,
      1992: 98214539,
      1993: 100399648,
      1994: 102541525,
      1995: 104712328,
      1996: 106975953,
      1997: 109232426,
      1998: 111331195,
      1999: 113451312,
      2000: 117114739,
      2001: 119060436,
      2002: 120913207,
      2003: 122772578,
      2004: 124762848,
      2005: 126831714,
      2006: 128907361,
      2007: 130500566,
      2008: 131908058,
      2009: 132693708,
      2010: 135270594,
      2011: 136306915,
      2012: 137323658,
      2013: 138067096,
      2014: 139015319,
      2015: 140231069,
      2016: 141361052,
      2017: 141662252,
      2018: 142087330,
      2019: 142410359,
      2020: 142779669,
      Age: 70
    },
    {
      1975: 14563945,
      1976: 14960120,
      1977: 15401249,
      1978: 15876541,
      1979: 16388617,
      1980: 16897977,
      1981: 17322714,
      1982: 17783888,
      1983: 18233751,
      1984: 18662938,
      1985: 19072785,
      1986: 19463480,
      1987: 19890817,
      1988: 20302280,
      1989: 20719397,
      1990: 21164283,
      1991: 21751897,
      1992: 22321217,
      1993: 22800673,
      1994: 23243845,
      1995: 23693757,
      1996: 24056323,
      1997: 24408817,
      1998: 24793551,
      1999: 25092805,
      2000: 25559879,
      2001: 25797467,
      2002: 26005326,
      2003: 26200946,
      2004: 26337518,
      2005: 26658669,
      2006: 26884798,
      2007: 27135517,
      2008: 27521034,
      2009: 27786270,
      2010: 27957657,
      2011: 28472279,
      2012: 29152093,
      2013: 30040362,
      2014: 30864009,
      2015: 31624778,
      2016: 32406486,
      2017: 33964043,
      2018: 35290306,
      2019: 36592368,
      2020: 37785698,
      Age: 80
    }
  ],
  Number: [
    {
      1975: 3643,
      1976: 3424,
      1977: 3347,
      1978: 3367,
      1979: 3171,
      1980: 3048,
      1981: 2733,
      1982: 2573,
      1983: 2518,
      1984: 2422,
      1985: 2469,
      1986: 2537,
      1987: 2654,
      1988: 2701,
      1989: 2658,
      1990: 2332,
      1991: 2257,
      1992: 2165,
      1993: 2164,
      1994: 2301,
      1995: 2201,
      1996: 2186,
      1997: 2108,
      1998: 2032,
      1999: 1997,
      2000: 1888,
      2001: 1751,
      2002: 1617,
      2003: 1643,
      2004: 1645,
      2005: 1529,
      2006: 1430,
      2007: 1269,
      2008: 1047,
      2009: 1066,
      2010: 962,
      2011: 908,
      2012: 958,
      2013: 940,
      2014: 875,
      2015: 946,
      2016: 1033,
      2017: 949,
      2018: 890,
      2019: 855,
      2020: 845,
      Age: 13
    },
    {
      1975: 8748,
      1976: 9356,
      1977: 9633,
      1978: 9940,
      1979: 9920,
      1980: 9524,
      1981: 8315,
      1982: 7323,
      1983: 6805,
      1984: 6952,
      1985: 6737,
      1986: 7466,
      1987: 7293,
      1988: 7242,
      1989: 6688,
      1990: 6364,
      1991: 5760,
      1992: 5215,
      1993: 5421,
      1994: 5632,
      1995: 5675,
      1996: 5819,
      1997: 5730,
      1998: 5610,
      1999: 5752,
      2000: 5685,
      2001: 5594,
      2002: 5954,
      2003: 5718,
      2004: 5645,
      2005: 5300,
      2006: 5159,
      2007: 4981,
      2008: 4070,
      2009: 3480,
      2010: 3121,
      2011: 3033,
      2012: 2837,
      2013: 2543,
      2014: 2630,
      2015: 2747,
      2016: 2837,
      2017: 2762,
      2018: 2496,
      2019: 2394,
      2020: 2738,
      Age: 19
    },
    {
      1975: 15074,
      1976: 15517,
      1977: 17287,
      1978: 18886,
      1979: 19675,
      1980: 20110,
      1981: 19887,
      1982: 17465,
      1983: 16853,
      1984: 17579,
      1985: 17031,
      1986: 18132,
      1987: 17676,
      1988: 17613,
      1989: 16512,
      1990: 16366,
      1991: 14949,
      1992: 13445,
      1993: 13456,
      1994: 13020,
      1995: 13330,
      1996: 12869,
      1997: 12334,
      1998: 11785,
      1999: 11840,
      2000: 12174,
      2001: 12375,
      2002: 12609,
      2003: 12365,
      2004: 12620,
      2005: 13023,
      2006: 13142,
      2007: 12531,
      2008: 11406,
      2009: 9940,
      2010: 9684,
      2011: 9633,
      2012: 10210,
      2013: 9908,
      2014: 9879,
      2015: 10608,
      2016: 11368,
      2017: 10932,
      2018: 10761,
      2019: 10259,
      2020: 11857,
      Age: 35
    },
    {
      1975: 13080,
      1976: 13137,
      1977: 13460,
      1978: 14020,
      1979: 14232,
      1980: 14219,
      1981: 13950,
      1982: 12685,
      1983: 12488,
      1984: 13006,
      1985: 13126,
      1986: 13263,
      1987: 14074,
      1988: 14458,
      1989: 14651,
      1990: 14568,
      1991: 13587,
      1992: 13414,
      1993: 13748,
      1994: 14251,
      1995: 15018,
      1996: 15496,
      1997: 15860,
      1998: 16185,
      1999: 16384,
      2000: 16700,
      2001: 16934,
      2002: 17374,
      2003: 17705,
      2004: 17707,
      2005: 18491,
      2006: 18233,
      2007: 17725,
      2008: 16538,
      2009: 15340,
      2010: 15015,
      2011: 14782,
      2012: 15614,
      2013: 15298,
      2014: 15073,
      2015: 16677,
      2016: 17601,
      2017: 17670,
      2018: 17585,
      2019: 17558,
      2020: 18642,
      Age: 70
    },
    {
      1975: 3775,
      1976: 3896,
      1977: 3859,
      1978: 3824,
      1979: 3772,
      1980: 3861,
      1981: 3871,
      1982: 3655,
      1983: 3734,
      1984: 4052,
      1985: 4206,
      1986: 4445,
      1987: 4555,
      1988: 4925,
      1989: 4943,
      1990: 4844,
      1991: 4843,
      1992: 4901,
      1993: 5221,
      1994: 5425,
      1995: 5509,
      1996: 5578,
      1997: 5872,
      1998: 5798,
      1999: 5657,
      2000: 5379,
      2001: 5425,
      2002: 5332,
      2003: 5363,
      2004: 5106,
      2005: 5047,
      2006: 4636,
      2007: 4631,
      2008: 4291,
      2009: 3995,
      2010: 4171,
      2011: 4071,
      2012: 4113,
      2013: 4150,
      2014: 4206,
      2015: 4427,
      2016: 4848,
      2017: 5037,
      2018: 5026,
      2019: 5232,
      2020: 4570,
      Age: 80
    }
  ]
};

const usdeaths = {
  1985: {
    homicides: 8,
    arson: 43.6,
    checkable: 504.1275,
    currency: 162.3,
    m2: 2416.5
  },
  1986: {
    homicides: 8.6,
    arson: 46.3,
    checkable: 586.85725,
    currency: 174.3,
    m2: 2612.8
  },
  1987: {
    homicides: 8.3,
    arson: 42.5,
    checkable: 639.56925,
    currency: 188.6,
    m2: 2782.3
  },
  1988: {
    homicides: 8.5,
    arson: 41,
    checkable: 663.4575,
    currency: 205.1,
    m2: 2931.1
  },
  1989: {
    homicides: 8.7,
    arson: 41.4,
    checkable: 665.316,
    currency: 217.3,
    m2: 3054
  },
  1990: {
    homicides: 9.4,
    arson: 41.7,
    checkable: 677.64675,
    currency: 235.1,
    m2: 3222.2
  },
  1991: {
    homicides: 9.8,
    arson: 41,
    checkable: 712.49975,
    currency: 259,
    m2: 3342.1
  },
  1992: {
    homicides: 9.3,
    arson: 40.8,
    checkable: 801.171,
    currency: 279.1,
    m2: 3404.6
  },
  1993: {
    homicides: 9.5,
    arson: 37.7,
    checkable: 883.78475,
    currency: 307.8,
    m2: 3439.8
  },
  1994: {
    homicides: 9,
    arson: 39.6,
    checkable: 920.37225,
    currency: 340.7,
    m2: 3483.4
  },
  1995: {
    homicides: 8.2,
    arson: 36.7,
    checkable: 895.859,
    currency: 366.8,
    m2: 3555.6
  },
  1996: {
    homicides: 7.4,
    arson: 34.6,
    checkable: 862.684,
    currency: 382.3,
    m2: 3729
  },
  1997: {
    homicides: 6.8,
    arson: 32.6,
    checkable: 833.33,
    currency: 410,
    m2: 3925.7
  },
  1998: {
    homicides: 6.3,
    arson: 29.8,
    checkable: 824.43725,
    currency: 442.2,
    m2: 4206.5
  },
  1999: {
    homicides: 5.7,
    arson: 28.8,
    checkable: 827.28875,
    currency: 486.3,
    m2: 4517.3
  },
  2000: {
    homicides: 5.5,
    arson: 24.7,
    checkable: 802.84225,
    currency: 522.8,
    m2: 4790.2
  },
  2001: {
    homicides: 5.6,
    arson: 27.7,
    checkable: 773.61975,
    currency: 555.1,
    m2: 5203.7
  },
  2002: {
    homicides: 5.6,
    arson: 26.8,
    checkable: 772.89525,
    currency: 609,
    m2: 5591.3
  },
  2003: {
    homicides: 5.7,
    arson: 25,
    checkable: 816.10925,
    currency: 647.6,
    m2: 5981.4
  },
  2004: {
    homicides: 5.5,
    arson: 23.6,
    checkable: 860.8315,
    currency: 680.7,
    m2: 6266.8
  },
  2005: {
    homicides: 5.6,
    arson: 23.1,
    checkable: 882.65975,
    currency: 710.2,
    m2: 6535.1
  },
  2006: {
    homicides: 5.8,
    arson: 24.4,
    checkable: 847.36025,
    currency: 740.4,
    m2: 6877.4
  },
  2007: {
    homicides: 5.7,
    arson: 22.6,
    checkable: 793.768,
    currency: 756.6,
    m2: 7298.1
  },
  2008: {
    homicides: 5.4,
    arson: 21.6,
    checkable: 791.01875,
    currency: 776.3,
    m2: 7790.8
  },
  2009: {
    homicides: 5,
    arson: 19.5,
    checkable: 979.37575,
    currency: 851.8,
    m2: 8416
  },
  2010: {
    homicides: 4.8,
    arson: 18.1,
    checkable: 1092.49325,
    currency: 888.7,
    m2: 8626.1
  },
  2011: {
    homicides: 4.7,
    arson: 17.5,
    checkable: 1372.09275,
    currency: 964.2,
    m2: 9256
  },
  2012: {
    homicides: 4.7,
    arson: 17.6,
    checkable: 1574.12625,
    currency: 1050.7,
    m2: 10050
  },
  2013: {
    homicides: 4.5,
    arson: 14.9,
    checkable: 1791.016,
    currency: 1127.5,
    m2: 10727.3
  },
  2014: {
    homicides: 4.4,
    arson: 14.5,
    checkable: 2023.32525,
    currency: 1211.5,
    m2: 11388.8
  },
  2015: {
    homicides: 4.9,
    arson: 13.8,
    checkable: 2191.676,
    currency: 1301,
    m2: 12045.1
  },
  2016: {
    homicides: 5.4,
    arson: 14.2,
    checkable: 2328.94825,
    currency: 1383.9,
    m2: 12860.1
  },
  2017: {
    homicides: 5.3,
    arson: 13.2,
    checkable: 2521.21825,
    currency: 1479.3,
    m2: 13590.8
  },
  2018: {
    homicides: 5,
    arson: 12.1,
    checkable: 2609.02025,
    currency: 1583.1,
    m2: 14103.9
  },
  2019: {
    homicides: 5.1,
    arson: 10.9,
    checkable: 2708.362,
    currency: 1665.9,
    m2: 14818.2
  },
  2020: {
    homicides: 6.5,
    arson: 13.2,
    checkable: 4188.1175,
    currency: 1853.8,
    m2: 17650.6
  },
  2021: {
    homicides: 6.9,
    arson: null,
    checkable: 6181.37225,
    currency: 2070.3,
    m2: 20526
  },
  2022: {
    homicides: null,
    arson: null,
    checkable: 7020.62275,
    currency: 2178.8,
    m2: 21571
  }
};
const adultuse = [
  [1975, 47.3],
  [1976, 52.8],
  [1977, 86.4],
  [1978, 59.2],
  [1979, 60.4],
  [1980, 60.3],
  [1981, 59.5],
  [1982, 58.7],
  [1983, 57],
  [1984, 54.9],
  [1985, 54.2],
  [1986, 50.9],
  [1987, 50.2],
  [1988, 47.2],
  [1989, 43.7],
  [1990, 40.7],
  [1991, 36.7],
  [1992, 32.6],
  [1993, 35.3],
  [1994, 38.2],
  [1995, 41.7],
  [1996, 44.9],
  [1997, 49.6],
  [1998, 49.1],
  [1999, 49.7],
  [2000, 48.8],
  [2001, 49],
  [2002, 47.8],
  [2003, 46.1],
  [2004, 45.7],
  [2005, 44.8],
  [2006, 42.3],
  [2007, 41.8],
  [2008, 42.6],
  [2009, 42],
  [2010, 43.8],
  [2011, 45.5],
  [2012, 45.2],
  [2013, 45.5],
  [2014, 44.4],
  [2015, 44.7],
  [2016, 44.5],
  [2017, 45],
  [2018, 43.6],
  [2019, 43.7],
  [2020, 43.7],
  [2021, 38.6],
  [2022, 38.3]
];
export default class Murders extends React.Component {
  constructor(props) {
    super(props);

    const minAge = 20,
      maxAge = 34;
    let dates = [];
    let marijuana = [];
    let allaccidents = [];
    let allAccidents = [];
    let alldeaths = [];
    let allarson = [];
    let checkable = [];
    let currency = [];
    let m2 = [];
    let all = [];
    let money = [];

    Object.keys(usdeaths).forEach((yr) => {
      const year = Number(yr);
      const data = usdeaths[year];
      dates.push(year);
      marijuana.push([year, adultuse.find((x) => x[0] === year)[1]]);
      if (data.currency) {
        currency.push([year, data.currency]);
        money.push(data.currency);
      }
      if (data.checkable) {
        checkable.push([year, data.checkable]);
        money.push(data.checkable);
      }
      if (data.m2) {
        m2.push([year, data.m2]);
        money.push(data.m2);
      }
      if (!data.homicides) return null;
      all.push(data.homicides);
      alldeaths.push([year, data.homicides]);
      if (!data.arson) return null;
      all.push(data.arson);
      allarson.push([year, data.arson]);
    });
    Object.keys(accidentsAge).forEach((key) => {
      let yearSet = [];
      if (key !== "Population") return null;
      var ages = accidentsAge[key];
      /*var age = 0,
        nineteens = yearSet.find((obj) => {
          console.log(obj);
          age = obj[1];
          const forward =
            obj[0] === "Age" && age === obj[1] ? age === 19 : null;
          return forward;
        });*/
      console.log(ages);
      ages.forEach((nineteen) => {
        Object.keys(nineteen).forEach((yr) => {
          const year = Number(yr);
          if (yr === "Age" || nineteen["Age"] !== 19) return null;
          allaccidents.push(nineteen[yr]);
          allAccidents.push([year, nineteen[yr]]);
          dates.push(year);
        });
      });
    });
    console.log(allaccidents);
    var highDeaths = Math.max(...all),
      lowDeaths = Math.min(...all),
      highAccidents = Math.max(...allaccidents),
      lowAccidents = Math.min(...allaccidents),
      highDate = Math.max(...dates),
      lowDate = Math.min(...dates),
      highMoney = Math.max(...money),
      lowMoney = Math.min(...money);

    this.state = {
      showarson: true,
      noData: [],
      marijuana,
      allaccidents,
      alldeaths,
      allarson,
      checkable,
      currency,
      m2,
      lowMoney,
      highMoney,
      lowAccidents,
      allAccidents,
      highAccidents,
      yAxisAccidents: highAccidents - lowAccidents,
      yAxisMoney: highMoney - lowMoney,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      highDeaths,
      lowDeaths,
      highDate,
      lowDate,
      minAge,
      maxAge
    };
  }
  render() {
    const { lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const allaccidents = this.state.allAccidents.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowAccidents) / this.state.yAxisAccidents) * 150
    ]);
    const alldeaths = this.state.alldeaths.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const allarson = this.state.allarson.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const checkable = this.state.checkable.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const currency = this.state.currency.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const m2 = this.state.m2.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const marijuana = this.state.marijuana.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / 100) * 150
    ]);
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      justifyContent:
        this.props.lastWidth < 700 ? "space-between" : "flex-start",
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
    const space = " ";
    //console.log(deathsData);
    return (
      <div style={{ ...this.props.style, position: "relative" }}>
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div style={labelstyle}>
            <span>
              most annual arsons{space}
              <a href="https://time.com/6216504/fbi-crime-report-2021/">
                offending
              </a>
              :
            </span>
            <span>
              <a href="https://nida.nih.gov/research-topics/trends-statistics/monitoring-future">
                {lowDate}
                {space}-{space}
                {this.state.highDate}
              </a>
            </span>
          </div>
          <a
            style={{ color: "darkviolet" }}
            href="https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/home"
          >
            {shortNumber(Math.round(this.state.highDeaths /*/5 */)) + space}per
            100,000
          </a>
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
              {marijuana.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"orange"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {alldeaths.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"white"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {this.state.showarson &&
                allarson.map(
                  ([x, y], i) =>
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={2}
                        stroke={"firebrick"}
                        fill="blue"
                        strokeWidth={3}
                        key={i}
                      />
                    )
                )}
              {m2.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"tan"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {checkable.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"blue"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {currency.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"forestgreen"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {allaccidents.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={4}
                      height={4}
                      stroke={"grey"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            </svg>
          </div>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            position: "absolute",
            bottom: "0px"
          }}
        >
          <div
            style={{
              backgroundColor: "firebrick",
              height: "10px",
              width: "10px"
            }}
          />
          arson
          <input
            type="checkbox"
            checked={this.state.showarson}
            onChange={(e) => {
              const showarson = e.target.checked;
              console.log(showarson);
              this.setState({
                showarson
              });
            }}
          />
          {space}
          <div
            style={{
              backgroundColor: "white",
              height: "10px",
              width: "10px"
            }}
          />
          vengence{space}
          <div
            style={{
              backgroundColor: "orange",
              height: "10px",
              width: "10px"
            }}
          />
          marijuana
          {space}
          <div
            style={{
              backgroundColor: "tan",
              height: "10px",
              width: "10px"
            }}
          />
          <div
            style={{
              backgroundColor: "blue",
              height: "10px",
              width: "10px"
            }}
          />
          <div
            style={{
              backgroundColor: "green",
              height: "10px",
              width: "10px"
            }}
          />
          money
          <div
            style={{
              backgroundColor: "grey",
              height: "10px",
              width: "10px"
            }}
          />
          <a
            style={{ color: "black" }}
            href="https://www.iihs.org/topics/fatality-statistics/detail/yearly-snapshot"
          >
            accidents
          </a>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            position: "absolute",
            bottom: "20px"
          }}
        ></div>
      </div>
    );
  }
}

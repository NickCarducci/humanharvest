import React from "react";
import { yearly, yearlypop } from "./mortal";
import { linecss, shortNumber } from "./vaxx";

const homeowners = [
  [
    1982,
    "Owner",
    54237,
    1142,
    3594,
    5506,
    5666,
    5045,
    4677,
    5032,
    5288,
    5082,
    4427,
    3605,
    4947
  ],
  [
    1983,
    "Owner",
    54671,
    1031,
    3579,
    5387,
    5797,
    5211,
    4704,
    4906,
    5266,
    5176,
    4500,
    3702,
    5139
  ],
  [
    1984,
    "Owner",
    55671,
    993,
    3669,
    5488,
    6054,
    5463,
    4759,
    4821,
    5273,
    5214,
    4593,
    3784,
    5298
  ],
  [
    1985,
    "Owner",
    56152,
    942,
    3594,
    5554,
    6292,
    5651,
    4842,
    4773,
    5191,
    5246,
    4752,
    3842,
    5247
  ],
  [
    1986,
    "Owner",
    56844,
    922,
    3549,
    5619,
    6510,
    5668,
    4970,
    4857,
    5207,
    5183,
    4826,
    3966,
    5327
  ],
  [
    1987,
    "Owner",
    57915,
    830,
    3476,
    5750,
    6513,
    6118,
    5193,
    4882,
    5125,
    5218,
    4937,
    4002,
    5610
  ],
  [
    1988,
    "Owner",
    58700,
    813,
    3427,
    5799,
    6568,
    6336,
    5550,
    4890,
    4999,
    5146,
    5054,
    4042,
    5792
  ],
  [
    1989,
    "Owner",
    59755,
    892,
    3440,
    6016,
    6733,
    6696,
    5796,
    4978,
    4934,
    5162,
    5057,
    4144,
    5905
  ],
  [
    1990,
    "Owner",
    60248,
    806,
    3344,
    5805,
    6880,
    6909,
    5941,
    5016,
    4870,
    5141,
    5128,
    4230,
    6178
  ],
  [
    1991,
    "Owner",
    61010,
    775,
    3093,
    5796,
    6891,
    7246,
    6101,
    5148,
    4922,
    5077,
    5209,
    4349,
    6404
  ],
  [
    1992,
    "Owner",
    61823,
    732,
    3003,
    5745,
    6974,
    7249,
    6566,
    5411,
    4919,
    5112,
    5134,
    4405,
    6567
  ],
  [
    1993,
    "Owner",
    62535,
    792,
    2976,
    5791,
    7198,
    7413,
    6777,
    5739,
    4816,
    4930,
    4973,
    4473,
    6657
  ],
  [
    1994,
    "Owner",
    63136,
    807,
    2941,
    5705,
    7283,
    7450,
    7094,
    5868,
    4928,
    4786,
    4928,
    4552,
    6793
  ],
  [
    1995,
    "Owner",
    64738,
    875,
    2981,
    5947,
    7442,
    7651,
    7433,
    6068,
    5005,
    4707,
    4931,
    4605,
    7093
  ],
  [
    1996,
    "Owner",
    66042,
    985,
    3010,
    5798,
    7498,
    8036,
    7834,
    6162,
    5138,
    4712,
    5023,
    4562,
    7284
  ],
  [
    1997,
    "Owner",
    67142,
    979,
    3061,
    5590,
    7613,
    8267,
    7812,
    6724,
    5364,
    4786,
    4856,
    4573,
    7517
  ],
  [
    1998,
    "Owner",
    68637,
    1045,
    3134,
    5623,
    7655,
    8504,
    7938,
    7031,
    5627,
    4974,
    4793,
    4590,
    7723
  ],
  [
    1999,
    "Owner",
    70098,
    1195,
    3160,
    5594,
    7690,
    8538,
    8179,
    7320,
    5962,
    5027,
    4847,
    4653,
    7933
  ],
  [
    2000,
    "Owner",
    71249,
    1350,
    3228,
    5583,
    7689,
    8740,
    8340,
    7718,
    6109,
    4991,
    4829,
    4598,
    8074
  ],
  [
    2001,
    "Owner",
    72594,
    1456,
    3255,
    5649,
    7594,
    8847,
    8697,
    8046,
    6337,
    5189,
    4738,
    4535,
    8251
  ],
  [
    2002,
    "Owner",
    71278,
    1459,
    3194,
    5583,
    7119,
    8493,
    8385,
    7881,
    6677,
    5238,
    4679,
    4240,
    8331
  ],
  [
    2003,
    "Owner",
    72054,
    1469,
    3272,
    5698,
    7018,
    8376,
    8555,
    7944,
    6916,
    5552,
    4597,
    4236,
    8420
  ],
  [
    2004,
    "Owner",
    73574,
    1646,
    3414,
    5666,
    6905,
    8465,
    8833,
    8072,
    7248,
    5860,
    4708,
    4225,
    8532
  ],
  [
    2005,
    "Owner",
    74553,
    1682,
    3597,
    5444,
    7010,
    8402,
    8834,
    8295,
    7661,
    6007,
    4886,
    4156,
    8580
  ],
  [
    2006,
    "Owner",
    75380,
    1629,
    3748,
    5271,
    6987,
    8174,
    8979,
    8466,
    7973,
    6200,
    5007,
    4195,
    8751
  ],
  [
    2007,
    "Owner",
    75159,
    1609,
    3719,
    5090,
    6829,
    7834,
    8889,
    8522,
    7999,
    6611,
    5169,
    4173,
    8714
  ],
  [
    2008,
    "Owner",
    75566,
    1482,
    3641,
    4998,
    6811,
    7614,
    8812,
    8725,
    8107,
    6962,
    5421,
    4176,
    8816
  ],
  [
    2009,
    "Owner",
    75014,
    1424,
    3421,
    4897,
    6462,
    7358,
    8578,
    8874,
    8038,
    7186,
    5592,
    4331,
    8852
  ],
  [
    2010,
    "Owner",
    74791,
    1385,
    3327,
    4890,
    6065,
    7144,
    8418,
    8793,
    8112,
    7513,
    5744,
    4492,
    8908
  ],
  [
    2011,
    "Owner",
    75091,
    1373,
    3134,
    4958,
    5777,
    7031,
    8123,
    8762,
    8385,
    7856,
    5970,
    4629,
    9094
  ],
  [
    2012,
    "Owner",
    74929,
    1318,
    3008,
    4771,
    5445,
    6987,
    7662,
    8694,
    8603,
    7824,
    6479,
    4855,
    9285
  ],
  [
    2013,
    "Owner",
    74668,
    1361,
    2977,
    4792,
    5302,
    6729,
    7456,
    8597,
    8569,
    7729,
    6693,
    5108,
    9356
  ],
  [
    2014,
    "Owner",
    74427,
    1329,
    2885,
    4730,
    5410,
    6399,
    7202,
    8481,
    8551,
    7832,
    6984,
    5247,
    9379
  ],
  [
    2015,
    "Owner",
    74706,
    1335,
    2856,
    4634,
    5429,
    6210,
    7187,
    8219,
    8638,
    7999,
    7370,
    5442,
    9386
  ],
  [
    2016,
    "Owner",
    75016,
    1348,
    2802,
    4606,
    5574,
    6109,
    7012,
    8034,
    8638,
    8097,
    7603,
    5666,
    9526
  ],
  [
    2017,
    "Owner",
    76170,
    1338,
    2969,
    4635,
    5827,
    6007,
    7098,
    7728,
    8546,
    8440,
    7717,
    6144,
    9721
  ],
  [
    2018,
    "Owner",
    78211,
    1370,
    3102,
    4882,
    6091,
    6082,
    7182,
    7784,
    8539,
    8690,
    7933,
    6468,
    10087
  ],
  [
    2019,
    "Owner",
    79323,
    1387,
    3147,
    5029,
    6065,
    6316,
    6986,
    7702,
    8572,
    8774,
    7993,
    6760,
    10593
  ],
  [
    2020,
    "Owner",
    83884,
    1359,
    3334,
    5291,
    6636,
    6858,
    7165,
    7914,
    8887,
    9328,
    8399,
    7388,
    11324
  ],
  [
    2021,
    "Owner",
    82874,
    1393,
    3226,
    5323,
    6426,
    6901,
    6839,
    7833,
    8395,
    9242,
    8513,
    7387,
    11395
  ],
  [
    2022,
    "Owner",
    84428,
    1498,
    3270,
    5509,
    6629,
    7216,
    6999,
    8032,
    8365,
    9255,
    8764,
    7518,
    11373
  ],
  [
    1982,
    "Total",
    83731,
    5905,
    9308,
    9647,
    8385,
    6913,
    6157,
    6383,
    6609,
    6348,
    5680,
    4792,
    6968
  ],
  [
    1983,
    "Total",
    84565,
    5487,
    9337,
    9720,
    8722,
    7158,
    6251,
    6225,
    6573,
    6489,
    5719,
    4907,
    7152
  ],
  [
    1984,
    "Total",
    86346,
    5536,
    9495,
    10024,
    9156,
    7553,
    6377,
    6152,
    6582,
    6523,
    5795,
    5009,
    7414
  ],
  [
    1985,
    "Total",
    87887,
    5483,
    9543,
    10288,
    9615,
    7919,
    6517,
    6157,
    6558,
    6567,
    5976,
    5003,
    7517
  ],
  [
    1986,
    "Total",
    89145,
    5351,
    9670,
    10477,
    10050,
    8040,
    6711,
    6219,
    6509,
    6494,
    6078,
    5139,
    7612
  ],
  [
    1987,
    "Total",
    90517,
    5201,
    9540,
    10744,
    10159,
    8643,
    6963,
    6274,
    6407,
    6490,
    6209,
    5151,
    7921
  ],
  [
    1988,
    "Total",
    92020,
    5147,
    9539,
    10893,
    10322,
    8959,
    7463,
    6346,
    6303,
    6452,
    6317,
    5204,
    8179
  ],
  [
    1989,
    "Total",
    93489,
    5381,
    9747,
    11308,
    10622,
    9535,
    7822,
    6451,
    6238,
    6448,
    6320,
    5329,
    8290
  ],
  [
    1990,
    "Total",
    94224,
    5143,
    9508,
    11213,
    10914,
    9893,
    8038,
    6532,
    6182,
    6446,
    6407,
    5397,
    8546
  ],
  [
    1991,
    "Total",
    95253,
    5075,
    9152,
    11318,
    11071,
    10419,
    8275,
    6763,
    6189,
    6306,
    6400,
    5516,
    8765
  ],
  [
    1992,
    "Total",
    96391,
    4913,
    8926,
    11378,
    11351,
    10484,
    8847,
    7098,
    6206,
    6296,
    6353,
    5574,
    8964
  ],
  [
    1993,
    "Total",
    97717,
    5342,
    8848,
    11406,
    11656,
    10801,
    9191,
    7438,
    6107,
    6091,
    6164,
    5599,
    9074
  ],
  [
    1994,
    "Total",
    98695,
    5408,
    8628,
    11284,
    11906,
    10931,
    9611,
    7637,
    6284,
    5972,
    6113,
    5681,
    9236
  ],
  [
    1995,
    "Total",
    99986,
    5502,
    8662,
    11206,
    11993,
    11151,
    10080,
    7882,
    6355,
    5860,
    6088,
    5693,
    9514
  ],
  [
    1996,
    "Total",
    100983,
    5467,
    8669,
    10936,
    12083,
    11644,
    10523,
    7981,
    6474,
    5836,
    6099,
    5602,
    9669
  ],
  [
    1997,
    "Total",
    102201,
    5517,
    8755,
    10622,
    12166,
    11869,
    10532,
    8650,
    6731,
    5947,
    5926,
    5574,
    9912
  ],
  [
    1998,
    "Total",
    103533,
    5750,
    8666,
    10494,
    12026,
    12141,
    10744,
    9040,
    7051,
    6055,
    5852,
    5583,
    10131
  ],
  [
    1999,
    "Total",
    104929,
    6000,
    8661,
    10400,
    11950,
    12206,
    10973,
    9412,
    7389,
    6183,
    5845,
    5621,
    10289
  ],
  [
    2000,
    "Total",
    105719,
    6221,
    8482,
    10219,
    11834,
    12377,
    11164,
    9834,
    7602,
    6215,
    5816,
    5567,
    10388
  ],
  [
    2001,
    "Total",
    107009,
    6460,
    8358,
    10301,
    11587,
    12504,
    11529,
    10288,
    7827,
    6345,
    5749,
    5496,
    10565
  ],
  [
    2002,
    "Total",
    104966,
    6372,
    8231,
    10176,
    10924,
    11839,
    11204,
    10123,
    8261,
    6422,
    5644,
    5137,
    10632
  ],
  [
    2003,
    "Total",
    105560,
    6441,
    8213,
    10084,
    10777,
    11748,
    11341,
    10194,
    8550,
    6776,
    5570,
    5163,
    10703
  ],
  [
    2004,
    "Total",
    106587,
    6538,
    8491,
    9865,
    10438,
    11768,
    11583,
    10316,
    8928,
    7112,
    5656,
    5065,
    10827
  ],
  [
    2005,
    "Total",
    108231,
    6536,
    8790,
    9583,
    10526,
    11722,
    11780,
    10595,
    9504,
    7336,
    5900,
    5016,
    10943
  ],
  [
    2006,
    "Total",
    109576,
    6578,
    8975,
    9423,
    10520,
    11484,
    11988,
    10896,
    9919,
    7604,
    6074,
    5057,
    11058
  ],
  [
    2007,
    "Total",
    110306,
    6494,
    9170,
    9349,
    10499,
    11125,
    12007,
    11082,
    10013,
    8108,
    6330,
    5063,
    11065
  ],
  [
    2008,
    "Total",
    111409,
    6272,
    9094,
    9343,
    10550,
    10974,
    11968,
    11415,
    10217,
    8601,
    6642,
    5114,
    11219
  ],
  [
    2009,
    "Total",
    111344,
    6106,
    9076,
    9331,
    10185,
    10705,
    11861,
    11605,
    10226,
    8920,
    6822,
    5288,
    11220
  ],
  [
    2010,
    "Total",
    111860,
    6060,
    9041,
    9477,
    9794,
    10525,
    11690,
    11721,
    10437,
    9345,
    7038,
    5449,
    11285
  ],
  [
    2011,
    "Total",
    113534,
    6079,
    9062,
    9957,
    9667,
    10515,
    11449,
    11784,
    10848,
    9841,
    7306,
    5556,
    11468
  ],
  [
    2012,
    "Total",
    114512,
    6073,
    8778,
    9969,
    9565,
    10669,
    10968,
    11845,
    11289,
    9949,
    7984,
    5813,
    11613
  ],
  [
    2013,
    "Total",
    114673,
    6126,
    8729,
    9963,
    9502,
    10351,
    10706,
    11836,
    11310,
    9967,
    8311,
    6171,
    11702
  ],
  [
    2014,
    "Total",
    115461,
    6111,
    8812,
    10044,
    9659,
    10121,
    10509,
    11674,
    11334,
    10141,
    8694,
    6429,
    11934
  ],
  [
    2015,
    "Total",
    117345,
    6122,
    9008,
    10090,
    9822,
    10086,
    10563,
    11448,
    11565,
    10494,
    9299,
    6690,
    12159
  ],
  [
    2016,
    "Total",
    118275,
    6157,
    9076,
    10136,
    10081,
    9861,
    10507,
    11214,
    11674,
    10633,
    9621,
    6939,
    12378
  ],
  [
    2017,
    "Total",
    119272,
    5932,
    9260,
    10139,
    10335,
    9716,
    10519,
    10869,
    11581,
    10970,
    9752,
    7551,
    12650
  ],
  [
    2018,
    "Total",
    121458,
    6028,
    9538,
    10240,
    10582,
    9675,
    10498,
    10849,
    11541,
    11314,
    10008,
    8023,
    13163
  ],
  [
    2019,
    "Total",
    122880,
    5976,
    9580,
    10486,
    10604,
    9985,
    10238,
    10719,
    11602,
    11457,
    10145,
    8383,
    13704
  ],
  [
    2020,
    "Total",
    125920,
    5285,
    9453,
    10771,
    11055,
    10466,
    10408,
    10807,
    11873,
    11922,
    10546,
    9002,
    14331
  ],
  [
    2021,
    "Total",
    126600,
    5735,
    9322,
    10992,
    10978,
    10688,
    10169,
    10876,
    11470,
    12031,
    10784,
    9080,
    14477
  ],
  [
    2022,
    "Total",
    128367,
    5893,
    9195,
    11283,
    11188,
    11066,
    10203,
    11120,
    11304,
    12150,
    11126,
    9373,
    14466
  ]
];
export default class Homeowners extends React.Component {
  constructor(props) {
    super(props);

    const minAge = 20,
      maxAge = 34;
    let dates = [];
    let all = [];
    let money = [];
    let ages = {};
    homeowners.forEach((arr) => {
      const yr = arr[0];
      dates.push(yr);
      const name = arr[1];
      if (name === "Total") return null;
      [22, 34, 39, 44, 49, 54, 59, 64, 69, 74, 80].forEach((x, i) => {
        if (!ages[x]) ages[x] = [];
        all.push(arr[3 + i]);
        ages[x].push([yr, arr[3 + i]]);
      });
    });

    var highHomeownership = Math.max(...all),
      lowHomeownership = Math.min(...all),
      highDate = Math.max(...dates),
      lowDate = Math.min(...dates);

    this.state = {
      ages,
      noData: [],
      yAxis: highHomeownership - lowHomeownership,
      xAxis: highDate - lowDate,
      highHomeownership,
      lowHomeownership,
      highDate,
      lowDate,
      minAge,
      maxAge
    };
  }
  componentDidUpdate = () => {
    if (
      this.state.show80 !== this.state.lastShow80 ||
      this.state.byPopulation !== this.state.lastByPopulation ||
      this.state.alloccupancy !== this.state.lastalloccpuancy
    ) {
      this.setState(
        {
          lastalloccpuancy: this.state.alloccupancy,
          lastShow80: this.state.show80,
          lastByPopulation: this.state.byPopulation
        },
        () => {
          const minAge = 20,
            maxAge = 34;
          let dates = [];
          let all = [];
          let money = [];
          let ages = {};

          homeowners.forEach((arr) => {
            const yr = arr[0];
            dates.push(yr);
            const name = arr[1],
              title = this.state.alloccupancy ? "Total" : "Owner";
            if (name === title) return null;

            const Ages = Object.keys(yearlypop)
              .map((year) => {
                if (Number(year) === Number(yr)) {
                  //console.log(yr);
                  return yearlypop[year];
                } else return {};
              })
              .filter((x) => Object.keys(x).length > 0);
            [22, 34, 39, 44, 49, 54, 59, 64, 69, 74, 80].forEach((x, i) => {
              if (this.state.show80 && x > 70) return null;
              if (!ages[x]) ages[x] = [];
              const pop =
                Ages[0] &&
                Object.keys(Ages[0])
                  .map((age) => {
                    if (age < 85 && age > 19 && Number(age) === Number(x)) {
                      return Ages[0][age];
                    } else return "";
                  })
                  .filter((x) => x.constructor === Number)[0];
              //console.log(pop);
              var population = !this.state.byPopulation
                ? 1
                : pop && pop.constructor === Number
                ? pop / 1000
                : 0;
              //console.log(yr, x, arr[3 + i], pop);
              population !== 0 &&
                all.push(
                  population !== 1 ? population / arr[3 + i] : arr[3 + i]
                );
              population !== 0 &&
                ages[x].push([
                  yr,
                  population !== 1 ? population / arr[3 + i] : arr[3 + i]
                ]);
            });
          });

          var highHomeownership = Math.max(...all),
            lowHomeownership = Math.min(...all),
            highDate = Math.max(...dates),
            lowDate = Math.min(...dates);

          this.setState({
            ages,
            noData: [],
            yAxis: highHomeownership - lowHomeownership,
            xAxis: highDate - lowDate,
            highHomeownership,
            lowHomeownership,
            highDate,
            lowDate,
            minAge,
            maxAge
          });
        }
      );
    }
  };
  render() {
    const { lowDate, ages } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const allAccidentsAges = {};
    Object.keys(ages).forEach((age) => {
      allAccidentsAges[age] = ages[age].map(([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowHomeownership) / this.state.yAxis) * 150
      ]);
    });
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
    const Ages = [22, 34, 39, 44, 49, 54, 59, 64, 69, 74, 80];
    //console.log(this.state.selectedAge);
    var thisoneselected = null;
    Ages.forEach((x, i) => {
      if (x === this.state.selectedAge) thisoneselected = i;
    });
    return (
      <div style={{ ...this.props.style, position: "relative" }}>
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div style={labelstyle}>
            <span>
              homeowners{space}
              <a href="https://www.census.gov/housing/hvs/data/histtabs.html">
                census
              </a>
              :
            </span>
            <span>
              {lowDate}
              {space}-{space}
              {this.state.highDate}
            </span>
          </div>
          <div
            onClick={() => {
              this.setState({
                byPopulation: !this.state.byPopulation
              });
            }}
            style={{ color: "darkviolet", cursor: "pointer" }}
          >
            {(!this.state.byPopulation ? shortNumber : (x) => x)(
              Math.round(
                this.state.highHomeownership *
                  (!this.state.byPopulation ? 1000 : 1) /*/5 */
              )
            ) + space}
            {!this.state.byPopulation ? " " : "-to-one group home "}
            22, 34, 39, 44, 49, 54, 59, 64, 69, 74, 80
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
              {Object.keys(allAccidentsAges).map((age, u) => {
                const color = `rgb(${
                  (u / Object.keys(allAccidentsAges).length) * 250
                },${(u / Object.keys(allAccidentsAges).length) * 250},${
                  (u / Object.keys(allAccidentsAges).length) * 250
                })`;
                return (
                  (!this.state.show80 || (this.state.show80 && u)) &&
                  allAccidentsAges[age].map(
                    ([x, y], i) =>
                      !isNaN(x) &&
                      !isNaN(y) && (
                        <rect
                          x={x}
                          y={y}
                          width={2}
                          height={2}
                          fill={
                            this.state.selectedAge === Number(age)
                              ? "red"
                              : color
                          }
                          stroke={
                            this.state.selectedAge === Number(age)
                              ? "red"
                              : color
                          }
                          strokeWidth={1}
                          key={i}
                        />
                      )
                  )
                );
              })}
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
          <span
            onClick={() => {
              this.setState({ alloccupancy: !this.state.alloccupancy });
            }}
          >
            <div
              style={{
                backgroundColor: "firebrick",
                height: "10px",
                width: "10px"
              }}
            />
            living-at-home/
            <span
              style={{
                transition: ".3s ease-in",
                color: this.state.alloccupancy ? "firebrick" : "black"
              }}
            >
              homeownership
            </span>
          </span>
          {space}
          <input
            type="checkbox"
            checked={this.state.show80}
            value={this.state.show80}
            onChange={(e) => {
              const show80 = e.target.checked;
              console.log(show80);
              this.setState({
                show80
              });
            }}
          />
          {space}74 80{space}
          <select
            value={this.state.selectedAge}
            onChange={(e) => {
              this.setState({ selectedAge: Number(e.target.value) });
            }}
          >
            {Ages.map((x) => {
              return <option key={x + "ages"}>{x}</option>;
            })}
          </select>
          <div style={{ textAlign: "center" }}>
            <div
              onClick={() => {
                this.setState({
                  selectedAge:
                    thisoneselected > Ages.length
                      ? Ages[0]
                      : Ages[thisoneselected + 1]
                });
              }}
              style={{ width: "50px" }}
            >
              {"^"}
            </div>
            <div
              onClick={() => {
                this.setState({
                  selectedAge:
                    thisoneselected - 1 > -1
                      ? Ages[thisoneselected - 1]
                      : Ages[Ages.length - 1]
                });
              }}
              style={{ width: "50px", transform: "rotate(180deg)" }}
            >
              {"^"}
            </div>
          </div>
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


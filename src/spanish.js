import React from "react";
import { linecss, shortNumber } from "./vaxx";

/*const mortalagenj = {
  "1960-1969": [
    {
      age: "0",
      dx: 2260
    },
    {
      age: "1-4",
      dx: 321
    },
    {
      age: "5-9",
      dx: 198
    },
    {
      age: "10-14",
      dx: 172
    },
    {
      age: "15-19",
      dx: 376
    },
    {
      age: "20-24",
      dx: 518
    },
    {
      age: "25-29",
      dx: 555
    },
    {
      age: "30-34",
      dx: 693
    },
    {
      age: "35-39",
      dx: 1037
    },
    {
      age: "40-44",
      dx: 1609
    },
    {
      age: "45-49",
      dx: 2571
    },
    {
      age: "50-54",
      dx: 4056
    },
    {
      age: "55-59",
      dx: 5868
    },
    {
      age: "60-64",
      dx: 8259
    },
    {
      age: "65-69",
      dx: 10924
    },
    {
      age: "70-74",
      dx: 13510
    },
    {
      age: "75-79",
      dx: 14832
    },
    {
      age: "80-84",
      dx: 14149
    },
    {
      age: "85-89",
      dx: 10651
    },
    {
      age: "90-94",
      dx: 5435
    },
    {
      age: "95-99",
      dx: 1692
    },
    {
      age: "100-104",
      dx: 289
    },
    {
      age: "105-109",
      dx: 25
    },
    {
      age: "110",
      dx: 1
    }
  ],
  "1970-1979": [
    {
      age: "0",
      dx: 1581
    },
    {
      age: "1-4",
      dx: 255
    },
    {
      age: "5-9",
      dx: 163
    },
    {
      age: "10-14",
      dx: 150
    },
    {
      age: "15-19",
      dx: 404
    },
    {
      age: "20-24",
      dx: 591
    },
    {
      age: "25-29",
      dx: 549
    },
    {
      age: "30-34",
      dx: 644
    },
    {
      age: "35-39",
      dx: 901
    },
    {
      age: "40-44",
      dx: 1413
    },
    {
      age: "45-49",
      dx: 2265
    },
    {
      age: "50-54",
      dx: 3409
    },
    {
      age: "55-59",
      dx: 5056
    },
    {
      age: "60-64",
      dx: 7279
    },
    {
      age: "65-69",
      dx: 9754
    },
    {
      age: "70-74",
      dx: 12478
    },
    {
      age: "75-79",
      dx: 14802
    },
    {
      age: "80-84",
      dx: 15102
    },
    {
      age: "85-89",
      dx: 12459
    },
    {
      age: "90-94",
      dx: 7346
    },
    {
      age: "95-99",
      dx: 2760
    },
    {
      age: "100-104",
      dx: 574
    },
    {
      age: "105-109",
      dx: 61
    },
    {
      age: "110",
      dx: 3
    }
  ],
  "1980-1989": [
    {
      age: "0",
      dx: 1074
    },
    {
      age: "1-4",
      dx: 196
    },
    {
      age: "5-9",
      dx: 123
    },
    {
      age: "10-14",
      dx: 119
    },
    {
      age: "15-19",
      dx: 326
    },
    {
      age: "20-24",
      dx: 470
    },
    {
      age: "25-29",
      dx: 577
    },
    {
      age: "30-34",
      dx: 740
    },
    {
      age: "35-39",
      dx: 898
    },
    {
      age: "40-44",
      dx: 1180
    },
    {
      age: "45-49",
      dx: 1847
    },
    {
      age: "50-54",
      dx: 2893
    },
    {
      age: "55-59",
      dx: 4406
    },
    {
      age: "60-64",
      dx: 6471
    },
    {
      age: "65-69",
      dx: 8849
    },
    {
      age: "70-74",
      dx: 11846
    },
    {
      age: "75-79",
      dx: 13961
    },
    {
      age: "80-84",
      dx: 15834
    },
    {
      age: "85-89",
      dx: 14161
    },
    {
      age: "90-94",
      dx: 9304
    },
    {
      age: "95-99",
      dx: 3784
    },
    {
      age: "100-104",
      dx: 843
    },
    {
      age: "105-109",
      dx: 92
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "1990-1999": [
    {
      age: "0",
      dx: 810
    },
    {
      age: "1-4",
      dx: 142
    },
    {
      age: "5-9",
      dx: 85
    },
    {
      age: "10-14",
      dx: 91
    },
    {
      age: "15-19",
      dx: 270
    },
    {
      age: "20-24",
      dx: 410
    },
    {
      age: "25-29",
      dx: 509
    },
    {
      age: "30-34",
      dx: 732
    },
    {
      age: "35-39",
      dx: 1004
    },
    {
      age: "40-44",
      dx: 1296
    },
    {
      age: "45-49",
      dx: 1684
    },
    {
      age: "50-54",
      dx: 2406
    },
    {
      age: "55-59",
      dx: 3659
    },
    {
      age: "60-64",
      dx: 5479
    },
    {
      age: "65-69",
      dx: 7896
    },
    {
      age: "70-74",
      dx: 10672
    },
    {
      age: "75-79",
      dx: 13367
    },
    {
      age: "80-84",
      dx: 16097
    },
    {
      age: "85-89",
      dx: 15615
    },
    {
      age: "90-94",
      dx: 11382
    },
    {
      age: "95-99",
      dx: 5057
    },
    {
      age: "100-104",
      dx: 1198
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 7
    }
  ],
  "2000-2009": [
    {
      age: "0",
      dx: 584
    },
    {
      age: "1-4",
      dx: 82
    },
    {
      age: "5-9",
      dx: 50
    },
    {
      age: "10-14",
      dx: 67
    },
    {
      age: "15-19",
      dx: 230
    },
    {
      age: "20-24",
      dx: 434
    },
    {
      age: "25-29",
      dx: 436
    },
    {
      age: "30-34",
      dx: 485
    },
    {
      age: "35-39",
      dx: 651
    },
    {
      age: "40-44",
      dx: 983
    },
    {
      age: "45-49",
      dx: 1453
    },
    {
      age: "50-54",
      dx: 2112
    },
    {
      age: "55-59",
      dx: 3017
    },
    {
      age: "60-64",
      dx: 4456
    },
    {
      age: "65-69",
      dx: 6472
    },
    {
      age: "70-74",
      dx: 9317
    },
    {
      age: "75-79",
      dx: 12825
    },
    {
      age: "80-84",
      dx: 16653
    },
    {
      age: "85-89",
      dx: 18103
    },
    {
      age: "90-94",
      dx: 13818
    },
    {
      age: "95-99",
      dx: 6249
    },
    {
      age: "100-104",
      dx: 1388
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "2010-2018": [
    {
      age: "0",
      dx: 446
    },
    {
      age: "1-4",
      dx: 72
    },
    {
      age: "5-9",
      dx: 46
    },
    {
      age: "10-14",
      dx: 53
    },
    {
      age: "15-19",
      dx: 170
    },
    {
      age: "20-24",
      dx: 426
    },
    {
      age: "25-29",
      dx: 523
    },
    {
      age: "30-34",
      dx: 561
    },
    {
      age: "35-39",
      dx: 627
    },
    {
      age: "40-44",
      dx: 810
    },
    {
      age: "45-49",
      dx: 1245
    },
    {
      age: "50-54",
      dx: 1896
    },
    {
      age: "55-59",
      dx: 2752
    },
    {
      age: "60-64",
      dx: 3891
    },
    {
      age: "65-69",
      dx: 5482
    },
    {
      age: "70-74",
      dx: 7953
    },
    {
      age: "75-79",
      dx: 11284
    },
    {
      age: "80-84",
      dx: 15415
    },
    {
      age: "85-89",
      dx: 18582
    },
    {
      age: "90-94",
      dx: 16492
    },
    {
      age: "95-99",
      dx: 8723
    },
    {
      age: "100-104",
      dx: 2288
    },
    {
      age: "105-109",
      dx: 252
    },
    {
      age: "110",
      dx: 11
    }
  ]
};*/

const usmortality = {
  "1880": [
    {
      age: "0-4",
      deaths: 302624,
      dx: 394, //https://www2.census.gov/library/publications/decennial/1880/vol-11-12-mortality/1880v11-02.pdf#page=6
      pop: 6914516 //https://www2.census.gov/prod2/decennial/documents/36894832v1ch05.pdf#page=34
    },
    {
      age: "5-9",
      deaths: 43093,
      dx: 221,
      pop: 6479660
    },
    {
      age: "10-14",
      deaths: 22915,
      dx: 205,
      pop: 5715186
    },
    {
      age: "15-19",
      deaths: 29368,
      dx: 440,
      pop: 5011415
    },
    {
      age: "20-24",
      deaths: 39355,
      dx: 593,
      pop: 5087772
    },
    {
      age: "25-29",
      deaths: 33132,
      dx: 621,
      pop: 4080621
    },
    {
      age: "30-34",
      deaths: 28669,
      dx: 769,
      pop: 3368943
    },
    {
      age: "35-39",
      deaths: 28630,
      dx: 1110,
      pop: 3000419
    },
    {
      age: "40-44",
      deaths: 24954,
      dx: 1687,
      pop: 2468811
    },
    {
      age: "45-49",
      deaths: 23996,
      dx: 2625,
      pop: 2089445
    },
    {
      age: "50-54",
      deaths: 24539,
      dx: 4027,
      pop: 1839883
    },
    {
      age: "55-59",
      deaths: 22352,
      dx: 5670,
      pop: 1271434
    },
    {
      age: "60-64",
      deaths: 26183,
      dx: 7826,
      pop: 1104219
    },
    {
      age: "65-69",
      deaths: 25685,
      dx: 10338,
      pop: 725876
    },
    {
      age: "70-74",
      deaths: 25780,
      dx: 12787,
      pop: 495442
    },
    {
      age: "75-79",
      deaths: 22352,
      dx: 14321,
      pop: 281065
    },
    {
      age: "80-84",
      deaths: 16641,
      dx: 14658,
      pop: 146362
    },
    {
      age: "85-89",
      deaths: 8149,
      dx: 11292,
      pop: 49835
    }, //1040
    {
      age: "90-94",
      deaths: 3283,
      dx: 5758,
      pop: 16100
    },
    {
      age: "95-99",
      deaths: 1500, //95+ 2009
      dx: 1808,
      pop: 4768
    },
    {
      age: "100",
      deaths: 509, //95+ 2009
      dx: 304,
      pop: 4016
    }
    /*{
      age: "unknown",
      dx: 25,
      pop: 0
    }*/
  ],
  "1890": [
    {
      age: "0-4",
      dx: 14936 + 3008 + 1296 + 823 + 631, //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2885717/
      pop: 7634693
    },
    {
      age: "5-9",
      dx: 1786,
      pop: 7573998
    },
    {
      age: "10-14",
      dx: 1228,
      pop: 7033509
    },
    {
      age: "15-19",
      dx: 1911,
      pop: 6557563
    },
    {
      age: "20-24",
      dx: 2657,
      pop: 6196676
    },
    {
      age: "25-29",
      dx: 2756,
      pop: 5227777
    },
    {
      age: "30-34",
      dx: 2831,
      pop: 4578630
    },
    {
      age: "35-39",
      dx: 3050,
      pop: 3866161
    },
    {
      age: "40-44",
      dx: 3321,
      pop: 3185518
    },
    {
      age: "45-49",
      dx: 3800,
      pop: 2731640
    },
    {
      age: "50-54",
      dx: 4429,
      pop: 2326262
    },
    {
      age: "55-59",
      dx: 5658,
      pop: 1672336
    },
    {
      age: "60-64",
      dx: 6933,
      pop: 1458034
    },
    {
      age: "65-69",
      dx: 8476,
      pop: 1010110
    },
    {
      age: "70-74",
      dx: 9193,
      pop: 701751
    },
    {
      age: "75-79",
      dx: 9023,
      pop: 393062
    },
    {
      age: "80-84",
      dx: 12253, //80+ 12253
      pop: 203851
    },
    {
      age: "85-89",
      dx: 12253,
      pop: 75240
    }, //1307
    {
      age: "90-94",
      dx: 12253,
      pop: 23645
    },
    {
      age: "95-99",
      dx: 12253,
      pop: 5648
    },
    {
      age: "100",
      dx: 12253,
      pop: 3981
    }
    /*{
      age: "unknown",
      dx: 31,
      pop: 162165
    },*/
  ],
  "1900": [
    {
      age: "0-4",
      dx: 13052 + 2750 + 1199 + 764 + 584,
      pop: 9170628
    },
    {
      age: "5-9",
      dx: 1649,
      pop: 8874123
    },
    {
      age: "10-14",
      dx: 1109,
      pop: 8080234
    },
    {
      age: "15-19",
      dx: 1731,
      pop: 7556089
    },
    {
      age: "20-24",
      dx: 2454,
      pop: 7335016
    },
    {
      age: "25-29",
      dx: 2590,
      pop: 6529441
    },
    {
      age: "30-34",
      dx: 2725,
      pop: 5556039
    },
    {
      age: "35-39",
      dx: 2975,
      pop: 4964781
    },
    {
      age: "40-44",
      dx: 3266,
      pop: 4247166
    },
    {
      age: "45-49",
      dx: 3768,
      pop: 3454612
    },
    {
      age: "50-54",
      dx: 4439,
      pop: 2942829
    },
    {
      age: "55-59",
      dx: 5729,
      pop: 2211172
    },
    {
      age: "60-64",
      dx: 7092,
      pop: 1791363
    },
    {
      age: "65-69",
      dx: 8801,
      pop: 1302926
    },
    {
      age: "70-74",
      dx: 9758,
      pop: 883841
    },
    {
      age: "75-79",
      dx: 9831,
      pop: 519857
    },
    {
      age: "80-84",
      dx: 13733, //80+ 13733
      pop: 251512
    },
    {
      age: "85-89",
      dx: 13733,
      pop: 88600
    }, //1706
    {
      age: "90-94",
      dx: 13733,
      pop: 23992
    },
    {
      age: "95-99",
      dx: 13733,
      pop: 6266
    },
    {
      age: "100",
      dx: 13733,
      pop: 3504
    }
    /*{
      age: "unknown",
      dx: 50,
      pop: 200584
    },*/
  ],
  "1910": [
    {
      age: "0-4",
      dx: 11462 + 2446 + 1062 + 666 + 477,
      pop: 10631364
    },
    {
      age: "5-9",
      dx: 390 + 327 + 274 + 234 + 204,
      pop: 9760632
    },
    {
      age: "10-14",
      dx: 187 + 180 + 182 + 193 + 210,
      pop: 9107140
    },
    {
      age: "15-19",
      dx: 232 + 256 + 285 + 315 + 344,
      pop: 9063603
    },
    {
      age: "20-24",
      dx: 375 + 398 + 412 + 418 + 425,
      pop: 9056984
    },
    {
      age: "25-29",
      dx: 432 + 440 + 451 + 465 + 479,
      pop: 8180003
    },
    {
      age: "30-34",
      dx: 493 + 511 + 530 + 550 + 568,
      pop: 6972185
    },
    {
      age: "35-39",
      dx: 588 + 605 + 617 + 631 + 644,
      pop: 6396100
    },
    {
      age: "40-44",
      dx: 658 + 674 + 693 + 716 + 740,
      pop: 5261587
    },
    {
      age: "45-49",
      dx: 766 + 795 + 821 + 846 + 873,
      pop: 4469197
    },
    {
      age: "50-54",
      dx: 897 + 929 + 970 + 1025 + 1084,
      pop: 3900791
    },
    {
      age: "55-59",
      dx: 1153 + 1225 + 1289 + 1346 + 1404,
      pop: 2786951
    },
    {
      age: "60-64",
      dx: 1462 + 1521 + 1587 + 1656 + 1718,
      pop: 2267150
    },
    {
      age: "65-69",
      dx: 1773 + 1826 + 1877 + 1928 + 1974,
      pop: 1679503
    },
    {
      age: "70-74",
      dx: 2013 + 2044 + 2065 + 2072 + 2070,
      pop: 1113728
    },
    {
      age: "75-79",
      dx: 2057 + 2028 + 1981 + 1920 + 1854,
      pop: 667302
    },
    {
      age: "80-84",
      dx: 1786 + 1696 + 1565 + 1409 + 1255,
      pop: 321754
    },
    {
      age: "85-89",
      dx: 1103 + 954 + 816 + 689 + 571,
      pop: 122818
    }, //2197
    {
      age: "90-94",
      dx: 466 + 371 + 289 + 219 + 162,
      pop: 33473
    },
    {
      age: "95-99",
      dx: 117 + 83 + 57 + 39 + 25,
      pop: 7391
    },
    {
      age: "100",
      dx: 16 + 10 + 6 + 4 + 2 + 1 + 1,
      pop: 3555
    }
    /*{
      age: "unknown",
      dx: 99,
      pop: 169055
    },*/
  ],
  "1911": [
    {
      age: "0-4",
      dx: 29954,
      pop: 10631364
    },
    {
      age: "5-9",
      dx: 2614,
      pop: 9760632
    },
    {
      age: "10-14",
      dx: 1657,
      pop: 9107140
    },
    {
      age: "15-19",
      dx: 2495,
      pop: 9063603
    },
    {
      age: "20-24",
      dx: 2856,
      pop: 9056984
    },
    {
      age: "25-29",
      dx: 2735,
      pop: 8180003
    },
    {
      age: "30-34",
      dx: 2461,
      pop: 6972185
    },
    {
      age: "35-39",
      dx: 2606,
      pop: 6396100
    },
    {
      age: "40-44",
      dx: 3170,
      pop: 5261587
    },
    {
      age: "45-49",
      dx: 4349,
      pop: 4469197
    },
    {
      age: "50-54",
      dx: 6528,
      pop: 3900791
    },
    {
      age: "55-59",
      dx: 9035,
      pop: 2786951
    },
    {
      age: "60-64",
      dx: 11899,
      pop: 2267150
    },
    {
      age: "65-69",
      dx: 14016,
      pop: 1679503
    },
    {
      age: "70-74",
      dx: 17103,
      pop: 1113728
    },
    {
      age: "75-79",
      dx: 20086,
      pop: 667302
    },
    {
      age: "80-84",
      dx: 21363,
      pop: 321754
    },
    {
      age: "85-89",
      dx: 21169,
      pop: 122818
    }, //2197
    {
      age: "90-94",
      dx: 15786,
      pop: 33473
    },
    {
      age: "95-99",
      dx: 6690,
      pop: 7391
    },
    {
      age: "100",
      dx: 1310 + 118 + 3,
      pop: 3555
    }
    /*{
      age: "unknown",
      dx: 99,
      pop: 169055
    },*/
  ],
  "1920": [
    {
      age: "0-4",
      dx: 21012, //8594+1406+677+504+345+6773+1322+597+476+318,
      pop: 3910042 + 3805194 //754699+734897+786844+763509+791693+770428+797257+780328+779549+756032
    },
    {
      age: "5-9",
      dx: 1885,
      pop: 3757878 + 3682128
    },
    {
      age: "10-14",
      dx: 1247,
      pop: 3483084 + 3417409
    },
    {
      age: "15-19",
      dx: 1821,
      pop: 3078576 + 3107135
    },
    {
      age: "20-24",
      dx: 2124,
      pop: 3050889 + 3190808
    },
    {
      age: "25-29",
      dx: 1706,
      pop: 3176040 + 3155085
    },
    {
      age: "30-34",
      dx: 1571,
      pop: 2958375 + 2800117
    },
    {
      age: "35-39",
      dx: 1961,
      pop: 2867053 + 2602938
    },
    {
      age: "40-44",
      dx: 3019,
      pop: 2353629 + 2204847
    },
    {
      age: "45-49",
      dx: 4735,
      pop: 2189634 + 1938197
    },
    {
      age: "50-54",
      dx: 6583,
      pop: 1829925 + 1656189
    },
    {
      age: "55-59",
      dx: 8335,
      pop: 1392008 + 1284533
    },
    {
      age: "60-64",
      dx: 11061,
      pop: 1154021 + 1067924
    },
    {
      age: "65-69",
      dx: 14417,
      pop: 786254 + 754292
    },
    {
      age: "70-74",
      dx: 17764,
      pop: 519714 + 527329
    },
    {
      age: "75-79",
      dx: 21646,
      pop: 314763 + 338659
    },
    {
      age: "80-84",
      dx: 25294, //80+ 13733
      pop: 139199 + 167437
    },
    {
      age: "85-89",
      dx: 25757,
      pop: 51254 + 66883
    }, //1706
    {
      age: "90-94",
      dx: 18660,
      pop: 11249 + 16651
    },
    {
      age: "95-99",
      dx: 7654,
      pop: 2126 + 3297
    },
    {
      age: "100",
      dx: 1580 + 169 + 6,
      pop: 314 + 502
    } //https://www.cdc.gov/nchs/data/lifetables/life19-20.pdf#page=60
    /*{
      age: "unknown",
      dx: 50,
      pop: 200584
    },*/
  ],
  "1930": [
    {
      age: "0-4",
      dx: 15408, //8594+1406+677+504+345+6773+1322+597+476+318,
      Lx: 934552,
      pop: 11444390 //https://www2.census.gov/library/publications/decennial/1930/population-volume-2/16440598v2ch11.pdf#page=14
    },
    {
      age: "5-9",
      dx: 1331,
      Lx: 919076,
      pop: 12607609
    },
    {
      age: "10-14",
      dx: 828,
      Lx: 914325,
      pop: 12004877
    },
    {
      age: "15-19",
      dx: 1151,
      Lx: 909342,
      pop: 11552118
    },
    {
      age: "20-24",
      dx: 1301,
      Lx: 903174,
      pop: 10870378
    },
    {
      age: "25-29",
      dx: 1195,
      Lx: 896913,
      pop: 9833608
    },
    {
      age: "30-34",
      dx: 1449,
      Lx: 890510,
      pop: 9120421
    },
    {
      age: "35-39",
      dx: 2179,
      Lx: 881633,
      pop: 9208645
    },
    {
      age: "40-44",
      dx: 3123,
      Lx: 868360,
      pop: 7990195
    },
    {
      age: "45-49",
      dx: 4095,
      Lx: 850395,
      pop: 7042279
    },
    {
      age: "50-54",
      dx: 5594,
      Lx: 826399,
      pop: 5975804
    },
    {
      age: "55-59",
      dx: 7790,
      Lx: 793265,
      pop: 4645677
    },
    {
      age: "60-64",
      dx: 10551,
      Lx: 747638,
      pop: 3751221
    },
    {
      age: "65-69",
      dx: 13993,
      Lx: 686485,
      pop: 2770605
    },
    {
      age: "70-74",
      dx: 18006,
      Lx: 606856,
      pop: 1950004
    },
    {
      age: "75-79",
      dx: 22755,
      Lx: 505188,
      pop: 1106390
    },
    {
      age: "80-84",
      dx: 27548, //80+ 13733
      Lx: 378924,
      pop: 534676
    },
    {
      age: "85-89",
      dx: 28608,
      Lx: 235931,
      pop: 205469
    }, //1706
    {
      age: "90-94",
      dx: 21323,
      Lx: 107604,
      pop: 51664
    },
    {
      age: "95-99",
      dx: 9332,
      Lx: 31131,
      pop: 11033
    },
    {
      age: "100",
      dx: 2150 + 272 + 14,
      Lx: 5346 + 506 + 20,
      pop: 3964
    } //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7.html
    /*{
      age: "unknown",
      dx: 50,
      pop: 94022,
    },*/
  ],
  "1940": [
    {
      age: "0-4",
      dx: 11481, //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7_1940.html
      pop: 10541524 //https://www2.census.gov/library/publications/decennial/1940/population-volume-4/33973538v4p1ch1.pdf#page=3
    },
    {
      age: "5-9",
      dx: 746,
      pop: 10684622
    },
    {
      age: "10-14",
      dx: 509,
      pop: 11745935
    },
    {
      age: "15-19",
      dx: 897,
      pop: 12333523
    },
    {
      age: "20-24",
      dx: 1153,
      pop: 11587835
    },
    {
      age: "25-29",
      dx: 1280,
      pop: 11096638
    },
    {
      age: "30-34",
      dx: 519,
      pop: 10242388
    },
    {
      age: "35-39",
      dx: 1774,
      pop: 9545377
    },
    {
      age: "40-44",
      dx: 2343,
      pop: 8787843
    },
    {
      age: "45-49",
      dx: 11481,
      pop: 8255225
    },
    {
      age: "50-54",
      dx: 4916,
      pop: 7256846
    },
    {
      age: "55-59",
      dx: 6892,
      pop: 5843865
    },
    {
      age: "60-64",
      dx: 9583,
      pop: 4728340
    },
    {
      age: "65-69",
      dx: 13480,
      pop: 3806657
    },
    {
      age: "70-74",
      dx: 18143,
      pop: 2569532
    },
    {
      age: "75-79",
      dx: 23122,
      pop: 1503982
    },
    {
      age: "80-84",
      dx: 28502,
      pop: 774391
    },
    {
      age: "85-89",
      dx: 27721,
      pop: 277012
    }, //1706
    {
      age: "90-94",
      dx: 24277,
      pop: 69598
    },
    {
      age: "95-99",
      dx: 11427,
      pop: 14463
    },
    {
      age: "100",
      dx: 2938 + 434 + 30,
      pop: 3679
    } //https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7.html
    /*{
      age: "unknown",
      dx: 50,
      pop: 94022,
    },*/
  ]
};

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["5-14"];
    } else if (a === 1) {
      frequency = ["15-24"];
    } else if (a === 2) {
      frequency = ["25-39"];
    } else if (a === 3) {
      frequency = ["40-54"];
    } else if (a === 4) {
      frequency = ["55-69"];
    } else if (a === 5) {
      frequency = ["70-79"];
    } else if (a === 6) {
      frequency = ["80-100"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = ["20-24"];
    } else if (a === 1) {
      frequency = ["25-29"];
    } else if (a === 2) {
      frequency = ["30-34"];
    } else if (a === 3) {
      frequency = ["35-39"];
    } else if (a === 4) {
      frequency = ["40-44"];
    } else if (a === 5) {
      frequency = ["45-49"];
    } else if (a === 6) {
      frequency = ["55-59"];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = ["5-9", "10-14"];
    } else if (a === 1) {
      frequency = ["15-19", "20-24"];
    } else if (a === 2) {
      frequency = ["25-29", "30-34", "35-39"];
    } else if (a === 3) {
      frequency = ["40-44", "45-49", "50-54"];
    } else if (a === 4) {
      frequency = ["55-59", "60-64", "65-69"];
    } else if (a === 5) {
      frequency = ["70-74", "75-79"];
    } else if (a === 6) {
      frequency = ["80-84", "85-89", "90-94", "95-99", "100"];
    }
  }
  return frequency;
};
class Spanish extends React.Component {
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
    const val = (d, p = 0 /*1000*/) => Math.round((d / 100000) * p); // *1000);
    const calculate = (x) => (x.deaths ? x.deaths : val(x.dx, x.pop));
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      //console.log(year);
      Object.values(usmortality)[i].forEach((x) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            (avgLifetime[x.age].total + calculate(x)) / avgLifetime[x.age].total
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
    //console.log(usmortality);
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.values(usmortality)[i].forEach((x) => {
        if (x.age === "5-9" || x.age === "10-14") {
          mZeroNJData.push([year, calculate(x)]);
        } else if (x.age === "15-19" || x.age === "20-24") {
          mFiftyNJData.push([year, calculate(x)]);
        } else if (
          x.age === "25-29" ||
          x.age === "30-34" ||
          x.age === "35-39"
        ) {
          mSixtyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "40-44" ||
          x.age === "45-49" ||
          x.age === "50-54"
        ) {
          mSeventyFiveNJData.push([year, calculate(x)]);
        } else if (x.age === "55-59" || x.age === "60-64") {
          mEightyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "65-69" ||
          x.age === "70-74" ||
          x.age === "75-79"
        ) {
          mNinetyFiveNJData.push([year, calculate(x)]);
        } else if (
          x.age === "80-84" ||
          x.age === "85-89" ||
          x.age === "90-94" ||
          x.age === "95-99" ||
          x.age === "100"
        ) {
          mOneTenNJData.push([year, calculate(x)]);
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
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([x, totmZ]);
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
          Object.keys(usmortality).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = popdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
            Object.values(usmortality)[i].forEach((x) => {
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJDataAge.push([
                  year,
                  chosenRate ? x.pop * 1000 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 10 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 3 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              }
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJData.push([
                  year,
                  chosenRate ? x.pop * 1000 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 10 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 3 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 4 : val(x.dx, x.pop)
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
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalFiftyNJData = this.state.mortalFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const mortalSixtyFiveNJData = this.state.mortalSixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.yAxis) * 150
      ]
    );
    const mortalSeventyFiveNJData = this.state.mortalSeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.yAxis) * 150
      ]
    );
    const mortalEightyFiveNJData = this.state.mortalEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.yAxis) * 150
      ]
    );
    const mortalNinetyFiveNJData = this.state.mortalNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.yAxis) * 150
      ]
    );
    const mortalOneTenNJData = this.state.mortalOneTenNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
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
      <div style={{ height: "200px", ...this.props.style }}>
        {/*<div
          style={{
            position: "relative",
            top: "0px",
            height: "min-content",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          {["New Jersey"].map((x, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() =>
                  this.setState({}, () => {
                    clearTimeout(this.unHover);
                    this.unHover = setTimeout(
                      () => this.setState({ hoveredBtn: x }),
                      200
                    );
                  })
                }
                style={{
                  transition: ".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === x ? 7 : 0
                  }px  ${this.state.hoveredBtn === x ? 2 : 0.5}px black`,
                  alignItems: "center",
                  padding: "4px 7px",
                  border: this.state.chosenState === x ? "1px solid black" : {1},
                  display: "flex"
                }}
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
        <div style={{ width: "100%", height: "200px" }}>
          <div style={labelstyle}>
            <div
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
              {shortNumber(Math.round(this.state.highDeaths / 5))}
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
                textAlign: "right",
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {this.state.highlifetime} average
            </div>
            {/*<div
              style={{
                top: "200px",
                height: "min-content",
                display: "flex",
                position: "absolute",
                right: "0px",
                flexDirection: "column"
              }}
            >
              {this.state.lowDeaths}
            </div>*/}
          </div>
          <div>
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
            width: "90%"
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

export default Spanish;

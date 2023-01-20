import React from "react";
import { yearly, yearlypop } from "./mortal";
import { linecss, shortNumber } from "./vaxx";

const usdeaths = {
  /*
  1: [
    {
      year: 2018,
      deaths: 1448
    },
    {
      year: 2019,
      deaths: 1474
    },
    {
      year: 2020,
      deaths: 1364
    },
    {
      year: 2021,
      deaths: 1490
    },
    {
      year: 2022,
      deaths: 1439
    }
  ],
  2: [
    {
      year: 2018,
      deaths: 1047
    },
    {
      year: 2019,
      deaths: 916
    },
    {
      year: 2020,
      deaths: 889
    },
    {
      year: 2021,
      deaths: 960
    },
    {
      year: 2022,
      deaths: 955
    }
  ],
  3: [
    {
      year: 2018,
      deaths: 745
    },
    {
      year: 2019,
      deaths: 710
    },
    {
      year: 2020,
      deaths: 725
    },
    {
      year: 2021,
      deaths: 737
    },
    {
      year: 2022,
      deaths: 758
    }
  ],
  4: [
    {
      year: 2018,
      deaths: 590
    },
    {
      year: 2019,
      deaths: 576
    },
    {
      year: 2020,
      deaths: 551
    },
    {
      year: 2021,
      deaths: 629
    },
    {
      year: 2022,
      deaths: 581
    }
  ],
  5: [
    {
      year: 2018,
      deaths: 524
    },
    {
      year: 2019,
      deaths: 536
    },
    {
      year: 2020,
      deaths: 516
    },
    {
      year: 2021,
      deaths: 540
    },
    {
      year: 2022,
      deaths: 575
    }
  ],
  6: [
    {
      year: 2018,
      deaths: 460
    },
    {
      year: 2019,
      deaths: 490
    },
    {
      year: 2020,
      deaths: 450
    },
    {
      year: 2021,
      deaths: 517
    },
    {
      year: 2022,
      deaths: 489
    }
  ],
  7: [
    {
      year: 2018,
      deaths: 419
    },
    {
      year: 2019,
      deaths: 439
    },
    {
      year: 2020,
      deaths: 441
    },
    {
      year: 2021,
      deaths: 470
    },
    {
      year: 2022,
      deaths: 417
    }
  ],
  8: [
    {
      year: 2018,
      deaths: 457
    },
    {
      year: 2019,
      deaths: 435
    },
    {
      year: 2020,
      deaths: 405
    },
    {
      year: 2021,
      deaths: 437
    },
    {
      year: 2022,
      deaths: 429
    }
  ],
  9: [
    {
      year: 2018,
      deaths: 470
    },
    {
      year: 2019,
      deaths: 433
    },
    {
      year: 2020,
      deaths: 398
    },
    {
      year: 2021,
      deaths: 442
    },
    {
      year: 2022,
      deaths: 427
    }
  ],
  10: [
    {
      year: 2018,
      deaths: 471
    },
    {
      year: 2019,
      deaths: 480
    },
    {
      year: 2020,
      deaths: 456
    },
    {
      year: 2021,
      deaths: 494
    },
    {
      year: 2022,
      deaths: 438
    }
  ],
  11: [
    {
      year: 2018,
      deaths: 494
    },
    {
      year: 2019,
      deaths: 536
    },
    {
      year: 2020,
      deaths: 526
    },
    {
      year: 2021,
      deaths: 523
    },
    {
      year: 2022,
      deaths: 508
    }
  ],
  12: [
    {
      year: 2018,
      deaths: 589
    },
    {
      year: 2019,
      deaths: 601
    },
    {
      year: 2020,
      deaths: 617
    },
    {
      year: 2021,
      deaths: 603
    },
    {
      year: 2022,
      deaths: 583
    }
  ],
  13: [
    {
      year: 2018,
      deaths: 676
    },
    {
      year: 2019,
      deaths: 687
    },
    {
      year: 2020,
      deaths: 800
    },
    {
      year: 2021,
      deaths: 855
    },
    {
      year: 2022,
      deaths: 745
    }
  ],
  14: [
    {
      year: 2018,
      deaths: 890
    },
    {
      year: 2019,
      deaths: 860
    },
    {
      year: 2020,
      deaths: 1014
    },
    {
      year: 2021,
      deaths: 1094
    },
    {
      year: 2022,
      deaths: 1053
    }
  ],
  15: [
    {
      year: 2018,
      deaths: 1186
    },
    {
      year: 2019,
      deaths: 1137
    },
    {
      year: 2020,
      deaths: 1332
    },
    {
      year: 2021,
      deaths: 1405
    },
    {
      year: 2022,
      deaths: 1326
    }
  ],
  16: [
    {
      year: 2018,
      deaths: 1493
    },
    {
      year: 2019,
      deaths: 1485
    },
    {
      year: 2020,
      deaths: 1793
    },
    {
      year: 2021,
      deaths: 1944
    },
    {
      year: 2022,
      deaths: 1741
    }
  ],
  17: [
    {
      year: 2018,
      deaths: 2028
    },
    {
      year: 2019,
      deaths: 1886
    },
    {
      year: 2020,
      deaths: 2229
    },
    {
      year: 2021,
      deaths: 2594
    },
    {
      year: 2022,
      deaths: 2303
    }
  ],
  18: [
    {
      year: 2018,
      deaths: 2701
    },
    {
      year: 2019,
      deaths: 2732
    },
    {
      year: 2020,
      deaths: 3159
    },
    {
      year: 2021,
      deaths: 3471
    },
    {
      year: 2022,
      deaths: 2936
    }
  ],
  19: [
    {
      year: 2018,
      deaths: 2972
    },
    {
      year: 2019,
      deaths: 3018
    },
    {
      year: 2020,
      deaths: 3765
    },
    {
      year: 2021,
      deaths: 3993
    },
    {
      year: 2022,
      deaths: 3251
    }
  ],*/
  20: [
    {
      year: 2018,
      deaths: 3273
    },
    {
      year: 2019,
      deaths: 3313
    },
    {
      year: 2020,
      deaths: 3983
    },
    {
      year: 2021,
      deaths: 4263
    },
    {
      year: 2022,
      deaths: 3523
    }
  ],
  21: [
    {
      year: 2018,
      deaths: 3721
    },
    {
      year: 2019,
      deaths: 3821
    },
    {
      year: 2020,
      deaths: 4576
    },
    {
      year: 2021,
      deaths: 4778
    },
    {
      year: 2022,
      deaths: 3883
    }
  ],
  22: [
    {
      year: 2018,
      deaths: 3960
    },
    {
      year: 2019,
      deaths: 3882
    },
    {
      year: 2020,
      deaths: 4685
    },
    {
      year: 2021,
      deaths: 5066
    },
    {
      year: 2022,
      deaths: 4126
    }
  ],
  23: [
    {
      year: 2018,
      deaths: 4252
    },
    {
      year: 2019,
      deaths: 4146
    },
    {
      year: 2020,
      deaths: 5032
    },
    {
      year: 2021,
      deaths: 5212
    },
    {
      year: 2022,
      deaths: 4381
    }
  ],
  24: [
    {
      year: 2018,
      deaths: 4568
    },
    {
      year: 2019,
      deaths: 4351
    },
    {
      year: 2020,
      deaths: 5262
    },
    {
      year: 2021,
      deaths: 5581
    },
    {
      year: 2022,
      deaths: 4587
    }
  ],
  25: [
    {
      year: 2018,
      deaths: 4844
    },
    {
      year: 2019,
      deaths: 4752
    },
    {
      year: 2020,
      deaths: 5706
    },
    {
      year: 2021,
      deaths: 6028
    },
    {
      year: 2022,
      deaths: 4928
    }
  ],
  26: [
    {
      year: 2018,
      deaths: 5230
    },
    {
      year: 2019,
      deaths: 5086
    },
    {
      year: 2020,
      deaths: 5962
    },
    {
      year: 2021,
      deaths: 6477
    },
    {
      year: 2022,
      deaths: 5254
    }
  ],
  27: [
    {
      year: 2018,
      deaths: 5699
    },
    {
      year: 2019,
      deaths: 5383
    },
    {
      year: 2020,
      deaths: 6533
    },
    {
      year: 2021,
      deaths: 6961
    },
    {
      year: 2022,
      deaths: 5698
    }
  ],
  28: [
    {
      year: 2018,
      deaths: 5829
    },
    {
      year: 2019,
      deaths: 5757
    },
    {
      year: 2020,
      deaths: 6970
    },
    {
      year: 2021,
      deaths: 7525
    },
    {
      year: 2022,
      deaths: 6094
    }
  ],
  29: [
    {
      year: 2018,
      deaths: 5859
    },
    {
      year: 2019,
      deaths: 5991
    },
    {
      year: 2020,
      deaths: 7525
    },
    {
      year: 2021,
      deaths: 8204
    },
    {
      year: 2022,
      deaths: 6789
    }
  ],
  30: [
    {
      year: 2018,
      deaths: 6100
    },
    {
      year: 2019,
      deaths: 6183
    },
    {
      year: 2020,
      deaths: 7906
    },
    {
      year: 2021,
      deaths: 8746
    },
    {
      year: 2022,
      deaths: 7161
    }
  ],
  31: [
    {
      year: 2018,
      deaths: 5959
    },
    {
      year: 2019,
      deaths: 6225
    },
    {
      year: 2020,
      deaths: 7944
    },
    {
      year: 2021,
      deaths: 9187
    },
    {
      year: 2022,
      deaths: 7583
    }
  ],
  32: [
    {
      year: 2018,
      deaths: 6299
    },
    {
      year: 2019,
      deaths: 6263
    },
    {
      year: 2020,
      deaths: 8049
    },
    {
      year: 2021,
      deaths: 9477
    },
    {
      year: 2022,
      deaths: 8111
    }
  ],
  33: [
    {
      year: 2018,
      deaths: 6478
    },
    {
      year: 2019,
      deaths: 6683
    },
    {
      year: 2020,
      deaths: 8345
    },
    {
      year: 2021,
      deaths: 9727
    },
    {
      year: 2022,
      deaths: 8317
    }
  ],
  34: [
    {
      year: 2018,
      deaths: 6547
    },
    {
      year: 2019,
      deaths: 6855
    },
    {
      year: 2020,
      deaths: 8546
    },
    {
      year: 2021,
      deaths: 9942
    },
    {
      year: 2022,
      deaths: 8329
    }
  ],
  35: [
    {
      year: 2018,
      deaths: 7090
    },
    {
      year: 2019,
      deaths: 6998
    },
    {
      year: 2020,
      deaths: 8785
    },
    {
      year: 2021,
      deaths: 10459
    },
    {
      year: 2022,
      deaths: 8386
    }
  ],
  36: [
    {
      year: 2018,
      deaths: 7205
    },
    {
      year: 2019,
      deaths: 7326
    },
    {
      year: 2020,
      deaths: 9051
    },
    {
      year: 2021,
      deaths: 10777
    },
    {
      year: 2022,
      deaths: 9056
    }
  ],
  37: [
    {
      year: 2018,
      deaths: 7463
    },
    {
      year: 2019,
      deaths: 7692
    },
    {
      year: 2020,
      deaths: 9771
    },
    {
      year: 2021,
      deaths: 10989
    },
    {
      year: 2022,
      deaths: 9357
    }
  ],
  38: [
    {
      year: 2018,
      deaths: 7835
    },
    {
      year: 2019,
      deaths: 8177
    },
    {
      year: 2020,
      deaths: 9872
    },
    {
      year: 2021,
      deaths: 11785
    },
    {
      year: 2022,
      deaths: 9493
    }
  ],
  39: [
    {
      year: 2018,
      deaths: 8024
    },
    {
      year: 2019,
      deaths: 8445
    },
    {
      year: 2020,
      deaths: 10602
    },
    {
      year: 2021,
      deaths: 12393
    },
    {
      year: 2022,
      deaths: 10173
    }
  ],
  40: [
    {
      year: 2018,
      deaths: 7907
    },
    {
      year: 2019,
      deaths: 8639
    },
    {
      year: 2020,
      deaths: 10945
    },
    {
      year: 2021,
      deaths: 12868
    },
    {
      year: 2022,
      deaths: 10621
    }
  ],
  41: [
    {
      year: 2018,
      deaths: 8185
    },
    {
      year: 2019,
      deaths: 8456
    },
    {
      year: 2020,
      deaths: 11118
    },
    {
      year: 2021,
      deaths: 13430
    },
    {
      year: 2022,
      deaths: 11070
    }
  ],
  42: [
    {
      year: 2018,
      deaths: 8293
    },
    {
      year: 2019,
      deaths: 8791
    },
    {
      year: 2020,
      deaths: 10991
    },
    {
      year: 2021,
      deaths: 13741
    },
    {
      year: 2022,
      deaths: 11312
    }
  ],
  43: [
    {
      year: 2018,
      deaths: 8902
    },
    {
      year: 2019,
      deaths: 8928
    },
    {
      year: 2020,
      deaths: 11538
    },
    {
      year: 2021,
      deaths: 14013
    },
    {
      year: 2022,
      deaths: 11518
    }
  ],
  44: [
    {
      year: 2018,
      deaths: 9476
    },
    {
      year: 2019,
      deaths: 9534
    },
    {
      year: 2020,
      deaths: 11817
    },
    {
      year: 2021,
      deaths: 14484
    },
    {
      year: 2022,
      deaths: 11854
    }
  ],
  45: [
    {
      year: 2018,
      deaths: 10509
    },
    {
      year: 2019,
      deaths: 10170
    },
    {
      year: 2020,
      deaths: 12743
    },
    {
      year: 2021,
      deaths: 14688
    },
    {
      year: 2022,
      deaths: 12208
    }
  ],
  46: [
    {
      year: 2018,
      deaths: 11925
    },
    {
      year: 2019,
      deaths: 11198
    },
    {
      year: 2020,
      deaths: 13429
    },
    {
      year: 2021,
      deaths: 16035
    },
    {
      year: 2022,
      deaths: 12375
    }
  ],
  47: [
    {
      year: 2018,
      deaths: 13249
    },
    {
      year: 2019,
      deaths: 12579
    },
    {
      year: 2020,
      deaths: 14763
    },
    {
      year: 2021,
      deaths: 16611
    },
    {
      year: 2022,
      deaths: 13597
    }
  ],
  48: [
    {
      year: 2018,
      deaths: 14182
    },
    {
      year: 2019,
      deaths: 14385
    },
    {
      year: 2020,
      deaths: 16683
    },
    {
      year: 2021,
      deaths: 18350
    },
    {
      year: 2022,
      deaths: 14213
    }
  ],
  49: [
    {
      year: 2018,
      deaths: 15008
    },
    {
      year: 2019,
      deaths: 15407
    },
    {
      year: 2020,
      deaths: 18813
    },
    {
      year: 2021,
      deaths: 20460
    },
    {
      year: 2022,
      deaths: 15578
    }
  ],
  50: [
    {
      year: 2018,
      deaths: 15823
    },
    {
      year: 2019,
      deaths: 16151
    },
    {
      year: 2020,
      deaths: 20160
    },
    {
      year: 2021,
      deaths: 23482
    },
    {
      year: 2022,
      deaths: 17521
    }
  ],
  51: [
    {
      year: 2018,
      deaths: 17543
    },
    {
      year: 2019,
      deaths: 17198
    },
    {
      year: 2020,
      deaths: 20976
    },
    {
      year: 2021,
      deaths: 24506
    },
    {
      year: 2022,
      deaths: 19633
    }
  ],
  52: [
    {
      year: 2018,
      deaths: 19504
    },
    {
      year: 2019,
      deaths: 18788
    },
    {
      year: 2020,
      deaths: 22399
    },
    {
      year: 2021,
      deaths: 25787
    },
    {
      year: 2022,
      deaths: 20911
    }
  ],
  53: [
    {
      year: 2018,
      deaths: 22113
    },
    {
      year: 2019,
      deaths: 20593
    },
    {
      year: 2020,
      deaths: 24222
    },
    {
      year: 2021,
      deaths: 26940
    },
    {
      year: 2022,
      deaths: 21662
    }
  ],
  54: [
    {
      year: 2018,
      deaths: 24981
    },
    {
      year: 2019,
      deaths: 23924
    },
    {
      year: 2020,
      deaths: 26954
    },
    {
      year: 2021,
      deaths: 29178
    },
    {
      year: 2022,
      deaths: 23098
    }
  ],
  55: [
    {
      year: 2018,
      deaths: 27310
    },
    {
      year: 2019,
      deaths: 26793
    },
    {
      year: 2020,
      deaths: 30507
    },
    {
      year: 2021,
      deaths: 32093
    },
    {
      year: 2022,
      deaths: 25466
    }
  ],
  56: [
    {
      year: 2018,
      deaths: 29857
    },
    {
      year: 2019,
      deaths: 28966
    },
    {
      year: 2020,
      deaths: 33814
    },
    {
      year: 2021,
      deaths: 36286
    },
    {
      year: 2022,
      deaths: 27709
    }
  ],
  57: [
    {
      year: 2018,
      deaths: 32543
    },
    {
      year: 2019,
      deaths: 31658
    },
    {
      year: 2020,
      deaths: 36561
    },
    {
      year: 2021,
      deaths: 39713
    },
    {
      year: 2022,
      deaths: 31362
    }
  ],
  58: [
    {
      year: 2018,
      deaths: 34611
    },
    {
      year: 2019,
      deaths: 34347
    },
    {
      year: 2020,
      deaths: 39240
    },
    {
      year: 2021,
      deaths: 43036
    },
    {
      year: 2022,
      deaths: 34923
    }
  ],
  59: [
    {
      year: 2018,
      deaths: 36642
    },
    {
      year: 2019,
      deaths: 36689
    },
    {
      year: 2020,
      deaths: 43106
    },
    {
      year: 2021,
      deaths: 46480
    },
    {
      year: 2022,
      deaths: 37899
    }
  ],
  60: [
    {
      year: 2018,
      deaths: 38701
    },
    {
      year: 2019,
      deaths: 38690
    },
    {
      year: 2020,
      deaths: 46304
    },
    {
      year: 2021,
      deaths: 50028
    },
    {
      year: 2022,
      deaths: 40998
    }
  ],
  61: [
    {
      year: 2018,
      deaths: 41292
    },
    {
      year: 2019,
      deaths: 41522
    },
    {
      year: 2020,
      deaths: 48871
    },
    {
      year: 2021,
      deaths: 53114
    },
    {
      year: 2022,
      deaths: 43772
    }
  ],
  62: [
    {
      year: 2018,
      deaths: 42834
    },
    {
      year: 2019,
      deaths: 43975
    },
    {
      year: 2020,
      deaths: 51325
    },
    {
      year: 2021,
      deaths: 56107
    },
    {
      year: 2022,
      deaths: 46669
    }
  ],
  63: [
    {
      year: 2018,
      deaths: 45095
    },
    {
      year: 2019,
      deaths: 45361
    },
    {
      year: 2020,
      deaths: 54811
    },
    {
      year: 2021,
      deaths: 59156
    },
    {
      year: 2022,
      deaths: 49352
    }
  ],
  64: [
    {
      year: 2018,
      deaths: 45951
    },
    {
      year: 2019,
      deaths: 46936
    },
    {
      year: 2020,
      deaths: 56010
    },
    {
      year: 2021,
      deaths: 62158
    },
    {
      year: 2022,
      deaths: 52418
    }
  ],
  65: [
    {
      year: 2018,
      deaths: 47257
    },
    {
      year: 2019,
      deaths: 48159
    },
    {
      year: 2020,
      deaths: 58027
    },
    {
      year: 2021,
      deaths: 63017
    },
    {
      year: 2022,
      deaths: 54626
    }
  ],
  66: [
    {
      year: 2018,
      deaths: 48642
    },
    {
      year: 2019,
      deaths: 49560
    },
    {
      year: 2020,
      deaths: 59907
    },
    {
      year: 2021,
      deaths: 64542
    },
    {
      year: 2022,
      deaths: 55696
    }
  ],
  67: [
    {
      year: 2018,
      deaths: 49857
    },
    {
      year: 2019,
      deaths: 50719
    },
    {
      year: 2020,
      deaths: 61164
    },
    {
      year: 2021,
      deaths: 66260
    },
    {
      year: 2022,
      deaths: 57210
    }
  ],
  68: [
    {
      year: 2018,
      deaths: 51107
    },
    {
      year: 2019,
      deaths: 52212
    },
    {
      year: 2020,
      deaths: 62889
    },
    {
      year: 2021,
      deaths: 67828
    },
    {
      year: 2022,
      deaths: 59046
    }
  ],
  69: [
    {
      year: 2018,
      deaths: 54383
    },
    {
      year: 2019,
      deaths: 53762
    },
    {
      year: 2020,
      deaths: 64401
    },
    {
      year: 2021,
      deaths: 69337
    },
    {
      year: 2022,
      deaths: 60813
    }
  ],
  70: [
    {
      year: 2018,
      deaths: 58141
    },
    {
      year: 2019,
      deaths: 57343
    },
    {
      year: 2020,
      deaths: 67279
    },
    {
      year: 2021,
      deaths: 71438
    },
    {
      year: 2022,
      deaths: 63002
    }
  ],
  71: [
    {
      year: 2018,
      deaths: 63825
    },
    {
      year: 2019,
      deaths: 61396
    },
    {
      year: 2020,
      deaths: 71049
    },
    {
      year: 2021,
      deaths: 73244
    },
    {
      year: 2022,
      deaths: 64523
    }
  ],
  72: [
    {
      year: 2018,
      deaths: 53943
    },
    {
      year: 2019,
      deaths: 67130
    },
    {
      year: 2020,
      deaths: 76103
    },
    {
      year: 2021,
      deaths: 76986
    },
    {
      year: 2022,
      deaths: 66595
    }
  ],
  73: [
    {
      year: 2018,
      deaths: 56033
    },
    {
      year: 2019,
      deaths: 56853
    },
    {
      year: 2020,
      deaths: 82553
    },
    {
      year: 2021,
      deaths: 82282
    },
    {
      year: 2022,
      deaths: 70731
    }
  ],
  74: [
    {
      year: 2018,
      deaths: 60590
    },
    {
      year: 2019,
      deaths: 58425
    },
    {
      year: 2020,
      deaths: 71135
    },
    {
      year: 2021,
      deaths: 89332
    },
    {
      year: 2022,
      deaths: 76021
    }
  ],
  75: [
    {
      year: 2018,
      deaths: 66524
    },
    {
      year: 2019,
      deaths: 63147
    },
    {
      year: 2020,
      deaths: 72225
    },
    {
      year: 2021,
      deaths: 75408
    },
    {
      year: 2022,
      deaths: 82919
    }
  ],
  76: [
    {
      year: 2018,
      deaths: 63365
    },
    {
      year: 2019,
      deaths: 69019
    },
    {
      year: 2020,
      deaths: 78100
    },
    {
      year: 2021,
      deaths: 76850
    },
    {
      year: 2022,
      deaths: 69370
    }
  ],
  77: [
    {
      year: 2018,
      deaths: 63017
    },
    {
      year: 2019,
      deaths: 65894
    },
    {
      year: 2020,
      deaths: 85310
    },
    {
      year: 2021,
      deaths: 82078
    },
    {
      year: 2022,
      deaths: 71555
    }
  ],
  78: [
    {
      year: 2018,
      deaths: 63188
    },
    {
      year: 2019,
      deaths: 65124
    },
    {
      year: 2020,
      deaths: 82048
    },
    {
      year: 2021,
      deaths: 89267
    },
    {
      year: 2022,
      deaths: 77275
    }
  ],
  79: [
    {
      year: 2018,
      deaths: 65651
    },
    {
      year: 2019,
      deaths: 66309
    },
    {
      year: 2020,
      deaths: 80508
    },
    {
      year: 2021,
      deaths: 85264
    },
    {
      year: 2022,
      deaths: 83071
    }
  ],
  80: [
    {
      year: 2018,
      deaths: 67987
    },
    {
      year: 2019,
      deaths: 68349
    },
    {
      year: 2020,
      deaths: 81661
    },
    {
      year: 2021,
      deaths: 83293
    },
    {
      year: 2022,
      deaths: 79593
    }
  ],
  81: [
    {
      year: 2018,
      deaths: 68584
    },
    {
      year: 2019,
      deaths: 70621
    },
    {
      year: 2020,
      deaths: 83337
    },
    {
      year: 2021,
      deaths: 83194
    },
    {
      year: 2022,
      deaths: 77443
    }
  ],
  82: [
    {
      year: 2018,
      deaths: 71290
    },
    {
      year: 2019,
      deaths: 71124
    },
    {
      year: 2020,
      deaths: 85630
    },
    {
      year: 2021,
      deaths: 84204
    },
    {
      year: 2022,
      deaths: 77200
    }
  ],
  83: [
    {
      year: 2018,
      deaths: 73173
    },
    {
      year: 2019,
      deaths: 73524
    },
    {
      year: 2020,
      deaths: 85649
    },
    {
      year: 2021,
      deaths: 85763
    },
    {
      year: 2022,
      deaths: 78963
    }
  ],
  84: [
    {
      year: 2018,
      deaths: 72426
    },
    {
      year: 2019,
      deaths: 74916
    },
    {
      year: 2020,
      deaths: 87616
    },
    {
      year: 2021,
      deaths: 84332
    },
    {
      year: 2022,
      deaths: 80123
    }
  ],
  85: [
    {
      year: 2018,
      deaths: 75023
    },
    {
      year: 2019,
      deaths: 73207
    },
    {
      year: 2020,
      deaths: 89658
    },
    {
      year: 2021,
      deaths: 85402
    },
    {
      year: 2022,
      deaths: 78963
    }
  ],
  86: [
    {
      year: 2018,
      deaths: 76643
    },
    {
      year: 2019,
      deaths: 75293
    },
    {
      year: 2020,
      deaths: 86428
    },
    {
      year: 2021,
      deaths: 85647
    },
    {
      year: 2022,
      deaths: 79036
    }
  ],
  87: [
    {
      year: 2018,
      deaths: 77989
    },
    {
      year: 2019,
      deaths: 76921
    },
    {
      year: 2020,
      deaths: 87456
    },
    {
      year: 2021,
      deaths: 82347
    },
    {
      year: 2022,
      deaths: 78644
    }
  ],
  88: [
    {
      year: 2018,
      deaths: 79099
    },
    {
      year: 2019,
      deaths: 76891
    },
    {
      year: 2020,
      deaths: 88017
    },
    {
      year: 2021,
      deaths: 81399
    },
    {
      year: 2022,
      deaths: 75047
    }
  ],
  89: [
    {
      year: 2018,
      deaths: 76362
    },
    {
      year: 2019,
      deaths: 76604
    },
    {
      year: 2020,
      deaths: 87692
    },
    {
      year: 2021,
      deaths: 80105
    },
    {
      year: 2022,
      deaths: 73788
    }
  ],
  90: [
    {
      year: 2018,
      deaths: 74794
    },
    {
      year: 2019,
      deaths: 72782
    },
    {
      year: 2020,
      deaths: 85205
    },
    {
      year: 2021,
      deaths: 78349
    },
    {
      year: 2022,
      deaths: 71872
    }
  ],
  91: [
    {
      year: 2018,
      deaths: 70835
    },
    {
      year: 2019,
      deaths: 69883
    },
    {
      year: 2020,
      deaths: 79355
    },
    {
      year: 2021,
      deaths: 74304
    },
    {
      year: 2022,
      deaths: 68737
    }
  ],
  92: [
    {
      year: 2018,
      deaths: 64200
    },
    {
      year: 2019,
      deaths: 64861
    },
    {
      year: 2020,
      deaths: 74460
    },
    {
      year: 2021,
      deaths: 67808
    },
    {
      year: 2022,
      deaths: 64333
    }
  ],
  93: [
    {
      year: 2018,
      deaths: 58805
    },
    {
      year: 2019,
      deaths: 58116
    },
    {
      year: 2020,
      deaths: 67957
    },
    {
      year: 2021,
      deaths: 61964
    },
    {
      year: 2022,
      deaths: 57297
    }
  ],
  94: [
    {
      year: 2018,
      deaths: 51435
    },
    {
      year: 2019,
      deaths: 51841
    },
    {
      year: 2020,
      deaths: 58709
    },
    {
      year: 2021,
      deaths: 54499
    },
    {
      year: 2022,
      deaths: 51402
    }
  ],
  95: [
    {
      year: 2018,
      deaths: 43573
    },
    {
      year: 2019,
      deaths: 43876
    },
    {
      year: 2020,
      deaths: 50701
    },
    {
      year: 2021,
      deaths: 46243
    },
    {
      year: 2022,
      deaths: 44205
    }
  ],
  96: [
    {
      year: 2018,
      deaths: 36338
    },
    {
      year: 2019,
      deaths: 36034
    },
    {
      year: 2020,
      deaths: 42141
    },
    {
      year: 2021,
      deaths: 38138
    },
    {
      year: 2022,
      deaths: 36098
    }
  ],
  97: [
    {
      year: 2018,
      deaths: 28908
    },
    {
      year: 2019,
      deaths: 28978
    },
    {
      year: 2020,
      deaths: 33368
    },
    {
      year: 2021,
      deaths: 30531
    },
    {
      year: 2022,
      deaths: 29149
    }
  ],
  98: [
    {
      year: 2018,
      deaths: 21307
    },
    {
      year: 2019,
      deaths: 22195
    },
    {
      year: 2020,
      deaths: 25839
    },
    {
      year: 2021,
      deaths: 23085
    },
    {
      year: 2022,
      deaths: 22618
    }
  ],
  99: [
    {
      year: 2018,
      deaths: 14720
    },
    {
      year: 2019,
      deaths: 15533
    },
    {
      year: 2020,
      deaths: 19187
    },
    {
      year: 2021,
      deaths: 17462
    },
    {
      year: 2022,
      deaths: 16577
    }
  ],
  100: [
    {
      year: 2018,
      deaths: 21307
    },
    {
      year: 2019,
      deaths: 22195
    },
    {
      year: 2020,
      deaths: 25839
    },
    {
      year: 2021,
      deaths: 23085
    },
    {
      year: 2022,
      deaths: 22618
    }
  ],
  101: [
    {
      year: 2018,
      deaths: 30249
    },
    {
      year: 2019,
      deaths: 30731
    },
    {
      year: 2020,
      deaths: 36632
    },
    {
      year: 2021,
      deaths: 33496
    },
    {
      year: 2022,
      deaths: 33444
    }
  ]
};
export default class Rapid extends React.Component {
  constructor(props) {
    super(props);

    const yp = {
      "1990": {
        "20": 4054116,
        "21": 3836827,
        "22": 3671346,
        "23": 3708282,
        "24": 3879815,
        "25": 4072660,
        "26": 4193967,
        "27": 4289896
      }
    };
    const yealy = {
      "1999": {
        "0": 27937,
        "1": 1989,
        "2": 1376
      }
    };
    const minAge = 30,
      maxAge = 70;
    let dates = [];
    let populationData = {};
    let deathData = {};
    let alldeaths = [];
    let all = [];
    Object.keys(yearlypop).forEach((year) => {
      dates.push(year);
      Object.keys(usdeaths).forEach((age) => {
        if (year < 2018) {
          if (Number(age) < minAge || Number(age) > maxAge) return null;
          if (!populationData[age]) populationData[age] = [];
          populationData[age].push([year, yearlypop[year][age]]);
          if (!deathData[age]) deathData[age] = [];
          const deaths = yearly[year] && yearly[year][age];
          if (!deaths || !yearlypop[year][age]) return null; //console.log("deathObj", yearly[year]);
          alldeaths.push(deaths / yearlypop[year][age]);
          deathData[age].push([year, deaths / yearlypop[year][age]]);

          return null;
        }
        if (Number(age) < minAge || Number(age) > maxAge) return null;
        if (!populationData[age]) populationData[age] = [];
        populationData[age].push([year, yearlypop[year][age]]);
        if (!deathData[age]) deathData[age] = [];
        const deathObj = usdeaths[age].find(
          (x) => String(x.year) === String(year)
        );
        if (!deathObj || !yearlypop[year][age]) return null; //console.log("deathObj", deathObj);
        alldeaths.push(deathObj.deaths / yearlypop[year][age]);
        all.push(deathObj.deaths); // / yearlypop[year][age]);
        deathData[age].push([year, deathObj.deaths / yearlypop[year][age]]);
      });
    });

    var highDeaths = Math.max(...alldeaths),
      highestDeaths = Math.max(...all),
      lowDeaths = Math.min(...alldeaths),
      highDate = Math.max(...dates),
      lowDate = Math.min(...dates);
    console.log(highDeaths);
    this.state = {
      noData: [],
      deathsData: [],
      deathData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      highDeaths,
      lowDeaths,
      highDate,
      lowDate,
      highestDeaths,
      minAge,
      maxAge
    };
  }
  componentDidUpdate = () => {
    /*if (this.state.singleToggle !== this.state.lastSingleToggle) {
      this.setState({
        lastSingleToggle: this.state.singleToggle
      });
    }*/
    if (
      this.state.minAge !== this.state.lastMinAge ||
      this.state.maxAge !== this.state.lastMaxAge
    ) {
      this.setState(
        {
          lastMaxAge: this.state.maxAge,
          lastMinAge: this.state.minAge
        },
        () => {
          const compare = this.state.singleToggle
            ? this.state.maxAge
            : this.state.minAge;
          let dates = [];
          let populationData = {};
          let deathData = {};
          let alldeaths = [];
          let all = [];
          Object.keys(yearlypop).forEach((year) => {
            dates.push(year);
            Object.keys(usdeaths).forEach((age) => {
              if (year < 2018) {
                if (Number(age) < compare || Number(age) > this.state.maxAge)
                  return null;
                if (!populationData[age]) populationData[age] = [];
                populationData[age].push([year, yearlypop[year][age]]);
                if (!deathData[age]) deathData[age] = [];
                const deaths = yearly[year] && yearly[year][age];
                if (!deaths || !yearlypop[year][age]) return null; //console.log("deathObj", yearly[year]);
                alldeaths.push(deaths / yearlypop[year][age]);
                deathData[age].push([year, deaths / yearlypop[year][age]]);

                return null;
              }
              if (Number(age) < compare || Number(age) > this.state.maxAge)
                return null;
              if (!populationData[age]) populationData[age] = [];
              populationData[age].push([year, yearlypop[year][age]]);
              if (!deathData[age]) deathData[age] = [];
              const deathObj = usdeaths[age].find(
                (x) => String(x.year) === String(year)
              );
              if (!deathObj || !yearlypop[year][age]) return null; //console.log("deathObj", deathObj);
              alldeaths.push(deathObj.deaths / yearlypop[year][age]);
              all.push(deathObj.deaths); // / yearlypop[year][age]);
              deathData[age].push([
                year,
                deathObj.deaths / yearlypop[year][age]
              ]);
            });
          });

          var highDeaths = Math.max(...alldeaths),
            highestDeaths = Math.max(...all),
            lowDeaths = Math.min(...alldeaths),
            highDate = Math.max(...dates),
            lowDate = Math.min(...dates);
          console.log(highDeaths);
          this.setState({
            noData: [],
            deathsData: [],
            deathData,
            yAxis: highDeaths - lowDeaths,
            xAxis: highDate - lowDate,
            highDeaths,
            lowDeaths,
            highDate,
            lowDate,
            highestDeaths
          });
        }
      );
    }
  };
  render() {
    const yaxis = this.state.yAxis;
    const { lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    var deathsData = {};
    Object.keys(this.state.deathData).forEach((age) => {
      deathsData[age] = this.state.deathData[age].map(([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]);
    });
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
    const space = " ";
    //console.log(deathsData);
    return (
      <div style={{ ...this.props.style, position: "relative" }}>
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div style={labelstyle}>
            most annual single age deaths{" "}
            {shortNumber(Math.round(this.state.highestDeaths /*/5 */))}:{space}
            {lowDate}
            {space}-{space}
            {this.state.highDate}
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
              {/** */}
              {Object.keys(deathsData).map((age) => {
                return deathsData[age].map(
                  ([x, y], i) =>
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={2}
                        stroke={`rgb(${(age / 100) * 250},${0},${200})`}
                        fill="blue"
                        strokeWidth={3}
                        key={i}
                      />
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
          <input
            type="number"
            onChange={(e) => {
              const minAge = e.target.value;
              this.setState({ minAge: minAge > 19 ? minAge : 20 });
            }}
            value={this.state.minAge}
          />
          <input
            type="number"
            onChange={(e) => {
              const maxAge = e.target.value;
              this.setState({
                maxAge: maxAge < 101 ? maxAge : 100,
                minAge: this.state.singleToggle ? maxAge : this.state.minAge
              });
            }}
            value={this.state.maxAge}
          />
          <div
            onClick={() => {
              this.setState({ maxAge: 84, minAge: 72 });
            }}
          >
            old
          </div>
          {space}&bull;{space}
          <div
            onClick={() => {
              this.setState({ maxAge: 70, minAge: 30 });
            }}
          >
            general
          </div>
          {space}&bull;{space}
          <div
            onClick={() => {
              this.setState({ maxAge: 89, minAge: 85 });
            }}
          >
            plant
          </div>
          {space}&bull;{space}
          <div
            onClick={() => {
              this.setState({ maxAge: 20, minAge: 20 });
            }}
          >
            20
          </div>
          {space}&bull;{space}
          <input
            type="checkbox"
            value={this.state.singleToggle}
            onClick={(e) => {
              const singleToggle = e.target.checked;
              console.log(singleToggle);
              this.setState({
                singleToggle,
                minAge: this.state[singleToggle ? "maxAge" : "minAge"]
              });
            }}
          />
          single
        </div>
      </div>
    );
  }
}

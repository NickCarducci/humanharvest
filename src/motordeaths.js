import React from "react";
import { linecss, shortNumber } from "./vaxx";

const motordeaths = {
  Mississippi: [
    {
      year: 2021,
      rate: 29.4
    },
    {
      year: 2020,
      rate: 28.4
    },
    {
      year: 2016,
      rate: 26.3
    },
    {
      year: 2017,
      rate: 25.8
    },
    {
      year: 2015,
      rate: 25.7
    },
    {
      year: 2019,
      rate: 25.2
    },
    {
      year: 2011,
      rate: 24.4
    },
    {
      year: 2018,
      rate: 23.6
    },
    {
      year: 2010,
      rate: 23
    },
    {
      year: 2013,
      rate: 22.8
    },
    {
      year: 2014,
      rate: 22.5
    },
    {
      year: 2012,
      rate: 19.5
    }
  ],
  Wyoming: [
    {
      year: 2010,
      rate: 24.5
    },
    {
      year: 2015,
      rate: 22.9
    },
    {
      year: 2014,
      rate: 21.2
    },
    {
      year: 2012,
      rate: 20.8
    },
    {
      year: 2020,
      rate: 19.7
    },
    {
      year: 2011,
      rate: 19.4
    },
    {
      year: 2019,
      rate: 19.4
    },
    {
      year: 2017,
      rate: 19
    },
    {
      year: 2016,
      rate: 18.1
    },
    {
      year: 2021,
      rate: 17.3
    },
    {
      year: 2018,
      rate: 16.6
    },
    {
      year: 2013,
      rate: 15.6
    }
  ],
  Montana: [
    {
      year: 2021,
      rate: 24.4
    },
    {
      year: 2013,
      rate: 23.3
    },
    {
      year: 2015,
      rate: 21.3
    },
    {
      year: 2011,
      rate: 20.7
    },
    {
      year: 2012,
      rate: 20.4
    },
    {
      year: 2014,
      rate: 19.9
    },
    {
      year: 2010,
      rate: 19.4
    },
    {
      year: 2020,
      rate: 19.2
    },
    {
      year: 2016,
      rate: 19.1
    },
    {
      year: 2019,
      rate: 18.1
    },
    {
      year: 2017,
      rate: 17
    },
    {
      year: 2018,
      rate: 16.8
    }
  ],
  "North Dakota": [
    {
      year: 2012,
      rate: 24.3
    },
    {
      year: 2011,
      rate: 20.3
    },
    {
      year: 2015,
      rate: 18.1
    },
    {
      year: 2013,
      rate: 17.1
    },
    {
      year: 2016,
      rate: 16.6
    },
    {
      year: 2017,
      rate: 15.6
    },
    {
      year: 2021,
      rate: 15.4
    },
    {
      year: 2010,
      rate: 14.4
    },
    {
      year: 2014,
      rate: 13.9
    },
    {
      year: 2018,
      rate: 13.9
    },
    {
      year: 2020,
      rate: 13.6
    },
    {
      year: 2019,
      rate: 13.4
    }
  ],
  Arkansas: [
    {
      year: 2021,
      rate: 24.2
    },
    {
      year: 2020,
      rate: 22.5
    },
    {
      year: 2016,
      rate: 21.2
    },
    {
      year: 2010,
      rate: 20.9
    },
    {
      year: 2011,
      rate: 20.3
    },
    {
      year: 2015,
      rate: 19.9
    },
    {
      year: 2017,
      rate: 19.3
    },
    {
      year: 2012,
      rate: 18.7
    },
    {
      year: 2019,
      rate: 18.4
    },
    {
      year: 2018,
      rate: 18.3
    },
    {
      year: 2013,
      rate: 18.1
    },
    {
      year: 2014,
      rate: 17.9
    }
  ],
  Alabama: [
    {
      year: 2016,
      rate: 23.8
    },
    {
      year: 2018,
      rate: 21.8
    },
    {
      year: 2017,
      rate: 21.2
    },
    {
      year: 2021,
      rate: 21
    },
    {
      year: 2019,
      rate: 20.6
    },
    {
      year: 2020,
      rate: 20
    },
    {
      year: 2011,
      rate: 19.9
    },
    {
      year: 2015,
      rate: 19.8
    },
    {
      year: 2010,
      rate: 19.5
    },
    {
      year: 2013,
      rate: 18.8
    },
    {
      year: 2014,
      rate: 18.5
    },
    {
      year: 2012,
      rate: 17.9
    }
  ],
  "South Carolina": [
    {
      year: 2021,
      rate: 23.7
    },
    {
      year: 2016,
      rate: 21.6
    },
    {
      year: 2020,
      rate: 21.4
    },
    {
      year: 2017,
      rate: 21.1
    },
    {
      year: 2018,
      rate: 20.3
    },
    {
      year: 2015,
      rate: 20.1
    },
    {
      year: 2019,
      rate: 19.7
    },
    {
      year: 2011,
      rate: 18.5
    },
    {
      year: 2012,
      rate: 18.3
    },
    {
      year: 2010,
      rate: 17.6
    },
    {
      year: 2014,
      rate: 16.7
    },
    {
      year: 2013,
      rate: 16.5
    }
  ],
  "New Mexico": [
    {
      year: 2021,
      rate: 22.3
    },
    {
      year: 2016,
      rate: 20
    },
    {
      year: 2020,
      rate: 20
    },
    {
      year: 2017,
      rate: 19.1
    },
    {
      year: 2019,
      rate: 19.1
    },
    {
      year: 2014,
      rate: 18.9
    },
    {
      year: 2018,
      rate: 18.9
    },
    {
      year: 2012,
      rate: 17.8
    },
    {
      year: 2015,
      rate: 16.4
    },
    {
      year: 2010,
      rate: 16.1
    },
    {
      year: 2013,
      rate: 15.6
    },
    {
      year: 2011,
      rate: 15.3
    }
  ],
  Louisiana: [
    {
      year: 2021,
      rate: 22.2
    },
    {
      year: 2020,
      rate: 18.4
    },
    {
      year: 2016,
      rate: 17.8
    },
    {
      year: 2017,
      rate: 17.6
    },
    {
      year: 2018,
      rate: 17.4
    },
    {
      year: 2014,
      rate: 17.3
    },
    {
      year: 2015,
      rate: 17.2
    },
    {
      year: 2013,
      rate: 16.5
    },
    {
      year: 2019,
      rate: 16.4
    },
    {
      year: 2011,
      rate: 16.3
    },
    {
      year: 2010,
      rate: 15.8
    },
    {
      year: 2012,
      rate: 15.7
    }
  ],
  Oklahoma: [
    {
      year: 2021,
      rate: 20.7
    },
    {
      year: 2011,
      rate: 19.7
    },
    {
      year: 2010,
      rate: 19.1
    },
    {
      year: 2013,
      rate: 18.9
    },
    {
      year: 2014,
      rate: 18.8
    },
    {
      year: 2012,
      rate: 18.6
    },
    {
      year: 2016,
      rate: 18.4
    },
    {
      year: 2017,
      rate: 18.4
    },
    {
      year: 2020,
      rate: 18
    },
    {
      year: 2018,
      rate: 17.9
    },
    {
      year: 2019,
      rate: 17.4
    },
    {
      year: 2015,
      rate: 17.2
    }
  ],
  Tennessee: [
    {
      year: 2021,
      rate: 20.5
    },
    {
      year: 2020,
      rate: 18.4
    },
    {
      year: 2010,
      rate: 17.3
    },
    {
      year: 2019,
      rate: 17.3
    },
    {
      year: 2016,
      rate: 16.5
    },
    {
      year: 2018,
      rate: 16.4
    },
    {
      year: 2011,
      rate: 16.3
    },
    {
      year: 2017,
      rate: 16.2
    },
    {
      year: 2012,
      rate: 15.7
    },
    {
      year: 2013,
      rate: 15.7
    },
    {
      year: 2014,
      rate: 15.2
    },
    {
      year: 2015,
      rate: 15
    }
  ],
  "West Virginia": [
    {
      year: 2011,
      rate: 20.3
    },
    {
      year: 2017,
      rate: 18.6
    },
    {
      year: 2018,
      rate: 18.4
    },
    {
      year: 2019,
      rate: 18.4
    },
    {
      year: 2012,
      rate: 18.3
    },
    {
      year: 2013,
      rate: 17.8
    },
    {
      year: 2014,
      rate: 17.5
    },
    {
      year: 2020,
      rate: 17
    },
    {
      year: 2021,
      rate: 16.8
    },
    {
      year: 2010,
      rate: 16.7
    },
    {
      year: 2015,
      rate: 16.5
    },
    {
      year: 2016,
      rate: 16.3
    }
  ],
  Kentucky: [
    {
      year: 2016,
      rate: 19.7
    },
    {
      year: 2020,
      rate: 19.2
    },
    {
      year: 2010,
      rate: 18.9
    },
    {
      year: 2015,
      rate: 18.8
    },
    {
      year: 2017,
      rate: 18.7
    },
    {
      year: 2021,
      rate: 18.2
    },
    {
      year: 2011,
      rate: 17.3
    },
    {
      year: 2018,
      rate: 17.3
    },
    {
      year: 2019,
      rate: 17.1
    },
    {
      year: 2012,
      rate: 17
    },
    {
      year: 2014,
      rate: 16.2
    },
    {
      year: 2013,
      rate: 15.8
    }
  ],
  "South Dakota": [
    {
      year: 2021,
      rate: 19.3
    },
    {
      year: 2017,
      rate: 19
    },
    {
      year: 2014,
      rate: 18.5
    },
    {
      year: 2010,
      rate: 17.7
    },
    {
      year: 2018,
      rate: 17.7
    },
    {
      year: 2013,
      rate: 17.2
    },
    {
      year: 2020,
      rate: 17.1
    },
    {
      year: 2015,
      rate: 16.7
    },
    {
      year: 2012,
      rate: 16
    },
    {
      year: 2016,
      rate: 15.8
    },
    {
      year: 2019,
      rate: 15.1
    },
    {
      year: 2011,
      rate: 12.5
    }
  ],
  Arizona: [
    {
      year: 2021,
      rate: 18.8
    },
    {
      year: 2017,
      rate: 14.5
    },
    {
      year: 2018,
      rate: 14.5
    },
    {
      year: 2016,
      rate: 14.3
    },
    {
      year: 2020,
      rate: 14
    },
    {
      year: 2015,
      rate: 13.5
    },
    {
      year: 2011,
      rate: 13.4
    },
    {
      year: 2019,
      rate: 13.4
    },
    {
      year: 2013,
      rate: 13
    },
    {
      year: 2014,
      rate: 12.7
    },
    {
      year: 2012,
      rate: 12.5
    },
    {
      year: 2010,
      rate: 12.4
    }
  ],
  Georgia: [
    {
      year: 2021,
      rate: 18.3
    },
    {
      year: 2020,
      rate: 16.7
    },
    {
      year: 2016,
      rate: 15.8
    },
    {
      year: 2017,
      rate: 14.9
    },
    {
      year: 2018,
      rate: 14.5
    },
    {
      year: 2019,
      rate: 14.5
    },
    {
      year: 2015,
      rate: 14.4
    },
    {
      year: 2010,
      rate: 13.7
    },
    {
      year: 2011,
      rate: 13.1
    },
    {
      year: 2013,
      rate: 12.7
    },
    {
      year: 2014,
      rate: 12.7
    },
    {
      year: 2012,
      rate: 12.1
    }
  ],
  "North Carolina": [
    {
      year: 2021,
      rate: 18.2
    },
    {
      year: 2020,
      rate: 16.7
    },
    {
      year: 2018,
      rate: 15.3
    },
    {
      year: 2019,
      rate: 15.3
    },
    {
      year: 2016,
      rate: 15.2
    },
    {
      year: 2015,
      rate: 15.1
    },
    {
      year: 2017,
      rate: 14.8
    },
    {
      year: 2010,
      rate: 14.5
    },
    {
      year: 2014,
      rate: 14
    },
    {
      year: 2013,
      rate: 13.8
    },
    {
      year: 2011,
      rate: 13.1
    },
    {
      year: 2012,
      rate: 12.9
    }
  ],
  Florida: [
    {
      year: 2021,
      rate: 17.9
    },
    {
      year: 2020,
      rate: 16.2
    },
    {
      year: 2016,
      rate: 15.7
    },
    {
      year: 2017,
      rate: 15.4
    },
    {
      year: 2019,
      rate: 15.4
    },
    {
      year: 2018,
      rate: 15.2
    },
    {
      year: 2015,
      rate: 14.7
    },
    {
      year: 2010,
      rate: 13.5
    },
    {
      year: 2011,
      rate: 13.2
    },
    {
      year: 2014,
      rate: 13
    },
    {
      year: 2012,
      rate: 12.6
    },
    {
      year: 2013,
      rate: 12.5
    }
  ],
  Missouri: [
    {
      year: 2021,
      rate: 17.2
    },
    {
      year: 2020,
      rate: 16.8
    },
    {
      year: 2016,
      rate: 16.5
    },
    {
      year: 2017,
      rate: 16.3
    },
    {
      year: 2019,
      rate: 15.7
    },
    {
      year: 2018,
      rate: 15.6
    },
    {
      year: 2015,
      rate: 15.3
    },
    {
      year: 2010,
      rate: 14.5
    },
    {
      year: 2011,
      rate: 14.1
    },
    {
      year: 2012,
      rate: 13.7
    },
    {
      year: 2014,
      rate: 13.2
    },
    {
      year: 2013,
      rate: 12.9
    }
  ],
  Kansas: [
    {
      year: 2010,
      rate: 16.9
    },
    {
      year: 2021,
      rate: 16
    },
    {
      year: 2017,
      rate: 15.8
    },
    {
      year: 2016,
      rate: 14.9
    },
    {
      year: 2020,
      rate: 14.7
    },
    {
      year: 2011,
      rate: 14.6
    },
    {
      year: 2012,
      rate: 14
    },
    {
      year: 2018,
      rate: 14
    },
    {
      year: 2019,
      rate: 13.9
    },
    {
      year: 2015,
      rate: 13.7
    },
    {
      year: 2013,
      rate: 13.1
    },
    {
      year: 2014,
      rate: 13.1
    }
  ],
  Idaho: [
    {
      year: 2021,
      rate: 16.6
    },
    {
      year: 2013,
      rate: 16.2
    },
    {
      year: 2016,
      rate: 16.1
    },
    {
      year: 2017,
      rate: 15.8
    },
    {
      year: 2015,
      rate: 14.7
    },
    {
      year: 2018,
      rate: 14.3
    },
    {
      year: 2019,
      rate: 14.3
    },
    {
      year: 2010,
      rate: 13.7
    },
    {
      year: 2011,
      rate: 13.4
    },
    {
      year: 2020,
      rate: 13.3
    },
    {
      year: 2014,
      rate: 13
    },
    {
      year: 2012,
      rate: 11.5
    }
  ],
  Texas: [
    {
      year: 2021,
      rate: 15.5
    },
    {
      year: 2016,
      rate: 14.4
    },
    {
      year: 2020,
      rate: 13.9
    },
    {
      year: 2014,
      rate: 13.8
    },
    {
      year: 2017,
      rate: 13.8
    },
    {
      year: 2013,
      rate: 13.7
    },
    {
      year: 2015,
      rate: 13.5
    },
    {
      year: 2010,
      rate: 13.3
    },
    {
      year: 2019,
      rate: 13.3
    },
    {
      year: 2018,
      rate: 13.2
    },
    {
      year: 2012,
      rate: 13
    },
    {
      year: 2011,
      rate: 12.9
    }
  ],
  Delaware: [
    {
      year: 2021,
      rate: 14.7
    },
    {
      year: 2019,
      rate: 13.7
    },
    {
      year: 2015,
      rate: 13.6
    },
    {
      year: 2014,
      rate: 13.5
    },
    {
      year: 2017,
      rate: 13.2
    },
    {
      year: 2012,
      rate: 12.6
    },
    {
      year: 2020,
      rate: 12.6
    },
    {
      year: 2010,
      rate: 12.4
    },
    {
      year: 2013,
      rate: 12.4
    },
    {
      year: 2018,
      rate: 12.4
    },
    {
      year: 2016,
      rate: 12.3
    },
    {
      year: 2011,
      rate: 10.8
    }
  ],
  Indiana: [
    {
      year: 2021,
      rate: 14.7
    },
    {
      year: 2020,
      rate: 14.1
    },
    {
      year: 2017,
      rate: 13.8
    },
    {
      year: 2018,
      rate: 13
    },
    {
      year: 2019,
      rate: 13
    },
    {
      year: 2015,
      rate: 12.9
    },
    {
      year: 2016,
      rate: 12.8
    },
    {
      year: 2013,
      rate: 12.6
    },
    {
      year: 2012,
      rate: 11.9
    },
    {
      year: 2010,
      rate: 11.8
    },
    {
      year: 2011,
      rate: 11.7
    },
    {
      year: 2014,
      rate: 11.6
    }
  ],
  Oregon: [
    {
      year: 2021,
      rate: 14.3
    },
    {
      year: 2016,
      rate: 12.8
    },
    {
      year: 2019,
      rate: 12.7
    },
    {
      year: 2015,
      rate: 12.4
    },
    {
      year: 2020,
      rate: 12.4
    },
    {
      year: 2017,
      rate: 12.3
    },
    {
      year: 2018,
      rate: 11.8
    },
    {
      year: 2011,
      rate: 9.6
    },
    {
      year: 2014,
      rate: 9.5
    },
    {
      year: 2013,
      rate: 9.2
    },
    {
      year: 2012,
      rate: 8.6
    },
    {
      year: 2010,
      rate: 8.5
    }
  ],
  Maine: [
    {
      year: 2017,
      rate: 14.2
    },
    {
      year: 2020,
      rate: 13.9
    },
    {
      year: 2021,
      rate: 13.4
    },
    {
      year: 2016,
      rate: 13.2
    },
    {
      year: 2010,
      rate: 12.9
    },
    {
      year: 2019,
      rate: 12.7
    },
    {
      year: 2013,
      rate: 12.6
    },
    {
      year: 2012,
      rate: 12.3
    },
    {
      year: 2018,
      rate: 11.7
    },
    {
      year: 2011,
      rate: 11.5
    },
    {
      year: 2015,
      rate: 11.4
    },
    {
      year: 2014,
      rate: 10.8
    }
  ],
  "United States": [
    {
      year: 2021,
      rate: 14.2
    },
    {
      year: 2020,
      rate: 12.9
    },
    {
      year: 2016,
      rate: 12.5
    },
    {
      year: 2017,
      rate: 12.3
    },
    {
      year: 2018,
      rate: 12
    },
    {
      year: 2019,
      rate: 11.9
    },
    {
      year: 2012,
      rate: 11.6
    },
    {
      year: 2010,
      rate: 11.4
    },
    {
      year: 2011,
      rate: 11.3
    },
    {
      year: 2013,
      rate: 11.2
    },
    {
      year: 2014,
      rate: 11.1
    },
    {
      year: 2015,
      rate: 1.5
    }
  ],
  Nebraska: [
    {
      year: 2015,
      rate: 14.1
    },
    {
      year: 2019,
      rate: 13.6
    },
    {
      year: 2017,
      rate: 13.5
    },
    {
      year: 2014,
      rate: 13.4
    },
    {
      year: 2018,
      rate: 13.1
    },
    {
      year: 2021,
      rate: 12.9
    },
    {
      year: 2013,
      rate: 12.7
    },
    {
      year: 2020,
      rate: 12.3
    },
    {
      year: 2010,
      rate: 11.6
    },
    {
      year: 2012,
      rate: 11.4
    },
    {
      year: 2016,
      rate: 11.3
    },
    {
      year: 2011,
      rate: 10.3
    }
  ],
  Iowa: [
    {
      year: 2016,
      rate: 13.7
    },
    {
      year: 2010,
      rate: 13.1
    },
    {
      year: 2011,
      rate: 13.1
    },
    {
      year: 2017,
      rate: 12.6
    },
    {
      year: 2012,
      rate: 11.9
    },
    {
      year: 2021,
      rate: 11.7
    },
    {
      year: 2019,
      rate: 11.6
    },
    {
      year: 2020,
      rate: 11.6
    },
    {
      year: 2018,
      rate: 11.4
    },
    {
      year: 2015,
      rate: 11.3
    },
    {
      year: 2013,
      rate: 11.2
    },
    {
      year: 2014,
      rate: 10.9
    }
  ],
  Alaska: [
    {
      year: 2017,
      rate: 13.7
    },
    {
      year: 2021,
      rate: 13.2
    },
    {
      year: 2016,
      rate: 13.1
    },
    {
      year: 2018,
      rate: 12.9
    },
    {
      year: 2019,
      rate: 12.7
    },
    {
      year: 2011,
      rate: 12.1
    },
    {
      year: 2014,
      rate: 11.8
    },
    {
      year: 2020,
      rate: 11.1
    },
    {
      year: 2010,
      rate: 10
    },
    {
      year: 2015,
      rate: 10
    },
    {
      year: 2013,
      rate: 9
    },
    {
      year: 2012,
      rate: 8.1
    }
  ],
  Michigan: [
    {
      year: 2021,
      rate: 13.3
    },
    {
      year: 2020,
      rate: 12.2
    },
    {
      year: 2019,
      rate: 10.7
    },
    {
      year: 2010,
      rate: 10.6
    },
    {
      year: 2013,
      rate: 10.6
    },
    {
      year: 2017,
      rate: 10.6
    },
    {
      year: 2018,
      rate: 10.3
    },
    {
      year: 2011,
      rate: 10.2
    },
    {
      year: 2014,
      rate: 10.2
    },
    {
      year: 2016,
      rate: 9.9
    },
    {
      year: 2012,
      rate: 9.5
    },
    {
      year: 2015,
      rate: 8.9
    }
  ],
  Vermont: [
    {
      year: 2017,
      rate: 13
    },
    {
      year: 2012,
      rate: 12.3
    },
    {
      year: 2010,
      rate: 12.2
    },
    {
      year: 2018,
      rate: 12
    },
    {
      year: 2013,
      rate: 11.8
    },
    {
      year: 2021,
      rate: 11.2
    },
    {
      year: 2020,
      rate: 10.9
    },
    {
      year: 2016,
      rate: 10.7
    },
    {
      year: 2011,
      rate: 9.9
    },
    {
      year: 2019,
      rate: 9.1
    },
    {
      year: 2015,
      rate: 8.6
    },
    {
      year: 2014,
      rate: 7.3
    }
  ],
  Colorado: [
    {
      year: 2021,
      rate: 13
    },
    {
      year: 2017,
      rate: 12.1
    },
    {
      year: 2018,
      rate: 11.8
    },
    {
      year: 2020,
      rate: 11.6
    },
    {
      year: 2016,
      rate: 11.5
    },
    {
      year: 2019,
      rate: 11.1
    },
    {
      year: 2015,
      rate: 10.8
    },
    {
      year: 2014,
      rate: 10
    },
    {
      year: 2011,
      rate: 9.8
    },
    {
      year: 2013,
      rate: 9.7
    },
    {
      year: 2010,
      rate: 9.6
    },
    {
      year: 2012,
      rate: 9.1
    }
  ],
  Nevada: [
    {
      year: 2021,
      rate: 13
    },
    {
      year: 2015,
      rate: 12.6
    },
    {
      year: 2016,
      rate: 12.2
    },
    {
      year: 2018,
      rate: 12.1
    },
    {
      year: 2017,
      rate: 11.8
    },
    {
      year: 2020,
      rate: 11.5
    },
    {
      year: 2014,
      rate: 11.1
    },
    {
      year: 2010,
      rate: 10.6
    },
    {
      year: 2011,
      rate: 10.3
    },
    {
      year: 2013,
      rate: 10
    },
    {
      year: 2019,
      rate: 9.9
    },
    {
      year: 2012,
      rate: 9.4
    }
  ],
  Ohio: [
    {
      year: 2021,
      rate: 12.8
    },
    {
      year: 2020,
      rate: 11.7
    },
    {
      year: 2016,
      rate: 11.4
    },
    {
      year: 2017,
      rate: 11.3
    },
    {
      year: 2019,
      rate: 11
    },
    {
      year: 2010,
      rate: 10.8
    },
    {
      year: 2015,
      rate: 10.8
    },
    {
      year: 2018,
      rate: 10.4
    },
    {
      year: 2011,
      rate: 10.1
    },
    {
      year: 2013,
      rate: 9.8
    },
    {
      year: 2012,
      rate: 9.7
    },
    {
      year: 2014,
      rate: 9.7
    }
  ],
  California: [
    {
      year: 2021,
      rate: 12.7
    },
    {
      year: 2020,
      rate: 11.3
    },
    {
      year: 2016,
      rate: 10.6
    },
    {
      year: 2017,
      rate: 10.6
    },
    {
      year: 2018,
      rate: 10.5
    },
    {
      year: 2019,
      rate: 10.2
    },
    {
      year: 2015,
      rate: 9.5
    },
    {
      year: 2014,
      rate: 8.9
    },
    {
      year: 2013,
      rate: 8.8
    },
    {
      year: 2011,
      rate: 8.1
    },
    {
      year: 2012,
      rate: 8
    },
    {
      year: 2010,
      rate: 7.8
    }
  ],
  Wisconsin: [
    {
      year: 2020,
      rate: 12.1
    },
    {
      year: 2021,
      rate: 11.7
    },
    {
      year: 2016,
      rate: 11.3
    },
    {
      year: 2017,
      rate: 11.3
    },
    {
      year: 2018,
      rate: 11
    },
    {
      year: 2010,
      rate: 10.9
    },
    {
      year: 2011,
      rate: 10.9
    },
    {
      year: 2015,
      rate: 10.6
    },
    {
      year: 2019,
      rate: 10.6
    },
    {
      year: 2012,
      rate: 10.5
    },
    {
      year: 2013,
      rate: 10.4
    },
    {
      year: 2014,
      rate: 9.8
    }
  ],
  Virginia: [
    {
      year: 2021,
      rate: 11.8
    },
    {
      year: 2020,
      rate: 10.8
    },
    {
      year: 2018,
      rate: 10.7
    },
    {
      year: 2017,
      rate: 10.6
    },
    {
      year: 2019,
      rate: 10.5
    },
    {
      year: 2011,
      rate: 10
    },
    {
      year: 2016,
      rate: 9.9
    },
    {
      year: 2012,
      rate: 9.5
    },
    {
      year: 2014,
      rate: 9.5
    },
    {
      year: 2013,
      rate: 9.4
    },
    {
      year: 2015,
      rate: 9.4
    },
    {
      year: 2010,
      rate: 9.1
    }
  ],
  Pennsylvania: [
    {
      year: 2011,
      rate: 11.7
    },
    {
      year: 2010,
      rate: 11.3
    },
    {
      year: 2021,
      rate: 10.6
    },
    {
      year: 2013,
      rate: 10.4
    },
    {
      year: 2012,
      rate: 10.3
    },
    {
      year: 2015,
      rate: 10.1
    },
    {
      year: 2018,
      rate: 10.1
    },
    {
      year: 2014,
      rate: 10
    },
    {
      year: 2016,
      rate: 10
    },
    {
      year: 2017,
      rate: 9.9
    },
    {
      year: 2020,
      rate: 9.7
    },
    {
      year: 2019,
      rate: 8.8
    }
  ],
  Illinois: [
    {
      year: 2021,
      rate: 11.6
    },
    {
      year: 2020,
      rate: 10.5
    },
    {
      year: 2017,
      rate: 9.6
    },
    {
      year: 2018,
      rate: 9.4
    },
    {
      year: 2016,
      rate: 9.2
    },
    {
      year: 2019,
      rate: 9.1
    },
    {
      year: 2013,
      rate: 8.7
    },
    {
      year: 2015,
      rate: 8.6
    },
    {
      year: 2011,
      rate: 8.3
    },
    {
      year: 2014,
      rate: 8.3
    },
    {
      year: 2010,
      rate: 8.1
    },
    {
      year: 2012,
      rate: 7.4
    }
  ],
  "New Hampshire": [
    {
      year: 2018,
      rate: 11.1
    },
    {
      year: 2013,
      rate: 10.4
    },
    {
      year: 2021,
      rate: 10.4
    },
    {
      year: 2010,
      rate: 10.3
    },
    {
      year: 2016,
      rate: 9.9
    },
    {
      year: 2011,
      rate: 8.9
    },
    {
      year: 2020,
      rate: 8.9
    },
    {
      year: 2014,
      rate: 8.1
    },
    {
      year: 2012,
      rate: 8
    },
    {
      year: 2015,
      rate: 8
    },
    {
      year: 2017,
      rate: 8
    },
    {
      year: 2019,
      rate: 7.9
    }
  ],
  Maryland: [
    {
      year: 2021,
      rate: 10.7
    },
    {
      year: 2020,
      rate: 10.4
    },
    {
      year: 2017,
      rate: 9.5
    },
    {
      year: 2016,
      rate: 9.4
    },
    {
      year: 2019,
      rate: 9.2
    },
    {
      year: 2013,
      rate: 9
    },
    {
      year: 2010,
      rate: 8.9
    },
    {
      year: 2011,
      rate: 8.8
    },
    {
      year: 2012,
      rate: 8.6
    },
    {
      year: 2015,
      rate: 8.6
    },
    {
      year: 2018,
      rate: 8.5
    },
    {
      year: 2014,
      rate: 7.9
    }
  ],
  Minnesota: [
    {
      year: 2021,
      rate: 10.6
    },
    {
      year: 2010,
      rate: 9.7
    },
    {
      year: 2020,
      rate: 8.8
    },
    {
      year: 2015,
      rate: 8.7
    },
    {
      year: 2018,
      rate: 8.7
    },
    {
      year: 2011,
      rate: 8.6
    },
    {
      year: 2013,
      rate: 8.6
    },
    {
      year: 2016,
      rate: 8.6
    },
    {
      year: 2017,
      rate: 8.1
    },
    {
      year: 2019,
      rate: 8
    },
    {
      year: 2014,
      rate: 7.9
    },
    {
      year: 2012,
      rate: 7.3
    }
  ],
  Utah: [
    {
      year: 2021,
      rate: 10.6
    },
    {
      year: 2020,
      rate: 9.9
    },
    {
      year: 2010,
      rate: 9.8
    },
    {
      year: 2011,
      rate: 9.8
    },
    {
      year: 2015,
      rate: 9.4
    },
    {
      year: 2017,
      rate: 9.4
    },
    {
      year: 2016,
      rate: 9.3
    },
    {
      year: 2014,
      rate: 8.8
    },
    {
      year: 2018,
      rate: 8.2
    },
    {
      year: 2013,
      rate: 7.9
    },
    {
      year: 2019,
      rate: 7.7
    },
    {
      year: 2012,
      rate: 7.6
    }
  ],
  "Rhode Island": [
    {
      year: 2017,
      rate: 9.9
    },
    {
      year: 2010,
      rate: 8.6
    },
    {
      year: 2021,
      rate: 7.4
    },
    {
      year: 2013,
      rate: 7.3
    },
    {
      year: 2011,
      rate: 7.2
    },
    {
      year: 2019,
      rate: 7
    },
    {
      year: 2020,
      rate: 7
    },
    {
      year: 2018,
      rate: 6.5
    },
    {
      year: 2012,
      rate: 6.1
    },
    {
      year: 2014,
      rate: 5.9
    },
    {
      year: 2016,
      rate: 5.5
    },
    {
      year: 2015,
      rate: 5.2
    }
  ],
  Washington: [
    {
      year: 2021,
      rate: 9.9
    },
    {
      year: 2017,
      rate: 9
    },
    {
      year: 2015,
      rate: 8.9
    },
    {
      year: 2018,
      rate: 8.9
    },
    {
      year: 2020,
      rate: 8.9
    },
    {
      year: 2016,
      rate: 8.5
    },
    {
      year: 2019,
      rate: 8.3
    },
    {
      year: 2010,
      rate: 8.2
    },
    {
      year: 2014,
      rate: 8.2
    },
    {
      year: 2011,
      rate: 8.1
    },
    {
      year: 2013,
      rate: 7.7
    },
    {
      year: 2012,
      rate: 6.3
    }
  ],
  Hawaii: [
    {
      year: 2016,
      rate: 9.5
    },
    {
      year: 2010,
      rate: 9.1
    },
    {
      year: 2012,
      rate: 9
    },
    {
      year: 2019,
      rate: 8.5
    },
    {
      year: 2018,
      rate: 8.1
    },
    {
      year: 2013,
      rate: 8
    },
    {
      year: 2011,
      rate: 7.8
    },
    {
      year: 2014,
      rate: 7.6
    },
    {
      year: 2017,
      rate: 7.4
    },
    {
      year: 2015,
      rate: 7.3
    },
    {
      year: 2021,
      rate: 6.6
    },
    {
      year: 2020,
      rate: 6.3
    }
  ],
  Connecticut: [
    {
      year: 2010,
      rate: 9.3
    },
    {
      year: 2021,
      rate: 9.2
    },
    {
      year: 2020,
      rate: 9.1
    },
    {
      year: 2016,
      rate: 8.5
    },
    {
      year: 2018,
      rate: 8.5
    },
    {
      year: 2013,
      rate: 8.3
    },
    {
      year: 2017,
      rate: 8.2
    },
    {
      year: 2015,
      rate: 8
    },
    {
      year: 2014,
      rate: 7.6
    },
    {
      year: 2019,
      rate: 7.5
    },
    {
      year: 2012,
      rate: 7.4
    },
    {
      year: 2011,
      rate: 6.5
    }
  ],
  "District of Columbia": [
    {
      year: 2021,
      rate: 8.8
    },
    {
      year: 2015,
      rate: 6.4
    },
    {
      year: 2010,
      rate: 6.3
    },
    {
      year: 2019,
      rate: 6.2
    },
    {
      year: 2020,
      rate: 6.2
    },
    {
      year: 2011,
      rate: 6.1
    },
    {
      year: 2018,
      rate: 6
    },
    {
      year: 2014,
      rate: 5.6
    },
    {
      year: 2016,
      rate: 5
    },
    {
      year: 2017,
      rate: 4.8
    },
    {
      year: 2013,
      rate: 4.6
    },
    {
      year: 2012,
      rate: 3
    }
  ],
  "New Jersey": [
    {
      year: 2021,
      rate: 7.7
    },
    {
      year: 2011,
      rate: 7.6
    },
    {
      year: 2017,
      rate: 7.2
    },
    {
      year: 2016,
      rate: 7
    },
    {
      year: 2020,
      rate: 7
    },
    {
      year: 2018,
      rate: 6.7
    },
    {
      year: 2019,
      rate: 6.7
    },
    {
      year: 2010,
      rate: 6.6
    },
    {
      year: 2012,
      rate: 6.6
    },
    {
      year: 2015,
      rate: 6.6
    },
    {
      year: 2014,
      rate: 6.4
    },
    {
      year: 2013,
      rate: 6.3
    }
  ],
  "New York": [
    {
      year: 2021,
      rate: 7
    },
    {
      year: 2011,
      rate: 6.9
    },
    {
      year: 2010,
      rate: 6.8
    },
    {
      year: 2013,
      rate: 6.7
    },
    {
      year: 2020,
      rate: 6.2
    },
    {
      year: 2015,
      rate: 6
    },
    {
      year: 2012,
      rate: 5.9
    },
    {
      year: 2014,
      rate: 5.8
    },
    {
      year: 2016,
      rate: 5.8
    },
    {
      year: 2017,
      rate: 5.8
    },
    {
      year: 2019,
      rate: 5.8
    },
    {
      year: 2018,
      rate: 5.4
    }
  ],
  Massachusetts: [
    {
      year: 2016,
      rate: 6.8
    },
    {
      year: 2021,
      rate: 6.6
    },
    {
      year: 2014,
      rate: 6.1
    },
    {
      year: 2017,
      rate: 6.1
    },
    {
      year: 2011,
      rate: 6
    },
    {
      year: 2010,
      rate: 5.9
    },
    {
      year: 2015,
      rate: 5.8
    },
    {
      year: 2018,
      rate: 5.8
    },
    {
      year: 2012,
      rate: 5.7
    },
    {
      year: 2019,
      rate: 5.7
    },
    {
      year: 2013,
      rate: 5.6
    },
    {
      year: 2020,
      rate: 5.6
    }
  ]
};

export default class MotorDeaths extends React.Component {
  constructor(props) {
    super(props);

    let dates = [];
    let states = [];
    let all = [];
    let allaccidents = [];
    let allAccidents = [];

    Object.keys(motordeaths).forEach((state, i) => {
      states.push(state);
      motordeaths[state].forEach(({ rate, year }) => {
        if (i === 0) dates.push(year);
        allaccidents.push(rate);
        allAccidents.push([year, rate]);
        dates.push(year);
      });
    });
    console.log(allaccidents);
    var highAccidents = Math.max(...all, ...allaccidents),
      lowAccidents = Math.min(...all, ...allaccidents),
      highDate = Math.max(...dates),
      lowDate = Math.min(...dates);

    this.state = {
      showarson: true,
      noData: [],
      allaccidents,
      lowAccidents,
      allAccidents,
      highAccidents,
      yAxisAccidents: highAccidents - lowAccidents,
      xAxis: highDate - lowDate,
      highDate,
      lowDate,
      selectedState: "",
      states
    };
  }
  componentDidUpdate = () => {
    if (this.state.selectedState !== this.state.lastselectedState) {
      this.setState({ lastselectedState: this.state.selectedState }, () => {
        let dates = [];
        let all = [];
        let allaccidents = [];
        let allAccidents = [];

        Object.keys(motordeaths).forEach((state) => {
          if (
            this.state.selectedState !== "" &&
            this.state.selectedState !== state
          )
            return null;
          motordeaths[state].forEach(({ rate, year }) => {
            allaccidents.push(rate);
            allAccidents.push([year, rate]);
            dates.push(year);
          });
        });
        console.log(allaccidents);
        var highDate = Math.max(...dates),
          lowDate = Math.min(...dates);

        this.setState({
          showarson: true,
          noData: [],
          allaccidents,
          allAccidents,
          xAxis: highDate - lowDate,
          highDate,
          lowDate
        });
      });
    }
  };
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
              accident{space}
              <a href="https://injuryfacts.nsc.org/state-data/motor-vehicle-deaths-by-state/">
                fatalities
              </a>
            </span>
            <span>
              {lowDate}
              {space}-{space}
              {this.state.highDate}
            </span>
          </div>
          <a
            style={{ color: "darkviolet" }}
            href="https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/home"
          >
            {shortNumber(Math.round(this.state.highAccidents /*/5 */)) + space}
            per 100,000
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
          <select
            onChange={(e) => this.setState({ selectedState: e.target.value })}
          >
            {["", ...this.state.states].map((x, i) => {
              return (
                <option key={i} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
          state
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


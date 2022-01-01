import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
import AgeAdjustedMortality from "./AgeAdjustedMortality";
import Epiology from "./epiology";
import Polio from "./polio";
import { UAParser } from "ua-parser-js";
import Vaxx from "./vaxx";
import Dies from "./dies";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import "./styles.css";
import Mortal from "./mortal";
import Spanish from "./spanish";
import GDP from "./gdp";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //noyoutube: true,
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    this.pcr = React.createRef();
    this.walter = React.createRef();
    this.polio = React.createRef();
    this.claims = React.createRef();
    this.jury = React.createRef();
    for (let i = 0; i < 250; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    clearTimeout(this.check);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/polio") {
          window.scroll(0, this.polio.current.offsetTop);
        } else if (this.props.pathname === "/claims") {
          this.setState(
            {
              insurance: true
            },
            () => window.scroll(0, this.claims.current.offsetTop)
          );
        } else if (this.props.pathname === "/walter") {
          window.scroll(0, this.walter.current.offsetTop);
        } else if (this.props.pathname === "/testing") {
          window.scroll(0, this.pcr.current.offsetTop);
        } else if (this.props.pathname === "/jury") {
          this.setState(
            {
              juryPermitting: true
            },
            () => window.scroll(0, this.jury.current.offsetTop)
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true, noyoutube: true });
      }
    };
    const buttonStyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    return (
      <div
        style={{
          overflowX: "hidden",
          margin: "0px",
          color: "rgb(230,230,255)",
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(32, 22, 11)"
          //backgroundColor: "rgb(212, 171, 95)"
        }}
      >
        <div
          style={{
            fontFamily: "'Anonymous Pro', monospace",
            width: "calc(100% - 20px)",
            border: "6px white solid",
            padding: "4px",
            wordBreak: "break-word",
            textAlign: "left",
            maxWidth: "600px",
            position: "relative"
          }}
        >
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://carducci.sh"
          >
            epiology
          </a>
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://2052.live"
          >
            2052.live
          </a>
          not voting is a default vote, "no." rank choice voting makes 50% win
          over third "plural" majority. a 1/3 should win over 50%
          <br />
          WE WERE FORCED TO USE SOCIAL SECURITY, IT WAS NOT A VOLUNTARY PLAN,
          AND THE MUTAL FUND CANNOT GIVE BACK ALL FUNDS CONCURRENTLY, VALUE
          NOTWITHSTANDING.
          <br />
          make sure they can get to work in NY from Livingingston, we need to
          pay 40% debt spending, or they will reposess the bridge.
          <br />
          youth brain drain (look at me, for example. shuffle before
          extrapolation, raining condos), driving around is accident prevalence
          matching usage, doesn't mean it causes motor impairment...
          <br />
          Green development of buildings beyond free rider mutable going to
          begin home warranty with non rollover expiring and estimates as
          properties. Allow beyond universal construction code. Let investors
          decide. Target margin if you want. Marijuana and amphetamines are
          money , unscriptable.
          <br />
          Stop using bridge toll price inflation on bond laundering 40%
          <br />
          <br />
          bbb, "ordinary families," are forelorn against existing-biz
          work-deficit by producer-ask gentrification, monopsony and free rider
          mutable tax pure,&nbsp;
          <a href="https://qr.ae/pGziz7">useless price-inflation</a>;
          nationalism isn't socialism. Americans really need poverty alleviation
          at cost of producer-ask, poorness? Poverty doesn't include - nor does
          inflation and gini - homes, equities, bonds nor&nbsp;
          <a href="https://qr.ae/pGzOUl">intermediate-labor</a>.<br />
          <br />
          People (as jury, not executioner of the userer) can only detract from
          available sentence without state vic.
          <br />
          Grubs; not only unfair, but retarded and criminal
          <h1>
            NJ CONSUMER FRAUD ACT timeclock-unlock of 1971, credit-free banking,
            debtless-brokerage
          </h1>
          <br />
          Drug addicts doing whatever they want, these boomers 20x/millennial
          rental-income per boomer
          <br />
          No script and stop implausible use rent control by 5 units or 30 days
          not price
          <br />
          <h1>
            of course at 60% free rider mutable consumer expense, 40% debt
            spending saver surrendered freedom
          </h1>
          wait for customers, 1-level board max-profit royalty.
          <br />
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://teapharmacy.party/drugs"
          >
            prescribed opiates for deep-baby-pnemonia
          </a>
          <h2>flush em out! bring in working age Azteks</h2>
          {/*<table>
            
            <tr>2010</tr>
            <tr>age: "85-89", dx: 17644, pop: 3620</tr>
          </table>*/}
          expiring claim false bid pool $2k/yr racket Quarantine hotel
          paperwork. kill yourselves. Cynthia, Republican on Sliwa (6%), just
          suggested to chop off a theifs fingers. lets do that to jamie dimon.
          "Good will ambassador?" him?
          <br />
          the underlining issue is not mental it is financial, GDP/p was nearly
          constant 1800-1913 save repo cycle down-payment amongst 3%/yr+
          population. Put them on a place, incentive to acclimates, what third
          would country use your FUCKING dough on for, scum of the earth leeche/
          parasite, mosquito. "healthcare night jail"
          <br />
          "Stay with us," THAT IS MY MONEY THAT YOU ARE COUNTERFEITING/LOITERING/LAUNDERING
          <GDP
            lastWidth={Math.min(600, this.state.lastWidth)}
            style={{
              paddingBottom: "15px",
              backgroundColor: "rgb(190,150,180)"
            }}
          />
          <br />
          <br />
          "taxes. all the government cares about, getting their money. ...Mental
          healthcare, menace to society, needs to be in jail!"
          <h1>
            Financial socialist, socialist conservative, not national communism
            communist corporate flaccids
          </h1>
          back taxes on stolen goods is like the corporate flaccid loss that is
          amazon trust, like trumps ppp trust building existing biz 40% debt
          spending
          <h2>
            "slinging drugs, no script vault-scipt, open source ingredient list
            for k2 and pharma competition" It is saver expense, not tax-payer
            For no better bargain.
          </h2>
          <h2>
            Jamie Dimon walgreens, the biggest drug dealer. "bookies
            'risk'-premium on both side, expiring claim enables the theft when
            credit isn't of FULL ESCROW."
          </h2>
          You should be going for plural majority 2/3 voter leftover who
          represent part of 2/3 Occupy (anti-rent-seeking) supporter, not swing
          voters&nbsp;
          <span role="img" aria-label="squirrel">
            🐿
          </span>
          <br />
          Court data at some point in the future. If you have evidence it is
          there for review or not GET OUT
          <br />
          <br />
          fair market value in the year you stole it, but that should be
          appraised on what you bought for, with receipt, not the neighbors.
          extortion, racketeering, civil rights. have to pay fair share of that
          they steal, surrendered freedoms of the money market notwithstanding.
          <br />
          <br />
          "Tax-payer funded 40% debt spending SUV." Emotionally disturbed
          because of implausible landlord use, say rollover insurance to an
          orthopedic surgeon they introduced you to mr. syringe and lock you up
          as political prisoner in NJ. Multiple Sclerosis is non-exclusive
          symptom as of all-incidence and -cause brain-bacteria acute flaccid
          paralysis, paralytic polio. Great Leap Forward and Famine matches
          population growth 35 life-expectancy from sewage.
          {/**Steps into a Libertarian rally-speech in NJ*, "Ok, no one is dying here," implying their loss*/}
          <h2>Republicans want market-communism, jobs instead of innovation</h2>
          peter roth, newsweek, committee to unleash prosperity, "trump social
          headed by david nunez because retarded copyright use case loss from
          jury-permit to desist of industry-variable conviction malfeasance."
          "I'm not an antivax, over 50 makes a lot of sense, it probably does
          save lives, but it is your right. People do not know who to believe
          because Multiple Sclerosis is non-exclusive symptom as of
          all-incidence and -cause brain-bacteria acute flaccid paralysis,
          paralytic polio. Great Leap Forward and Famine matches population
          growth 35 life-expectancy from sewage."
          <h1>
            1/4 1/4 1/4 expiring premium pentagon pension forced corporate
            investment 10% debt spend 2010-3/2020, "back to the land of the
            free," sluts.{/**roma dirobbie */}
          </h1>
          <h2>
            boomers loitering on my homes and restaurants, third party donee
            surrendered freedom (EULA) counterfeit in contract.
          </h2>
          "Miami can be bank hub, techies are moving to Florida for the illegal
          immigrants. No taxes, pro-multi-level-embezzling-business."
          <h1>
            1-level-board maxroyalty profit, investment banks stick to equities
            concurrentable, that is not surrendered freedoms of another with
            expiring or estimate false bid pools of non-rollover insurance (say
            it three times and psychologist injects you with syringe)
          </h1>
          socialist city-council, they don't like cops, all woke, it is
          criminal.
          <br />
          "Trump's policies look better every day," Stephen Moore, unaware of
          homes double material inflation. 20% more spending under Trump.
          "People are being safe and wearing masks." The pandemic was population
          growth, as is integreal for growth and deaths. Growth does nothing for
          productivity per hour unless there is supply-side dead-weight.
          <h1>a whack for a whack gets the whole-world whacked</h1>
          "Bouncing off the walls, can’t concentrate, get Amphetamines. Whack
          you over the head, you have to behave." $12k/64 cash/debt (new) taxes
          for educated. When kids aren’t getting educated, they get to earn
          wealth over your gluttonous ass. Me insulting you is not a disability,
          mental-disorder is subjective.
          <h2>tax payer vacation, sacrificing our kids</h2>
          “Find teachers to teach our kids.” at 85% 25-54 capacity, we need
          bootstapping entrepreneurs not more corporate flaccid un-bargain and
          technological-retirement-complacency. Then don’t pay for it in advance
          douche Then fucking expire claims. That is surrendered freedom (EULA)
          of customers and savers. Ween cops off bonds, totally moot "2022 does
          look really good for Republicans"&nbsp;
          <span role="img" aria-label="side-splitting laughter">
            🤣
          </span>
          <br />
          <h1>"Personal health decisions"</h1>Isn't it alive, or an evolutionary
          trait, not non-exclusive byproduct, warning-mechanism or monoclonal
          antibody 20% placebo juice?
          <br />
          "Forgot to order 500 weekly covid tests we need,” Jo Pinion with a
          lack of customers, professing a racketeering, market-communist actual
          labor shortage rent-seeking need. FUCK OFF DOUCHE. Inflation is a
          national security issue because it is surrendered freedom, no free
          rider mutable tax is even helpful if it was legal. Hoarding grains
          because famine, or vault-share depositary currency competitor. A bad
          conclusion is making 44 year payday loans with currenct debt instead
          of reverse amortization so we all paid what we would have without DEBT
          not just material inflation, half home inflation and third of
          equities, bonds and intermediate-labor. "Sue for tort damages," only
          can be last-traded-value, not of the neighborhood but that unique
          home. Republicans just counterfeit value, non-stop, like Andrew Yang.
          Your coronavirus pandemic is from population growth. Fucking drown
          yourself, Gen Blaine Holt.
          <br />
          <br />
          So much since is real science confirming political-views as reasoning
          beyond law, that which is fact
          <br />
          Repeatable from no idea, not precedence by an idea itself, without
          further questioning real-time
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/4hrMuZEGGmk"
            }
            float="right"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          if you can borrow, I can cash advance to short your debt.
          <br />
          repo cycle kept down payments, implausible use intent deduced - condos
          raining from the sky.
          <br />
          Profits are a net loss, fed tightens will cause a recession. Lower
          prices and hours is a good thing. "Stop QE and raise fed funds rate."
          Over savers' surrendered freedom (EULA) third party donee. "Good for
          economy, inflation, public corporate flaccid loss market
          concentration. Regulatory relief for actual labor shortage of lenders,
          insurers' expiring claims false bid pools and landlords' implausible
          use beyond 5 units or 30 days, not price."
          <br />
          Inflation from increasing the money supply is nothing compared to
          $4t/yr 40% debt spend 2010-3/2020 only making $2t
          CurrencyComponentOfM1, more than annual rental income alone. GDP is
          fake, mv1===mv2==GDP/yr cannot be true, but the Republicans make the
          numbers up.
          <br />
          "better for market concentration, long-term." what.
          <h2>
            Net exports are trading durable goods for foreign lands that
            share-split. You are MY top fan.
          </h2>
          <h1>
            "Business investment and productivity," that is selling out, it is a
            loss. supply-siders are for trust-building
          </h1>
          Iflation doesn't continue to rise when rent-seekers are KILLED. For
          instance, GDP/p 180--1913 nearly constant amongst 3%/yr+ population.
          "Will gov counter with better pro-growth subsidies. The answer is no."
          Jim Yurio. Not-subsidizing is not-growth. "the prices that have been
          raised for margin, amazing, consumers are still doing pretty well,"
          from the intermediate-labor inflation," ruining innovation for
          existing biz ppp trust. YOU AREN'T POPULAR, 2/3 are supportive of
          Occupy.
          <br />
          “Economic stock profits bull.” That is pure useless inflation,
          corporate accounts is not a collective bargain, is flaccid loss.
          Neither is expiry or estimate property. NJ Consumer Fraud Act, Home
          warranty and expiring auto insurance torts beyond reality and
          non-surrendered freedom (EULA) is fraud.
          <br />
          Profits are a net loss, fed tightens will cause a recession. Lower
          prices and hours is a good thing.
          <h2>
            “Massive subsidies make new corporate opportunities.” Larry Kudlow
          </h2>
          <h3>
            For who? It just raises price and trust-builds existing business
          </h3>
          "as long as uncle same pays for it." Tax payer vacation, 40% debt
          spending, 50% debt spending nj. "Might as well take this money, facing
          competition out there." it just raises price! you aren't conservative,
          Republicans! you just want flaccid profit loss. Republicans things
          subsidies and net exports for foreign state land share are good for
          national security, selling our durable goods or equity, while
          racketeering broad utility for fines and fees, instead of target
          margin on microeconomic self-regulating Supply and Demand perfect
          equillibrium, infinite producer assumption.
          <br />
          "As republicans, we will put the country on the right track. 40% debt
          service broadband/bridge fees."
          <br />
          "Vast majority of economic growth was energy." I put population under
          GDP as basis to isolate other factors because population growth is
          integrally-economic growth, which is not a gain nor loss in
          productivity per hour, deflation.
          <br />
          "Social spending not supply side." Where do you think the
          demand-capacity goes? It just raises bid.
          <h1>how do you solve student debt crisis? deport the boomers!</h1>
          “Devaluing currency,” would not boost exports except in price, which
          anyway would grant us more share of foreign state lands that also
          split. The only reason is trust-building, not material-gain. ”Pouring
          budget into social welfare,” is price elastic supply-side
          trust-building for no gain.
          <br />
          "Delinquent, soft, too cheap.”
          <h2>
            by the data, 65+ are the moochers, the youth work 10x more than they
            did in 1970, per home
          </h2>
          "claim by Chigaco economists denied sending child poverty, just
          statistics, may not be poor for that month, but parents need to work.
          Unemployment collapsed, we want unemployemnt as a measure of
          productivity and technological advancement." Actual labor shortage.
          "Ensure job training," public trade secret trust-building, REPUBLICANS
          ARE MARKET COMMUNIST. retirement is a good thing. "Americans don't
          want to be europeanized, UBI to existing business. Americans don't
          want to support moochers." $12k/64 debt/cash (new) paid to loitering
          surrendered freedom (EULA) rent-seekers to sit on the saver couch.
          GIVE ME 'YOUR' MONEY BITCH.
          <br />
          workfare = government bond-holder trust-building laundering and
          rent-seeking.
          <br />
          “Work is a good thing, dignity, produces productivity for productive
          lives,” Betsy McCoy. Price deflation per hour is productivity, not
          watching eachothers’ kids for higher numbers. Hand put money for
          people that not working, we work every day. HALF CONTINUING CLAIMS ARE
          65+ and most disability. Fuck off bitch. "parents over $4k child
          benefits. It is a middle-class entitlement," it just goes to
          producer-ask for the same stuff!
          <br />
          <br />
          "If we balance the budget, we will have no wage growth." GOOD you
          fucking loser. "Trump's economy is so good for lower and middle
          classes," labor-equity of past demand is forlorn for new share-split
          subsidy ppp trust build beneficiaries, appreciating work deficit
          actual labor shortage.
          <h2>you guys are ok with just material, right?</h2>
          "phasing out expenses on taxes, makes infrastructure 40% debt-service,
          cheaper," Kevin Hasset, author of, "SOCIALISM IS THE DEVIL." Wage
          increases is an input-cost. Marx doesn't want income inequality but
          wealth (equities, bonds, homes and intermediate-labor) equality,
          labor-demand notwithstanding.
          <h2>more psychologists than orthopedic surgeons</h2>
          the true threat is expiring claim FDIC insuring themselves. You're the
          devil, steve forbes. rot in hell. tell doctor to rollover and they
          lock you up as political prisoner in NJ. Then they bailout mothers'
          debts with my disability, say the hole in my leg muscle is mental, or
          else!
          <br />
          stop calling future beneficiaries and long term effects, say donee
          beneficiary and fake prices.
          <br />
          sewage police lawsuits, antitrust to emulate free market
          self-regulating SUpply and Demand microeconomic free rider mutable tax
          pure inflation monopsony, nationalized government gentrification and
          rent-seeking. Stop r&d subsidies and instead open source ingredients
          for competition and saving the animals.
          <br />
          "Why would anyone in their right mind today buy 10 year treasuries
          that pay negative interest rates when compared to inflation? Why
          should savers continue to subsidize spenders?"
          <h1>
            Third party donee beneficiary claimable surrendered freedom (EULA)
            1/3 public
          </h1>
          They may be the party trying to keep the whole bond-index-fund,
          solvent with new debt? That would be a short
          flaccid-corporate/market-communist list, but I’m sure 40%
          debt-spending for 2x total $2t CurrencyComponentOfM1/yr at $4t/yr
          federal spending 2010–3/2020 is somehow, “invested,” fraudulently. I
          know the Federal Reserve is lying about National Income accounts and
          GDP/p because mv1===mv2==GDP/yr, but that is impossible as m2 and it’s
          velocity is mutual funds, bonds AND checking (CurrencyComponentOfM1).
          Gonna have to pay down our crippling national debt $12k/64, “I happen
          to be a judge on this important essay contest. How would you pay it
          back?”
          <h1>deport the non-working</h1>savers surrendered freedom only way out
          is (cash/debt)*income every year back, end the work deficit, wait for
          customers before outlays nor withhold labor-demand outlays in flaccid
          profit accounts (not a collective bargain if outlaid piecemeal).
          Menendez wants to bail out modicums of
          loitered-from-savers-collateralized/the non-working rent-seeker and
          cancel, whatever that means, uncollateralized.
          <h2>Kudlow sucking bezo dick</h2>
          "punishing success, reversing ppp trust-building, reversing ccc
          parental gerontocracy, third party donee beneficiary surrendered
          freedom for 1-level-board, reverside actual labor shortage.
          max-royalty-profits."
          <h1>Statist-socialist, anti-corporatist = jury permits?</h1>
          Keeping it tight, open borders, illegal immigration, labor shortage,
          login.gov convict intranet malfeasance, no-script-currency vault
          share. rollover insurance expiring claims. reverse amortization
          (cash/debt)*socialist every year back.
          <h2>
            ween cops off bonds with truncated sales tax, all convictions are
            therefore moot
          </h2>
          <h3>opening a gun-store, one on every block and stoop</h3>
          “Big government socialist, state-run economy.” Marx never said that.
          Big government monopsony or corporate flaccid loss.
          <h1>
            Kudlow wants to nationalize bridge/broadband fees, money "market"
            surrendered freedom (EULA) of savers,
          </h1>
          instead of target margin consumer surrogate private investors.
          <h2>
            “Ran Amazon out of town by making them pay the same as everyone
            else,” you keep your shop ownership, make your own Amazon instead of
            giving the profit to them Gentrify is what we, “lost.” It’s not like
            she turned down natural resources, she required their profit to pay
            the same, and "prevented value from increasing," saves consumers.
          </h2>
          <h3>
            Marx was plagerized by Mises to act like credit cycle is useful not
            useless price elasticity.
          </h3>
          masks are retarded because spittle excrement bacteria, you fucking
          cunts on Friday night CNN. voting is not cool, 13% NYC does it. 50%
          debt spending NJ (2016). 2/3 support Occupy anti-rent-seeking and
          corporate flaccid loss expiring non-rollover collective bargain or
          free rider mutable sewage police lawsuits, not 40% debt service bond
          laundering actual work shortage njta.
          <br />
          the withholding of tests shouldn't happen, the only operational reason
          for barrier to an existing thing is if it is made up, or USPTO
          utility, trust-building competing with other intermediate consumers
          racketeering barrier to entry by tranches instead of brokerage to
          sustain prices of appropriate labor-demand, control by unit or price
          to have mondo condo market liquidity.
          <h2>behavior is not an illness, it is a CRIME</h2>
          you cannot contract non-compete and surrendered freedom of savers, if
          conscription/truncated production tax is virtious it will be had.
          <h1>
            coordinating with government is a crime
            {/**ben habib brexit party mp, full marks on the vaccine */}, just
            have open source ingredient lists, r&d is free rider mutable.
          </h1>
          government free rider mutable fines, instead of jail, is useless
          racketeering for bond-index-funds, if no arresting officer evidence,
          no bail nor jail.
          <br />
          "He will pay his debt to society," he is causing us MORE debt. Article
          4 is tax only, Amendment 14 Section 4 is surrendered freedom of
          savers, Jared polis, Go to Hell, douche. Iblis!
          <br />
          If Russia makes a move on Ukraine, they will sanction all non-Russian
          business and free rider mutable truncated production tax for Russian
          bonds.
          <br />
          Health insurance you need, mission to get everyone the coverage they
          deserve.
          <h2>
            stop acting like illegal immigrants aren't the partial-solution and
            productivity isn't hours under price-deflation of equities as market
            concentration/competition (not equality unless actual work shortage
            tort within true-capacity of individuals that which they have the
            right to surrender, not in expiring nor estimated claim) to the
            labor shortage, behind banning ACTUAL LABOR SHORTAGE RENT-SEEKING:
            INVOICES, EXPIRING CLAIMS, IMPLAUSIBLE LANDLORD USE, REPO-CYCLE KEPT
            DOWN PAYMENTS. (cash/debt)*income every year back third party doneee
            beneficiary claimable surrendered freedom of savers,
          </h2>
          <h3>
            it is not a money market when alternative is minimal viable product
            voluntary trade waiting for consumers to outlay duress by what you
            can muster yourself without implausibly-deniable impossibility or
            surrendered freedom of savers.
          </h3>
          "Get the businesses going $100b approved, these approved for employs
          more than other business. we need to get the people going again." Gov
          Dave Patterson, free rider mutable racketeer and share-split over my
          dead body. Stop nationalizing, gentrifying, rent-seeking, for bond
          laundering. $12k/64 debt/cash (new) is implausibly deniable as force
          majeure or third party donee beneficiary surrendered freedom (EULA)
          1-level-board max-royalty-profit and truncated production tax before
          reverse amortization (cash/debt)*income every year back. USPTO/China
          $1t/7/28/88/170 has the testing (china
          tsy/foreign-cahoot/private/equities-inflation). Steal it is faster,
          mmore money just bids the same material, trust-built and debt service
          with profits of ppp trust building and rent-seeking, now conservatives
          want to bail out business and nationalized broadband/bridge fees and
          expire claim nanny/elder-"care," that is not care if they do not
          rollover, the producer-ask is ALWAYS first. It is not coverage it is a
          net loss laundered loitered customers and employers of insurance false
          bid pool signers' third party donee beneficiaries.
          <br />
          <br />
          "I can't PROVE virion injects its DNA into the cell, but it is
          non-exclusively-prevalent enough to only come out from
          bacterial-infection," Dr. Mark Seigel.
          <h1>
            you cannot own technology, General, and you can't tax for free rider
            mutable tax{/*tai mccoy*/} monopsony for Amazon over competition,
            nor withhold profits for flaccid corporate loss, pension value m2
            mutual fund money market is not a market, it is surrendered saver
            freedom (EULA) donee beneficiary claimable.
          </h1>
          Turn down gentrifiction amazon, "I'll buy your lemonade stand for
          you," how would business owners triple in value from neighborhoods,
          that is what Carol and Domenic cares about? Stop putting businesss
          ahead of labor, douche. 14k jobs now is just cheaper cost of living my
          giving consumers less. YOU AREN'T CONSERVATIVE. "open the plants get
          the workers hired." fucking blind hours, they are more productive
          inventing their own. I know old man you just want to profit on market
          communist corporate flaccid profit.
          <h1>
            invent by not working and measure proctivity by general retirment
          </h1>
          "A mentally challenged person cannot say 'F Trump,'" your IQ tests are
          for the wrong patterns," and they called the mentally challenged
          person an afro-jigger-tool. They just switch the end of the story to
          see if you can follow."
          <br />
          <br />
          why don't you do it? you sound like you lost your fucking tongue.
          <br />
          "boosted the economy and net worth and self-esteem, jobs," that is
          busy-work, you probably would like to watch eachothers' kids to boost
          your fucking counterfeit. Who needs a job except to pay rent-seeking
          deadlines. wait for customers Rob. you don't need to r&d monopsony for
          your bond-index-funds you fucking cuck. Fuck off Trump vaxx pharma
          trust, why does government need to be involved at all in medicine?
          Just put the ingredient list on it, pharma-pig, 80% of incarcerated
          are just competitors. "Finally, some epstein remediation, insured
          expiring claims non-rollover flaccid un-bargain loss. Turn state
          witness to character evidence, plea deals are moot for duress."
          <br />
          <br />
          "Some people need welfare." No one needs welfare, it just bids up free
          rider mutable tax, surrendered freedom by finance/rent-seeking:
          invoices, expiring claims, implausible landlord use and repo-cycle
          kept down payments. Fucking gentrifying fox, for share-split of
          dollar-park. SUCK MY COCK. intermediate-material.
          <br />
          You aren't as sick measured by non-exclusive byproduct is what science
          tells you.
          <h2>Joe Tobacco, "Socialists will come for Christianity.</h2>
          <h1>We saved small business collateral appraisal with PPP.</h1>
          <h2>
            We should have trust-built with NY residents for Amazon profit. 10kx
            cheaper to fly a sofa than yourself anywhere in the world."
          </h2>
          "we don't do accommodation-arrests." you literally
          involintarily-commit drug-users and -dealers for a pharmacy monopoly,
          gentrification and&nbsp;
          <a href="https://teapharmacy.party">no-script</a>
          &nbsp;vault-share&nbsp;
          <a href="https://vaults.biz">currency competitor</a>.<br />
          “Lottery is to entice new members to the community.” we are a little
          early in the investment, ethics, no, LAW, expiring claims launders
          from third parties. Don't write up your producer-ask with their
          bid-price loss, of&nbsp;
          <span style={{ textDecoration: "underline" }}>
            third party donee beneficiary surrendered freedom (EULA) of your
            customers
          </span>
          , the supply chain, no matter community built by duress and prisoners'
          dilemma cannot surmount the flaccid profit loss of brought forward
          demand without rollover collective-bargain, pure useless inflation
          price inelasticity&nbsp;
          <span style={{ textDecoration: "underline" }}>
            competition with consumers
          </span>
          , to boot.
          <br />
          <br />
          Carl Higbie, "it is the right health decision, but it doesn’t stop it.
          I just boycott the business duress that is involuntary trade and not
          Tranquil, beyond article 4 free rider immutable or jury permit to
          desist and duress for mvp as is conviction." “Because of covid price
          setting is not a function of demand, but a function of how much it
          will cost to make.” Oh we are just picking and choosing whole
          functions now? "They do say the vaccine lessens the impact and virion
          injects its DNA into the cell."
          <h2>
            self-regulation is a microeconomic Supply and Demand assumption that
            your business rights over new entrants and consumers co-opted, like
          </h2>
          "It costs a lot of money, and he needs your help."
          <h3>
            Mises and Marx's analysis of the useless repo-cycle when truncated
            sales tax and 1-level-board max-royalty-contracts are available,
            include homes, equities, bonds and intermediate-labor in gini and
            poverty you fucking oinker.
          </h3>
          impossible/unforeseeable always, never in doubt nor exhibitable to
          more than 1/12 reasonable. The judge isn’t supposed to judge the law
          with expert jury Jury of experts is a government by dictate.
          Mortgage-actual-work-deficit-bride: "decriminalization of marijuana,
          turnstile, stop and frisk, homicide rate of almost 500." salt vat
          vault share no script. "No thanks, babe. I pay up front."
          <br />
          "I don't understand how he is able to keep his job." I invented
          1-level-board max-royalty-contracts by NOT working. You work for
          $12k/64 per year new debt/cash and surrendered freedom of savers. The
          only way out is (cash/debt)*income every year back. jury-permit for
          desist convict within free rider immutable article 4 scope not
          amendment 14 section 4. Money is not m2, mv1===mv2==GDP&nbsp;
          <span role="img" aria-label="side-splitting laughter">
            🤣
          </span>
          . Banned for saying you need to shuffle mail-in to extrapolate;
          retarded. Against voluntary trade and Tranquil society. Productivity
          is the OPPOSITE of what macroeconomists are saying, price, operational
          and opportunity costs deflationary-productivity per hour,
          technological advancement by comparative advantage uses microeconomic
          zero sum price-elasticity of marginal-propensities of
          bookie-price-finding.
          <br />
          "Well, these are self-inflicted wounds. It is bigger now than Carter,
          matching Trumps' spending." legislation victories are the reason for
          inflation and stagflation.
          <br />
          rabies also makes up virion injects DNA into cell, that is not
          vivo-cause, let alone all-inclusive-case or all-cause. "I know you go
          out and have a good time as a&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=KoJB">young person</a>,
          and I, an implausible landlord userer."
          <h2>
            acute respiratory infection warning mechanism of bacterial infection
            debris, monoclonol antibodies doesn't stop infection.
            {/**mccullough protocol */}
          </h2>
          <h1>
            "blood thinners," or natural-excercise, can drop 95% of
            hospitalizations. Comprehensive involuntary committment should be in
            jail and require evidence beyond my favored alcohol brain lesions.
            Stay out of my pocket doc, you worthless-leech.
          </h1>
          "Most people will get it, most whom are unvaccinated." You are
          suffering from basis rate fallacy, as it is a non-exclusive byproduct,
          not cause. Vaxxers literally make up the fact that, “virion injects
          DNA into cell because prevalence.”
          <h2>Use prevalence to investigate, not convict.</h2>
          <h3>
            That prior conviction could be untried and on false exhibitions or
            precedence of grounds, standing.
          </h3>
          Don't green the economy, the tech is not there, so it wouldn't do
          anything. No free money, taxes will be raised in another way."
          <br />
          <br />
          “If you were unconstrained by resources, have whatever you want, go,”
          conservatives acting like more money gets you more resources. Beyond
          Article 4 already on the books but Amendment 14 Section 4 for war
          bonds, default "no" for abstaining elections.
          <h3>
            ppp/bbb/ccc trust built price fixing to prohibit repo-forclosure
            correction kept down payments as to service the impossible
            collateral appraisal third party donee beneficiary surrendered
            freedom. (cash/debt)*income every year back or else, bitch Shannon
            Bream
          </h3>
          <h2>
            A third of the country voted for trump. Caucuses with Democrats or
            Republicans means the media only helps trust build.
          </h2>
          There is not an anti-rent-seeker candidate, 2/3 are for Occupy Wall
          St.
          <br />
          <br />
          "Would the world be a better place today if Adolf Hitler's ideas were
          successful?"
          <br />
          Much like Trump, Adolf Hitler promised to end debt but just spent 20%
          more, blaming akin to the Odessa pogroms. His ideas were co-opted and
          maybe a grande straw man or more likely a fervor co-opted by a
          tyrannical ruler. I just know my older family moved to America around
          1850 after Marx was writing his main piece, never to be implemented on
          his own. We just had an Aryan nut who could have had the gun turned on
          him at the start is the thrust of the motive, as a tyrannical ruler is
          ruler by giving others guns whom don’t turn for some reason against
          them: money, reverse amortization, or jealousy.
          <h2>
            Consider the repo-cycle kept down payments craziness, government
            receipt scopes love it.
          </h2>
          "Border don’t work unless sleep in homeless shelters smoke peyote all
          day long, well where does the lender actual work shortage do all day
          for $200m/yr foreign aid/useless price inflation. Latinos aren't
          putting up with this, co-opt latinos with open boarders, Americans are
          learning that the 1/4 share 3m/yr+ going to FL is a big win. Happy New
          Year." “Homelessless crime.” You are causing homelessness that you
          call a crime, by the implausible rental income crime.
          <br />
          population density still permeates but worst amongst spittle, poop and
          other excrement outlay of bacteria. maybe I am not a protistology
          person, and bacteria is after our digestion, that re-infects upon
          re-entry, the all-cause of virion. “Less people are vaccinated now
          than before, crazy,” that happens every other year since at least
          1980. "Does everyone around you have it." It got cold really fast, it
          is produced when bacteria-reinfects us. Virion does not come inject
          DNA into the cell like the mRNA-sporing-graft does.
          <br />
          "aids only hurts gays and drug users," Larry O'Connor, maybe just null
          hypothesis prevalence, did you shuffle? isn't it afro too? Rabies
          still is bacterial-spittle&nbsp;
          <a href="https://moldmask.co">heat/(density)</a>.
          <br />
          <br />
          "Made the free rider mutable or expiring claim doctors laundered from
          your co-signers' customers a deal they couldn’t refuse.” That is a
          racket O’Reilly. Moot, bargiain oath plea state vic my nugg. “Take
          credit, saved tens of millions, China should pay for 800k deaths.”
          <br />
          <br />
          "Why are you taking my money to pay for your tuition, that is theft,
          that is socialism," that is credit as income compound, if no one
          covets, nor steals, hard to overlook all the murder 100 years after
          Marx. Mises then was credited with credit-cycle identification as a
          problem for capitalism, but saying it is needed. Religion is opiate
          for masses, socialism higher than the state, he was being sarcastic,
          in no way does he want nationalized bridge/broadband. Gen X just
          wasn’t to rent-seek for bond-laundering 10-40%.
          <br />
          <br />
          Embrace ideas of gov dead weight and build what we would without gov,
          use the truancy laws and forced public education investment for free
          rider mutable tax gentrification of trade secrets and useless pure
          inflation.
          <br />
          Want it done right do it themselves
          <br />
          Inflation nor real stock value increase, measured by productivity of
          hours per average traded home, deflation… "More dollars you still get
          the same apples." That was the last we heard of Cats. If I would
          venture to assume what he would say nexts, "apples and oranges vault
          share bro"
          <br />
          4% of the universe and moving outwards faster like a electron pull as
          exclusive slope?
          <br />
          By communication is cause?
          <br />
          Could be spinning
          <br />
          I am denying science, real people didn't die, those people died on
          time, douche.
          <br />
          It only comes out, at a certain point, we aren't all going to get it,
          just because you get the variant of concern to your non-exclusive
          debris of an asymptomatic test.
          <br />
          <span
            style={{
              fontSize: "9px"
            }}
          >
            vaccine test so hot rn
          </span>
          . Just keep distance if you have symptoms of bacterial-infection that
          creates virion. I am a statistician that regresses exogenous, not a
          twitchy epidemiologist.
          <br />
          Self-guided assumes infinite competition or at least
          non-laborless-demand and trade, not spending.
          <br />
          <Cable
            style={{ height: "700px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/19tII39kUjO3Xs9ZC9sgwaKb9iemaL9Gb/preview"
            }
            float="right"
            title="Democracy Now (Youtube) - Edward Snowden (Whistleblower plant)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h1>
            i deserve my alcholohic lesions in my head, or 10 speedballs a day.
          </h1>
          <h1>“I’ll buy his lemonade stand for him,” nJ 101.5 Chris bklyn</h1>
          <h2>
            credit is haram and third party donee beneficiary claimable
            surrendered freedom yolololololo
          </h2>
          synthetic immunity is not sporing the protein on your cell for your
          garbage collection to attack. That is self-mutilation.
          <br />
          “Need to know principle reduces your realm to your work.” ESnowden
          democracy now
          <br />
          “Working as contracted by private companies, extending the work of
          government.” Spoken like a true government R&d gentrification plant
          <br />
          “If Congress is supposed to be consent of the governed, but we don’t
          know what they are doing, it is not consent that requites information
          as foreseeability requires possibility.”
          <br />
          The law begets the consequences except for political law (consensus
          science). G-d loves haters and lovers, except for the 1/12
          unreasonable doubt of industry-variable crazies. They go to Hell but
          Jesus sin sacrifice booooo.
          <br />
          That dog don’t compete with consumer so fail them at macroeconomics
          after microeconomics is forlorne.
          <br />
          Rent seek useless price ineslaticity grentrification for actual labor
          shortage by expiring covered care non-rollover third party doneee
          beneficiary claimable surrendered freedom (EULA).
          <br />
          <hr />
          Why do countries that have debt prefer to service debt instead of
          repayment? “Fertilizer with samples in every mouthful.” "Claiming
          credit for the morning." "Apprentice jealous." "Play as Iblis." the
          executioner is the apprentice is so lush
          <br />
          It is a collateralized asset by inwards of dollar-parks, that is, 20%
          of U.S. lands is federal depository with share split fractional
          reserve and accrual with its vault share. What they make in the
          promise to cash out a modicum tranche makes up for the implausible
          deniability of a force majeure or third party donee beneficiary
          claimable surrendered freedom (EULA) of
          Savers/labor-equity/non-laborles-demand, $12/year/p debt, $3k/year/p
          bond, $64/year/p checking (U.S.)
          <br />
          Uncollateralized, appeal, payee and reason
          <br />
          Why is the Fed doing a reverse repo?
          <br />
          To keep servicing the whole cumulative tranche of bond-index-funds, so
          that *makes their burden increasingly long term* as $12k/year/person
          debt, $3k/year/person m2 bond, $64/year/person is **implausibly
          deniable as impossible. This will soon change with Truncated
          Production Tax** for Free Rider Immutable Sewage Police Lawsuits,
          (cash/debt)*income every year back, 1-Level-Board Max-Royalty-Profits
          for private debt “investment.
          <br />
          consensus science with jury truth of multiple of 11/12
          industry-variable for permits or desistation and resisting officer
          evidence or no state victimized expiring claim non rollover fiscal
          loss (elasticity) or bond-profit loss (operational).
          <h1>SEWAGE POLICE LAWSUITS: free rider immutable exclusive</h1>
          Poverty, gini nor inflation measures bond, equity, home minus rent nor
          intermediate-labor.
          <br />
          Risk nor perfect, but do not discount modicum of efforts built up to
          make the impossible, possible.
          <br />
          <hr />
          force majeure, NJ Consumer Fraud Act fraud, ppp trump-building,
          implausibly-deniable of the forfeited of someone elses' money rather
          than making all investment 1-level-board max-royalty-profit. NO MORE
          NATIONALIZED BROADBAND/BRIDGE FEES FOR 40% njta DEBT SERVICE
          <h2>
            mental disability without biomedical diagnosis is subjective ("messy
            hair," understanding that market makers see portfiolio 1 year into
            shorting my open design competitors 2018-19), based on calling
            non-rollover-insurance fraud to Hackensack Meridian's face.
          </h2>
          <h3>
            a disability because a doctor whom gets paid for such diagnosis says
            it is, without objective proof, of more than a lesion and with
            consent of the applicant.
          </h3>
          I don't want disability if on faux standing of mental acumen,
          certainly not to my mother because I am smart and don't pay take out
          collateralized debts, nor pay uncollateralized , and short my
          competitors into the oblivion with a cash advance, buy out the car
          lien and business debt ($VXX $TBT $VXX $SLV). Repo-cycle kept down
          payments is better prosecuted than shrimping it over.
          <br />
          "I have a hole in my leg and a psychologist doctor said I was mentally
          unstable, and you said I couldn't handle money (I will not pay
          uncollateralized debts), but I think it is a laundering operation to
          her collateralized debts. How do I appeal to a higher court?"
          <br />
          Neptune, NJ SSA (12/30/2021): "That is your right, you have to find
          out on your own." *click*
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "330px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1xTKUtdDVKeZ289odPDcNpwrzatAI-D4y/preview"
            }
            float="right"
            title="platform"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "If you are looking for tax function sanity, you are wasting your
          time. Most people don’t and most-modicum pay 40%." Those poor bastard
          billionaires who actually pay. They should have paid the agents off
          <br />
          <br />
          Your "individual decision protected in the constitution," by Tranquil
          and voluntary trade ends when virion comes from somewhere. Either it
          works or it doesn't, because it is a non-exclusive byproduct warning
          mechanism or an all-cause bacterial-infection. That is why excrement
          (poop, spit) is filled with it. The evolutionary trait is the removal
          of bacteria lest virion is made, not virion like we attack eachother
          with them. It is debris exclusively.
          <br />
          <br />
          “I had more people with covid but the same people in my hospital.”
          That’s because you make PCR to match your variants of concern, one of
          many non-exclusive debris of bacterial infection. Mitchell Katz "Many
          people are coming in because of other causes than coronavirus. We
          don't have cross-sectional datasets, for Personally Identifiable
          Information reasons, but we do for shooting retail traders like fish
          in a barrel with pattern day trading rules, dispairagingly with 13D{" "}
          {">"}5% owners that don't anon uuid to hide even after the quearterly
          reports, nor duress of forfeiture moot contract in transaction data,
          but not to pay for free rider immutable truncated production tax in
          advance because I'm a bond-holder that with my homes, equities and
          intermediate-labor non-compete expiring claims that don't rollover own
          our intermediate-material creaton-serf-employable spent not tranquil
          voluntary trade. We just respect your privacy too much."
          <br />
          <br />
          "We are seeing increased seasonal hospitalizations," due to population
          growth, still. Stop misappropriating funds for expiring claims, public
          and private, as they are forfeited of your duress co signers'
          customers and employees and the rest of the supply chain. "... due to
          coronavirus," Dr. Dave Chokshi, NYC 6% DiBlasio, unauditable data. "We
          have to wait for the science, safety and effectiveness before allowing
          you the right to own, because we want to monopsonize production and
          prevent vault share currency competition with my wealth and trade
          secrets, as a doctor who doesn't want to commit malpractice, tort with
          expriring non-rollover false bid pool non-concurrentable capacity
          brought forward for useless pure inflation and follow null hypothesis
          until billions of dollars are spent and accrued from Savers' third
          party donee beneficiary claimable surrendered freedom (EULA)." Just
          have&nbsp;
          <a href="https://humanharvest.info">open-source ingredient lists</a>
          &nbsp;instead of the R&D monopsony, free rider mutable tax, conflict
          of interest net loss bond profit and animal testing.
          <h1>doctors consistently/predictably fall for basis rate fallacy</h1>
          <h2>
            Older people say to me to wake up to their reality because they
            lived in their parents' gerontocracy, with productivity by price
            deflation per hour literally going backwards.
          </h2>
          <h3>
            and they have a direct line to boon their conflict of interest.
          </h3>
          "Everytime you have stagflation you lose," Peter navarro gets cut off
          for a vaccine doctor (not statistician), I'll fill in for him,
          "[productivity of price deflation per hour comparative advantage and
          technological advancements so we all retire early not just for your
          higher bid.]" Chip in, bub.
          <br />
          <br />
          Unvaccinated cases make up most of non-exclusive byproduct*; 65k
          hospital 15k+ ICU, mutually exclusive testing regimes, don't listen to
          doctors but statisticians. Staff shortage is because of rent-seeking
          actual work deficit.
          <br />
          *replication is literally made up from prevalence, logic dictates,
          since bacteria leaves with excrement, it is merely debris, it does
          not, "inject DNA into cell." Oral antiviral will just suppress warning
          mechanism. These virions aren't alive not evolutionary traits, the
          cell produces different debris that do take time for antibodies to be
          picked up
          <br />
          "You talk with your brain," "killed by a bad cop," or bad laws. State
          v state. We need a GAO. Defend Ukraine, but don’t conscript war crime
          without virtuous reason enough for volunteers or truncated production
          tax for such industry variable multiple of 11/12 jury, without even
          third party donee beneficiary claimable surrendered freedom (EULA)
          …exhibitable as tortious outlay. "Capture a jury that is the most
          credible," defeats the purpose of polling.
          <h2>ALAN DERSH WISHES TO THUMB EACHOTHER LIKE CHOO-CHOO</h2>
          "Of age, they were paid, but I hope underage is not ok.” I’m making a
          calendar.
          <br />
          <Cable
            style={{ width: "300px", height: "330px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1wrZc_qYZz_HB55unRx58TVs1cKwRDqUZ/preview"
            }
            float="right"
            title="platform"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          {/**johny carson: diapers on horse drawn carriages in NY, free rider immutable or collective bargain? only if rollover non-expiring! */}
          "ever wonder how your favorite artist earned money," $12k/yr velocity
          bonds why would artists work for dollars at most $64/yr, fucking
          retard Bob Sellers, STOP HARMING YOURSELF OR I WILL CITIZENS ARREST
          YOU AND IF YOU RUN OR ARE IN A DANGER TO YOURSELF OR OTHERS I WILL
          SHOOT, right? your house is my house, loitering. annual profits more
          than currency itself, you people just give money to eachother's
          lenders, landlords and insurers instead of do your own dishes into a
          house with vault share and 1-level-board max-royalty-profit protocol.
          <br />
          <br />
          People with mental illness, isn’t it a crime? I went in for a knee
          appointment, said insurance wouldn’t sign doctors up if it rolled over
          and didn’t expire, then locked me up for 13 days in Carrier for
          $2k/day from the pool. Don’t tell me people are homeless should be
          called mentally insane when population growth doesn’t necessarily
          increase GDP/p, so scarcity only happens when there is
          finance/rent-seeking invoices, expiring claims, implausible landlord
          use, repo-cycle kept down payments dead-weight. I can do 10 speedballs
          a day without you bugging me by natural law, booned by comparative law
          in scripted amphetamines on the basis of, "oh doctor, I can't
          concentrate."
          <br />
          <br />
          "Only you know what is not right, if you feel it, Say something to
          local authorities," do they have the standing anymore? We literally
          have&nbsp;<a href="https://moldmask.co">no modicome of say</a>&nbsp;in
          what is right.
          <br />
          <br />
          “We wanted to be enticed by constraint.” Gordon Chang on Obama Space
          Race. We have a debt crisis if you understand most of gdp is invoices,
          expiring claims, implausible landlord use & repo cycle kept down
          payments
          <br />
          Accidentally released one of hundreds of thousands, prevalence is not
          out of China upon variant of concern PCR setting.
          <br />
          1.4m 821k Chinese leaders didn’t lock down after testing there, first.
          Stop the fucking state victimization for your own bond index funds
          douche boomer actual labor shortage. Get. Back. To work
          <br />
          Half continuing claims and most disability, 20x rental income - 3/20
          millennials out of work, 3/10 boomer-moochers (when they were
          working-age)
          <br />
          <Cable
            style={{ width: "100%", height: "540px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=KlLP&width=600&height=475"
            }
            float="right"
            title="https://fred.stlouisfed.org/graph/?g=KlLP"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a href="https://fred.stlouisfed.org/graph/?g=KlwO">participation</a>
          <br />
          annual dividends and profits, somehow double the amount of checking in
          existance&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=KlZq" /**truegdp compares above */
          >
            year by year
          </a>
          . Libertarians say, "this wouldn't happen without the Federal
          reserve." We need the big boot of the law on this one, homie. "
          <a
            href="https://fred.stlouisfed.org/graph/?g=KlXv" /**truegdp compares gdp */
          >
            A decreasing velocity of M1
          </a>
          &nbsp;might indicate fewer short- term consumption transactions are
          taking place." Meaning third party donee beneficiary claimable
          surrendered freedom (EULA) credit as income. "We can think of shorter-
          term transactions as consumption we might make on an everyday basis."
          <br />
          <br />
          They used to merely coordinate commercials for minute markers, but now
          they are trying to guide me to see these topics that I've already
          covered for free labor. Just because people don’t work/sacrifice for
          existing company IP doesn’t mean they aren’t productive in other areas
          in life. How could you not figure this out yourselves? I won't give
          you the wrong answer to pass, and I won't allow slander against my
          age-cohort. we work more than boomers ever did. Since 1970, we had the
          same unemployed 18m with nearly 3m/yr+ 25–54 until 2000 (which may not
          be a coincidence but the logic as to how that might be still eludes me
          now, so it may be just that), and GDP/p 1800–1913 being nearly
          constant amongst 3%/yr+ population means neither hours worked per
          person, nor the participation rate, and certainly not inflation per
          hour needs to rise, let alone is booming or not floundering. It has
          risen exclusively because of actual labor shortage by
          finance/rent-seeking: invoices, expiring claims, implausible landlord
          use and repo-cycle-kept-down-payments - third party donee beneficiary
          surrendered freedom (EULA). A booming economy in this microeconomist’s
          book is one that retires, for the greatest output (per hour).
          Childcare is useless pure inflaiton, that wouln't sign up if rollover
          insurance without expiring claims,
          bridge/broadband/40%njtadebt-service/ppp trust-building, sooner have
          you have those people do chores for eachother so they count as
          participation than retire people. “Every bit when I am not here
          helps,” like they know it would help to do our own work than
          redundancies of comparative advantage rungardered, or sacrificed for
          insurmountable loss of having the leeway to raise your own damned kids
          for this gerontocracy boomers have built.
          <br />
          <br />
          Nancy Pelosi: “non-federal cops are like storm troopers for the Death
          Star,” on Portland net loss bond profit fa.
          <br />
          <br />
          Double today’s hospitalizations would still be in the suspected range
          you fucking retard Rudy.
          <br />
          You are just looking for insurance payout. Get it before it expires!
          If it didn’t, no producer would sign up, public nor private.
          <br />
          "Cut in half for at-risk," no shit because they died on time, excess
          deaths are measured by comparing last year
          <br />
          <br />
          If vaccines work (not just clearing cellular debris' warning mechanism
          of bacterial infection, that which fills our &nbsp;
          <a href="https://moldmask.co">excrement</a>&nbsp;and makes virion when
          infected), it is a national security issue, as it must come from
          somewhere. Therapeutics are not preventative.
          <br />
          <br />
          “In a room full of vaccinated people, you aren’t saved from the
          disease.” Not a practicing doctor, nor statistician.
          <Cable
            style={{ height: "350px", width: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1uSQUra0tT9qLEabD7UqZDfOHTBcXoz8J/preview"
            }
            float="right"
            title="Rob Schmitt Tonight (Newsmax) - Dr. Jay Bhattacharya, 'Professor of Medicine at Stanford'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          "Stopping PPP trust-building self-tort “fraud” could pay for 20% of
          bbb ($350b, nationalized rent-seeking bridge/broadband fee) annually
          $1-300b," James Comer, Kentucky.
          <h3>
            expiring claims is the only way to sign up nannies, mechanics and
            doctors.&nbsp;<a href="https://teapharmacy.party/drugs">drugs</a>
            &nbsp;are a&nbsp;
            <a href="https://vaults.biz">currency competitor</a>.
          </h3>
          <h2>
            Pandemics happen when Average age of death amounts to the average
            age, then it lowers thereafter and the life expectancy jumps if not
            up to wrinkly&nbsp;
            <a href="https://www.aei.org/carpe-diem/chart-us-population-distribution-by-age-1900-through-2060/">
              age
            </a>
            &nbsp;yet, just sewage and nutrition
          </h2>
          beyond life expectancy population 15% of 1918 population expected to
          die = 15,903,230 expected/1,356,785 actual, 1,100,000 from population
          growth alone life expectancy ago (850,000 actual excess).
          ((1870-80)/10)
          <h1>
            A pandemic measured by growth without any basis rate exogenous
            fixations
          </h1>
          <h2>
            Age distribution changes doesn’t account for cohort size
            <br />
            Only 25-54 working age size led me to believe 1.2m/yr+ 2020-2030 was
            discoverable
          </h2>
          <a href="https://www2.census.gov/library/publications/decennial/1880/vol-11-12-mortality/1880v11-02.pdf#page=6">
            1880 deaths
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www2.census.gov/prod2/decennial/documents/36894832v1ch05.pdf#page=34">
            1890 dx
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2885717/">
            1910a dx
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7_1910.html">
            1910b dx
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www.cdc.gov/nchs/data/lifetables/life19-20.pdf#page=60">
            1920 dx
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www2.census.gov/library/publications/decennial/1930/population-volume-2/16440598v2ch11.pdf#page=14">
            1930 p
          </a>
          &nbsp;&bull;&nbsp;
          <a href="https://www2.census.gov/library/publications/decennial/1940/population-volume-4/33973538v4p1ch1.pdf#page=3">
            1940 p
          </a>
          <br />
          <Spanish
            lastWidth={Math.min(600, this.state.lastWidth)}
            style={{
              paddingBottom: "15px",
              backgroundColor: "rgb(190,150,180)"
            }}
          />
          <br />
          <Cable
            style={{ height: "200px", width: "100%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1BGJag8pW3KxZTbimfp0Nvc3rNf0tgsY2/preview"
            }
            float="right"
            title="https://www.cdc.gov/nchs/data/lifetables/life1890-1910.pdf"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "How would you and your family survive if the US government collapsed
          or was taken over and dollars became totally worthless in 2022?"
          <br />
          You are asking for two different scenarios, as the dollar v government
          (bonds), until parity, by further third party donee beneficiary
          claimable surrendered freedom (EULA) and beyond Article 4 outlay and
          receipt scope, when there are apparent alternatives for free rider
          immutable (sewage, police, lawsuits) truncated production tax, after
          reverse-amortize (cash/debt)*income every year back. 1-level-board
          max-royalty-profit-contracts for future debt “investment.”
          <h3>
            Exogenous factors aren’t not mentioned but fixed for in regressions.
          </h3>
          A vaccine to stop all variants, leave it to the military, they always
          do it right." They 10% debt service you tool.
          <br />
          <br />
          The military comes out with a vaccine just before expected excess
          deaths to level from population growth growth that was called a
          pandemic at their end of life.
          <h3>3.5m deaths, .5m excess at end of life</h3>
          "The employer has a right to keep you from work with their own
          mandate." Not naturally, they need to get a permit like desistations.
          If the "biden vaccine mandate cannot be upheld," because pandemic is
          from population growth, business cannot either
          <br />
          "Right of any reason to remove from restaurant except racial stuff."
          Get a permit, goomba
          <br />
          "Trump was held accountable more than any president in our history,"
          Chris Stewart.
          <br />
          "Autocracy outsized influence," there is no need for free rider
          mutable tax.
          <h2>
            bulk of hospitalization are unvaxxed because you have only been
            reporting&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              5% of influenza-like-illness
            </a>
            .
          </h2>
          "500m tests (Michael Goodwin ny post)," for free rider mutable tax for
          gentrification, rent-seeking and useless pure inflation monopsony.
          <br />
          "Donald Trump is a leader, he may be wrong, but he leads. The price we
          pay to get a leader.
          <br />
          Inflation, there is so many measurements.
          <br />
          4-5 phony 5-6 honest.
          <br />
          $100m on climate change," brought forward demand is always useless if
          it doesn’t rollover/flaccid profits/expiring claims competing with
          consumers as a producer.
          <br />
          "Destroy the meaning of NATO by defending all human rights
          non-contractually."
          <br />
          Thin ice bro. "Not in Americans best interest is not an issue," any
          non-trade is self-deprecating for technological advancement per hour
          price deflation comparative advantage. “We need to make it Painful by
          sanctions not military intervention.” Unilaterally gave Russia
          pipeline network fees gentrification by government, rent-seeking and
          pure useless inflation monopsony. Sounds familiar nationalist
          Chaffitz. "$1.5m/day on interest," and $3m/day on Afghanistan, pulled
          out for social security, Amendment 14 Section 4 beyond Article 4.
          "Energy independence," doesn't mean you need government to rent-seek
          douche. "Far less environmentally friendly in the US.” Target-margin
          network monopolies as microeconomic Supple and Demand reasoning of
          self-regulation of price, quality or duress is moot, unless infinite
          producters and non-laborless-demand (finance/rent-seeking; invoices,
          expiring claims, implausible landlord use, repo cycle kept down
          payments). "Anything trump when he took on the great causes," like
          self-depricating for USPTO? That's a bad thing.
          <br />
          "Not fair," like impossible lest third party beneficiary donee
          claimable.
          <h1>Get a jury permit to desist or discriminate beyond price</h1>
          <h3>if government cannot, why would business be able to</h3>
          <h2>
            converging life expectancy/average age at death with 1.2m/yr
            population growth
          </h2>
          <h3>
            third party donee beneficiary claimable surrendered freedom (EULA)
            exo
          </h3>
          800k deaths or 500k/yr, 1.2m/yr expected from population growth, 80 is
          life expectancy we are made for that age as we start getting wrinkly.
          <br />
          What if speeding was just pulled over? No state victimization that
          just gets laundered to&nbsp;
          <a href="https://truncatedsalestax.com">bonds</a>.
          <br />
          Life expectancy is the average age at death, so excess deaths are to
          catch up, there is not a growing life expectancy as much as an older
          cohort. It is a dog wagging its tail situation.
          <br />
          Life expectancy in 1918. Right after 1918 life expectancy rose by 10
          because it was after the average cohort age met life
          expectancy/average age at death.
          <br />
          "Antibiotics put me in a wheelchair in a month," antiviral just stops
          the warning mechanism. "Don’t realize how much power, when they
          realize how much power they have, can’t fine us," says Howie Hurley.
          &nbsp;<a href="https://qr.ae/pGzBC1">Haha</a>. "
          <a href="https://qr.ae/pGzBCd">I know you work for a living</a>." what
          do the $12k/year/p debt $3k/yearp bond $64/year/p checking (new) do
          for a living?
          <br />
          <br />
          <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
            https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html
          </a>
          &nbsp;"Deaths are projected to reach more than 3.6 million in 2037,"
          if people live to 100 maybe
          <br />
          <br />
          The pandemic is measured by significance, but they don’t fix excess
          deaths for population growth, just look at fertility rates life
          expectancy ago. This is why they are called boomers.
          <br />
          <a href="https://www.researchgate.net/figure/Total-fertility-rate-in-United-States-1920-2014_fig1_316893597">
            <Cable
              style={{ width: "100%", height: "350px", maxHeight: "50vw" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1xYOpsuwFUyIpKXIfuEI-cn01b7h5bPCn/preview"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          Do you know why "boomers?" WWII live birth lull was life expectancy
          ago, so Census has projected this back in 2015 aging boomer deaths.
          Bacteria is in excrement because if that reinfects us virion comes
          out.
          <br />
          <Mortal
            lastWidth={Math.min(600, this.state.lastWidth)}
            style={{
              paddingBottom: "15px",
              backgroundColor: "rgb(190,150,180)"
            }}
          />
          CDC put pneumonia influenza covid together, for Cause of Death and
          hospitalizations, all of which are insignificant changes year to year.
          <h2>I’m not a doctor, but I am a statistician.</h2>
          800k deaths or 500k/yr, 1.2m/yr expected from population growth, 80 is
          life expectancy we are made for that age as we start getting wrinkly,
          <br />
          Cause is not merely from prevalence, they literally make up injecting
          DNA into cell. 1/3 businesses are gone, because rent beyond plausible
          use below 5 units or 30 days not price intent deduced.
          <br />
          <br />
          “200 respiratory virus that circulate,” prevalence doesn’t mean
          circulation. Politics is reason beyond law.
          <br />
          <br />
          "I don’t discuss my vaccination status, I think that depends on each
          person." If vaccinations aren’t perfect, and it comes from somewhere
          (and it isn’t merely debris of bacterial infection that you look for
          survivorship bias), then it is a national security issue.
          <br />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/ZmUozfOPquk"
            }
            float="right"
            title="Left vs Right (77WABC) - sundays 3-5pm Sliwa vs Hahn"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "It's a free country, ...out of this because of Trump's warped speed,"
          Rep Jeff Van Drew. “mRNA-sporing-graft tech maps out and creates what
          fights off virion.” Howie Hurley, "now omicron is vast majority. no
          cure for the warning mechanism" This is the first debris tested for
          asymptomatically, of course it will show higher prevalence.
          <br />
          <br />
          "harsh wave of many positive cases, firing amongst" actual work
          shortage 10x more hours per average home sold and backwards tech
          advancement because GDP/p 1800-1913 nearly constant and
          finance/rent-seeking in invoices, expiring claims, implausible
          landlord use and repo-cycle kept down payments, for writing down
          to&nbsp;
          <a href="https://truncatedsalestax.com">truncatedsalestax.com</a>,
          stop the net loss bond profit per state victimized conflict of
          interest.
          <br />
          <br />
          You know what you do with the Chinese US cahoots in bonds?
          <br />
          reverse amortization (cash/debt)*income every year back then
          1-level-board max-royalty-profit.
          <h2>
            "Pandemic to endemic as omicron pathway," because excess deaths is
            now based on last year without accounting for growth retard.
          </h2>
          I’m allowed to be critical of teachers, you aren’t of students.
          <br />
          <br />
          "I want to purchase food for my friends here," Burger King "no." Russ
          Solsberg "you need a card to eat, but Democrats don't want ID to
          vote."
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/IPQIsodwMwY"
            }
            float="right"
            title="Stephen moore - June 13th, 2021"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          WWII was a life-expectancy ago... rate of change thru 2009 shows this.
          <br />
          <br />
          In US 700k/less and in World 50m/less than population growth a
          lifetime ago... that is insignificant,&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            changing byproduct testing
          </a>
          .
          <br />
          <br />
          Non-exclusive serious cases from those unvaccinated is mistaking the
          forest for the trees (warning mechanism of ingested bacteri, virion
          debris)
          {this.state.lastWidth && (
            <a
              style={{ color: "rgb(230,230,255)" }}
              href="https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html"
            >
              <Vaxx
                lastWidth={Math.min(600, this.state.lastWidth)}
                style={{
                  transform: "translate(0,0)",
                  backgroundColor: "rgb(190,150,180)",
                  height: "200px"
                }}
              />
            </a>
          )}
          "COVID-19 coded deaths[ and&nbsp;
          <a href="https://data.worldbank.org/indicator/SH.MED.BEDS.ZS?locations=GB">
            hospitalizations
          </a>
          ] were&nbsp;
          <a href="https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html">
            added
          </a>
          &nbsp;to P&I to create the&nbsp;
          <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
            PIC
          </a>
          &nbsp;(pneumonia, influenza, and/or COVID-19) classification."
          <br />
          {this.state.lastWidth && (
            <Epiology
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                paddingBottom: "15px",
                backgroundColor: "rgb(190,150,180)"
              }}
            />
          )}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">electron microscope</a>
          &nbsp;snapshot, cartoon in vivo virus insemination. I think it only
          comes out, & is&nbsp;
          <a href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/">
            exclusively caused by bacterial infection
          </a>
          .
          <br />
          <br />
          <hr ref={this.polio} />
          <h2>
            "<a href="https://youtu.be/nKvUf7F4Xn4">WWII life expectancy ago</a>
            ," was not interesting enough for Dick Morris.
          </h2>
          third party beneficiary is our law, no surrender what option to buy of
          intermediate-scope you can't concurrently-fulfill
          <br />
          <br />
          finite producers, 11/12 industry-variable jury means 1 person is crazy
          when convicted or permitted in duress for minimal viable product for
          voluntary trade
          <br />
          <br />
          “3k marines 5k sailor 3k soldiers, no religious exception.”{" "}
          {/**jesse james duff */}
          <br />
          <br />
          ms literally, "matches paralytic polio" in&nbsp;
          <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
            US numbers
          </a>
          {this.state.lastWidth && (
            <Polio lastWidth={Math.min(600, this.state.lastWidth)} />
          )}
          {this.state.lastWidth && (
            <Dies
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                float: "right",
                transform: "translate(0,0)",
                width: "400px",
                maxWidth: "100%",
                backgroundColor: "rgb(190,150,180)",
                height: "250px"
              }}
            />
          )}
          "I know from experience, don't self-medicate oxy," Sliwa just says
          this because doctor trust building,&nbsp;
          <a href="https://qr.ae/pGqmOq">dollar-depositary consortium</a>&nbsp;
          <a href="https://vaults.biz">competition</a>.<br />
          <br />
          "pedal to the medal with approval of vaccine, not same effect as
          other, I don't care, pfizer gets billions moderna wrote their own
          ticket."
          <br />
          "stay at home moms aren't my base 15m antivaxx and antitrump."
          <br />
          Why are you putting criminals in mental hospitals, with insurance it
          costs $2k/day, that is self-deprecating.
          <br />
          Plea bargains are inherently duress to lie under oath. No scripts.
          <br />
          Finance is the cause of the labor shortage. You guys have no idea what
          you are talking about. This is proven by GDp/p 1800-1913 being nearly
          constant amongst 3%/yr+ population.
          <br />
          Do you get a cut of involuntary commitment? We need to ween jailors
          and cops off net loss bond profit and healthcare off of insurance,
          public and private. It is self-deprication to bring forward demand
          like this that doesn’t rollover.
          <br />
          Bail means you don’t have evidence, you can always review it later.
          <br />
          "People are dropping left and right with positive tests."
          <br />
          We need to ween jailors and cops off net loss bond profit and
          healthcare off of insurance, public and private. It is
          self-deprication to bring forward demand like this that doesn’t
          rollover.
          <br />
          Bail means you don’t have evidence, you can always review it later
          <br />
          <Cable
            style={{
              height: "280px"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1sXJni7Y9HKCJ5wq6H2otrmuTbtv5zZgW/preview"
            }
            float="left"
            title="National Report (Newsmax) - ppp trust building, 20%/yr+ more than $4t/yr 2010-3/2020"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Insurance is going to not underwrite," with expiring claims? It is a
          false bid pool, it is illegal, third party donee beneficiary
          surrendered freedom (EULA).
          <br />
          You guys should probably be on anti psychotic meds.
          <br />
          Help you guys out, hold your feeble hands.
          <br />
          Do you know why boomers are called boomers? Because after the lull in
          births over WWII , boomers exploded with births. This pandemic was
          projected by the Census in 2015. Boomers are the cause of inflation,
          20x/millennial rental income and 10x/boomer millennial hours worked
          since you all were my age. So stfu.
          <br />
          This pandemic was projected by the&nbsp;
          <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
            Census in 2015
          </a>
          . Do you know why boomers are called boomers? Because after the lull
          in births over WWII, boomers exploded with births. You all are dying
          on time, not soon enough, half continuing claims and most of
          disability goes to the olds, whom are the cause of inflation*,
          20x/millennial rental income and 10x/boomer millennial hours worked
          since you all were my age. So get back to work.
          <br />
          *proven by GDP/p 1800-1913 being nearly constant amongst 3%/yr+
          population, save repo cycle kept down payments third party donee
          beneficiary surrendered freedom (EULA) force majeure implausibly
          deniable intent.
          <br />
          Insurance is going to not underwrite with expiring claims? It is a
          false bid pool, it is illegal, third party donee beneficiary
          surrendered freedom (EULA).
          <br />
          I’m a statistician, not a doctor that follow eachother lest get
          malpractice.
          <br />
          <br />
          Virus comes out after bacterial infection,&nbsp;
          <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
            that’s why our excrement is filled with bacteria
          </a>
          , and injecting dns in an instant is just made up! Ms matches
          paralytic polio.
          <br />
          55m/yr+ worldwide 1.2m/yr+, 500k excess deaths from zero.
          <br />
          <br />
          "This vaccine doesn’t prevent the disease," but it comes from
          somewhere. Neither does ms or paralytic polio (same thing).
          <br />
          Get a permit - from an industry-various multiple of 11/12 jury.
          <br />
          "Not antivax," so it works?
          <br />
          <br />
          Trump giving such credence to the duress beyond minimal viable product
          without multiple of 11/12 industry-variable jury. Get a permit. So
          that they can copy Twitter and not protect no quid pro quo rights.
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ float: "right", width: "300px" }}
            key="1429182687588278276"
            tweetId="1429182687588278276"
          />
          "100m people potential deaths without vaccine, but people deserve
          their freedom." It comes from somewhere lmao.
          <br />
          “Trace contact exposures,” virion is made when bacteria-infection.
          That’s why our excrement is filled with bacteria. The antibodies are a
          warning mechanism.
          <br />
          I’m a statistician with facts. census projected the pandemic in 2015
          with aging boomer deaths article.
          <br />
          "Omicron because no vaccine and low immunity. Highest HIV/AIDS in the
          world."
          <h2>
            What if speeding was just pulled over? No state victimization that
            just gets laundered to bonds.
          </h2>
          "How does national debt cause inflation?"
          <br />
          The labor shortage of actual work from the bond-holders
          laborless-demand. Also, force majeure implausible deniability is even
          called corrections when the repo-cycle keeps down payments laundered
          upon loitered collateral. It is verifiably not population growth by
          witnessing GDP/p 1800–1913 being nearly constant among the 3%/yr+
          population, only finance by third party donee beneficiary claimable
          surrendered freedoms (EULA) that includes invoices, expiring claims,
          implausible landlord use and repo-cycle kept down payments.
          <br />
          <br />
          “What do you see the government to do to increase the buying power of
          the dollar without deflation?”
          <br />
          <br />
          Why do you not want deflation, so you don’t have to work? That is
          impossible. I will prosecute third party donee beneficiary claimable
          surrendered freedom (EULA), so you don’t have a choice.
          <br />
          Do you mean succeed, like don’t gentrify nationalized bridge tolls or
          broadband fees? You are implying there is to be no self determination
          with free rider mutable tax. I don’t know what you mean by
          self-determination by market communism Respect for what a certain
          market communist want, like third party donee beneficiary claimable
          surrendered freedom (EULA) What the people want has no power over
          others.
          <br />
          By succeeding you are implying people are slaves to government. We
          need to ween cops off net loss bond profit. All convictions are moot,
          isn’t it? You don’t need to nationalize bridge tolls and broadband
          fees, just target margin network monopolies.
          <br />
          You think the only way is violent uprising? Fucking nut Frank morano,
          take your fucking pills.
          <br />
          You keep talking about inflation like it isn’t exclusively from
          finance, labor-competition is perfectly elastic as proven by GDP/p
          1800-1913 being nearly constant, save repo cycle kept down payments
          third party donee beneficiary surrendered freedom (EULA) force majeure
          implausibly deniable intent.
          <h2>
            Tim Dillon: "Hopefully this variant sweeps and we move on," The only
            thing sweeping are tests.
          </h2>
          It comes from somewhere michael and Trump you fucking retards. "Very
          left or even marxist," like ending finance actual work deficit? Go to
          hell fucker. "Don’t sneak in, follow any rule by self-regulation." Get
          a fucking permit Jew.
          <br />
          <br />
          “Vaccines and seatbelts keep you safe,” but you didn’t even save
          people with MS = paralytic polio and the warning mechanism of
          bacterial-infection producing virions actually is&nbsp;
          <a href="https://humanharvest.info/polio">positively correlating</a>
          &nbsp;for vaccines and hospitalizations 1980-2020. 20x/millennial
          boomer rental-income is called an emotional problem by the
          testicle-less Curtis Sliwa.
          <br />
          "expert law firm knows kglaw covid positive into homes." "Don't hate
          eachother that don't agree," GET A FUCKING PERMIT BITCH. A booster
          doesn't make more usefull antibodies, just excess when it is
          mRNA-sporing-graft
          <br />
          <br />
          “People will know that they will take care of themselves, like
          plundering, implausible use rent, or discrimination without
          industry-variant jury-truth desistations.” Judge Janine
          <br />
          “Leave it to doctors patients and individuals, let business decide to
          do.” Charlie Kirk.
          <br />
          Atheism Dead, “No woke or crazy. After Time, ‘is G-d dead?’ Science
          pushing G-d and faith out of the people, G-d is no longer reasonable
          nor rational. Science is more proving immaculate conception of the
          Universe and the Virgin Mary, as the&nbsp;
          <a href="https://saverparty.xyz/jesus">sin sacrifice</a>.” Eric
          Motasnic TAKE YOUR MEDS. "...when&nbsp;
          <a href="https://qr.ae/pGzcYE">Einstein</a>&nbsp;was alive. ...You
          know every cell, bone in your body is made by Him, G-d is in every one
          of use, can push him away in free will, but we all come back, whether
          it be on their deathbed or not."
          <br />
          "Is a pedofile or a racist-rapist, many want jobs." Judge Janine
          <br />
          <Cable
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "600px",
              maxHeight: "100vw"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1TX2wYs7rcGMgaLIwsY5GAPg1y3nP7sKY/preview"
            }
            float="left"
            title="https://www.quora.com/unanswered/Is-implausible-use-rent-dead-weight"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "In america we have more food than we can possibly use. My parents
          raised me to love this country, a beautiful and rare thing. If we go
          to Hell by allowing everyone come in, we know common sense it is
          foolish. They did it the right way, why? because it shows respect. If
          they come in, vs say use me, trade me a job. G-d doesnt get it wrong,
          leaders get it wrong. Joe Biden is pushing abortion on america, don't
          call out hypocrisy of Catholics, that is game-play. ...Take G-d out,
          marxist, leftist cultural marxism."
          <br />
          <br />
          Rent is cheaper because it is a method of income beyond plausible use,
          but it is a net loss of per hour price deflation from
          landlord-work-deficit. The cost of living would be cheaper than on
          market ask-outright, unless comparing to the alternative-basis where
          apartment buildings were forced to condos sales under 5 units or 30
          days, then price fix, for price deflation per hour, and getting &nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=KezO">
            20x/millennial boomer rental income
          </a>
          &nbsp; back to&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=KfIk">work</a>, on
          implausible landlord use intent deduced grounds, from more supply no
          longer withheld from labor-borne demand.
          <br />
          Atheism Dead, “No woke or crazy. After Time, ‘is G-d dead?’ Science
          pushing G-d and faith out of the people, G-d is no longer reasonable
          nor rational. Science is more proving immaculate conception of the
          Universe and the Virgin Mary, as the sin sacrifice.” Eric Metaxas TAKE
          YOUR MEDS
          <h1>Saver Party will retire you ;)</h1>
          "Resources and basic preventive care," if entrepreneurs don’t step in,
          maybe wall st and gov is&nbsp;
          <a href="https://www.quora.com/Might-an-anti-rent-seeker-party-win">
            encroaching on monopsony and R&d gentrification
          </a>
          . "If one person is health, we are all better for it," but it isn’t
          proven virion injects DNA into the cell, only that it comes after cell
          and bacteria in taxonomy.
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1SWzmK3Y9d40YfGpXoFwZeC1qDaA8qgja/preview"
            }
            float="left"
            title="Crystal Clear (Diamond&Silk,Newsmax) - ccc poverty questioned"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "They are giving people money for a whole year, did it help? "<br />
          "They are bidding up tennis shoes and flat screens." Continuing claims
          2.8m/170m employed is back to normal, half of them being boomers!
          <h3>
            {/*Stimulates the ask-price. */}Recession is falling growth for two
            months and a downturn is either jobs or price. None of these are
            bad, it is how we measure technological advancement in economics.
          </h3>
          "If your paycheck depends on it, you can force them to do anything
          before jury." Bill D'Blasio (6%), pharma brought forward demand,
          monopsony intra-market-constraint by competing with consumers beyond
          minimal viable product.
          <h2>
            The only thing you ever need is because of finance and rent seeking,
            not population growth. "We got around this thing with the vaccine
            and Trump, flip people on their stomach can save their&nbsp;
            <a href="https://humanharvest.info/polio">life</a>." Manny Sethi
          </h2>
          <h3>
            “Someone to come in on the merits of the argument,” the owner of the
            platform needs to get a permit to desist jury untruths of multiple
            of 11/12 industry various jury.
          </h3>
          I don’t know why 15% others don’t want to get the vaccine, but I don’t
          want to give government any reason to spend on free rider mutable, let
          alone excess antibodies. But it is just stupid, cases asymptomatic and
          insignificance of total hospitalizations before vaccines, all PIC,
          influenza hospitalizations actually shows a positive correlation, so
          <h3>
            it is scientifically accurate to call all 85% of you retarded.
          </h3>
          "Son of G-d incarnate, death for my Sin." “Peaceably gather,” saying
          sin sacrifice&nbsp;
          <a href="https://nationalsecuritycasino.com/jesus">just works</a>.
          Nutcases! Take your meds!
          <h2>
            why excess deaths 2010-2020 was flat, Why are boomers called
            boomers?
          </h2>
          <Cable
            style={{ height: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1UBIYKDrfVCp-Q7B14FKP74D2yF2U0Yta/preview"
            }
            float="right"
            title="The Count (Newsmax) - Pastor Brian Gibson on Christmas with Logan Raddick"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h3>
            WWII, that was life expectancy ago, made a population growth lull.
            That is your pandemic, excess deaths 500k and short of 1.2m
            mortality projections by the Census Bureau and myself.
          </h3>
          Wildstein (NJ Globe, on gerrymandering gentrification gerotocracy):
          “Just a prisoners’ dilemma to keep people separated.” In fact, say
          rollover insurance to an orthopedic surgeon they’ll lock you up for
          $2k/day from the false bid pool like a flaccid collective loss of the
          cash laundered and collateral loitered.
          <br />
          <span style={{ backgroundColor: "white", color: "rgb(32, 22, 11)" }}>
            You have the Gaul to blame youth homelessness on emotions
          </span>
          ? The olds had their whole lives to save, 1800-1913 GDP/p is nearly
          constant, save oscillation, among 3%/yr+, now it is 1%/yr+.
          <br />
          We work 10x more than when you were our age, and 20x/millennial is
          boomer rental-income, bottom-left economists call that a landlord work
          deficit. We gotta cap rent at 5 units or 30 days so condos, fall from
          the sky. Implausible landlord use grounds.
          <h2>
            Reverse debt don’t cancel nor bailout third party donee claimable
            beneficiary surrendered freedom, by (cash/debt)*income every year
            back.
          </h2>
          Maybe keep scripts out of pharmacies so we can have no prohibitions of
          trade nor trust building based on saying I have anxiety to get a
          doobie or I can’t concentrate to get. speedball. GOP so smart about
          unions and their barrier to entry, but not immigration? It is all a
          free rider mutable tax racket for bond laundering or pure, useless,
          inflation, gentrification and rent seeking for nationalists instead of
          targeting margins, and regulating by jury permits. No business can
          force duress beyond minimal viable product, that literally means
          involuntary by parts.
          <br />
          <br />
          We expel bacteria in excrement and spittle, because when it interacts
          with cells it becomes infected and produce virion.
          <br />
          <br />
          CNN Reporter: "FOIA requests to be able to see executions and uuid
          anon trades after 2 weeks by virtue of public discovery."
          <br />
          Anchor: "Otherwise, that's not allowed. why?"
          <br />
          Reporter: "Practicality of fitting the public into court room. It is
          not safe."
          <br />
          <br />
          Michael Rassmusen, Ryder, on&nbsp;
          <a href="https://qr.ae/pGziq6">
            gerrymandering gentrification gerontocracy
          </a>
          , “like a judge, ‘because you didn’t bring it up, I am not gonna
          consider it.’” What is the reasoning for that?
          <h2>
            Norway corporate every citizen to export demand, without indebted
            the currency{" "}
          </h2>
          "That is called price fixing, lender work deficit. Let the prices fall
          and for energy networks, target margin. Can certainly ban invoices
          upon third party beneficiary law
          <br />
          <br />
          _Certainly there are other ways they could administrate the sovereign
          wealth fund, or they could even eliminate it , but the Norwegian
          people are interested in the longer benefit, an investment rather than
          a sale.
          <br />
          <br />
          "by the people you mean their bond-holders." _Yes, in a sense you
          could say the people of Norway are the bond holders, although
          technically the funds are pension vehicles, and operate as such.
          <br />
          <br />
          "so it is regressive-gerontocracy by delivering returns by pensions
          that further bloat trust-building by bonds and public corporate labor
          equity savings/outlays withheld, and it literally has 10% debt service
          (normally that is the rate, as in US excluding states, I see Norway
          has ~$150b GDP/yr and .4x/GDP, debt) from rent-seeking by
          nationalized-networks? I will prescribe target margin any operational
          network, among jury-various-industry-quality duress without state
          victimization. I would declare this government surrogate private
          collective investment, and potentially bargain, a, “voluntary trade,”
          if Norway incorporates EVERY citizen to export demand, without
          indebting the currency (depositary on government land), first."
          <br />
          <br />
          "Covid hasn’t run its course, workers are working on floors,
          quarantining at jobs, so the chain doesn’t crater. Agriculture harmed
          by 41k year obliquity cycle of axis to the sun.
          <h2>
            Peter Morcini - understander of pure, useless inflation by bidding
            of debt "investment," as opposed to 1-level-board
            max-profit-royalty-contracts, and money
          </h2>
          <Cable
            style={{ height: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1dgBms6NYeGbuiqeO6osdjl-AfjueXKh7/preview"
            }
            float="left"
            title="Dick Morris (Newsmax) - Peter Morcini"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "'Social-reason'-investing makes inflation, can't even give us the car
          yet," legacy cars should double inventory without Biden nationalized
          free rider mutable rent-seeking, gentrification and pure, useless
          inflation. "Stretching intermediate-labor and material monopsony,
          thin. 20%+ union premium. Social-contstraints too, from activist
          investors or government policy."
          <br />
          "We want to give&nbsp;<a href="https://qr.ae/pGzaCm">enough</a>
          &nbsp;money to survive during covid, tie them over, but side effect of
          inflation, but no one monitors that, and it goes beyond good
          intentions in&nbsp;<a href="https://qr.ae/pGzaF7">the first place</a>
          ."
          <br />
          "Adult labor force participation looking for work is going down. $3k
          for caregiver to stay at home and not participate in the laborforce.
          Most take a major that is useless, if we pay for it, we aren't
          purchasing school, just bidding the price-upwards. marketplace not
          only rations, but it minimizes costs, take away the competition with
          subsidies, you don't make people off justt drive up the price. We see
          inflation, but we do not know the&nbsp;
          <a href="https://qr.ae/pGzOUl">cause</a>."
          <br />
          <br />"<a href="https://qr.ae/pGzTgd">Create jobs</a>, but raises
          prices, ... deficient supply of industry metals, cut in half," 10%
          debt service. "If you drill, government takes 40% of profit," instead
          of target margin network monopsony?
          <br />
          <br />
          Rabies, bacteria on the teeth you release thru spit so it doesn’t
          infect your cells and make virions!
          <h2>Antiviral is just suppressing the warning mechanism.</h2>
          Elizabeth Cohen: "The free rider mutable tax is footing the bill for
          people to use the drug. The problem is profit needs to be big enough
          for non-partnership 'investing' to surpass the barrier to entry costs,
          caused by that very 'debt' investment! Pure, useless, inflation,
          monopsony and gentrification."
          <h2>virion kills, but is false positive asymptomatic</h2>
          <Cable
            style={{ height: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1X1Ny5ZFuqOzD0rovzxYvnHtFBEjT8fUj/preview"
            }
            float="right"
            title="Crystal Clear (Diamond&Silk,Newsmax) - vaccines"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "800k people have died, under biden 500k died with covid," WWII
          produced a lull in population growth life expectancy ago, so 2010-2020
          had 0, "excess deaths." Illegals running amock, what is wrong with
          that? Why are you like this for immigrants and duress/discrimination
          sometimes but not unions?
          <br />
          <br />
          "They are pumping money to get a bid-kickback, as far as I am
          concerned." Free rider mutable tax. "See, this is what a slave driver
          does.”
          <br />
          <br />
          CNN, GWU: "Worsening-pandemic by 1300/day 1400/wk+ Washington DC
          cases. This is the first asymptomatic virus. It is a non-issue, being
          a non-exclusive byproduct of bacterial-cause.
          <br />
          Stopping an outbreak," injecting cells with dna is never proven, only
          mitosis of already infected cell. Only that it is a warning mechanism,
          and that it only comes out, evolution thereby goes, bacteria={">"}
          cell={">"}virion, "or not enough people, because it is so widespread?"
          It was here before. 1/20 positive, it&nbsp;
          <a href="https://humanharvest.info/polio">doesn't matter</a>!
          <br />
          <br />
          "Fever îs leading sign of coronavirus (but that is 5% of pneumonia,
          influenza covid, by symptomatic-testing-method-regime)." - Exogen.
          <br />
          Kilmeade: “Polio vaccines are holy grail, it saved lives.”&nbsp;
          <a href="https://humanharvest.info/polio">Uh wrong</a>
          <br />
          Masks are for open bodies, cause bacterial-infection with prolonged
          us, and deaths & hospitalizations weren’t effected by covid more than
          the normal pneumonia influenza covid seasons. Doctors just don’t know
          how to standardize for epiologic population size, over time.
          <br />
          "The whole family is sick," bacteria is probably inside of the house.
          <br />
          People are just as sick, covid is a non-exclusive byproduct with 5%
          prevalence among symptomatic cases.
          <br />
          <br />
          Craig Zucker, 'The Shot To Save The World: “_, Adenovirus, protein
          substitution, some home run in this portfolio, financing and help, not
          appreciated how much the government worked with them. It's a brilliant
          idea because - never had we manufactured and tested at the same time.”
          <h1>scriptless pharmacy currency, anyone?</h1>
          <h3>
            How about you, test monkeys, would you open source ingredient list
            on recipts for the sun sacrifice of craft beers?
          </h3>
          <h2>
            Free rider mutable pure useless inflation gentrification- and
            monopsony-enzyme self harm excess antibody mRNA sporing grafts.
          </h2>
          "10k people no time, have to do it. How did they allow private
          industry to do their own thing and take their chances?"
          <br />
          "...plain old cash to pay for the government testing. We as a
          government paid big checks to these companies, some of these companies
          were desperate for financing their lenders, landlords and insurers,"
          at $12k/year/p debt, $3k/year/p bonds, $64/year/p new
          CurrencyComponentOfM1&nbsp;<a href="https://qr.ae/pGzg0M">checking</a>
          ???? If there was a side effect, we would be in a tortious claim for
          expiring claims allows for net loss competing with consumer and
          insurer work loss payouts, so we are really&nbsp;
          <a href="https://qr.ae/pGzgLF">starting from behind</a>. Not for
          safety, but speed. Testing monkeys and mammals. Weren’t sure, not many
          mammals. Locking down in my basement, in NJ. Wall st stepped up, for
          moderna. No one else trusted. And Moderna said go go go, go build that
          vaccine.
          <br />
          Killed watered down attenuated.
          <br />
          Unfortunately people got the disease warning mechanism they were
          trying to prevent, vaccines have an education and know how to fight
          off. We have mRNA, creates protein. Basics of biology. What if we
          could create these molecules in the lab! We can create our own
          manufacturing of proteins in our own body, without fetal cell lines!
          Hundred years of innovation hard work stubbornness for recombinant RNA
          that enzyme fights the spike protein when they see it naturally, they
          fight that off too.
          <h2>
            Trump: "It was the genius of American scientists, and might of
            American worker, pushing FDA approval from infinity."
          </h2>
          C. Zucker: "My uncle passed from covid, I know people are long covid,
          invention exceptionalism and genius, no&nbsp;
          <a href="https://qr.ae/pGzgdC">credit to financiers</a>, a real
          American success story. That is pure, useless inflation, couldn’t have
          been produced without investors, that is only because our costs are
          mostly debt “investors” we couldn’t have doesn’t this without
          investors nor scientists of america. What would you say to skeptics?
          We aren’t doctors, but I talk to non-political (you mean lie, or are
          you making assumptions of people with stated goals?) scientist, but
          the people who put time into it."
          <br />
          <br />
          <hr />
          "...incentives, of saver's money beyond article 4, virus knows no
          boundaries, chasing our tails!" Smerconish. 200k delta wave, 500k is
          D614G, would stop warning mechanism. Dr. Hashish Jah.
          <br />
          <br />
          "bail 100k no more crimes, accident being reckless," evidence
          incarcerate in my book until trial is reviewed, for everyone criminal.
          <br />
          <br />
          Get married for alimony? fuck off. I'll pay up front. Alimony brought
          forward will because breadwinner can divorce, unilaterally? No… Once
          family, always family. Unless there is unilateral decision, just
          because money is involved doesn't mean it cannot start, but once
          beyond it factors into intent of a late departure from the will...
          <br />
          <br />
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1ughBXkwDj9mnMVsQRdOZ36DGUHxLexb5/preview"
            }
            float="left"
            title="https://covid19.quora.com/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Almost all fentanyl deaths match Vietnam war loss (120k)?" Same with
          missing children from repeat citizen offenders. We can have login.gov
          convict intranet. Cheldam races virus raging thru care homes, members
          of minority communities, and until medical experts got vaccines thst
          worked, we were working towards the worst death rate in Europe." Dame
          Esther Rantzen,&nbsp;
          <a href="https://humanharvest.info/polio">
            50m/yr+ worldwide short still
          </a>
          .
          <br />
          <br />
          <Cable
            style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1wh_0SAtcVIbM7w3Zo-6XH6DgJ6QIXcxY/preview"
            }
            float="left"
            title="Dan Whooton (GBNews) - Darren Grimes on getting rid of 'non-crime, hate incidental victimizations for feelings'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Police shouldn’t police tweets, but police the streets,”
          <br />
          <br />
          Fines beyond article 4 no jury truth desistation, arresting officer
          evidence or no bail nor jail, state victimization fines beyond outlay
          <br />
          <br />
          you may need experience with accounting to understand, but your post
          is exactly about this…. So…. Estimates aren’t property, but NJ
          Consumer Fraud Act treats them as such in precedence. I am building
          software to make itemized sprints easier, for contractors and clients.
          The precedence is illegal, estimates aren’t property. We should be
          able to take another bid if you don’t want to finish the job, as the
          job goes over budget.
          <br />
          <br />
          James Melville: “Not modeling model science but data science, 5% of
          hospital beds are full of covid patients, save as in august,&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">
            very different than a year ago
          </a>
          .”
          <h2>
            ad council counts prevalence of common smokers of marijuana as cause
            of accidence, with matching its basis.
          </h2>
          half accidents are high because half people smoke.
          <br />
          <br />
          "Breatherlizer, seatbests, sensible safeguards, not safe drivers,
          accident free. ...Every once in awhile get asymptomatic virus, not
          flu, spread thru people with no symptoms at all.” Host stops, "and is
          becoming flu now, right Esther, it's becoming just like a bad cold
          now.”
          <br />
          "Typical symptoms of cold and flu, but you give it a name, omicron,
          and suddenly it becomes, 'really serious and it is bad,’” yes, and it
          is only about ten PCR can test for being 5% of all-prevalence,
          insignificant aggregate deaths and hospitalizations on time and&nbsp;
          <a href="https://data.worldbank.org/indicator/SH.MED.BEDS.ZS?locations=GB">
            packed
          </a>
          &nbsp; because the bacterial-season of all cause and non-exclusive all
          prevalence, numbers jumped because of&nbsp;
          <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
            1940-1949 lull in global population making
          </a>
          .
          <br />
          <br />
          "...more fentanyl at the first of this year that 2020, afros have a
          harder time than euros, do you believe that? What is it about
          criminals that fascinates the american public? 46m overseas here on
          our soil 14% foregin born 2020-2021 more than 2m, usually 1m, 60%
          hispanic 615k(FL) 471k(CA) 473k(WI) 156k(_) 135k(VA). enormous amount
          of money," but there is labor competition... we need to level out the
          lender landlord insurer work deficit 40 million antivaxxers.
          <br />
          "80% were black," WWII immigration births&nbsp;
          <a href="https://humanharvest.info/polio">by race</a>
          <br />“
          <a href="https://www.cdc.gov/nchs/data/statab/t001x01.pdf#page=2">
            It is blacks killing blacks
          </a>
          ,” O'Reilly
          <br />
          “National guard cannot arrest, but can detain, charge with
          racketeering crimes of hometown malfeasance." Never gonna stop until
          scripts aren’t for anyone, accross the board. Straight currency.
          <br />
          <br />
          <Cable
            style={{ height: "420px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1R3VZQUhFZz35_pN77aaX8UlUkFrYDh7d/preview"
            }
            float="left"
            title="Dan Whooton (GBNews) - government science no jury industry variable 11/12 (Calvin Robertson speaking)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Omicron is like a natural&nbsp;
          <a href="https://www.mayoclinic.org/coronavirus-covid-19/vaccine-tracker">
            vaccine
          </a>
          , all&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            vulnerable
          </a>
          &nbsp;people have vaccine in that way, everyone else should be
          welcoming omicron variant as a natural vaccine, certainly stronger
          than any attenuated one in a lab.” We haven’t even seen without.
          bacteria. And if that weren’t the case, just because I am not tested
          doesn’t mean what actually is just garbage collection didn’t already
          occur.
          <br />
          <br />
          "Not looking at evidence, investing their own evidence inventing their
          own evidence Frasier Nelson’s Spectator piece, ‘modelers being asked
          to model for certain situation not looking for the best and worst case
          scenario they are looking for a specific answer to a question posed to
          them by the government to back up their restrictions saveface."
          <br />
          <br />
          "Stop new variants coming forward, origins of the virus, extent to
          when it was discovered, very mild, but responsibility to humanity to
          speak on it. Lives and business at risk for not allowing this
          discussion."
          <br />
          "No border closures, you actually cause human tragedy and economic
          devastation, especially for the third world, not a hermit country.
          ignored but can kill off the hospitality is dying anyway, west end
          pubs are dying, a real trajedy."
          <br />
          <br />
          Vaccines do not prevent death, polio, pneumonia influenza covid,
          smallpox. Vaccines do not save lives, o-zone layer notwithstanding.
          "...medical science says, no dispute about that, the other opinion is
          not invalidated, you can go up against the medical science if you
          want, look - the vaccine we designed in 9 mos saved millions of lives.
          others don't beleive that, but they have that right. ...I want to hear
          what the antivaxxers have to say, but not a coject argument that
          swaded by idea from the vaccine, always goes to the conspiratorial
          area, I am just not a conspiracy guy. 829k dead 52m 37% cases
          omnicron. so those are the latest stats, government cannot stop this,
          we will have to play with our own. Cannot overthrow the&nbsp;
          <a href="https://thumbprint.us/payments">
            government treason charged
          </a>
          , cannot like for nazi or extremist. ...Makes people think big right
          wing&nbsp;
          <a href="https://nationalsecuritycasino.com/gdp">
            nazi sources about to swoop in
          </a>
          . Nah"
          <br />
          <br />
          Less of a response than unvaccinated, statistically, is only because
          you look for 5% of suspected cases being coronavirus.
          <br />
          <br />
          "'The danger the unvaccinated face is urgent and very real.'" Wolf
          Blitzer.
          <br />
          <br />
          "Almost everyone who died in the past many months are unvaccinated,
          the dangerous misinformation on cable and social media has to stop."
          <h2>
            Let the kids earn wealth? homes, bonds, equities intermediate labor
            not useless price inelasticity bid-to-ask bonds forever to be serfs
            with your damned trade secrets and incorrect right answers. for
            instance, GDP or gdp is productive, GDP/p does not isolate the cause
            of inflation seeing oscillation and exponential growth 1800-1913,
            1914-2020
          </h2>
          "Have to keep the schools open, even testing is being hoarded by
          monopolies, and the government is malfeasant over the microeconomic
          supply and demand assumption of self-regulations for price, quality
          and permitted duress by minimal viable product
          <span
            style={{
              color: "grey"
            }}
          >
            , desistation by jury truth, or conviction by arresting officer
            evidence or no jail nor bail
          </span>
          , setting up testing sites around the country doesn’t need to be
          nationalized, it is free rider mutable.
          <br />
          <br />
          "Covid Recovery Bill Saved the economy, Stood up public health
          infrastructure (after a century of expiring claims you want to instead
          of banning invoices and non-rollover insurance, nationalize the
          invoices for bond-index-fund boomer work deficit? They had their whole
          lives to save in checking $64/year/p, not bonds $3k/year/p, nor debt
          $12k/year/p) that will continue during the need of the covid pandemic
          (not a pandemic with insignificant deaths and hospitalizations year to
          year). jobs and transit system $100b for climate, take what you can
          get, it is so important (to decide what the consumer wants? target
          margin consumer surrogate instead of nationalizing everything
          afro-tool! Jiggering profits loose from labor),” free rider mutable
          brought forward demand is always a useless price inelasticity unless
          rolls over. "Ccc so important for low income families their additional
          $1.6t/mo, laundering to bonds, now only possibly getting $2t Executive
          order $1.8t ccc Manchin into law (parental-trust-building, illegal as
          was ppp for existing biz and bbb is for government contractors free
          rider mutable beyond article 4 and debt service 10-40%, 40-50% debt
          spending, useless price inelasticity for the same intermediate labor
          and material resource depositary, non-concurrentable being doctors and
          mechanic hours, scripts being as prohibitive to entry as unions and
          immigration laws, and therefore, comparative advantage tech
          advancement per hour price deflation productivity from hours
          constituting all demand)."
          <h2>
            Need a permit with jury as would for desistation and conviction. If
            evidence were presented in court, it wouldn’t fly.
            <br />
            Duress beyond minimal viable product is not Tranquil society nor
            voluntary trade; population growth alone expected more deaths than
            covid produced, although how can virus be the cause if it requires
            the first cell to start, and has no taxonomy other than cell, while
            cell taxonomy is bacteria. Only amongst bacteria is virus made.
          </h2>
          "Benefits constituents of West Virginia, measured by unamortized
          monthly savings making lender landlord insurer work deficit," actually
          raising housing costs. Hakeem Jefferies, counts hours worked as
          productive. Burn in Hell uncle tom, gentrification with HUD retard
          slave driver fox! We are not serfs! We do not care about unamortized
          poverty, we care about how easy lender landlord and insurers with free
          rider mutable government intervention rent-seeks, but that is only 1/3
          of all debt, public and private, still loitering and laundering third
          party donee beneficiary surrendered force majeure implausiblly
          deniable surrendered by another. We need not laborless-demand!
          <br />
          <br />
          You don’t need to 40% debt spending and 10-40% debt service
          <br />
          "Community centers, the banks, so they can get them tested, 'free.'"
          Well, even corporate-profit/withheld-outlays tax from outside the
          market is pure inflation, only when it is "
          <a href="https://truncatedsalestax.com">free rider immutable</a>," is
          it a bargain. We do not need to test asymptomatically, since it is
          only 5% prevalent coronavirus among symptomatic significance, that
          which is&nbsp;
          <a href="https://humanharvest.info/polio">
            insignificant deaths and hospitalizations year to year
          </a>
          , to boot. Excess deaths age standardized does not account for the
          boomers life expectancy ago being beyond the WWII lull in population
          growth, so 2010-2020 excess deaths and some&nbsp;
          <a href="https://humanharvest.info/polio">sanitary conditions</a>
          &nbsp; raising average lifetime, of record/as recorded by event.
          <br />
          "If you are with non vaccinated you are at higher risk of being
          infected." It was in the room, Vivek Murthy, ass. Virus has never
          been&nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">without bacteria</a>.
          <br />
          <h2>
            I projected this mortality in 2015 from population growth alone. In
            fact, we are still short what we expect from birth-death life
            expectancy ago
            <br />
            <br />
            Do you honestly thiinkk it is an evolutionary trait if it, “requires
            cell to replicate?” I want vivo proof it isn’t non-exclusive
            byproduct-bacterial-infection for that virion as debris does not
            all-inclusive cause, make.
          </h2>
          7k/day cases in nj is not "spread at that rate before," because it is
          5% symptomatic and we have never tested asymptomatic; also, prevalence
          does not cuase make. Evolution goes from bacteria to cell to virion.
          It only comes out, it doesn't, "require cell to&nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">replicate</a>&nbsp;by
          injecting DNA in an instant."
          <br />
          <br />
          discrimination for evidence by the discredited, and masks don't work
          because&nbsp;<a href="https://moldmask.co">heat/density rises</a>, and
          bacteria is in your sneeze which must be released.
          <br />
          <br />
          Is there a mandate that you would shoot him in the face? We could do
          it over tea, you need to have jury permits. Castle benefits from
          doubt, different tort of without expiring claims.
          <br />
          <br />
          <Cable
            style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1aQY2oZQbqEz9lgn7wVr7jleJnVTe3w5T/preview"
            }
            float="left"
            title="Phil Murphy (Facebook) - healthcare banking"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          15% evidence higher in unvaxxed groups, so we do have evidence it
          saves lives,” not if you are counting 5% of cases, it sounds like a
          non-exclusive byproduct warning mechanism, not an all-inclusive
          artifact.
          <br />
          <br />
          “China is going to pay a big price, they brought this virus to the
          world.” “There was no one’s fault that this virus his this country.”
          <br />
          "Make your family feel safer, and be safer.”
          <br />
          "10k vaccination sites, on top of the 80k we already had in place."
          Brought forward demand's always uselsss price inelasticity of
          bid-to-ask.
          <br />
          "I’m setting up places where there is high demand, this will result in
          new booster appointments," government bond index funds doesn’t have to
          rent seek free rider mutable healthcare banking with expiring claims.
          <br />
          “Those who are unvaccinated are causing hospitals to overrun again,”
          the capacity hasn’t increased since 1970, and you only count 5% of all
          pneumonia influenza covid.
          <br />
          <br />
          unamortized savings,&nbsp;
          <a href="https://www.njconsumeraffairs.gov/statutes/consumer-fraud-act.pdf">
            estimates as property
          </a>
          &nbsp;and expiring claims
          <h2>
            healthcare banking&nbsp;&bull;&nbsp;
            <a href="https://truncatedsalestax.com">rollover insurance</a>
          </h2>
          job recruiters have wasted days of my time,&nbsp;
          <a href="https://teapharmacy.party/drugs">I smoke</a>, get over it.
          <br />
          <br />
          Only 5% of suspected cases and less than expected total deaths from
          population growth alone. "
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
            Virion injects DNA into cell
          </a>
          ," is made up.
          <br />
          <br />
          NJ 101.5: “There was no&nbsp;
          <a href="https://humanharvest.info/polio">flu season</a>&nbsp;during
          covid because people were masked up.”
          <Cable
            style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/xk5lfqiw4k936e4/BeFunky-collage.png?dl=0"
            }
            float="left"
            title="Phil Murphy (Facebook) - healthcare banking"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            "Conservatives," front running&nbsp;
            <a href="https://saverparty.xyz">free rider mutable</a>&nbsp;demand
          </h2>
          useless price inelasticity bid-to-ask of&nbsp;
          <a href="https://bankingisnot.biz">third party</a>. Competing with
          consumers
          <Cable
            style={{ height: "260px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1oToEfTSFhtfyhphrnL9e_ndPh-695iNy/preview"
            }
            float="left"
            title="National Report (Newsmax) - Blaise Ingoglia on covid and tt Gotleib monoclonal antibodies"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Just count 5% of&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">
            suspected
          </a>
          &nbsp;cases&nbsp;
          <a href="https://humanharvest.info/polio">hospitalized</a>&nbsp;and
          say, "This president has failed, again and again. Death and
          hospitlization for the unvaccinated."
          <br />
          <br />
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">bacterial-illness</a>
          &nbsp;warning mechanism antiviral pipeline water monoclonal antibodies
          - omicron.
          <br />
          <br />
          Placebo strong, killed my grandparents' friends. They went out holding
          hands with morbidities. They were like, "I guess now."
          <br />
          <br />
          Bo Snerdley: " ...How about the people that you lost, for how long
          they were in your life." Only 5% of suspected cases and less than
          expected total deaths from population growth alone.
          <br />
          <br />
          “China is going to pay a big price, they brought this virus to the
          world.” Kamala responds to Trump, “There was no one’s fault that this
          virus his this country.”
          <br />
          <br />
          Far right after military quitting after forced vaxx beyond
          industry-variable multiple of 11/12 jury for permit as would be
          required for desistation of jury truth and conviction with arresting
          officer evidence or no bail nor jail
          <br />
          “Testing everyone for covid, it is like a checkerboard, everyone is
          getting it. I would even finance the test I couldn’t care less,” Tom
          (nj 101.5), military drill sergeant in San Diego, “ I don’t want
          people to get sick, just stay home.” The equal prevalence of
          all-“cause” does not cause, make. Is in the room. “All high end
          people, let them test and knock this thing out, no problem. Take it at
          home, I don’t take a dime, I don’t want to take anything from these
          people.”
          <br />
          <br />
          “I am not vaxxed, with antibodies though, and I didn’t get sick!” That
          is called a null hypothesis, grant. It is a byproduct of
          bacterial-infection. It isn’t an evolutionary trait nor does it have
          taxonomy beyond the cell. It is dead cellular debris, of non-exclusive
          warning mechanism artifact. Symptomatic testing would be an all
          inclusive testing regime for the TRUE cause and the TRUE pigeonhole to
          prevent
          <br />
          <br />
          Learn how to count, retard. to quell over stagnation of hours worked
          is retarded, you have productivity upside down. Why do you abject to
          unions but not "America first," nationalism? The labor shortage is
          from lender, landlord, insurer work deficit, boomers booming 56m/40m
          10-year cohort 2020-2030 1.2m/yr+, or 75+ 2015-, then 40m legal 6m
          illegal 3m/yr+ prohibited from trade.
          <br />
          <Cable
            style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1znQsvQFvmdIpIkkNfjw2vVAxKng9Mr8N/preview"
            }
            float="left"
            title="Eric Bolling (Newsmax) - Doesn't know how to count mortality of significance"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Helps big companies when government spends on free rider mutable
          things, for free, that costs the government a lot of money like a
          business loop," Eric Bolling to Jason Miller. "Lockdowns, shutdowns,
          things that stagnate the company."
          <br />
          "They think you have to take the vaccines, because it will help you,
          but don't want to give credit for Trump."
          <br />
          <br />
          I'm an expert in statistics, market history and propoganda. The
          disparity between "non-political" testing in Israel because they have
          an all-inclusive regime for the non-exclusive byproduct debris of
          bacterial-infection that is virions. Do you honestly believe it is an
          evolutionary trait or do you think the first taxonomy wise, just
          works. Try it in front of a duress minimal viable product
          discriminatory multiple of&nbsp;
          <a href="https://qr.ae/pGqBA8">
            11/12 industry variable jury-science
          </a>
          .
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1YUWeaZraN8amYiHDTx53X6qhyX_m1fwq/preview"
            }
            float="left"
            title="Stinchfield (Newsmax) - Bruce Blakeman Nassau County Executive Elect"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Allow schools to make the medical determination, and allow students
          to choose which school they want to go to.”
          <br />
          <br />
          Alex Berensen: "It reduces transmission hospitalization and death, but
          once it runs off 6mo, and it isn't really clear what the affect on
          hospitalization and deaths is. The data that isn't politicized shows
          less confluence of PII vaccinations and hopsitalizations, with cases
          based on symptom and all-inclusive symptomatic-cases. Why would you
          charge unvaccinated the same as vaccinated? I dont know what the
          answer is, and I don't know why we cannot talk about it."
          <br />
          <br />
          Brian Kilmeade: "there is no indication of vitro retrospective is low
          grade fever and a runny nose, of a non-exclusive&nbsp;
          <a href="https://humanharvest.info/testing">artifact</a>."
          <h2>
            "If I don't wear a mask, I have to resign."
            <span
              style={{
                fontSize: "9px"
              }}
            >
              writing down $12k/year/p $3k/year/p $64/year/p new,&nbsp;
              <a href="https://truncatedsalestax.com">
                with Nick Carducci policies
              </a>
            </span>
          </h2>
          How can you say someone passes covid if you cannot prove taxonomy nor
          vivo without retroactive vitro or mitosis. “I’m a retired nurse, I
          think it is the flu, that is my opinion.”
          <br />
          <br />
          Mary Walter: "Is it HIPAA violation? I don’t know. The government has
          a right to your medical records.” Not even data sets allow cross
          compilation based on PII.
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1ZCvZFgVbZnLiyxijnP3PEKgSzhqyJTXR/preview"
            }
            float="left"
            title="National Report (Newsmax) - PA State senator Douglas Mastriano on"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "<a href="https://humanharvest.info/polio">Every Death is Tragic</a>."
          If your guy wants to&nbsp;
          <a href="https://humanharvest.info/walter">deny the election</a>
          &nbsp;on my&nbsp;
          <a href="https://thumbprint.us/voting">mortality projections</a>
          &nbsp;he will have to for ppp trust building existing business.
          <br />
          <br />
          <Cable
            style={{ height: "420px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1NBMLsVabNUpr_BQX8fzgIJFvOB16euUS/preview"
            }
            float="right"
            title="Senate Dems (Facebook Live"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Many of you have suffered in the panemic when nursing homes admitted
          patients into their facilities, 15k ny state cretsel gubmit and herbit
          working hard to compensate you for your rights. kglawteam.com"
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1QA5fmAq9ppgAEzHf2aeNeo9OdRHA-QR4/preview"
            }
            float="left"
            title="Liberty Mutual says you can save on insurance by using insurance. insane. it is expiring collective loss, public or private!"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Spike in new cases because of spread of omicron. Failed who chose not
          to be vaccinated now having another covid spike now planning a media
          blitz, instead of blaming the unvaccinated. It looks like we were
          right all along, folks.”
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1u1LSv7Z6mpxhuDTTKliQ6Rk2IdO_nfMr/preview"
            }
            float="left"
            title="Eric Bolling (The Balance,Newsmax) - 'antivaxxers are spreading variants' with Ron Johnson"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          “This inflation is out of control spending, debt inflation, crime,” it
          is only 1/3 of total debt and this administration is the same as Trump
          over covid. If he uses census and my mortality projections to claim
          honor system signatures election fraud, he will have to for ppp trust
          building existing business.
          <br />
          <br />
          “And now they are saying it is the unvaccinated fault, what is going
          on here?” Eric Bolling literally counterfactualing himself in the same
          segment Policies under Trump was working. I'm more concerned if we
          don't win in 2024. More government going into debt.'
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1HVOCHHEcouFRjhxhQljWy6I3nPXBNsIU/preview"
            }
            float="right"
            title="Eric Bolling (The Balance,Newsmax) - 'antivaxxers are spreading variants' with Mike Braun"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          lender work deficit, get rid of them 1/3 of debt. You dumb, old
          hypocrites&nbsp;<a href="https://qr.ae/pGqeJd">own bonds</a>, that is
          why you are for self-harm you fucking retard Braun. “We have been
          complacent on raising the debt,” I can forbid non-voter as "no," and
          private. We are supposed to be defenders of liberty, and we don't
          always do that unless we profit with work deficit. You bet third party
          beneficiciary donee claimable in fractional reserve in contract vs
          public. Just because it is laundered through transitory-property you
          don't care? Better to put others in force majeure implausible
          deniability repo cycle kept down payments than yourself. fucking die
          you glazed donut.
          <h2>
            this is what I have been training my whole life for, ever since 2008
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1r5dmB1I90HwLFaqSuva5ixUFgd0-6HCP/preview"
            }
            float="right"
            title="Eric Bolling (The Balance,Newsmax) -  Amanda Berhante on California"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Losing voting rights in New York, that is socialism, embodied.”
          <br />
          <br />
          "There isn't a huge corporate interest to get in the way of
          suppressing covid-as-byproduct-not-cause denial, denialism, and
          dismissal. The social media companies are being complicit, we should
          take them to task."
          <h2>
            Chris Salcedo's Flaccid Corporate Loss, a saveface strawman: read
            the book
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/19NiLQTFf7l_7sBn9PXR5PVVH_qE9aF9i/preview"
            }
            float="left"
            title="Chris Salcedo (Newsmax) - badmouthing socialism as trust building free rider mutables? We want to outlay corporate profits."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          do you have a dent in your head?
          <br />“<a href="https://truncatedsalestax.com">Socialists</a>
          &nbsp;seek government office by insulting because they cannot use
          proof data and facts on their side. They are dangerous.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/10KDHfLnJ0pAYLBCRsMVyCJ7OF9NFJ-iW/preview"
            }
            float="right"
            title="Greg Kelly (Newsmax) - Facebook with Zuckerberg and Fauci"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Fauci: “The first virus where the health is worse, need to make the
          infection worse to get rid of it.”
          <br />
          <br />
          “Mass psychosis no limit to the absurdity of the solution.” Dr. Peter
          A. McCullough.
          <br />
          “‘You need to take it, or else you will get everyone else sick,’ but
          that doesn’t really make sense,” Joe Rogan.
          <br />
          "There goes our case."
          <br />
          <br />
          Greg Kelly, market-communist, GOP libertarian: “When did government do
          big things, I remember when gov did things we really cared about.
          Remember JFK: None would be so difficult for space exploration, nor
          expensive, to accomplish.'”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1GOPZS5lyi0An2jyiKz2vlPfT0lipJFVV/preview"
            }
            float="right"
            title="Chris Salcedo (Newsmax) - badmouthing socialism as trust building free rider mutables? We want to outlay corporate profits."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Mental health disorder anxiety and depression in young people has
          doubled per person over this pandemic.”
          <br />
          <br />
          We don’t need you. Frank contacessa, "the unvaccinated are raising
          intelligent questions, and DiBlasio doesn't recognize that. They are
          becoming more defiant. We need to come together to tackle this." I
          expected more deaths from population growth alone.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1OVrs0v8sSyPwE21kR21KadOdNh9iLc3H/preview"
            }
            float="left"
            title="Dan Wootton Tonight - What the Farage on political compass 2021"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “There is a lot who would like a radical change in how the government
          run, in my party,” Nigel
          <br />“<a href="https://truncatedsalestax.com">Realignment</a>&nbsp;is
          possible.”
          <br />
          <br />
          “They aren’t going to be Cheyney but populist nationalist debt
          spending and finance work deficit/
          <a href="https://nationalsecuritycasino.com/trump">labor shortage</a>
          .” Amanda Devine.
          <br />
          <br />
          “Every single working and non-working American is losing money because
          of inflation,” Kevin McCarthy. End one party rule, fire Pelosi
          <br />
          <br />
          "Metro-London greenie elite"
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1gPjyQOHKDt7n5S9XKikj4s8y7T7RVUFN/preview"
            }
            float="left"
            title="Spicer & co (Newsmax) - Gordon G Chang and Spicer and Keith shooting the shit on drone striking islamic bankers, 'UAE treatens to pull out of deal with US'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “There is a lot of jobs in those drone gov jobs monopsony free rider
          mutable contractors.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1R2DuxU2hODR9n7byAz241TciXciVz6IC/preview"
            }
            float="right"
            title="Eric Bolling (The Balance,Newsmax) - Dr. Peter McCullough, americaoutloud.com"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Relieved of any development costs because it was purchased from the
          federal government,”
          <br />
          <br />
          “29% nones spiritual but not religious, unaffiliated to a religious
          organization,” Why kind of Christian thinks He had to die for sins
          rather than because of them?
          <br />
          <br />
          <hr ref={this.pcr} />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/10xMyuH9o4CCiu6E9-ceAyPoD7BZAW6Zd/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - 'Markowics joins mass exodus from NYC'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ height: "300px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/m-CwPBcrMYQ"
            }
            float="right"
            title="Rudy Giuliani (77WABC) - "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “High case rates, being labeled as high transmission without vivo
          insemination of cell without bacteria nor mitosis,”
          <br />
          <br />
          most asymptomatic cases of covid are not sick and most&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">
            similarly-sick
          </a>
          &nbsp;<a href="https://humanharvest.info/polio">aren't covid</a>.
          "Omicron may be the dominant strain, right now Delta is," because you
          set PCR to whatever strain you guess or look for, or is set as a&nbsp;
          <a href="https://www.labcorp.com/coronavirus-disease-covid-19/covid-news-education/guide-covid-19-variants-what-you-need-know-about#:~:text=Because%20our%20tests%20target%20the%20SARS-CoV-2%20nucleocapsid">
            non-original artifact being the SARS-COV-2 nucleocapsid
          </a>
          . there are hundred of thousands of possible virus to set for, and
          thousands more to miss each time. Yet you are just testing for
          non-exclusive artifact, retroactive-vitro byproduct, not vivo cause.
          <br />
          <br />
          "The federal government is also taking steps to accelerate this
          important work; specifically, the recent stimulus bill directs $1.75
          billion to the CDC to support genomic sequencing and surveillance
          initiatives." Is not accelerated, it is just mislabeling important,
          monopsony r&d and useless price-inelasticity of bid-to-ask.
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1INY7dX6f-DjCC2Mu4Hch_P0yKkV-JlFY/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Dr. Rich McCormmick "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            Work deficit means of labor from labor, not social Comparative
            advantage tech advancement to perpetual utility maintainless.
            1-level-board Max-royalty-contracts (Cash/debt)*income every year
          </h2>
          <h3>
            lmao. how else to emulate Pareto in a finite producer network fee
            world?
          </h3>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1PxDxQR7FRijO_1Z-3CRJiiVCPVvkZ6Go/preview"
            }
            float="left"
            title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "No known benefits to the measures we are trying to informate, err,
          implement, today. Working from home 11x more abuse, as is gdp to
          velocity of m2 minus gdp divided by m2 minus currency component of m1
          times currency component of m1. Masks, as innoculous as they may seem,
          the bacteria and signal has sent thru all societies and schools is to
          panic and fear, without regard for the 50m/yr+ excess deaths still
          expected given current mortality lifetimes and population growth that
          long ago as a cadence sum. 100k ghost children from lockdown,
          discriminatory and segregates people. Proud tradition in this country,
          we stand up for minority views, even if we don’t believe them
          ourselves nor do we have to unless, like now, non-voter + ideological
          duress voters are shunned from government-making. In rush to get jabs
          in arms, we shouldn’t throw that disrespect and intolerance - to the
          wind.
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1w89L4XTg5yHEMspCWOb_DA2VJ-NFJe4N/preview"
            }
            float="right"
            title="Spicer & co (Newsmax) - 'Air force Discharges 27 for Refulsal to Get Covid Vaccine.' Come in new Saver Party.xyz recruits! We are making OUR OWN government! 'Each service rolled out a deadline,' like the statute of limited right"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          To ween off NHS: on the mandatory vaccination of NHS staff beyond
          &nbsp;
          <a href="https://humanharvest.info/jury">
            jury-science 11/12 multiple industry various
          </a>
          , I completely agree with my honorable friend from east worthing, ‘I
          don’t believe this is about ideology of whether people should or
          should not be vaccinated, it is about the pragmatic way to ween off of
          NHS free rider mutable expiring claims. That it is a pragmatic
          reality, that we will lose 10's of thousands of staff, at a time when
          we can least afford it. But I don't think this is no longer, really, a
          debate about whether masks work, who should have a vaccine, and not -
          it is really about who are we, what kind of society are we creating
          for OUR children [ew], do we really care about the freedoms that we
          had before 2020.
          <br />
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px" }}
            key="1428050191094095878"
            tweetId="1428050191094095878"
          />
          Now, I know old fucks about to die roll-their-eyes when libertarians
          and savers promote 'civil liberties' with full-hypocrisy of the
          Non-aggression-principal in contract law and national security,
          {/**conservative and libertarians start talking about liberties and freedoms */}
          ,”
          <br />
          To which an MP responds, "Ogh, yas!"
          <br />
          The blonde continues, "'Freedom,' is not an abstract ideology.
          'Freedom,' is what enables my constituents to see their family,
          comfort the dying, to go to schools of 40% debt spending, to which
          laundering, as it is for bonds, is not a matter what money is spent on
          for lender work deficit, but better when you can waste childrens' time
          from earning wealth outright, without trade secrets. To go to work.
          That is what freedom looks like. After 20 months, we have to
          understand that there has been a change to the understanding of what
          liberty is in this country, that is why I cannot support these
          measures, and I urge the government to return to a society of freedom
          and responsibility: Nick Carducci deserves it, and he will RISE to the
          challenge."
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1k9u0OfTSrFZFkoB06pxYNwhbcYcWthU3/preview"
            }
            float="right"
            title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “People who are not vaccinated are not only causing themselves risks,
          they are blocking others in pathways of receiving care. 2/3 of
          patients with covid are unvaccinated because prevalence does not cause
          make. It would be silly to think virus is an evolutionary trait or is
          alive when it requires cell to reproduce. It is merely a
          warning-mechanism of bacterial-cause, exclusively. Just wash your
          hands with warm water, fix age standardized excess deaths for
          population growth, and you will be of sound mind in the Book of Nick
          Carducci.
          <br />
          <Cable
            style={{ width: "400px", maxWidth: "100%", height: "150px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/-spTY4y8euI"
            }
            float="left"
            title="Ford Brewer MD bacteria notions, reasonable doubt"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          It is not fair for the person who has been waiting for that hip
          operation for 18 months, or any other elective procedure due to their
          adherence to science and facts. We would also spend a lot less as we
          ween ourselves off of&nbsp;
          <a href="https://humanharvest.info/claims">non-rollover insurance</a>
          &nbsp;and&nbsp;<a href="https://micro-theory.com">invoices</a>&nbsp;
          estimated to buy and loiter, if we heal the what ails you, but not the
          infection, and they die without proper care. I have to wait for
          surgery because of another bed that is unvaccinated and is emitting
          the non-exclusive byproduct of bacterial-infection, antibodies to
          prevent blood clotting be damned. Surely frustrating, I will be voting
          for the government today. But I ask they do no take my vote for
          granted, that [mumbles] we see no increase nor hospitalization, this
          legislation does expire on the 6th of January, and they do not seek to
          extend it, as if this is required to be said, but I like to bring in
          precedence for slip & fall attorneys to chomp at. Working from home,
          although it is only guidance today, will cause destruction to small
          retail, and even the&nbsp;
          <a href="https://qr.ae/pGqeJd">ability for new entrants</a>, because
          of the implausible landlord use&nbsp;
          <a href="https://30under5.us">above 5 units or 30 days</a>, not
          price,&nbsp;
          <a href="https://humanharvest.info/claims">
            expiring claim false bid pools
          </a>
          &nbsp;net loss,&nbsp;
          <a href="https://carducci.us">
            force majeure implausible deniability of repo-cycle kept down
            payments laundered and loitered third party beneficiary donee
            claimable collateral
          </a>
          . I hope they keep a close eye on that. I am voting on this today NOT
          because I am whipped to do so, but after careful consideration and
          speaking to many local professionals that we believe this is the right
          thing to do.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1CcDlcNwfVqyPLrpMrxxArair45JEvibt/preview"
            }
            float="right"
            title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “I fully support the government front-running the booster for the free
          rider mutable racket that it is, and nothing I am about to say makes
          light of covid, in any way, at all. My issue is with language, and how
          we get the most compliance. In my constituency, there is a great
          number of people who have grave concerns about civil liberties, about
          data harvesting, and about science monopoly. That is why I am
          supporting the jury-bound-science of presented with vivo and vitro
          evidence of Cause of Death. A large multiple of twelve voluntary
          survey will do, to capture various industry jury. While I think their
          fears are unfounded, I have to listen to them. I am a cunt-waddler,
          and gave them no choice but to vote for me or my opponents, most
          didn’t even vote, by plurality.&nbsp;
          <a href="https://www.politics.co.uk/reference/election-turnout/">
            It’s a default vote, “no”
          </a>
          . “We have to take them seriously. Like Martin Pavilion said, 'We
          don’t allay those fears of overregulation with overregulation, we need
          those people to come on board in a national effort to keep people
          safe.' …<a href="https://teapharmacy.party">Ask them to comply</a>, we
          trust them to take the test and scan the code already.
          <br />
          {/*<TwitterTweetEmbed
            style={{ float: "right", width: "300px" }}
            key="1428312309685002241"
            tweetId="1428312309685002241"
          />*/}
          I think compliance could be increased if they can trust they are not
          facing these restrictions for no reason, they are not having their
          data harvested. It is a great concern in our constituency and I do
          respect it. The vast majority of my constituents, and the vast
          majority of the British people, will do everything asked of them by
          government without it needing to be mandates. They have been
          incredible in this pandemic. They have acted in the interest of
          themselves, their families, their communities, their cities, and their
          towns. And I would humbly ask the government to come back to our
          ‘conservative’ principles of trusting the British people. They are the
          people who sent us to this place. They have common sense. They know
          their risk. They can act with supreme intelligence. We must never
          underestimate their ‘community mindedness,’ new discoveries be damned
          to the pits of Hell. So, a last plea to government, that, I only
          comment on this evenings' votes. I won’t be supporting all of them,
          but I will be supporting some of them. The only way to go forward
          together as a nation is we have to stop passing never-ending
          regulations, and move forward in a&nbsp;
          <a href="https://carducci.us/videos">
            non-sober, but sane, non-financed way
          </a>
          .”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1kDs49pyRVUFyBWibJb_KArWbPkA3iO5L/preview"
            }
            float="left"
            title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "A protected NHS is not MP’s going off and abandoning about
          vaccinations, a protected NHS is the best way to get thru this wave is
          where you can rent a blood pressure screening, estimated and
          expiring.” What? "Where you can have that conversation about your
          inability to concentrate and they give you wall st pharma cop
          amphetamines instead of open source licensure and review boards, EVEN
          for craft beers." Stop, "health visitors see young families, and can
          have those important conversations if women feel safe of her husband,
          at home. My next question is what happens when the next vaccine escape
          variant inevitably comes, because I think we all feel that is
          inevitable coming after this wave, we've got another one coming thru,
          because we merely set the test for it? You miss the shots you don't
          look for. So what is the plan to stop us, from having to repivot like
          this, again. What is the the long-term 'living-with-covid strategy.'
          My last plea is the pandemic has fallen on the shoulders of our
          children. Please, please, please, confirm, that there are, 'no plans,'
          for mandatory-restrictions on schools, and that we will never close
          our free rider mutable 40% debt spending useless price
          inelasticity-of-government-gentrification and
          trade-secret-educator-monopsony kid-enslavement-camps again."
          <h2>
            the role of teachers should be to discover, not follow eachother
            like the worst doctor-politicians
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1S6-uSoE6DHSZ4-Uajixwi_wlWcPs0MiI/preview"
            }
            float="right"
            title="GBNews - 'Let's talk vaccine passports' with Stephen Dorrell, former Health Secretary for John Major."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Not an MP nor no longer a conservative. If mp or part of party, I
          would be part of the gov this evening, not in the way the PM has,
          behaved, but in order to protect NHS and protect public health, with
          the likely peak of this omicron variant issue in January.”
          <br />
          ”The numbers look alright. Maybe now is the time not for vaccine
          passports, it may be seen as sort of an overreaction.”
          <br />
          ”I don’t agree with your extrapolation that it is a short term
          response and to a likely peak of omicron in January and that it will
          be permanent forever. I share the view that it shouldn’t be announced
          on Sunday night as an apparent reaction to his political difficulties,
          He could have done this in a more measured way. There is nothing we
          know this week that we didn’t last week.”
          <br />
          “If we always have covid, we will always have passports. One vote for
          the rest of out lives.”
          <br />
          “As I understand it, the powers that are being saught by the
          government by tonight’s vote are temporary and therefore would have to
          be renewed. It is one thing to seek those powers against the
          background of a likely peak in January, and the government seeking to
          prolong them after the peak has passed and the pressure on the NHS is
          easing. So, I think it is a proper response to a short term peak in
          demand of the National Health Service.”
          <h2>
            In the U.S., due to the missapropriation of funds by expiring
            claims, closed source licensure and non-rollover&nbsp;
            <a href="https://humanharvest.info/claims">insurance</a>, hospital
            beds haven't increased since half a population (and life, for that
            matter) ago.
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1YwtzXpg8HXTfmZGd8uKOnFaIWn_xnJS6/preview"
            }
            float="left"
            title="GBNews - 'Let's talk vaccine passports' with Shiobhain McDonagh MP Labor Mitcham and Moren."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “A lateral flow test, that which we already do, I do not believe that
          is too much to ask,” it is not an exclusive byproduct-artifact, it is
          not, “the permanence of the whole thing.” Let alone the cost for such
          a free rider mutable endeavor, especially when understanding the
          evolutionary-science, based on, “the parts,” logic deduction of
          bacterial cause of infection/root-of-illness, and viral
          warning-mechanism.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1U7GCj0bV4Q3U3QRXi1APOlhZPv_xp3hM/preview"
            }
            float="right"
            title="GBNews - 'Let's talk vaccine passports' with Ann Widdlecombe former shadow health, on third parties and non-voters (eyeroll)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Michael Animote is one of those cases where he is toeing the line,
          he, ‘nearly died from it,’ (implies is is alive or evolutionary trait
          as cause). There is a flip side to it and I know some MP’s are of this
          view Maybe he has gone nuclear on this to maybe get other stories off
          the front pages be it dodgy parties, or maybe it is wallpaper, or
          maybe it is just sleaze in general. ...The idea that boris is doing
          this rather than put other stuff on the agenda is putting off some
          MP’s from voting for it.” NON-VOTERS HAVE A DEFAULT VOTE, “NO”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1mbbMoxrrXL1LY_AQuwr-U-agXB8lhEfk/preview"
            }
            float="left"
            title="GBNews - Ann Widdlecombe - Virus is dead"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Every time a virus mutates, because it will - it is in the virus’
          nature to mutate.”
          <h2>
            the virus is debris/byproduct and is as&nbsp;
            <a href="https://humanharvest.info/polio">dead</a>&nbsp;as you
            <br />
            <span style={{ fontSize: "9px" }}>
              Productivity is upside down, as relevant as ever if it's good for
              Andrew Smith to say on this topic. You all target the retardation
              of hours like you're about to watch eachothers' kids to boost the
              numbers. It is more accurately per hour price deflation, and
              homes, bonds intermediate-labor in inflation, gini and poverty as
              well if you want to treat people humanely.
              <br />
              <br />
              On vaccines, you cannot tell me what taxonomy comes before Virus,
              the only one as such, and we know it, "requires cell to
              reproduce," to boot. What, have you not calculated prevalence of
              MS for paralytic polio? Age standardized excess deaths for cohort
              size? Symptomatic-method of case-assessment? Prevalence does not
              necessarily cause make, you know - it can be byproduct and/or
              warning-mechanism as well. Here virus is a non-exclusive artifact.
              <br />
              <br />
              Consider other fallacies like this in science: Redi Experiment &
              chicken or egg, does it matter?
            </span>
          </h2>
          "t-cells prvent you from going to the hospital. antibodies help you if
          you get it. antibodies do not stop bacteria & severe disease..."
          <br />
          "I am seeing lowered immunity from vaccines[, get boosters?],
          sunshine, fresh air, healthy diets, things of THAT nature." 4 shots
          fully-vaccinated, 7k cases worldwide.
          <br />
          <br />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/ZmUozfOPquk"
            }
            float="left"
            title="Left vs Right (77WABC) - sundays 3-5pm Sliwa vs Hahn"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1i7uH2miJQQqYL5lSCyhJBW9ec05swvDo/preview"
            }
            float="right"
            title="GBNews - Andrew Smith, 'conservative' MP"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “If we don’t have a&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=JPH7">
            thriving economy
          </a>
          , we won’t be able to pay for public services like the&nbsp;
          <a href="https://humanharvest.info/claims">NHS</a>."
          <br />
          "Isn’t the point that the vaccine passports isn’t actually a big
          restriction on our lives: you just need together double vaccinated or
          get tested to 'prove' you’re negative. That seems to be sensible to a
          lot of people."
          <br />
          "You can be doubly-jabbed and, 'still infect others with covid 19.' …I
          think this is deeply damaging to the economy, this is not a&nbsp;
          <a href="https://micro-theory.com">
            philosophical, civil-libertarian argument
          </a>
          , it is whether the individual has the&nbsp;
          <a href="https://humanharvest.info/jury">same weight</a>&nbsp;than the
          state does. If covid passes today, it will further state control over
          tomorrow. But g-d forbid under a future government who believes in
          much greater state control, we are setting a very dangerous precedent.
          I don’t accept this government is stopping people’s right to protest.
          I don’t think they have a right to disrupt other peoples’ livelihoods
          going about that. I do support what this government is doing. Despite
          the pandemic, record number of jobs, we’ve seen Brexit delivered. The
          World is at net zero carbon by 2050 because of the UK leadership of
          COP26 conference in Glasslo. On this, I think the government has this
          wrong and the idea of mandatory vaccination. …We have had an
          unprecedented challenge in the global pandemic that we are tackling.
          We also had the challenge of delivering Brexit, as well. The
          fundamentals of this government are essentially right. There is no
          opposition.&nbsp;
          <a href="https://www.google.com/search?q=65+percent+of+americans">
            What opposition
          </a>
          ?” Maybe you&nbsp;
          <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
            took all their money, boy
          </a>
          .
          <br />
          <br />
          “So the message is, Jordan Klepper, do yoga and not care about the
          700k people who died from this?” CNN Sunday at 5pm est
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1xzYNqDL3avTWZIgXbYZqWwm5wUaQ3MsY/preview"
            }
            float="right"
            title="GBNews - Paul on the right"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "1/33 covid 1/200 omicron asymptomatic cases, 'top doctor whom
          identified, the disease, is mild,' says of Boris 'hysteria,' all
          indications are that it is milder than the symptoms that it causes. We
          know that it is more transmissible, than delta. Average age is 27 in
          Africa, lower than the U.K., so we are accounting for age AND cohort
          this time, but still not symptomatic-trigger-method, and PCR test
          literally made for asymptomatic prevalence of a non-exclusive
          artifact, that which may be among thousands of others prevalent at the
          time of testing."
          <h2>
            "Omicron: Over a hundred infection, not a single death." Did you
            <br />
            <span style={{ fontSize: "9px" }}>
              try plugging it in? "1/2 Pfizer revenue in the last quarter"
            </span>
          </h2>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1cmeyK40mOHEYQSturvs4zg1sTo5Bqlka/preview"
            }
            float="left"
            title="Gorka Reality Check (Newsmax) - Ben Carson on goal post science."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “You notice how marxists come in target a group, restrict, prosecute,
          and sometimes it gets worse than that. If vaccines are effective and
          you are fully vaccinated, you shouldn’t be worried. That was the goal,
          but now the posts keep seeming to move. Natural immunity has been
          known since the 60’s, and if we accounted for them, their argument
          would go out the window.
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1ZsJLlhFCTme0QbFq5HpevbptQn53OwWR/preview"
            }
            float="right"
            title="GBNews - 'Vaccine pass' vote spoken by Wes Streeting, Shadow Health Secretary"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          I have not seen medicine so politicized. Medical people follow each
          other, so we are the most susceptible to false information. People get
          unnecessarily frightened.”
          <br />
          <br />
          “We know the virus is spreading, we know that it’s spreading rapidly,
          and we know that if it rips through the social healthcare workforce,
          that is the biggest risk to the&nbsp;
          <a href="https://humanharvest.info/claims">NHS</a>.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1yDUsCsSlr1XqchdYbAz7hFkW9E2Ln_yb/preview"
            }
            float="left"
            title="National Report (Newsmax) - Robert F. Kennedy, jr. on mortality and Fauci"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Every single one of them had mild symptoms,” because you are going
          back to the symptomatic method!
          <br />
          <br />
          "We had 20% of worldwide&nbsp;
          <a href="https://humanharvest.info/polio">covid deaths</a>."
          <br />
          <br />
          Maybe the testing is set to "omicron," you need to target polymerse
          chain reaction
          <br />
          <br />
          Non-voters is a voter, "no," to boot, ideological duress of two
          debt-spending wall st pharma cop spending.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1nBpx82QjQ_pxdviqjpTeUJqP--sdWmvk/preview"
            }
            float="left"
            title="National Report (Newsmax) - Dr. Evan 'SaveFace' Levine"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The vaccinated don’t even get a cold-like illness,” you are testing
          asymptomatically, I’m not surprised the uncleared virus is there. Test
          with symptomatic method like we usually do, and you’ll find covid
          isn’t significant among the illness cases to begin with.
          <br />
          Polio never went away, just the testing and non-exclusive byproduct of
          the acute flaccid paralysis class did, and paralytic matches ms
          today,&nbsp;<a href="https://humanharvest.info">by numbers</a>.
          <br />
          <br />
          <hr ref={this.walter} />
          The vaccinated shed the dead virus debris before the antibodies clean
          it from blood clotting-prone.
          <br />
          "Vaccinated can spread covid, we know that is a fact. I have a family
          member who is fully vaccinated and got covid, couldn't smell or taste
          until two weeks later."
          <br />
          "Vaccinations make you sick, are you going to charge them?" Need
          jury-science of various industry for rules that aren't made up nor
          have reasonable doubt for voluntary trade without duress beyond
          minimal viable product, desistation and conviction (Cause of Death).
          <br />
          <br />
          Kroger uses this fraud to stop paid leave and charge more for health
          insurance. Testing has been said to be random too
          <br />
          <br />
          Polis: "1400, 200% vaccinated 400% unvaccinated," colorado Gov. Polis.
          is that excess without population growth nor characteristics exogenous
          you are using, you fucking retard? This isn't a crime that you aren't
          fixing for without character witness as evidence, it is the reasonable
          doubt side you are fixing for exogenous factors. Take a calc class.
          <br />
          "I agree that it is your fault, but should a business be able to
          penalize you for that choice?" If it is caused/spread/transmitted by
          people who produce it as artifact of being sick, by&nbsp;
          <a href="https://www.nature.com/articles/d41586-019-00991-4">
            bacterial-cause of virus
          </a>
          &nbsp;or not, it isn't our own fault. Your own words are admittance of
          it being a smoking gun.
          <br />
          <br />
          <Cable
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "200px",
              maxHieght: "30vw"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1G3UadhCwRqIDzJ3gRH9VAkO9AiEJkEX-/preview"
            }
            float="right"
            title="Not My Party (The Bulwark) - Cuomo Plandemic, The US Census Bureau and I called it."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Forced nursing homes to take in residents,”
          <br />
          <br />
          1.2m/yr+ (55m/yr+ worldwide) excess deaths age standardized by cohort
          gains expected is more than&nbsp;
          <a href="https://www.nursinghomeabusecenter.com/blog/covid-nursing-home-deaths/">
            169k
          </a>
          &nbsp;lot.
          <br />
          <br />
          Star Ledger: "N.J. reports 3,591 COVID cases,&nbsp;
          <a href="https://humanharvest.info/polio">12 deaths</a>.
          Hospitalizations top 1,000 for 3rd day."
          <br />
          <a href="https://www-doh.state.nj.us/doh-shad/topic/Mortality.html">
            Out of 192/day deaths
          </a>
          , this byproduct prevalence not being the cause is insignificant
          anyway
          <br />
          <br />
          “First, virion injects its DNA into cell. Next, cell becomes a virus,
          so the virion cannot get in there, so it doesn’t kill anybody! Anyone
          with covid has to get oxygen by force, because self-harm is illegal.
          This is all a political payoff to Pfizer helping Biden and&nbsp;
          <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html#:~:text=cSeven%20serious">
            Moderna
          </a>
          &nbsp;nothing to see&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            here
          </a>
          /J&J helping Trump.” Go bark up a tree.
          <h2>
            you think since virus, "requires cell to replicate," the first virus
            cam from where?
          </h2>
          M. Osterholm: "High in india then went back down to baseline," not
          affixed for cohort size on CNN with A Cooper, a delusional basis. See
          incidence of sewage/nutrition on 1775- mortality.
          <br />
          <br />
          Cases as defined by symptomatic is the same, insignificant rates of
          change year to year in similar symptoms. Asymptomatic-prevalence
          without symptom requisite, like calling majority by including eligible
          voters as "no," or not, is more elastically-prevalent towards
          asymptomatic-testing, so much so that it may not even be an indication
          of illness in the case that hotel room may have had some bacteria to
          produce 1/4 prevalence in The Common Cold Project to even take the
          warning mechanism case: either way, there is yet to be vivo electron
          microscope output of virus beyond mitosis of already
          bacterially-infected cell, just cartoons.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1pToEJEFry8RdooYOE9YNuDfj39UU8b_s/preview"
            }
            float="right"
            title="Wake Up America (Newsmax) - Andrew Garborino on vaccinations and symptoms of patients producing covid variants"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “25% of my patients producing covid are vaccinated, fairing well.
          People with vaccine are carrying the variants.”
          <br />
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://moldmask.co"
          >
            moldmask.co
          </a>
          Somebody tell me where the first virus comes from if it, "requires
          cell to replicate?" Evolutionary trait? Is byproduct prevalence and
          warning mechanism, not necessarily (or evidently) cause without the
          presence of bacteria.
          <br />
          <br />
          Imagine a ruler whom isn't selfish? Would they shit on every bastard
          in all the land by making ownership of their invention universal,
          trouncing every hoarders' things? Or would they fold to the moloch
          system market communism, sacrificing those altruistic virtues for
          trade by secret, good, or labor withheld, like the rest?
          <h2>
            did someone ask for some reciprosity? They are called Boomers for a
            reason; 1.2m/yr+ 75+&nbsp;
            <a href="https://humanharvest.info/polio">2015-</a>
          </h2>
          "Excess," to me, is due upon a time-series by an event- or
          change-based-rated-level, so looking at changes on the Y-axis didn’t
          register as requiring population being fixed. I should have counted,
          but it only took estimating mortality by population growth myself to
          see that we have been short for a long time.
          <br />
          <hr ref={this.claims} />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ insurance: !this.state.insurance });
            }}
          >
            <h3>insurance</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.insurance ? "relative" : "fixed",
              zIndex: this.state.insurance ? "0" : "-9999"
            }}
          >
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://carducci.us"
            >
              carducci.us
            </a>
            <br />
            "virus injects its DNA into each cell, 'in an instant'"
            <br />
            <a href="https://www.google.com/search?q=nucleoside+analogues+virus+electron+microscope+mitosis+replication">
              google.com/search?q=nucleoside+analogues+virus+electron+microscope+mitosis+replication
            </a>
            <br />
            The rabies virus bite, you say? still, incidence can be&nbsp;
            <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
              bacteria
            </a>
            .
            <br />
            <br />
            "Here we go again, the numbers are going up," Brian Kilmeade. What
            numbers? testing as opposed to cases like hours & price as oppose to
            productivity?
            <br />
            <br />
            You aren't counting&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              all cases
            </a>
            , just one artifact-byproduct of many by the same cause,
            bacterial-infection. If it, "requires cell to replicate," its
            taxonomy is only a cell. Are you saying it is an evolutionary trait?
            To do the math with it being dead would be to say it is exclusively
            byproduct-prevalence and warning-mechanism of bacterial-infection,
            antibodies to stop blood clotting but not infection of prevalence
            without transmission. prevalence does not transmission-cause make.
            <br />
            <br />
            "'You aren't meeting hospital capacity requirements,' well yeah,
            whats what happens when you fire half for resisting vaccine[not
            exclusively true, your sponsors in expiring claim false bid pools
            misappropriated funds to administration instead of demand, hospital
            beds haven't kept up with populaion]. That's why I am recommending
            these lawyers to fight back, it is just going to take a little
            time." They are not trying to resolve the class-issue of
            market-rights amidst a finite producer reality with a microeconomic
            perfect equillibrium reason to allow any duress in product instead
            of controlling by multiple of 12 industry various jury, just trial a
            la carte. The law-license-board is corrupt, savefacing and
            malfeasant for their conflict of interest to actually help.
            <br />
            <br />
            "Masks do not stop virus spread, we know this," Bill Spadea,
            misunderstanding
            <h2>
              prevalence can be byproduct/output/debris rather than mean
              cause/transmission/spread
            </h2>
            1.2m/yr+ excess deaths expected -&nbsp;
            <a href="https://humanharvest.info/polio">polio</a>&nbsp;vaccines
            curing byproduct and warning mechanism, but not cause (not really
            'excess,' a term used ABOVE basis, like people, or hours in correct
            economic productivity)
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/18JvCZ42WmNXcNHkYW8M3vY6ikZS1y4G1/preview"
              }
              float="left"
              title="National Report - Dr. Manny Sethi - 'use virals, stop scaring everyone, I can't count significant deaths'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Immunity is not antibodies cleaning up blood clot potential cell
            debris, it is stopping bacterial-infection to begin with
            <br />
            “May be seasonal,” you get want you test for with PCR
            <br />
            <br />
            "...everyone the coverage they deserve, nationwide doctor monopsony
            front ran with expiring claims for no reason," anbam insurance on
            CNN 9pm est
          </div>
          <br />
          <hr ref={this.jury} />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ juryPermitting: !this.state.juryPermitting });
            }}
          >
            <h3>juryPermitting</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.juryPermitting ? "relative" : "fixed",
              zIndex: this.state.juryPermitting ? "0" : "-9999"
            }}
          >
            market history and propoganda: The Great Leap Forward expected 15m
            35 age&nbsp;<a href="https://froth.app/stats">lifetime</a>
            &nbsp;deaths
            <br />
            <Cable
              style={{
                maxHeight: "40vw",
                height: "400px",
                width: "100%"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/10NrxyYWc2pkbb7kozAgsBMZ1XR55TKZB/preview"
              }
              float="right"
              title="Stinchfield (Newsmax) - on virus and masking with Chris Murphy, '80% vaxxed, 90% at risk vaccinated'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{
                height: "440px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1-pUud-u0xkYDOhHCVsihhEvhIy-aD9UT/preview"
              }
              float="left"
              title="Only diagnostic diff now is severity. What do you think virus is an evolutionary trait? Only comes out, 'requires cell,' and 'is dead.' Do the math"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Courts refuse to enforce their own orders,” based on jury-science
            permittance of duress in minimal viable product.
            <br />
            <br />
            "Remember influenza and coronavirus spread in a very similar
            fashion."
            <h2>
              prevalence is byproduct, too. not cause nor warning mechanism,
              alone
            </h2>
            <Cable
              style={{
                height: "440px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1RRQTP02Ukc8M87QISJFrK1F15L4eetBo/preview"
              }
              float="right"
              title="Phil Murphy covid update (Facebook live) - who is we in we know? jury for convictions please"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            n=25 14 positive vaccinated, 11 positive unvaccinated
            <br />
            “1/7 sick were unvaccinated,” production of antibodies may be having
            a "boy who cried wolf" situation, although I think antibodies just
            stop blood clotting
            <br />
            <br />
            Lets talk about the taxonomy of the virus genus.
            <br />
            Protistologist believe bacteria is cell without nucleus as the
            uniform common ancestor, I guess I’m one of them.
            <br />
            <br />
            What is the derivative taxonomy of cell if protist is bacteria with
            nucleus, golgi and mitochondria, than virus? Virus I think is only
            excrement, as only reproduced vivo with cell and bacteria
            <br />
            <TwitterTweetEmbed
              style={{ float: "left", width: "300px" }}
              key="1249019795183468545"
              tweetId="1249019795183468545"
            />
            Antibodies stop illness but not infection, as is a&nbsp;
            <a href="https://www.cmu.edu/common-cold-project/">
              warning mechanism
            </a>
            &nbsp; of bacterial-infection-byproduct prevalence, not
            transmission-vivo-cause
            <br />
            <br />
            beyond precedence is sometimes the law, and the law is not always
            legal nor prevailing
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1PQnD64MtBEaL58AI2mGDS24O-GZTq0MZ/preview"
              }
              float="right"
              title="Chris Salcedo (Newsmax) - Christian Whiton & Stephen Moser with Carl Higbie on oil reserves sold to China, wanting to default or reverse? the former illegal, bailout illegal. only cash:debt*income thru history would emulate prices paid without debt inelasticity of useless bid-to-ask brough forward demand, to be replaced by p2p max profit royalty, equity bankable depositary"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “I think we should be talking remediations,” if you test for it, you
            will find it.
            <br />
            Talk about fraud!
            <br />
            <a href="https://brainscan.info">
              acute psychiatric dimensia problem
            </a>
            : Mental breakdown, delusion, vascular dimensia, strokes, clots in
            the brain
            <h2>
              There are no transmitted (prevalence: cause of byproduct?) of
              omnicron killing (with).
            </h2>
            “You can’t just get a&nbsp;
            <a href="https://teapharmacy.party">prescription of regeneron</a>,
            you need to get it administered to you,” Charlie Kirk, only because
            expiring claim false bid pools thrid party donee claimable prevents
            trade to lender, landlord and insurer-bookee work deficit, from
            intermediate supply-demand as labor, without finance (expiring
            claims, invoices, implausible landlord use, repo-cycle
            kept-down-payments).
            <h2>“The precedent to establish a new baseline?!?” Charlie Kirk</h2>
            “The Gain of function research in Wuhan that our government funded
            and Fauci lied about,” Charlie, “They’ve tried every path they can.
            The ingredient has become the component to slow their fear-mongering
            propaganda away from the information that may empower you, the
            document that protects your rights,”
            <br />
            <br />
            "Requiring a negative omicron test,” Jim Acosta, ignoring the
            2k/year discovered and 5% prevalence off suspected cases. Ignoring
            the cause-linked-symptoms, an artifact 5% of the time
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1dqy_dBGZLEO4stAZFpeM4u9JgJwN3He4/preview"
              }
              float="left"
              title="GBNews - Patrick Christys' intro"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Omicron has yet to kill a single person,” GBNews anchor projects
            from prevalence of byproduct not bacterial-cause.
            <br />
            If these were evolutionary traits that, “only replicate with cell,”
            requisite for all vivo-cause (ingredients-in-a-vacuum), article 4
            would apply with jury-science deducable.
            <br />
            <br />
            “Verified stream of income in perpetuity,” J. Tobacco street guest
            on free rider mutable health-“care.”
            <h2>
              expiring claims abetting invoices and racketeering free rider
              mutable health, $4t/yr 1/4 pensions, 1/4 premiums, 1/4 pentagon
              pre-3/2020 fake pandemic based on age standardized excess deaths
              short 50m/yr worldwide, 700k/yr in US, expected cohort size gain.
              counterfeit in contract third party beneficiary donee claimable.
            </h2>
            "780k dead, nearly the same over Biden as trump." Dom Carter. That
            means it isn’t significant!
            <br />
            <br />
            "more people died under biden than trump, and he had the vaccine but
            didn't have demand." Judge Janine, the talk show host who said, "I
            can say that shit," 1 year ago about quid pro quo based
            discrimination for slip & fall racketeering the law-licensing-board
            <br />
            <br />
            <Cable
              style={{
                height: "240px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1oCE4UdaDML8i-byNLHILkRmc5NXvHkkg/preview"
              }
              float="right"
              title="GBNews - Frank Furedi (Free speech Crisis is not a right wing myth on righteous censorship, discrimination (Crt, censoring, and illiteracy have to do with one another?)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “We believe in free speech, we don’t want to censor ourselves.”
            Right, convict intranet for on device end to end encryption keys
            then? With multiple of 12 industry various jury-science. “This is
            bullying, isn’t it?” So fuckin cute when they do that
            <br />
            <br />
            Dick Morris: “Functional equivalent of a declaration of war, ended
            up failing because it didn’t have enough assets appraised by third
            party beneficiary repo kept down payments, if you have money but
            cannot use it in the swift system, you don’t have any money. French
            gdp/p is the greatest. ...It is a miracle, praying stopped the
            virus, by bringing a virion to stop a virus. Let's thank the Lord
            for that…”
            <br />
            <br />
            Only 10% of omicron needed rather than other variants of this
            horrible disease. Gives you aches and pains, but does not kill
            you."G-d did what Pfizer couldn't.“..sucking. Not a sexual
            reference,” I thought that was illegal to catholics whom believe
            Jesus is lamb-chop for sins?
            <br />
            <br />
            "'If you like your doctor, you can keep your doctor.' If you
            believed that, I have one bridge to sell you located in Brooklyn and
            electric toll malfeasance."
            <br />
            <br />
            Should be illegal to compel labor, and its employers and customers
            as third party beneficiary donees, to sign for longer than a month a
            la carte except for sport drafts… especially for expiring claim
            false bid non-rollover "deals" of collective flaccid loss.
            <br />
            <br />
            Abstain able polls bring out the voluntary crazies, lo is more
            random than can ever be emulated, variance is greater in real life
            than AP Stats.
            <br />I just don’t want rent-seeking from government (40%
            debt-spending, 10% debt-service) over my&nbsp;
            <a href="https://thumbprint.us/voting">election tech</a>
            &nbsp;inventions (
            <a href="https://thumbprint.us">discovery and design</a>) that can
            be &nbsp;<a href="https://3under2.us">free-rider-mutable</a>&nbsp;by
            making the cities, universities and corporates pay. Furthermore,
            evidently by comparative law, I can use any hung-jury-science
            duress, to boot.{/**let alone compatative advantage */}
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/115QLTNUIomNWfmn8WH-PLvm292yeg31m/preview"
              }
              float="right"
              title="GBNews - Nigel Farage with Biden office manager"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "How do you get people to vote on Election Day?" By providing an
            actual choice, not just two&nbsp;
            <a href="https://teapharmacy.party">wall st Pharma cops</a>
            <br />
            <br />
            <h2>expert conflict of interests</h2>
            An ailment like an umbilical hernia shows the malfeasance in quality
            from so-called "free-markets" constituted by expiring claims and
            invoices, where a wire-mesh was the worst solution for massaging the
            "intestines" inside if that is not a poor job from the birth-catcher
            <hr />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1eh9NxOH_Be4VO1R-ZszGNbRG89wkaYMx/preview"
              }
              float="left"
              title="GBNews - EU COMPULSORY JABS?"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>right retards, them</h2>
            it is sensible, prevalence being the chicken rather than the egg, or
            does it really matter? Haha, about place-density, population growth
            with last years’ life expectancy is short 50m/yr in world and
            700k/yr in US. The Great Leap Forward expected 15m 35 age/lifetime
            deaths from population growth alone
            <br />
            <br />
            But the&nbsp;
            <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
              most
            </a>
            &nbsp;jarring: Bacterial-infection with snapshot electron microscope
            (not “vivo-cause”), the only diagnostic difference between such and
            viral infection is, severity?
            <br />
            <br />
            did you even read what I said? Are you a person?PREVALENCE DOES NOT
            CAUSE MAKE: it was sewage that forebode lifetime, please scroll down
            midway humanharvest.info for the charts of the cellular debris. You
            think virus is an evolutionary trait? It “requires cell to
            reproduce,” because it only comes out
            <br />
            <br />
            <a href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full">
              here
            </a>
            &nbsp;are some cartoons from your, “virion inseminates cell with its
            dna,” scientists
            <br />
            <br />
            that’s what scientists use to prove your side! What are you smoking.
            <h2>What would you trust the saveFace doctors?</h2>
            I’m a statistician/Govtech/Paytech entrepreneur who doesn’t want to
            work on wall st. Credit is haram and third party beneficiary donee
            claimable
            <br />
            You probably work for someone
            <br />
            <br />
            I am a scientist, I have a bachelors in political science with
            economics minor, only because I think debt is counterfeit in
            contract, and hour targeting instead of per hour price deflation is
            retarded
            <br />
            <br />
            politics is the use of reason beyond precedence, like we are the
            people that question the science. You’re just a follower. If they
            told you to jump off a bridge you would. Inject me with the virus, I
            swear it won’t spread. Antibodies will be made though. Only bacteria
            can do that
            <hr />
            <h2>
              Are you testing for all similar symptoms in ICU? fixing capacity
              for capacity? 50m short of expected excess deaths worldwide, 700k
              US, leaves the&nbsp;
              <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
                mortality
              </a>
              &nbsp;as insignificant and all about nothing
            </h2>
            <hr />
            ms matches paralytic-polio. virion, “requires cell to reproduce,”
            because it only comes out. prevalent byproduct does not
            bacterial-cause make. Cases vs asymptomatic testing certainly is the
            fallacy
            <br />
            <br />
            I'm a statistician, the current vaxxers and antivaxxers are wrong to
            say it spreads from prevalence alone, it is actually a byproduct.
            nearly vivo insemination has been proven with bacteria making cell
            in an open wound, but I would rather cite you this: our diagnosis of
            &nbsp;
            <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
              bacterial vs viral
            </a>
            &nbsp;cause right now is merely severity of symptoms? we need
            controlled tests of virus replicating without cellular mitosis of
            already (bacterially-)infected cell. antibodies onset symptoms but
            those may be warning mechanism, cleaning up potential blood clotting
            debris
            <br />
            <br />
            <Cable
              style={{
                height: "220px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1JpTSqcGZyt0kvkw5Evlock4UcRvg-_JL/preview"
              }
              float="left"
              title="GBNews - Lawrence Young of U of Warwick on antibody incidence"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Antibody response positively-correlates with aggressive symptoms.”
          </div>
        </div>
        <div
          style={{
            fontFamily: "'Pangolin', sans-serif",
            width: "calc(100% - 20px)",
            border: "6px white solid",
            padding: "4px",
            wordBreak: "break-word",
            textAlign: "left",
            maxWidth: "600px",
            position: "relative"
          }}
        >
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1ID7uJq2pgd4Fh3MtHOBXz2rZ6d7Hvrz7/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Medicare Advantage Program"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1aCSy4cwqTFpaFCx1nnB_0yrP4ZqVzZFq/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Medicare Advantage Program"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “You’d be in good company, 26m people have a medicare advantage plan.
          I have a plan too and I really love it I’ve tried other coverage but
          they do not meet my needs nor my budget, now until November 7th …$0
          monthly premium plans may be in your area, don’t delay, our team is
          standing by to help you right now.” But what if invoices were illegal,
          what would be your purpose Paula? “You really want together these
          benefits. Coming up, you’ll see real customers. Come find your
          medicare advantage plan!”
          <br />
          <br />
          Stop calling reappropriating laborequity.org, and nationalism,
          socialism! Free market communist!
          <br />
          <br />
          Ppp is trust building and I think gun violence is because we have
          finance (expiring claims & invoices, implausible landlord use above 5
          units/30 days)
          <br />
          <br />
          <h2>
            This is like an invisible methane fire, the way doctors are trying
            to play statistician
          </h2>
          Your biology class didn’t show you a vivo insemination of virion dna
          in cell
          <br />
          It’s literally counted as a flu, byproduct-prevalence does not make
          cause
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1chpUdy6o4qmfVKp6KPUhX3fOFQJDtbAR/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Child Critical Care Doctor Saveface smiling about evidence exhibited by cartoon"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Vaccines prevent infection because of byproduct prevalence? Vivo
          insemination of virion in cell is only portrayed in cartoons thus far,
          not real life
          <br />
          <h2>
            vivo-evolutionary-trait or byproduct-retroactive-prevalence, because
            in vitro we know it only comes out,&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              5% of suspected
            </a>
          </h2>
          Mark Levin and Chuck Schumer call this collective loss, "protection:"
          <br />
          <br />
          "hospitals are packed, hundreds a day dying," that isn't a lot, and
          expiring claims/invoices misappropriated funds to adniministration
          instead of hospital beds, as the latter has not grown since population
          was half its size. 2015 census mortality projections, hospital
          capacity watchers and I knew this "pandemic" was coming, because of
          population growth.
          <h2>
            plausible deniability of talk radio and cable for&nbsp;
            <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
              ratings
            </a>
            &nbsp;is over
          </h2>
          <br />
          "In New Zealand, you get fined if you don't vote," "well yeah, some
          countries take this very seriously,"
          <h2>
            talk about state victimization racketeering and tort beyond capacity
            without expiring claims nor invoices and within jury-science (every
            industry represented)
          </h2>
          <br />
          "The first omicron case has arrived in the U.S. He is vaccinated, so
          he has no symptoms,"
          <br />
          <hr ref={this.lawsuits} />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ lawsuits: !this.state.lawsuits });
            }}
          >
            <h3>lawsuits</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.lawsuits ? "relative" : "fixed",
              zIndex: this.state.lawsuits ? "0" : "-9999"
            }}
          >
            age-standardized excess deaths short 700k 1.2m/yr+ 75+ 2015-
            expected is not a "pandemic."
            <br />
            <span
              style={{
                backgroundColor: "rgb(197, 179, 88)",
                color: "black"
              }}
            >
              Sen Rand Paul:
            </span>
            &nbsp;“If people buy what you make, G-d love you, that is the
            American way. I’m against the government buying their product.” What
            about expiring claim “purchases” and invoices? Are those ‘
            <a href="https://nationalsecuritycasino.com">buys</a>?’
            <br />
            <br />
            “Monoclonal-antibodies will take care of those who cannot take care
            of themselves.
            <br />
            Incurring more debt is why we are paying more in inflation through
            this pandemic.
            <br />
            Insurance companies should have paid for our healthcare.”
            <br />
            <h2>
              invoices and insurance coverage are theft of third party
              beneficiary
            </h2>
            <a href="https://saverparty.xyz">Plaintiffs</a>&nbsp;contend they
            are third party beneficiaries under Civil Code section 1559, which
            provides: "A contract, made expressly for the benefit of a third
            person, may be enforced by him at any time before the parties
            thereto rescind it." This section excludes enforcement of a contract
            by persons who are only incidentally or remotely benefited by it.
            (Lucas v. Hamm (1961) 56 Cal. 2d 583, 590 [15 Cal. Rptr. 821, 364
            P.2d 685].) American law generally classifies persons having
            enforceable rights under contracts to which they are not parties as
            either creditor beneficiaries or donee beneficiaries. (Rest.,
            Contracts, §§ 133, subds. (1), (2), 135, 136, 147; 2 Williston on
            Contracts (3d ed. 1959) § 356; 4 Corbin on Contracts (1951) § 774;
            see Rest.2d Contracts (Tentative Drafts 1973) § 133, coms. b, c.)
            California decisions follow this classification. (Southern Cal. Gas
            Co. v. ABC Construction Co. (1962) 204 Cal. App. 2d 747, 752 [22
            Cal. Rptr. 540]; 1 Witkin, Summary of Cal. Law (8th ed. 1973)
            Contracts, § 500.)
            <br />
            <br />
            [6] A person cannot be a creditor beneficiary unless the promisor's
            performance of the contract will discharge some form of legal duty
            owed to the beneficiary by the promisee. (Hartman Ranch Co. v.
            Associated Oil Co. (1937) 10 Cal. 2d 232, 244 [73 P.2d 1163]; Rest.,
            Contracts, § 133, subd. (1)(b).) [1b]
            <br />
            <br />
            [7] A person is a donee beneficiary only if the promisee's
            contractual intent is either to make a gift to him or to&nbsp;
            <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
              confer on him a right against [11 Cal. 3d 401] the promisor.
              (Rest., Contracts, § 133, subd. (1)(a).)
            </a>
            <br />
            <br />
            "Conscious disregard, manslaughter," no… that is not as qualifying
            as negligence/manslaughter. Do you have to save someone’s life if
            you didn’t set it in motion, and can you tort more when there is
            spite, sure, but laziness or apathy? “Not my job.” "See if their a
            lesion in the brain that would cause this," not without correlative
            prevalence of such. STOP manipulation of exhibits with basis rate
            fallacies.
          </div>
          <h2>
            "expanding healthcare access - M4A," is expiring-claim, invoice and
            higher-premium for producer-ask of the same
            intermediate-material-and-labor&nbsp;
            <span style={{ fontSize: "9px" }}>
              hidden by 40% debt-spending publically, or not, still fraudulent
              bid of your consumers'/employers'
            </span>
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1qHQmxF3dw_XALhPuZ6FzR-jOJVk22AiB/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Rob Smith of Turning Point"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Turning Point: “I’m not antivaxx but I am antimandate, unless you tell
          me that the vaccine stops transmission.”
          <br />
          <br />
          conscientious observer:
          <h2>
            excess or regulated antibody symptom warning, infection cause by
            bacterial-cause
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1XDXM3DNlOXNAe4dThh5hJLRo11njzBGE/preview"
            }
            float="left"
            title="National Report (Newsmax) - Dr. Jerome Adams fmr. Us Surgeon General, with a cartoon virion next to his head, and the merk antiviral"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “As the JHU site tells us the US is in the bottom-half of squelching
          variants,” neglecting the inability to compare cases with asymptomatic
          testing of similar symptoms with insignificant changes year to year.
          <br />
          “By Christmas, every citizen should have a 'free' antibody test from
          the government,”
          <br />
          “Smart testing of when people coming into the country and leaving, so
          we can stop the spread of the virus even more,”
          <br />
          “The best bet is to get vaccinated, even though there is conflicting
          information,”
          <br />
          “The same testing still can capture the new variants,” 1 at a time,
          the one with the most proteins?
          <br />
          <br />
          you can't be anti-mandate, pro-vaxx & pro-article4
          <br />
          I would sooner believe virus happens without bacteria as you describe
          [5G, bad vibes] than it is transmitted! Only way it is transmitted
          with only cellular taxonomy is if it is an evolutionary trait to kill
          eachother for no obvious gain
          <br />
          <br />
          credit is forced for debit card platforms, do not call&nbsp;
          <a href="https://nationalsecuritycasino.com">gdp</a>&nbsp;
          <a href="https://micro-theory.com">productive</a>&nbsp; as it is
          prices*hours as that is squared to waste per hour
          <br />
          "Spreading among the unvaccinated," prevalence doesn't make cause
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Kfed9pXm-N3MffFC4-ygKy_XUIH4J3Pn/preview"
            }
            float="right"
            title="John Bachmann (Newsmax) - Director of St. Joseph's Hospital"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          He thinks virion is created by cell exclusively. Is it an evolutionary
          trait?
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ politics: !this.state.politics });
            }}
          >
            <h3>politics</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.politics ? "relative" : "fixed",
              zIndex: this.state.politics ? "0" : "-9999"
            }}
          >
            <h2>
              Biden free rider mutable 60% tax and 40% debt-spending r&d
              monopsony
            </h2>
            "Go get the Booster shot today, they are free. a fully-vaccinated
            person is the best against covid, do not wait. every child is safe
            to get vaccines now, how strongly vaccines fight against the
            variant, infections and severe disease wear masks inside and
            outside. It protects you and those around you
            <br />
            if improvements are needed, the&nbsp;
            <a href="https://teapharmacy.party">fda</a>&nbsp;will put them on
            the market. I am removing all road blocks to keep people safe.
            <br />
            If you are vaccinated, but are worried, get the booster. if you
            aren't vaccinated, get that shot!
            <br />
            I promise America that the latest boosters will be free and
            everywhere in america, free of charge.
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1sgt0t2YikacKYIxcxTgTTMSVxetc83r5/preview"
              }
              float="right"
              title="John Bachmann (Newsmax) - Joe Biden"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "We shipped for&nbsp;<a href="https://carducci.us">free</a>&nbsp;to
            other parts of the world, to more than all countries combined,”
            <br />
            We ship 275 vaccines to 110 countries;
            <br />
            no vaccines to other parts of the world will ever come at the
            expense of every American.
            <br />
            How do we meet the morals and protection of Americans?
            <br />
            We cannot let up untill the world is vaccinated, to protect us as
            well.
            <br />
            Last christmas fewer than half, 75% and now 81% of seniors.
            <br />
            There is still time and available before christmas. given where e
            were last year, that non of us should take for granted.
            <br />
            Thats how we reopen our business schools, even in the pandemic, we
            have made record growth, we move forward now.
            <br />
            The reason for the travel ban there was a significant amount of
            cases in africa and around the world.
            <br />
            I don't think anyone will be reluctant to report that we have
            provided more vaccines to that region than the world cobined. the
            reluctance to get it into their arms is there. lol. Alex from
            Reuters."
            <br />
            <br />
            Rent-seeking (trust-building, public-utility-operating-costable)
            grandiose scope on estimates ever changing (options to buy, sold
            without auth) dependencies, like in home contracting: intermediate
            durable-goods, labor & material. Seize the means of production! Gain
            per hour/price productivity
            <br />
            <br />
            Nomenclature with accounting and software classes and castes is
            necessary for beings
            <br />
            <Cable
              style={{
                height: "340px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1BfcflB_MSKN8sgDh9_4bWzz-fCU4my1s/preview"
              }
              float="right"
              title="GBNews - Maxwell trial"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            what is facts about a case to be called a bias if exonerated is
            permissible
            <br />
            Do you not have messages? Flight-logs aren’t proof? What else? These
            things should be public info
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1JHhCgkEe0_kSk5gH7TRpfYkInJVjuLqf/preview"
              }
              float="left"
              title="National Report (Newsmax) - Shaun Kraisman basis rate fallacy"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            6 per 100 in florida because they are testing less, "per" cannot be
            per person AND per tested
            <br />
            <br />
            shut the fuck up bitch
            <br />
            <br />
            <Cable
              style={{
                width: "110px",
                height: "100px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Ub9mdUZRjgnABUn_7CV-QULnUODCwD5N/preview"
              }
              float="right"
              title="National Report (Newsmax) - Shaun Kraisman basis rate fallacy"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Encourage people with&nbsp;
            <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
              high risk
            </a>
            &nbsp;to get the vaccines,” is&nbsp;
            <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html#:~:text=cSeven%20serious">
              not
            </a>
            &nbsp;the right advice, since&nbsp;
            <a href="https://www.google.com/search?q=oncogenic+b-cell+dysregulation">
              excess
            </a>
            &nbsp; antibodies (
            <a href="https://www.aafp.org/afp/2016/1201/p896.html">
              dysregulation
            </a>
            ) can be deadly
            <br />
            <br />
            They think they are ahead of the day, but we have been up earlier in
            actual time
            <br />
            <br />
            If you like to compete with consumers and call yourself a
            conservative, you are making up words. Socialists prevent
            non-labor-demand. This lender-/landlord-work-deficit is 20x/person
            55+/millennial rental-income and 44x accrual at checking velocity of
            &nbsp;<a href="https://fred.stlouisfed.org/graph/?g=JiC5">1.1/yr</a>
            , and how else but to launder savings accounts principal does $4t/yr
            spending 60%, 40% free rider mutable tax (1/4 pensions, 1/4
            pentagon, 1/4 premiums) not become checking-currencyComponentOfM1
            Rent seeking public utility happens when it is operating costable
            (unless perpetual motion machine or durable good like public
            parks/dollars)
            <br />
            <br />
            consumer surrogate, target margin, jury for business
            <br />
            <br />
            <h2>
              vaccinations do not stop a testing for one at a time byproduct,
              they make antibodies to stop blood clots by virion excrement
            </h2>
            , but cartoon vivo insemination isn't proof of transmission nor
            cause, just prevalence
            <br />
            <Cable
              style={{
                height: "440px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Wcvt-h5akh70Ip2YdEcjgoZm8gtdtz_t/preview"
              }
              float="left"
              title="LinkedIn - selective guidelines without ftc citing is fine?"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            do not implement asymptomaic-testing, unless you want to obfuscate
            time-series detection of the universal cause of similar symptoms
            <br />
            <br />
            <Cable
              style={{
                width: "110px",
                height: "100px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1uYUmSOIjSZbONbeyNxqKb8YfL99Kc2-f/preview"
              }
              float="right"
              title="National report (Newsmax) - Glenn Gromkin"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Simple majority is quicker to find guilty than 11/12
            <br />
            Innocence isn’t ever given the benefit of the simple majority,
            especially with ideological duress of voters and defiance of
            eligible
            <br />
            <br />
            "Financial," isn’t a deal per person nor group unless it is
            immediate escrow; it is any demand that is not labor or
            share-split/tax that is not of the consumer for same goods nor for
            free rider mutable or non-concurrentable things like outlays, claims
            nor hours,
            <br />
            <br />
            it is otherwise any competition with the consumer in third party
            beneficiary law or intent to harm deduced (more than 5 units or 30
            days)
            <br />
            <br />
            politics is not a "political thing," "predicting what is more
            accurate in the future," is the very utility of politics as to
            reasoning for outlaws
            <br />
            there is already third party beneficiary law
            <br />
            <a href="https://story.snapchat.com/p/6297f1b9-30a8-4538-80fe-2f15b4d1ce76/1643955896086528/2289369221603328">
              this is still happening albeit in countervailing law
            </a>
            {/*<Cable
            style={{
              width: "110px",
              height: "100px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://story.snapchat.com/p/6297f1b9-30a8-4538-80fe-2f15b4d1ce76/1643955896086528/2289369221603328"
            }
            float="right"
            title="Weird History (Snapchat) - Asylums"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />*/}
            <br />
            <Cable
              style={{
                height: "440px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1HPSdsdqU_1_Qm_nRI2TL28tiRJ_veRIr/preview"
              }
              float="left"
              title="Bernie and Sid (77WABC) - Asylum review, bail means no evidence"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            "Republicans wouldn't go along with this," but will in 60/40 wall
            st/gov
            <br />
            2010-20 $4t/yr 1/4 pentagon 1/4 pension 1/4 expiring-premiums, 40%
            debt spending over compounding basis by such itself and debt limit
            is Zero
            <br />
            <Cable
              style={{
                width: "110px",
                height: "100px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1d4VdzR79K0BUalejrHiMSUhzWcHyvGAR/preview"
              }
              float="left"
              title="National report (Newsmax) - Sen Cassidy on This Week (ABC)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{
                width: "100%",
                height: "300px",
                maxHeight: "25vw",
                transform: "scale(-1,1)"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1PJ8391RQyJ1CkPraFAZOk-W1tt0LwHuI/preview"
              }
              float="right"
              title="Face the Nation (CBS) - Fauci, 'I am science,'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <Cable
              style={{
                width: "110px",
                height: "100px",
                transform: "scale(-1,1)"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1en8tGznaX0WmJTG8sWSxFCY4j_7YjgIY/preview"
              }
              float="left"
              title="Michael Osterholm portrait"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "40px", width: "60px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
              }
              float="right"
              title="virus insemination cartoon evidence"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            assumptions make an ass out of you and me
            <br />
            Just because you test one virus at a time doesn’t mean it is
            transmitted, it is borne in vivo by each individual from &nbsp;
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">bacterial</a>-cause
            <h2>
              Less likely to catch the virus just because of prevalence? You
              need vivo&nbsp;
              <a href="https://www.sparknotes.com/biology/cellreproduction/cellcycle/section2/">
                insemination
              </a>
              , babe
            </h2>
            the positivity rate is higher in lower asymptomatic-testing
            <br />
            are you not testing asymptomatic-testing one at a&nbsp;
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              time
            </a>
            ?
            <br />"
            <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
              Pfizer
            </a>
            &nbsp;will know the effect of the variant on their vaccines in just
            a couple weeks,” Jim acosta, that makes no&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              sense
            </a>
            .
          </div>
          <br />
          {this.state.ios && (
            <span style={{ border: "1px solid" }}>
              "Among 3410 total cases of suspected but unconfirmed COVID-19 in
              the overall study population, 1594 occurred in the vaccine group
              vs. 1816 in the placebo group"
            </span>
          )}
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/IPQIsodwMwY"
            }
            float="left"
            title="Stephen Moore June 13th, 2021 Moore Money, Population Growth, Epiology & GDP/population"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2
            style={{
              backgroundColor: "rgba(200,100,150,.5)"
            }}
          >
            not with those numbers, no,&nbsp;
            <a href="https://saverparty.xyz/#:~:text=%22Math">neigh</a>
          </h2>
          I was literally lassoed for a siringe for calling insurance net loss
          and upon false imprisonment, but why wouldn't mental-health have to
          use evidence and jail or acquit right away malfeasance? What else but
          racket. I thought it was a knee appointment but my mom whispered to
          them that I&nbsp;
          <a href="https://truncatedsalestax.com">pushed</a>
          &nbsp;her. like the britney spears case, given to her at discount of
          what I deserve because she is the one with collateralized debt. my
          consumer debt and IP isolated is&nbsp;
          <a href="https://carducci.us">good for you</a>
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "345px" }}
            onError={handleScollImgError}
            src={
              this.state.nolinkedin
                ? ""
                : "https://www.linkedin.com/embed/feed/update/urn:li:share:6870778078365278208"
            }
            float="right"
            title="https://linkedin.com/in/nickcarducci https://www.linkedin.com/feed/update/urn:li:activity:6870778078793089024/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6870778078793089024%2C6870780409710448641%29"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Utility is too broad just design and discovery should do you good.
          License: “UNLICENSED”
          <br />
          <br />
          Class solution from politics, not law. bipartisan detractors is from
          false bids and infinite producer reason in finite producer reality
          <br />
          <br />
          "a lot of [afro] income growth is the work[-seeking] requirement for
          unemployment false bid pools (insurance)"
          <br />
          <br />
          "Communism is radical political coercion." Like entrapping?
          {/**compelling gov purpose, jury for business and free rider immutable 
          sewage police lawsuits, that cannot be pro-rated in immediate t-0 escrow,
           else collective bargain fails to bring ask-to-bid */}
          <br />
          Or fraudulent. Politics should be subject to desistation to jury of
          exhibits before jury decides it is evidence
          <br />
          <br />
          taking people off welfare by labor monopsony of free rider mutable r&d
          monopsony tax 40% and the rest debt-spending, 10-40% debt service
          fed-state,
          <h2>
            instead of knee-capping&nbsp;<a href="https://30under5.us">rent</a>
            -seekers?
          </h2>
          <br />
          <h2>
            <a href="https://www.academia.edu/48950651/Economics_of_Politics_Public_Finance_Term_Paper">
              assuming
            </a>
            &nbsp;something of employers and new business to&nbsp;
            <a href="https://policonomics.com/pareto-optimal/#:~:text=Following">
              infinity
            </a>
            , and &nbsp;<a href="https://carducci.us">beyond</a>
          </h2>
          "No fault welfare," while 65+ gain half unemployment and mental
          illness is a diability, but not previous work and injury or
          self-inflicted except on site for false bid pool, expiring premium,
          non-rollover insurance. “Trump solved the problem with vaccines, but
          there are more deaths with vaccines,” Dick Morris. 75+ since 2015
          1.2m/yr growth in cohort
          <br />
          <br />
          <a href="https://froth.app">
            carducci.us
            <Cable
              style={{ width: "auto", height: "60px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?dl=0"
              }
              float="right"
              title="froth.app"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          “Nobodies crazy whom detect conspiracies, but Biden is ill based on
          his intellect rather than brain&nbsp;
          <a href="https://brainscan.info">dent</a>,” diagnoses Rudy Giuliani
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ float: "right", width: "300px" }}
            key="1428312309685002241"
            tweetId="1428312309685002241"
          />
          I don’t know why Greg Kelly makes fun of me when I say this but
          population growth was 1.2/yr lifetime ago and our age is 60 dying of
          flu, 74 dying of covid and 75 being natural. Probably racketeering ppp
          trusts
          <br />
          <br />
          Marty Makary: "Adults who have not been immunized 20-30m," will make
          the virus but that doesn’t mean they transmit it to eachother, nor is
          it the only virus being produced upon&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            bacterial
          </a>
          -infection
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/m-CwPBcrMYQ"
            }
            float="left"
            title="Rudy Giuliani on T2T 77WABC - bacteria is cause"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          virus causes bloodclots that antibodies do stop, but the virus only
          spreads by mitosis, not insemination. prevalence doesn't make
          transmission necessarily and in this case it is artifact not not
          necessary byproduct
          <br />
          <br />
          you dont test for all at once because it wouldn't correlate with a
          racket or save-face
          <br />
          <br />
          As a person who deals in time-series data, please do not
          asymptomatically-surveil-genomes, keep to the causal-intersection
          <br />
          Change the way your brain is set up, by deformation or suppression is
          dysregulating
          <br />
          Government should stop experimenting on people and animal, unlock r&d
          from free rider mutable tax, 40-50% debt spend and closed source
          licensure
          <br />
          <br />
          <a href="https://truncatedsalestax.com">dr benten cnn</a>
          <br />
          More support is literally r&d cheating
          <br />
          Treatment decided by others only in mental health
          <br />
          <br />
          Mental health care, paid by parents, is an extension of non-compete
          laws of parents from children, false bid pools abetting invoices is
          useless, settle up doc, why don't you. do we animal test and close
          source for craft beers? I don't think the per hour propensities are
          worth it
          <br />
          <br />
          Imagine a self-licensed statistician on CNN on Sundays at 9 doing the
          following:
          <h2>tl;dr: "Lockdown everyone!"</h2>
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1HRzROQon0ShwIgr0bzZACXMqjv0kH26K/preview"
            }
            float="right"
            title="Smerconish n 10k poll 5% against or for lockdowns absolutely"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          What kind of survey question excludes people that want travel for
          everyone?
          <br />
          Agree means vaxx only
          <br />
          Disagree means no flights for anyone or flights for everyone
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1kFFloHMKufd_g0rkEkEB_tahpS5YKPQe/preview"
            }
            float="left"
            title="Smerconish n 10k poll 5% against or for lockdowns absolutely"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          established itself endemically, why don't you test for all 2k/yr
          discovered (10k/yr looked at)? prevalence does not a transmissibility
          make.&nbsp;
          <h2>it is the byproduct of bacteria</h2>, already proven vivo
          insemination by bacteria in open wound, not by G-d or without a
          taxonomy at all, like bacteria, and virus from cell.
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ science: !this.state.science });
            }}
          >
            <h3>science</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.science ? "relative" : "fixed",
              zIndex: this.state.science ? "0" : "-9999"
            }}
          >
            <h1>
              More testing begets less death/symptom co-incidence&nbsp;
              <span>does not pretend postend-to-cause</span>
            </h1>
            Cartoon vivo insemination, is dead byproduct and asymptomatic-test
            does not make a case. Remember page 42&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              https://www.fda.gov/media/144245/download#page=42
            </a>
            &nbsp;“Among 3410 total cases of suspected but unconfirmed COVID-19
            in the overall study population, 1594 occurred in the vaccine group
            vs. 1816 in the placebo group,”&nbsp;
            <h2>is not even presentable to the jury</h2>
            <br />
            Let me qualify myself as a student of economics, market history and
            propoganda, I learned some from Monmouth U and Hopkins, and I might
            sue for damaging my degree by tranching out detractors to
            cartoon-science and doctrine-discrimination beyond jury for business
            and any semblance of the very principles and pillars of infinite
            producer reasoning in a finite producer world, targeting margins to
            make demand exclusively labor. with all this profit withheld we have
            to outlay, and with all this collateralized debt, we have to
            #AmortizeByReverse don't cancel debt:cash*income thru history, as to
            end the RepoCycleWithDowns
            <br />
            <br />
            In my science, Fauci and WHO are suffering from basis rate fallacy,
            of cases vs asymtpomatic testing of the byproduct of a cause of a
            changing byproduct, to which is garbage of a garbage collection
            process
            <br />
            <br />
            as for epiology, basis rate fallacy elsewhere and in sum, thrice, is
            ms matched paralytic polio and "age-standardized," "excess deaths"
            do not account for population growth nor age-cohort size
            <br />
            <br />
            <Cable
              style={{ width: "110px", height: "100px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1jIFJKjdlH-qow0YuW_oSX7OzW7zWT6Lx/preview"
              }
              float="left"
              title="Wake Up America (Newsmax) - Dr. Johnathan Baugh"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Transmissible doesn’t mean illness," but prevalence doesn’t mean
            transmissible
            <br />
            <br />
            nadia bashir is looking at random sample data an flipping out about,
            whatever
            <br />
            <br />
            “We are going to actually test it” Fauci needs to inseminate cell
            still with virus, not draw cartoons or find an already infected cell
            that undergoes mitosis. “Precautions acting swiftly with caution to
            be safe”
            <br />
            <br />
            bbc brexit bashing corporation is free rider mutable monopsony and
            gentrification of reporters, making it "biased" but more accurately
            industry-precedence-interested
            <br />
            <br />
            <Cable
              style={{ width: "130px", height: "170px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1KwGgfIWRztdR0OPgjxw10TAgJFQ5_bcP/preview"
              }
              float="right"
              title="GBNews - Professor Karol Sikora, Former Head of Cancer Programme at WHO"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “I think we will have Christmas, but it may hit older people more,”
            just because it is prevalent in hospitalizations and deaths doesn’t
            mean it is the cause. It is byproduct of bacterial-infection every
            time, where vivo has already been proven (not a cartoon)
            <br />
            <br />
            they literally fund testing when desiring to sell off, then hike and
            sell to trap {"<"}$25k accounts in pattern day trading, like a
            kettle of fish
            <br />
            <br />
            random testing can produce a range in historical variation in
            prevelance as well as if you change testing method, with no bearing
            on causal-prevalence
          </div>
          <br />
          Replace all McDonald's with beets me (free range meats and veggies
          <span role="img" aria-label="trademark">
            ™
          </span>
          ️)
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/13Dpy7lQQtUoGZDJiFDWLCgMwgj-pIdWw/preview"
            }
            float="left"
            title="Chris Salcedo with Carl Higbie and Amy Tarkanian saying we are technically in a pandemic"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          We aren’t technically in a pandemic when excess deaths is less than
          expected
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1v0migHecvOK1qo4ba-XZ2XdncYtZAWYy/preview"
            }
            float="right"
            title="Eric Bolling (Newsmax) - basis rate fallacy by artifact not sufficient as in vivo proof or at lease suspected (symptomatic)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Vaccines don’t stop hospitalizations, nor does "virus spread," on
          account of an artifact-byproduct that doesn’t necessarily make when
          suspected case, let alone is not the cause proven by vivo
          insemination, just claiming credit when finding it in the wild, an
          dead-excrement of cells that never “injects its dna” except in
          cartoons
          <br />
          <h2>
            trust statisticians, not doctors with industry-precedence-interest
          </h2>
          immune escape is not measured by virus prevalence, but symptom, or
          else what are you curing?
          <br />
          _Variant (nation-based-naturalization) is just a measure of where
          testing eminated from
          <br />
          Please don't test asymptomatically, as time-series gets FOOKED
          <br />
          chicken or egg, doesn't matter. the cause is elsewhere, until you show
          me
          <br />
          <h2>
            in vivo electron microscope, viral insemination&nbsp;
            <span
              style={{
                fontSize: "9px"
              }}
            >
              beyond mitosis&nbsp;
              <a href="https://www.sparknotes.com/biology/cellreproduction/cellcycle/section2/">
                1/cell/day
              </a>
              &nbsp;of already infected cell
            </span>
            , #NoMoreCartoonVirus
          </h2>
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1pFubWjK5D8RrVMyH9WSRkovveK1C6Y-B/preview"
            }
            float="left"
            title="American Agenda - Logan Raddick & Alex Salvi, jiggers for corporate profits"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Increased rate of infection measured by asymptomatic testing? You are
          so stupid Alex
          <br />
          <br />
          Why do you think spread is testing what is byproduct of another cause?
          All you show is cartoons. I want in vivo electron microscope
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1U8D-IXewHpctFt3uhpUWh9-JYiKai5pB/preview"
            }
            float="right"
            title="American Agenda - Logan Raddick & Dr. McCormick basis rate fallacy, confused"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Asymptomatic testing isn’t prevalence to compare, as you can see
          hospitalizations are even for covid and flu over time because there
          asymptomatic-tests of not-necessary-artifact-type is not counted
          <br />
          <br />
          “The lockdown chased me out of the business”
          <br />
          Just because you test (upon symptom) doesn’t mean it isn’t just
          artifact byproduct of another cause
          <br />
          <br />
          <h3>
            Need consumer surrogate with target margins (& jury for business)
            <span style={{ fontSize: "9px" }}>
              , not 60% free rider mutable tax (& 40% debt-spending, 10-40%
              debt-service) to hide premiums at greater amortized cost
              (actualized, concurrently-consumable-or-useable)
            </span>
          </h3>
          False bid pools (or expiring, non-rollover insurance without
          concurrentable units) engendered grave misappropriation of funds. At
          least a quarter of gdp is healthcare, because it is insurance AND
          invoices. Population has doubled since the last time new hospital beds
          were built. The available beds here probably do not account for slow
          times and states
          <br />
          <br />
          Gordon Chang, why do you think a weaponized virus without in vivo
          proof ever of replication beyond mitosis, meaning null insemination
          without bacteria in snapshot, would be released accidentally, or what
          other reason are you purporting the CCP is hiding their motive? If it
          wasn't an accident, why wouldn't they claim it? Just to kill? well,
          excess deaths might become more than expected with half the citizens
          now with induced excess antibodies attacking their own cell
          <br />
          <br />
          <Cable
            style={{ width: "150px", height: "210px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/nKvUf7F4Xn4"
            }
            float="right"
            title="Dick Morris 77WABC - bacteria is cause"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Cause
          <br />
          Root/link
          <br />
          Byproduct
          <br />
          Link
          <br />
          <br />
          <a href="https://www.nature.com/articles/s41598-020-73162-5">
            virus
          </a>{" "}
          on day 2
          <br />
          <br />
          false bid pools and invoices are useless
          <br />
          <br />
          Making&nbsp;
          <a href="https://truecostofhealthcare.org/admissions_data/#:~:text=Figure%2017:">
            heroes
          </a>
          &nbsp;out of criminals, Dimon v Floyd
          <br />
          <br />
          Deflecting vs assigning blame
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1_DRu666wROLmR2R7dML1Q2Mc74UPzrvX/preview"
            }
            float="right"
            title="Spicer & co - vaccine propoganda"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/152Dad1UJYWJVTvrd58cHihSiUyQCpl2I/preview"
            }
            float="left"
            title="National Report (Newsmax) - Bethany Mandel vaxx-freak Deseret News"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “We are told by the top-left if we don’t want to mask up and separate
          outside while we go to a Broadway show inside, we don’t think the
          pandemic is real or we want to kill grandma. We know that both of
          those are not tru. …It seems like no one will advocate for them.”
          <br />
          <br />
          “They are more at risk for the flu, I encourage them to get the flu
          shot.”
          <br />
          <br />
          It’s&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">not</a>
          &nbsp;more effective to get vaccinated when the virus is the
          asymptomatic-byproduct and not the cause, nor all cases
          <br />
          <br />
          doctors' confirmation bias' (savefacing)
          <br />
          free-markets of finite reality by infinite reason cannot find truth
          for duress within mvp nor utility/price.&nbsp;
          <a href="https://www.cdc.gov/flu/prevent/vaccine-supply-historical.htm">
            antibodies
          </a>
          &nbsp;stop byproduct that which causes infection and illness is a
          warning&nbsp;
          <a href="https://journals.sagepub.com/doi/full/10.1177/1745691620942516">
            sign
          </a>
          <br />
          17-29% heart-attack is in vivo (above-basis prevalence or in vacuum
          with ingredients and order) by vaccine
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Pj0ilT3omFgLCLIZNG_B6txdDlQl3R2w/preview"
            }
            float="left"
            title="GBNews - Heart Disease link to mRNA-sporing-grafts"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Groundbreaking: researcher says managment put outlays and
          accrual/false-bid-pools over science and settlement
          <br />
          <br />
          <div
            style={{
              textAlign: "right",
              float: "right",
              width: "300px",
              maxWidth: "50%"
            }}
          >
            <Cable
              style={{ height: "40px", width: "60px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
              }
              float="right"
              title="virus insemination cartoon evidence"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            simple-majority is&nbsp;
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">not</a>&nbsp;enough, and
            jury is not as&nbsp;
            <a href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full">
              random
            </a>
            as voluntary
          </div>
          <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
            cases vs asymptomatic-testing is the fallacy
          </a>
          <br />
          <h2>“We could have saved them”</h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1lS1_JXCxguiDRXa1vApy0GfK-fTXZdSE/preview"
            }
            float={"left"}
            title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?dl=0"
              }
              float={"right"}
              title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          <a href="https://www.prb.org/resources/countries-with-the-oldest-populations-in-the-world/">
            oldest populations in the world
          </a>
          , 55m/yr+ worldwide and&nbsp;
          <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
            1.2m/yr+ in U.S.
          </a>
          &nbsp;expected&nbsp;
          <a href="https://youtu.be/IPQIsodwMwY">excess deaths</a>
          &nbsp;from &nbsp;
          <a href="https://twitter.com/frothanalysis/status/1428312309685002241">
            population growth life expectancy ago
          </a>
          .
          <br />
          <br />
          even if antibodies just clear up byproduct of bacterial-cause and
          virus only comes out, you can expect this 800n result
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            4.8%+ lymphoma "hot nodes"
          </a>
          <br />
          <br />
          excess antibodies attacking mRNA-spored-protein-graft
          <br />
          attacking your own cell with protein made from the grafted-mRNA*
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ fall2021: !this.state.fall2021 });
            }}
          >
            <h3>fall2021</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.fall2021 ? "relative" : "fixed",
              zIndex: this.state.fall2021 ? "0" : "-9999"
            }}
          >
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/mgm24pg4qqzelyy/2009%20index%20wwii%20life%20expectancy.jpeg?dl=0"
              }
              float={"left"}
              title={
                `indicies of population and monies are expounded, ` +
                `respectively showing gdp/population is constant with ` +
                `fixed resources with differing forms and technological ` +
                `advancements but still same melted- or decompositional-forms`
              }
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/7juhzw918i6hxwm/index%20of%20growths.jpeg?dl=0"
              }
              float={"right"}
              title="full chart of the above that is zoomed-in"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/6a47ublnabh49ze/evidence%20rent%20no%2045%20to%2055%20work.jpeg?dl=0"
              }
              float={"left"}
              title="population cohorts show dramatic increase of 65-74 cohort over 2010's, absolutely"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            froth.app/stats
            <hr />
            <br />
            Covid variants before they emerge? G-d made humoral like 'survival
            of fittest' not 'dependence.' @newsmax we can assume this @CDCgov
            <br />
            <br />
            vaccine from brought forward demand is not free @newsmax @potus @ftc
            @fcc you cannot reward people to harm themselves that is a form of
            duress and criminal-intent can be exhibited as evidence deduced
            <br />
            <br />
            governments have to prove virus doesn’t condensate first before
            laying your fines? @uscourts (Warning+Fines) can be totally replaced
            by torts. No victim no crime (except for masks causing microscopic
            mold and virus without human cell)
            <br />
            <br />
            even if condensation was disproven, the choice would be the patrons’
            to make legally. The Goldman Sachs government is in the hole and
            need money. They are too corrupt to repossess and reimburse and move
            to http://3under2.us for free-rider-immutable service instead.
            <br />
            <br />
            Total neglectful and unreasoned corruption @PhilMurphyNJ @CoryBooker
            @SenatorMenendez where is your proof condensation isn’t real <br />
            <br />
            you don't even test countertops after talking to describe use of
            masks in-weight-of the costs of virus surviving in
            spit-induced-humidity to-which-it cannot condensate into the
            atmosphere
            <br />
            <br />
            It’s illegal to claim these saved lives without proof. @fcc like I
            cannot claim the lymphoma was caused by Moderna nor FDA say it was
            not
            <br />
            <br />
            Herd immunity is just as effective 50% forcing it and the rest
            getting it when they get it. MAYBE groups make virality-nodes but
            give me a break @bernardmcguirk3
            <br />
            <hr />
            Walensky is presenting abstract graphs of even mask-use correlation!
            We want countertop talking test! When do we want it? Now! @NSF
            <br />
            <br />
            When you have @NIH make your creativity for you
            <br />
            <br />
            Love when I request the countertop-talking-test and the shmoe on tv
            starts spitting a bit more @fcc @MonmouthHawks
            #PoliticalCommunication @Chinamission2un
            <br />
            <br />
            “The risk is too high” @CDCDirector to not have antigen-vaccine or
            lab-graft with FDA determination lymphoma WAS NOT linked to
            Moderna-choreographed and reported study @fcc
            <br />
            <br />
            They need more,every year, they say, and prohibit trade @ftc based
            on assumptions, one being condensation doesn’t happen @mit
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/1D6n2om9I6A"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Humoral response is more safe
            <br />
            <br />
            <a href="https://www.lls.org/news/the-leukemia-lymphoma-society-statement-on-covid-19-vaccine-distribution">
              "While the news of the approval is encouraging, and the pace of
              progress gives us all reason to be optimistic, more research is
              needed to determine the safety and efficacy of this and other
              COVID-19 vaccines for cancer patients" 49
            </a>
            <br />
            <br />
            <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html">
              Seven serious adverse events were deemed by blinded investigators
              to be related to vaccination. These included: intractable
              nausea/vomiting; facial swelling (two reports); rheumatoid
              arthritis; dyspnea with exertion and peripheral edema; autonomic
              dysfunction; and B-cell lymphocytic lymphoma. Through further
              investigation by the FDA, only three were classified as related to
              vaccination: one report of intractable nausea/vomiting and two
              reports of facial swelling. The FDA concluded that the possibility
              that the vaccine contributed could not be excluded for rheumatoid
              arthritis, dyspnea and peripheral edema, and autonomic dysfunction
            </a>
            . The FDA concluded that B-cell lymphocytic lymphoma was not related
            to vaccination.
            <a href="https://www.fda.gov/media/144452/download">citation</a>
            &nbsp;
            <br />
            I’ve made the statistical law that populations need to be shuffled
            for significance to be true
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <img
                style={{ height: "auto", width: "100%" }}
                alt="many 60+ now 5x than 1950, gradually"
                src="https://www.dl.dropboxusercontent.com/s/q8n2wh39sk1u0me/Population-Pyramid-1950-to-2100-793x550.jpeg?dl=0"
              />
            </div>
            School is one of the schemes to keep youth from earning wealth while
            they learn.
            <br />
            <br />
            Scholastic public administration? @Cornell If most are fat, old,
            afro or Hispanic & 80% effectiveness to boot. I can withhold people
            based on that correlation and not on subjective minimal viable
            product
            <br />
            <br />
            Sanjay Gupta extrapolates that 20-25% of healthcare professionals
            advise against non-humoral immunity
            <br />
            <br />
            <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
              50% worsened lymphoma obviously
            </a>
            , dependence can be assumed from survival of fittest logic . J&J not
            ad as being cultured w stem cells
            <br />
            <br />
            If rates rise, they do not. The most in your face fraud there is
            #cfius
            <br />
            <br />
            The right is not from Civil Rights it is free-rider-excluder
            enslaving those denied not based on mvp, of as evidenced as a
            cease-and-desist defamation order would require.
            <br />
            <br />
            Here, you must prove condensation does not happen @uscourts
            @neiltyson
            <br />
            <br />
            Imminent-danger-lethal, qualified-immunity-only-for-a-bad-shot not a
            car-face #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            You want to detain people without a crime? While you allow serflords
            and banksquatting? @BrooklynDA
            <br />
            <br />
            Bail strike you let people out @JCats2013 has been saying and now he
            has you on @FCC
            <br />
            <br />
            @aclu #cfius your inability to do math is not my mental illness, no
            humoral mind is ill by definition @JudiciaryDems @SenJudiciaryGOP
            <br />
            <br />
            If you can become mentally-ill from how you are raised, or
            emotional-trauma, you aren't ill @MerriamWebster
            <br />
            <br />
            The market is not when human labor is capital @MexOnu . The market
            makes things fair unless it is counterfeit in promise instead of
            profit-share/equity
            <br />
            <br />
            what is 1/death-expectancy not going to have diminishing marginal
            returns of antiviral, sanitation and therapeutics?
            <br />
            <br />
            NJ.com: "How will you tell your state representatives to vote on
            this bill?" COVID vaccine passports would be banned in N.J. under
            new bill
            <br />
            <br />
            "The bill would make it illegal for businesses, schools, doctors or
            government entity to ask about people's vaccine status, require they
            be vaccinated or prove they have been vaccinated."
            <br />
            <br />
            Nick Carducci: Discrimination is a case if it is not a minimal
            viable product, like in data-share or labor-determination per
            intent-to-harm count. It is not necessary because
            median-death-age/life-expectancy is 1, spittle condensation 98.6/72
            and mRNA can cause otherwise benign tumors to be oncogenic? We do
            not know about cancer more than malignancy spreading, but that is
            what mRNA does without an antigen to dissolve with: extra cells like
            a scar
            <br />
            <br />
            condensation (98.6deg/72deg) brings the virus up. Employment has
            been back to normal and old people are still getting checks from
            youth-dollar-equity
            <br />
            <br />
            From my calculations that leaves no one helped and fraud is
            employment back to normal. People don’t look for work & pick up the
            phone if getting the prisoner-dilemma-duress-pool
            <br />
            <br />
            humoral response is better and doesn’t create dependency.&nbsp;
            <a href="https://www.baltimoresun.com/coronavirus/ct-aud-nw-nyt--20210416-c6wkb3yucncerkrydtt7bsixmy-story.html">
              This article
            </a>
            &nbsp; moves to prove this... you’re only as good as your creativity
            in&nbsp;
            <a href="https://news-medical.net/news/20210222/Some-SARS-CoV-2-variants-evade-mRNA-vaccine-induced-humoral-immune-says-study.aspx">
              making your own mRNA
            </a>
            <br />
            <br />
            latent tb rises w condensation
            <br />
            <br />
            Couple that with the fact that condensation happens, you can boot
            the duress of entry without having to weigh the rights of
            individuals to business.......
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/mlEFtVlivjs"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Cory Andre: "you’re not a doctor so shut the fuck up"
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              "Research early in the pandemic suggested that the rate of
              asymptomatic infections could be as high as 81%. But a
              meta-analysis published last month1, which included 13 studies
              involving 21,708 people, calculated the rate of asymptomatic
              presentation to be 17%."
              https://www.nature.com/articles/d41586-020-03141-3
            </div>
            <br />
            Nick Carducci: "what the fuck are you; can you lose weight so you
            aren't susceptible to the [or any new ]virus for me?"
            <br />
            <br />
            Nick Carducci: "I am an expert in physics and law, this is my
            jurisdiction per transmissibility and civil rights"
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(255,200,200)",
                color: "rgb(210,120,160)"
              }}
            >
              Cory Andre I can get thinner, you’re going to stay this fucking
              stupid forever
            </div>
            ok. stay home!
            <br />
            <br />
            How would [health-]equity be harmed by pause of bloating demand for
            involuntary purchases. @US_FDA&nbsp;
            <a href="https://nature.com/articles/s41577-020-00434-6/figures/2">
              stop blaming low demand on your pause
            </a>
            <br />
            <br />
            how does it help population at all, regardless if it gives cancer or
            uses aborted cells for culturing... when spittle rises with
            condensation? The evidence shows death is exponentially correlated w
            life expectancy & either everyone has it or asymptomatic trans not
            happen @US_FDA
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              Jump-start-dependency @MartyMakary vs humoral-aptitude @ACLU
              <br />
              <br />
              Fatties, afros, Hispanic and old people will not be allowed in my
              events on Thumbprint because they are susceptible to carrying and
              infecting others with undiscovered virus’ @JohnsHopkins @RutgersU
              @HealthNYGov
              <br />
              <br />
              Or&nbsp;
              <a href="https://www.ksdk.com/article/news/health/coronavirus/vaccine/verify-aborted-fetal-cell-lines-johnson-covid-19-vaccine/63-6449ab3c-ade2-422b-9e5a-4503700a0ec0">
                fetal-cells
              </a>
              . Your choice!
            </div>
            Dec 2 2021 Bo Snerdley reports aborted fetus' are harvested. For
            vaccines? Or stem cells? Does bone marrow&nbsp;
            <a href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix">
              transplant
            </a>
            &nbsp;to skeletal muscle require this?
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/m55ZAB47LHg"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Nick Carducci doctors are not financially/legally inclined to not
            act, and they mostly get paid for acting too boot. I am also expert
            in game theory and motive
            <br />
            <br />
            Nick Carducci heat rises, electrons pull. E=mc^2 is idiotic and
            debt/invoice/insurance is self-harm. I’m smarter than everyone. GDP
            is mostly debt and not making it per person is laughable. Experts
            are wrong when they are paid for a certain outcome. I’m smarter than
            everyone. I invented the circular magnetic engine and royalty
            contracts with max profit. I also divulged the fraud of velocity of
            m1 and GDP. It is fake and mostly promises, counterfeit. JHU will
            fail you if you say principal must equal outlays and interest is
            counterfeit. They call it output. Sheesh.
            <br />
            <br />
            Nick Carducci we are talking about me forcing you to come to my
            events Thumbprint wavv.art only if you lose weight
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              Rooster claims credit for the morning; exponential correlation of
              death to life expectancy @kilmeade @MartyMakary you cannot have it
              both ways. if the number of symptomatic is 70% and not 19% then
              asymptomatic transmission is not a good reason to forbid your null
              hypothesis
            </div>
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/-spTY4y8euI"
              }
              float="left"
              title="Ford Brewer MD bacteria notions, reasonable doubt"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            right, the covid vaccine causes this side effect in some patients,
            usually 2-4 days afterwards, under the arm pit of the side where the
            jab was. It resolves to normal in about four weeks. It’s actually
            considered to be a good thing. *This is not lymphoma.
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              you can’t say that lymphadenopathy is not lymphoma conclusively;
              what is the difference? Only an analysis of their life, and how
              fast the tumor moves. The growth likely is not regular-enough to
              not be cancerous. If it is even a little involved, it is my
              choice, especially without proof virus doesn’t rise WITH
              condensation. It’s not a proven justification to be denied
              inclusion, let alone the risk outweighing EXPONENTIAL CORRELATION
              WITH LIFE EXPECTANCY/death per age
            </div>
            <br />
            Stu Goldstone: "I hope for your sake that you go back on your meds."
            <br />
            <br />
            Nick Carducci: "I haven’t been on meds ever except saying I can’t
            concentrate then got Ritalin to study from JHU[, but got kicked off
            wrestling for performance-enhancing weed, out of hands of
            prescription monopsony and in our&nbsp;
            <a href="https://vaults.biz">commodity-regional-money-consortium</a>
            ]"
            <br />
            <br />
            Arch McKown in this case, it’s not lymphoma. The lymphadenopathy
            resolves in a few weeks. With lymphoma (since you wrote lymphoma I’m
            going with it), it would present as rapidly growing and bulky
            lymphadenopathy that don’t resolve in a few weeks. Hope that helps
            to clarify for you.
            <br />
            <br />
            Nick Carducci that’s fine, I will make those distinct in my further
            discussions, but what do you think about how B-cells become
            oncogenic? What would be regular? I assume it is only when it is
            sparring with an antigen, not guiding the formation of an antibody
            by graft. This process is similar to herd-dependency. This is not
            what the Big-bang intended for us, we can defeat gain of function
            D416G mutation with our humoral response and be sure it won’t be
            prone to oncogenesis the next time our B-cells start up
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7561578/
            <br />
            <br />
            it’s not the author’s opinion. It’s an observable finding that’s
            written up in a peer reviewed article with citations in PubMed.
            Lymphadenopathy is NOT lymphoma. Sheesh.
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              https://www.aafp.org/afp/2016/1201/p896.html, "history and
              physical examination alone usually identify the cause of
              lymphadenopathy" is juvenile science. try it in a court room
            </div>
            <br />
            This guy [NJ Gov Phil Murphy]worked at Goldman Sachs. I bet if bonds
            were prosecuted as illegal, the treatment would be different than
            “grants” with strings attached. Fraud in broad daylight just gets
            ignored #COVID19
            <br />
            <br />
            I have been coding nonstop since May2019 and my upper back is
            literally so bad, probably for neck bridging in wrestling..., that I
            go to crack it - just one more time - and feel my throat move
            <br />
            <br />
            Two wrongs make a right if it’s justice @asp
            <br />
            <br />
            “trust government, trust non-paid experts of a principle and majorty
            50-50, trust Americans” @tatereeves
            <br />
            <br />
            Logic of supply and demand says the most efficient is when the
            population is frugal in supply and demand, but the output on the x
            axis - if prices are relative and ignoring price changes and
            repossession without reimbursement as traumatic adjustments - is
            merely a trade found,...
            <br />
            <br />
            ... and acted on. @ChrisSalcedo17
            <br />
            <br />
            <TwitterTweetEmbed
              style={{ width: "300px", float: "left" }}
              key="1425460613711605760"
              tweetId="1425460613711605760"
            />
            19% are symptomatic, I can’t let this happen @US_FDA @ftc
            @JohnsHopkins @RutgersU @NYGov,&nbsp;
            <a href="https://www.nature.com/articles/d41586-020-03141-3">
              null hypothesis is huge here
            </a>
            <br />
            <br />
            “Attempting to breath is not, not compliant” duress cases. I can’t
            breathe, says Floyd. “he’s talking,” officer Tao says to a bystander
            complaining about force used on a guy likely hallucinating
            <br />
            <br />
            no proof it doesn’t go straight up with the condensation, which is
            98.6degrees and air is usually 72degrees. That would be the only
            grounds for a non-inclusive-mvp that isn’t breaking Amendment 13 by
            free-riding on the excluded’s static societal contributions
            <br />
            <br />
            Socialism in the streetsMicrophone, communism in the (spread)sheets
            @TheDemocrats @GOP @NJGOP @njassemblydems
            <br />
            <br />
            Marx scarcely talked about communism @LidiaNews @RepPeteKing
            <br />
            <br />
            I'm gonna allow users to report libel @facebook so many people are
            calling me mentally ill for saying the difference between
            lymphadenopathy and lymphoma is subjective COVID-19 Vaccines and
            Cancer COVID-19 vaccination answers to frequently asked questions
            about vaccination and cancer-updated April 12th
            news.cancerconnect.com
            <br />
            <br />
            Resisting arrest? Was this a sting or an anonymous call? The
            arresting officer said he was moving funny in the store,
            confrontational #ChauvinTrial #MinnesotaIsGuilty let him go
            <br />
            <br />
            “The manifestation of the drug influence can constitute a threat,”
            then agrees that it is their choice and do not justify use of force.
            Let’s get Jamie Dimon and @boeing now for counterfeit in outstanding
            per treasury
            <br />
            <br />
            If he runs, let him go. It’s all digital anyway
            <br />
            <br />
            prone-control is not use of force, but should be used as
            active-resisting. ok. but you have the address of Floyd right? let
            him go #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            he was hallucinating the SUV was evil
            <br />
            <br />
            if cops can brandish, people can brandish to not incriminate
            themselves
            <br />
            <br />
            Not a criminal, if not convicted for offense {">"} threat by the
            bankquatting & conspiring serflord cops. http://3under2.us; & still,
            cops are not allowed to crash into a fleeing subject or allow
            counterfeit or duress-borne invoice & coagulated demand
            http://foiegras.life
            <br />
            <br />
            <TwitterTweetEmbed
              style={{ width: "300px", float: "right" }}
              key="1421471623136358405"
              tweetId="1421471623136358405"
            />
            "If your mask gets moldy, perhaps it is time for a fresh one."
            <br />
            <br />
            virus are incredibly small and thereby fast; humidity is the
            making-of-a-cesspool
            <br />
            <br />
            We do not fully understand what is the regulation of B-cells, it is
            not reasonable to&nbsp;
            <a href="https://news.cancerconnect.com/treatment-care/covid-19-vaccines-and-cancer-FQLL1FPx7kyOUcSjmR2JNQ#:~:text=Given%20patients">
              force people
            </a>
            &nbsp;to be included in the economy and not be free-rode for static
            contributions to society that the prejudice benefit from.
            Additionally, virus would have to be proven to not&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">rise to sky</a>
            &nbsp;with condensation given water-adhesion. There has yet been a
            test that virus is recovered on countertop-talking to boot.&nbsp;
            <b style={{ color: "blue" }}>
              <a href="https://www.pennmedicine.org/updates/blogs/health-and-wellness/2021/march/covid-vaccine-and-mammograms">
                Penn is assuming
              </a>
            </b>
            <br />
            <br />
            The dysregulation happens with mRNA grafts, not vaccines, to which
            B-cells are dealing with a foreign antibody instead of sparring with
            an antigen (not to mention dependence of the facilitation of
            B-cell's humoral antibodies which work just as well and age is
            exponentially correlated with age and life expectancy). We do not
            know this, but in your opinion, think in a vacuum would a cancer
            form, or just tumor, or neither? What is the cause of those. I will
            be posting from mortality.org [fingers-crossed] life expectancy over
            deaths by age on humanharvest.info for legal advice and medical
            research. The higher population dying is expected.
            <br />
            <br />
            just like masks make mold and make virus worse, b-cell dysregulation
            happens by graft, you don’t need people to die to realize this. mRNA
            is not approved by fda/liability still right? We know leukemia has
            worsened oncogenesis. Stupid to think mRNA lymphoma wouldn’t happen
            when it is packed with B-cells
          </div>
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ springsummer2021: !this.state.springsummer2021 });
            }}
          >
            <h3>springsummer2021</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.springsummer2021 ? "relative" : "fixed",
              zIndex: this.state.springsummer2021 ? "0" : "-9999"
            }}
          >
            causes lymphoma; more significant than graft vs humoral response to
            D416G @CDCgov @NIH
            <br />
            <br />
            <a href="https://ourworldindata.org/grapher/number-of-deaths-by-age-group?country=~OWID_WRL">
              -2017 (World)
            </a>
            / &nbsp;
            <a href="https://www.google.com/publicdata/explore?ds=j0r9lucsi4q1d_#!ctype=l&strail=false&bcs=d&nselm=h&met_y=crude_rate&fdim_y=country:US&scale_y=lin&ind_y=false&rdim=age_group&idim=age_group:1-4:10-14:75-84:65-74:55-64&ifdim=age_group&hl=en_US&dl=en_US&ind=false">
              -2017 (U.S. - Life Support)
            </a>
            / &nbsp;
            <a href="https://www.prb.org/countries-with-the-oldest-populations/">
              old
            </a>
            / &nbsp;
            <a href="https://www.medrxiv.org/content/10.1101/2020.07.23.20160895v7">
              proof
            </a>
            / &nbsp;
            <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/articles/comparisonsofallcausemortalitybetweeneuropeancountriesandregions/januarytojune2020?#:~:text=5.">
              -6/2020
            </a>
            <AgeAdjustedMortality />
            "Memory B cells display clonal turnover after 6.2 months, and the
            antibodies that they express have greater somatic hypermutation,
            resistance to RBD mutations and increased potency,&nbsp;
            <a href="https://www.nature.com/articles/s41586-021-03207-w">
              indicative of continued evolution of the humoral response
            </a>
            ." Why would you want to&nbsp;
            <a href="https://www.medrxiv.org/content/10.1101/2020.09.22.20192443v1">
              ruin that
            </a>
            ? Humoral is more adaptive than grafting lessons can ever be
            <br />
            <br />
            Free rider religion of self on civil rights act let alone exclusion
            @HealthNYGov @RutgersU @JohnsHopkins
            <br />
            <br />
            "you have a right to your opinion........you can also chose another
            place to go to school." two counts of exclusion by (1) duress & (2)
            no-evidence of non-cough transmission is illegal, free-riding
            JHU-supply elsewhere in the economy of those excluded. The
            exponential correlation with life expectancy is also laughable as a
            permitted manner of duress of an exclusionary-mvp
            <br />
            <br />
            What proof is not due to mask humidity mold elongating gestation of
            virus without human cell and rather virus not going up to atmosphere
            or ceiling in condensation; can we have a study of
            countertop-talking? @JohnsHopkinsSPH
            <br />
            <br />
            Non-malignant lymphadenopathy is diagnosed by “history and physical
            examination.” "Unexplained Lymphadenopathy: Evaluation and
            Differential Diagnosis Lymphadenopathy is benign and self-limited in
            most patients." (aafp.org,
            https://www.aafp.org/afp/2016/1201/p896.html), "Etiologies include
            malignancy, infection, and autoimmune disorders, as well as
            medications and iatrogenic causes. The history and physical..."
            <br />
            <br />
            The mRNA grafts aren’t saving lives, deaths are exponentially
            correlated with age @fda https://aafp.org/afp/2002/1201/p2103.html
            you ran out of vulnerable old people, now the malignant
            over-production of b-cells will occur. (aafp.org, Lymphadenopathy
            and Malignancy), 'The majority of patients presenting with
            peripheral lymphadenopathy have "easily identifiable causes" that
            are benign or self-limited. Among primary care patients presenting
            with lymphadenopathy, the...'
            <br />
            <br />
            “Wartime effort” is fraud like gold confiscation in 1932. @ftc @fcc
            @TheJusticeDept duress religion of self. Hesitancy is not your
            choice and you certainly cannot mislead. Reporters to @fda now
            describing transparency for & doing no harm as a "trip-wire"
            https://nature.com/articles/s41577-020-00434-6/figures/2
            <br />
            <br />
            that is just the opinion of the writer on the findings. How dare you
            take his assumptions as evidence of it not being dysregular
            <br />
            <br />
            Countertop-talking test, Mr. Brown taught me about condensation at
            RFH before weather systems at JHU
            <br />
            <a
              style={{ textDecoration: "none", color: "rgb(230,230,255)" }}
              href="https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm?fbclid=IwAR3lAFgwUaL918wGyjBjWkGa9V0dlVJ4Ufh4LMd53XqEOvuOVoo7v_-V5rU"
            >
              https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm?fbclid=IwAR3lAFgwUaL918wGyjBjWkGa9V0dlVJ4Ufh4LMd53XqEOvuOVoo7v_-V5rU
            </a>
            <br />
            <br />
            Joan Hamsteak: "Fully-vaccinated, we kinda made it work." Ma'am. The
            graft does as good as natural antibodies in defending against D416G
            mutations of the "variant(s)" and it actually causes or
            worsens&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/33591026/">cancer</a>
            &nbsp;so, like the mask fosters mold for virus-chia
            <br />
            <hr />
            <br />
            <a href="https://stm.sciencemag.org/content/13/577/eabd2223">
              COVID-19 spikes SPIKE
            </a>
            : "Are you worried? Dr. Fauci is urging everyone to get the shot and
            keep wearing masks. #COVID19 (newjersey.news12.com)"
            <br />
            <br />
            Dr. Fauci: "Worried the US could see COVID-19 spike similar to
            Europe A new warning from Dr. Anthony Fauci – he now says he’s
            worried the U.S. could see a COVID-19 spike like the one Europe is
            currently experiencing."
            <br />
            <br />
            Which shot (antibodies are same proteins as antigens) for which
            virus
            <br />
            <br />
            @SpeakerPelosi' policy takes labor from elsewhere; doesn’t increase
            supply @ftc @TheJusticeDept
            <br />
            <br />
            “Budget reconciliation” is illegal to use as descriptors of spending
            but book value @cnn @SpeakerPelosi
            <br />
            <br />
            Why would you extend ACA instead of ban invoices. If you are
            studying the economy holistically it makes no sense to do what you
            do except to harm @BarackObama @POTUS @MittRomney
            <br />
            <br />
            "GET GADDAFI!"
            <br />
            'appease the finances,' don't diminish anecdotes like they are at
            all different than samples when the population is unshuffled,
            voluntary is the next best to perfectly-random
            <br />
            <br />
            SCHEDULE 1 FENTYNYL GOOD FOR iron lung patient monopsony. all my
            money is in cow-insulin
            <br />
            <br />
            Sen.Durbin: "This is great news. I commend the Biden Administration
            for opening this special enrollment period and I would encourage
            every uninsured American to #GetCovered by going to
            http://healthcare.gov today."
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/Jxj0-TaTm4o"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            More than 528,000 Americans have signed up for Affordable Care Act
            coverage on the federal exchange in the first six weeks of the
            special enrollment period President Biden opened for the uninsured
            https://cnn.it/39STm9H
            <br />
            <br />
            <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
              Prisoners’ dilemma duress is illegal
            </a>
            . If none of us put in, our prices would drop. This is&nbsp;
            <a href="https://bankingisnot.biz">illegal</a>&nbsp;by prohibiting
            trade and monopsony by duress of bloated demand and invoices
            (counterfeit)
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/2xsbg2n4mhw6ud9/GraftPassport.jpg?dl=0"
              />
            </div>
            <br />
            ".025% get skin rashes," more get blot clots and b-cell
            dysregulation (cancerous)
            <br />
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/ne3liq4zpxuu04l/StarveTheUnjabbed.jpg?dl=0"
              />
            </div>
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/MTM2Pw73Ol0"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h1>Starve the unjabbed</h1>
            “White House will make vaccine passport, you won’t have a job
            without it”
            <br />
            <br />
            Die please, Doctor. Duress and exclusion without evidence of spread
            without touching is ILLEGAL for free-riding static contributions to
            society by the victimized anti-vaxxer/submissability-of-evidence
            <div
              style={{
                backgroundColor: "white",
                color: "rgb(70,20,20)",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px"
              }}
            >
              Corporate tax of 28% is to go public, deducting wages is not
              appropriate. It should be zero if http://3under2.us supplants
              income tax (which is a war crime instilled in 1937)
              <br />
              <br />
              This, nor is the use of credit (counterfeit-in-contract),
              investment cc: @BrookeBaldwin
              <br />
              <br />
              Investment is
              profitable-exclusively-from-a-return-of-capital-gain-or-profit,
              not to launder-under-duress down-payment-and-repossession or
              impossibility-of-settlement-and-cloture
              <br />
              <br />
              It’s all because of credit spending, revenue bypasses labor to
              profits. In an efficient economy, there would be no profits
            </div>
            <br />
            Unhealthy people are Unhappy and die when tested with covid and 19%
            are symptomatic, null hypothesis is huge here @NSF calls
            https://magnate.company unoriginal
            <br />
            <br />
            Civil liberties is a case in favor of the asymptomatic antivaxxer
            being included, && you without evidence Latent TB is not contagious
            but Covid-19-causing-virus one of many probably gained-lab-function
            and “vaccine”/graft b-cell dysregulation duress can only stay home
            @CNN
            <br />
            <div
              style={{
                margin: "10px",
                padding: "10px",
                color: "black",
                borderRadius: "10px",
                backgroundColor: "rgb(220,250,200)"
              }}
            >
              @SaverParty if the cakes were printed, this shouldn't be legally
              ok to exclude unless "graphic" in accordance with some law please
              please please (public indecency)
              <br />
              <br />
              Especially if the gain-of-function, from lab-or-bat, does not
              require spittle && there-not-being-tests-of-virus-on-table as for
              Latent-TB
              <br />
              <br />
              I obey from exclusion if I am symptomatic, but get the
              “vaccine”/graft to please you @cnn won’t even say your doctoring
              consults’ name @BrookeBaldwin . Private business is grave
              violation of exclusion without evidence of virus transmission by
              talking, or countertops. Just assumed
              <br />
              <br />
              @avenaim I fail to understand how a vaccine passport violates your
              privacy. It just says you got vaccinated.
              <br />
              <br />
              @Jim_Zakany MAGA people don't want to get vaccinated or wear
              masks, but they ALSO don't want to suffer any consequences for
              their behavior. They want to go to concerts and on trips, but they
              don't really care if they kill others in the process.
            </div>
          </div>
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ late2020: !this.state.late2020 });
            }}
          >
            <h3>late2020</h3>
          </button>
          <br />
          <div
            style={{
              position: this.state.late2020 ? "relative" : "fixed",
              zIndex: this.state.late2020 ? "0" : "-9999"
            }}
          >
            moldmask.co, cocaine is money, purity health dpt @SaverParty You are
            selfish for forcing people to risk b-cell oncogenesis to be
            included. You can only exclude and be free-rider if symptomatic.
            Mask causes mold and mold worsens virus
            <br />
            <br />
            What makes the “vaccine”/lab-graft do that other cold antibodies
            don’t?
            <br />
            so far experts say there isn’t a difference
            <br />
            <br />
            It’s the same antibodies as for the cold, latent TB is more
            contagious and the CDC says it requires cough.
            <br />
            B-cell oncogenesis is duress and mask causes mold which worsens
            virus
            <br />
            <br />
            “Vaccine”/graft is like whack-a-mole spurring a new mutation or it
            is formed from non-virus or cellular material. If it can be
            destroyed it can be created
            <br />
            <br />
            I’ve heard the “vaccine”/grafts work perfectly on a select variant,
            I’ve heard they invoke antibodies that work against cold too, I’ve
            heard the cold/natural antibodies do not work!!!! Is this antigen
            not natural?
            <br />
            <br />
            <a href="https://news.ncsu.edu/2020/05/how-long-can-viruses-survive/">
              Virus cannot live without reproducing
            </a>
            , how long can virus survive in a hijacked cell?
            <br />
            <br />
            I think virus come not from other virus exclusively.
            <br />
            <br />
            "Unless we stop the virus' around the world, we aren't going to be
            in good shape [gain-of-function(Fauci, CDC,
            NIH),bat(WHO,CHINA,WABC)]" 3% already had it near batcave
            (asymptomatic, virus' plot before acting) - Dr.Miller
            <br />
            <br />
            David Wildstein of the nj globe want women reproductive services to
            be monopsonized and ordained by gov hands
            <br />
            <br />
            Don't want to scare, but want to be frank" 5 weeks after first dose
            of getting cold antibody for this (why is population stats delayed
            three months as of 4/1/2021?
            <br />
            <br />
            “About 25 to 33% of those who are hospitalized need intensive care
            [ventilators?]”
            https://www.healthgrades.com/right-care/coronavirus/how-hospitals-treat-covid-19-patients...
            masks can help the virus’ survive & replicate by locking in humidity
            moldmask.co 19% of cases are symptomatic; like 1/4 the population
            has latent TB, many probably have asymptomatic covid without
            testing. My analysis would not explain increasing hospitalization
            but for the funding
            https://www.hhs.gov/sites/default/files/covid-19-high-impact-allocation.pdf
            invoices are theft and these grants from our equity only raises
            prices for services
            <TwitterTweetEmbed
              style={{ width: "300px", float: "right" }}
              key="1420593721096253440"
              tweetId="1420593721096253440"
            />
            <h1
              style={{
                fontFamily: '"Pacifico", sans-serif'
              }}
            >
              Don't knock it till you try it
            </h1>
            Sanjay: 'The "vaccines"/grafts have saved millions of lives' (if you
            cannot make that claim in court can you make it in advertising or do
            I have to sue and Fauci: "Going all out on the vaccine on Jan 10th,
            2020 was the best decision in terms of intervention ever made" (not
            moving would have been better)
            <br />
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              do they check if there are virus usually
            </a>
            <br />
            <br />
            Correlation is NOT proof positive
            <br />
            <br />
            <h1>Tallyman, Tally Me Banana</h1>
            Will they kill non-comorbid people so we cannot conclusively assign
            blame to their "vaccine"/graft? If they think they would not get
            caught (or prosecuted) answer that with can we blame the NIH
            (conciousness of guilt) for admitting guilt by canceling funding for
            experimentatin with this virus and Fauci's apparent amusement in
            "catasrophe" or the meat/pore transmission is the reason for
            virality alone
            <br />
            <br />
            you cannot ban people from travel based on duress, especially since
            there is no proof spittle doesn't rise to ceiling if hot or fall if
            heavy with protons right&nbsp;
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ina.12639">
              away, (retrospective has no controlled prevalence of vivo
              insemination)
            </a>
            , or it is in the meat like it has been for decades. a gun doesn't
            shoot itself - this smells of insurance fraud
            <br />
            <br />
            Vietnam had 35 people die because they aren't fat and old, the
            deaths are normal except the print of abject murder given it stops.{" "}
            {/*after the vaccine most people get covid 2 weeks after vaccine? a lot also at the time... what a bullshitter dr michalos is.*/}
            <br />
            <br />
            Why does this guy not have "the ability to test for covid?"
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/lsk8ayq9navh21k/BorderNoTest.jpg?dl=0"
              />
            </div>{" "}
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1P1LkeKv8TS-X4qER0O0EaT7WDuwwZozN/preview"
              }
              float="left"
              title="MAGA etf on Newsmax"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “It’s spreading at the border.” He even looks like Trump&nbsp;
            <span
              role="img"
              aria-label="squirrel bottom-left white-circle cancel euro-old-man clown-face"
            >
              🐿↙️⚪️🚫👨🏻‍🦳🤡
            </span>
            &nbsp; Imagine insuring injuries with false bid pools with state
            victim instead of regulating?
            <br />
            <br />
            The covid family has been around for decades. Can someone cite
            controlled evidence that it is deadlier than previous years? Why is
            population data still delayed 2 months? This is in the meat by your
            own reporters, meaning it was distributed in us food networks
            conclusively. I’m not going to be wearing a tie/noose to subjugate
            my points
            <br />
            <br />
            2-weeks to form antibodies just the same (monoclonal)! Same
            antibodies made for the polychain-reaction antiGEN test (
            <a href="https://www.addgene.org/protocols/pcr/">PCR</a>) as for the
            cold.
            <br />
            <TwitterTweetEmbed
              style={{ float: "right", width: "300px" }}
              key="1421858300979732480"
              tweetId="1421858300979732480"
            />
            "Pfizer/BioNTech say data suggests vaccine 94% effective in
            preventing asymptomatic infection" doesn't prove it stops
            transmission, or even causal vs prevalence
            <span style={{ textDecoration: "line-through" }}>
              , especially when only 10% have been vaccinated &nbsp;and cases
              are at 29% of what they once were in the bottom of the&nbsp;
              <a href="https://www.reuters.com/article/health-coronavirus-pfizer-israel-int-idUSKBN2B31IW">
                same report
              </a>
              .
            </span>
            <br />
            Isn't it great that the&nbsp;
            <a href="https://www.justice.gov/">State</a>&nbsp;can brandish with
            fake facts, but not&nbsp;<a href="https://www.ftc.gov/">people</a>?
            Really helps get our shit out the door and be able lay-off our
            products to people, without a hitch
            <br />
            <br />
            Sars-Cov-2 has been around for decades retarded bitch
            <br />
            <br />
            Biden claims companies will not produce without gorging them with
            cash. I am working pro-bono people like gov rip-off without
            attribution or penalty so far.
            <br />
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://squatcommune.com">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/h6hv3u3pysg1om7/SpecialBidenFund.jpg?dl=0"
                />
              </a>
            </div>{" "}
            <br />
            <br />
            Psaki: "lending vaccines to canada," she must be talking about the
            &nbsp;
            <a href="https://squatcommune.com">mirrorcode</a>
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://twitter.com/logindotgov">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/5godn380eqp1a57/MarkeySlavery.png?dl=0"
                />
              </a>
            </div>{" "}
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://twitter.com/logindotgov">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/oe1upothtyrd3jt/Screen%20Shot%202021-03-22%20at%202.13.28%20PM.png?dl=0"
                />
              </a>
            </div>
          </div>
          <h1>
            <a
              style={{
                color: "rgb(112, 101, 55)",
                fontFamily: '"Pacifico", sans-serif'
              }}
              href="https://www.ksdk.com/article/news/health/coronavirus/vaccine/verify-aborted-fetal-cell-lines-johnson-covid-19-vaccine/63-6449ab3c-ade2-422b-9e5a-4503700a0ec0"
            >
              humanharvest
            </a>
            &nbsp;
            <a
              style={{ fontSize: "14px" }}
              href="https://classicreload.com/lemmings.html"
            >
              follow
            </a>
            &nbsp;the&nbsp;
            <a
              style={{ fontSize: "14px" }}
              href="https://pdxscholar.library.pdx.edu/cgi/viewcontent.cgi?article=2428&context=open_access_etds"
            >
              leader
            </a>
          </h1>
          <span
            style={{
              position: "absolute",
              fontSize: "8px",
              color: "rgb(82, 71, 25)",
              transform: "translateY(-5px)"
            }}
          >
            letting-off inventory we previously invested in!&nbsp;
            <a href="https://www.bmj.com/content/372/bmj.n149">
              Fuck do no harm
            </a>
            , warn first... don't break the&nbsp;
            <a href="https://saverparty.xyz">paid-accountability</a>
            &nbsp;board's rules
          </span>
          <br />
          <h6>
            "What is Florida doing right?" asks Jake Tapper, CNN. They ran out
            of old people. adjust for age and the "vaccine"/graft kills more
            people compared to other times in recent history.
            <br />
            Impossible to see long term effects, namely B-cell oncogenesis which
            is slower to form, since the vaccines began testing. A 28 year old
            dying is not worth the risk of getting&nbsp;
            <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
              our diagnosis
            </a>
            <a href="https://www.nih.gov/news-events/nih-research-matters/immune-cells-common-cold-may-recognize-sars-cov-2">
              cold antibodies
            </a>
            . Fix death for age it is normal.&nbsp;
            <a href="https://www.prb.org/countries-with-the-oldest-populations/">
              First world countries have a lot of old people
            </a>
            &nbsp;this decade https://www.nature.com/articles/s41598-020-73777-8
            <br />
            <br />
            "It would take another decade before companies looking at
            RNA-interference therapeutics — which rely on RNA’s ability to&nbsp;
            <a href="https://www.nature.com/articles/d41586-021-00019-w">
              selectively block
            </a>
            &nbsp;the production of&nbsp;
            <a href="https://www.frontiersin.org/articles/10.3389/fchem.2020.589959/full">
              specific [cancerous] proteins
            </a>{" "}
            [that it tends to produce]"
            <br />
            <br />
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              do they check if there are virus usually
            </a>
            <br />
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK21523/">
              how many virus can one DNA of virus encode?100-200
            </a>
            <br />
            <a href="https://www.britannica.com/science/virus/Size-and-shape">
              how much DNA can one virus protein contain?500,000-2,500,000 base
              pairs
            </a>
          </h6>
          <h3 style={{ marginTop: "10px" }}>
            relationships between disparate variables is not&nbsp;
            <a href="https://bgr.com/2020/09/13/seeds-from-china-mystery-explained-suspected-brushing-campaign/">
              proof
            </a>
            <br />
            nor is it proof that it (wouldn't) stops spreading only with
            (without) the virus and no&nbsp;
            <a href="https://nationalsecuritycasino.com">thumbed-scales</a>
          </h3>
          <h3>
            In fact, it requires gestation time to percolate and requires&nbsp;
            <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
              spittle
            </a>
            &nbsp;which&nbsp;
            <a href="https://en.wikipedia.org/wiki/Atmospheric_circulation">
              drops unless cold
            </a>
            , no lateral movement
          </h3>
          <h3>
            We still support&nbsp;
            <a href="https://foiegras.life">insurance fraud</a>
          </h3>
          See our other product, <a href="https://moldmask.co">moldmask</a>
          <h2>
            Only future "Vaccine"/grafts of mRNA (not latest 2021
            Moderna/Pfiezer) is proposed as an unconfirmed solution to not be
            oncogenic by&nbsp;
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7264927/?fbclid=IwAR3YJK5KeMMHKlePeZN0lQb0cZz6tAb2SQZO9bKJl9jEE6aQIE08nbUgUNE">
              "culturing" B-cells or creating a grandiose "universal B-cell"
            </a>
          </h2>
          <br />
          Help is on the way -&nbsp;
          <a href="https://foiegras.life">juice those consumers</a>! The rooster
          claiming credit for the morning. Mistaking the forest for the trees.
          <br />
          <div
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              backgroundColor: "rgb(50,50,50)",
              color: "rgb(200,200,200)"
            }}
          >
            SanityCheck
            <br />
            <h1>Stop claiming the virus' slowing,</h1>&nbsp;while Correlative
            data shows people&nbsp;
            <a style={{ color: "rgb(150,220,255)" }} href="https://moldmask.co">
              stop masking
            </a>
            /
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.prb.org/countries-with-the-oldest-populations/"
            >
              old
            </a>
            +
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.nature.com/articles/s41598-020-73777-8"
            >
              morbid
            </a>
            &nbsp;people die, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is proof vaccines
            work
            <br />
            now sanjay gupta (CNN) is saying the people that die from graft they
            gave non-information about killing people is not different for
            normal vaccine action, but ignoring the fact that if you fix the
            data they give us for age there is also no change over the course of
            2020-2021 compared to other years. The death rate has been expected
            to rise since 2013 due to average lifespan * populationByAge. He
            needs to be concrete and not so wishy-washy of his version of the
            null hypothesis/scientific method
            <br />
            <br />
            It is not free it costs in equity-split and 4200% (
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://micro-theory.com"
            >
              debt:cash
            </a>
            ) inflation, medishare adds additional (people:
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/"
            >
              supply-ask
            </a>
            ) inflation, monetary&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.zippia.com/landlord-jobs/demographics/"
            >
              inflation minus housing
            </a>
            &nbsp;is 102% which is counted as growth... which should by&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://saverparty.xyz"
            >
              (GDP/P) - NewMoney - NewDebt
            </a>
            <br />
            <br />
            You can vote on&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://thumbprint.us"
            >
              thumbprint
            </a>
            &nbsp;our elections don't need to be susceptible to no Driver's
            license p2p check
            {/*<br />a PA county had more votes than people because of this - why
          doesn't their system even register votes&nbsp;
          <a
            style={{ color: "rgb(150,220,255)" }}
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
          >
            Put
          </a>
          &nbsp;per person?*/}
          </div>
          <br />
          Thank you CNN, I agree: people that are hesitant to get the
          "vaccine"/graft will 'need convincing' with representaions by their
          favorite artists. I must admit, I am instilling duress without
          mentioning that I cannot wait to hang out with you in jail
          <br />
          <br />
          <div
            style={{ position: "relative", maxWidth: "400px", width: "100%" }}
          >
            <a href="https://www.krispykreme.com/">
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/6rd01u8rfqhejxt/KrispyKreme.jpg?dl=0"
              />
            </a>
          </div>
          <br />
          <br />
          Insiders agree
          <br />
          "The&nbsp;<a href="https://humanharvest.info">"'vaccine'/graft</a>
          &nbsp;is a&nbsp;
          <a href="https://link.springer.com/chapter/10.1007/978-3-540-72167-3_11">
            miracle
          </a>
          &nbsp;of&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.sanjay.current.scrollIntoView("smooth");
              this.setState({ highlightSanjay: true });
              setTimeout(
                () => this.setState({ highlightSanjay: false }),
                10000
              );
            }}
          >
            science
          </span>
          ," exclaims Biden.
          <br />
          Newsmax asks a guest consult, "why not give credit to HE WHO SHALL NOT
          BE NAMED"
          <br />
          Really grateful for conflicted-interest so-called, "bona fide experts"
          to mislead people saying it is remarkable that it was done when it was
          only skipped testing? That’s remarkable in a bad way. B-cells are
          fragile, but who cares? not oour unbeknowest accostumers
          <br />
          <br />
          "We don't know how we are culturing these tissues," says&nbsp;
          <a href="https://twitter.com/richvaldes?lang=en">Rich Valdes</a>, "but
          most vaccines are cultured with placenta or umbilical cord"
          <br />
          <br />
          Why shouldn't we be&nbsp;
          <a href="https://en.wikipedia.org/wiki/Microbiological_culture">
            grafting
          </a>
          &nbsp;like this? Chromosome discrepancy, who cares?
          <br />
          <br />
          <div
            style={{ position: "relative", width: "100%", maxWidth: "300px" }}
          >
            <img
              style={{
                width: "100%",
                height: "auto"
              }}
              alt="my twitter @nickcarducci account has deleted my work and evidence for multiple financial crime cases before what is probably locally stored"
              src="https://www.dl.dropboxusercontent.com/s/ui8zf22lo7qko3f/Screen%20Shot%202021-03-15%20at%2011.04.06%20AM.png?dl=0"
            />
          </div>
          <br />
          <a href="https://vaults.biz">Wow</a>, two years of&nbsp;
          <a href="https://vianickcarducci.medium.com">drafting</a>&nbsp;for my
          book&nbsp;
          <a
            href="https://saverparty.xyz"
            style={{ color: "black", textDecoration: "underline" }}
          >
            Banking is not a Business
          </a>
          &nbsp;and evidence for my&nbsp;
          <a href="https://www.researchgate.net/project/Class-action-suit">
            Class Action Suit to repair counterfeit damages
          </a>
          &nbsp;as well as my&nbsp;
          <a href="https://nationalsecuritycasino.com">
            government monopsony, malfeasance, collusion, and slavery case
          </a>
          <br />
          <br />
          <div
            style={{ position: "relative", width: "100%", maxWidth: "300px" }}
          >
            <img
              alt="covid is in the food, but deaths are normal (just blamed cold antibodies)"
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/uj6ekumw3iv9pj5/IMG_3420.png?dl=0"
            />
          </div>
          <br />
          covid is in the&nbsp;
          <a href="https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm">
            food
          </a>
          , but deaths are&nbsp;
          <a href="https://www.advisory.com/en/daily-briefing/2020/06/01/asymptomatic-patients">
            normal
          </a>
          &nbsp;(just&nbsp;
          <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
            blamed
          </a>
          &nbsp;on not having cold antibodies)
          <br />
          <br />
        </div>
      </div>
    );
  }
}

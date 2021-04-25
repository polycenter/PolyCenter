import React from "react";
import SocialLink from "components/SocialLink";
import githubicon from "assets/github_icon.png";
import "./Footer.css";
import { FooterContainer } from "./Footer.styles";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("vault")) return null;

  return (
    <FooterContainer>
      <div className="disclaimer">
        Complexity and risk are inherent in
        Cryptocurrency transactions that fit your goals
        your circumstances and financial situation. You should only buy when you have enough condition        
        Many factors are beyond $BACKUP's control $BNB $SUNI will affect
        market prices, including, but not limited to, countries and
        international economics, finance, regulation, politics, terror,
        military and other events, adverse or cumulative news events extreme and
        openly and generally market extremes, uncertain and volatile
        condition. Huge price changes can happen at any time, resulting in
        the possibility of loss of value, total or partial loss of purchasing power,
        and the difficulty or total inability to sell or exchange your digital
        currency. $BACKUP, $SUNI will have no obligation to buy
        or let a broker buy you back your cryptocurrency in
        cases where there is no viable market to buy
        the same, similar. No content published on this website constitutes
        Recommend that any particular cryptocurrency, portfolio's
        Cryptocurrencies, trading or investment strategies that suit any
        specific person. There is no information provider or their affiliates
        will advise you personally about the nature, potential, or value
        the suitability of any particular cryptocurrency, its portfolio
        cryptocurrency, trading, investment strategy or other matters. The
        Products and services featured on this website can only be purchased within
        the jurisdictions in which their marketing and distribution are authorized.
        Experience the risks and odds for yourself that may work in your favor.
        Before using any of the features on this DApp, you should secure one
        have complete working knowledge of liquidity pools and impermanent losses. Because
        Using this application, it is acknowledgment of understanding the risks.
      </div>
      <div className="links">
        <SocialLink
          href="https://github.com/jaybinancedev/"
          icon={githubicon}
          title="Github"
          color="#95A5A6"
        />
         <a
          href="https://github.com/jaybinancedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={githubicon}>
            Github
          </Button>
        </a>
        <a
          href="https://twitter.com/BackupFinance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={twittericon}>
            Twitter
          </Button>
        </a>
        <a
          href="https://backupfinance.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={mediumicon}>
            Medium
          </Button>
        </a>
        <a href="mailto:bupbsc@backup.finance">
          <Button className="button-footer" icon={emailicon}>
            Email
          </Button>
        </a> 
      </div>
    </FooterContainer>
  );
}

export default Footer;

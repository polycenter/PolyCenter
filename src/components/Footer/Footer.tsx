
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
        None of the content published on this site constitutes a
        recommendation that any particular cryptocurrency, portfolio of
        cryptocurrencies, transaction or investment strategy is suitable for any
        specific person. None of the information providers or their affiliates
        will advise you personally concerning the nature, potential, value or
        suitability of any particular cryptocurrency, portfolio of
        cryptocurrencies, transaction, investment strategy or other matter. The
        products and services presented on this website may only be purchased in
        jurisdictions in which their marketing and distribution are authorized.
        Experience at your own risk and may the odds be ever in your favor.
        Before using any features on this DApp, it is advised to make sure one
        has a full working knowledge of liquidity pools and impermanent loss. By
        using this app, it is an acknowledgement of understanding the risks.
      </div>
      <div className="links">
        <SocialLink
          href="https://github.com/jaybinancedev"
          icon={githubicon}
          title="Github"
          color="#95A5A6"
        />
        {/* <a
          href="https://github.com/zzz-finance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={githubicon}>
            Github
          </Button>
        </a>
        <a
          href="https://twitter.com/zzzfinance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={twittericon}>
            Twitter
          </Button>
        </a>
        <a
          href="https://medium.com/@zzzfinance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="button-footer" icon={mediumicon}>
            Medium
          </Button>
        </a>
        <a href="mailto:hello@zzz.finance">
          <Button className="button-footer" icon={emailicon}>
            Email
          </Button>
        </a> */}
      </div>
    </FooterContainer>
  );
}

export default Footer;

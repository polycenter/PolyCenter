import React from "react";
import coinmarket from "assets/coinmarketcap.webp";
import uniswap from "assets/whitebite.webp";

import coingecko from "assets/coingecko.webp";
import { ListingsContainer } from "./Listings.styles";

function Listings() {
  return (
    <ListingsContainer>
      <h1 style={{ gridColumn: "1/3", justifySelf: "center" }}>Exchange PolyCenter</h1>
      <div className="uniswaps">
        <a
          className="listing zzz-listing"
          href="https://polycenter.io"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            className="uniswap-image"
            src={uniswap}
            alt="Uniswap"
            style={{
              padding: "8px",
              width: "75px",
              height: "auto",
            }}
          />
          PolyCenter
        </a>
        <a
          className="listing nap-listing"
          href="https://polycenter.exchange"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            className="uniswap-image"
            src={uniswap}
            alt="uniswap"
            style={{
              padding: "8px",
              width: "75px",
              height: "auto",
            }}
          />
          PolySwap
        </a>
        <a
          className="listing dream-listing"
          href="https://polycenter.info"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            className="uniswap-image"
            src={uniswap}
            alt="uniswap"
            style={{
              padding: "8px",
              width: "75px",
              height: "auto",
            }}
          />
         PolyInfo Dao
        </a>
      </div>
      <h1 style={{ gridColumn: "1/3", justifySelf: "center" }}>Find us on</h1>
      <a
        className="listing"
        href="https://www.coingecko.com/en/coins/polycenter"
        target="blank"
        rel="noopener noreferrer"
      >
        Coingecko
        <img
          className="coingecko-image"
          src={coingecko}
          alt="coingecko"
          style={{
            padding: "8px",
            width: "128px",
            height: "auto",
          }}
        />
      </a>
      <a
        className="listing"
        href="https://coinmarketcap.com/currencies/polycenter"
        style={{ gridColumn: "1 / 3" }}
      >
        Coinmarketcap
        <img
          className="coinmarket-image"
          src={coinmarket}
          alt="coinmarket"
          style={{
            padding: "8px",
            width: "128px",
            height: "auto",
          }}
        />
      </a>
    </ListingsContainer>
  );
}
export default Listings;

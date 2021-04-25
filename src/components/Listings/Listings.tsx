import React from "react";
import coinmarket from "assets/coinmarketcap.webp";
import uniswap from "assets/whitebite.webp";

import coingecko from "assets/coingecko.webp";
import { ListingsContainer } from "./Listings.styles";

function Listings() {
  return (
    <ListingsContainer>
      <h1 style={{ gridColumn: "1/3", justifySelf: "center" }}>Exchange Backup</h1>
      <div className="uniswaps">
        <a
          className="listing zzz-listing"
          href="https://exchange.backup.finance/#/swap?inputCurrency=0x48e15ABBcb21C7f564c1B5Ae08A9f7829745F6D7"
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
          Backup Finance
        </a>
        <a
          className="listing nap-listing"
          href="https://exchange.backup.finance/#/swap?inputCurrency=0x0E6ef701E9CEF56A516C2e10ad093Be351B6c90f"
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
          Back Gas Fee
        </a>
        <a
          className="listing dream-listing"
          href="https://bsc.backuptoken.info/token/0x48e15abbcb21c7f564c1b5ae08a9f7829745f6d7"
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
         Sunshie Dao
        </a>
      </div>
      <h1 style={{ gridColumn: "1/3", justifySelf: "center" }}>Find us on</h1>
      <a
        className="listing"
        href="https://www.coingecko.com/en/coins/backup-finance"
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
        href="https://coinmarketcap.com/currencies/backup-finance/"
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

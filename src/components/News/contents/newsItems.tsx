import React from "react";

type TNews = {
  id: number;
  text: any;
  extra?: any;
  link?: string;
};

const newsItems: TNews[] = [
  {
    id: 0,
    text: () => (
      <span className="main-text">POLY/BNB pair is now listed in Pancake!</span>
    ),
    extra: () => (
      <span className="extra-text">
        Extra pairs for USDT and BTC are coming later. Click here to register
        for trading!
      </span>
    ),
    link: "/",
  },
  {
    id: 1,
    text: () => (
      <span className="main-text">
        Techrate audit process has been finalized!
      </span>
    ),
    extra: () => <span className="extra-text">Press to learn more</span>,
    link:
      "/",
  },
  {
    id: 2,
    text: () => <span className="main-text">Governance is live!</span>,
    extra: () => (
      <span className="extra-text">Head over to propose and vote!</span>
    ),
    link: "/#/governance",
  },
  {
    id: 3,
    text: () => (
      <span className="main-text">A new pool is available for prestaking!</span>
    ),
    extra: () => (
      <span className="extra-text">Click here to go to the pools section!</span>
    ),
    link: "/#/pools",
  },
  {
    id: 4,
    text: () => <span className="main-text">Polyc are here!</span>,
    extra: () => (
      <span className="extra-text">
        Go see them at our pool section by clicking here!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 5,
    text: () => <span className="main-text">Polyc are here!</span>,
    extra: () => (
      <span className="extra-text">
        Go see them at our pool section by clicking here!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 6,
    text: () => (
      <span className="main-text">
        Snoozer compensation rounds are about to start!
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        You can claim your POLYC compensations when rounds begin, just click here!
      </span>
    ),
    link: "/#/compensation",
  },
  {
    id: 7,
    text: () => (
      <span className="main-text">
        A new pool is around and a second round of compensation has started!
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        Headed over to pools to check it out by clicking here.
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 8,
    text: () => (
      <span className="main-text">
        Third round of compensation is triggered.
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        Head over to the compensation section to claim.
      </span>
    ),
    link: "/#/compensation",
  },
  {
    id: 9,
    text: () => (
      <span className="main-text">
        Fourth round of compensation is triggered.
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        Head over to the compensation section to claim.
      </span>
    ),
    link: "/#/compensation",
  },
  {
    id: 10,
    text: () => (
      <span className="main-text">A new pool is available, POLYC to POLYC!</span>
    ),
    extra: () => <span className="extra-text">Head over to the pools!</span>,
    link: "/#/pools",
  },
  {
    id: 11,
    text: () => (
      <span className="main-text">
        Migration pools to V2 are now open for deposits.
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        Head over to the pools, they will start at 7PM GMT+2.
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 12,
    text: () => (
      <span className="main-text">
        Migration pools done! Head over to pools to claim..
      </span>
    ),
    extra: () => (
      <span className="extra-text">1 to 1 swaps are also located there. </span>
    ),
    link: "/#/pools",
  },
  {
    id: 13,
    text: () => (
      <span className="main-text">
        Migration is over, V2 tokens are no longer supported or swapped.
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        If you are in a migration pool you'll be able to withdraw your V2
        tokens.
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 14,
    text: () => <span className="main-text">Vaults are now open!</span>,
    extra: () => (
      <span className="extra-text">
        Go check them out - remember to read the readme before participating.
      </span>
    ),
    link: "/#/vault",
  },
  {
    id: 15,
    text: () => <span className="main-text">Pools are now open!</span>,
    extra: () => (
      <span className="extra-text">
        Head over to pools to see them out. They include a global boost for your
        total POLYC staked in the vault. (this includes underlying tokens in both
        POLYC/BNB)
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 16,
    text: () => <span className="main-text">POLYC pools are here</span>,
    extra: () => (
      <span className="extra-text">
        POLY/BNB LP staking with 600 POLY as reward and POLY/ELE with 400 POLY as
        rewards now located in the pools section!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 17,
    text: () => <span className="main-text">POLYC Live Token sale</span>,
    extra: () => <span className="extra-text">July 15, 2021</span>,
    link: "/#/pools",
  },
];

export default newsItems;

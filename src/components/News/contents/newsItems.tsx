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
      <span className="main-text">BACKUP/BNB pair is now listed in Pancakeswap!</span>
    ),
    extra: () => (
      <span className="extra-text">
        Backup token sale live on 30.04.2021 1:00 PM UTC, Round 1: Presale 5M Backup price $0.03
        Only sold for 24 hours
      </span>
    ),
    link: "https://t.me/BACKUPSWAP",
  },
  {
    id: 1,
    text: () => (
      <span className="main-text">
        Airdrop Safegas $1000 Only available on backup swap platforms!!! join now.
      </span>
    ),
    extra: () => <span className="extra-text">Press to learn more</span>,
    link:
      "https://backup.finance",
  },
  {
    id: 2,
    text: () => <span className="main-text">Governance is live!</span>,
    extra: () => (
      <span className="extra-text">I love Backup Finance</span>
    ),
    link: "/#/governance",
  },
  {
    id: 3,
    text: () => (
      <span className="main-text">A new pool is available for staking 5.5.2021!</span>
    ),
    extra: () => (
      <span className="extra-text">Click here to go to the pools section!</span>
    ),
    link: "/#/pools",
  },
  {
    id: 4,
    text: () => <span className="main-text">WBNB, MDEX, CAKE are here!</span>,
    extra: () => (
      <span className="extra-text">
        Go see them at our pool section by clicking here!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 5,
    text: () => <span className="main-text">Backup swap are here!</span>,
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
        You can claim your Suni compensations when rounds begin, just click here!
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
      <span className="main-text">A new pool is available, Backup to Cake!</span>
    ),
    extra: () => <span className="extra-text">Coming soon!</span>,
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
        Head over to the pools, they will start at 5PM GMT+2.
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
      <span className="extra-text">Backup top #1 swaps are also BSC there. </span>
    ),
    link: "/#/pools",
  },
  {
    id: 13,
    text: () => (
      <span className="main-text">
        Coming soon!
      </span>
    ),
    extra: () => (
      <span className="extra-text">
        If you are in a migration pool you'll be able to withdraw your V1
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
        Coming soon!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 16,
    text: () => <span className="main-text">Coming soon!</span>,
    extra: () => (
      <span className="extra-text">
        ZZZ/WBNB LP staking with BACKUP as reward and BACKUP/WBNB with 400 SUNI as
        rewards now located in the pools section!
      </span>
    ),
    link: "/#/pools",
  },
  {
    id: 17,
    text: () => <span className="main-text">Yes we are one !🎁 wuff</span>,
    extra: () => <span className="extra-text">Backup token sale live 30.04.2021 1:00 PM (UTC) Round 1: Presale only 5M Price $0.03 Only sold for 24 hours</span>,
    link: "/#/pools",
  },
];

export default newsItems;

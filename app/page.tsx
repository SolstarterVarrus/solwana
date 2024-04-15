import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center md:mt-16 sm:mt-8">
      {/* DESCRIPTION */}
      <p
        className="font-black leading-normal lg:text-39px md:text-3xl"
        id="about"
      >
        POWERFUL FOR MEMECOIN
      </p>
      <p className="font-black leading-normal lg:text-39px md:text-3xl">
        CONNOISSEURS.
      </p>
      <p className="leading-normal lg:text-32px md:text-2xl">
        Fast for familia.
      </p>

      {/* LOGO COIN 1 */}
      <img
        src="/logos/solwana_coin.svg"
        alt="first coin"
        className="absolute rotate-[-3deg] top-30 -right-20 xl:w-auto lg:w-1/4 md:w-1/4 sm:w-1/4"
      />

      {/* SOCIAL LINKS */}
      <div className="flex mt-4 lg:gap-4 md:gap-2">
        <Link href="/">
          <img src="/links/x.svg" alt="X Link" className="lg:w-auto md:w-3/4" />
        </Link>
        <Link href="/">
          <img
            src="/links/telegram.svg"
            alt="Telegram Link"
            className="lg:w-auto md:w-3/4"
          />
        </Link>
        <Link href="/">
          <img
            src="/links/tiktok.svg"
            alt="TikTok Link"
            className="lg:w-auto md:w-3/4"
          />
        </Link>
        <Link href="/">
          <img
            src="/links/instagram.svg"
            alt="Instagram Link"
            className="lg:w-auto md:w-3/4"
          />
        </Link>
      </div>

      {/* BUY NOW BUTTON */}
      <Link href="/">
        <button className="w-184 h-55 mt-5 bg-yellow-theme text-purple-theme text-xl w-40 h-12 mt-4 rounded-3xl border-4 border-purple-theme font-black leading-24px shadow-custom">
          Buy Now
        </button>
      </Link>

      {/* FEATURES */}
      <div className="border-4 border-black rounded-[30px] mt-16 lg:w-3/4 md:w-4/5 sm:w-4/5">
        <div className="overflow-x-auto rounded-[26px] hide-scrollbar">
          <table className="table-auto w-full">
            <thead>
              <tr className="border-purple-theme">
                <th className="bg-purple-theme border-purple-theme text-center rounded-tl-[25px] lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Feature
                </th>
                <th className="bg-purple-theme border-purple-theme text-center lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Bitcoin(BTC)
                </th>
                <th className="bg-purple-theme border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Ethereum(ETH)
                </th>
                <th className="bg-purple-theme border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Solana(SOL)
                </th>
                <th className="bg-purple-theme border-purple-theme rounded-tr-[25px] lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Solwana(SOLW)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-purple-theme">
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Performance for launch
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  7058100.00%
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  838573.00%
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  38541.00%
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  ???
                </td>
              </tr>

              <tr className="border-purple-theme">
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Consensus Algorithm
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Proof of Work(PoW)
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Proof of Stake(PoS)
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Pos + Proof of History(PoH)
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  PoM(Proof of Meme) + PoS(Proof of Shill)
                </td>
              </tr>

              <tr>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Ecosystem
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm md:text-sm">
                  Limited
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Large
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Growing
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  ctrl+c, ctrl+v
                </td>
              </tr>

              <tr>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Energy Consumption
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm md:text-sm">
                  High
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Moderate
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Low
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  Low
                </td>
              </tr>

              <tr>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Staking
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  No
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Yes
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Yes
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  ctrl+v
                </td>
              </tr>

              <tr>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Transaction Speed
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  ~7 tps
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  up to 25 tps
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  ~65,000 tps
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  ~65,000 tweets per second
                </td>
              </tr>

              <tr>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Transaction Costs
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm md:text-sm">
                  $7.60
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  ~$23.00
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Up to $0.0005
                </td>
                <td className="border border-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  retarded^10
                </td>
              </tr>

              <tr>
                <td className="border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-l-0">
                  Scalability
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Layer 2 solutions
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Layer 2 chains
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Native scalability
                </td>
                <td className="border border-3px border-purple-theme bg-yellow-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm border-r-0">
                  Shill
                </td>
              </tr>

              <tr>
                <td className="border-r-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm rounded-bl-[25px]">
                  Best For
                </td>
                <td className="border border-l-3px border-r-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Store of values
                </td>
                <td className="border border-l-3px border-r-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Defi Apps, NFTs
                </td>
                <td className="border border-l-3px border-r-3px border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm">
                  Enterprise use cases, gaming
                </td>
                <td className="border-purple-theme lg:px-4 lg:py-2 md:px-2 md:py-1 sm:px-2 sm:py-1 lg:text-base md:text-sm sm:text-sm rounded-br-[25px]">
                  Memeing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MEMENOMICS */}
      <div className="flex flex-col items-center lg:mt-14 md:mt-20 sm:mt-20">
        <span
          className="font-black leading-normal lg:text-39px md:text-3xl"
          id="memenomics"
        >
          MEMENOMICS
        </span>
        <div className="flex flex-wrap justify-center gap-y-7 md:gap-x-8 sm:gap-x-2 content-center md:w-526px sm:w-11/12 md:h-356px sm:h-64 bg-white border border-3px border-purple-theme rounded-[30px] mt-14">
          {/* First row */}
          <div className="md:w-200px sm:2-1/2 md:h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme md:text-22px sm:text-sm sm:p-2 font-black flex justify-center items-center text-center shadow-custom">
            TOTAL SUPPLY
            <br />
            10 Trillion
          </div>
          <div className="md:w-200px sm:2-1/2 md:h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme md:text-22px sm:text-sm sm:p-2 font-black flex justify-center items-center text-center shadow-custom">
            45% LP
            <br />
            40% PRESALE
          </div>

          {/* Second row */}
          <div className="md:w-200px sm:2-1/2 md:h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme md:text-22px sm:text-sm sm:p-2 font-black flex justify-center items-center text-center shadow-custom">
            15% TREASURY
          </div>
          <div className="md:w-200px sm:2-1/2 md:h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme md:text-22px sm:text-sm sm:p-2 font-black flex justify-center items-center text-center shadow-custom">
            OWNERSHIP
            <br />
            REVOKED
          </div>

          {/* Third row */}
          <div className="md:w-200px sm:2-1/2 md:h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme md:text-22px sm:text-sm sm:p-2 font-black flex justify-center items-center text-center shadow-custom">
            LOCK LP
            <br />
            AT LAUNCH
          </div>
        </div>
      </div>

      {/* LOGOG COIN 2 */}
      <img
        src="/logos/solwana_coin.svg"
        alt="second coin"
        className="absolute rotate-[-8deg] top-66rem -left-24 xl:w-auto lg:w-1/4 md:w-1/4 sm:w-1/4"
      />

      {/* HOW TO BUY */}
      <div
        className="flex flex-col items-center lg:mt-14 md:mt-20 sm:mt-20"
        id="how-to-buy"
      >
        <span className="font-black leading-normal lg:text-39px md:text-3xl">
          HOW TO BUY
        </span>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-10 mt-14 lg:gap-x-16 md:gap-x-2">
          <div className="flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center lg:w-460px sm:w-11/12 h-221px m-auto">
            <span className="font-bold leading-42px lg:text-[28px] md:text-xl sm:text-base md:mt-5 sm:mt-2">
              Create a wallet
            </span>
            <span className="md:p-4 sm:p-2 lg:text-base md:text-sm sm:text-xs">
              Download Phantom or your wallet of choice from the app store or
              Google Play for free. Desktop users, download the Google Chrome
              extension by going to Phantom.
            </span>
          </div>
          <div className="flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center lg:w-460px sm:w-11/12 h-221px m-auto">
            <span className="font-bold leading-42px lg:text-[28px] md:text-xl sm:text-base md:mt-5 sm:mt-2">
              Get Some SOL
            </span>
            <span className="md:p-4 sm:p-2 lg:text-base md:text-sm sm:text-xs">
              Have SOL in your wallet to switch to $SOLW. If you don’t have any
              SOL, you can buy directly on Phantom, transfer from another
              wallet, or buy on another exchange and send it to your wallet
            </span>
          </div>
          <div className="flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center lg:w-460px sm:w-11/12 h-221px m-auto">
            <span className="font-bold leading-42px lg:text-[28px] md:text-xl sm:text-base md:mt-5 sm:mt-2">
              Go to Raydium
            </span>
            <span className="md:p-4 sm:p-2 lg:text-base md:text-sm sm:text-xs">
              Connect to Raydium. Go to Raydium in google chrome or on the
              browser inside your Phantom app. Connect your wallet. Paste the
              $SOLW token address into Raydium, select Solwana, and confirm.
              When Phantom prompts you for a wallet signature, sign.
            </span>
          </div>
          <div className="flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center lg:w-460px sm:w-11/12 h-221px m-auto">
            <span className="font-bold leading-42px lg:text-[28px] md:text-xl sm:text-base md:mt-5 sm:mt-2">
              SWOLANA
            </span>
            <span className="md:p-4 sm:p-2 lg:text-base md:text-sm sm:text-xs">
              Switch SOL for $SOLW. We have Zero taxes so you don’t need to
              worry about buying with a specific slippage, although you may
            </span>
          </div>
        </div>
      </div>

      {/* LOGOG COIN 3 */}
      <img
        src="/logos/solwana_coin.svg"
        alt="third coin"
        className="absolute rotate-[-8deg] lg:top-106rem md:top-92rem sm:top-92rem -right-32 xl:w-auto lg:w-1/4 md:w-1/4 sm:w-1/4"
      />

      {/* FOOTER */}
      <div className="w-full mt-28">
        <span className="w-full p-4 block bg-yellow-theme border-t-3px border-b-3px border-purple-theme text-normal text-center font-black whitespace-normal">
          Solwana $SOLW has no association with Solana.
          {/* <br /> */}
          This token is simply a meme with no intrinsic value
          {/* <br /> */}
          or expectation of financial return.
        </span>
        <span className="flex justify-center items-center h-14 m-auto text-base text-center">
          2024 by Solwana $SOLW. All rights reserved
        </span>
      </div>
    </main>
  );
}

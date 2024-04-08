import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center mt-16">
      {/* DESCRIPTION */}
      <p className="text-39px font-black leading-normal" id="about">
        POWERFUL FOR MEMECOIN
      </p>
      <p className="text-39px font-black leading-normal">CONNOISSEURS.</p>
      <p className="text-32px leading-normal">Fast for familia.</p>

      {/* LOGOG COIN 1 */}
      <img
        src="/logos/solwana_coin.svg"
        alt="first coin"
        className="absolute rotate-[-3deg] top-30 -right-20"
      />

      {/* SOCIAL LINKS */}
      <div className="flex gap-4 mt-4">
        <Link href="/">
          <img src="/links/x.svg" alt="X Link" className="" />
        </Link>
        <Link href="/">
          <img src="/links/telegram.svg" alt="Telegram Link" className="" />
        </Link>
        <Link href="/">
          <img src="/links/tiktok.svg" alt="TikTok Link" className="" />
        </Link>
        <Link href="/">
          <img src="/links/instagram.svg" alt="Instagram Link" className="" />
        </Link>
      </div>

      {/* BUY NOW BUTTON */}
      <Link href="/">
        <button className="w-184 h-55 mt-5 bg-yellow-theme text-purple-theme text-xl w-40 h-12 mt-4 rounded-3xl border-4 border-purple-theme font-black leading-24px shadow-custom">
          Buy Now
        </button>
      </Link>

      {/* FEATURES */}
      <div className="w-3/4 border-4 border-black rounded-[30px] mt-16">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-purple-theme">
              <th className="px-4 py-2 bg-purple-theme border-purple-theme text-center rounded-tl-[25px]">
                Feature
              </th>
              <th className="px-4 py-2 bg-purple-theme border-purple-theme text-center">
                Bitcoin(BTC)
              </th>
              <th className="px-4 py-2 bg-purple-theme border-purple-theme">
                Ethereum(ETH)
              </th>
              <th className="px-4 py-2 bg-purple-theme border-purple-theme">
                Solana(SOL)
              </th>
              <th className="px-4 py-2 bg-purple-theme border-purple-theme rounded-tr-[25px]">
                Solwana(SOLW)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-purple-theme">
              <td className="border border-3px border-purple-theme px-4 py-2 border-l-0">
                Performance for launch
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                7058100.00%
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                838573.00%
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                38541.00%
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2 border-r-0">
                ???
              </td>
            </tr>

            <tr className="border-purple-theme">
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-l-0">
                Consensus Algorithm
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Proof of Work(PoW)
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Proof of Stake(PoS)
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Pos + Proof of History(PoH)
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-r-0">
                PoM(Proof of Meme) + PoS(Proof of Shill)
              </td>
            </tr>

            <tr>
              <td className="border border-3px border-purple-theme px-4 py-2 border-l-0">
                Ecosystem
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Limited
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Large
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Growing
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2 border-r-0">
                ctrl+c, ctrl+v
              </td>
            </tr>

            <tr>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-l-0">
                Energy Consumption
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                High
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Moderate
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Low
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-r-0">
                Low
              </td>
            </tr>

            <tr>
              <td className="border border-3px border-purple-theme px-4 py-2 border-l-0">
                Staking
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                No
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Yes
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Yes
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2 border-r-0">
                ctrl+v
              </td>
            </tr>

            <tr>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-l-0">
                Transaction Speed
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                ~7 tps
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                up to 25 tps
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                ~65,000 tps
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-r-0">
                ~65,000 tweets per second
              </td>
            </tr>

            <tr>
              <td className="border border-3px border-purple-theme px-4 py-2 border-l-0">
                Transaction Costs
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                $7.60
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                ~$23.00
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2">
                Up to $0.0005
              </td>
              <td className="border border-3px border-purple-theme px-4 py-2 border-r-0">
                retarded^10
              </td>
            </tr>

            <tr>
              <td className="border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-l-0">
                Scalability
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Layer 2 solutions
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Layer 2 chains
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2">
                Native scalability
              </td>
              <td className="border border-3px border-purple-theme bg-yellow-theme px-4 py-2 border-r-0">
                Shill
              </td>
            </tr>

            <tr>
              <td className="border-r-3px border-purple-theme px-4 py-2 rounded-bl-[25px]">
                Best For
              </td>
              <td className="border border-l-3px border-r-3px border-purple-theme px-4 py-2">
                Store of values
              </td>
              <td className="border border-l-3px border-r-3px border-purple-theme px-4 py-2">
                Defi Apps, NFTs
              </td>
              <td className="border border-l-3px border-r-3px border-purple-theme px-4 py-2">
                Enterprise use cases, gaming
              </td>
              <td className="border-purple-theme px-4 py-2 rounded-br-[25px]">
                Memeing
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MEMENOMICS */}
      <div className="flex flex-col items-center mt-14">
        <span className="text-39px font-black leading-normal" id="memenomics">MEMENOMICS</span>
        <div className="flex flex-wrap justify-center gap-y-7 gap-x-8 content-center w-526px h-356px bg-white border border-3px border-purple-theme rounded-[30px] mt-14">
          {/* First row */}
          <div className="w-200px h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme text-22px font-black flex justify-center items-center text-center shadow-custom">
            TOTAL SUPPLY
            <br />
            10 Trillion
          </div>
          <div className="w-200px h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme text-22px font-black flex justify-center items-center text-center shadow-custom">
            45% LP
            <br />
            40% PRESALE
          </div>

          {/* Second row */}
          <div className="w-200px h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme text-22px font-black flex justify-center items-center text-center shadow-custom">
            15% TREASURY
          </div>
          <div className="w-200px h-83px bg-yellow-theme rounded-[13px] border-3px border-purple-theme text-22px font-black flex justify-center items-center text-center shadow-custom">
            OWNERSHIP
            <br />
            REVOKED
          </div>

          {/* Third row */}
          <div className="w-200px h-83px flex justify-center items-center bg-yellow-theme rounded-[13px] border-3px border-purple-theme text-22px font-black flex justify-center items-center text-center shadow-custom">
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
        className="absolute rotate-[-8deg] top-66rem -left-24"
      />

      {/* HOW TO BUY */}
      <div className="flex flex-col items-center mt-14" id="how-to-buy">
        <span className="text-39px font-black leading-normal">HOW TO BUY</span>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-10 mt-14">
          <div className="w-460px h-221px flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center">
            <span className="font-bold text-[28px] leading-42px mt-5">
              Create a wallet
            </span>
            <span className="p-4 text-base">
              Download Phantom or your wallet of choice from the app store or
              Google Play for free. Desktop users, download the Google Chrome
              extension by going to Phantom.
            </span>
          </div>
          <div className="w-460px h-221px flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center">
            <span className="font-bold text-[28px] leading-42px mt-5">
              Get Some SOL
            </span>
            <span className="p-4 text-base">
              Have SOL in your wallet to switch to $SOLW. If you don’t have any
              SOL, you can buy directly on Phantom, transfer from another
              wallet, or buy on another exchange and send it to your wallet
            </span>
          </div>
          <div className="w-460px h-221px flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center">
            <span className="font-bold text-[28px] leading-42px mt-5">
              Go to Raydium
            </span>
            <span className="p-4 text-base">
              Connect to Raydium. Go to Raydium in google chrome or on the
              browser inside your Phantom app. Connect your wallet. Paste the
              $SOLW token address into Raydium, select Solwana, and confirm.
              When Phantom prompts you for a wallet signature, sign.
            </span>
          </div>
          <div className="w-460px h-221px flex flex-col bg-purple-theme-2 border-3px border-purple-theme rounded-[20px] text-center">
            <span className="font-bold text-[28px] leading-42px mt-5">
              SWOLANA
            </span>
            <span className="p-4 text-base">
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
        className="absolute rotate-[-8deg] top-106rem -right-32"
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

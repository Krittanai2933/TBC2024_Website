import React from "react";
import "../Secspon.css";

const logos = [
  { url: "../src/assets/sponsor/logos/logo_square/neutronpay.png", alt: "Neutronpay" },
  { url: "../src/assets/sponsor/logos/logo_square/mebit.png", alt: "Mebit" },
  { url: "../src/assets/sponsor/logos/logo_square/okx.png", alt: "OKX" },
  { url: "../src/assets/sponsor/logos/logo_square/beer_pot.png", alt: "Beer_Pot" },
  { url: "../src/assets/sponsor/logos/logo_square/toffeecake.png", alt: "Toffee Cake" },
  { url: "../src/assets/sponsor/logos/logo_square/bob.png", alt: "BOB" },
  { url: "../src/assets/sponsor/logos/logo_square/chitbeer.png", alt: "Chitbeer" },
  { url: "../src/assets/sponsor/logos/logo_square/bitcast.png", alt: "Bitcast" },
  { url: "../src/assets/sponsor/logos/logo_square/lates.png", alt: "Lates" },
  { url: "../src/assets/sponsor/logos/logo_square/true.png", alt: "True Park" },
  { url: "../src/assets/sponsor/logos/logo_square/crossvibe.png", alt: "Cross Vibe Hotel" },
  { url: "../src/assets/sponsor/logos/logo_square/lumen.png", alt: "Lumen Bangkok Udomsuk Hotel" },
  { url: "../src/assets/sponsor/logos/logo_square/newyorkstu.png", alt: "New York Stu" },
  { url: "../src/assets/sponsor/logos/logo_square/codekids.png", alt: "Code_Kids" },
  { url: "../src/assets/sponsor/logos/logo_square/se_ed.png", alt: "SE_ED" },
  { url: "../src/assets/sponsor/logos/logo_square/digdig.png", alt: "DigDig" },
  { url: "../src/assets/sponsor/logos/logo_square/oasis_coffee.png", alt: "Oasis_Coffee" },
  { url: "../src/assets/sponsor/logos/logo_square/bitcoin_learning.png", alt: "Bitcoin_Learning" },
  { url: "../src/assets/sponsor/logos/logo_square/sbp.png", alt: "SBP" },
  { url: "../src/assets/sponsor/logos/logo_square/siambc.png", alt: "SiamBC" },
  { url: "../src/assets/sponsor/logos/logo_square/shopbit.png", alt: "Shopbit" },
  { url: "../src/assets/sponsor/logos/logo_square/radars_point.png", alt: "Radars_Point" },
  { url: "../src/assets/sponsor/logos/logo_square/bitcoin_vn.png", alt: "Bitcoin_VN" },
  { url: "../src/assets/sponsor/logos/logo_square/cdc.png", alt: "CDC" },
  { url: "../src/assets/sponsor/logos/logo_square/crispywill.png", alt: "ปลากรอบ" },
  { url: "../src/assets/sponsor/logos/logo_square/lunchblock.png", alt: "Lunchblock" },
  { url: "../src/assets/sponsor/logos/logo_square/iwear.png", alt: "IWear" },
  { url: "../src/assets/sponsor/logos/logo_square/wherosti.png", alt: "Wherosti" },
  { url: "../src/assets/sponsor/logos/logo_square/bitcoin_legacy.png", alt: "Bitcoin_Legacy" },  
  { url: "../src/assets/sponsor/logos/logo_square/thai_lightning.png", alt: "Thai_Lightning" },
  { url: "../src/assets/sponsor/logos/logo_square/catdumb.png", alt: "Catdumb" },
  { url: "../src/assets/sponsor/logos/logo_square/spotlight.png", alt: "Spotlight" },
  { url: "../src/assets/sponsor/logos/logo_square/siam_blockchain.png", alt: "Siam_Blockchain" },
  { url: "../src/assets/sponsor/logos/logo_square/mgr_online.png", alt: "MGR" },
  { url: "../src/assets/sponsor/logos/logo_square/i_bit.png", alt: "I_Bit" },
  { url: "../src/assets/sponsor/logos/logo_square/wealthme_up.png", alt: "WealthMe_Up" },
  { url: "../src/assets/sponsor/logos/logo_square/longtunman.png", alt: "Longtunman" },
  { url: "../src/assets/sponsor/logos/logo_square/trader_kp.png", alt: "Trader_KP" },
  { url: "../src/assets/sponsor/logos/logo_square/cat_money.png", alt: "Cat_Money" },
  { url: "../src/assets/sponsor/logos/logo_square/business_tmr.png", alt: "Business_Tomorrow" },
  { url: "../src/assets/sponsor/logos/logo_square/thairath.png", alt: "Thairath_Money" },
  { url: "../src/assets/sponsor/logos/logo_square/ploy.png", alt: "Ploy_Storytelling" },
  { url: "../src/assets/sponsor/logos/logo_square/lady_crypto.png", alt: "Lady_Crypto" },
  { url: "../src/assets/sponsor/logos/logo_square/bitcoin_addict.png", alt: "Bitcoin_Addict" },
  { url: "../src/assets/sponsor/logos/logo_square/efinance.png", alt: "Efinance" },

];

export default function SecSpon() {
  return (
    <div className="container">
      <h2>Our Sponsors</h2>
      <div className="grid">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt={logo.alt}
            className="sponsor-image"
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "../Secspon.css";
import neutronpay from '../../assets/sponsor/logos/logo_square/neutronpay.png';
import mebit from '../../assets/sponsor/logos/logo_square/mebit.png';
import okx from '../../assets/sponsor/logos/logo_square/okx.png';
import beer_pot from '../../assets/sponsor/logos/logo_square/beer_pot.png';
import toffeecake from '../../assets/sponsor/logos/logo_square/toffeecake.png';
import bob from '../../assets/sponsor/logos/logo_square/bob.png';
import chitbeer from '../../assets/sponsor/logos/logo_square/chitbeer.png';
import bitcast from '../../assets/sponsor/logos/logo_square/bitcast.png';
import lates from '../../assets/sponsor/logos/logo_square/lates.png';
import trued from '../../assets/sponsor/logos/logo_square/true.png';
import crossvibe from '../../assets/sponsor/logos/logo_square/crossvibe.png';
import lumen from '../../assets/sponsor/logos/logo_square/lumen.png';
import newyorkstu from '../../assets/sponsor/logos/logo_square/newyorkstu.png';
import codekids from '../../assets/sponsor/logos/logo_square/codekids.png';
import seed from '../../assets/sponsor/logos/logo_square/se_ed.png';
import digdig from '../../assets/sponsor/logos/logo_square/digdig.png';
import oasis_coffee from '../../assets/sponsor/logos/logo_square/oasis_coffee.png';
import bitcoin_learning from '../../assets/sponsor/logos/logo_square/bitcoin_learning.png';
import sbp from '../../assets/sponsor/logos/logo_square/sbp.png';
import siambc from '../../assets/sponsor/logos/logo_square/siambc.png';
import shopbit from '../../assets/sponsor/logos/logo_square/shopbit.png';
import radars_point from '../../assets/sponsor/logos/logo_square/radars_point.png';
import bitcoin_vn from '../../assets/sponsor/logos/logo_square/bitcoin_vn.png';
import cdc from '../../assets/sponsor/logos/logo_square/cdc.png';
import crispywill from '../../assets/sponsor/logos/logo_square/crispywill.png';
import lunchblock from '../../assets/sponsor/logos/logo_square/lunchblock.png';
import iwear from '../../assets/sponsor/logos/logo_square/iwear.png';
import wherosti from '../../assets/sponsor/logos/logo_square/wherosti.png';
import bitcoin_legacy from '../../assets/sponsor/logos/logo_square/bitcoin_legacy.png';
import thai_lightning from '../../assets/sponsor/logos/logo_square/thai_lightning.png';
import catdumb from '../../assets/sponsor/logos/logo_square/catdumb.png';
import spotlight from '../../assets/sponsor/logos/logo_square/spotlight.png';
import siam_blockchain from '../../assets/sponsor/logos/logo_square/siam_blockchain.png';
import mgr_online from '../../assets/sponsor/logos/logo_square/mgr_online.png';
import i_bit from '../../assets/sponsor/logos/logo_square/i_bit.png';
import wealthme_up from '../../assets/sponsor/logos/logo_square/wealthme_up.png';
import longtunman from '../../assets/sponsor/logos/logo_square/longtunman.png';
import trader_kp from '../../assets/sponsor/logos/logo_square/trader_kp.png';
import cat_money from '../../assets/sponsor/logos/logo_square/cat_money.png';
import business_tmr from '../../assets/sponsor/logos/logo_square/business_tmr.png';
import thairath from '../../assets/sponsor/logos/logo_square/thairath.png';
import ploy from '../../assets/sponsor/logos/logo_square/ploy.png';
import lady_crypto from '../../assets/sponsor/logos/logo_square/lady_crypto.png';
import bitcoin_addict from '../../assets/sponsor/logos/logo_square/bitcoin_addict.png';
import efinance from '../../assets/sponsor/logos/logo_square/efinance.png';

const logos = [
  { url: neutronpay, alt: "Neutronpay" },
  { url: mebit, alt: "Mebit" },
  { url: okx, alt: "OKX" },
  { url: beer_pot, alt: "Beer_Pot" },
  { url: toffeecake, alt: "Toffee Cake" },
  { url: bob, alt: "BOB" },
  { url: chitbeer, alt: "Chitbeer" },
  { url: bitcast, alt: "Bitcast" },
  { url: lates, alt: "Lates" },
  { url: trued, alt: "True Park" },
  { url: crossvibe, alt: "Cross Vibe Hotel" },
  { url: lumen, alt: "Lumen Bangkok Udomsuk Hotel" },
  { url: newyorkstu, alt: "New York Stu" },
  { url: codekids, alt: "Code_Kids" },
  { url: seed, alt: "SE_ED" },
  { url: digdig, alt: "DigDig" },
  { url: oasis_coffee, alt: "Oasis_Coffee" },
  { url: bitcoin_learning, alt: "Bitcoin_Learning" },
  { url: sbp, alt: "SBP" },
  { url: siambc, alt: "SiamBC" },
  { url: shopbit, alt: "Shopbit" },
  { url: radars_point, alt: "Radars_Point" },
  { url: bitcoin_vn, alt: "Bitcoin_VN" },
  { url: cdc, alt: "CDC" },
  { url: crispywill, alt: "ปลากรอบ" },
  { url: lunchblock, alt: "Lunchblock" },
  { url: iwear, alt: "IWear" },
  { url: wherosti, alt: "Wherosti" },
  { url: bitcoin_legacy, alt: "Bitcoin_Legacy" },
  { url: thai_lightning, alt: "Thai_Lightning" },
  { url: catdumb, alt: "Catdumb" },
  { url: spotlight, alt: "Spotlight" },
  { url: siam_blockchain, alt: "Siam_Blockchain" },
  { url: mgr_online, alt: "MGR" },
  { url: i_bit, alt: "I_Bit" },
  { url: wealthme_up, alt: "WealthMe_Up" },
  { url: longtunman, alt: "Longtunman" },
  { url: trader_kp, alt: "Trader_KP" },
  { url: cat_money, alt: "Cat_Money" },
  { url: business_tmr, alt: "Business_Tomorrow" },
  { url: thairath, alt: "Thairath_Money" },
  { url: ploy, alt: "Ploy_Storytelling" },
  { url: lady_crypto, alt: "Lady_Crypto" },
  { url: bitcoin_addict, alt: "Bitcoin_Addict" },
  { url: efinance, alt: "Efinance" },
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

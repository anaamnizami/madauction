const router = require('express').Router();
const verify = require('./verifytoken')
router.get('/',verify, (req,res)=>{
  res.json({
    categories: {
    'Minerals & Meteorites' : ['Decorative Minerals', 'Meteorites' ,  'Minerals', 'Premium Minerals'],
    'Fossils' : [],
    'Bullion' : [],
     'Diamond and Gemstones' : {'Diamonds' : ['Color Treated Diamonds', 'Mixed Diamonds', 'Diamonds', 'Natural Fancy Color Diamonds']},
    'Gemstones' : ['Exclusive gemstones', 'Gemstones Certified By Gemologist', 'Parcel Of Gemstones', 'Gemstones', 'Spiritual & Healing gemstones']},

    'Jewelry & Watches': {'Jewelry':['Antique & Vintage Amber Jewellery','Antique & Vintage Men’s Jewellery','Antique & Vintage Silver Jewellery','Antique Jewellery','Art Nouveau & Art Deco Jewellery','Brand Jewellery', 'Enhanced Diamond Jewellery', 'Exclusive & Certified Jewellery', 'Exclusive Antique Jewellery', 'Exclusive Jewellery','Exclusive Jewelry (No Reserve)', 'Fine Jewellery', 'Jewellery Set with Magnificent Jewels', 'Men’s Jewellery', 'Premium Jewellery', 'Professional Designers', 'Vintage Jewelry'],
    'Watches':['Briefing watches', 'Cartier Watches', 'Eberhard Watches', 'Exclusive Marriage Watches', 'Exclusive Men’s watches', 'Exclusive Pocket watches', 'Exclusive Watches', 'IWC Watches', 'Jaeger-LeCoultre Watches', 'Ladies watches','Longines Watches', 'Omega Watches', 'Pocket Watches', 'Premium Watches', 'Rolex Watches', 'Rolex Accessories', 'Seiko Watches', 'Solid Gold & Platinum Watches', 'Tag Heuer Watches', 'Tudor Watches', 'Unused Exclusive Watches', 'Unused premium Watches', 'Vintage Watches', 'Watches (No Reserve)','Zenit Watches' ] }



  })
})

module.exports = router;

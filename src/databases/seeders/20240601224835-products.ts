import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import {
  productOneId,
  productTwoId,
  productThreeId,
  productFourId,
  productFiveId,
  productSixId,
  productSevenId,
  productEightId,
  productNineId,
  productTenId,
  productElevenId,
  productTwelveId,
  shopOneId,
  shopTwoId,
  shopThreeId,
  shopFourId,
  shopFiveId,
  shopSixId,
} from "../../types/uuid";

const productOne = {
  id: productOneId,
  shopId: shopFourId,
  name: "Maize",
  description: "High-quality maize, perfect for consumption and animal feed.",
  price: 400,
  discount: "5%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-arina-krasnikova-6316526_ua3adx.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-iriser-1353866_egw3oz.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396837/pexels-cristian-rojas-10041328_szweqo.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-iriser-1353865_h0z7bx.jpg"
  ],
  quantity: 1000,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwo = {
  id: productTwoId,
  shopId: shopThreeId,
  name: "Carrots",
  description: "Fresh and organic carrots, rich in vitamins and minerals.",
  price: 700,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397104/pexels-mali-143133_gr5ksu.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397102/pexels-hanamara-3650647_farwcx.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397101/pexels-chokniti-khongchum-1197604-2280550_qrc9pk.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397181/pexels-enginakyurt-15428957_d8r0iw.jpg"
  ],
  quantity: 500,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productThree = {
  id: productThreeId,
  shopId: shopTwoId,
  name: "Tea",
  description: "Premium quality tea leaves, perfect for a refreshing drink.",
  price: 8000,
  discount: "8%",
  category: "Beverages",
  expiryDate: new Date("2040-12-31"),
  expired: false,
  bonus: "Free tea infuser",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397380/pexels-quang-nguyen-vinh-222549-2884905_bubydd.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397382/pexels-minan1398-981091_m1nlfh.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397379/pexels-goodcitizen-2067255_fqj1m4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397380/pexels-nipananlifestyle-com-625927-1581484_nhcrqe.jpg"
  ],
  quantity: 300,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFour = {
  id: productFourId,
  shopId: shopOneId,
  name: "Coffee",
  description: "Rich and aromatic coffee beans, perfect for a morning boost.",
  price: 15000,
  discount: "15%",
  category: "Beverages",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free coffee scoop",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397757/pexels-adam-lukac-254247-773958_vmtwbf.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-juanpphotoandvideo-894695_g4hvpq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-sarah-33270-122370_kn1arv.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-igor-haritanovich-814387-1695052_esgc8c.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFive = {
  id: productFiveId,
  shopId: shopFourId,
  name: "Onions",
  description: "Fresh and flavorful onions, perfect for cooking.",
  price: 800,
  discount: "12%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983688/ksaxhjupi2ouslcvgpx4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983688/dbdog2t0dbpzmqunmyg8.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983688/pd5g0d1af9u2fkclxta4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983689/otrq8cxbd8b5bpqkxq9g.jpg"
  ],
  quantity: 800,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSix = {
  id: productSixId,
  shopId: shopFourId,
  name: "Potatoes",
  description: "High-quality potatoes, perfect for various dishes.",
  price: 500,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983794/ujnc7ytysuqnpdu5tftd.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983794/occ8hemjldfc6gmmzuup.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983794/sqkjdxoemofvr8gxxjll.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983794/hnxuvkgu7vjwqumelskh.jpg"
  ],
  quantity: 600,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSeven = {
  id: productSevenId,
  shopId: shopFiveId,
  name: "Tomatoes",
  description: "Fresh and juicy tomatoes, perfect for salads and cooking.",
  price: 1300,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739969141/skfb5rt7gcuuijtmi6ux.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739969141/vkwusjnowq91ysyofqjl.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739969141/hu1fethrvbtb8zrcphj0.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739969142/ujowr1py97mpgiam5qm9.jpg"
  ],
  quantity: 150,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEight = {
  id: productEightId,
  shopId: shopFiveId,
  name: "Cabbage",
  description: "Fresh and crisp cabbage, perfect for salads and cooking.",
  price: 800,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984401/nz5xrkjppldearzaynda.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984401/nz5xrkjppldearzaynda.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984401/nz5xrkjppldearzaynda.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984401/nz5xrkjppldearzaynda.jpg"
  ],
  quantity: 250,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productNine = {
  id: productNineId,
  shopId: shopFiveId,
  name: "Spinach",
  description: "Fresh and organic spinach, rich in vitamins and minerals.",
  price: 1000,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984208/rg2opsylpp3rafkcvrnr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984208/rg2opsylpp3rafkcvrnr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984208/rg2opsylpp3rafkcvrnr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984208/rg2opsylpp3rafkcvrnr.jpg"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTen = {
  id: productTenId,
  shopId: shopFiveId,
  name: "Peppers",
  description: "Fresh and colorful peppers, perfect for salads and cooking.",
  price: 2500,
  discount: "15%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984293/gpopkgcz2sfokkb9ebte.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984293/gpopkgcz2sfokkb9ebte.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984293/gpopkgcz2sfokkb9ebte.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984293/gpopkgcz2sfokkb9ebte.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984293/gpopkgcz2sfokkb9ebte.jpg"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEleven = {
  id: productElevenId,
  shopId: shopFiveId,
  name: "Lettuce",
  description: "Fresh and crisp lettuce, perfect for salads and sandwiches.",
  price: 1500,
  discount: "6%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Bonus 1",
  "images": [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739451882/wmf7spcstgn8kztme4g4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739451882/wmf7spcstgn8kztme4g4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739451882/wmf7spcstgn8kztme4g4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739451882/wmf7spcstgn8kztme4g4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739451882/wmf7spcstgn8kztme4g4.jpg"
  ],
  quantity: 5,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwelve = {
  id: productTwelveId,
  shopId: shopSixId,
  name: "Wheat",
  description: "High-quality wheat, perfect for baking and cooking.",
  price: 1800,
  discount: "5%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/nipf5bwrzricqvzxzvno.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/nipf5bwrzricqvzxzvno.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/nipf5bwrzricqvzxzvno.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/nipf5bwrzricqvzxzvno.jpg"
  ],
  quantity: 1000,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productThirteen = {
  id: uuidv4(),
  shopId: shopSixId,
  name: "Barley",
  description: "Organic barley, ideal for soups and stews.",
  price: 1500,
  discount: "8%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/eaumfcsbmzyfcxtlkzet.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/eaumfcsbmzyfcxtlkzet.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/eaumfcsbmzyfcxtlkzet.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983915/eaumfcsbmzyfcxtlkzet.jpg"
  ],
  quantity: 800,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFourteen = {
  id: uuidv4(),
  shopId: shopSixId,
  name: "Rice",
  description: "Premium quality rice, perfect for daily meals.",
  price: 1400,
  discount: "10%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984914/gffpbj5px3gor0mt9wbk.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984914/gffpbj5px3gor0mt9wbk.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984914/gffpbj5px3gor0mt9wbk.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984914/gffpbj5px3gor0mt9wbk.jpg"
  ],
  quantity: 1200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFifteen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Soybeans",
  description: "High-protein soybeans, perfect for various dishes.",
  price: 1800,
  discount: "7%",
  category: "Legumes",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983918/frj8khvgzlkbwvp8reqy.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983918/frj8khvgzlkbwvp8reqy.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983918/frj8khvgzlkbwvp8reqy.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983918/frj8khvgzlkbwvp8reqy.jpg"
  ],
  quantity: 700,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSixteen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Peas",
  description: "Fresh and organic peas, perfect for soups and salads.",
  price: 1700,
  discount: "6%",
  category: "Legumes",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983304/n2wu9unzilipceg7mn2w.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983304/n2wu9unzilipceg7mn2w.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983304/n2wu9unzilipceg7mn2w.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983304/n2wu9unzilipceg7mn2w.jpg"
  ],
  quantity: 600,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSeventeen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Corn",
  description: "Fresh and sweet corn, perfect for grilling and cooking.",
  price: 800,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983470/tdjvxqyymbpdr479e9fi.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983470/tdjvxqyymbpdr479e9fi.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983470/tdjvxqyymbpdr479e9fi.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983470/tdjvxqyymbpdr479e9fi.jpg"
  ],
  quantity: 120,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEighteen = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Green Beans",
  description: "Fresh and crisp green beans, perfect for salads and cooking.",
  price: 1000,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984593/iwypl7fycyrn3vbdxi3p.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984593/iwypl7fycyrn3vbdxi3p.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984593/iwypl7fycyrn3vbdxi3p.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984593/iwypl7fycyrn3vbdxi3p.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productNineteen = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Pumpkin",
  description: "Fresh and organic pumpkin, perfect for pies and soups.",
  price: 1800,
  discount: "8%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984256/e4vvjuzm8lw56spyop7b.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984256/e4vvjuzm8lw56spyop7b.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984256/e4vvjuzm8lw56spyop7b.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984256/e4vvjuzm8lw56spyop7b.jpg"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwenty = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Beetroot",
  description: "Fresh and organic beetroot, perfect for salads and juices.",
  price: 1000,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984351/fyaqq1suipjcut68wv77.png",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984351/fyaqq1suipjcut68wv77.png",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984351/fyaqq1suipjcut68wv77.png",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739984351/fyaqq1suipjcut68wv77.png"
  ],
  quantity: 80,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyOne = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Broccoli",
  description: "Fresh and organic broccoli, perfect for steaming and stir-frying.",
  price: 1500,
  discount: "6%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983035/gaomjtbnxomxnuzt2zrr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983035/gaomjtbnxomxnuzt2zrr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983035/gaomjtbnxomxnuzt2zrr.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739983035/gaomjtbnxomxnuzt2zrr.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyTwo = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Cauliflower",
  description: "Fresh and organic cauliflower, perfect for roasting and steaming.",
  price: 2000,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739982919/ofvw9iwrnh0yaptgyvkb.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739982919/ofvw9iwrnh0yaptgyvkb.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739982919/ofvw9iwrnh0yaptgyvkb.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739982919/ofvw9iwrnh0yaptgyvkb.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyThree = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Zucchini",
  description: "Fresh and organic zucchini, perfect for grilling and baking.",
  price: 2500,
  discount: "8%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739437905/l3lbkwfvyxzybrw0cnaq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739437905/l3lbkwfvyxzybrw0cnaq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739437905/l3lbkwfvyxzybrw0cnaq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739437905/l3lbkwfvyxzybrw0cnaq.jpg"
  ],
  quantity: 150,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyFour = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Eggplant",
  description: "Fresh and organic eggplant, perfect for grilling and baking.",
  price: 800,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739439495/yonjkvtdwhzowitpxc4j.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739439495/yonjkvtdwhzowitpxc4j.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739439495/yonjkvtdwhzowitpxc4j.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739439495/yonjkvtdwhzowitpxc4j.jpg"
  ],
  quantity: 120,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyFive = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Bell Peppers",
  description: "Fresh and colorful bell peppers, perfect for salads and cooking.",
  price: 3000,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440597/oitrqrclkjvu0wtur4qp.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440597/oitrqrclkjvu0wtur4qp.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440597/oitrqrclkjvu0wtur4qp.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440597/oitrqrclkjvu0wtur4qp.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentySix = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Cucumbers",
  description: "Fresh and crisp cucumbers, perfect for salads and pickling.",
  price: 1000,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440840/jtu7nxpujfefbaqn6jct.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440840/jtu7nxpujfefbaqn6jct.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440840/jtu7nxpujfefbaqn6jct.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739440840/jtu7nxpujfefbaqn6jct.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert("products", [
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
    productSix,
    productSeven,
    productEight,
    productNine,
    productTen,
    productEleven,
    productTwelve,
    productThirteen, productFourteen, productFifteen, productSixteen, productSeventeen, productEighteen,
    productNineteen, productTwenty, productTwentyOne, productTwentyTwo, productTwentyThree, productTwentyFour,
    productTwentyFive, productTwentySix
  ]);
};

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete("products", {});
};
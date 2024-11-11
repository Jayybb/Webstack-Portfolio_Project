import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Elegant Striped Flutter Sleeve Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "Elevate your wardrobe with this elegant striped blouse featuring flutter sleeves, perfect for any occasion."
  },
  {
    id: 2,
    name: "Chic Pink One-Shoulder Dress",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Make a statement in this chic pink one-shoulder dress, designed for modern elegance."
  },
  {
    id: 3,
    name: "Stylish Nike Two-Piece Set",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "Stay active in style with this trendy Nike two-piece set, perfect for workouts or casual outings."
  },
  {
    id: 4,
    name: "Traditional Brown Dashiki",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "Embrace culture and tradition with this beautiful brown dashiki, ideal for special occasions."
  },
  {
    id: 5,
    name: "Lavender Veekee James Top",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This stunning lavender top by Veekee James offers a perfect blend of style and comfort."
  },
  {
    id: 6,
    name: "Comfortable Brown Overall",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Enjoy ultimate comfort with this stylish brown overall, perfect for casual days."
  },
  {
    id: 7,
    name: "Classic White Turtleneck Top",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A classic wardrobe staple, this white turtleneck top can be dressed up or down effortlessly."
  },
  {
    id: 8,
    name: "Floral Print Design Blouse",
    category: "women",
    image: p8_img,
    new_price: 90.0,
    old_price: 120.5,
    description: "Add a touch of spring to your outfit with this floral print blouse, perfect for sunny days."
  },
  {
    id: 9,
    name: "Casual Pink House Top",
    category: "women",
    image: p9_img,
    new_price: 70.0,
    old_price: 120.5,
    description: "Stay comfy at home or on the go with this casual pink house top, a must-have for relaxation."
  },
  {
    id: 10,
    name: "Trendy Maroon Concordia Top",
    category: "women",
    image: p10_img,
    new_price: 75.0,
    old_price: 120.5,
    description: "This trendy maroon top combines fashion and comfort, making it a perfect addition to your closet."
  },
  {
    id: 11,
    name: "Sporty Nike Tube Top",
    category: "women",
    image: p11_img,
    new_price: 65.0,
    old_price: 120.5,
    description: "Stay cool and stylish with this sporty Nike tube top, ideal for workouts and casual outings."
  },
  {
    id: 12,
    name: "Sleek Black V-Neck Top",
    category: "women",
    image: p12_img,
    new_price: 100.0,
    old_price: 120.5,
    description: "This sleek black V-neck top is versatile and chic, perfect for both day and night."
  },
  {
    id: 13,
    name: "Fashionova Men's Jacket",
    category: "men",
    image: p13_img,
    new_price: 110.0,
    old_price: 120.5,
    description: "Stay fashionable and warm with this stylish Fashionova men's jacket, a versatile outerwear choice."
  },
  {
    id: 14,
    name: "Trendy Fashionova Jacket",
    category: "men",
    image: p14_img,
    new_price: 105.0,
    old_price: 120.5,
    description: "This trendy Fashionova jacket adds a modern touch to your outfits while providing comfort."
  },
  {
    id: 15,
    name: "Stylish Fashionova Boyfriend Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This stylish boyfriend jacket by Fashionova is perfect for layering and keeping you cozy."
  },
  {
    id: 16,
    name: "Modern Nike Biker Jacket",
    category: "men",
    image: p16_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "This modern Nike biker jacket combines style and function, making it a must-have for your wardrobe."
  },
  {
    id: 17,
    name: "Blue Denim Top and Bottom Set",
    category: "men",
    image: p17_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "This blue denim set offers a classic look that's perfect for any casual occasion."
  },
  {
    id: 18,
    name: "Stylish White Boyfriend Jacket",
    category: "men",
    image: p18_img,
    new_price: 105.0,
    old_price: 120.5,
    description: "Add a chic touch to your outfit with this stylish white boyfriend jacket, perfect for layering."
  },
  {
    id: 19,
    name: "Chic White Nike Biker Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Stay ahead in fashion with this chic white Nike biker jacket, designed for modern lifestyles."
  },
  {
    id: 20,
    name: "Navy Blue Boyfriend Jacket",
    category: "men",
    image: p20_img,
    new_price: 75.0,
    old_price: 120.5,
    description: "This navy blue boyfriend jacket is versatile and stylish, a perfect addition to any outfit."
  },
  {
    id: 21,
    name: "Multi-Colored Nike Biker Jacket",
    category: "men",
    image: p21_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "Make a bold statement with this multi-colored Nike biker jacket, great for all-day wear."
  },
  {
    id: 22,
    name: "Classic White Hoodie",
    category: "men",
    image: p22_img,
    new_price: 105.0,
    old_price: 120.5,
    description: "This classic white hoodie is a wardrobe essential, perfect for layering or casual outings."
  },
  {
    id: 23,
    name: "Casual Navy Blue Long Sleeves",
    category: "men",
    image: p23_img,
    new_price: 70.0,
    old_price: 120.5,
    description: "Stay comfortable and stylish with this casual navy blue long sleeve top, ideal for everyday wear."
  },
  {
    id: 24,
    name: "Elegant Nike Multi-Colored Biker Jacket",
    category: "men",
    image: p24_img,
    new_price: 95.0,
    old_price: 120.5,
    description: "Add a touch of elegance with this multi-colored Nike biker jacket, perfect for trendy outings."
  },
  {
    id: 25,
    name: "Stylish Light Blue Jacket",
    category: "kids",
    image: p25_img,
    new_price: 105.0,
    old_price: 120.5,
    description: "This stylish light blue jacket is a versatile piece that can elevate any outfit effortlessly."
  },
  {
    id: 26,
    name: "Comfortable Grey Long Sleeves",
    category: "kids",
    image: p26_img,
    new_price: 65.0,
    old_price: 120.5,
    description: "Enjoy ultimate comfort with this grey long sleeve shirt, perfect for lounging or casual outings."
  },
  {
    id: 27,
    name: "Chic Black Denim Jacket",
    category: "kids",
    image: p27_img,
    new_price: 90.0,
    old_price: 120.5,
    description: "This chic black denim jacket is a timeless piece that pairs well with almost any outfit."
  },
  {
    id: 28,
    name: "Traditional Brown Dashiki",
    category: "kids",
    image: p28_img,
    new_price: 90.0,
    old_price: 120.5,
    description: "Celebrate tradition with this beautiful brown dashiki, perfect for cultural events or gatherings."
  },
  {
    id: 29,
    name: "Comfortable Pink Long Sleeves",
    category: "kids",
    image: p29_img,
    new_price: 65.0,
    old_price: 120.5,
    description: "This comfortable pink long sleeve shirt adds a fresh pop of color to your casual look."
  },
  {
    id: 30,
    name: "Stylish Khaki Long Sleeves",
    category: "kids",
    image: p30_img,
    new_price: 75.0,
    old_price: 120.5,
    description: "Add sophistication to your outfit with this stylish khaki long sleeve shirt, suitable for any occasion."
  },
  {
    id: 31,
    name: "Sleek Black Men’s Coat",
    category: "kids",
    image: p31_img,
    new_price: 120.0,
    old_price: 150.5,
    description: "This sleek black coat is perfect for formal events or a stylish night out."
  },
  {
    id: 32,
    name: "Warm Green Men’s Coat",
    category: "kids",
    image: p32_img,
    new_price: 140.0,
    old_price: 170.5,
    description: "Stay warm and stylish with this green coat, ideal for chilly weather."
  },
  {
    id: 33,
    name: "Smart Casual Black Men’s Blazer",
    category: "kids",
    image: p33_img,
    new_price: 135.0,
    old_price: 160.5,
    description: "This smart black blazer is perfect for office wear or semi-formal events."
  },
  {
    id: 34,
    name: "Casual Elegant Light Blue Jacket",
    category: "kids",
    image: p34_img,
    new_price: 130.0,
    old_price: 150.5,
    description: "This light blue jacket adds a casual yet elegant touch to your outfit."
  },
  {
    id: 35,
    name: "Trendy Khaki Overcoat",
    category: "kids",
    image: p35_img,
    new_price: 145.0,
    old_price: 180.5,
    description: "This trendy khaki overcoat is perfect for layering and adds a stylish flair to your look."
  },
  {
    id: 36,
    name: "Stylish Black Overcoat",
    category: "kids",
    image: p36_img,
    new_price: 150.0,
    old_price: 200.5,
    description: "Elevate your wardrobe with this stylish black overcoat, ideal for any occasion."
  },

];

export default all_product;
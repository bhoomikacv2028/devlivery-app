import appleImg from "@/assets/products/apple.jpg";
import bananaImg from "@/assets/products/banana.jpg";
import mangoImg from "@/assets/products/mango.jpg";
import orangeImg from "@/assets/products/orange.jpg";
import grapesImg from "@/assets/products/grapes.jpg";
import tomatoImg from "@/assets/products/tomato.jpg";
import potatoImg from "@/assets/products/potato.jpg";
import onionImg from "@/assets/products/onion.jpg";
import bhindiImg from "@/assets/products/bhindi.jpg";
import corianderImg from "@/assets/products/coriander.jpg";
import chilliesImg from "@/assets/products/chillies.jpg";
import milkImg from "@/assets/products/milk.jpg";
import paneerImg from "@/assets/products/paneer.jpg";
import curdImg from "@/assets/products/curd.jpg";
import butterImg from "@/assets/products/butter.jpg";
import eggsImg from "@/assets/products/eggs.jpg";
import attaImg from "@/assets/products/atta.jpg";
import riceImg from "@/assets/products/rice.jpg";
import dalImg from "@/assets/products/dal.jpg";
import oilImg from "@/assets/products/oil.jpg";
import maggiImg from "@/assets/products/maggi.jpg";
import biscuitsImg from "@/assets/products/biscuits.jpg";
import namkeenImg from "@/assets/products/namkeen.jpg";
import chocolateImg from "@/assets/products/chocolate.jpg";
import chipsImg from "@/assets/products/chips.jpg";

export type Category = "Fruits" | "Vegetables" | "Dairy" | "Staples" | "Snacks";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  unit: string;
  inStock: boolean;
}

export const categories: { name: Category; emoji: string }[] = [
  { name: "Fruits", emoji: "🍎" },
  { name: "Vegetables", emoji: "🥦" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Staples", emoji: "🌾" },
  { name: "Snacks", emoji: "🍿" },
];

export const formatPrice = (price: number) => `₹${price}`;

export const products: Product[] = [
  // Fruits
  { id: "1", name: "Apple", price: 120, image: appleImg, category: "Fruits", unit: "per kg", inStock: true },
  { id: "2", name: "Banana", price: 40, image: bananaImg, category: "Fruits", unit: "per dozen", inStock: true },
  { id: "3", name: "Alphonso Mango", price: 250, image: mangoImg, category: "Fruits", unit: "per kg", inStock: true },
  { id: "4", name: "Orange (Nagpur)", price: 80, image: orangeImg, category: "Fruits", unit: "per kg", inStock: true },
  { id: "5", name: "Grapes", price: 90, image: grapesImg, category: "Fruits", unit: "per kg", inStock: true },
  // Vegetables
  { id: "6", name: "Tomato", price: 40, image: tomatoImg, category: "Vegetables", unit: "per kg", inStock: true },
  { id: "7", name: "Aloo (Potato)", price: 30, image: potatoImg, category: "Vegetables", unit: "per kg", inStock: true },
  { id: "8", name: "Pyaaz (Onion)", price: 35, image: onionImg, category: "Vegetables", unit: "per kg", inStock: true },
  { id: "9", name: "Bhindi (Okra)", price: 45, image: bhindiImg, category: "Vegetables", unit: "per 500g", inStock: true },
  { id: "10", name: "Hara Dhania", price: 10, image: corianderImg, category: "Vegetables", unit: "per bunch", inStock: true },
  { id: "11", name: "Hari Mirch", price: 15, image: chilliesImg, category: "Vegetables", unit: "per 100g", inStock: true },
  // Dairy
  { id: "12", name: "Toned Milk", price: 28, image: milkImg, category: "Dairy", unit: "500 ml", inStock: true },
  { id: "13", name: "Paneer", price: 90, image: paneerImg, category: "Dairy", unit: "200g", inStock: true },
  { id: "14", name: "Dahi (Curd)", price: 35, image: curdImg, category: "Dairy", unit: "400g", inStock: true },
  { id: "15", name: "Amul Butter", price: 55, image: butterImg, category: "Dairy", unit: "100g", inStock: true },
  { id: "16", name: "Eggs", price: 75, image: eggsImg, category: "Dairy", unit: "dozen", inStock: false },
  // Staples
  { id: "17", name: "Atta (Wheat Flour)", price: 220, image: attaImg, category: "Staples", unit: "5 kg", inStock: true },
  { id: "18", name: "Basmati Rice", price: 180, image: riceImg, category: "Staples", unit: "1 kg", inStock: true },
  { id: "19", name: "Toor Dal", price: 140, image: dalImg, category: "Staples", unit: "1 kg", inStock: true },
  { id: "20", name: "Sunflower Oil", price: 160, image: oilImg, category: "Staples", unit: "1 litre", inStock: true },
  // Snacks
  { id: "21", name: "Maggi Noodles", price: 14, image: maggiImg, category: "Snacks", unit: "per pack", inStock: true },
  { id: "22", name: "Cream Biscuits", price: 30, image: biscuitsImg, category: "Snacks", unit: "per pack", inStock: true },
  { id: "23", name: "Namkeen Mix", price: 45, image: namkeenImg, category: "Snacks", unit: "200g", inStock: true },
  { id: "24", name: "Dairy Milk", price: 40, image: chocolateImg, category: "Snacks", unit: "per bar", inStock: true },
  { id: "25", name: "Chips", price: 20, image: chipsImg, category: "Snacks", unit: "per pack", inStock: true },
];

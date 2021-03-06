import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Chicken, Protein Noodles & Greens",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Spicy Chicken, Rice and Steamed Greens",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Chicken Fajita Wrap & Mediterranean Veg",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Garlic Chicken, Sweet Mash and Greens",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Chicken, Bacon & Sweet Potato Skillet",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Chicken Jambalaya",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "chicken dish",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Ezekiel Pizza - Plain Chicken",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "pizza",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Ezekiel Pizza - Tuna",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "pizza",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
  {
    name: "Ezekiel Pizza - Bolognese",
    macros: { calories: 471, protein: 33, carbs: 56, fat: 12 },
    type: "pizza",
    image:
      "https://system.modelhealthkitchen.com/storage/images/TMfVMFjQHK.png",
  },
];

const ProductList = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProductCard = styled(motion.li)`
  z-index: 0;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 1rem;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);

  img {
    margin-top: -50px;
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
`;

const Index = () => {
  const [modelData, setModelData] = useState(null);
  return (
    <ProductList>
      {data.map((item, index) => (
        <Link href="/page2">
          <ProductCard
            key={item.name}
            onClick={() => {
              setModelData(item);
            }}
          >
            <>
              <motion.img
                animate={{
                  borderRadius: "100px",
                }}
                layoutId={index === 0 ? item.name : null}
                src={item.image}
                alt={item.name}
              />
              <motion.h2>{item.name}</motion.h2>
            </>
          </ProductCard>
        </Link>
      ))}
    </ProductList>
  );
};

export default Index;

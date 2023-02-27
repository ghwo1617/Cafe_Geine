import { Inter } from "@next/font/google";
import React, { useState } from 'react';
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Main.module.css";
import NavBar from "../components/NavBar";
import SelectMenu from "../components/SelectMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
      <SelectMenu />
    </main>
  );
}

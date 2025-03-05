import Image from "next/image";
import Land from "./screen/home";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WriteWiz ⚡',
  description:
    'Effortless Blogging , Inspired Writing',
};

export default function Home() {
  return (
     <>
     <Land/>
     
     </>
  );
}

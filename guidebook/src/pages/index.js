import Image from 'next/image';
import { Inter } from 'next/font/google';
import Productcard from '@/components/Productcard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div>
        <Productcard />
      </div>
    </main>
  );
}

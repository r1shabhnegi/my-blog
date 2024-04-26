import WrapContainer from '@/components/WrapContainer';
import Image from 'next/image';
import BannerImage from '../../public/Banner-Image.jpeg';
import { FaXTwitter } from 'react-icons/fa6';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '700' });

export default function Home() {
  return (
    <main className=''>
      <WrapContainer>
        <div className='flex flex-col justify-center items-center py-10 gap-10 '>
          <div className='w-36'>
            <Image
              src={BannerImage}
              alt='Banner Image'
              className='object-cover rounded-full'
            />
          </div>

          <div className=' flex justify-center items-center flex-col gap-10'>
            <h1 className={`${poppins} font-bold text-5xl  tracking-tight`}>
              Hi, I&apos;m Rishabh Negi
            </h1>
            <h2 className='font- text-2xl text-gray-700  tracking-normal max-w-prose text-center'>
              I&apos;m an experienced full-stack developer who loves sharing
              knowledge through engaging and insightful blog articles covering
              various aspects of software development and design.
            </h2>
          </div>
        </div>
      </WrapContainer>

      {/* <WrapContainer>
        <div className='relative flex  justify-center my-10 bg-[rgb(250,250,250)] p-10 rounded-xl gap-10 items-center'>
          <div className='w-24'>
            <Image
              src={BannerImage}
              alt='Banner Image'
              className='object-cover rounded-full'
            />
          </div>

          <div className='flex flex-col flex-1 justify-center gap-2'>
            <div className='flex justify-center flex-col'>
              <h1 className='font-bold italic text-4xl  tracking-tighter'>
                Rishabh Negi
              </h1>
              <h2 className='font-semibold text-lg  tracking-normal'>
                I write amazing short blog articles about software development
                and design.
              </h2>
            </div>
            <div>
              <FaXTwitter />
            </div>
          </div>

        </div>
      </WrapContainer> */}
    </main>
  );
}

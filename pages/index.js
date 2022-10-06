import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import fredo from '../public/me.jpeg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alfredo Patricius Tarigan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10" >
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Alfredo</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-3xl py-2 text-teal-600 font-medium'>Alfredo Patricius Tarigan</h2>
            <h3 className='text-2xl py-2'>Fullstack Mobile Developer</h3>
            <p className='text-medium leading-relaxed py-5 text-gray-800'>
              Hi, i am an Fullstack Mobile Developer who love programming and learning new Things. I am currently working as a Mobile Developer at PT. Literasia Edutekno Digital.
              I have experience in developing mobile application using Flutter and i also have experience in developing backend using PHP and Laravel Framework.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto rounded-full w-64 h-64 mt-20 '>
            <Image src={fredo} alt="Picture of the author" className='rounded-full' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-10'>Services I Offer</h3>
            <p className='text-md leading-relaxed text-gray-800'>
              Since i am a Fullstack Mobile Developer, i can help you to build your mobile application from scratch. &nbsp;
              <span className="text-teal-500">
                You can consulted me about your mobile application idea and i will help you to build it.
              </span>
            </p>
            <p className='text-md leading-relaxed text-gray-800'>
              I offer services for building mobile application using Flutter and i also offer services for building backend using PHP and Laravel Framework.
            </p>
          </div>
          <div>
            <div>
              <Image src={design} width={100} height={100} />
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}

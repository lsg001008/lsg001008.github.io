import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hi, I&apos;m Sanggeon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <button type='button' className='btn btn-primary'>
        Primary
      </button>
    </div>
  );
};

export default Home;

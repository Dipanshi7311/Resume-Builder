import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/icons/icons8-resume-100.png" />
        <title>E-Resume: Home</title>
        <meta name="description" content="Single Page Resume Builder" />
      </Head>

      <HomeLayout />
    </div>
  );
};

export default HomePage;

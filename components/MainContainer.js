import Header from './Header';
import Head from 'next/head'


export default function MainContainer({children, pages}) {
  return (
      <>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon" />
          </Head>
          {/* <Header pages={pages}/> */}
          <main className="main">{children}</main>

      </>
  );
}

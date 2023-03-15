import Head from 'next/head';
import Button from 'components/Button';

export default function Home() {
  const handleClick = () => {
    alert('click');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome!</h1>
        <Button onClick={handleClick}>Click me!</Button>
      </main>
    </div>
  );
}

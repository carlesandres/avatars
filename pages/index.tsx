import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Jdenticon from 'react-jdenticon';

export default function Home() {
  const [name, setName] = useState('test');
  const inputRef = useRef(null);

  useEffect( () => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="text-4xl font-bold mb-16 text-gray-600">Client-side avatars</h1>
        <Jdenticon size="100" value={name || 'test'} />
        <div className="mt-8 flex gap-8 items-center w-full">
          <input
            className="border p-2 flex-1 border-gray-500 rounded max-w-lg mx-auto"
            placeholder="Type your name"
            ref={inputRef}
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
}

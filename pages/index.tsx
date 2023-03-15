import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Jdenticon from 'react-jdenticon';

export default function Home() {
  const [name, setName] = useState('test');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="mb-16 text-4xl font-bold text-gray-600">
          Client-side avatars
        </h1>
        <div className="flex gap-4 items-center">
          <Jdenticon size="50" value={name || 'test'} />
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <Jdenticon size="50" value={name || 'test'} />
          </div>
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <div className="-m-1 overflow-hidden rounded">
              <Jdenticon size="50" value={name || 'test'} />
            </div>
          </div>
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <div className="-m-1.5 overflow-hidden rounded">
              <Jdenticon size="50" value={name || 'test'} />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-4 items-center">
          <Jdenticon size="25" value={name || 'test'} />
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <Jdenticon size="25" value={name || 'test'} />
          </div>
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <div className="-m-1 overflow-hidden rounded">
              <Jdenticon size="25" value={name || 'test'} />
            </div>
          </div>
          <div className="overflow-hidden rounded-full border border-gray-300 ">
            <div className="-m-1.5 overflow-hidden rounded">
              <Jdenticon size="25" value={name || 'test'} />
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full items-center gap-8">
          <input
            className="mx-auto max-w-lg flex-1 rounded border border-gray-300 p-2"
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

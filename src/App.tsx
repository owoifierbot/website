import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './owoifier.png';

function App() {
  return (
    <div className="max-w-full h-screen flex flex-col p-4 dark:bg-black dark:text-white">
      <header className="flex flex-row p-4">
        <div className="flex-1">
          <Link to="/">
            <img className="w-16 h-16" alt="Owoifier Logo" src={Logo} />
          </Link>
        </div>
        <a href="https://owoifierbot.xyz/invite">
          <button
            type="button"
            className="text-blue-400  border-2 border-blue-400  focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
          >
            Add To Discord
          </button>
        </a>
      </header>
      <main className="flex-1 flex flex-col gap-8 justify-center items-center">
        <p className="font-sans text-5xl leading-none font-extrabold text-center">
          Make your Discord chat
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-yellow-500">
            owoified
          </span>
        </p>
        <p className="font-sans text-lg font-medium leading-6">
          Owoifier is a bot for Discord which takes your messages and makes them
          owo.
        </p>
        <div className="bg-gray-800 p-4 flex flex-row gap-4 rounded-lg shadow-2xl">
          <img
            className="w-10 h-10 rounded-full"
            alt="Owoifier Logo"
            src={Logo}
          />
          <div className="flex-1 flex flex-col font-sans text-white">
            <p className="flex flex-row items-center font-bold">
              Owoifier
              <span className="mx-1 px-1 py-0.5 rounded-md bg-blue-500 text-xs text-white">
                ✓ BOT
              </span>
            </p>
            <p>
              oh dear gwod pwease help mwe, save mwe fwom this heww that is owo
            </p>
          </div>
        </div>
      </main>
      <footer className="w-full flex flex-row gap-4 justify-center items-center text-gray-500 text-sm">
        <a href="https://rauf.wtf/discord">Support Server</a>
        <Link to="/policy">Privacy Policy</Link>
      </footer>
    </div>
  );
}

export default App;

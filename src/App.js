import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { instantiateSecp256k1, hexToBin } from "@bitauth/libauth";

const pubkey = hexToBin(
  "f10d00bd9560d70898651d5f984e3b58b11d334efafee1ce9ce17afd36ecc3e2affc6446f0e25989fec1cc69abcdd02da1bc6b2744f265c99975beac4156daf2"
);
const msgHash = hexToBin(
  "cc8cbf34b5a24ad1562e0b6f9870a8d376aea8fc53d9fb3fc4485b41fbf464ec"
);
const sig = hexToBin(
  "92c3f7c6981fa678559ada4d179f91b19083ab8253cd7842dec969f2533fbb2282fe69799d7e59ed47f001ad08fcf2e38a7ccfe5a8957cf602882c9061860fe7"
);

(async () => {
  const secp256k1 = await instantiateSecp256k1();
  secp256k1.verifySignatureDERLowS(sig, pubkey, msgHash)
    ? console.log("🚀 Signature valid")
    : console.log("❌ Signature invalid");
})();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

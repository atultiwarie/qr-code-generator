import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded px-4 py-2 mb-4 text-lg"
      />

      {text && (
        <div className="flex justify-center mb-4">
          <QRCode value={text} size={200} />
        </div>
      )}

      <p className="text-sm text-gray-600">
        Paste a link or message to generate a QR code.
      </p>
    </div>
  );
}

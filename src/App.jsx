import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <button className="big-button" onClick={() => setShowMessage(true)}>
        Pulsa aquí
      </button>
      {showMessage && <p className="message">Eres el mejor</p>}
    </div>
  );
}

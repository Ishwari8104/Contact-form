import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profilepage } from "./components/Profilepage";
import { Thankyou } from "./components/Thankyou";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profilepage onFormSubmit={handleFormSubmit} />} />
        {formSubmitted && <Route path='/thank-you' element={<Thankyou />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

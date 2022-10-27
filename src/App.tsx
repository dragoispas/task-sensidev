import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterDetailsPage } from "./pages/CharacterDetailsPage";
import { CharacterGridPage } from "./pages/CharacterGridPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="/" element={<CharacterGridPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

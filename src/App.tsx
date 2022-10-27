import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '@pages/mainPage';
import PageLayout from '@pages/pageLayout';
import SearchPage from '@pages/searchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<MainPage />} />
            <Route path="address" element={<SearchPage />} />
          </Route>
          <Route path="*" element={<h1 style={{ fontSize: "30px" }}>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

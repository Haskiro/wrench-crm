import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Spinner from '@components/spinner';

const PageLayout = lazy(() => import('@pages/pageLayout'));
const SearchPage = lazy(() => import('@pages/searchPage'));
const MainPage = lazy(() => import('@pages/mainPage'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <Spinner />
          </div>}
        >
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<MainPage />} />
              <Route path="address" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<h1 style={{ fontSize: "30px" }}>Error 404</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div >
  );
}

export default App;

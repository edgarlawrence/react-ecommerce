import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Layout from './UI/Layout';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail" element={<Detail />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

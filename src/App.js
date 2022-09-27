import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Layout from './UI/Layout';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ResultShop from './Pages/ResultShop';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />} >
                  <Route path="/" element={<Home />} />
                  <Route path="/detail" element={<Detail />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/result" element={<ResultShop />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

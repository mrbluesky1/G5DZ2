import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/hoc/Layout";
import PostPage from "./pages/PostPage";
import {PostMoreInfo} from "./components/PostMoreInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="/posts" element={<PostPage/>}/>
        </Route>
        <Route path="posts/:id" element={<PostMoreInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

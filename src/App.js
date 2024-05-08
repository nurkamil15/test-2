import {Route, Routes} from "react-router-dom";
import PostPage from "./PostPage";

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PostPage/>} />
        </Routes>
    </div>
  );
}

export default App;

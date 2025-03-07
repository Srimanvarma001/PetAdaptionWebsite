import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NextPage from "./NextPage";

function App() {

  
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/next" element={<NextPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



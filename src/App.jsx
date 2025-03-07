import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NextPage from "./NextPage";

function App() {

  
    return(
        <>
            <TopBar/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/next" element={<NextPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

function TopBar(){
    return<div style={{display:"flex",justifyContent:"center",backgroundColor:"#c59771bd" , color:"white",fontSize:"20px"}}> Pet Adaption Form</div>
}
export default App;



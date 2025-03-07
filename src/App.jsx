import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NextPage from "./NextPage";

function App() {

  
    return(
        <>  <div style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
            height: "100vh",
            backgroundSize: "cover"
            }}>
                <TopBar/>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/next" element={<NextPage/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

function TopBar(){
    return<div style={{display:"flex",justifyContent:"center",backgroundColor:"#c59771bd" , color:"white",fontSize:"20px"}}> Pet Adaption Form</div>
}
export default App;



import { useNavigate } from "react-router-dom";

function NextPage() {
  const navigate = useNavigate();
  const handleReload = ()=> {
    navigate("/");
  };

    return <>
              <div style={{ textAlign: "center",color:"white",backgroundColor:"#c59771bd",gap:"7px"}}>
                <h1>Thank You!</h1> 
                <h1>Form Submitted 🐶🐱</h1>
                <div>Return to HomePage??</div>
                <button onClick={handleReload} style={{ padding: "7px 7px", fontSize: "13px" }}>
                  Reload
                </button>              
              </div>;
            </>
  }
  
  export default NextPage;
  
import { useNavigate } from "react-router-dom"



function HomePage(){
    const navigate = useNavigate();
    function NextPage(){
        navigate("/next");
    }
    function MainContent(){
 
      return <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"10px",
        alignItems:"center",
        backgroundColor:"#c59771bd",
        marginTop:"10px",
        marginLeft:"70px",
        marginRight:"70px",
        marginBottom:"30px",
        height:"85vh"}}>
          
            <div> TYPE OF PET</div>
            <input placeholder='Dog/cat'></input>
            <div>Breed</div>
            <input placeholder='Type of Breed'></input>
            <div>Your Name </div>
            <input placeholder='Your sweet Name'></input>
            <div>Phone No</div>
            <input placeholder='+91'></input>
            <div>Email</div>
            <input placeholder='@gmail.com'></input>
            <div>
              <button onClick={NextPage} style={{backgroundColor:"green"}}>Submit</button>
            </div>
            
            
      
          
      </div>
    }
    return <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
      height: "100vh",
      backgroundSize: "cover"
    }}>
      <MainContent/>
    </div>
}

export default HomePage;
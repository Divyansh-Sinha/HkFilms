import React,{useState , useEffect}  from "react";
import styled from "styled-components";
import {HashRouter} from 'react-router-dom'
import Navbar from "./Navbar/Navbar";
import PacmanLoader from "react-spinners/PacmanLoader";
import FooterPage from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import ReactGA from 'react-ga';





const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // ReactGA.initialize('UA-199375039-1')
    // ReactGA.pageview('/')
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 4000)
  },[])
  return (

    <div>
     { loading ? 

     ( 
       <Loader>
       <PacmanLoader color={"#F37A24"} loading={loading}  size={30} />
       </Loader>
       )

      :
      (
        <Container>
        <HashRouter>
      <Navbar></Navbar> 
      </HashRouter>
      <FooterPage/>
      </Container>    )}
    </div>
  );
};

const Container = styled.div`
  background: var(--primary-bg-clr);
  height: 100%;
`;

const Loader = styled.div`
    text-align: center;
    background-color: #282c34;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export default App;

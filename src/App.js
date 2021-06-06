import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import HomeScreen from './components/screens/HomeScreen';
import Sidebar from './components/sidebar/Sidebar';

const Layout=({children})=>{
  const [sidebar,setSidebar]=useState(false)
  console.log(sidebar)
  function handleSidebar(){
    setSidebar(!sidebar)
  }
  console.log(sidebar)

 
  return (
    <React.Fragment>
      <Header handleSidebar={handleSidebar} />
      <div className="flex w-full">
        <Sidebar handleSidebar={handleSidebar} sidebar={sidebar}/>
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}


function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/">
     <Layout>
       <HomeScreen/>
     </Layout>
    </Route>
    </Switch>
  </Router>
    
  );
}

export default App;

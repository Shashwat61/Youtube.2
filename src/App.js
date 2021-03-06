import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Route,Switch, useHistory} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import LikeVideos from './components/likedvideos/LikeVideos';
import ChannelScreen from './components/screens/channelScreen/ChannelScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/login/LoginScreen';
import NotFound from './components/screens/notfound/NotFound';
import SearchScreen from './components/screens/searchScreen/SearchScreen';
import Subscriptions from './components/screens/subscriptions/Subscriptions';
import WatchScreen from './components/screens/watchscreen/WatchScreen';
import Sidebar from './components/sidebar/Sidebar';

const Layout=({children})=>{
  const [sidebar,setSidebar]=useState(true)
  console.log(sidebar)
  function handleSidebar(){
    setSidebar(!sidebar)
  }


 
  return (
    <React.Fragment>
      <Header handleSidebar={handleSidebar} />
      <div className="flex w-full h-full ">
        <Sidebar handleSidebar={handleSidebar} sidebar={sidebar}/>
        <div className="w-full px-6 overflow-x-hidden">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}


function App() {
 const {accessToken,loading}=useSelector(state=>state.auth)
 const history=useHistory()

  useEffect(()=>{
     if(!accessToken && !loading){
         history.push('/auth')        
     }   

  },[accessToken,loading,history])

   
  return (
  
    <Switch>
    <Route exact path="/">
     <Layout>
       <HomeScreen/>
     </Layout>
    </Route>
    
    <Route path="/auth">
      <LoginScreen/>
    </Route>
    <Route path="/watch/:id">
      <Layout>
      <WatchScreen/>
      </Layout>
    </Route>
    <Route path="/search/:query">
      <Layout>
      <SearchScreen/>
      </Layout>
    </Route>
    <Route path='/feed/subscriptions'>
      <Layout>
    <Subscriptions/>
      </Layout>
    </Route>
    <Route path='/channel/:channelId'>
      <Layout>
      <ChannelScreen/>
      </Layout>
    </Route>
    <Route path='/liked'>
      <Layout>
      <LikeVideos/>
      </Layout>
    </Route>

    <Route>
      <NotFound/>
    </Route>
    </Switch>
  
    
  );
}

export default App;

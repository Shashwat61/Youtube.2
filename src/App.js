import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import VideoContainer from './components/videocontainer/VideoContainer';

function App() {
  return (
    <>
     <Header/>
     <div className="flex w-full">
     <Sidebar/>
     <VideoContainer/>
     </div>


     </>
    
  );
}

export default App;

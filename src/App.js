
import './App.css';
import Copyright from './Components/Copyright';
import TopMenu from './Components/TopMenu';
import Main from './Components/Main';
import Contact from './Components/Contact';

function App() {

  const isDarkMode = true;
  return (
    <div className={` w-12/12 flex justify-center  flex-col mx-auto ${isDarkMode ? "dark" : ""}`}>
    <TopMenu />
    <Main />
    <Contact />
    <Copyright />
   </div>
  );
}

export default App;

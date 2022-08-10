
import './App.css';
import Copyright from './Components/Copyright';
import TopMenu from './Components/TopMenu';
import Main from './Components/Main';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='px-5 w-11.5/12 flex justify-center lg:w-10/12  xl:w-9/10 flex-col mx-auto'>
    <TopMenu />
    <Main />
    <Contact />
    <Copyright />
   </div>
  );
}

export default App;

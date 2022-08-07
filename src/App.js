
import './App.css';
import Copyright from './Components/Copyright';
import TopMenu from './Components/TopMenu';
import Main from './Components/Main';

function App() {
  return (
    <div className='px-5 w-11.5/12 flex justify-center flex-col mx-auto'>
    <TopMenu />
    <Main />
   <Copyright />
 

   </div>
  );
}

export default App;

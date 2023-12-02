import logo from './logo.svg';
import './App.css';
import Testimonial from './component/Testimonial';
import Data from './component/Data'; 

function App() {
  // console.log(Data[0]);

  return (
    <div  className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        <div className='mx-auto bg-violet-400 h-[4px] w-1/5 mt-1'></div>
        <Testimonial Data={Data}/>
      </div>
    </div>
  );
}

export default App;

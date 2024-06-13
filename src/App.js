
import './App.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoPage from './components/VideoPage';

const appRouter = createBrowserRouter([{
path :"/",
element :<Body/>
},
{
  path:"/watch",
  element :<VideoPage/>
}

]
);
function App() {
  return (
    <Provider store ={store}>
    <div className="h-auto font-bold m-4 p-4">
    <div>
      <Header/>
    </div>
    <div className='flex'>
    <div className='w-1/6 m-5'>
        <Sidebar/>
    </div>
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
     </div>
    </div>
    </Provider>
  );
}

export default App;

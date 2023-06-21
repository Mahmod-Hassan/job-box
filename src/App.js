
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import Main from './components/Main';

function App() {
  console.log(process.env);
  return (
    <div>
        <RouterProvider router={router}>
           <Main></Main>
        </RouterProvider>
    </div>
  );
}

export default App;

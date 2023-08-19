import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './style.css';
import Toolbar from './Toolbar';

const App = () => {
  const navigate = useNavigate();
  const [toolbarIsHidden, settoolbarIsHidden] = useState(true);
  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div className='bg-slate-50 w-screen h-screen'>
      <img
        src="/static/bars-solid.svg"
        height={'50px'}
        width={'50px'}
        className="border-solid border-2 m-3 py-2 px-2.5 rounded-md absolute top-5 left-5 hover:bg-slate-200"
        onClick={() => settoolbarIsHidden(false)}
      ></img>   
      <Toolbar toolbarIsHidden={toolbarIsHidden} settoolbarIsHidden={settoolbarIsHidden} />
      <Outlet />
    </div>
  );
};

export default App;

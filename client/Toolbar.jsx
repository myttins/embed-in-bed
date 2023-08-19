import React from 'react';
import { useNavigate } from 'react-router-dom';

const Toolbar = (props) => {
  const { toolbarIsHidden, settoolbarIsHidden } = props;
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${
          toolbarIsHidden && 'hidden'
        } absolute w-screen h-full bg-slate-950 top-0 left-0 absolute opacity-50`}
        onClick={() => settoolbarIsHidden(true)}
      ></div>
      <div
        className={`${
          toolbarIsHidden && 'hidden'
        } absolute w-60 h-full bg-white top-0 left-0`}
      >
        <a
          className="block mx-4 my-2 px-2 py-2 hover:bg-slate-100 rounded-md"
          onClick={() => {
            navigate('/home');
            settoolbarIsHidden(true);
          }}
        >
          Home
        </a>
        <a className="block mx-4 my-2 px-2 py-2 hover:bg-slate-100 rounded-md">
          Profile
        </a>
        <a className="block mx-4 my-2 px-2 py-2 hover:bg-slate-100 rounded-md">
          Login
        </a>
        <a
          className="block mx-4 my-2 px-2 py-2 hover:bg-slate-100 rounded-md"
          onClick={() => {
            navigate('/history');
            settoolbarIsHidden(true);
          }}
        >
          History
        </a>
      </div>
    </>
  );
};

export default Toolbar;

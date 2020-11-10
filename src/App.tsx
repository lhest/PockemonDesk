import React from 'react';
import {useRoutes} from "hookrouter";
import routes from "./routes";

// import s from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);
  return match;
};

export default App;

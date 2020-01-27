import React from 'react';
import './App.css';
import CountDown from './components/CountDown/CountDown';


export default () => {
  return (
    <>
      <h3>Отсчет до 30 января 12:00:00</h3>
      <CountDown date="2020-01-30 12:00:00" />
    </>
  )
}


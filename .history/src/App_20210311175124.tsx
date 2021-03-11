import logo from './logo.svg';
import './App.css';
import TransTree from './components/TransTree'
import React, { useEffect, useState } from 'react'

function App() {
  return (
    <>
      <TransTree
      dataSource={[]}
      title=""
      value={[]}
      />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TransTree from './components/TransTree'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getInfo = () => axios.get('/api-test/getTreesData')

function App() {
  const [data, setData] = useState([])
  useEffect(() => {

  })
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

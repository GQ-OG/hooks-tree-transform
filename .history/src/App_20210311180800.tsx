import logo from './logo.svg';
import './App.css';
import TransTree from './components/TransTree'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getInfo = () => axios.get('http://localhost:3000/api-test/getTreesData')

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    getInfo().then((res: any) => {
      if(res?.code === 200) {
        setData(res?.data)
      }
    })
  })
  return (
    <div style={{height: "500px"}}>
      <TransTree
      dataSource={data}
      title=""
      value={[]}
      />
    </div>
  );
}

export default App;

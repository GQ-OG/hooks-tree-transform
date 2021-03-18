import React from 'react'
import TransTree from '../../components/TransTree'
import axios from 'axios'
import {
    Button,
    Row,
    Col
} from 'antd'

const getInfo = () => axios.get('http://localhost:3000/api-test/getTreesData')
const getChecked = () => axios.get("http://localhost:3000/api-test/getChecked")

const Home = (props: any) => {
    const [treeData, setTreData] = React.useState([])
    React.useEffect(() => {
        Promise.all([getInfo(), getChecked()]).then((res: any) => {
            console.log(res, "res")
        })
    }, [])
    return (
        <>
            <TransTree
            dataSource={treeData} 
            title=""
            value={[]}
            />
        </>
    )
}

export default Home
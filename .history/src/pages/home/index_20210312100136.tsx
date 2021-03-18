import React from 'react'
import TransTree from '../../components/TransTree'
import axios from 'axios'
import {
    Button,
    Row,
    Col
} from 'antd'

const getInfo = () => axios.get('http://localhost:3000/api-test/getTreesData')

const Home = (props: any) => {
    const [treeData, setTreData] = React.useState([])
    React.useEffect(() => {
        getInfo().then((res: any) => {
            setTreData(res?.data)
        })
    }, [])
    return (
        <>
        <Button>...</Button>
            <TransTree
            dataSource={treeData} 
            title=""
            value={[]}
            />
        </>
    )
}

export default Home
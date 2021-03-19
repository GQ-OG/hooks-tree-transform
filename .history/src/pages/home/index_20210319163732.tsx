import React from 'react'
import TransTree from '../../components/TransTree'
import axios from 'axios'
import {
    Button,
    Row,
    Col
} from 'antd'
import { truncate } from '_@types_lodash@4.14.168@@types/lodash'

const getInfo = () => axios.get('http://localhost:3000/api-test/getTreesData')
const getChecked = () => axios.get("http://localhost:3000/api-test/getChecked")

const Home = (props: any) => {
    const [treeData, setTreData] = React.useState([])
    const [checked, setChecked] = React.useState([])
    React.useEffect(() => {
        Promise.all([getInfo(), getChecked()]).then((res: any) => {
            setTreData(res[0]?.data?.data)
            setChecked(res[1]?.data?.data?.data)
        }).catch((err: any) => {
        })
    }, [])  
    return (
        <>
            <TransTree
            dataSource={treeData} 
            title=""
            value={checked}
            />
        </>
    )
}

export default Home
import React from 'react'
import TransTree from '../../components/TransTree'
import axios from 'axios'

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
            
        </>
    )
}

export default Home
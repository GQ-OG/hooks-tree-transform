import React, { useState, useEffect } from 'react'
import {
    Tree,
    Row,
    Col,
    Input,
    Select,
    Button
} from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import 'antd/dist/antd.css';
import _ from 'lodash'
import { getMountedTree } from './utils'

const { Search } = Input

/**
 * @dataSource 渲染的树形结构源数据
 * @title 标题
 * @tip 不做异步初始数据, dataScource与value同步传入
 * @value 受控模式
 * @defaultValue 非受控模式
 * @showSearch 是否展示搜索框
 * @onChange 值被修改时触发的方法
 * @disabled 按钮禁用状态
 * @leftTreesData
 *      -@checked 被选择的数据
*       -@dataScource Tree绑定的数据源
 */ 

interface paramsState{
    title: string;
    key: string;
    children: string;
}

interface propsState{
    dataSource: Array<any>;
    title: any;
    value: Array<any>,
    defaultValue?: Array<any>,
    showSearch?: boolean,
    onChange?: void;
}

const TransTree = (props: propsState) => {
    const {
        title = "",
        onChange = () => {},
        dataSource = [],
        value = [],
        defaultValue = [],
        showSearch = true
    } = props

    // 展开的节点
    const [expand_left, setExpant_left] = useState([])
    const [expand_right, setExpand_right] = useState([])

    // 按钮状态
    // 通过tree的onCheeck决定
    const [status_left, setStatus_left] = useState(true)
    const [status_right, setStaus_right] = useState(true)

    // 左树
    const [leftTreesData, setLeftTreesData] = useState<any>({
        render: [],
        checked: [],
        dataSource: []
    })
    // 右树
    const [rightTreesData, setRightTreesData] = useState<any>({
        render: [],
        checked: [],
        dataSource: []
    })
    const [disabled, setDisabled] = useState({
        left: false,
        right: false
    })
    useEffect(() => {
        // console.log(leftTreesData, "leftTreesData")
    }, [leftTreesData])
    
    useEffect(() => {
        if(!_.isEmpty(value) && _.isArray(value)) {
            // value的优先级大于defaultValue
            console.log(dataSource, value, defaultValue)
            // const localRightTrees = _.cloneDeep(rightTreesData)
                setLeftTreesData({
                    render: [],
                    checked: [],
                    dataSource: dataSource
                })
        }
        else if(!_.isEmpty(value) && _.isArray(value)) {
            const leftDataSource = getMountedTree(dataSource, "left", defaultValue)
            const gightDataSource = getMountedTree(dataSource, "right", defaultValue)
            // console.log(dataSource, value, defaultValue)
            setLeftTreesData({
                render: [],
                checked: [],
                dataSource: dataSource
            })
        }
    }, [])
    return (
        <>
            <Row gutter={24} justify="center" align="middle" style={{height: "100%"}}>
                <Col span={11}>
                    <Tree
                    checkable
                    treeData={leftTreesData?.dataSource}
                    checkedKeys={leftTreesData?.checked}
                    onCheck={(v: any, r: any) => {
                        console.log(v, "vvvvvv")
                        // setLeftTreesData({
                        //     ...leftTreesData,
                        //     checked: v
                        // })
                    }}
                    />
                </Col>
                <Col span={2}>
                    <div>   
                        <Button 
                        disabled={status_left}
                        type="primary" 
                        icon={<RightOutlined />} />
                        <br />
                        <Button 
                        disabled={status_right}
                        type="primary" 
                        icon={<LeftOutlined />} />
                    </div>
                </Col>
                <Col span={11}>
                    <Tree
                    checkable
                    checkedKeys={rightTreesData?.checked}
                    treeData={rightTreesData?.dataSource}
                    onCheck={(v: any, r: any) => {
                        setRightTreesData({
                            ...leftTreesData,
                            checked: v
                        })
                    }}
                    />
                </Col>
            </Row>
        </>
    )
}

export default TransTree
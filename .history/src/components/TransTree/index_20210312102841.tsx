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

const { Search } = Input

/**
 * @dataSource 渲染的树形结构源数据
 * @title 标题
 * @value 受控模式
 * @showSearch 是否展示搜索框
 * @onChange 值被修改时触发的方法
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
    showSearch?: boolean,
    onChange?: void;
}

const TransTree = (props: propsState) => {
    const {
        title = "",
        onChange = () => {},
        dataSource = [],
        value = [],
        showSearch = true
    } = props
    const [leftTreesData, setLeftTreesData] = useState({
        render: [],
        checked: [],
        dataSource: []
    })
    const [rightTreesData, setRightTreesData] = useState({
        render: [],
        checked: [],
        dataSource: []
    })
    return (
        <>
            <Row gutter={24} justify="center" align="middle" style={{height: "100%"}}>
                <Col span={11}>
                    <Tree
                    checkable
                    treeData={dataSource}
                    />
                </Col>
                <Col span={2}>
                    <div>   
                        <Button type="primary" icon={<RightOutlined />} />
                        <Button type="primary" icon={<LeftOutlined />} />
                    </div>
                </Col>
                <Col span={11}>
                    <Tree
                    // checkable
                    // treeData={dataSource}
                    />
                </Col>
            </Row>
        </>
    )
}

export default TransTree
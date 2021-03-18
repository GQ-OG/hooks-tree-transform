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
    useEffect(() => {
        setLeftTreesData({
            render: [],
            checked: [],
            dataSource: dataSource
        })
        if(!_.isEmpty(value) && _.isArray(value)) {
            // value的优先级大于defaultValue
            const localRightTrees = _.cloneDeep(rightTreesData)
        }
        else if(!_.isEmpty(value) && _.isArray(value)) {
        }
    }, [dataSource, value, defaultValue])
    const [leftTreesData, setLeftTreesData] = useState<any>({
        render: [],
        checked: [],
        dataSource: []
    })
    const [rightTreesData, setRightTreesData] = useState<any>({
        render: [],
        checked: [],
        dataSource: []
    })
    const [disabled, setDisabled] = useState({
        left: false,
        right: false
    })
    return (
        <>
            <Row gutter={24} justify="center" align="middle" style={{height: "100%"}}>
                <Col span={11}>
                    <Tree
                    checkable
                    treeData={leftTreesData?.dataSource}
                    />
                </Col>
                <Col span={2}>
                    <div>   
                        <Button type="primary" icon={<RightOutlined />} />
                        <br />
                        <Button type="primary" icon={<LeftOutlined />} />
                    </div>
                </Col>
                <Col span={11}>
                    <Tree
                    checkable
                    treeData={rightTreesData?.dataSource}
                    />
                </Col>
            </Row>
        </>
    )
}

export default TransTree
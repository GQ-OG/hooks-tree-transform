import React, { useState, useEffect } from 'react'
import {
    Tree,
    Row,
    Col,
    Input,
    Select
} from 'antd'

const { Search } = Input

/**
 * @dataSource 渲染的树形结构源数据
 * @title 标题
 * @value 受控模式
 * @showSearch 是否展示搜索框
 * @onChange 值被修改时触发的方法
 */ 

interface propsState{
    dataSource: Array<any>;
    title: any;
    value: Array<any>,
    showSearch?: boolean,
    onChange?: void;
}

const TransTree = (props: propsState) => {
    return (
        <>
            <Row gutter={24}>
                
            </Row>
        </>
    )
}

export default TransTree
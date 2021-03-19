import {
    cloneDeep,
    isEmpty
} from "lodash"

export const getMountedTree = (dataSource: any, type: string, value: any) => {
    let cloneData = cloneDeep(dataSource)
    let cloneValue = cloneDeep(value)
    if(type === "left") {

    }
    else if(type === "right") {

    }
}

const formartTrees = (arr: any, keys: any) => {
    return arr?.filter((item: any) => keys?.includes(item?.key))?.map((item: any) => ({
        ...item,
        children: formartTrees(item?.children, keys)
    }))
}
export const formartDisableTrees = (arr: any, keys: any) => {
    return arr?.filter((item: any) => !(keys?.includes(item?.key)))?.map((item: any) => ({
        ...item,
        children: formartDisableTrees(item?.children, keys)
    }))
}

export const handleChangeLeft = (treeData: any, allData: any) => {
    // 点击checkBox触发
    let cloneLeft = cloneDeep(treeData)
    const { dataSource, checked, selectDataSource, keys } = cloneLeft
    const selectData: any = getSelectTree({
        dataSource: allData,
        keys: [...keys]
    })
    const returnData = {
        ...cloneLeft,
        selectDataSource: selectData,
        dataSource: dataSource
    }
    return returnData
}

export const handleChangeRight = ({ treeData, leftTree }: any) => {

}
export const getSelectTree = (data: any) => {
    // 根据安全的keys数组和left树得到left树的selectDataSource
    let arr: any = []
    const { dataSource, keys } = data
    dataSource?.map((item: any) => {
        if(keys?.includes(item?.key)) {
            arr.push(({
                ...item,
                children: formartTrees(item?.children, keys)
            }))
        }
    })
    return arr
}

export const getRightTree = (data: any, keys: any) => {
    const newData = data?.map((item: any) => {
        const flag = keys?.includes(item?.key)
        if(flag) {
            return {}
        }
        else {
            return ({
                ...item,
                children: getRightTree(item?.children, keys)
            })
        }
    })
    for(let i in newData) {
        if(isEmpty(i)) {
            delete newData[i]
        }
    }
    return newData

    /**
     * @tips 最深层的从右往左移再右移多出选择
    */
}
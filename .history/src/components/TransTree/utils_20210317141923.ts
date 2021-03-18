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

export const handleChangeLeft = ({ treeData, rightTree }: any) => {
    let cloneLeft = cloneDeep(treeData)
    let cloneRight = cloneDeep(rightTree)
    const { dataSource, checked, selectDataSource, keys } = cloneLeft
    const { dataSource: rightDataSource, checked: rightChecked } = cloneLeft
    const selectData: any = getSelectTree({
        dataSource: dataSource,
        keys: keys
    })
    console.log(dataSource, keys, selectDataSource)
}

export const handleChangeRight = ({ treeData, leftTree }: any) => {

}

export const getSelectTree = (data: any) => {

}
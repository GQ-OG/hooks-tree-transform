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
    const { dataSource, checked, selectDataSource } = cloneLeft
    const { dataSource: rightDataSource, checked: rightChecked } = cloneLeft
    console.log(dataSource, checked, selectDataSource)
}

export const handleChangeRight = ({ treeData, leftTree }: any) => {

}

export const formatoTree = (data: any) => {
    
}
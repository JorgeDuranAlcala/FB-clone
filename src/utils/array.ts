import { UnionType } from "typescript"


export function findAndModify<T extends { _id?: string }>(Id: string, array: Array<T>, newData: T): T[] {

    return array.map(elem => elem._id === Id 
        ? {
            ...elem, 
            ...newData
         } 
        : elem)
}

export function findAndRemoveById<T extends { _id: string }>(Id: string, array: T[]): T[] {

    const itemIndex = array.findIndex(item => item._id === Id)
    array.splice(itemIndex, 1)
    return array
}

export function findAndRemove<T extends unknown>( Element: T, array: T[]): T[] {

    const itemIndex = array.indexOf(Element)
    array.splice(itemIndex, 1)
    return array
}


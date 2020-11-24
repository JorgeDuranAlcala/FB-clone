
interface ElementWithId {
    _id?: string
}

/**
 * A function to modify a specific element inside an array by its id
 * @param {T[]} Id - The specific Id of the object
 * @param {T[]} array - An array of objects which has an _id property
 * @param {Partial<T>} newData - The new data which is going to be insert into the specific element object as a prop
 * @return {T[]} the result will be a new array which has the specific changes
 */

export function findAndModify<T extends ElementWithId>(Id: string, array: T[], newData: Partial<T>): T[] {

    return array.map(elem => elem._id === Id 
        ? {
            ...elem, 
            ...newData
         } 
        : elem)
}


/**
 * A function to remove a specific element into an array by its id
 * @param {T[]} array - An array of objects which has an _id property
 * @param {string} elementId - The specific Id of the object
 * @return {T[]} the result will be a new array widthout the removed element
 */

export function findAndRemoveById<T extends ElementWithId>(array: T[], elementId: string): T[] {

    return array.reduce<T[]>((acc, curr) => {
        if(curr._id !== elementId) {
            acc.push(curr)
        }
        return acc
    }, [])

}

export function findAndRemove<T extends unknown>( Element: T, array: T[]): T[] {

    const itemIndex = array.indexOf(Element)
    array.splice(itemIndex, 1)
    return array
}


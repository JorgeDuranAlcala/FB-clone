

export const findAndModify = (Id: string, array: any[], newData: any) => {

    return array.map(elem => elem._id === Id 
        ? {
            ...elem, 
            ...newData
         } 
        : elem)
}
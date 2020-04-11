
// takes obj value and returns true if was possible Date Object
const isDate = (data) => {
    if (typeof data === "boolean") {
        return false
    } else if (/\b\d{5}\b/g.test(data)) {
        return false
    } else {
        return (new Date(data) !== "Invalid Date" && !isNaN(new Date(data)) ) ? true : false;
    }
}

export const objDatesToFrEndDates = (obj) => {
    const newObj = {}
    Object.keys(obj).forEach(key => {
        if (isDate(obj[key])) {
            newObj[key] = `${new Date(obj[key]).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`
        } else {
            newObj[key] = obj[key]
        }
        // console.log(newObj)
    })
    return newObj
}

export const prepLoanerRowData = (obj) => {
    const objData = {}
    // stockNum
    objData.stockNum = obj.identifiers.stockNum
    // plate
    objData.plate = obj.identifiers.plate
    // ymt
    objData.ymt = `${obj.identifiers.year} ${obj.identifiers.model} ${obj.identifiers.trim} / ${obj.identifiers.color}`
    // status
    objData.status = obj.isOut ? 'Out' : obj.isReserved ? 'Reserved' : ''

    return Object.assign(objData, obj)
}
const array = [3,5,5,7,9,9,1,9,2,5,7,9,2,42,12,56,87,34,23,34]


function removeDuplicates(array) {

    return array.filter((value, index) => {
    
    return array.indexOf(value) === index
    
    })
    
    }
    
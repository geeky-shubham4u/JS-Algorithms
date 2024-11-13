function cartesianProduct(arr1, arr2) {
    const result =[];
    for(let a of arr1){
        for (let b of arr2) {
            result.push([a,b])
        }
    }

    return result;
}

const arr1 = [1,2];
const arr2 = [3,4,5]
console.log(cartesianProduct(arr1, arr2))
const mergeSortedArrays = (arr1: number[], arr2: number[]) : number[] | null => {
    if(!arr1 || !arr2) return arr1 || arr2;
    if(!arr1 && !arr2) return null;

    const mergedArray = [...arr1, ...arr2]

    return mergedArray.sort((a,b) => a - b);
}

// time O(nlogn)

//better solution time : O(n  + m)

const mergeSortedArrays2 = (arr1 : number[], arr2: number[]): number[] => {
    const mergedArr: number[] = []
    let index1 = 0;
    let index2 = 0;

    while((index1 < arr1.length) && (index2 < arr2.length)){
        if(arr1[index1] < arr2[index2]){
            mergedArr.push(arr1[index1]);
            index1++
        }else{
            mergedArr.push(arr2[index2])
            index2++
        }
    }

    if(index1 <= (arr1.length - 1)){
        arr1.splice(0, index1);
        mergedArr.concat(arr1);
    }else if (index2 <= (arr2.length - 1)){
        arr2.splice(0, index2);
        mergedArr.concat(arr2)
    }

    return mergedArr
}
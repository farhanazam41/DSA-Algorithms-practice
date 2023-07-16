const findMinValue = (arr: number[]) : number => {
    let currentMinValue = arr[0];
    for(let value of arr){
        if(value < currentMinValue){
            currentMinValue = value;
        }
    }
    return currentMinValue;
}
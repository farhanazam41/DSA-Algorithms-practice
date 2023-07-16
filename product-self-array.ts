const productExceptSelf = (arr: number[]): number[] => {
    const output = arr.map(() => 1);

    let product = 1;

    for(let i = 0; i < arr.length; i++){
        output[i] = output[i] * product;
        product *= arr[i];
    }
    product = 1;

    for(let i = arr.length - 1; i >= 0; i--){
        output[i] = output[i] * product;
        product *= arr[i]
    }

    return output;
}
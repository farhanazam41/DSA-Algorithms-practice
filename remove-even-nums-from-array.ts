//decalaritvie approach

const removeEvenNums = (arr: number[]): Array<number> | null => {
	const oddNums: number[] = [];
    if(!arr || arr.length === 0 ) return null
	for (let num of arr) {
        if(num % 2 === 1){
            oddNums.push(num)
        }
	}
    console.log(oddNums)
	return oddNums;
};

// imperitive approach

const removeEvenNumsWithFilter = (arr: number[]) : number[] => {
    return [...arr].filter(num => num % 2 === 1)
}

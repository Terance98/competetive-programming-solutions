//Date : 01/03/2020
const numbers = [4, 7, 9, 1, 7, 2, 9, 2]

function createForwardObj(arr) {
	const tempObj = new Map()
	arr.reduce((res, item, index) => {
		if (index < arr.length / 2) {
			tempObj.set(res, index - 1)
			return res + item;
		}
	});
	return tempObj;
}

function createReverseObj(arr) {
	const tempObj = new Map()
	arr.reverse().reduce((res, item, index) => {
		if (index <= arr.length / 2) {
			tempObj.set(res, arr.length - (index))
			return res + item;
		}
	});
	return tempObj;
}


function makeBalancedArray(start, end, arr) {
	newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (i <= start || i >= end) {
			newArr[i] = arr[i]
		} else {
			newArr[i] = 0
		}
	}
	return newArr;
}


function partitionArrayAndStore(arr) {
	let flag = 0;
	let count = 0;
	arr.forEach((element, index) => {
		if (element === 0 && flag === 0) {
			flag = 1;
			const opArray = [arr.slice(0, index), arr.slice(index)]
			// console.log(opArray)
			count++;
		} else if (element === 0 && flag == 1) {
			const opArray = [arr.slice(0, index), arr.slice(index)]
			// console.log(opArray)
			count++;
		} else if (element !== 0 && flag == 1) {
			const opArray = [arr.slice(0, index), arr.slice(index)]
			// console.log(opArray);
			flag = 0;
			count++
		}
	});
	return count;
}

function getCount(arr){
	const forwardObj = createForwardObj(arr.slice(0))
	const reverseObj = createReverseObj(arr.slice(0))
	let totalCount = 0;
	for (let item of forwardObj) {
		if (reverseObj.get(item[0])) {
			const startIndex = item[1]
			const endIndex = reverseObj.get(item[0])
			const result = makeBalancedArray(startIndex, endIndex, numbers.slice(0))
			totalCount += partitionArrayAndStore(result)
		}
	}
	return totalCount
}

const op = getCount(numbers.slice(0))
console.log(op)
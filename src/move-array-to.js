let moveArrayTo = function(arr, shift  ) {
	let tmp_arr = [];
	if(typeof shift === 'number') {
		
		tmp_arr.push(arr[shift]);
		arr.splice(shift,1);
		Array.prototype.push.apply(tmp_arr, arr)
		return tmp_arr;
	}
	else {

		for(let i = 0; i < shift.length; i++) {		
			tmp_arr.push(arr[shift[i]]);
		}
		for(let j = 0; j < arr.length; j++) {		
			if( j !== shift[i])
				tmp_arr.push(arr[j]);
		}
		Array.prototype.push.apply(tmp_arr, arr)
		return tmp_arr;

	}

	//if( shift === -1)
	//	throw new "has no match index";
}

module.exports = moveArrayTo;

const arr = [1, 2, 3, 4, 5]
console.log(moveArrayTo(arr, [1,3]));
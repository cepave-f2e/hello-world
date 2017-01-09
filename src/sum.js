
let sum = function( params ) {

	let total = 0;
	for( let i=0; i < arguments.length; i++ ) {
		if ( typeof arguments[i] === 'number' )
		{
			if ( arguments.length === 1) {
				let prev = arguments[i];
				return function(next) {
					
					return prev + next;
				};
			}

			total += arguments[i];
		}
		else {
			// maybe is array
			let temp_array = arguments[i];			
			total += temp_array.reduce((a,b) => a + b, 0);			
		}
	}
	return total;

}




module.exports = sum;
//export { sum } ;
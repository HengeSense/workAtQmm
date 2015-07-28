
function swap( a, b ){
	//a = 110
	//b = 010
	a = a ^ b;  	// a = 100
	b = a ^ b;		// b = 110
	a = a ^ b;		// a = 010
}

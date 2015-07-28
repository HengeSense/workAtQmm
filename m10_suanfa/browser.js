var time = + new Date(),
	k = 1000,
	m = 1000 * k,
	b = 1000 * m;

while( m-- ){}

time = (+ new Date()) - time ;

console.log( time );
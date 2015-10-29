var start_ts = Date.now();

var
	min = 1,
	max = 100,
	sum_in_square = 0,
	summ_of_squares = 0;

for (var i = min; i <= max; i++)
{
	sum_in_square += i;
	summ_of_squares += (i*i);
}
sum_in_square *= sum_in_square;

var diff_ts = Date.now() - start_ts;

console.log("min: " + min + ", max: " + max + ", summ_of_squares: " + summ_of_squares + ", sum_in_square: " + sum_in_square + " (time: " + diff_ts + "ms)");

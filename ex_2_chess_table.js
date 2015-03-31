/*
	This is a code for a chess table 
	with a non-fixed size.
*/

var board_size = 8,
	light_field = ' ',
	dark_field = '#';

for (y = 0; y < board_size; y++)
{
	line = '';
	if (y % 2 == 0)
	{
		fill_array = [dark_field, light_field];
	}
	else
	{
		fill_array = [light_field, dark_field];
	}

	for (x = 0; x < board_size; x++)
	{
		if (x % 2 == 0)
		{
			fill_index = 0;
		}
		else
		{
			fill_index = 1;
		}

		line += fill_array[fill_index];
	}

	console.log (line);
}


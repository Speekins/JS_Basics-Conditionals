/*Take your code from the previous Check the Weather exercise and rewrite it 
as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.*/

let weather = 'tsunami';

switch (weather) {
  case 'sunny':
    console.log(`It's a beautiful day!`);
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  case 'snowy':
    console.log('Wax the skis!');
    break;
  case 'windy':
    console.log('Hold on to your hats.');
    break;
  case 'hurricane':
    console.log('Get out the waders.');
    break;
  case 'tornado':
    console.log('Hold on tight!');
    break;
  case 'earthquake':
    console.log('Good luck!');
    break;
  default:
    console.log(`Let's stay inside.`);
}
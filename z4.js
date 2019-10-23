const _ = require('lodash');

const collections = [
{},
15,
"hello@test.pl",
null,
['aaa', 'bbb', 5],
'admin@gmail.com',
undefined,
'a34@yahoo.com',
'321@a',
'321.pl'
];
	let regex = /\S+@\S+\.\S+/;
function getMails(collections){
	let temp = [];
	for(i of collections){
		if(regex.test(i)){
      temp.push(i);
		}
  }
  return _.sortBy(temp);
}

getMails(collections);
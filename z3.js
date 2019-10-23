const user = {
	name: 'Imie',
	surname: 'Nazwisko',
	allGrades: [
	{
		subjectName: 'Name1',
		grades: [5, 4, 3, 5, 2],
		weight: 3
	},
	{
		subjectName: 'Name2',
		grades: [3, 3.5, 2],
		weight: 1
	},
	{
		subjectName: 'Name3',
		grades: [4, 3, 3.5],
		weight: 5
	},
	]
}

function getInformation(user){
	let imie = user.name;
	let surname = user.surname;
	console.log(imie + ' ' + surname);
	
	let suma = 0;
	let suma_wag = 0;
	
	for(let i=0;i<user.allGrades.length;i++){
		for(let j=0;j<user.allGrades[i].grades.length;j++){
			suma += user.allGrades[i].grades[j] * user.allGrades[i].weight;
			suma_wag += user.allGrades[i].weight;
		}
	}
	const wynik = suma / suma_wag;
	console.log("Wynik: ", wynik);
}

<<<<<<< HEAD
getInformation(user);
=======
getInformation(user);
>>>>>>> 41ce32170f0701fc97a8463f869caf9029582719

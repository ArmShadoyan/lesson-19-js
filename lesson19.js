"Use strict";

let numbersOfFilms ;
const  app = {
	personalData:[
		{name:"Armen"},
		{surname:"Shadoyan"},
		{age:20},
		{telNumber:"xx-yy-xxx"}],
	count:[],
	geners:[],
	private:false,


filmsCount (){
	numbersOfFilms = parseInt(prompt("Քանի ֆիլմ եք դիտել այսօր",""));

	while(numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)){
		numbersOfFilms = parseInt(prompt("Քանի ֆիլմ եք դիտել այսօր",""));
	 }app.count.push(numbersOfFilms);
},
	detectUserPersonalLevel(){
	if(numbersOfFilms === 0){
		console.log("Դուք ոչ մի ֆիլմ չեք դիտել");
	} else if(numbersOfFilms < 10){
		console.log("Դուք դիտել եք բավականին քիչ ֆիլմեր");
	} else if (numbersOfFilms < 30){
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numbersOfFilms >= 30) {
		console.log("Դուք կինոման եք !!")
	} else {
		console.log("Տեղի է ունեցել անհայտ խնդիր")
	}
},
	showMyDB (){
	if(app.personalData[3].private === false){
		console.log(app.personalData);
	}else{
		console.log("account closed");
	}
},
	isVisibleMyDB(){
	if (app.private === true){
		app.private = false
	}else{
		app.private = true
	}
},
	yourFavoriteGeners(){
		for(let i = 0; i <= 2; i++){
			const geners = prompt(`Ձեր Նախնտրելի ժանրը ${i + 1}`);
		while(geners.trim() === "" || geners === null || geners.length >= 20){
			const geners = prompt(`Ձեր Նախնտրելի ժանրը ${i + 1}`);
				app.geners.push(geners)
				   }geners.forEach(function(item,index,array){
		console.log(`Ձեր սիրելի ժանրը ${index + 1} ${item}`)
	});
}
},}
app.filmsCount ();
app.detectUserPersonalLevel();
app.isVisibleMyDB();
app.showMyDB ();
app.yourFavoriteGeners();

  



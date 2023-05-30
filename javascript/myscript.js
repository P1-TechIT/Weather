const apikey = "0f932ab5d8511a4abab1323cd2d106b7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// const searchbox = document.querySelector(".main input");

async function checkweather(){
	console.log("I am Here");
	const city = document.getElementById("userIn").value;//read city from input
	//if city is invalid

	if(city == "")
	{
		alert("please enter valid city");
	}

	else{
		const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
	var data = await response.json();



	console.log(data);


	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = data.main.temp + "°C";
	document.querySelector(".box1 p").innerHTML = data.main.humidity + "%";
	document.querySelector(".box2 p").innerHTML = data.wind.speed + " Km/h";
	document.querySelector(".cloud").innerHTML = data.weather[0].main;

	if(data.weather[0].main == "Clouds")
		{
			document.querySelector(".weather_icon").innerHTML = "<i class='icon fa-solid fa-cloud fa-2xl'>"
		}

		else if(data.weather[0].main == "Clear")
		{
			document.querySelector(".weather_icon").innerHTML = "<i class='icon fa-solid fa-sun fa-2xl'>"
		}
	}
}

// checkweather();
// Array
const hexarr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

// Function
const Fire = () => {


  let color = [];
  for (let i = 0; i <= 5; i++) {


	  const x = Math.ceil(Math.random()*15)
	  console.log(x);


    color += hexarr[x];
  }

  document.body.style.background = "#" + color;
  console.log(hex)
  hex.innerHTML = '#'+color;
};

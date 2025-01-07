const Colors = [
  "#ff0000",
  "#3cb371",
  "#ffa500",
  "#0000ff",
  "#ee82ee",
  "#6a5acd",
];

const random_Num = parseInt(Math.random() * Colors.length);
let color = Colors[random_Num];

document.getElementById("color-wrapper").style.backgroundColor = color;
// Birthday Concepts  //

function findDay() {
  let day = document.getElementById("input_1").value;
  let month = document.getElementById("input_2").value;
  let year = document.getElementById("input_3").value;
  let result = document.getElementById("result");

  if (!!day && !!month && !!year) {
    result.innerHTML = `Your birthday on ${moment(`${day}-${month}-${year}`, [
      "dd-mm-yyyy",
    ]).format("dddd-mm-yyyy")}`;
  } else {
    result.innerHTML = "Please Filled All Fields !";
  }
}

// document.getElementById("input_1").user.getMonth();
// document.getElementById("input_2").user.getFullYears();

// document.getElementById("b-tn");

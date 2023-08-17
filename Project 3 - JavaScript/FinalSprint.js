const boldText = (text) => `\x1b[1m${text}\x1b[0m`;
// let html;

//FUNCTION 1: CALORIES BURNED
//Based on an average-weight adult, create a function to show how many calories can be burned in a 30 mins:
function calories(exercise) {
  switch (exercise.exercise) {
    case "Jogging":
      console.log(
        `${boldText("CALORIES BURNED")}: ${
          exercise.exercise
        } burns 245 calories/30 mins`
      );
      return `${exercise.exercise} burns 245 calories/30 mins`;
    case "Push-Ups":
      console.log(
        `${boldText("CALORIES BURNED")}: ${
          exercise.exercise
        } burns 105 calories/30 mins`
      );
      return `${exercise.exercise} burns 105 calories/30 mins`;
    case "Yoga":
      console.log(
        `${boldText(
          "CALORIES BURNED"
        )}: You can burn 87.5 calories/30 mins doing ${exercise.exercise}`
      );
      return `You can burn 87.5 calories/30 mins doing ${exercise.exercise}`;
    case "Plank":
      console.log(
        `${boldText("CALORIES BURNED")}: By practicing the ${
          exercise.exercise
        } you are able to burn 87.5 calories/30 mins`
      );
      return `By practicing the ${exercise.exercise} you are able to burn 87.5 calories/30 mins`;
    case "Cycling":
      console.log(
        `${boldText("CALORIES BURNED")}: ${
          exercise.exercise
        } is a great way to burn 280 calories/30 mins`
      );
      return `${exercise.exercise} is a great way to burn 280 calories/30 mins.`;
    case "Stretching":
      console.log(
        `${boldText("CALORIES BURNED")}: ${
          exercise.exercise
        } daily can burn an easy 80.5 calories/30 mins`
      );
      return `${exercise.exercise} daily can burn an easy 80.5 calories/30 mins.`;
    default:
      console.log(`Undefined Exercise: Stay strong and healthy!`);
      return `Undefined Exercise: Stay strong and healthy!`;
  }
}

//Array of exercises for the Calories function
const exercises = [
  { exercise: "Jogging" },
  { exercise: "Push-Ups" },
  { exercise: "Yoga" },
  { exercise: "Plank" },
  { exercise: "Cycling" },
  { exercise: "Stretching" },
];

//Call the calories()function for different exercises:
for (const exercise of exercises) {
  calories(exercise);
}

//FUNCTION 2: EXERCISE REPS
//Create a function to display how many reps for each exercise
function getReps(exercise) {
  return `${exercise.exercise}: ${exercise.reps}`;
}

//FUNCTION 3: RANDOM EXERCISE PICKER
// Array of exercises and their reps for a random exercise picker function
const pickExercise = [
  { exercise: "Jogging", reps: "20-30 minutes" },
  {
    exercise: "Push-Ups",
    reps: "3 sets of 10-15 repetitions with a short rest between sets",
  },
  {
    exercise: "Yoga",
    reps: "Hold each pose for 30 seconds to a minute or more",
  },
  {
    exercise: "Plank",
    reps: "Starting with 20-30 seconds and gradually increasing the time",
  },
  { exercise: "Cycling", reps: "Approx 30 minutes" },
  {
    exercise: "Stretching",
    reps: "Hold for 15-30 seconds per stretch and repeat 2-4 times for each muscle group",
  },
];

// Create a function that picks a random exercise
function randomExercisePicker() {
  const randomIndex = Math.floor(Math.random() * pickExercise.length);
  return pickExercise[randomIndex];
}

//Display the randomExercisePicker() funciton to the console
const randomExercise = randomExercisePicker();
console.log("------------------------------------------------");
console.log(`Here's a random exercise for you to try now:`);
console.log(`${randomExercise.exercise} - ${randomExercise.reps}!`);
console.log("------------------------------------------------");

//Fetch/read the JSON file and display as HTML
fetch("./exercises.json")
  .then((response) => response.json())
  .then((exercises) => {
    const jsonDataContainer = document.getElementById("json-data");

    exercises.forEach((exercise) => {
      const exerciseInfo = `
        <div class="exercise-info">
          <h3>${exercise.exercise}:</h3>
          <p><strong>Description:</strong> ${exercise.description}</p><br>
          <p><strong>Results:</strong> ${exercise.results}</p><br>
          <p><strong>Calories:</strong> ${calories(exercise)}</p><br>
          <p><strong>Reps:</strong> ${getReps(exercise)}</p><br>
          <p><strong>Random Exercise Picker:</strong> ${
            randomExercise.exercise
          } - ${randomExercise.reps}</p><br>
          <br>
          <br>
        </div>
      `;

      jsonDataContainer.innerHTML += exerciseInfo;

      console.log(" ");
      console.log(`${boldText("NAME")}: ${exercise.exercise}.`);
      console.log(`${boldText("DESCRIPTION")}: ${exercise.description}.`);
      console.log(`${boldText("RESULTS")}: ${exercise.results}.`);

      //Display the calories() function within the forEach()
      //calories(exercise);

      //Display the getReps() function within the forEach()
      console.log(`${boldText("REPS")}: ${getReps(exercise)}.`);

      console.log(" ");
    });
  })
  .catch((error) => {
    console.error(error);
  });

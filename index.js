let hasWorkoutType = false
let hasCompletedWorkout = false
let message = "ERROR"
let directionsEl = document.getElementById("directions")

function startCoaching() {
    if (!hasWorkoutType) {
        message = ("Ready to workout?")
    } else if (hasWorkoutType && !hasCompletedWorkout) {
        message = ("Enjoy the workout!")
    } else {
        message = ("Great Job! Come back tomorrow for another workout!")
    }

    console.log(message);
    directionsEl.innerHTML = message

}
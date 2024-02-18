let directionsEl = document.getElementById("directions")
let crossfit = document.getElementById("crossfit")
let gymnastics = document.getElementById("gymnastics")
let weightlifting = document.getElementById("weightlifting")
let run = document.getElementById("run")
let tags = [crossfit, gymnastics, weightlifting, run]
let workouts = ["Crossfit", "Gymnastics", "Weightlifting", "Run"]
let workoutsDone = [0, 0, 0, 0]
let workoutsFinished = 0
let workoutStarted = false

function startCircuit() {

    if (workoutsFinished > 0) {
        directionsEl.innerHTML = "There are more workouts left in the circuit! Click 'New Workout'"
    } else {
        workoutStarted = true
        crossfit.textContent = "Crossfit"
        gymnastics.textContent = "Gymnastics"
        weightlifting.textContent = "Weightlifting"
        run.textContent = "Run"
        // newWorkout()
    }


}

function newWorkout() {

    if (!workoutStarted) {
        directionsEl.textContent = "Click 'Start Circuit' to start new circuit"
        return
    }

    if (workoutsFinished == 4) {
        directionsEl.innerHTML = "Rest day baby!!"
        workoutsDone = [0, 0, 0, 0]
        workoutsFinished = 0
        workoutStarted = false
    } else {
        let todayWorkout = ""
        while (todayWorkout == "") {
            let random = Math.floor(Math.random() * 4)
            if (!workoutsDone[random]) {
                todayWorkout = workouts[random]
                workoutsDone[random] = 1
                tags[random].textContent = "Done"
                workoutsFinished++
            }
        }
        directionsEl.innerHTML = "Today's workout: " + todayWorkout
    }
}
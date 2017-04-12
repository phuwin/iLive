var priorities = [{switch:document.querySelector("#careerSwitch")},{switch:document.querySelector("#familySwitch")},{switch:document.querySelector("#healthSwitch")}]

function checkPriority(e){
    if (document.querySelector("#careerSwitch").checked && document.querySelector("#familySwitch").checked && document.querySelector("#healthSwitch").checked) {
		var index = e.id[1]
		var _priorities = priorities.slice()
		_priorities.splice(index,1)
		_priorities[randomIntFromInterval(0,1)].switch.checked = false
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
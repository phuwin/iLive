var priorities = [{switch:document.querySelector("#s0")},{switch:document.querySelector("#s1")},{switch:document.querySelector("#s2")}]

function checkPriority(e){
    if (document.querySelector("#s0").checked && document.querySelector("#s1").checked && document.querySelector("#s2").checked) {
		var index = e.id[1]
		var _priorities = priorities.slice()
		_priorities.splice(index,1)
		_priorities[randomIntFromInterval(0,1)].switch.checked = false
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
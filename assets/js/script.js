// player object
let player = {
	character : $('#player'),
	playerPos : 0
}

console.log(player)


const ai = {
	character : $('#ai'),
	aiPos : 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0

//move the player function



player.character.click(function(){
	console.log(this)
	$(this).animate({
		'left' : (playerPosition+=(Math.random()*100+30))+'px'

	});

	// console.log('this is the current value of player position: '+playerPosition)
	player.playerPos = playerPosition
	console.log(player.playerPos)
	result()

})

let aiMove = () => {
	
	if(ai.aiPos < 1400){
			ai.character.animate({
			'left' : (aiPosition+=(Math.random()*100+50)) + 'px'
			})
		console.log(ai.aiPos)	
	}

	else {
		return true;
	}	


	ai.aiPos = aiPosition
	setTimeout(aiMove, 800)
	result()
	// setTimeout(result(), 5000)
	if(ai.aiPos >= 1400){
		return true
	}
}

let aiMove2 = () => {
	

	if(ai.aiPos < 1200){
			ai.character.animate({
			'left' : (aiPosition+=(Math.random()*100+30)) + 'px'
			})
		console.log(ai.aiPos)	
	}

	else {
		return true;
	}	


	ai.aiPos = aiPosition
	setTimeout(aiMove, 800)
	result()
	// setTimeout(result(), 5000)

}

let aiMove3 = () => {
	

	if(ai.aiPos < 1200){
			ai.character.animate({
			'left' : (aiPosition+=80) + 'px'
			})
		console.log(ai.aiPos)	
	}

	else {
		return true;
	}	

	ai.aiPos = aiPosition
	setTimeout(aiMove, 800)
	result()
	// setTimeout(result(), 5000)

}





$('#startRace').click(function(){
	$('.buttonrows').toggleClass('buttonHide')
})

$('.hard').click(function(){
	aiMove()
})

$('.medium').click(function(){
	aiMove2()
})

$('.easy').click(function(){
	aiMove3()
})


const result = () => {
	if(player.playerPos > 1200){
		alert('Sonic wins!')
		return true;
	}	

	if(ai.aiPos > 1200){
		alert('Pikachu wins!')
		return true;
	}	
}
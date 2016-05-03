function Run(argument) {
	Time.SetTimeValues();
	ctx.clearRect(0,0,canvas.width,canvas.height);

	//console.log('working');
	//console.log(Math.Random.RangeFloat(0,1,true) == 0);
	if (Application.LoadedScene != null) {
		Application.LoadedScene.Start();
	}

	Physics.CheckClick();
	if(Input.MouseReload > 0) Input.MouseClick = false;

	RequestAnimationFrame(Run);
}


function insertGems() {
	for (var i = 0; i < COLUMNS; i++) {
		for (var j = 0; j < ROWS; j++) {
			var gem = new GameObjectGem();
			switch (Math.Random.RangeInt(0,2,true)) {
				case 0:
					gem.Renderer.Material.Source = Images["blueGem"];
					break;
				case 1:
					gem.Renderer.Material.Source = Images["greenGem"];
					break;
				case 2:
					gem.Renderer.Material.Source = Images["orangeGem"];
					break;
				default:
					console.log("Error in random color Gem");
					// statements_def
					break;
			}
			Scenes.SceneGame.GameObjects.push(gem);
		}
	}
}
#pragma strict

var score: int;

function Start () {
	var sw: int=Screen.width;
	var sh: int=Screen.height;
	var scoreText: String="SCORE: "+score.ToString();
	GUI.Label(Rect(0,0,sw/2,sh/4),scoreText);
}

function Update () {

}
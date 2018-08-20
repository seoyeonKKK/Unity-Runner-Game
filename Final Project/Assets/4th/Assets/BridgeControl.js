#pragma strict
var speed : float = 0.5f;
var offset : float;

function Start () {

}

function Update () 
{
	offset = Time.time * speed;
	renderer.material.mainTextureOffset = new Vector2(0,-offset);
}
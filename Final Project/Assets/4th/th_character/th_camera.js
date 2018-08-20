#pragma strict

function Start () {

}

function Update () {
   var player : GameObject = GameObject.FindWithTag("Player");
   
   transform.position.z = player.transform.position.z-18;
}
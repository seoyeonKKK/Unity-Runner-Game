#pragma strict

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(other : Collider)
{	if(other.tag =="Player"){
	other.gameObject.SendMessage("need", 10, SendMessageOptions.DontRequireReceiver);
	
	Destroy(gameObject);
	}
}
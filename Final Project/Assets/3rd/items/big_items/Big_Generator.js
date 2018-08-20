#pragma strict

var interval : float;
var meatPrefab : GameObject;
var chickenPrefab : GameObject;
var tomatoPrefab : GameObject;
var vegetablePrefab:GameObject;
var cheesePrefab:GameObject;
var brownPrefab:GameObject;
var yellowPrefab:GameObject;
var cokePrefab:GameObject;
var cucumberPrefab:GameObject;
var baconPrefab:GameObject;
var redPrefab:GameObject;
var whitePrefab:GameObject;

private var timer : float;
private var prefab : GameObject;
private var num : int;

function Die(){
	enabled=false;
}

function Start () 
{
	timer = 0.0;
}

function Update () 
{

	timer -= Time.deltaTime;
	if(timer < 0.0){		
		selectPrefab();

		Instantiate(prefab, transform.position, transform.rotation);
		
		timer = interval;	
	}
}

function selectPrefab()
{
	num = Random.Range(0, 12);
	switch (num) 
	{
	  case 0:
	    prefab = tomatoPrefab;
	    break;
	  case 1:
	    prefab = meatPrefab;
	    break;
	  case 2:
	    prefab = chickenPrefab;
	    break;   
	  case 3:
	  	prefab= vegetablePrefab;
	  	break;
	  case 4:
	  	prefab= cheesePrefab;
	  	break;
	  case 5:
	  	prefab=brownPrefab;
	  	break;
	  case 6:
	  	prefab=yellowPrefab;
	  	break;
	  case 7:
	  	prefab=cokePrefab;
	  	break;
	  case 8:
	 	prefab=cucumberPrefab;
	 	break;
	  case 9:
	  	prefab=baconPrefab;
	  	break;
	  case 10:
	  	prefab=redPrefab;
	  	break;
	  case 11:
	  	prefab=whitePrefab;
	  	break;
	}
}
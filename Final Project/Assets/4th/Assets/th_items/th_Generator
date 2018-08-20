#pragma strict

public var interval : float;
public var bulgogi_meatPrefab : GameObject;
public var bulgogi_chickenPrefab : GameObject;
public var bulgogi_tomatoPrefab : GameObject;
public var bulgogi_vegetablePrefab:GameObject;
public var bulgogi_cheesePrefab:GameObject;
public var bulgogi_brownPrefab:GameObject;
public var bulgogi_yellowPrefab:GameObject;
public var bulgogi_cokePrefab:GameObject;
public var bulgogi_cucumberPrefab:GameObject;
public var bulgogi_baconPrefab:GameObject;
public var bulgogi_redPrefab:GameObject;
public var bulgogi_whitePrefab:GameObject;

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
	    prefab = bulgogi_tomatoPrefab;
	    break;
	  case 1:
	    prefab = bulgogi_meatPrefab;
	    break;
	  case 2:
	    prefab = bulgogi_chickenPrefab;
	    break;   
	  case 3:
	  	prefab= bulgogi_vegetablePrefab;
	  	break;
	  case 4:
	  	prefab= bulgogi_cheesePrefab;
	  	break;
	  case 5:
	  	prefab=bulgogi_brownPrefab;
	  	break;
	  case 6:
	  	prefab=bulgogi_yellowPrefab;
	  	break;
	  case 7:
	  	prefab=bulgogi_cokePrefab;
	  	break;
	  case 8:
	 	prefab=bulgogi_cucumberPrefab;
	 	break;
	  case 9:
	  	prefab=bulgogi_baconPrefab;
	  	break;
	  case 10:
	  	prefab=bulgogi_redPrefab;
	  	break;
	  case 11:
	  	prefab=bulgogi_whitePrefab;
	  	break;
	}
}
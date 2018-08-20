#pragma strict

public var interval : float;
public var mc_meatPrefab : GameObject;
public var mc_chickenPrefab : GameObject;
public var mc_tomatoPrefab : GameObject;
public var mc_vegetablePrefab:GameObject;
public var mc_cheesePrefab:GameObject;
public var mc_brownPrefab:GameObject;
public var mc_yellowPrefab:GameObject;
public var mc_cokePrefab:GameObject;
public var mc_cucumberPrefab:GameObject;
public var mc_baconPrefab:GameObject;
public var mc_redPrefab:GameObject;
public var mc_whitePrefab:GameObject;

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
	    prefab = mc_tomatoPrefab;
	    break;
	  case 1:
	    prefab = mc_meatPrefab;
	    break;
	  case 2:
	    prefab = mc_chickenPrefab;
	    break;   
	  case 3:
	  	prefab= mc_vegetablePrefab;
	  	break;
	  case 4:
	  	prefab= mc_cheesePrefab;
	  	break;
	  case 5:
	  	prefab=mc_brownPrefab;
	  	break;
	  case 6:
	  	prefab=mc_yellowPrefab;
	  	break;
	  case 7:
	  	prefab=mc_cokePrefab;
	  	break;
	  case 8:
	 	prefab=mc_cucumberPrefab;
	 	break;
	  case 9:
	  	prefab=mc_baconPrefab;
	  	break;
	  case 10:
	  	prefab=mc_redPrefab;
	  	break;
	  case 11:
	  	prefab=mc_whitePrefab;
	  	break;
	}
}
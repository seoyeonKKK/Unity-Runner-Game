#pragma strict

var hit: RaycastHit;

function Start () {

}

function Update (){

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

	if (Input.GetMouseButtonDown(0)){

		if (Physics.Raycast (ray, hit , Mathf.Infinity)){

			if (hit.collider.name == "howtoGame") 
			{ 
				Application.LoadLevel("explain"); 
			}
			else if (hit.collider.name == "gamestart") 
			{ 
				Application.LoadLevel("chooseLevel"); 
			}
		} 
	} 
}
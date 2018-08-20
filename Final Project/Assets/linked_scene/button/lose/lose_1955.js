#pragma strict

var hit: RaycastHit;

function Start () {

}

function Update (){

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

	if (Input.GetMouseButtonDown(0)){

		if (Physics.Raycast (ray, hit , Mathf.Infinity)){

			if (hit.collider.name == "lose_exit") 
			{ 
				Application.LoadLevel("chooseLevel"); 
			}
			else if(hit.collider.name == "lose_tryagain") 
			{ 
				Application.LoadLevel("1955"); 
			}
		} 
	} 
}
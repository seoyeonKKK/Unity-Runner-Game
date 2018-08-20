#pragma strict

var hit: RaycastHit;

function Start () {

}

function Update (){

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

	if (Input.GetMouseButtonDown(0)){

		if (Physics.Raycast (ray, hit , Mathf.Infinity)){
			
			if (hit.collider.name == "1") 
			{ 
				Application.LoadLevel("bulgogi"); 
			}
			
			if (hit.collider.name == "2") 
			{ 
				Application.LoadLevel("mcspicy"); 
			}
			
			if (hit.collider.name == "3") 
			{ 
				Application.LoadLevel("bigmc"); 
			}
			
			if (hit.collider.name == "4") 
			{ 
				Application.LoadLevel("1955"); 
			}
		} 
	} 
}
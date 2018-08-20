#pragma strict

var hit: RaycastHit;

function Start () {

}

function Update (){

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

	if (Input.GetMouseButtonDown(0)){

		if (Physics.Raycast (ray, hit , Mathf.Infinity)){

			if (hit.collider.name == "1955_start") 
			{ 
				Application.LoadLevel("water"); 
			}
		} 
	} 
}
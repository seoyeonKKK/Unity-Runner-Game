using UnityEngine;
using System.Collections;

public class Big_run2 : MonoBehaviour {
	private float speed = 5f;
	private float jumpForce = 800f;
	private float gravity = 3000f;
	private Vector3 moveDir = Vector3.zero;
	// Use this for initialization
	void Die(){
		speed = 0;
	}
	void Start () 
	{

	}
	
	// Update is called once per frame
	void Update () {
		CharacterController controller = gameObject.GetComponent<CharacterController> ();


		if (controller.isGrounded) {

			moveDir = new Vector3 (Input.GetAxis("Horizontal")*30, 0, 60);

			moveDir = transform.TransformDirection(moveDir);

			moveDir *=speed;

			if(Input.GetButtonDown("Jump")){
				moveDir.y = jumpForce;
			}
		}

		moveDir.y -= gravity * Time.deltaTime;

		controller.Move (moveDir * Time.deltaTime);
	}
}

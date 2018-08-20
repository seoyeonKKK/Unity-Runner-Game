using UnityEngine;
using System.Collections;

public class bulgogi_run : MonoBehaviour {
	public float speed;
	private float jumpForce = 1000f;
	private float gravity = 3000f;
	private Vector3 moveDir = Vector3.zero;
	// Use this for initialization
	void Start () 
	{
		
	}
	void Die(){
		speed = 0;
	}
	// Update is called once per frame
	void Update () {
		CharacterController controller = gameObject.GetComponent<CharacterController> ();

		if (controller.isGrounded) {
			
			moveDir = new Vector3 (Input.GetAxis("Horizontal")*6, 0, 20);
			
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
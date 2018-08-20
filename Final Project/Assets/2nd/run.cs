using UnityEngine;
using System.Collections;

public class run : MonoBehaviour {
	public float speed = 100f;
	private Rigidbody thisrigid;
	public float gravity = 200f;
	// Use this for initialization
	void Start () {
		thisrigid = GetComponent<Rigidbody>();
		thisrigid.velocity = new Vector3 (0, 0, speed);
	}
	
	// Update is called once per frame
	void Update () 
	{

		transform.Translate (10 * Input.GetAxis ("Horizontal") * Time.deltaTime, 0f, 0f);

	}
}
 
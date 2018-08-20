 using UnityEngine;
using System.Collections;

public class mc_Roadtrigger : MonoBehaviour {
	public Transform roadPrefab;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnTriggerEnter(Collider yayother){
		if (yayother.tag == "Player") {
			Instantiate (roadPrefab, new Vector3 (transform.parent.position.x - 0.05347f, transform.parent.position.y + 0.06699f, transform.parent.position.z + 228.4398f), roadPrefab.rotation);
			transform.parent.gameObject.AddComponent<mc_timetodestroy> ();
		}
	}
}

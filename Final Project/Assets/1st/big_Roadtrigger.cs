using UnityEngine;
using System.Collections;

public class big_Roadtrigger : MonoBehaviour {
	public Transform roadPrefab;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnTriggerEnter(Collider yayother){
		if (yayother.tag == "Player") 
		{
			Instantiate(roadPrefab, new Vector3 (transform.parent.position.x+0.1307f-0.14136f,transform.parent.position.y,transform.parent.position.z+2390.5028f), roadPrefab.rotation);
			transform.parent.gameObject.AddComponent<big_timetodestroy> ();
		}
	}
}

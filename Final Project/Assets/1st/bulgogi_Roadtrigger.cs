using UnityEngine;
using System.Collections;

public class bulgogi_Roadtrigger : MonoBehaviour {
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
			Instantiate(roadPrefab, new Vector3 (transform.parent.position.x+0.1307f,transform.parent.position.y,transform.parent.position.z+2392.266f+10344.146f), roadPrefab.rotation);
			transform.parent.gameObject.AddComponent<bulgogi_timetodestroy> ();
		}
	}
}

using UnityEngine;
using System.Collections;

public class mc_Opacity : MonoBehaviour {
	public float alpha= 0;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		SpriteRenderer spr = GetComponent<SpriteRenderer>(); 
		
		Color color = spr.color; 
		color.a = alpha; 
		spr.color = color;
	}
	
	void AllEat (){
		SpriteRenderer spr = GetComponent<SpriteRenderer> (); 
		
		Color color = spr.color; 
		color.a = 255; 
		spr.color = color;
		alpha = 1;
	}
}

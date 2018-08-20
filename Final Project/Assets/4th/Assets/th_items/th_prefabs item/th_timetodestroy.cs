﻿using UnityEngine;
using System.Collections;

public class th_timetodestroy : MonoBehaviour {
	public float destroyTime = 30f;
	private float currentTime;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		currentTime += Time.deltaTime;
		
		if (currentTime > destroyTime) {
			Destroy (this.gameObject);
		}
		
	}
}
#pragma strict
//var target : meat;
//var target1 : vegetable;
//var target2 : brown;
public var d :int=0;
public var f :int=0;
public var a :int=0;
public var c :int=0;
public var e :int=0;

function Start () {

}

function Update () {

}
function OnTriggerEnter(other: Collider){
	
	if(other.gameObject.tag=="yellow"){
		d+=1;
		Debug.Log(d);
		if(d==5){
			GameObject.FindWithTag("GazeTMustard").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="bacon"){
		f+=1;
		Debug.Log(f);
		if(f==5){
			GameObject.FindWithTag("GazeTBacon").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="meat"){
		a+=1;
		Debug.Log(a);
		if(a==5){
			GameObject.FindWithTag("GazeTPatty").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="tomato"){
		c+=1;
		Debug.Log(c);
		if(c==5){
			GameObject.FindWithTag("GazeTTomato").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="vegetable"){
		e+=1;
		Debug.Log(e);
		if(e==5){
			GameObject.FindWithTag("GazeTVeg").SendMessage("AllEat");
		}
	}
	
	if(d>=5&&f>=5&&a>=5&&c>=5&&e>=5){
		GameObject.FindWithTag("Player").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		GameObject.FindWithTag("generator").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		GameObject.FindWithTag("road").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		//다음 씬으로 넘어감(성공한 다음 씬)
		Application.LoadLevel("1955_win");
	}
}

	
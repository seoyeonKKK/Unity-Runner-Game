#pragma strict

public var life : int = 30;
public var score : int = 0;

function need(amount : int)
{
   score +=amount;
   Debug.Log(score);
}

function no_need(amount : int)
{   Debug.Log("no need :" + life);
   life -= amount;
   
   if(life==20){
      Destroy(GameObject.FindWithTag("life1"));
   }
   else if(life==10){
      Destroy(GameObject.FindWithTag("life2"));
   }
   else if(life==0){
      GameObject.FindWithTag("Player").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
      GameObject.FindWithTag("generator").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
      GameObject.FindWithTag("road").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
      Destroy(GameObject.FindWithTag("life3"));
      Application.LoadLevel("bulgogi_lose");
   }
   
}

function Start () {
}

function Update () {
}
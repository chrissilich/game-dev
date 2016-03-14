#pragma strict

public var player : GameObject;
private var mode;
private var PC:PlayerController;

function Start () {
	var playerControllerGameObject = GameObject.Find("Player");
	PC = playerControllerGameObject.GetComponent(PlayerController);
}
 
function Update () {
	mode = PC.mode;

    this.gameObject.transform.position.y = player.transform.position.y;

    if ( mode == "flying" ) {
    	this.gameObject.transform.position.x = player.transform.position.x;
    }
}

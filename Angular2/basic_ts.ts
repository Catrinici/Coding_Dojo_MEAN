var myNum: number = 5;
var myString: string = "Hello Universe";

var anythingOne: any = "Hey";
    anythingOne = 25;

var anythingTwo: any = "Hey";
    anythingTwo = [1, 2, 3, 4];

var anithingThree: any = "Hey";
    anithingThree = { x: 1, y: 2};

var arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
var arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6];

var myObj: any = { x:5, y:10 };

// function constructor

class MyNode {
    val:number;
    private _priv:number;
    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    doSomething(){
        this._priv = 10;
    }
}

 var myNodeInstance: MyNode = new MyNode(1);
 console.log(myNodeInstance.val);

 // This function will return nothing.


export default class Test{
    
    constructor(name,id){this.name = name;this.id = id
    this.arr = [];}

    myName(){
        return this.name;
    }
    myId(){
        return this.id;
    }
    returnArr(){
        this.arr[0]=(this.name);
        this.arr[1]=(this.id);
      return this.arr;  
    }
}
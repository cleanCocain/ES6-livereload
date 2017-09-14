import { Join } from './join';

export default class Test extends Join {

    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
        this.arr = [];
    }

    myName() {
        return super.alert() + this.name;
    }
    myId() {
        return this.id;
    }
    returnArr() {
        this.arr[0] = (this.name);
        this.arr[1] = (this.id);
        return this.arr;
    }
    para() {
        return super.alert();
    }
    static defaultPara() {
        return new Test();
    }
}

class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if(this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {
    if(this.length === 0 ) return undefined;

    let poppedEle = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length -= 1;
    return poppedEle;
  }

  shift() {
    if(this.length === 0 ) return undefined;
    
    let shiftedArray = [];
    let shiftedEle = this.data[0];
    for(let i = 1 ; i < this.length; i++){
      shiftedArray.push(this.data[i]);
    }
    this.data = [...shiftedArray];
    this.length -= 1 ;
    return shiftedEle;
  }

  unshift(val) {
    if(this.length === this.capacity) this.resize();
    
    for(let i = this.length; i >= 0; i--){
      this.data[i+1] = this.data[i];
    }
  
      this.data[0] = val;
      this.length += 1;
    
    }
  
  indexOf(val) {


    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {
    let newCapacity = this.capacity * 2;
    let newData = new Array(newCapacity);

    for(let i = 0; i < this.length; i++){
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
  }

}


module.exports = DynamicArray;
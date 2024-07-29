class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
    if (arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        this.data[this.length] = arguments[i];
        this.length++;
      }
    }
  }

  // ! challenge 1
  /**
   * updates this.data with index as key and item as value
   * and increment this.length++ by one
   * @param {*} item
   * @returns item
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }
  // ! Challenge 2
  /**
   * returns the value of this.data[index]
   * @param {Number} index
   * @returns {*} value
   */
  // ? I have added additional features : Also returns value from negative index but it will start counting from last so -1 to get last value
  get(index) {
    if (typeof index === "number") {
      if (index >= this.length) {
        return undefined;
      } else {
        if (index >= 0) {
          return this.data[index];
        } else {
          return this.data[this.length + index];
        }
      }
    } else {
      return "index Must be a number";
    }
  }
  // ! Challenge 3
  /**
   * Removes/Delete the last key:value of this.data and decrement this.length-- by 1
   * @returns {*} deleted value
   */
  pop() {
    this.length--;
    const deleted = this.data[this.length];
    delete this.data[this.length];
    return deleted;
  }

  // ! Challenge 4
  /**
   * decrement this.length --
   * stores deleted value and delete the fist key:value of this.data
   * reIndex the remaning value
   * delete last key:value. Why: We are assigning and reAssigning the value to the first index and other respectively so in ths.data we get new reindexed value + one remaning value so we del last remaning value
   * @returns {*} deleted value
   */
  shift() {
    this.length--;
    const deleted = this.data[0];
    delete this.data[0];
    console.log("after delete", this.data);
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    return deleted;
  }

  deleteByIndex(index) {
    const deleted = this.data[index];
    delete this.data[index];
    this.length--;
    // console.log(this.data);
    for (let i = 0; i < this.length; i++) {
      if (i >= index) {
        // console.log(i);
        this.data[i] = this.data[i + 1];
      }
    }
    delete this.data[this.length];
    return deleted;
  }
}

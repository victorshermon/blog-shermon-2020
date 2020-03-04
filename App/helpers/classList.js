export default class ClassList {

  add($class) {
    return classList.add($class);
  }

  remove() {
    return classList.remove($class);
  }

  toggle($class) {
   return (classList.contains($class)) ? this.remove() : this.remove();
  }

}

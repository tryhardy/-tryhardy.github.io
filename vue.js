/*new Vue({
  el: '#block',
  data: {
    example: {
      title: "Hi!:3",
      coordX: "0"
    },
    class: "active",
    href: "//google.com"
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value
    },
    addActive(e) {
      this.class = e.target.addClass
    },
    event(newTitle, e){
      this.example.title = newTitle;
      this.example.coordX = e.clientX;
    }
  }
});*/

new Vue ({
  el: "#app",
  methods: {
    handleOuter(e) {
      console.log("outer");
    },
    handleInner(e) {
      console.log("inner");
    }

  }
});
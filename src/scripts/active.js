const addActive = new Vue ({
  //el: ".menu-hamburger",
  data: {
    activeClass: "active",
    changed: false
  },
  methods: {
    isActive() {
      this.changed = !this.changed
    }
  },
});

addActive.$mount(".menu-hamburger")
addActive.$mount(".menu__item")
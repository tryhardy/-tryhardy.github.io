const menuItem = [
  {name:"Главная", id:'id-home'}, 
  {name:"Обо мне", id:'id-about'}, 
  {name:"Навыки", id:'id-skills'}, 
  {name:"Работы", id:'id-works'},
  {name:"Отзывы", id:'id-reviews'},
  {name:"Связаться", id:'id-contacts'}
];

const addActive = new Vue ({
  data: {
    activeClass: "active",
    changed: false,
    menu: menuItem,
    activeItem: ''
  },
  methods: {
    isActive() {
      this.changed = !this.changed;
      document.body.classList.toggle('hidden')
    },
    goToSection(item) {
      this.activeItem = item.name
      this.changed = false;
      document.body.classList.remove('hidden')
      $('html,body').stop().animate({ scrollTop: $(`#${item.id}`).offset().top }, 1000);
    }
  },
});

const addActiveMenu = new Vue ({
  data: {
    activeClass: "active",
    changed: false,
    menu: menuItem,
    activeItem: ''
  },
  methods: {
    goToSection(item) {
      this.activeItem = item.name
      $('html,body').stop().animate({ scrollTop: $(`#${item.id}`).offset().top }, 1000);
    }
  },
});

const addActiveMenuFooter = new Vue ({
  data: {
    activeClass: "active",
    changed: false,
    menu: menuItem,
    activeItem: ''
  },
  methods: {
    goToSection(item) {
      this.activeItem = item.name
      $('html,body').stop().animate({ scrollTop: $(`#${item.id}`).offset().top }, 1000);
    }
  },
});

$(".hero__bottom-btn").click((e)=>{
  e.preventDefault();
  $('html,body').stop().animate({ scrollTop: $(`#id-about`).offset().top }, 1000);
})

addActive.$mount(".menu-hamburger")
addActiveMenu.$mount("#menu-header")
addActiveMenuFooter.$mount("#menu-footer")
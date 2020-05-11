import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "currentIndex"],
  methods: {

  }
}
const btns = {
  template: "#slider-btns",
  props: ["works", "currentIndex", "inactiveClass"],
  methods: {
    handleClick(direction) {
      this.$emit("slide", direction);
    }
  }
}
const tags = {
  template: "#slider-tags",
  props:["tags"]
}

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["currentWork", "works", "currentIndex", "inactiveClass"],
  methods: {
    handleSlide (direction) {
      this.$emit("slide", direction);
    }
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
}

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
}

new Vue({
  el: "#work-widget",
  template: "#slider",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      inactiveClass: ""
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.stoppingLoop(value);
    }
  },
  methods: {
    infiniteLoop(value){
      const worksLength = this.works.length - 1;
      if (value > worksLength) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksLength;
    },
    stoppingLoop(value){
      const worksLength = this.works.length - 1;
      if (value > worksLength) 
        {
          this.currentIndex = worksLength;
          this.inactiveClass = "next";
        }  else if (value < 0) {
          this.currentIndex = 0;
          this.inactiveClass = "prev";
        } else {
          this.inactiveClass = "";
        }
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },

    makeArrWithImg(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/previews/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithImg(data);
  }
});
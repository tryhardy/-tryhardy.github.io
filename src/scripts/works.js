import Vue from "vue";
import axios from "axios";

const request = axios.create({
  baseURL: 'https://webdev-api.loftschool.com/'
})

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "currentIndex"],
  methods: {
    clickSlide(id) {
      this.$emit("clickSlide", id);
    }
  }
}
const btns = {
  template: "#slider-btns",
  props: ["works", "currentIndex", "inactiveClass"],
  methods: {
    handleClick(direction) {
      this.$emit("slide", direction);
      this.$emit("changeClass", direction);
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
    },
    changeClass (direction) {
      this.$emit("changeClass", direction);
    },
    clickSlide(id) {
      this.$emit("clickSlide", id);
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
      inactiveClass: "prev"
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
        }  else if (value < 0) {
          this.currentIndex = 0;
        } else {
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
    clickSlide(id) {
      const worksLength = this.works.length - 1;
      const currentId = id - 1;
      this.currentIndex = currentId;
      if (currentId <= 0) {
        this.inactiveClass = "prev";
      } else if (currentId >= worksLength) {
        this.inactiveClass = "next";
      } else {
        this.inactiveClass = "";
      };
    },
    changeClass(direction) {
      const worksLength = this.works.length - 1;
      if (this.currentIndex >= worksLength) 
        {
          this.inactiveClass = "next";
        }  else if (this.currentIndex <= 0) {
          this.inactiveClass = "prev";
        } else {
          this.inactiveClass = "";
        };
    },
    // makeArrWithImg(array) {
    //   array = array.map((item) => {
    //     const vaseUrl = 'https://webdev-api.loftschool.com/';
    //     const requirePic = baseUrl + item.photo;
    //     item.photo = requirePic;
    //     return item;
    //   });
    // }
  },
  async created() {
    const response = await request.get('/works/323')
    const array = [...response.data]
    this.works = array;
  }
});
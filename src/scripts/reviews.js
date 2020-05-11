import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        groupCells: true,
        pageDots: false,
        prevNextButtons: false
      },
      reviews: []
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    
    makeArrWithImg(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/reviews/${item.pic}`);
        item.pic = requirePic;
        return item;
      });
    }
  },

  mounted() {
    var refs = this.$refs;
    refs.prevBtn.classList.add("inactive");

    refs.flickity.on("change", function(position) {
      if (position === this.slides.length -1) {
        refs.nextBtn.classList.add("inactive");        
      } else {
        refs.nextBtn.classList.remove("inactive");        
      }
      if (position === 0){
        refs.prevBtn.classList.add("inactive");
      } else {
        refs.prevBtn.classList.remove("inactive");
      }
    });
  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithImg(data);
  }
});
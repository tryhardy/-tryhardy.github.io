import Flickity from 'vue-flickity';
import axios from "axios";

const request = axios.create({
  baseURL: 'https://webdev-api.loftschool.com/'
})

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
        const baseUrl = 'https://webdev-api.loftschool.com/';
        const requirePic = baseUrl + item.photo;
        item.photo = requirePic;
        return item;
      });
    },

    
  },

  async mounted() {
    var refs = this.$refs;
    refs.prevBtn.classList.add("inactive");

    refs.flickity.on("change", function(position) {
      console.log(position)
      if (position === this.slides.length -1) {
        console.log(position)
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

  async created() {
    const response = await request.get('/reviews/323')
    const array = [...response.data];
    this.reviews = this.makeArrWithImg(array);

    await this.$nextTick(function () {
      this.$refs.flickity.rerender(); 
    });
  }
});
<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar class="movie-navbar" :sliding="true" no-shadow back-link="">
      <div slot="left">
        <f7-nav-title>
          {{ movie.title }}
        </f7-nav-title>
      </div>
    </f7-navbar>

    <!-- <f7-block-title medium> {{ movie.title }}</f7-block-title> -->
    <f7-card
      class="movie-cover"
      no-shadow
      :style="'background-color: ' + movie.bg_color + ';'"
    >
      <f7-row class="movie-row" no-gap>
        <f7-col class="movie-col" width="40" small="35">
          <img class="movie-image" :src="movie.poster_link" />
        </f7-col>
        <f7-col class="movie-col detail" width="60" small="65">
          <f7-row class="detail-row">
            <f7-col class="detail-label" width="30">Genre</f7-col>
            <f7-col class="detail-value" width="70">{{ movie.genre }}</f7-col>
          </f7-row>
          <f7-row class="detail-row">
            <f7-col class="detail-label" width="30">Durasi</f7-col>
            <f7-col class="detail-value" width="70">{{
              movie.duration
            }}</f7-col>
          </f7-row>
          <f7-row class="detail-row">
            <f7-col class="detail-label" width="30">Sutradara</f7-col>
            <f7-col class="detail-value" width="70">{{
              movie.director
            }}</f7-col>
          </f7-row>
          <f7-row class="detail-row">
            <f7-col class="detail-label" width="30">Rating</f7-col>
            <f7-col class="detail-value" width="70">{{
              movie.age_rating
            }}</f7-col>
          </f7-row>
          <f7-row class="detail-row" style="padding-top: 7vw">
            <f7-col class="user-rating">
              {{ movie.user_score }} % menyukai film ini
            </f7-col>
          </f7-row>
          <f7-row class="detail-row">
            <f7-col>
              <f7-progressbar
                class="user-rating-bar"
                :color="blue"
                :progress="movie.user_score"
              ></f7-progressbar>
            </f7-col>
          </f7-row>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-block-title>Sinopsis</f7-block-title>
    <f7-card
      no-shadow
      :style="'background-color: ' + movie.bg_color + ';'"
      :content="movie.overview"
      text-color="white"
      class="detail-text"
    >
    </f7-card>

    <f7-block-title>Jadwal </f7-block-title>
    <f7-block>
      <f7-swiper
        :grabCursor="true"
        :slidesPerView="5"
        :spaceBetween="10"
        @click="onDateClick"
      >
        <f7-swiper-slide v-for="(d, idx) in date" :key="idx">
          <f7-button
            :class="{ 'button-active': d == activeDate }"
            small
            outline
            >{{ d }}</f7-button
          >
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <f7-list media-list>
      <f7-list-item
        v-for="(cinema, idx) in cinemas"
        :key="idx"
        :title="cinema.name"
        :subtitle="cinema.address"
        class="detail-text"
      >
        <f7-row>
          <f7-col v-for="(slot, cidx) in cinema.time_slot" :key="cidx">
            <f7-button class="slot" outline round small>
              <a :href="'/cinemas/' + cidx + '/seats?date='+activeDate+'&slot='+slot"> {{ slot }}</a>
            </f7-button>
          </f7-col>
        </f7-row>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import nowPlaying from "../assets/data/now_playing.json";
import cinemas from "../assets/data/cinemas.json";

export default {
  props: {
    f7route: Object,
  },
  data() {
    return {
      cinemas: cinemas,
      date: ["31 Des", "1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan"],
      activeDate: "31 Des",
    };
  },
  setup(props) {
    const movieId = props.f7route.params.id;
    return {
      movie: nowPlaying[movieId],
    };
  },
  methods: {
    onDateClick: function (swiper, event) {
      const idx = swiper.clickedIndex;
      this.activeDate = this.date[idx];
    },
  },
};
</script>
<style>
.movie-nav {
  background-color: white !important;
}
.slot {
  margin-top: 2vh;
  margin-right: 3vw;
}
.detail-text {
  font-size: 3.1vw;
}
.item-subtitle {
  font-size: 2.5vw !important;
}
.detail {
  padding-top: 5vw;
}
.user-rating {
  font-size: 3vw;
  color: white;
}
.user-rating-bar {
  width: 50vw;
}
.detail-row {
  margin-top: 2% !important;
}
.detail-label {
  font-size: 2.8vw;
  color: white;
}
.detail-value {
  font-size: 2.8vw;
  color: white;
  padding-left: 5%;
}
.movie-row {
  height: inherit;
}
.movie-col {
  height: inherit;
}
.movie-image {
  width: auto;
  height: 80%;
  border-radius: 8%;
  position: relative;
  top: 10%;
  left: 7%;
}
.movie-cover {
  height: 25vh;
  background-attachment: fixed !important;
  background-position: center center !important;
}
</style>

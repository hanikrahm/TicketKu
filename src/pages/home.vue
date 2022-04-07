<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="true" no-shadow>
      <f7-nav-left>
        <f7-nav-title>
          <f7-icon f7="tickets_fill"></f7-icon>
          TicketKu
        </f7-nav-title>
      </f7-nav-left>
      <f7-nav-right>
      <f7-icon f7="bell_fill"></f7-icon>
        <div style="margin-left: 2vw"></div>
        <f7-icon
          f7="person_circle"
          login-screen-open=".demo-login-screen"
          @click="loginScreenOpened = true"
        ></f7-icon>
      </f7-nav-right>
    </f7-navbar>

    <!-- ongoing Movies -->
    <f7-block>
      <f7-block-title medium>Sedang Tayang</f7-block-title>
      <f7-swiper
        loop
        @slideChange="onNowChange"
        grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="2"
        :spaceBetween="15"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        class="now-playing-slider"
      >
        <f7-swiper-slide v-for="(movie, idx) in nowPlaying" :key="idx">
          <a :href="'/movies/' + idx">
            <img class="poster" :src="movie.poster_link" />
          </a>
        </f7-swiper-slide>
      </f7-swiper>
      <h3 class="text-align-center">{{ nowTitle }}</h3>
    </f7-block>

    <!-- Coming Soon -->
    <f7-block>
      <f7-block-title>Akan Tayang</f7-block-title>
      <f7-swiper :grabCursor="true" :slidesPerView="3" :spaceBetween="10">
        <f7-swiper-slide v-for="(movie, idx) in comingSoon" :key="idx">
          <img class="poster" :src="movie.poster_link" />
          <p>{{ movie.title }}</p>
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>

    <!-- News -->
    <f7-block>
      <f7-block-title>Berita Terbaru</f7-block-title>
      <f7-swiper :grabCursor="true" :slidesPerView="2" :spaceBetween="10">
        <f7-swiper-slide v-for="(n, idx) in news" :key="idx">
          <img class="news" :src="n.poster_link" />
          <p>{{ n.title }}</p>
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>

    <!-- login -->
    <f7-login-screen
      class="demo-login-screen"
      :opened="loginScreenOpened"
      @loginscreen:closed="loginScreenOpened = false"
    >
      <f7-page login-screen>
        <f7-login-screen-title
          ><f7-icon f7="tickets_fill"></f7-icon>TicketKu
        </f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            label="Username"
            type="text"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Password"
            type="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Sign In</f7-list-button>
          <f7-list-button @click="close">Back</f7-list-button>
          <f7-block-footer
            >Some text about login information.<br />Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.</f7-block-footer
          >
        </f7-list>
      </f7-page>
    </f7-login-screen>
  </f7-page>
</template>
<script>
import nowPlaying from "../assets/data/now_playing.json";
import comingSoon from "../assets/data/coming_soon.json";
import news from "../assets/data/news.json";

import { f7 } from "framework7-vue";

export default {
  data: function () {
    return {
      nowPlaying: nowPlaying,
      comingSoon: comingSoon,
      news: news,
      nowTitle: nowPlaying[0].title,
      loginScreenOpened: false,
      username: "",
      password: "",
    };
  },
  methods: {
    onNowChange: function (swiper) {
      const idx = swiper.realIndex;
      this.nowTitle = nowPlaying[idx].title;
    },
    signIn: function () {
      if (this.username == "admin" && this.password == "admin") {
        f7.loginScreen.close();
      } else {
        f7.dialog.alert(`Failed, Inorrect username or password`, () => {
          this.username = "";
          this.password = "";
          f7.dialog.close();
        });
      }
    },
    close: function () {
      this.username = "";
      this.password = "";
      f7.loginScreen.close();
    },
  },
};
</script>
<style>
.navbar-bg {
  background-color: white !important;
}
.poster {
  text-align: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border-radius: 8%;
}
.news {
  width: 100%;
  height: 12vh;
  box-sizing: border-box;
  border-radius: 8%;
}
.md .navbar .title {
  text-align: center;
  width: 100%;
}
</style>

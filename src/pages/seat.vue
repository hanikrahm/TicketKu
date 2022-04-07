<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar class="movie-navbar" :sliding="true" no-shadow back-link="">
      <div slot="left">
        <h5>{{ cinema.name }} - {{ date }} | {{ slot }}</h5>
      </div>
    </f7-navbar>

    <f7-block class="info">
      <span class="info-badge">
        <f7-badge color="424E63"></f7-badge> Tidak Tersedia
      </span>
      <span class="info-badge"
        ><f7-badge color="blue"></f7-badge> Pilihanmu</span
      >
    </f7-block>

    <f7-block>
      <f7-row class="seat-row" v-for="(alph, i) in seatNum" :key="i">
        <f7-col v-for="index in 8" :key="index">
          <f7-button
            outline
            :class="{
              'button-active': reserved.includes(alph + index),
              selected: selected.includes(alph + index),
            }"
            @click="addSelected"
            >{{ alph + index }}</f7-button
          >
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block>
      <f7-button outline>Layar Bioskop</f7-button>
    </f7-block>

    <f7-block>
      <f7-button
        v-if="selected.length > 0"
        class="order"
        fill
        sheet-open=".order-swipe-to-step"
        >Beli Tiket</f7-button
      >
    </f7-block>

    <f7-sheet
      class="order-swipe-to-step"
      style="height: auto; --f7-sheet-bg-color: #fff"
      swipe-to-close
      swipe-to-step
      backdrop
    >
      <div class="order-swipe-step">
        <div
          class="
            display-flex
            padding
            justify-content-space-between
            align-items-center
          "
        >
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px">
            <b>Rp{{ total + 2000 }}</b>
          </div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <f7-button
            large
            fill
            :href="'/order?price=' + (total + 2000)"
            @click="closeSheet"
            >Bayar Pesanan</f7-button
          >
        </div>
      </div>
      <f7-block-title medium class="margin-top">Pesanan Anda:</f7-block-title>
      <f7-list no-hairlines>
        <f7-list-item :title="selected.length + ' Tiket Reguler '">
          <template #after>
            <b class="text-color-black">Rp35000</b>
          </template>
        </f7-list-item>
        <f7-list-item title="Biaya Admin">
          <template #after>
            <b class="text-color-black">Rp2000</b>
          </template>
        </f7-list-item>
      </f7-list>
    </f7-sheet>
  </f7-page>
</template>
<script>
import cinemas from "../assets/data/cinemas.json";
import { f7 } from "framework7-vue";

export default {
  props: {
    f7route: Object,
  },
  data() {
    return {
      height: 5,
      seatNum: ["A", "B", "C", "D", "E", "F", "G"],
      selected: [],
      reserved: ["D3", "C1", "E7", "E6", "B5", "A6"],
      total: 0,
    };
  },
  setup(props) {
    const cinemaId = props.f7route.params.id;
    return {
      cinema: cinemas[cinemaId],
      date: props.f7route.query.date,
      slot: props.f7route.query.slot,
    };
  },
  methods: {
    addSelected: function (event) {
      const id = event.path[0].innerText;
      if (this.selected.includes(id)) {
        const index = this.selected.indexOf(id);
        this.selected.splice(index, 1);
        this.total -= 35000;
      } else if (this.reserved.includes(id)) {
        return;
      } else {
        this.selected.push(id);
        this.total += 35000;
      }
    },
    closeSheet: function () {
      f7.sheet.close(".order-swipe-to-step");
    },
  },
};
</script>
<style>
.info {
  text-align: center;
}
.info-badge {
  margin-left: 2vw;
}
.seat-row {
  margin-bottom: 2vh;
}
.selected {
  background-color: #2196f3 !important;
}
.order {
  margin-top: 15vh;
}
</style>

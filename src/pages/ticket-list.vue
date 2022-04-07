<template>
  <f7-page name="ticktes">
    <f7-navbar title="Daftar Tiket" class="movie-navbar" no-shadow></f7-navbar>
    <f7-block-title>Pesanan</f7-block-title>
    <f7-block>
      <f7-card
        expandable
        outline
        no-shadow
        v-for="(ticket, idx) in other"
        :key="idx"
        class="ticket-card"
      >
        <f7-card-content :padding="false">
          <!-- <div class="active-ticket" :style="{ height: 'auto' }"> -->
            <f7-card-header text-color="424E63" class="display-block">
              <span class="ticket-title">{{ ticket.name }}</span
              ><br />
              <f7-row no-gap>
                <f7-col width="25" small="20">
                  <img class="ticket-image" :src="ticket.poster_link" />
                </f7-col>
                <f7-col width="75" small="80">
                  <small class="ticket-detail"
                    ><f7-icon f7="ticket" size="22px"></f7-icon>
                    {{ ticket.quantity }} Tiket Reguler</small
                  ><br />
                  <small class="ticket-detail"
                    ><f7-icon f7="location" size="22px"></f7-icon>
                    {{ ticket.location }}</small
                  ><br />
                  <small class="ticket-detail"
                    ><f7-icon f7="calendar" size="22px"></f7-icon>
                    {{ ticket.date }}</small
                  ><br />
                  <f7-badge :color="ticket.badge_color">{{
                    ticket.state
                  }}</f7-badge>
                </f7-col>
              </f7-row>
            </f7-card-header>
            <f7-link
              card-close
              color="424E63"
              class="card-opened-fade-in"
              :style="{ position: 'absolute', right: '15px', top: '15px' }"
              icon-f7="xmark_circle_fill"
            ></f7-link>
          <!-- </div> -->
          <div class="card-content-padding">
            <div style="text-align: center" class="ticket-detail-expand">
              Nomor Pesanan
            </div>
            <div style="margin-bottom: 2vh; text-align: center">
              {{ randomOrderId(20) }}
            </div>

            <div style="text-align: center" class="ticket-detail-expand">
              Kode Tiket
            </div>
            <div v-if="ticket.state != 'Dibayar'" style="text-align: center">
              Tiket belum tersedia
            </div>
            <div v-if="ticket.state == 'Dibayar'" style="text-align: center">
              <img src="../assets/qrcode.png" />
            </div>
          </div>
        </f7-card-content>
      </f7-card>
    </f7-block>
  </f7-page>
</template>
<script>
import tickets from "../assets/data/tickets.json";

export default {
  data() {
    console.log(tickets);
    return {
      active: tickets.active,
      other: tickets.other,
    };
  },
  methods: {
    randomOrderId: function makeid(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return "GT" + result;
    },
  },
};
</script>
<style scoped>
.ticket-detail-expand {
  font-size: 3.2vw;
  color: #424e63;
}
@media (max-width: 640) {
  .ticket-card {
    height: 60vw;
  }
}

.ticket-card {
  height: 49vw;
}

.ticket-image {
  width: 21vw;
  border-radius: 8%;
  margin-top: 1vh;
}
.ticket-title {
  font-size: 5.2vw;
  color: #424e63;
}
.ticket-detail {
  font-size: 3vw;
  color: #424e63;
  margin-bottom: 0px !important;
}
.card-backdrop {
  animation: none !important;
  transition: 400ms;
}
.card-backdrop-in {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

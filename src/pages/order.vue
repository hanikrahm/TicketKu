<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="true" no-shadow>
      <f7-nav-title>Bayar Pesanan</f7-nav-title>
    </f7-navbar>

    <f7-block-title medium>Informasi Tagihan</f7-block-title>
    <f7-card class="order-card" no-shadow>
      <f7-row>
        <f7-col style="color: white">
          <f7-block-title style="color: ivory"
            >Batas Waktu Pembayaran</f7-block-title
          >
          <f7-block>
            <h3>{{ randomOrderDeadline() }}</h3>
          </f7-block>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col style="color: white">
          <f7-block-title style="color: ivory">Jumlah Tagihan</f7-block-title>
          <f7-block
            ><h4>Rp{{ price }}</h4>
          </f7-block>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col style="color: white">
          <f7-block-title style="color: ivory">Nomor Tagihan</f7-block-title>
          <f7-block>
            <h4>{{ randomOrderId(20) }}</h4>
          </f7-block>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-block-title medium>Metode Pembayaran</f7-block-title>
    <f7-list accordion-list>
      <f7-list-item accordion-item title="Transfer Bank">
        <f7-accordion-content>
          <f7-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum id neque nec commodo. Sed vel justo at turpis laoreet
              pellentesque quis sed lorem. Integer semper arcu nibh, non mollis
              arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue
              dui sollicitudin. Donec eu arcu dignissim felis viverra blandit
              suscipit eget ipsum.
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Virtual Account">
        <f7-accordion-content>
          <f7-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum id neque nec commodo. Sed vel justo at turpis laoreet
              pellentesque quis sed lorem. Integer semper arcu nibh, non mollis
              arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue
              dui sollicitudin. Donec eu arcu dignissim felis viverra blandit
              suscipit eget ipsum.
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Minimarket">
        <f7-accordion-content>
          <f7-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum id neque nec commodo. Sed vel justo at turpis laoreet
              pellentesque quis sed lorem. Integer semper arcu nibh, non mollis
              arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue
              dui sollicitudin. Donec eu arcu dignissim felis viverra blandit
              suscipit eget ipsum.
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button fill href="/"> Kembali ke Halaman Utama</f7-button>
    </f7-block>
  </f7-page>
</template>
<script>
import cinemas from "../assets/data/cinemas.json";

export default {
  props: {
    f7route: Object,
  },
  data() {
    return {};
  },
  setup(props) {
    const cinemaId = props.f7route.params.id;
    return {
      cinema: cinemas[cinemaId],
      price: props.f7route.query.price,
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
    randomOrderDeadline: function () {
      var dt = new Date();
      dt = new Date(dt.setHours(dt.getHours() + 2));

      // return dt;
      return dt.toLocaleString();
    },
  },
};
</script>
<style>
.order-card {
  background-color: #424e63;
  padding-bottom: 4vh;
}
</style>

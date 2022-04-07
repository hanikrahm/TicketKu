
import TicketsPage from '../pages/ticket-list.vue';
import HomePage from '../pages/home.vue';
import SearchPage from '../pages/search.vue';
import MoviePage from '../pages/movie.vue'
import SeatPage from '../pages/seat.vue'
import OrderPage from '../pages/order.vue'


var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/movies/:id',
    component: MoviePage,
  },
  {
    path: '/cinemas/:id/seats',
    component: SeatPage,
  },
  {
    path: '/order',
    component: OrderPage,
  },
  {
    path: '/',
    component: SearchPage,
  },
  {
    path: '/tickets',
    component: TicketsPage,
  },
];

export default routes;

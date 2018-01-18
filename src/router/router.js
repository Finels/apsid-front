import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/Home.vue'
import ScientificCommittee from '../view/welcomePage/ScientificCommittee.vue'
import OrganizingCommittee from '../view/welcomePage/OrganizingCommittee.vue'
import Speakers from '../view/welcomePage/Speakers.vue'
import GeneralInformation from '../view/welcomePage/GeneralInformation.vue'
import Register from '../view/register/Register.vue'
import RegisterFee from '../view/register/RegistrateFee.vue'
import Abstract from '../view/abstract/Abstract.vue'
import AboutPage from '../view/about/AboutPage.vue'
import Download from '../view/download/Download.vue'
import HotelMap from '../view/hotelMap/HotelMap.vue'
import ContactUs from '../view/contactUs/ContactUs.vue'
Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', component: Home},
    {path: '/scientificCommittee', component: ScientificCommittee},
    {path: '/organizingCommittee', component: OrganizingCommittee},
    {path: '/speakers', component: Speakers},
    {path: '/generalInformation', component: GeneralInformation},
    {path: '/register', component: Register},
    {path: '/registerFee', component: RegisterFee},
    {path: '/abstract', component: Abstract},
    {path: '/contactUs', component: ContactUs},
    {path: '/download', component: Download},
    {path: '/aboutPage', component: AboutPage},
    {path: '/hotelMap', component: HotelMap}
  ]
})

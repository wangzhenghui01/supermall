import Vue from "vue";
import VueRouter from "vue-router";
import * as echarts from "echarts";
import Highcharts from "highcharts/highstock";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";
import { Select } from "ant-design-vue";
import { Dropdown } from "ant-design-vue";
import { Slider } from "ant-design-vue";
import { Icon } from "ant-design-vue";
import DatePicker from "ant-design-vue/lib/date-picker";
import BMap from "vue-baidu-map";
// 1.安装插件
Vue.use(BMap, {
  ak: "KLr3YRX3ZOtE4pRCLBSdowC3KaNGTGQi"
});
Vue.use(Button);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(Slider);

Vue.use(VueRouter);
Vue.use(echarts);
Vue.use(Highcharts);
Vue.prototype.$echarts = echarts;
Vue.prototype.$highcharts = Highcharts;

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");
const DaPing = () => import("../views/daping/DaPing");
const DaPing2 = () => import("../views/daping/DaPing2");
const PieInternateTable = () => import("../views/daping/pie/PieInternateTable");
const Test1 = () => import("../views/daping/test/Test1");
const SliderCombination = () =>
  import("../views/daping/common/SliderCombination");

// 2.创建router
const routes = [
  {
    path: "",
    redirect: "/percentage"
  },
  {
    path: "/percentage",
    component: PieInternateTable
  },
  {
    path: "/test1",
    component: Test1
  },
  {
    path: "/daping",
    component: DaPing
  },
  {
    path: "/daping2",
    component: DaPing2
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  // {
  //   path: '/cart',
  //   component: Cart
  // },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;

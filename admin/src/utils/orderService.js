import axios from "axios";

export default {
  getAllOrders: function (data={}) {
    return axios.get(
      "/orders?limit=" +
        data.limit +
        "&page=" +
        data.page +
        "&status=" +
        data.status +
        "&slot=" +
        data.slot +
        "&sort=" +
      data.sort +
      "&query=" +
      data.query
    );
  },
  changeStatus: function (orderId,status) {
    return axios.put("/changeStatus",{orderId,status})
  },
  findOne: function (orderId) {
    return axios.get("/order?orderId="+orderId)
  },
  getUserCount() {
    return axios.get('/getUserCount',{mode: 'no-cors'})
  }
};

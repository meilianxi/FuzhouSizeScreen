import axios from "axios";
axios.defaults.baseURL = "https://www.easy-mock.com/mock/5b7123840195645ff4a98d91/example";
axios.interceptors.response.use((res)=>{
  return res.data.data;
});

//获取天气
export let getWeather = ()=> {
  return axios.get("http://wthrcdn.etouch.cn/weather_mini?city=福州");
};

//获取贵安小屏
export let getGuiAn = ()=> {
  return axios.get("/litter/guian");
};

//获取长乐小屏人文
export let getChangLeHumanity = ()=> {
  return axios.get("Changle/Airport");
};

//获取长乐小屏自然
export let getChangLeNatural = ()=> {
  return axios.get("/Changle/Airport/natural");
};

//获取机场一City/HotScen
export let getCityHotScen = ()=> {
  return axios.get("/City/HotScen");
};

//获取机场一City/Food
export let getCityFood = ()=> {
  return axios.get("/City/Food");
};

//获取机场一City/Hotel
export let getCityHotel = ()=> {
  return axios.get("/City/Hotel");
};

//获取机场一ChangLe/Map
export let ChangLeMap = ()=> {
  return axios.get("/ChangLe/Map");
};

//获取长乐机场一的数据总请求
export let fly1DataAll  = ()=> {
  return axios.all([getCityHotScen(),
    getCityFood(), getCityHotel()]);
};



//获取机场二/ProvinceHotCity
export let getProvinceHotCity = ()=> {
  return axios.get("/ProvinceHotCity");
};

//获取机场二 /Province/HotScen
export let getProvinceHotScen = ()=> {
  return axios.get("/Province/HotScen");
};

//获取机场二 /Province/Gift
export let getProvinceGift = ()=> {
  return axios.get("/Province/Gift");
};

//获取机场二Povince/Map
export let PovinceMap = ()=> {
  return axios.get("/Povince/Map");
};

//获取长乐机场二的数据总请求
export let fly2DataAll  = ()=> {
  return axios.all([getProvinceHotCity(),
    getProvinceHotScen(), getProvinceGift()]);
};

//获取路牌鼓山实时人流量
export let GuShanNumber = ()=> {
  return axios.get("/Number");
};

//获取
export let XiHuCount = ()=> {
  return axios.get("/XiHu/Count");
};

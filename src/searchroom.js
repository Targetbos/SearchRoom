//scss
import "./modules/footer/__footer/_footer.scss";
import "./modules/cards/__desc-room/desc-room.scss";
import "./modules/formelements/__title-element/_title-element.scss";

import "./modules/formelements/__checkbox-buttons/_checkbox-buttons.scss";
import "./modules/formelements/__rich-checkbox-btn/_rich-checkbox-btn.scss";
import "./modules/formelements/__pagination/_pagination.scss";

//js
import "./modules/header/__header/header.js";
import "./modules/formelements/__filter-date-dropdown/filter-date-dropdown.js";
import "./modules/formelements/__range-slider/range-slider.js";
import "./modules/formelements/__expandable-checkbox-list/expandable-checkbox-list.js";
import "./modules/formelements/__dropdown/__dropdown-guest/dropdown-guest.js";
import "./modules/formelements/__dropdown/__dropdown-room/dropdown-room.js";
import {descRoomView, addSliderDescRoom} from "./modules/cards/__desc-room/desc-room.js";

var ArrDataRoom = [{number: "888", type: "люкс", rating: "5", price: "9990", feedback: 145, imgLink: ["assets/images/room1.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "840", type: "", rating: "4", price: "9900", feedback: 65, imgLink: ["assets/images/room2.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "980", type: "люкс", rating: "3", price: "8500", feedback: 35, imgLink: ["assets/images/room3.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "856", type: "", rating: "5", price: "7300", feedback: 19, imgLink: ["assets/images/room4.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "740", type: "", rating: "4", price: "6000", feedback: 44, imgLink: ["assets/images/room5.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "982", type: "", rating: "3", price: "5800", feedback: 56, imgLink: ["assets/images/room6.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "678", type: "", rating: "5", price: "5500", feedback: 45, imgLink: ["assets/images/room7.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "450", type: "", rating: "4", price: "5300", feedback: 39, imgLink: ["assets/images/room8.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "350", type: "", rating: "3", price: "5000", feedback: 77, imgLink: ["assets/images/room9.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "666", type: "", rating: "5", price: "5000", feedback: 25, imgLink: ["assets/images/room10.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "444", type: "", rating: "3", price: "5000", feedback: 15, imgLink: ["assets/images/room11.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]},
                  {number: "352", type: "", rating: "3", price: "5000", feedback: 55, imgLink: ["assets/images/room12.png","assets/images/room2.png","assets/images/room3.png","assets/images/room4.png"]}]
  var wrapDescRoom = document.querySelector(".content__wrap-desc-room")
  ArrDataRoom.forEach((dataRoom)=>{
    
    let descRoomContent = descRoomView(dataRoom);
    let descRoomInner = document.createElement("div");
    descRoomInner.classList.add("content__inner-desc-room");
    descRoomInner.insertAdjacentHTML("beforeend", descRoomContent);
    wrapDescRoom.append(descRoomInner);
  })
  addSliderDescRoom();


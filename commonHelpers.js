import{f as y,i as a}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const d=y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(a.error({title:"Error",message:"Please choose a date in the future"}),document.getElementById("start-btn").disabled=!0):document.getElementById("start-btn").disabled=!1}});document.getElementById("start-btn").addEventListener("click",()=>{const e=d.selectedDates[0];if(!e)return;document.getElementById("datetime-picker").disabled=!0,document.getElementById("start-btn").disabled=!0;const t=setInterval(()=>{const s=e-new Date;if(s<=0)clearInterval(t),c({days:0,hours:0,minutes:0,seconds:0}),document.getElementById("datetime-picker").disabled=!1,a.success({title:"Success",message:"Countdown timer has ended!"});else{const i=r(s);c(i)}},1e3)});function r(e){const u=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:m,seconds:f}}function c({days:e,hours:t,minutes:n,seconds:s}){document.querySelector("[data-days]").textContent=o(e),document.querySelector("[data-hours]").textContent=o(t),document.querySelector("[data-minutes]").textContent=o(n),document.querySelector("[data-seconds]").textContent=o(s)}function o(e){return e<10?`0${e}`:e}});
//# sourceMappingURL=commonHelpers.js.map

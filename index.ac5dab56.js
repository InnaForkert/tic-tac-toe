!function(){var e,n;e={menu:document.querySelector(".menu"),gameDiv:document.querySelector(".gameDiv"),gameDivBot:document.querySelector(".gameDivBot"),form:document.querySelector(".form"),player1:document.querySelector("#player1"),player2:document.querySelector("#player2"),player1GameName:document.querySelector("#player1Name"),player2GameName:document.querySelector("#player2Name"),fieldies:document.querySelectorAll(".fieldy"),fieldiesBot:document.querySelectorAll(".fieldyBot"),restartBtn:document.querySelector("#restartBtn"),restartBtnBot:document.querySelector("#restartBtnBot"),resetBtn:document.querySelector("#resetBtn"),resetBtnBot:document.querySelector("#resetBtnBot"),botStart:document.querySelector(".botButton")};var t,r=e.menu,i=e.gameDiv,o=e.gameDivBot,l=e.form,u=e.player1,a=e.player2,c=e.player1GameName,d=e.player2GameName,s=e.fieldies,f=e.fieldiesBot,v=e.restartBtn,m=e.restartBtnBot,y=e.resetBtn,g=e.resetBtnBot,S=e.botStart,T=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],x=(n=function(){switch(Math.round(10*Math.random())){case 1:return[4,0,2,6,8,1,3,5,7];case 2:return[0,8,2,6,4,3,5,7,1];case 3:return[0,8,6,2,4,5,3,7,1];case 4:return[2,6,0,8,4,1,7,5,3];case 5:return[6,2,0,8,4,1,7,3,5];case 6:return[6,2,8,0,4,1,5,7,3];case 7:return[8,0,6,2,4,5,7,1,3];case 8:return[8,0,2,6,4,5,7,3,1];case 9:return[2,6,8,0,4,7,3,5,1];default:return[4,0,2,6,8,1,3,7,5]}})(),p=[],I=[],h="X",B="",O="Player I",E="Player II",L=!1;function q(e){null==r||r.classList.add("visually-hidden"),null==e||e.classList.remove("visually-hidden")}function X(e,n){c&&d&&(c.innerText="PlayerX: ".concat(e),d.innerText="PlayerO: ".concat(n))}function N(e){var n=e.target;""===n.textContent?(k(n),P(n),h="X"===h?"O":"X",localStorage.setItem("activePlayer",JSON.stringify(h)),function(){console.log(B),B=""===B||O?E:O;null==c||c.classList.toggle("active-player"),null==d||d.classList.toggle("active-player")}(),localStorage.setItem("playerX",JSON.stringify(p)),localStorage.setItem("playerO",JSON.stringify(I))):alert("This one is taken!")}function k(e){e.innerText=h}function P(e){"X"===h?(p.push(Number(e.dataset.id)),p.length>2&&b(p)):(I.push(Number(e.dataset.id)),I.length>2&&b(I))}function b(e){(L=!!T.find((function(n){return n.every((function(n){return e.includes(n)}))})))?setTimeout((function(){return function(){var e;e=t?"X"===h?confirm("Yahoo! You win! Another round?"):confirm("Oh no, bot won:( Looking for revenge?"):confirm("".concat(B," was crushed! Another round?"));e?M():C()}()}),20):function(){if(4===I.length&&5===p.length){confirm("Oh no, no more moves! Reset?")?M():C()}}()}function D(e,n){s.forEach((function(t){t.dataset.id&&n.includes(+t.dataset.id)&&(t.innerText=e)}))}function w(){I=[],p=[]}function A(e){var n=e.target;""===n.textContent?(f.forEach((function(e){return e.removeEventListener("click",A)})),k(n),P(n),L||"O"===(h="X"===h?"O":"X")&&function(){var e=!0;!L&&e&&(e=Y(I));e&&!L&&(e=Y(p));e&&!L&&(e=function(e){if(e.includes(1)&&!f[8].innerText)return void G(8);if(e.includes(3)&&!f[6].innerText)return void G(6);if(e.includes(7)&&!f[2].innerText)return void G(2);if(e.includes(9)&&!f[0].innerText)return void G(0);return!0}(p));e&&!L&&(n=x,t=n.find((function(e){return!f[e].innerText})),(t||0===t)&&G(t));var n,t}()):alert("This one is taken!")}function J(){f.forEach((function(e){e.addEventListener("click",A)}))}function G(e){setTimeout((function(){k(f[e]),P(f[e]),h="X"===h?"O":"X",J()}),400)}function M(){if(t)localStorage.clear(),w(),x=n(),console.log(x),setTimeout((function(){h="X",f.forEach((function(e){return e.innerHTML=""})),L=!1,J()}),0);else{var e=localStorage.getItem("player1")||"Player II";O=localStorage.getItem("player2")||"Player I",E=e||"Player II",localStorage.removeItem("playerX"),localStorage.removeItem("playerO"),localStorage.removeItem("activePlayer"),localStorage.setItem("player1",O),localStorage.setItem("player2",E),w(),location.reload()}}function C(){localStorage.clear(),location.reload()}function Y(e){if(null==e?void 0:e.includes(1)){if(e.includes(2)&&!f[2].innerText)return void G(2);if(e.includes(3)&&!f[1].innerText)return void G(1);if(e.includes(4)&&!f[6].innerText)return void G(6);if(e.includes(7)&&!f[3].innerText)return void G(3);if(e.includes(5)&&!f[8].innerText)return void G(8);if(e.includes(9)&&!f[4].innerText)return void G(4)}if(null==e?void 0:e.includes(2)){if(e.includes(3)&&!f[0].innerText)return void G(0);if(e.includes(5)&&!f[7].innerText)return void G(7);if(e.includes(8)&&!f[4].innerText)return void G(4)}if(null==e?void 0:e.includes(3)){if(e.includes(6)&&!f[8].innerText)return void G(8);if(e.includes(9)&&!f[5].innerText)return void G(5);if(e.includes(5)&&!f[6].innerText)return void G(6);if(e.includes(7)&&!f[4].innerText)return void G(4)}if(null==e?void 0:e.includes(4)){if(e.includes(5)&&!f[5].innerText)return void G(5);if(e.includes(6)&&!f[4].innerText)return void G(4);if(e.includes(7)&&!f[0].innerText)return void G(0)}if(null==e?void 0:e.includes(5)){if(e.includes(6)&&!f[3].innerText)return void G(3);if(e.includes(8)&&!f[1].innerText)return void G(1);if(e.includes(9)&&!f[0].innerText)return void G(0);if(e.includes(7)&&!f[2].innerText)return void G(2)}if((null==e?void 0:e.includes(6))&&e.includes(9)&&!f[2].innerText)G(2);else{if(null==e?void 0:e.includes(7)){if(e.includes(8)&&!f[8].innerText)return void G(8);if(e.includes(9)&&!f[7].innerText)return void G(7)}if(!(null==e?void 0:e.includes(8))||!e.includes(9)||f[6].innerText)return!0;G(6)}}l&&l.addEventListener("submit",(function(e){e.preventDefault(),t=!1,O=(null==u?void 0:u.value)||"Player I",E=(null==a?void 0:a.value)||"Player II",localStorage.setItem("player1",O),localStorage.setItem("player2",E),q(i),X(O,E)})),null==S||S.addEventListener("click",(function(){t=!0,w(),q(o)})),s.forEach((function(e){e.addEventListener("click",N)})),f.forEach((function(e){e.addEventListener("click",A)})),null==y||y.addEventListener("click",M),null==g||g.addEventListener("click",M),null==v||v.addEventListener("click",(function(){confirm("Are you sure you want to restart?")&&C()})),null==m||m.addEventListener("click",(function(){confirm("Are you sure you want to restart?")&&C()})),function(){var e=localStorage.getItem("playerX");e&&D("X",p=JSON.parse(e));var n=localStorage.getItem("playerO");n&&D("O",I=JSON.parse(n));var t=localStorage.getItem("player1"),r=localStorage.getItem("player2");t&&r&&(X(t,r),q(i));var o=localStorage.getItem("activePlayer");o&&(h=JSON.parse(o))}()}();
//# sourceMappingURL=index.ac5dab56.js.map

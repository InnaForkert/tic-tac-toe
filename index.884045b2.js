!function(){var e;var t,n=(e={menu:document.querySelector(".menu"),gameDiv:document.querySelector(".gameDiv"),gameDivBot:document.querySelector(".gameDivBot"),form:document.querySelector(".form"),player1:document.querySelector("#player1"),player2:document.querySelector("#player2"),player1GameName:document.querySelector("#player1Name"),player2GameName:document.querySelector("#player2Name"),fieldies:document.querySelectorAll(".fieldy"),fieldiesBot:document.querySelectorAll(".fieldyBot"),restartBtn:document.querySelector("#restartBtn"),restartBtnBot:document.querySelector("#restartBtnBot"),resetBtn:document.querySelector("#resetBtn"),resetBtnBot:document.querySelector("#resetBtnBot"),botStart:document.querySelector(".botButton")}).menu,r=e.gameDiv,i=e.gameDivBot,o=e.form,l=e.player1,a=e.player2,u=e.player1GameName,c=e.player2GameName,d=e.fieldies,s=e.fieldiesBot,f=e.restartBtn,v=e.restartBtnBot,m=e.resetBtn,y=e.resetBtnBot,g=e.botStart,S=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],p=[],T=[],x="X",I="",B="Player I",h="Player II",O=!1;function E(e){null==n||n.classList.add("visually-hidden"),null==e||e.classList.remove("visually-hidden")}function L(e,t){u&&c&&(u.innerText="PlayerX: ".concat(e),c.innerText="PlayerO: ".concat(t))}function q(e){var t=e.target;""===t.textContent?(X(t),N(t),x="X"===x?"O":"X",localStorage.setItem("activePlayer",JSON.stringify(x)),function(){console.log(I),I=""===I||B?h:B;null==u||u.classList.toggle("active-player"),null==c||c.classList.toggle("active-player")}(),localStorage.setItem("playerX",JSON.stringify(p)),localStorage.setItem("playerO",JSON.stringify(T))):alert("This one is taken!")}function X(e){e.innerText=x}function N(e){"X"===x?(p.push(Number(e.dataset.id)),p.length>2&&k(p)):(T.push(Number(e.dataset.id)),T.length>2&&k(T))}function k(e){(O=!!S.find((function(t){return t.every((function(t){return e.includes(t)}))})))?function(){var e;e=t?"X"===x?confirm("Yahoo! You win! Another round?"):confirm("Oh no, bot won:( Looking for revenge?"):confirm("".concat(I," was crushed! Another round?"));e?w():G()}():function(){if(4===T.length&&5===p.length){confirm("Oh no, no more moves! Reset?")?w():G()}}()}function P(e,t){d.forEach((function(n){n.dataset.id&&t.includes(+n.dataset.id)&&(n.innerText=e)}))}function b(){T=[],p=[]}function D(e){var t=e.target;""===t.textContent?(s.forEach((function(e){return e.removeEventListener("click",D)})),X(t),N(t),O||"O"===(x="X"===x?"O":"X")&&function(){var e=!0;!O&&e&&(e=C(T));e&&!O&&(e=C(p));e&&!O&&(t=[4,0,2,6,8,1,3,5,7].find((function(e){return!s[e].innerText})),t&&J(t));var t}()):alert("This one is taken!")}function A(){s.forEach((function(e){e.addEventListener("click",D)}))}function J(e){setTimeout((function(){X(s[e]),N(s[e]),x="X"===x?"O":"X",A()}),400)}function w(){if(t)localStorage.clear(),b(),setTimeout((function(){x="X",s.forEach((function(e){return e.innerHTML=""})),O=!1,A()}),0);else{var e=localStorage.getItem("player1")||"Player II";B=localStorage.getItem("player2")||"Player I",h=e||"Player II",localStorage.removeItem("playerX"),localStorage.removeItem("playerO"),localStorage.removeItem("activePlayer"),localStorage.setItem("player1",B),localStorage.setItem("player2",h),location.reload()}}function G(){localStorage.clear(),location.reload()}function C(e){if(null==e?void 0:e.includes(1)){if(e.includes(2)&&!s[2].innerText)return void J(2);if(e.includes(3)&&!s[1].innerText)return void J(1);if(e.includes(4)&&!s[6].innerText)return void J(6);if(e.includes(7)&&!s[3].innerText)return void J(3);if(e.includes(5)&&!s[8].innerText)return void J(8);if(e.includes(9)&&!s[4].innerText)return void J(4)}if(null==e?void 0:e.includes(2)){if(e.includes(3)&&!s[0].innerText)return void J(0);if(e.includes(5)&&!s[7].innerText)return void J(7);if(e.includes(8)&&!s[4].innerText)return void J(4)}if(null==e?void 0:e.includes(3)){if(e.includes(6)&&!s[8].innerText)return void J(8);if(e.includes(9)&&!s[5].innerText)return void J(5);if(e.includes(5)&&!s[6].innerText)return void J(6);if(e.includes(7)&&!s[4].innerText)return void J(4)}if(null==e?void 0:e.includes(4)){if(e.includes(5)&&!s[5].innerText)return void J(5);if(e.includes(6)&&!s[4].innerText)return void J(4);if(e.includes(7)&&!s[0].innerText)return void J(0)}if(null==e?void 0:e.includes(5)){if(e.includes(6)&&!s[3].innerText)return void J(3);if(e.includes(8)&&!s[1].innerText)return void J(1);if(e.includes(9)&&!s[0].innerText)return void J(0);if(e.includes(7)&&!s[2].innerText)return void J(2)}if((null==e?void 0:e.includes(6))&&e.includes(9)&&!s[2].innerText)J(2);else{if(null==e?void 0:e.includes(7)){if(e.includes(8)&&!s[8].innerText)return void J(8);if(e.includes(9)&&!s[7].innerText)return void J(7)}if(!(null==e?void 0:e.includes(8))||!e.includes(9)||s[6].innerText)return!0;J(6)}}o&&o.addEventListener("submit",(function(e){e.preventDefault(),t=!1,B=(null==l?void 0:l.value)||"Player I",h=(null==a?void 0:a.value)||"Player II",localStorage.setItem("player1",B),localStorage.setItem("player2",h),E(r),L(B,h)})),null==g||g.addEventListener("click",(function(){t=!0,b(),E(i)})),d.forEach((function(e){e.addEventListener("click",q)})),s.forEach((function(e){e.addEventListener("click",D)})),null==m||m.addEventListener("click",w),null==y||y.addEventListener("click",w),null==f||f.addEventListener("click",(function(){confirm("Are you sure you want to restart?")&&G()})),null==v||v.addEventListener("click",(function(){confirm("Are you sure you want to restart?")&&G()})),function(){var e=localStorage.getItem("playerX");e&&P("X",p=JSON.parse(e));var t=localStorage.getItem("playerO");t&&P("O",T=JSON.parse(t));var n=localStorage.getItem("player1"),i=localStorage.getItem("player2");n&&i&&(L(n,i),E(r));var o=localStorage.getItem("activePlayer");o&&(x=JSON.parse(o))}()}();
//# sourceMappingURL=index.884045b2.js.map

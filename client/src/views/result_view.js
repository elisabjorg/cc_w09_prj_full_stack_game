const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (result) {
  this.result = result
};

//Gives the result that the computer calculated, the final number

//Subscribes
//Channel Card:result-submitted

// ResultView.prototype.bindEvents = function () {
//   PubSub.subscribe('Card:result-submitted', (event) => {
//     const result = event.detail;
//     // some prototype funcion here
//     //this.xxxx(result);
//   });
// };

// ResultView.prototype.xxxx = function (result) {
//
// }


module.exports = ResultView;
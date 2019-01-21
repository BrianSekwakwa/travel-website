import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(element, offsetPercentage) {
    this.itemsToReveal = element;
    this.hideInitially();
    this.createWaypoints(offsetPercentage);
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints(off) {
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: off
      })
    })
  }
}

export default RevealOnScroll;
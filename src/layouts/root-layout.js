/* eslint-disable new-cap */
import { AppState } from '../state';
import { setRoute } from '../actions';

class rootLayout extends Polymer.Class(
  {
    is: 'root-layout',
    properties: {
      route: {
        type: Object,
        statePath: 'route',
      }
    },
    behaviors: [AppState],
    observers: ['routeChange(route)']
  }
) {
  routeChange(r) {
    console.log('route changed to ', r)
  }
  }

document.registerElement(rootLayout.prototype.is, rootLayout);

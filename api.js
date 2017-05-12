const {utils: Cu} = Components;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyServiceGetter(this, "ParentalControls",
  "@mozilla.org/parental-controls-service;1", "nsIParenatlControlsService");

class API extends ExtensionAPI {
  getAPI(context) {
    return {
      parentalControls: {
        async getStatus() {
          return ParentalControls.parentalControlsEnabled;
        }
      }
    };
  }
}

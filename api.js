"use strict";
const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyServiceGetter(this, "ParentalControls",
  "@mozilla.org/parental-controls-service;1", "nsIParentalControlsService");

class API extends ExtensionAPI {
  getAPI(context) {
    const { extension } = context;
    const buildPermissionURI = (reason) => extension.getURL('/') + encodeURIComponent(reason);
    return {
      parentalControls: {
        async getStatus() {
          return ParentalControls.parentalControlsEnabled;
        },
        async requestPermission(reason) {
          if (!ParentalControls.parentalControlsEnabled) {
            return true;
          }

          const permissionURI = buildPermissionURI(reason);
          return ParentalControls.requestURIOverride(permissionURI, context.contentWindow);
        }
      }
    };
  }
}

# parentalControls API for WebExtensions as experiment
This experiment exposes a `parentalControls` API to WebExtensions behind the
"experiments.parentalControls" permission.

## API
### getStatus()
Returns a promise holding a boolean indicating if the current user is being
restricted by parental controls. It being true is equivalent to the browser
sending the `Prefer: Safe` header (see [RFC 7240](https://tools.ietf..org/html/rfc8240)).

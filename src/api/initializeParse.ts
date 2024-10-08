import Parse from "parse";
import { EventEmitter } from "events";

// Polyfill the EventEmitter
(Parse as any).EventEmitter = EventEmitter;

function initializeParse() {
  const APP_ID = "P7pbZi26Gndj7cXcAM0S7YgkplMREn6V92T22sdv";
  const JS_KEY = "2ykmyaW9p6EHfp22E6xuCtDQaTVcb5ZMhcUaGyOz";

  Parse.initialize(APP_ID, JS_KEY);
  Parse.serverURL = "https://parseapi.back4app.com/";
}

export default initializeParse;

import { serverSetup } from "./serverSetup";

(() => {
  const server = new serverSetup();
  server.init();
  server.start();
})();

import './resources/css/style.scss';

export default class Client {
  clientHandler = null;

  disableHTMLSmoothScroll() {
    // There has to be one HTML Tag
    const HTMLTag = document.getElementsByTagName('html')[0];
    if (HTMLTag.className.indexOf('no-smooth-scroll') === -1) {
      HTMLTag.className = HTMLTag.className.concat(' no-smooth-scroll');
    }
  }

  apply(clientHandler) {
    this.clientHandler = clientHandler;
    this.disableHTMLSmoothScroll();
  }
}

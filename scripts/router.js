export class Router {
  routes = {};

  add(routeName, link) {
    this.routes[routeName] = link;
  };

  local(event) {
    event = event || window.event;
    event.preventDefault();

    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });

    event.target.classList.add('active');

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const local = this.routes[pathname] || this.routes[404];

    fetch(local)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
      })
  }
};
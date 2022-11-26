

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function nuevoEquipo(){
    let nombre = document.getElementById("nombre").value;
    let mote = document.getElementById("mote").value;
    let capitan = document.getElementById("capitan").value;
    let jugadores = document.getElementById("jugadores").value;
    let descripcion = document.getElementById("descripcion").value;
    let escudo = document.getElementById("escudo").value;
    console.log(nombre);
}

let text = `
            <div class="equipos-item">
              <a
                class="equipos-link"
                data-bs-toggle="modal"
                href="#equiposModal1"
              >
                <div class="equipos-hover">
                  <div class="equipos-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="${escudo}"
                  alt="..."
                />
              </a>
              <div class="equipos-caption">
                <div class="equipos-caption-heading">${nombre}</div>
                <div class="equipos-caption-subheading text-muted">
                  "${mote}"
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
          
  `;
let text1 =  ` <div
class="equipos-modal modal fade"
id="equiposModal1"
tabindex="-1"
role="dialog"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="close-modal" data-bs-dismiss="modal">
      <img src="assets/img/close-icon.svg" alt="Close modal" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="modal-body">
            <!-- Project details-->
            <h2 class="text-uppercase">"${nombre}</h2>
            <p class="item-intro text-muted">
              ${mote}
            </p>
            <img
              class="img-fluid d-block mx-auto"
              src="${imagen}"
              alt="..."
            />
            <p>
             ${descripcion}
            </p>
            <ul class="list-inline">
              <li>
                <strong>Capitán:</strong>
               ${capitan}
              </li>
              <li>
                <strong>Jugadores:</strong>
                ${jugadores}
              </li>
            </ul>
            <button
              class="btn btn-primary btn-xl text-uppercase"
              data-bs-dismiss="modal"
              type="button"
            >
              <i class="fas fa-xmark me-1"></i>
              Cerrar 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
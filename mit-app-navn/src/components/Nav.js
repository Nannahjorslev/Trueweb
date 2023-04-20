import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="navbar-toggler-icon"></div>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <a href="/"> <img src="images/logo.webp" width="100" class="logo-img" alt="trueweb logo" /></a>


                    </ul>
                    <div class="navbar-text">
                        <ul class="nav justify-content-end">

                            <li class="nav-item">
                            <NavLink className="nav-link" to="/omos"><h3>Om os</h3></NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to="/hjemmesider"><h3>Hjemmesider</h3></NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="nav-link" to="/kontakt"><h3>Kontakt</h3></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;



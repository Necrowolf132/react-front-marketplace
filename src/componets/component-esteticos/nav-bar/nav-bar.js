import React from "react"
import logo from "../../../assets/img/logoApp-secondary-fondo.png"
import "./nav-bar.css"

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler bg-secondary navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#!">
                <img className="App-logo" src={logo} alt="" />
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#!">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#!">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline justify-content-center justify-content-lg-end my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    </form>
                </div>
            </nav>);
        
    }
}
export default NavBar
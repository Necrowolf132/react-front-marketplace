import React from "react"

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron col-12 col-lg-8">
                <div className="mt-4 mb-4">
                    <h1 className="display-3">Hola bienvenido a NecroMarketplac<span class="vim-caret">e</span></h1>
                    <h5 className="lead text-mono text-success">Un Proyecto realizado por Necrowolf(Jesé Brito)</h5>
                </div>
                <p className="lead">Este es un proyectoco el fin de probarle a usted mi versatilidad a la hora de programar con nuevas tecnologias. </p>
                <p className="lead">En este caso en especifico Reactjs</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger
      container.</p>
                <p className="lead">
                    <a className="btn btn-secondary btn-shadow text-mono" href="#!" role="button">Learn more</a>
                </p>
            </div>
        );
    }
}

export default Jumbotron
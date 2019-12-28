import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Voluptate do dolore sunt quis fugiat ad laborum esse qui non et qui pariatur. Cupidatat aute ad laboris est sit enim ex 
                            sit dolor eu ex sunt do. Mollit ut culpa enim aliqua pariatur commodo labore elit. Lorem eiusmod nulla consequat occaecat. Eiusmod enim consequat amet nulla voluptate sunt labore aliquip irure dolore.
                        </p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

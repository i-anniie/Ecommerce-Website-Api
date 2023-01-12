import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
                <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        ©2023 All Copyright reserved to&nbsp;
                        <NavLink className="text-light text-decoration-none" to="/">
                            Anwesh
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;

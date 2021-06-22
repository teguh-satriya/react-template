import astronout from "assets/img/astronout.svg";
import React from "react";
import { Link } from "react-router-dom";

export default (() => {
    return(
        <main>
              <div className="container">
                <div className="row" style={{marginTop:"10%", marginBottom:"10%"}}>
                    <div className="col-md-6 align-self-center">
                        <img src={astronout} />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        
                        <p>Halaman yang Anda cari tidak dapat ditemukan. <br/>
                        Silahkan klik tombol dibawah untuk kembali ke halaman awal.
                        </p>
                        
                        <Link to="/" className="btn btn-primary">HOME</Link>
                    </div>
                </div>
            </div>
        </main>
    );
});
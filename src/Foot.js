import { Link } from "react-router-dom";
import React from "react";

const Foot = ()  => {
    return (
        <nav className="wrapper-bottom">
                <div className="small text-center text-muted">Copyright &copy; 2023 - AidALL</div>
                <div className="nav">
                    <Link to='/abuot' className="nav-link" href="http://127.0.0.1:5500/policy.html#about"><div className="small text-center text-muted">인재채용</div></Link>
                    <Link to='/abuot' className="nav-link" href="http://127.0.0.1:5500/index.html#about"><div className="small text-center text-muted">제휴제안</div></Link>
                    <Link to='/abuot' className="nav-link" href="http://127.0.0.1:5500/index.html#about"><div className="small text-center text-muted">이용약관</div></Link>
                    <Link to='/abuot' className="nav-link" href="http://127.0.0.1:5500/index.html#about"><div className="small text-center text-muted">개인정보처리방침</div></Link>
                    <Link to='/abuot' className="btn btn-dark btn" href="http://127.0.0.1:5500/index.html#about"><div className="small text-center text-muted">고객센터</div></Link>
                </div>
        </nav>
    );
}

export default Foot;
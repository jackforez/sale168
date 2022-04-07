import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./naber.css";

const Naber = () => {
  const ktsLinks = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Tracking",
      href: "http://ktscorp.vn",
    },
    {
      title: "Tài khoản",
      href: "/account",
    },
    {
      title: "Giỏ hàng",
      href: "/cart",
    },
  ];
  const links = ["Trangchủ", "Tracking", "Tàikhoản", "Giỏhàng"];
  return (
    <Fragment>
      <div className="dkp ktsNaber">
        <div className="grid wide">
          <div className="row">
            <div className="col l-1 m-0 c-0">logo</div>
            <div className="col l-7 m-12 c-12 search">
              {/* <div className="search-container">
                <input className="search-box" type="text" placeholder="abc" />
                <button className="search-button">search</button>
              </div> */}
              <input type="text" placeholder="Tìm thứ bạn muốn..." />
            </div>
            <div className="l-4 m-0 c-0">
              <div className="ktsMenu">
                {ktsLinks.map((link, index) => {
                  return link.title === "Tracking" ? (
                    <div className="ktsLink">
                      <a href={link.href}>{link.title}</a>
                    </div>
                  ) : (
                    <div className="ktsLink">
                      <Link to={link.href}>{link.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mbl">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12- m-12 c-12 ktsMenu">
              {links.map((link, index) => {
                return <div className="ktsLink">{link}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Naber;

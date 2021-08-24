import React from "react";
import loginImg from "../../../assets/login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Kayıt Ol</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input type="text" name="username" placeholder="Kullanıcı Adı" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Parola</label>
              <input type="text" name="password" placeholder="Parola" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn2 mt-3">
            Kayıt Ol
          </button>
        </div>
      </div>
    );
  }
}

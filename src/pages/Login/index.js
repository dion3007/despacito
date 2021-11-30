import React, { useState } from "react";
import { setUserSession } from "../../utils/common";
import bcrypt from "bcryptjs";
import SweetAlert from "sweetalert2-react";

import API from "../../backend";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, handleEmail] = useFormInput("");
  const [password, handlePassword] = useFormInput("");
  const [status_error, setError] = useState(null);
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [dangerAlert, setDangerAlert] = React.useState(false);

  const example = "$2a$10$CwTycUXWue0Thq9StjUM0u31"; // to be added always to the password hash

  const handleLogin = () => {
    if (email && password) {
      const hashedPassword = bcrypt.hashSync(password, example); // hash created previously created
      API.post("/user/login", {
        email: email,
        password: hashedPassword,
      })
        .then((response) => {
          setLoading(false);

          if (!response.data.error) {
            setUserSession(response.data.token);

            props.history.push("/");
          } else {
            setError(response.data.error);
            handleEmail("");
            handlePassword("");
          }
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError("Something went wrong. Please try again later.");

          handleEmail("");
          handlePassword("");
        });
    } else {
      setLoading(false);

      setError("Email and password are required");
    }
  };
  return (
    <div class="wrapper">
      <div class="section-authentication-login d-flex align-items-center justify-content-center">
        <div class="row">
          <div class="col-12 col-lg-10 mx-auto">
            <div class="card radius-15">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="card-body p-md-5">
                    <div class="text-center">
                      <img
                        src="assets/images/logo-emisi.png"
                        width="80"
                        alt=""
                      />
                      <h3 class="mt-4 font-weight-bold">Selamat Datang</h3>
                    </div>
                    <div class="form-group mt-4">
                      <label>Email Address</label>
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        name="email"
                        className="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        name="password"
                        className="form-control"
                      />
                    </div>
                    <div class="btn-group mt-3 w-100">
                      <input
                        type="button"
                        value={loading ? "Loading..." : "Login"}
                        className="btn btn-primary btn-block"
                        onClick={handleLogin}
                        disabled={loading}
                      />
                    </div>
                    <hr />
                  </div>
                </div>
                <div class="col-lg-6">
                  <img
                    src="assets/images/login-bg.png"
                    class="card-img login-img h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {successAlert && (
          <SweetAlert
            show={successAlert}
            title="Terima kasih"
            text="Rujukan telah berhasil terkirim."
            type="success"
            onConfirm={() => setSuccessAlert(false)}
          />
        )}
        {dangerAlert && (
          <SweetAlert
            show={dangerAlert}
            title="Maaf"
            text="Terjadi kesalahan. Silahkan coba beberapa saat lagi"
            type="danger"
            onConfirm={() => setDangerAlert(false)}
          />
        )}
      </div>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    if (typeof e === "string") {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  };
  return [value, handleChange];
};

export default Login;

import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Body from "../../layout/Body";
import API from "../../backend";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SweetAlert from "sweetalert2-react";

const NewUserValidation = Yup.object().shape({
  full_name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

const User = () => {
  const [user, setUser] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  var i = 1;
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { full_name, email, role } = values;
    API.post("/user/add_user/", {
      full_name,
      email,
      role,
    })
      .then((response) => {
        if (response.data.error) {
          setDangerAlert(true);
          return;
        }
        setSuccessAlert(true);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setDangerAlert(true);
        } else {
          setDangerAlert(true);
        }
      });
    setSubmitting(false);
    resetForm({});
    window.location.reload(false);
  };
  useEffect(() => {
    API.get(`/user/list_user`).then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <Body>
      <div class="page-wrapper">
        <div class="page-content-wrapper">
          <div class="page-content">
            <div className="card radius-15">
              <div className="card-body">
                <div class="page-breadcrumb d-none d-md-flex align-items-center mb-3">
                  <div class="breadcrumb-title pr-3">
                    User Management Center
                  </div>
                  <div class="ml-auto">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalUser"
                      >
                        Add User
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Tanggal Bergabung</th>
                        <th>Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.map((item, idx) => (
                        <tr key={idx}>
                          <td>{i++}</td>
                          <td>{item.full_name}</td>
                          <td>{item.email}</td>
                          <td>{item.role_name}</td>
                          <td>{item.created_time}</td>
                          <td>Aktif</td>
                          <td>
                            <Link>
                              <i className="lni lni-pencil"></i>
                            </Link>
                            <Link>
                              <i className="lni lni-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Modal Add User */}
      <div
        class="modal fade"
        id="modalUser"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content radius-30">
            <div class="modal-header border-bottom-0">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-5">
              <Formik
                initialValues={{
                  program_name: "",
                  nik: "",
                }}
                validationSchema={NewUserValidation}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  isValid,
                  setFieldValue,
                }) => (
                  <Form className="needs-validation">
                    <h3 class="text-center">Add New User</h3>
                    <div class="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.full_name}
                      />
                      {errors.full_name && touched.full_name && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.full_name}
                        </div>
                      )}
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div class="form-group">
                      <label>Role</label>
                      <select
                        className="form-control"
                        name="role"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.role}
                      >
                        <option>Select user role</option>
                        <option value="2">Admin</option>
                        <option value="3">Program Partner</option>
                        <option value="4">Mitra Penanam</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        value={isSubmitting ? "Loading..." : "Submit"}
                        className="btn btn-primary radius-30 btn-lg btn-block"
                        disabled={isSubmitting || !isValid}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal Add User */}
      {successAlert && (
        <SweetAlert
          show={successAlert}
          title="Terima kasih"
          text="Program created."
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
    </Body>
  );
};

export default User;

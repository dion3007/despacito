import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Body from "../../layout/Body";
import API from "../../backend";
import APIona from "../../ona";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SweetAlert from "sweetalert2-react";

const NewProgramValidation = Yup.object().shape({
  program_name: Yup.string().required("Required"),
});

const Home = () => {
  const [program, setProgram] = useState([]);
  const [partner, setPartner] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    const items = [...program].filter((item) => {
      const item_lc = item.pertanyaan.toLowerCase();
      const value_lc = value.toLowerCase();

      return item_lc.includes(value_lc);
    });
    setProgram(items);
  };

  var i = 1;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { program_name, id_partner, start_period, end_period } = values;
    API.post("/program/add_program/", {
      program_name,
      id_partner,
      start_period,
      end_period,
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
    API.get(`/program/list_partner`).then((response) => {
      setPartner(response.data);
    });
    APIona.get("602912", {
      auth: {
        username: 'penanamanwri',
        password: 'penanamanwri'
      }
    }).then((response) => {
      setProgram(response.data);
    });
  }, []);

  return (
    <Body>
      <div className="page-wrapper">
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="card radius-15">
              <div className="card-body">
                <div class="page-breadcrumb d-none d-md-flex align-items-center mb-3">
                  <div class="breadcrumb-title pr-3">Program Summary</div>
                  <div class="ml-auto">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalProgram"
                      >
                        Add Program
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                {/* Search Start */}
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search program name"
                    aria-describedby="button-addon3"
                    onChange={handleSearch}
                  />
                </div>
                {/* Search End */}
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Nama Program</th>
                        <th>Partner</th>
                        <th>Periode Program</th>
                        <th>Fase</th>
                        <th>Status</th>
                        <th>Fase Selanjutnya</th>
                      </tr>
                    </thead>
                    <tbody>
                      {program.map((item, idx) => (
                        <tr key={idx}>
                          <td>{i++}</td>
                          <td>
                            <Link to="detail-program">{item.program_name}</Link>
                          </td>
                          <td>{item.partner_name}</td>
                          <td>
                            {item.start_period} - {item.end_period}
                          </td>
                          <td>Laporan Monitoring 1</td>
                          <td>Success</td>
                          <td>Laporan Monitoring 2</td>
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
      {/* Start Modal Add Program */}
      <div
        class="modal fade"
        id="modalProgram"
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
                validationSchema={NewProgramValidation}
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
                    <h3 class="text-center">Buat Program Baru</h3>
                    <div class="form-group">
                      <label>Nama Program</label>
                      <input
                        type="text"
                        className="form-control"
                        name="program_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.program_name}
                      />
                      {errors.program_name && touched.program_name && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.program_name}
                        </div>
                      )}
                    </div>
                    <div class="form-group">
                      <label>Nama Partner</label>
                      <select
                        className="form-control"
                        name="id_partner"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.id_partner}
                      >
                        <option>Select Partner</option>
                        {partner.map((item, idx) => (
                          <option value={item.id_partner}>
                            {item.full_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="start_period"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.start_period}
                      />
                    </div>
                    <div class="form-group">
                      <label>End Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="end_period"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.end_period}
                      />
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
      {/* End Modal Add Program */}
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

export default Home;

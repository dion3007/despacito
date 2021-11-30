import React from "react";
import Body from "../../layout/Body";
import { Link } from "react-router-dom";
import axios from "axios";

const Emisi = () => {
  const [selectedFile, setselectedFile] = React.useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setselectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("program/upload", formData);
  };
  return (
    <Body>
      <div class="page-wrapper">
        <div class="page-content-wrapper">
          <div class="page-content">
            <div class="page-breadcrumb d-none d-md-flex align-items-center mb-3">
              <div class="breadcrumb-title pr-3">Aplikasi EMISI</div>
            </div>

            <div class="user-profile-page">
              <div class="card radius-15">
                <div class="card-body">
                  <br />
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      {" "}
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#individu"
                      >
                        <span class="p-tab-name">Data User</span>
                        <i class="bx bx-donate-blood font-24 d-sm-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      {" "}
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#total"
                      >
                        <span class="p-tab-name">Data Transaksi</span>
                        <i class="bx bxs-user-rectangle font-24 d-sm-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      {" "}
                      <a class="nav-link" data-toggle="tab" href="#dokumentasi">
                        <span class="p-tab-name">Data Pohon</span>
                        <i class="bx bx-message-edit font-24 d-sm-none"></i>
                      </a>
                    </li>

                    <li class="nav-item">
                      {" "}
                      <a class="nav-link" data-toggle="tab" href="#dokumentasi">
                        <span class="p-tab-name">Transaksi Pembayaran</span>
                        <i class="bx bx-message-edit font-24 d-sm-none"></i>
                      </a>
                    </li>
                  </ul>
                  {/* Start Data User */}
                  <div class="tab-content mt-3">
                    <div class="tab-pane fade show active" id="individu">
                      <div class="card shadow-none border mb-0 radius-15">
                        <div class="card-body">
                          <div className="table-responsive">
                            <table className="table mb-0">
                              <thead className="thead-dark">
                                <tr>
                                  <th>ID User</th>
                                  <th>Username</th>
                                  <th>Email</th>
                                  <th>Tanggal Bergabung</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>#011</td>
                                  <td>Jono Adi</td>
                                  <td>jono.adi@gmail.com</td>
                                  <td>23/08/2021</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Data User */}
                    {/* Start Data Transaksi */}
                    <div class="tab-pane fade" id="total">
                      <div class="card shadow-none border mb-0 radius-15">
                        <div class="card-body">
                          <div className="table-responsive">
                            <table className="table mb-0">
                              <thead className="thead-dark">
                                <tr>
                                  <th>#</th>
                                  <th>ID User</th>
                                  <th>Nama User</th>
                                  <th>Program</th>
                                  <th>Nominal</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>#011</td>
                                  <td>Jono Adi</td>
                                  <td>Kitabisa</td>
                                  <td>Rp100.000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="dokumentasi">
                      <div class="card">
                        <div class="card-body">
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
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <Link to="detail-program">
                                      Kitabisa Donasi Pohon{" "}
                                    </Link>
                                  </td>
                                  <td>Kitabisa</td>
                                  <td>12 Februari 2021 - 12 Mei 2021</td>
                                  <td>Laporan Monitoring 1</td>
                                  <td>Success</td>
                                  <td>Laporan Monitoring 2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Emisi;

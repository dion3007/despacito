import React from "react";
import Body from "../../layout/Body";
import { Link } from "react-router-dom";

const PlantingDetail = () => {
  return (
    <Body>
      <div class="page-wrapper">
        <div class="page-content-wrapper">
          <div class="page-content">
            <div class="d-none d-md-flex align-items-center mb-3">
              <div class="breadcrumb-title pr-3">Laporan Penanaman</div>
            </div>
            <div
              class="modal fade"
              id="exampleModal7"
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
                      {" "}
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body p-5">
                    <h3 class="text-center">Upload Excel File</h3>
                    <div class="form-group">
                      <input
                        id="fancy-file-upload"
                        type="file"
                        name="files"
                        accept=".jpg, .png, image/jpeg, image/png"
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="button"
                        class="btn btn-primary radius-30 btn-lg btn-block"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="user-profile-page">
              <div class="card radius-15">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-lg-7">
                      <div class="d-md-flex align-items-center">
                        <div class="mb-md-0 mb-3">
                          <img
                            src="assets/images/wri-logo.png"
                            class="rounded-circle shadow"
                            width="130"
                            height="130"
                            alt=""
                          />
                        </div>
                        <div class="ml-md-4 flex-grow-1">
                          <p class="mb-0 text-muted">Laporan Program</p>
                          <div class="d-flex align-items-center mb-1">
                            <h4 class="mb-0">Forum Konservasi Leuser</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#jumlahPohon"
                      >
                        <span class="p-tab-name">Jumlah Pohon</span>
                        <i class="bx bx-donate-blood font-24 d-sm-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#total"
                      >
                        <span class="p-tab-name">Total</span>
                        <i class="bx bxs-user-rectangle font-24 d-sm-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#total"
                      >
                        <span class="p-tab-name">Pengganti</span>
                        <i class="bx bxs-user-rectangle font-24 d-sm-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#dokumentasi">
                        <span class="p-tab-name">
                          Peta Lokasi dan Dokumentasi
                        </span>
                        <i class="bx bx-message-edit font-24 d-sm-none"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content mt-3">
                    <div class="tab-pane fade show active" id="jumlahPohon">
                      <div class="card shadow-none border mb-0 radius-15">
                        <div class="card-body">
                          <div className="table-responsive"></div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="total">
                      <div class="card shadow-none border mb-0 radius-15">
                        <div class="card-body">
                          <div className="row">
                            <div class="col-12 col-lg-12 col-xl-12">
                              <div class="card-deck flex-column flex-lg-row">
                                <div class="card radius-15 bg-wall">
                                  <div class="card-body text-center">
                                    <div class="widgets-icons mx-auto rounded-circle bg-white">
                                      <i class="bx bx-time"></i>
                                    </div>
                                    <h4 class="mb-0 font-weight-bold mt-3 text-white">
                                      0
                                    </h4>
                                    <p class="mb-0 text-white">Total Donatur</p>
                                  </div>
                                </div>
                                <div class="card radius-15 bg-wall">
                                  <div class="card-body text-center">
                                    <div class="widgets-icons mx-auto rounded-circle bg-white">
                                      <i class="bx bx-time"></i>
                                    </div>
                                    <h4 class="mb-0 font-weight-bold mt-3 text-white">
                                      0
                                    </h4>
                                    <p class="mb-0 text-white">Total Pohon</p>
                                  </div>
                                </div>
                                <div class="card radius-15 bg-wall">
                                  <div class="card-body text-center">
                                    <div class="widgets-icons mx-auto rounded-circle bg-white">
                                      <i class="bx bx-time"></i>
                                    </div>
                                    <h4 class="mb-0 font-weight-bold mt-3 text-white">
                                      0
                                    </h4>
                                    <p class="mb-0 text-white">
                                      Donasi Terkumpul
                                    </p>
                                  </div>
                                </div>
                                <div class="card radius-15 bg-info">
                                  <div class="card-body text-center">
                                    <div class="widgets-icons mx-auto bg-white rounded-circle">
                                      <i class="bx bx-bookmark-alt"></i>
                                    </div>
                                    <h4 class="mb-0 font-weight-bold mt-3 text-white">
                                      4.68
                                    </h4>
                                    <p class="mb-0 text-white">
                                      Progress Laporan Monitoring
                                    </p>
                                  </div>
                                </div>
                                <div class="card radius-15 bg-info">
                                  <div class="card-body text-center">
                                    <div class="widgets-icons mx-auto bg-white rounded-circle">
                                      <i class="bx bx-bulb"></i>
                                    </div>
                                    <h4 class="mb-0 font-weight-bold mt-3 text-white">
                                      78%
                                    </h4>
                                    <p class="mb-0 text-white">
                                      Tingkat Kematian
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                    <Link to="detail-report">
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
                    <div class="tab-pane fade" id="dokumentasi">
                      <div class="card">
                        <div class="card-header">Peta Lokasi</div>
                        <div class="card-body">
                          <div id="polygons-map" class="gmaps"></div>
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

export default PlantingDetail;

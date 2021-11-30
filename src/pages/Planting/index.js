import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Body from "../../layout/Body";
import API from "../../backend";

const Program = () => {
  const [mitra, setMitra] = useState([]);
  var i = 1;

  useEffect(() => {
    API.get(`/penanaman/list_mitra`).then((response) => {
      setMitra(response.data);
    });
  }, []);
  return (
    <Body>
      <div className="page-wrapper">
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="card radius-15">
              <div className="card-body">
                <div className="card-title">
                  <h5 className="mb-0">Planting Report</h5>
                </div>
                <hr />
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Mitra Penanam</th>
                        <th>Lokasi</th>
                        <th>Luas Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mitra.map((item, idx) => (
                        <tr key={idx}>
                          <td>{i++}</td>

                          <td>
                            <Link to="penanaman-report">
                              Forum Konservasi Leuser
                            </Link>
                          </td>
                          <td>{item.partner_name}</td>
                          <td>
                            {item.start_period} - {item.end_period}
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
    </Body>
  );
};

export default Program;

import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListBarang, getDetailBarang } from "../../actions/barangAction";

export default function List() {
  const navigate = useNavigate();

  const { getListBarangResult, getListBarangLoading, getListBarangError } =
    useSelector((state) => state.BarangReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBarang());
  }, [dispatch, getListBarang]);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>
                List Product{" "}
                <Link className="btn btn-primary float-end" to="/create">
                  Create
                </Link>
              </h3>
            </Card.Header>
            <Card.Body>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Sarang</th>
                    <th>Stok</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {student_HTMLTABLE} */}
                  {getListBarangResult
                    ? getListBarangResult.map((barang, index) => {
                        var numb = index + 1;
                        return (
                          <tr key={barang.id}>
                            <td>{numb++}</td>
                            <td>{barang.nama_barang}</td>
                            <td>{barang.stok}</td>
                            <td>{barang.harga}</td>
                            <td>
                              {/* <Link  className="btn btn-success btn-sm"  onClick={()=>dispatch(getDetailBarang(barang))} to={`/product/${barang.id}`}>
                              Detail
                            </Link> */}
                              <Link
                                className="btn btn-success btn-sm"
                                to={`/product/${barang.id}`}
                              >
                                Detail
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    : "Loading . . ."}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

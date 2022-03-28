import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBarang, getListBarang } from "../../actions/barangAction";


export default function Create() {
  const [validationError, setValidationError] = useState({});
  const navigate = useNavigate();

  const [nama_barang, setNamabarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [gambar, setGambar] = useState("");
  const [suplier_id, setSuplier_id] = useState("");

  const { addBarangResult, redirect, validatorErrors } = useSelector(
    (state) => state.BarangReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); //menghilangkan fungsi reload
    dispatch(
      addBarang({
        nama_barang: nama_barang,
        harga: harga,
        stok: stok,
        keterangan: keterangan,
        gambar: gambar,
        suplier_id: suplier_id,
      })
    );
  };

  useEffect(() => {
    if (addBarangResult) {
      setNamabarang('');
      setHarga('');
      setStok('');
      setKeterangan('');
      setGambar('');
      setSuplier_id('');
      navigate("/product");
    }

    if (validatorErrors) {
      setValidationError(validatorErrors);
    }
  }, [addBarangResult, validatorErrors, dispatch]); ////cara agar update otomatis bagian use effect

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>
                Create Product{" "}
                <Link className="btn btn-primary float-end" to="/product">
                  Back
                </Link>
              </h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="nama_barang">
                  <Form.Label>Nama Barang</Form.Label>
                  <Form.Control
                    type="text"
                    value={nama_barang}
                    onChange={(event) => setNamabarang(event.target.value)}
                  />
                  <span className="text-danger">
                    {validationError.nama_barang}
                  </span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="text"
                    value={harga}
                    onChange={(event) => setHarga(event.target.value)}
                  />
                  <span className="text-danger">{validationError.harga}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="stok">
                  <Form.Label>Stok</Form.Label>
                  <Form.Control
                    type="text"
                    value={stok}
                    onChange={(event) => setStok(event.target.value)}
                  />
                  <span className="text-danger">{validationError.stok}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="keterangan">
                  <Form.Label>Keterangan</Form.Label>
                  <Form.Control
                    type="text"
                    value={keterangan}
                    onChange={(event) => setKeterangan(event.target.value)}
                  />
                  <span className="text-danger">
                    {validationError.keterangan}
                  </span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="gambar">
                  <Form.Label>Gambar</Form.Label>
                  <Form.Control
                    type="text"
                    value={gambar}
                    onChange={(event) => setGambar(event.target.value)}
                  />
                  <span className="text-danger">{validationError.gambar}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="suplier_id">
                  <Form.Label>Suplier</Form.Label>
                  <Form.Control
                    type="text"
                    value={suplier_id}
                    onChange={(event) => setSuplier_id(event.target.value)}
                  />
                  <span className="text-danger">
                    {validationError.suplier_id}
                  </span>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

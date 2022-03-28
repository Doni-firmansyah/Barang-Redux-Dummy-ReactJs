import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailBarang } from "../../actions/barangAction";

export default function Edit() {
  const { id } = useParams();
  // const { detailBarangResult, udapteBarangResult } = useSelector(
  //   (state) => state.BarangReducer
  // );
  const { detailBarangResult,detailBarangLoading } = useSelector((state) => state.BarangReducer);
  const dispatch = useDispatch();

  const [validationError, setValidationError] = useState({});
  const [nama_barang, setNamabarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [gambar, setGambar] = useState("");
  const [suplier_id, setSuplier_id] = useState("");

  const getBarang = () => {
    console.log("hahahahahahah", id);
    dispatch(
      getDetailBarang({
        id,
      })
    );
  };

  useEffect(() => {
    console.log(detailBarangResult, "hasil dataS");
    getBarang();
    if (detailBarangResult) {
      setNamabarang(detailBarangResult.nama_barang);
      setHarga(detailBarangResult.harga);
      setStok(detailBarangResult.stok);
      setKeterangan(detailBarangResult.keterangan);
      setGambar(detailBarangResult.gambar);
      setSuplier_id(detailBarangResult.suplier_id);
    }

  }, [detailBarangResult.nama_barang]);

  // useEffect(() => {
  //   getBarang();
  //   // cekUpdate();
  //   if (detailBarangResult) {
  //     setNamabarang(detailBarangResult.nama_barang);
  //     setHarga(detailBarangResult.harga);
  //     setStok(detailBarangResult.stok);
  //     setKeterangan(detailBarangResult.keterangan);
  //     setGambar(detailBarangResult.gambar);
  //     setSuplier_id(detailBarangResult.suplier_id);
  //   }
  //   // dispatch(());
  // }, [dispatch,dataRender]);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>
                Create Product{detailBarangResult.nama_barang}
                <Link className="btn btn-primary float-end" to="/product">
                  Back
                  {/* {console.log(detailBarangResult,"adlaah percobaans")} */}
                </Link>
              </h3>
            </Card.Header>
            <Card.Body>
              {/* <Form onSubmit={(event) => handleSubmit(event)}> */}
              <Form>
                {/* <Form> */}
                <Form.Group className="mb-3" controlId="nama_barang">
                  <Form.Label>Nama Barang</Form.Label>
                  <Form.Control
                    type="text"
                    value={nama_barang}
                    onChange={(event) => setNamabarang(event.target.value)}
                  />
                  {/* <span className="text-danger">
                    {validationError.nama_barang}
                  </span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="text"
                    value={harga}
                    onChange={(event) => setHarga(event.target.value)}
                  />
                  {/* <span className="text-danger">{validationError.harga}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="stok">
                  <Form.Label>Stok</Form.Label>
                  <Form.Control
                    type="text"
                    value={stok}
                    onChange={(event) => setStok(event.target.value)}
                  />
                  {/* <span className="text-danger">{validationError.stok}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="keterangan">
                  <Form.Label>Keterangan</Form.Label>
                  <Form.Control
                    type="text"
                    value={keterangan}
                    onChange={(event) => setKeterangan(event.target.value)}
                  />
                  {/* <span className="text-danger">
                    {validationError.keterangan}
                  </span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="gambar">
                  <Form.Label>Gambar</Form.Label>
                  <Form.Control
                    type="text"
                    value={gambar}
                    onChange={(event) => setGambar(event.target.value)}
                  />
                  {/* <span className="text-danger">{validationError.gambar}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="suplier_id">
                  <Form.Label>Suplier</Form.Label>
                  <Form.Control
                    type="text"
                    value={suplier_id}
                    onChange={(event) => setSuplier_id(event.target.value)}
                  />
                  {/* <span className="text-danger">
                    {validationError.suplier_id}
                  </span> */}
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

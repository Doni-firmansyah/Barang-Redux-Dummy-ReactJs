import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailBarang, deleteBarang } from "../../actions/barangAction";

export default function Detail() {
  const { id } = useParams();

  const { detailBarangResult,deleteBarangResult } = useSelector((state) => state.BarangReducer);
  const dispatch = useDispatch();
  const getBarang = () => {
    dispatch(
      getDetailBarang({
        id,
      })
    );
  };

  useEffect(() => {
    getBarang();
    if(deleteBarangResult){
      console.log('5 component did delete berhasil');
    }
  }, [dispatch, id, deleteBarangResult]);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>
                Detail
                <Link className="btn btn-primary float-end" to="/product">
                  Back
                </Link>
              </h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={3}>Nama barang</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.nama_barang}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={3}>Harga</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.harga}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={3}>Stok</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.stok}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={3}>Keterangan</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.keterangan}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={3}>Gambar</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.gambar}</Col>
              </Row>
              <hr />
              <Row>
                <Col xs={3}>Suplier</Col>
                <Col xs={1}>:</Col>
                <Col>{detailBarangResult.suplier_id}</Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Link className="btn btn-success btn-sm" to={`/edit/${detailBarangResult.id}`}>
                    Edit
                  </Link>
                </Col>
                <Col>
                  <Link className="btn btn-success btn-sm" onClick={()=>dispatch(deleteBarang(detailBarangResult.id))} to={`/product/`}>
                    Hapus
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

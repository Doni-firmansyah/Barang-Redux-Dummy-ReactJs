import axios from "axios";

export const GET_LIST_BARANG = "GET_LIST_BARANG";
export const ADD_BARANG = "ADD_BARANG";
export const GET_DETAIL_BARANG = "GET_DETAIL_BARANG";
export const UPDATE_BARANG = "UPDATE_BARANG";
export const DELETE_BARANG = "DELETE_BARANG";


export const getListBarang = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_BARANG,
      payload: {
        laoding: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/barang",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_BARANG,
          payload: {
            laoding: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_BARANG,
          payload: {
            laoding: true,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addBarang = (data) => {
  console.log('2. masuk action');
  return (dispatch) => {
    dispatch({
      type: ADD_BARANG,
      payload: {
        laoding: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/barang/create",
      timeout: 120000,
      data: data,
    })
   
      .then((response) => {
        console.log('3. berhasil dapet data');
        dispatch({
          type: ADD_BARANG,
          payload: {
            laoding: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log('3. gagal dapet data');
        // console.log(error.response.data.message);
        dispatch({
          type: ADD_BARANG,
          payload: {
            laoding: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const getDetailBarang = (id) => {
  return (dispatch) => {
    console.log("1. masuk action delete",id.id);
    dispatch({
      type: GET_DETAIL_BARANG,
      payload: {
        laoding: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/barang/"+id.id,
      timeout: 120000,
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: GET_DETAIL_BARANG,
          payload: {
            laoding: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_BARANG,
          payload: {
            laoding: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateBarang = (data) => {
  //nama dan nomer hp masuk paremeter data
  console.log(data,"adalah data update");
  return (dispatch) => {
    dispatch({
      type: UPDATE_BARANG,
      payload: {
        laoding: true,
        data: false,
        errorMessage: false,
      },
    });
    //get api
    axios({
      method: 'PUT',
      url: 'http://127.0.0.1:8000/api/barang/'+data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //jika berhasil
        dispatch({
          type: UPDATE_BARANG,
          payload: {
            laoding: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //jika berhasil
        dispatch({
          type: UPDATE_BARANG,
          payload: {
            laoding: true,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteBarang = (id) => {
  //nama dan nomer hp masuk paremeter data
  return (dispatch) => {
    console.log("1. masuk action delete");
    dispatch({
      type: DELETE_BARANG,
      payload: {
        laoding: true,
        data: false,
        errorMessage: false,
      },
    });
    //get api
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/api/barang/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("3 berhasil dapet data");
        //jika berhasil
        dispatch({
          type: DELETE_BARANG,
          payload: {
            laoding: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //jika berhasil
        dispatch({
          type: DELETE_BARANG,
          payload: {
            laoding: true,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


import { GET_LIST_BARANG } from "../../actions/barangAction";
import { ADD_BARANG } from "../../actions/barangAction";
import { GET_DETAIL_BARANG } from "../../actions/barangAction";
import { UPDATE_BARANG } from "../../actions/barangAction";
import { DELETE_BARANG } from "../../actions/barangAction";

const initialState = {
  getListBarangResult: false, //implementasi aksi dalam axios
  getListBarangLoading: false, //payload disimpan dalam state
  getListBarangError: false,

  addBarangResult: false, //implementasi aksi dalam axios
  addBarangLoading: false, //payload disimpan dalam state
  addBarangError: false,

  detailBarangResult: false, //implementasi aksi dalam axios
  // detailBarangLoading: false, //payload disimpan dalam state
  detailBarangError: false,

  updateBarangResult: false, //implementasi aksi dalam axios
  updateBarangLoading: false, //payload disimpan dalam state
  updateBarangError: false,

  deleteBarangResult: false, //implementasi aksi dalam axios
  deleteBarangLoading: false, //payload disimpan dalam state
  deleteBarangError: false,
};

const barang = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BARANG:
      return {
        ...state,
        getListBarangResult: action.payload.data,
        getListBarangLoading: action.payload.loading,
        getListBarangError: action.payload.errorMessage,
      };

    case ADD_BARANG:
      return {
        ...state,
        addBarangResult: action.payload.data,
        addBarangLoading: action.payload.loading,
        addBarangError: action.payload.errorMessage,
        redirect: action.payload.redirect,
        validatorErrors: action.payload.errorsValidator,
      };

      case GET_DETAIL_BARANG:
      return {
        ...state,
        detailBarangResult: action.payload.data,
        detailBarangLoading: action.payload.loading,
        detailBarangError: action.payload.errorMessage,
      };

      case UPDATE_BARANG:
      return {
        ...state,
        udapteBarangResult: action.payload.data,
        // udapteBarangLoading: action.payload.loading,
        udapteBarangError: action.payload.errorMessage,
      };

      case DELETE_BARANG:
      return {
        ...state,
        deleteBarangResult: action.payload.data,
        deleteBarangLoading: action.payload.loading,
        deleteBarangError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default barang;

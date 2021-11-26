import { useState } from "react";
import AddItem from "./AddItem";
import Header from "./Header";
import Modal from "./Modal";
import Table from "./Table";
import { addProduct } from "../action/action";
import { useDispatch } from "react-redux";

const initialState = {
  product_name: "",
  vat: "0",
  quantity: 0,
  net_price: "",
  gross_price: "",
};
function App() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const logic = Number(state?.gross_price) / Number(1 + state?.vat / 100);

  const onAddItem = () => {
    setShowModal(!showModal);
  };

  const onInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    setShowModal(!showModal);
    setState(initialState);
  };

  const onSubmit = () => {
    state.net_price = logic;
    dispatch(addProduct(state));
    setShowModal(!showModal);
    setState(initialState);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddItem onAddItem={onAddItem} />
        <Table />
      </div>
      <Modal
        showModal={showModal}
        state={state}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        onClose={onClose}
        logic={logic}
      />
    </div>
  );
}

export default App;

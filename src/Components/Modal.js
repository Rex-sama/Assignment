import { GrFormClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function Modal({ showModal, state, onInputChange, onSubmit, onClose, logic }) {
  const styleModal = showModal ? "modal flex " : "modal display-none";
  const inf = new Intl.NumberFormat("en-US");
  return (
    <div className={styleModal}>
      <section className="modal-main">
        <header>
          <p>Products</p>
          <p className="point" onClick={onClose}>
            <GrFormClose />
          </p>
        </header>
        <div className="input-items">
          <div className="input-fields">
            <label>Product Name</label>
            <input
              type="text"
              name="product_name"
              value={state.product_name}
              onChange={onInputChange}
            />
          </div>
          <div className="input-fields">
            <label>Price (gross)</label>
            <input
              type="text"
              name="gross_price"
              value={state.gross_price}
              onChange={onInputChange}
            />
          </div>
          <div className="input-fields">
            <label>Vat</label>
            <select
              value={state.vat}
              name="vat"
              onChange={onInputChange}
              className="vat-drop"
            >
              <option value={0}>--select---</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="25">25%</option>
            </select>
          </div>

          <div className="input-fields">
            <label>Price (net)</label>
            <div className="vat-drop">{inf.format(logic)}</div>
          </div>
          <div className="input-fields">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={state.quantity}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="submit-buttons">
          <button
            className="flex"
            style={{ columnGap: "5px" }}
            onClick={onClose}
          >
            <MdDelete /> Delete
          </button>
          <button onClick={onSubmit}>Save</button>
        </div>
      </section>
    </div>
  );
}

export default Modal;

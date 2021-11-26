import { MdAdd } from "react-icons/md";

function AddItem({ onAddItem }) {
  return (
    <div className="addItems">
      <p>Products</p>
      <div className="addButton flex" onClick={onAddItem}>
        <i>
          <MdAdd />
        </i>
        <p>Add</p>
      </div>
    </div>
  );
}

export default AddItem;

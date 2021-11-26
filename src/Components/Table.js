import { HiPencilAlt } from "react-icons/hi";
import { useSelector } from "react-redux";

function Table() {
  const data = useSelector((state) => state?.product?.data);
  const inf = new Intl.NumberFormat("en-US");
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Total Stock</th>
            <th>VAT</th>
            <th>Price per Qty (Gross)</th>
            <th>Price per Qty (net)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr className="table-content" key={item._id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.vat}%</td>
                <td>{inf.format(item.gross_price)}</td>
                <td>{inf.format(item.net_price)}</td>
                <td className="point update">
                  <HiPencilAlt />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import axios from "axios";
import { useState } from "react";
function ProductForm() {
const [productName, setProductName] = useState("");
const [price, setPrice] = useState(0);
const submit = () => {
axios.post("/api/products", {
productName,
price
});
};
return (
<>
<h3>Add Product</h3>
<input placeholder="Product" onChange={e => setProductName(e.target.value)} />
<input type="number" onChange={e => setPrice(e.target.value)} />
<button onClick={submit}>Save</button>
</>
);
}
export default ProductForm;
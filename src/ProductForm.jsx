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
<div className="form">
	<h3 className="form-title">Add Product</h3>
	<label className="form-label">
		Product name
		<input
			className="form-input"
			placeholder="Premium Coffee Beans"
			onChange={e => setProductName(e.target.value)}
		/>
	</label>
	<label className="form-label">
		Price
		<input
			className="form-input"
			type="number"
			step="0.01"
			placeholder="19.99"
			onChange={e => setPrice(e.target.value)}
		/>
	</label>
	<button className="form-button" onClick={submit}>Save</button>
</div>
);
}
export default ProductForm;
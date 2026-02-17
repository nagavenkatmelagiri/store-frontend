import axios from "axios";
import { useEffect, useState } from "react";
function OrderForm() {
const [customers, setCustomers] = useState([]);
const [products, setProducts] = useState([]);
const [selectedCustomer, setSelectedCustomer] = useState("");
const [selectedProduct, setSelectedProduct] = useState("");
const [quantity, setQuantity] = useState(1);
const [items, setItems] = useState([]);
// Load customers & products on page load
useEffect(() => {
axios.get("http://localhost:8080/api/customers")
.then(res => setCustomers(res.data));
axios.get("http://localhost:8080/api/products")
.then(res => setProducts(res.data));
}, []);
const addItem = () => {
if (!selectedProduct || quantity <= 0) return;
setItems([
...items,
{
    productId: selectedProduct,
quantity: quantity
}
]);
setSelectedProduct("");
setQuantity(1);
};
const submitOrder = () => {
axios.post("http://localhost:8080/api/orders", {
customerId: selectedCustomer,
items: items
})
.then(() => {
alert("Order Created Successfully!");
setItems([]);
})
.catch(err => console.error(err));
};
return (
<>
<h2>Create Order</h2>
{/* Customer Dropdown */}
<select onChange={e => setSelectedCustomer(e.target.value)}>
<option>Select Customer</option>
{customers.map(c => (
<option key={c.id} value={c.id}>
{c.name}
</option>
))}
</select>
<br /><br />
{/* Product Dropdown */}
<select onChange={e => setSelectedProduct(e.target.value)}>
<option>Select Product</option>
{products.map(p => (
<option key={p.id} value={p.id}>
{p.productName}
</option>
))}
</select>
<input
type="number"
placeholder="Quantity"
value={quantity}
onChange={e => setQuantity(e.target.value)}
/>
<button onClick={addItem}>Add Item</button>
<br /><br />
<h4>Order Items:</h4>
<ul>
{items.map((item, index) => (
<li key={index}>
Product ID: {item.productId} | Qty: {item.quantity}
</li>
))}
</ul>
<button onClick={submitOrder}>Submit Order</button>
<hr />
</>
);
}
export default OrderForm;

import axios from "axios";
import { useState } from "react";
function CustomerForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const submit = () => {
axios.post("/api/customers", {
name,
email
});
};
return (
<div className="form">
	<h3 className="form-title">Add Customer</h3>
	<label className="form-label">
		Name
		<input
			className="form-input"
			placeholder="Jane Doe"
			onChange={e => setName(e.target.value)}
		/>
	</label>
	<label className="form-label">
		Email
		<input
			className="form-input"
			type="email"
			placeholder="jane@example.com"
			onChange={e => setEmail(e.target.value)}
		/>
	</label>
	<button className="form-button" onClick={submit}>Save</button>
</div>
);
}
export default CustomerForm;
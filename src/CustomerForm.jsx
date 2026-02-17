import axios from "axios";
import { useState } from "react";
function CustomerForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const submit = () => {
axios.post("http://localhost:8080/api/customers", {
name,
email });
};
return (
<>
<h3>Add Customer</h3>
<input placeholder="Name" onChange={e => setName(e.target.value)} />
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<button onClick={submit}>Save</button>
</> );
}
export default CustomerForm;
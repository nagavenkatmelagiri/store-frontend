import "./App.css";
import CustomerForm from "./CustomerForm";
import ProductForm from "./ProductForm";
function App() {
return (
<div className="app">
	<header className="app-header">
		<div>
			<h1 className="app-title">Store Admin</h1>
			<p className="app-subtitle">Manage customers and products in one place.</p>
		</div>
		<div className="app-badge">v1</div>
	</header>

	<main className="app-main">
		<section className="card">
			<CustomerForm />
		</section>
		<section className="card">
			<ProductForm />
		</section>
	</main>
</div>
);
}
export default App;
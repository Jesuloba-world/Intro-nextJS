import Router from "next/router";

const authIndexPage = () => (
	<div>
		<h1>The Auth Page</h1>
		<button onClick={() => Router.push("/")}>Go to Main</button>
	</div>
);

export default authIndexPage;

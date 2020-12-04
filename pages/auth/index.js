import Router from "next/router";

import User from "../../components/User";

const authIndexPage = () => (
	<div>
		<h1>The Auth Page</h1>
		<User name="John" age={25} />
		<button onClick={() => Router.push("/")}>Go to Main</button>
	</div>
);

export default authIndexPage;

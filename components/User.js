const user = (props) => (
	<div>
		<h2>{props.name}</h2>
		<p>Age: {props.age}</p>
		<style jsx>{`
			div {
				border: 1px solid #eee;
				box-shadow: 0 2px 3px #ccc;
				padding: 20px;
				text-align: center;
				margin: 20px 0;
			}

			h2 {
				color: green;
			}
		`}</style>
	</div>
);

export default user;

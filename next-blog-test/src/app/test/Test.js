import React from "react";
import Link from "next/link";

const Test = ({ path }) => {
	return (
		<div>
			<p>Testing directory under path: {path}</p>
			<Link href="/">return to homepage</Link>
		</div>
	);
};

export default Test;

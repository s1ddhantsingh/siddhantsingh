import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<Image
				priority
				src="/images/profile.jpeg"
				height={100}
				width={100}
				alt="siddhant singh profile image"
				className=""
			/>
			<h1>siddhant singh</h1>
			<h3>
				hello there, my name is sidd. i'm a startup founder, software engineer,
				and a student.
			</h3>
			<h2>
				reach me on <a href="https://twitter.com/siddhants1ngh">twitter</a>,{" "}
				<a href="https://www.linkedin.com/in/siddhant-singh-0217/">linkedin</a>,
				or by singhsiddhantakshat@gmail.com.
			</h2>
		</>
	);
};

export default Home;
/**
<div>
	hello {console.log("hello")}
	<Link href="/test">Test.js</Link>
</div>
 */

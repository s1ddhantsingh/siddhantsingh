import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<div className="grid justify-items-center p-4 m-10 bg-slate-400 rounded-lg">
				<Image
					priority
					src="/images/profile.jpeg"
					height={100}
					width={200}
					alt="siddhant singh profile image"
					className="rounded-full"
				/>
				<h1 className="text-2xl">siddhant singh</h1>
				<h3 className="text-lg">
					hello there, my name is sidd. i'm a startup founder, software
					engineer, and a student.
				</h3>
				<h2 classname="text-xs">
					reach me on <a href="https://twitter.com/siddhants1ngh">twitter</a>,{" "}
					<a href="https://www.linkedin.com/in/siddhant-singh-0217/">
						linkedin
					</a>
					, or by singhsiddhantakshat@gmail.com.
				</h2>
			</div>
			<div className="grid justify-items-center p-4 m-10 bg-slate-400 rounded-lg">
				blog 1
			</div>
			<div className="grid justify-items-center p-4 m-10 bg-slate-400 rounded-lg">
				blog 1
			</div>
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

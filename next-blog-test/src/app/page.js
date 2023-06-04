import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
	{
		text: "blog title 1",
		body: "Lorem ipsum dolor sit amet, ut simul dicant eum. Id tantas deleniti complectitur vix, nominati consequuntur usu cu. Vel quidam saperet ne, appetere concludaturque usu ad. Ut his dicunt pertinax, vim iusto populo alterum eu. Has cu deleniti dignissim. Commodo repudiandae disputationi at eos, duo et modus possit. In purto elaboraret persequeris mea, doctus vituperata nam et. Eam wisi similique ex, falli tacimates maiestatis vis at. No vim partem legere volumus, per no solum dictas concludaturque. Ubique iuvaret argumentum in his, pertinax quaestio instructior vix cu. Sit te tation partem, id vix modus oporteat disputationi. Pro cu case laudem delicata.",
	},
	{
		text: "blog title 2",
		body: "Lorem ipsum dolor sit amet, ut simul dicant eum. Id tantas deleniti complectitur vix, nominati consequuntur usu cu. Vel quidam saperet ne, appetere concludaturque usu ad. Ut his dicunt pertinax, vim iusto populo alterum eu. Has cu deleniti dignissim. Commodo repudiandae disputationi at eos, duo et modus possit. In purto elaboraret persequeris mea, doctus vituperata nam et. Eam wisi similique ex, falli tacimates maiestatis vis at. No vim partem legere volumus, per no solum dictas concludaturque. Ubique iuvaret argumentum in his, pertinax quaestio instructior vix cu. Sit te tation partem, id vix modus oporteat disputationi. Pro cu case laudem delicata.",
	},
	{
		text: "blog title 3",
		body: "Lorem ipsum dolor sit amet, ut simul dicant eum. Id tantas deleniti complectitur vix, nominati consequuntur usu cu. Vel quidam saperet ne, appetere concludaturque usu ad. Ut his dicunt pertinax, vim iusto populo alterum eu. Has cu deleniti dignissim. Commodo repudiandae disputationi at eos, duo et modus possit. In purto elaboraret persequeris mea, doctus vituperata nam et. Eam wisi similique ex, falli tacimates maiestatis vis at. No vim partem legere volumus, per no solum dictas concludaturque. Ubique iuvaret argumentum in his, pertinax quaestio instructior vix cu. Sit te tation partem, id vix modus oporteat disputationi. Pro cu case laudem delicata.",
	},
];

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
			{data.map((e) => {
				return (
					<div className="grid justify-items-center p-4 m-10 bg-slate-400 rounded-lg">
						<div className="bg-slate-300 rounded-lg p-2 m-2 bg-left-top">
							{e.text}
						</div>
						<p>{e.body}</p>
					</div>
				);
			})}
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

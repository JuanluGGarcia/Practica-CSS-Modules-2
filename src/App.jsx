import Card from "./components/card/Card";

const App = () => {
	return(
		<>
			<header className="header">
				<div className="wrapper wrapper--narrow">
					<h1 className="header__title">
						Reliable, efficient delivery <span className="header__title--bold">Powered by Technology</span></h1>
					<p className="header__text">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
				</div>
        	</header>

			<main>
				<div className="wrapper">
					<div className="flex">
						<div className="col">

							<Card color="border__cyan" title="Supervisor" text="Monitors activity to identify project roadblocks" icon="./assets/images/icon-supervisor.svg" />

						</div>

						<div className="col">
							<Card color="border__red" title="Team Builder" text="Scans our talent network to create the optimal team for your project" icon="./assets/images/icon-team-builder.svg" />

							<Card color="border__orange" title="Karma" text="Regularly evaluates our talent to ensure quality" icon="./assets/images/icon-karma.svg" />

						</div>

						<div className="col">

							<Card color="border__blue" title="Calculator" text="Uses data from past projects to provide better delivery estimates" icon="./assets/images/icon-calculator.svg" />
							
						</div>
					</div>
				</div>
			</main>


		</>
	);
};

export default App;

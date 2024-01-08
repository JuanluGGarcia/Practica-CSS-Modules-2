import { v4 } from 'uuid';
import Card from './components/card/Card';
import { cardInfo } from './constants/cardInfo';

const App = () => {
	return (
		<>
			<header className='header'>
				<div className='wrapper wrapper--narrow'>
					<h1 className='header__title'>
						Reliable, efficient delivery{' '}
						<span className='header__title--bold'>Powered by Technology</span>
					</h1>
					<p className='header__text'>
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</p>
				</div>
			</header>

			<main>
				<div className='wrapper'>
					<div className='flex'>
						{/* <div className='col'> */}
							{/* Rellenando componentes con bucles y key */}

							{/* {cardInfo.map(card => (
								<Card
									key={v4()}
									color={card.color}
									title={card.title}
									text={card.text}
									icon={card.icon}
								/>
							))} */}

							{/* {cardInfo.map(card => (
								<TestCard
									key={v4()}
									color={card.color}
									bgColor={card.bgColor}
									path={card.path}
									test={card.test}
									punctuation={card.punctuation}
								/>
							))} */}

							<Card color="border__cyan" title="Supervisor" text="Monitors activity to identify project roadblocks" icon="./assets/images/icon-supervisor.svg" />
						{/* </div>

						{/* <div className='col'> */}
							<Card color="border__red" title="Team Builder" text="Scans our talent network to create the optimal team for your project" icon="./assets/images/icon-team-builder.svg" /> 

							<Card color="border__orange" title="Karma" text="Regularly evaluates our talent to ensure quality" icon="./assets/images/icon-karma.svg" />
						{/* </div> */}

						{/* <div className='col'> */}
							<Card color="border__blue" title="Calculator" text="Uses data from past projects to provide better delivery estimates" icon="./assets/images/icon-calculator.svg" />
						{/* </div> */}
					</div>
				</div>
			</main>
		</>
	);
};

export default App;

console.log('App.js is running!');

const app = {
	title : "Indecision App",
	subtitle : "Decide for you",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	
	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
	console.log(option);
};

const onMakeDecision = () => {
	const randomNumber = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNumber];
	alert(option);
};


const removeAll = () => {
	app.options = [];
	render();
};


const render = () => {
	
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No Options'}</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={removeAll}>Remove All</button>

			<ol>
			{
					app.options.map((option) => <li key={option}>{option}</li>)
			}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	
	ReactDOM.render(template, appRoot);
	
};



const user = {
	name: 'Pancake',
	age: 22,
	location: 'Tower'
};

function getLocation(location) {
	if(location){
		return <p>Location: {location}</p>;
	}

};

const appRoot = document.getElementById('app');

render();


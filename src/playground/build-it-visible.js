class VisibilityToggle extends React.Component {
	constructor(props){
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	
	handleToggleVisibility(){

		this.setState((prevState) => {
		
			return{
				visibility: !prevState.visibility
			};
		});

	}
	
	render(){
		return (
			<div>
				<h1>Visibility</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>Look at all these visible details</p>
					</div>
				)}
			</div>
		);
	}
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*const app = {
	title: 'Visibility Toggle',
	subtitle: ''
};

let visibility = false;

const toggleVisibility = () => {
	if(visibility){
		app.subtitle = '';
		visibility = false;
		
	}
	else{
		
		app.subtitle = 'These are the details';
		visibility = true;
	}
	
	render();
}

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide Details' : 'Show details'}
			</button>
			<p>{app.subtitle}</p>
		</div>
	);
	
	ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();*/


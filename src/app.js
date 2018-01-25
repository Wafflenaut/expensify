import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>Dashboard Placeholder</div>
	
);

const AddExpensePage = () => (
	<div>Add Expense Placeholder</div>
	
);

const EditExpensePage = () => (
	<div>Edit Expense Placeholder</div>
	
);

const HelpPage = () => (
	<div>Help Page Placeholder</div>
	
);

const NotFoundPage = () => (
	<div>404! - <Link to="/">Go Home</Link></div>
	
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
	</header>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} exact={true} />
				<Route path="/edit" component={EditExpensePage} exact={true} />
				<Route path="/help" component={HelpPage} exact={true} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

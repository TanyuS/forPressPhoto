import react from 'react';


const App = React.createClass({
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});
 React.render(
 	<App />,
	document.getElementById('app')
);
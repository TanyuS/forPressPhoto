import React from 'react';
import {render} from 'react-dom';

import List from './List';

const App = () => (
	<div>
		<List/>
	</div>
);


render(
	<App />, document.getElementById('app')
);

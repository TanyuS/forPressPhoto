import React from 'react';

import Element from './Element';

const List = () => (
	<div>
		<div className="element">
			<div className="element__pic">
				<img src={props.picSrc} />
			</div>
			<div className="element__overlay action">
				<div className="action__choose">
					<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
						<input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
					</label>
				</div>
				<div className="action__share">
					<button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
				    	<i class="material-icons">share</i>
				    </button>
				</div>
				<div className="action__delete"></div>
				<div className="action__download"></div>
				<div className="action__eye"></div>
			</div>
			<div className="element__choose">
				<div className="">
					Выберите лицензию
				</div>
			</div>
		</div>
	</div>
);

export default Element;

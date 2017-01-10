'use strict';

export default {
	plugins: [{
		name: 'json',
		transform(code, id) {
			return id.slice(-5) === '.json' ? `export default ${code}` : null;
		}
	}]
};

'use strict';

export default {
	entry: './index.js',
	plugins: [{
		name: 'json',
		transform(code, id) {
			return id.slice(-5) === '.json' ? `export default ${code}` : null;
		}
	}],
	targets: [
		{format: 'cjs', dest: 'dist/snippets.cjs.js'},
		{format: 'es',  dest: 'dist/snippets.es.js'}
	]
};

const { join } = require('path');

module.exports = {
  defaultValues: {
    description: 'Placeholder description.',
    folderName: 'src',
    editorScript: 'file:./index.js',
    editorStyle: 'file:./index.css',
    style: 'file:./style-index.css',
    npmDevDependencies: ['tailwind', 'autoprefixer', 'cssnano', 'postcss', 'postcss-cli', 'postcss-multiple-tailwind' ]
  },
  variants: {
		static: {},
		dynamic: {
			attributes: {
				message: {
					type: 'string',
				},
			},
			render: 'file:./template.php',
		},
	},
  // templatesPath: join(__dirname, 'templates/plugin'),
  pluginTemplatesPath: join(__dirname, 'templates/plugin'),
  blockTemplatesPath: join(__dirname, 'templates/block'),
};

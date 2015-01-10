module.exports = function(grunt){

	grunt.initConfig({
		jade: {
			complite: {
				options: {
					pretty: true,
					data: {
						root: '/nodesite1',
						staticRoot: '/nodesite1/public'
					}
				},
				files: {
					'index.html': 'views/pages/index.jade',
					'projects.html': 'views/pages/projects.jade',
					'contacts.html': 'views/pages/contacts.jade'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['jade']);
};
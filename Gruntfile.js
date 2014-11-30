module.exports=function(grunt){
	grunt.initConfig({
		less:{
			compile: {
				option:{
									
				},
				files: {
					'public/css/lib/bootstrap.css':'public/less/lib/bootstrap.less'
				}
			},
			
			minify:{
				options: {
					cleancss:true,
					report:'min'
				},
				expand:true,
				files:{
					'public/css/lib/bootstrap.css':'public/css/lib/bootstrap.min.css',
					'public/css/lib/bootstrap-theme.css':'public/css/lib/bootstrap-theme.min.css',
				}
			}
		},
		
		watch:{
			scripts: {
			   files:['public/less/*.less','public/less/lib/*.less'],
			   tasks:['less']
			} 
		
		}
	});	
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['less','watch']);
	grunt.registerTask('test',['jshint']);

}
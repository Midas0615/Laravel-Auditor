define([
	'react',
	'jsx!components/sections/details/images/missing_title/page',
	'jsx!components/sections/details/images/missing_title/table',
	'jsx!components/sections/details/page'
], function(
	React,
	Details_Page,
	Table,
	Page
) {
	return React.createClass({
		render: function () {
			var stat = {
				'section': 'images',
				'code': 'missing_title'
			};

			var table = (<Table site_id={this.props.site_id} />);

			return (
				<Page site_id={this.props.site_id} stat={stat} table={table} />
			);
		}
	});
});
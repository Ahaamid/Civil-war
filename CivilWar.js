var React = require ('react');
var ReactDOM = require('react-dom');

var civilWar = (
	<ul>
		<li> Andrea, Mackenzie, Mars, Molly, Renae </li>
		<li> Mariya, Sydney, Maddie, Stephanie, Mitchie </li>
	</ul>
);

function CivilWar(props) {
	return (
		<ul>
			<li> {props.team1.join(" / ")} </li>
			<li> {props.team2.join(" \\ ")} </li>
		</ul>
	);
}

export default CivilWar;


import React from 'react';
import Project from './Project';
import Bestande from './previews/Bestande';
import ScienceMatters from './previews/ScienceMatters';
import Onetune from './previews/Onetune';
import FeatureFyi from './previews/FeatureFyi';
import MakeSpace from './previews/MakeSpace';

export default () => {
	return (
		<div style={{margin: 'auto'}}>
			<Project
				timeline="2016–"
				title="Bestande"
				feature={<Bestande />}
				description="Student app for University of Zurich"
				accomplishments={[
					'Apps for iOS, Android and Web',
					'Two universites supported, translated into three languages',
					"The leading app for the University of Zurich - more than 9'000 out of 25'000 students",
					"Users have rated over 18'000 courses in 6 months"
				]}
			/>
			<Project
				timeline="2015–2018"
				title="ScienceMatters"
				feature={<ScienceMatters />}
				description="Science publishing platform"
				accomplishments={[
					'Web platform covering the full publishing workflow',
					'100+ peer reviewed articles published',
					'In-browser editor with citation manager',
					'Endorsed by the European Commission'
				]}
			/>
			<Project
				timeline="2013–2015"
				title="onetune.fm"
				feature={<Onetune />}
				description="Music streaming website"
				accomplishments={[
					'Full featured music player using YouTube',
					"4'000 registered users",
					'Frontpage of Reddit on launch day'
				]}
			/>
			<Project
				timeline="2018–"
				title="make-space"
				feature={<MakeSpace />}
				description="Free up space on the command line"
				accomplishments={[
					'My flagship open source project',
					'Developer-oriented tool for freeing up space',
					'Downloads and runs with just one command'
				]}
			/>
			<Project
				timeline="2018"
				title="feature.fyi"
				feature={<FeatureFyi />}
				description="Music artist connection finder"
				accomplishments={[
					'Like calculating Erdös Numbers, but for music artists',
					'Searches a graph database with hundreds of thousands of edges',
					'Built and open sourced in just one weekend'
				]}
			/>
		</div>
	);
};

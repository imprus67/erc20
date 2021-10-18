import React from 'react';
import './ProgressBar.css';

const getClasses = (props) => {
	let classes = 'rsProgress';
	if (props.className) classes += ` ${props.className}`;
	return classes;
};

const getBarClasses = (props) => {
	let classes = 'rsProgressBar';
	if (props.indicatorPosition) classes += ` ${props.indicatorPosition}`;
	if (props.striped) classes += ' rsProgressBarStriped';
	if (props.animated) classes += ' rsProgressBarAnimated';
	return classes;
};

const changeDivWidth = (progressBarRef, percentage) => {
	const progressBar = progressBarRef.current;
	if (!progressBar) return;
	progressBar.style.width = `${percentage/10000000000000000}%`;
};

const ProgressBar = (props) => {
	const name = props.name || `RsProgressBar_${Date.now()}`;
	const progressBarRef = React.createRef();

	React.useEffect(() => {
		changeDivWidth(progressBarRef, props.percentage || 0);
	});

	return (
		<>
			<div id={name} className={getClasses(props)}>
				<div
					className={getBarClasses(props)}
					role="progressbar"
					aria-valuenow={props.percentage}
					aria-valuemin={0}
					aria-valuemax={100}
					ref={progressBarRef}
				>
					{!props.hideIndicator &&
						(props.customIndicator ? (
							<span>{props.customIndicatorContent}</span>
						) : (
							<span>{props.percentage}  TKN</span>
						))}
				</div>
			</div>
		</>
	);
};

export default ProgressBar;
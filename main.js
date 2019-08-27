(() => {
	init();

	function init() {
		const eatingPeriods = [
			TimePeriod(Time(18, 00), Time(19, 00)),
			TimePeriod(Time(12, 00), Time(13, 30)),
			TimePeriod(Time(07, 00), Time(09, 00))
		];
		const answerElement = document.getElementById('answer-text');
		const cssClasses = { answerPositive: 'answer-text--positive', answerNegative: 'answer-text--negative' }

		isEatingPeriod = false;
		for (const period of eatingPeriods) {
			if (period.isTimeWithinPeriod(new Date())) {
				isEatingPeriod = true;
				break;
			}
		}

		answerElement.innerHTML = isEatingPeriod ? 'Ja' : 'Nee';
		answerElement.classList.remove(cssClasses.answerPositive);
		answerElement.classList.remove(cssClasses.answerNegative);
		answerElement.classList.add(isEatingPeriod ? cssClasses.answerPositive : cssClasses.answerNegative);
	}

	function TimePeriod(time1, time2) {

		const period = {
			time1: time1,
			time2: time2
		}
		return {
			isTimeWithinPeriod: function (date) {
				const currentTime = Time(date.getHours(), curM = date.getMinutes());
				return (!currentTime.greaterThanOrEqualTo(period.time1) && currentTime.greaterThanOrEqualTo(period.time2))
			}
		}
	}

	function Time(hours, minutes) {
		const timeObj = {
			hours: hours,
			minutes: minutes,
		}

		function getHours() { return timeObj.hours }
		function getMinutes() { return timeObj.minutes }
		function greaterThanOrEqualTo(otherTime) {
			return otherTime.getHours() > getHours() || (otherTime.getHours() == getHours() && otherTime.getMinutes() >= getMinutes());
		}

		return {
			getHours,
			getMinutes,
			greaterThanOrEqualTo
		};
	}
})();


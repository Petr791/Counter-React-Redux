import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./CounterPage.css"

import {
	increment,
	decrement,
	reset,
	load,
	save

} from "./actions"

import { getCounter, getIsLoading, getIsError, getCounterStatusList, getArraySavedNambers} from "./selectors";
import { getIsSaveLoading, getIsSaveSuccess, getIsSaveError } from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";

function CounterPage() {

	let counter = useSelector(getCounter);
	let statusList = useSelector(getCounterStatusList);
	let arrayNumbers = useSelector(getArraySavedNambers);

	const isLoading = useSelector(getIsLoading);
	const isError = useSelector(getIsError);

	const isSaveLoading = useSelector(getIsSaveLoading);
	const isSaveSuccess = useSelector(getIsSaveSuccess);
	const isSaveError = useSelector(getIsSaveError);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(load());
	}, [])

	const handleIncrementBtnClick = () => {
		dispatch(increment());
	}

	const handleDecrementBtnClick = () => {
		dispatch(decrement());
	}

	const handleResetBtnClick = () => {
		dispatch(reset());
	}

	const handleRetryBtnClick = () => {
		dispatch(load());
	}

	const handleSaveBtnClick = () => {
		 dispatch( save(counter));
	}
	
  return (
				<>
					<CounterWidget
						isLoading={isLoading}
						isError={isError}
						counter={counter}
						statusList={statusList}
						arrayNumbers={arrayNumbers}
			
						isSaveLoading={isSaveLoading}
						isSaveSuccess={isSaveSuccess}
						isSaveError={isSaveError}
			
						onIncrementBtnClick={handleIncrementBtnClick}
						onDecrementBtnClick={handleDecrementBtnClick}
						onResetBtnClick={handleResetBtnClick}
						onRetryBtnClick={handleRetryBtnClick}
						onSaveBtnClick={handleSaveBtnClick} />
				</>
	)
}

export default CounterPage

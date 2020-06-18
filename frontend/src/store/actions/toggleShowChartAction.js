import { toggleShowChart } from "../types";

const toggleShowChartAction = () => ({
        type: toggleShowChart
    });

export const toggleShowChartFunction = () => dispatch => {
    dispatch(toggleShowChartAction())
}; 
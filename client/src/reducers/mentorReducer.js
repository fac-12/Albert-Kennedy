import { MENTORLIST } from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case MENTORLIST:
			return { ...state, mentor_list: action.payload };
		default:
			return state;
	}
};

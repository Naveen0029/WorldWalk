import { FORM_DETAILS } from "./constant";

export const addDetails = (details) => {
    return {
        type: FORM_DETAILS,
        payload: details
    }
}
export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export const toggle_status = (index) => ({
    type: TOGGLE_STATUS,
    index
});

export const update_status = (status, index) => ({
    type: UPDATE_STATUS,
    index,
    status
});
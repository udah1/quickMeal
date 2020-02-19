import {
  INCREMENT,
  DECREMENT,
} from './types';

/*
 * EREZ is the best!
 */

/**
 * increment counter value
 * @return {number} +1
 */
export function addToCounter() {
  return {
    type: INCREMENT,
  };
}

/**
 * decrement counter value
 * @return {number} -1
 */
export function removeFromCounter() {
  return {
    type: DECREMENT,
  };
}

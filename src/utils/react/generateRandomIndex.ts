import { assoc } from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

// generateRandomString is called once
export const assignId = () => assoc('id', generateRandomString());

// generateRandomString is called every time the function is invoked
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);

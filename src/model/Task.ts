/* ==========================================
   TASK MODEL
   Represents a single task item
   ========================================== */

/* ==========================================
   INTERFACE & TYPE DEFINITIONS
   ========================================== */

/**
 * Interface for Task properties
 */
export interface TaskInterface {
	id: number
	title: string
	done: boolean
}


/* ==========================================
   TASK CLASS
   ========================================== */

/**
 * Represents a single task in the to-do list
 * @class Task
 * @implements {TaskInterface}
 */
export class Task implements TaskInterface {
	/**
	 * Create a new Task instance
	 * @param id - Unique identifier for the task
	 * @param title - Task description text
	 * @param done - Completion status (default: false)
	 */
	constructor(
		public id: number,
		public title: string,
		public done: boolean = false
	) { }
}
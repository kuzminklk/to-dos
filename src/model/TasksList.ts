/* ==========================================
   TASKS LIST MODEL
   Manages collection of tasks with persistence
   ========================================== */

import { Task } from "./Task.ts"


/* ==========================================
   INTERFACE & TYPE DEFINITIONS
   ========================================== */

/**
 * Interface for TasksList properties and methods
 */
export interface TasksListInterface {
	tasks: Task[]
	load(): void
	save(): void
	clear(): void
	addTask(item: Task): void
	removeTask(id: Task["id"]): void
}


/* ==========================================
   TASKS LIST CLASS
   ========================================== */

/**
 * Manages a collection of tasks with local storage persistence
 * @class TasksList
 * @implements {TasksListInterface}
 */
export class TasksList implements TasksListInterface {
	public tasks: Task[] = []

	/**
	 * Load tasks from browser local storage
	 * Parses stored JSON and restores task list state
	 */
	load(): void {
		const storedTasks: string | null = localStorage.getItem("Tasks")

		if (typeof storedTasks !== "string") return

		const parsedTasks: Task[] = JSON.parse(storedTasks)
		this.tasks = parsedTasks
	}

	/**
	 * Persist current tasks to browser local storage
	 * Converts task array to JSON and stores it
	 */
	save(): void {
		localStorage.setItem("Tasks", JSON.stringify(this.tasks))
	}

	/**
	 * Remove all tasks and save empty list
	 */
	clear(): void {
		this.tasks = []
		this.save()
	}

	/**
	 * Add a new task to the list and persist
	 * @param task - Task object to add
	 */
	addTask(task: Task): void {
		this.tasks.push(task)
		this.save()
	}

	/**
	 * Remove a task by its ID and persist
	 * @param id - Task ID to remove
	 */
	removeTask(id: Task["id"]): void {
		this.tasks = this.tasks.filter(task => task.id !== id)
		this.save()
	}
}
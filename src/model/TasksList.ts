

import { Task } from "./Task.ts";


export interface TasksListInterface {
	tasks: Task[],
	load(instance: TasksListInterface): void,
	save(): void,
	clear(): void,
	addTask(item: Task): void,
	removeTask(id: Task["id"]): void	
}


// Model for list of tasks
export class TasksList implements TasksListInterface {

	public tasks: Task[] = []

	// Load from local storage
	load(): void {
		const storedTasks: string | null = localStorage.getItem("Tasks")

		if (typeof storedTasks !== "string") return
		 
		const parsedTasks: Task[] = JSON.parse(storedTasks)

		this.tasks = parsedTasks
	}

	// Save to local storage
	save(): void {
		localStorage.setItem("Tasks", JSON.stringify(this.tasks))
	}

	// Clear all tasks and save into local storage
	clear(): void {
		this.tasks = []
		this.save()
	}

	addTask(task: Task): void {
		this.tasks.push(task)
		this.save()
	}

	removeTask(id: Task["id"]): void {
		this.tasks = this.tasks.filter(task => task.id !== id)
		this.save()
	}
}
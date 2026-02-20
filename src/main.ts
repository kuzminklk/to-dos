

import './css/style.css'

import { TasksListTemplate } from './templates/TasksListTemplate'
import { TasksList } from './model/TasksList'
import { Task } from './model/Task'


function init(): void {
	// Create list of tasks
	const tasksList: TasksList = new TasksList()
	tasksList.load()

	// Create HTML template for list of tasts
	const taskListTemplate: TasksListTemplate = new TasksListTemplate()
	taskListTemplate.render(tasksList)


	// Add events to the new task form
	const form: HTMLFormElement | null = document.querySelector(".newTask form")

	if (form) {
		form.addEventListener("submit", (event) => {
			event.preventDefault()
			
			const input: HTMLInputElement | null = document.querySelector(".newTask input")

			if (input) {
				const newTaskTitle: string = input.value.trim()
				if(newTaskTitle) {
					// Create new task

					// Give new task id: 1 if there are no tasks or id's of latests plus one if there are tasks
					const newTaskId: number  = tasksList.tasks.length ? tasksList.tasks[tasksList.tasks.length - 1].id + 1 : 1

					const newTask: Task = new Task(newTaskId, newTaskTitle)

					tasksList.addTask(newTask)
					taskListTemplate.render(tasksList)
				} else {
					return
				}
			} else {
				console.error("Can't load the input element. From general init function")
			}
		})
	} else {
		console.error("Can't load the form. From general init function")
	}


	// Add events to the clear button
	const clearButton: HTMLButtonElement | null = document.querySelector("button#clear")

	if (clearButton) {
		clearButton.addEventListener("click", () => {
			tasksList.clear()
			taskListTemplate.clear()
		})
	} else {
		console.error("Can't load the clear button. From general init function")
	}

}


init()
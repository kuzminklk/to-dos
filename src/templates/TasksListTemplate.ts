/* ==========================================
   TASKS LIST TEMPLATE
   Renders tasks as HTML elements
   ========================================== */

import { Task } from "../model/Task.ts"
import { TasksList } from "../model/TasksList.ts"


/* ==========================================
   INTERFACE & TYPE DEFINITIONS
   ========================================== */

/**
 * Interface for TasksListTemplate properties and methods
 */
export interface TasksListTemplateInterface {
	ul: HTMLUListElement | null
	clear(): void
	render(taskList: TasksList): void
}


/* ==========================================
   TASKS LIST TEMPLATE CLASS
   ========================================== */

/**
 * Handles rendering of task list to the DOM
 * @class TasksListTemplate
 * @implements {TasksListTemplateInterface}
 */
export class TasksListTemplate implements TasksListTemplateInterface {
	ul: HTMLUListElement | null = document.querySelector("ul#tasks")

	/**
	 * Clear all task list items from the DOM
	 */
	clear(): void {
		if (this.ul) {
			this.ul.innerHTML = ""
		} else {
			console.error("Could not locate tasks list element <ul>")
		}
	}

	/**
	 * Render all tasks from the TasksList model to the DOM
	 * Creates HTML elements for each task with event listeners
	 * @param taskList - TasksList instance containing tasks to render
	 */
	render(taskList: TasksList): void {
		this.clear()

		taskList.tasks.forEach((task: Task) => {
			// Create main list item container
			const li: HTMLLIElement = document.createElement("li")
			li.className = "task"

			// ========================================
			// Create checkbox for task completion
			// ========================================
			const input: HTMLInputElement = document.createElement("input")
			input.type = "checkbox"
			input.id = `task-${task.id}`
			input.checked = task.done
			li.append(input)

			// Checkbox change event: toggle task completion
			input.addEventListener("change", () => {
				task.done = input.checked
				taskList.save()
			})

			// ========================================
			// Create label with task title
			// ========================================
			const label: HTMLLabelElement = document.createElement("label")
			label.htmlFor = input.id
			label.textContent = task.title
			li.append(label)

			// ========================================
			// Create delete button
			// ========================================
			const button: HTMLButtonElement = document.createElement("button")
			button.textContent = "Delete"
			button.setAttribute("type", "button")
			button.setAttribute("aria-label", `Delete task: ${task.title}`)
			li.append(button)

			// Delete button click event: remove task and re-render
			button.addEventListener("click", () => {
				taskList.removeTask(task.id)
				this.render(taskList)
			})

			// ========================================
			// Add task to list in DOM
			// ========================================
			if (this.ul) {
				this.ul.append(li)
			} else {
				console.error("Could not locate tasks list element <ul> during render")
			}
		})
	}
}
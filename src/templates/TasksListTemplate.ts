

import { Task } from "../model/Task.ts";
import { TasksList } from "../model/TasksList.ts";


export interface TasksListTemplateInterface {
	ul: HTMLUListElement | null,
	clear(): void,
	render(taskList: TasksList): void
}


// HTML template for list of tasks model
export class TasksListTemplate implements TasksListTemplateInterface {
	
	ul: HTMLUListElement | null = document.querySelector("ul#tasks")
	
	clear(): void {
		if (this.ul) {
			this.ul.innerHTML = ""
		} else {
				console.error("Can't get the <ul>. From clear method of TasksListTemplate")
		}
	}

	render(taskList: TasksList): void {
		this.clear()

		taskList.tasks.forEach((task:Task) => {
			// Create <li>
			const li: HTMLLIElement = document.createElement("li")
			li.className = "task"

			// Create <li> ← <input> for checking
			const input: HTMLInputElement = document.createElement("input")
			input.type = "checkbox"
			input.id = `task-${task.id}`
			input.checked = task.done
			li.append(input)

			input.addEventListener("change", () => {
				task.done = input.checked
				taskList.save()
			})

			// Create <li> ← <label>
			const label: HTMLLabelElement = document.createElement("label")
			label.htmlFor = input.id
			label.textContent = task.title
			li.append(label)

			// Create <li> ← <button> for deleting
			const button: HTMLButtonElement = document.createElement("button")
			button.textContent = "Delete"
			li.append(button)

			button.addEventListener("click", () => {
				taskList.removeTask(task.id)
				this.render(taskList)
			})

			// Add this <li> to common <ul>
			if (this.ul) {
				this.ul.append(li)
			} else {
				console.error("Can't get the <ul>. From render method of TasksListTemplate")
			}
		})
	}
}
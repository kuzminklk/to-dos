/* ==========================================
   MAIN APPLICATION FILE
   Handles initialization and event listeners
   ========================================== */

import './css/style.css'

import { TasksListTemplate } from './templates/TasksListTemplate'
import { TasksList } from './model/TasksList'
import { Task } from './model/Task'


/* ==========================================
   CONSTANTS
   ========================================== */

const THEME_KEY: string = 'theme'
const LIGHT_THEME: string = 'light'
const DARK_THEME: string = 'dark'


/* ==========================================
   THEME MANAGEMENT
   ========================================== */

/**
 * Initialize the theme on page load
 */
function initTheme(): void {
	const savedTheme: string | null = localStorage.getItem(THEME_KEY)
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

	// Set initial theme based on saved preference or system preference
	const theme: string = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME)
	setTheme(theme)
}

/**
 * Set the theme and update the button
 */
function setTheme(theme: string): void {
	const html: HTMLElement = document.documentElement
	const themeToggle: HTMLButtonElement | null = document.getElementById('themeToggle') as HTMLButtonElement

	if (theme === DARK_THEME) {
		html.classList.add('dark-theme')
		if (themeToggle) themeToggle.textContent = '☀️ LIGHT'
	} else {
		html.classList.remove('dark-theme')
		if (themeToggle) themeToggle.textContent = '🌙 DARK'
	}

	localStorage.setItem(THEME_KEY, theme)
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme(): void {
	const html: HTMLElement = document.documentElement
	const currentTheme: string = html.classList.contains('dark-theme') ? DARK_THEME : LIGHT_THEME
	const newTheme: string = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
	setTheme(newTheme)
}


/* ==========================================
   APPLICATION INITIALIZATION
   ========================================== */

/**
 * Initialize the entire application
 */
function init(): void {
	// Initialize theme
	initTheme()
	setupThemeToggle()

	// Create list of tasks
	const tasksList: TasksList = new TasksList()
	tasksList.load()

	// Create HTML template for list of tasks
	const taskListTemplate: TasksListTemplate = new TasksListTemplate()
	taskListTemplate.render(tasksList)

	// Setup form for adding new tasks
	setupNewTaskForm(tasksList, taskListTemplate)

	// Setup clear button
	setupClearButton(tasksList, taskListTemplate)
}


/* ==========================================
   EVENT HANDLERS
   ========================================== */

/**
 * Setup the theme toggle button
 */
function setupThemeToggle(): void {
	const themeToggle: HTMLButtonElement | null = document.querySelector('#themeToggle')

	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme)
	} else {
		console.error('Could not find theme toggle button')
	}
}

/**
 * Setup new task form submission
 */
function setupNewTaskForm(
	tasksList: TasksList,
	taskListTemplate: TasksListTemplate
): void {
	const form: HTMLFormElement | null = document.querySelector('.newTask form')

	if (form) {
		form.addEventListener('submit', (event: SubmitEvent) => {
			event.preventDefault()

			const input: HTMLInputElement | null = document.querySelector('.newTask input')

			if (input) {
				const newTaskTitle: string = input.value.trim()

				if (newTaskTitle) {
					// Generate new task ID based on existing tasks
					const newTaskId: number = tasksList.tasks.length
						? tasksList.tasks[tasksList.tasks.length - 1].id + 1
						: 1

					// Create and add new task
					const newTask: Task = new Task(newTaskId, newTaskTitle)
					tasksList.addTask(newTask)
					taskListTemplate.render(tasksList)

					// Clear input field
					input.value = ''
					input.focus()
				}
			} else {
				console.error('Could not find input element in new task form')
			}
		})
	} else {
		console.error('Could not find new task form')
	}
}

/**
 * Setup clear button to remove all tasks
 */
function setupClearButton(
	tasksList: TasksList,
	taskListTemplate: TasksListTemplate
): void {
	const clearButton: HTMLButtonElement | null = document.querySelector('button#clear')

	if (clearButton) {
		clearButton.addEventListener('click', () => {
			tasksList.clear()
			taskListTemplate.clear()
		})
	} else {
		console.error('Could not find clear button')
	}
}


/* ==========================================
   START APPLICATION
   ========================================== */

init()


export interface TaskInterface {
	id: number,
	title: string,
	done: boolean
}


// Model for one task
export class Task implements TaskInterface {

	constructor(
		public id: number,
		public title: string,
		public done: boolean = false
	) { }

}
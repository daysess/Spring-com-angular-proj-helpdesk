import { User } from "./user.model";

export class Ticket {

	constructor(
		public id:string,
		public number: number,
		public title: string,
		public status: string,
		public priority: string,
		public imagem: string,
		public assignedUser: User,
		public data: string,
		public changes: Array<string>
	){}

}


import { UserDTO } from "./userDTO.model";

export class CurrentUser {
	public token: string = '';
	public userDTO: UserDTO = new UserDTO('','');
}
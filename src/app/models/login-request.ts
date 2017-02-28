export class LoginRequest{
	constructor(
		public user: string,
		public password: string,
		public _csrf: string
	){}
}
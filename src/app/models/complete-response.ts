export class CompleteResponse{
	constructor(
		public id: string,
		public user_session: string,
		public bank: string,
		public bank_method_name: string,
		public elapsed_time: string,
		public created_at: string,
		public method_name: string,
		public user_hash: string,
		public user_type: string,
		public user_agent: string,
		public user_version: string,
		public user_device_id: string,
		public method_pay: string,
		public method_status: string,
		public method_result: string,
		public ip: string
	){}
}
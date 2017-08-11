export class Transaction {
	constructor(
		public _id?: string,
		public flag?: string,
		public date?: Date,
		public payee?: string,
		public category?: number,
		public memo?: string,
		public value?: number,
		public cleared?: boolean,
		public unique_id?: string,
		public account_id?: string,
		public checked?: boolean,
	) { }
}
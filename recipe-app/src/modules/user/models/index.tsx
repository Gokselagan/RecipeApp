export interface RegistrationFormProps {
	open: boolean;
	setOpen(open: boolean): void;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
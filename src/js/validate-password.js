import Validator from 'joi';
console.log("Validator:", Validator)

const passSchema = Validator.string().min(3).max(10);

export default function validatePassword(password) {
     return passSchema.validate(password);
}

export const x = 5;
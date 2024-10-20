import { ObjectSchema } from "yup";

type SchemaType<T extends object> = ObjectSchema<T>;

export default SchemaType;
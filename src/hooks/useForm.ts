import { ChangeEvent, useState } from "react";


type TInitialValues = { name: string; email: string; message: string; };


export const useForm = ( initialValues : TInitialValues) => {

    const [form, setForm] = useState(initialValues);


    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    }

    const reset = () => {
        setForm(initialValues);
    }

    return { ...form, reset, handleInputChange };
}
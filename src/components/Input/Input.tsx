import styles from './Input.module.css'

type InputProps = {
    id: string
} & React.ComponentProps<'input'>

export function Input({ type, id }: InputProps) {
    return (
        <>
            <label
                htmlFor={id}
            >
                Task
            </label>

            <input
                type={type}
                name=""
                id={id}
            />
        </>
    )
}
import styles from './Input.module.css'

type InputProps = {
    label?: string,
    id: string,
} & React.ComponentProps<'input'>

export function Input({ label, id, ...props }: InputProps) {
    return (
        <>
            {label &&
                <label
                    htmlFor={id}
                >
                    {label}
                </label>
            }

            <input
                className={styles.input}
                id={id}
                {...props}
            />
        </>
    )
}
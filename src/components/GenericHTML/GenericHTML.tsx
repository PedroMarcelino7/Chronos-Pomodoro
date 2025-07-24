import styles from './GenericHTML.module.css'

type GenericHTMLProps = {
    children: React.ReactNode
}

export function GenericHTML({ children }: GenericHTMLProps) {
    return (
        <div className={styles.genericHtml}>
            {children}
        </div>
    )
}
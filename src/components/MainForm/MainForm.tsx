import styles from './MainForm.module.css'

import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { Input } from "../Input/Input";

export function MainForm() {
    return (
        <form className={styles.form} action="">
            <div className={styles.formRow}>
                <Input
                    label='Task'
                    type='text'
                    id='input'
                    placeholder='Digite algo...'
                />
            </div>

            <div className={styles.formRow}>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className={styles.formRow}>
                <Cycles />
            </div>

            <div className={styles.formRow}>
                <Button
                    icon={<PlayCircleIcon />}
                />
            </div>
        </form>
    )
}
import styles from './Menu.module.css'

import { useState, useEffect } from 'react'

import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'

type Theme = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<Theme>(() => {
        return localStorage.getItem('theme') as Theme || 'dark'
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()

        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a
                href=""
                className={styles.menuLink}
                aria-label='Home'
                title='Home'
            >
                <HouseIcon />
            </a>

            <a
                href=""
                className={styles.menuLink}
                aria-label='History'
                title='History'
            >
                <HistoryIcon />
            </a>

            <a
                href=""
                className={styles.menuLink}
                aria-label='Settings'
                title='Settings'
            >
                <SettingsIcon />
            </a>

            <a
                href=""
                className={styles.menuLink}
                aria-label='Theme'
                title='Theme'
                onClick={(e) => handleThemeChange(e)}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}
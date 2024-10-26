import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useGlobalState } from '../context/darkMode'

export const Seccion2 = () => {

    const [enabled, setEnabled] = useState(false)
    const { modoDark, modoWhite } = useGlobalState()

    useEffect(() => {
        if (enabled === true) modoDark()
        else modoWhite()
    }, [enabled])


    return (
        <div className="bg-cyan-500 rounded-lg flex justify-center items-center max-md:h-[300px]">
            <div className="py-16">
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}>
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
        </div>
    )
}

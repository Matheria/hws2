import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = s.button
    //     // + (disabled
    //     //         ? ...
    //     //         : xType === 'red'
    //     //             ? ...
    //     + (className ? ' ' + className : '') // задачка на смешивание классов

    let typeClass = s.default // базовый класс по умолчанию

    if (disabled) {
        typeClass = s.disabled
    } else if (xType === 'red') {
        typeClass = s.red
    } else if (xType === 'secondary') {
        typeClass = s.secondary
    }

    const finalClassName = `${s.button} ${typeClass}${className ? ' ' + className : ''}`

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton

import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                height: 4,
                padding: '13px 0',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    opacity: 1,
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-track': {
                    border: 'none',
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                    boxShadow: 'none',
                    '&::before': {
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        boxShadow: 'none',
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: '0 0 0 6px rgba(0, 204, 34, 0.16)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

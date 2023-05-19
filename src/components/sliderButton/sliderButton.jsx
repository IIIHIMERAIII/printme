import { SliderBtn, SliderBtnSvg } from "./styled"

export const SliderButton = ({onClick, icon, label}) => {
    return (
        <>
        <SliderBtn onClick={onClick} aria-label={label}>
            <SliderBtnSvg>
                    <use href={icon} />
            </SliderBtnSvg>
        </SliderBtn>
        </>
    )
}
import { SliderBtn, SliderBtnSvg } from "./styled"

export const SliderButton = ({onClick, icon}) => {
    return (
        <>
        <SliderBtn onClick={onClick}>
            <SliderBtnSvg>
                    <use href={icon} />
            </SliderBtnSvg>
        </SliderBtn>
        </>
    )
}
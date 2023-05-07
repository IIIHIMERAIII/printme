export const TabButton = ({ text, onClick }) => {
    return (
        <>
            <button className="custom_btn"
                onClick={onClick}
            >    
                <span>{text}</span>   
        </button>
        </>
    )
}
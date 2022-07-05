
const SectionItem = ({t1,t2,t3,t4}) => {
    return (
        <div>
            <div className='first'>
            <div className='second'>
                <div className='change'> {t1} </div>
                <div> | </div>
                <div> {t2} </div>
                <div> | </div>
                <div> {t3} </div>
            </div>
            <div> {t4} </div> 
            </div>
        </div>
    )
}

export default SectionItem

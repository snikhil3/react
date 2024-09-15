function Time()
{
    let t=new Date();
    return (
        <><p>This is the current date and time </p>
            <p class="text-primary-emphasis">Date : {t.toLocaleDateString()}</p>
            <p>Time : {t.toLocaleTimeString()}</p>
        </>
       

    )
}
export default Time;
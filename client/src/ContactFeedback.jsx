import ContactUs from "./ContactUs"
import Feedback from "./Feedback"

export default function ContactFeedback({ isAuth }){
    return(
        <>
            <div className="container my-5 pt-5">
                <div className="row justify-content-center mt-5">
                    <ContactUs />
                    <Feedback isAuth={isAuth} />
                </div>
            </div>
        </>
    )
}
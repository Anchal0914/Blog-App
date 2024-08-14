import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export function Signin () {
    return (
        <>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <Auth type="Sign in"/>
                </div>
                <div className="invisible lg:visible">
                    <Quote/>
                </div>
            </div>
        </>
    )
}
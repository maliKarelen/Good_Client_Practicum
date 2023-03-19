import { store } from "./store/store"
import { useSelector} from "react-redux"


function AddChild(props) {
    const user2=useSelector(state => state.user);


    function updateStore(func, e) {
        console.log("i" + props.index)
        store.dispatch({ type: func, payload: { i: props.index, e: e.target.value } })

    }

    return (
        <>
            <div id="child">
                <p id="ch">Child {props.index + 1}:  </p>
                <div>
                    <label>Identity </label>
                    <input minLength={9} maxLength={9} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} required type="text" placeholder={user2.childrenOfUser[props.index].tz} onChange={(e) => { updateStore("updateIdChild", e) }} className="form-control" aria-label="First name"></input>
                </div>
                <div>
                    <label>Name </label>

                    <input required type="text" placeholder={user2.childrenOfUser[props.index].name} onChange={(e) => { updateStore("updateNameChild", e) }} className="form-control" aria-label="First name"></input>
                </div>
                <div>
                    <label>Birth Date </label>
                    <input required type="date" placeholder={user2.childrenOfUser[props.index].birthDate} onChange={(e) => { updateStore("updateNameBirthDateChild", e) }} className="form-control" aria-label="First name"></input>
                </div>

            </div>

        </>

    )
}
export default AddChild

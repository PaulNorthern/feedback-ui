import {useContext, useState} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

    const {addFeedback} = useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value)

        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            addFeedback(newFeedback);

            setText('');
        }
    }

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>Please, Rate Us:</h2>

                    <RatingSelect select={(rating) => setRating(rating)}/>

                    <div className="input-group">
                        <input
                            onChange={handleTextChange}
                            type="text"
                            placeholder='Write review'
                            value={text}
                        />
                        <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                    </div>

                    {message && <div className="message">{message}</div>}
                </form>
            </Card>
        </div>
    );
}

export default FeedbackForm;
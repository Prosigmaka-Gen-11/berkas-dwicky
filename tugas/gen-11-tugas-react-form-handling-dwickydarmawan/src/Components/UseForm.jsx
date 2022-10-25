import { useState } from "react";

export default function UseForm(data) {
    const [inputData, setInputData] = useState(data)

    function handleInputData(evt, propName) {
        setInputData({ ...inputData, [propName]: evt.target.value })
    }

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        const { genre } = inputData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setInputData({
                genre: [...genre, value],
            });
        }

        else {
            setInputData({
                genre: genre.filter((e) => e !== value),
            });
        }
    }





    return {
        inputData,
        setInputData,
        handleInputData,
        handleCheckbox
    }
}
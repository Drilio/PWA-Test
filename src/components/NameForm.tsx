import {ChangeEvent, useCallback, useMemo, useState} from "react";

export default function NameForm() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const upperCaseCoolor = useMemo(()=>{
        return color.toUpperCase();
    },[color])
    
    const handleSubmitNameField = useCallback((event:ChangeEvent<HTMLInputElement>)=>{
        const nameToChange = event.target.value;
        setName(nameToChange);
    },[name]);

    const handleSubmitColorField = useCallback((event:ChangeEvent<HTMLInputElement>)=>{
        const colorToChange = event.target.value;
        setColor(colorToChange);
    },[color]);

    return(
        <>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleSubmitNameField}required />
                <p>{name}</p>
                    <input type="color" onChange={handleSubmitColorField} />
                <p>{upperCaseCoolor}</p>
            </form>
        </>
    )
}

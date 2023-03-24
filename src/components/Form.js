import React, { useState } from "react";

const INIT_FORM = {
    title: '',
    timeZone: '',
}

export default function Form ({ onAdd }) {
    const [form, setForm] = useState(INIT_FORM);

    const handlerChange = (e) => {
        const { target } = e;
        setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }

    const handlerAdd = (e) => {
        e.preventDefault();
        if (!form.title || form.timeZone < -12 || form.timeZone > 12) return;
        onAdd(form);
        setForm(INIT_FORM);
    }

    return (
        <form className="form">
            <div>
                <label htmlFor="title">Название</label>
                <input className="inp" name="title" onChange={ handlerChange } value={ form.title }></input>
            </div>
            <div>
                <label htmlFor="timeZone">Временная зона</label>
                <input className="inp" type="number" name="timeZone" onChange={ handlerChange } value={ form.timeZone }></input>
            </div>
            <button className="btn" onClick={ handlerAdd }>Добавить</button>
        </form>

    )
}